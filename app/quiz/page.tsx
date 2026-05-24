'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles, Check, User, Moon, Heart, Wallet, ThermometerSun, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { mattresses, type Mattress } from '@/lib/mattresses'

interface Question {
  id: string
  question: string
  icon: React.ReactNode
  options: {
    label: string
    value: string
    description?: string
  }[]
}

const questions: Question[] = [
  {
    id: 'position',
    question: 'W jakiej pozycji najczęściej śpisz?',
    icon: <Moon className="w-5 h-5" />,
    options: [
      { label: 'Na plecach', value: 'back', description: 'Potrzebujesz średniej twardości i dobrego podparcia lędźwi' },
      { label: 'Na boku', value: 'side', description: 'Lepiej sprawdzi się nieco miększy materac dla barków i bioder' },
      { label: 'Na brzuchu', value: 'stomach', description: 'Polecamy twardszy materac by uniknąć nadmiernego ugięcia' },
      { label: 'Mieszane pozycje', value: 'mixed', description: 'Materac o średniej twardości z dobrą elastycznością' },
    ]
  },
  {
    id: 'weight',
    question: 'Jaka jest Twoja waga ciała?',
    icon: <User className="w-5 h-5" />,
    options: [
      { label: 'Poniżej 60 kg', value: 'light', description: 'Miększy materac zapewni Ci lepszy komfort i dopasowanie' },
      { label: '60-80 kg', value: 'medium', description: 'Średnia twardość i gęstość pianki będą odpowiednie' },
      { label: '80-100 kg', value: 'heavy', description: 'Twardszy materac z gęstszą pianką (35+ kg/m³) zapewni lepsze podparcie' },
      { label: 'Powyżej 100 kg', value: 'very_heavy', description: 'Konieczna wysoka gęstość pianki (40+ kg/m³) dla trwałości i wsparcia' },
    ]
  },
  {
    id: 'problems',
    question: 'Czy masz problemy z kręgosłupem lub stawami?',
    icon: <Activity className="w-5 h-5" />,
    options: [
      { label: 'Nie mam żadnych problemów', value: 'none' },
      { label: 'Ból dolnego odcinka pleców', value: 'back_pain', description: 'Wymagane solidne podparcie lędźwi - priorytet wysoki support score' },
      { label: 'Ból szyi i karku', value: 'neck_pain', description: 'Ważna jest prawidłowa twardość i brak nadmiernego ugięcia' },
      { label: 'Bóle stawów / inne', value: 'other', description: 'Polecamy materace z pianką memory dla odciążenia stawów' },
    ]
  },
  {
    id: 'temperature',
    question: 'Czy masz tendencję do pocenia się w nocy?',
    icon: <ThermometerSun className="w-5 h-5" />,
    options: [
      { label: 'Nie, śpię komfortowo', value: 'normal' },
      { label: 'Czasami bywa mi ciepło', value: 'warm', description: 'Rozważ materac z dobrą cyrkulacją powietrza' },
      { label: 'Tak, często mocno się pocę', value: 'hot', description: 'Unikaj gęstych pianek memory, szukaj pianek HR z wentylacją' },
    ]
  },
  {
    id: 'partner',
    question: 'Czy śpisz z partnerem/partnerką?',
    icon: <Heart className="w-5 h-5" />,
    options: [
      { label: 'Śpię sam/sama', value: 'alone' },
      { label: 'Tak, razem z partnerem', value: 'partner', description: 'Ważna izolacja ruchu - pianki memory lub pianka HR w wyższej gęstości' },
      { label: 'Różnie bywa', value: 'sometimes' },
    ]
  },
  {
    id: 'budget',
    question: 'Jaki jest Twój budżet na materac?',
    icon: <Wallet className="w-5 h-5" />,
    options: [
      { label: 'Do 1000 zł', value: 'low', description: 'Modele budżetowe - IKEA, Matinee' },
      { label: '1000-2000 zł', value: 'medium', description: 'Świetny stosunek jakości do ceny - Bett1, Janpol, JYSK' },
      { label: '2000-4000 zł', value: 'high', description: 'Materace premium - Hilding, TEMPUR' },
      { label: 'Powyżej 4000 zł', value: 'premium', description: 'Luksus bez kompromisów' },
    ]
  },
  {
    id: 'trial',
    question: 'Jak ważny jest dla Ciebie okres testowy?',
    icon: <Sparkles className="w-5 h-5" />,
    options: [
      { label: 'Musi być zwrot pieniędzy', value: 'refund_required', description: 'Tylko Bett1 oferuje pełny zwrot gotówki w okresie testowym' },
      { label: 'Wystarczy możliwość wymiany', value: 'exchange_ok', description: 'JYSK, IKEA i Janpol oferują wymianę na inny materac' },
      { label: 'Nie jest dla mnie ważny', value: 'not_important' },
    ]
  },
]

// ---- Scoring engine ----
function scoreForAnswers(mattress: Mattress, answers: Record<string, string>): number {
  let score = mattress.score * 10 // base: 0-100

  // 1. BUDGET MATCH
  const budget = answers.budget
  const price = mattress.price
  if (budget === 'low') {
    if (price <= 1000) score += 20
    else if (price <= 1500) score += 5
    else score -= 25
  } else if (budget === 'medium') {
    if (price > 1000 && price <= 2000) score += 20
    else if (price <= 1000 || price <= 2500) score += 5
    else score -= 20
  } else if (budget === 'high') {
    if (price > 2000 && price <= 4000) score += 20
    else if (price > 1500) score += 5
    else score -= 10
  } else if (budget === 'premium') {
    if (price > 3000) score += 20
    else score -= 5
  }

  // 2. BACK PROBLEMS → support score
  const problems = answers.problems
  if (problems === 'back_pain') {
    score += mattress.scores.support >= 9.0 ? 15 : mattress.scores.support >= 8.5 ? 8 : 0
  } else if (problems === 'neck_pain') {
    // medium firmness (4-6) is better
    score += mattress.firmness >= 4 && mattress.firmness <= 7 ? 10 : 0
  } else if (problems === 'other') {
    // memory foam bonus - TEMPUR has best comfort
    score += mattress.scores.comfort >= 9.0 ? 12 : mattress.scores.comfort >= 8.0 ? 6 : 0
  }

  // 3. WEIGHT → foam density
  const weight = answers.weight
  const density = parseInt(mattress.specs.foamDensity) || 0
  if (weight === 'very_heavy') {
    if (density >= 40) score += 18
    else if (density >= 35) score += 8
    else score -= 10
    score += mattress.scores.support >= 9.0 ? 10 : 0
  } else if (weight === 'heavy') {
    if (density >= 35) score += 12
    else if (density >= 30) score += 5
    else score -= 5
  } else if (weight === 'light') {
    // lighter people benefit from softer, no need for high density
    if (price <= 1500) score += 5
  }

  // 4. TEMPERATURE → avoid pure memory foam for hot sleepers
  const temperature = answers.temperature
  if (temperature === 'hot') {
    // TEMPUR memory is bad for hot sleepers
    if (mattress.id === 'tempur-ease-20') score -= 15
    // HR foam is generally more breathable
    if (density > 0 && density <= 45) score += 5
  }

  // 5. PARTNER → motion isolation
  const partner = answers.partner
  if (partner === 'partner') {
    // memory foam = better isolation
    if (mattress.id === 'tempur-ease-20') score += 10
    // high score comfort usually means good isolation
    score += mattress.scores.comfort >= 9.0 ? 8 : mattress.scores.comfort >= 8.0 ? 4 : 0
  }

  // 6. SLEEP POSITION
  const position = answers.position
  if (position === 'stomach') {
    // stomach sleepers need firmness
    score += mattress.firmness >= 6 ? 10 : mattress.firmness <= 4 ? -8 : 0
  } else if (position === 'side') {
    // side sleepers need pressure relief
    score += mattress.scores.comfort >= 8.5 ? 10 : 0
    score += mattress.firmness <= 6 ? 5 : -5
  } else if (position === 'back') {
    score += mattress.scores.support >= 8.5 ? 8 : 0
  }

  // 7. TRIAL PREFERENCE
  const trial = answers.trial
  if (trial === 'refund_required') {
    if (mattress.specs.trialType === 'refund') score += 25
    else if (mattress.specs.trialType === 'exchange') score -= 10
    else score -= 25
  } else if (trial === 'exchange_ok') {
    if (mattress.specs.trialType === 'refund') score += 15
    else if (mattress.specs.trialType === 'exchange') score += 10
    else score -= 8
  } else {
    // not_important - still small bonus for refund
    if (mattress.specs.trialType === 'refund') score += 5
  }

  return score
}

function getReasonText(mattress: Mattress, answers: Record<string, string>): string {
  const reasons: string[] = []

  if (answers.trial === 'refund_required' && mattress.specs.trialType === 'refund') {
    reasons.push('jedyny z pełnym zwrotem pieniędzy')
  }
  if (answers.budget === 'medium' && mattress.price > 1000 && mattress.price <= 2000) {
    reasons.push('idealnie w Twoim budżecie')
  }
  if (answers.problems === 'back_pain' && mattress.scores.support >= 9.0) {
    reasons.push('doskonałe podparcie kręgosłupa')
  }
  const density = parseInt(mattress.specs.foamDensity) || 0
  if ((answers.weight === 'heavy' || answers.weight === 'very_heavy') && density >= 35) {
    reasons.push(`wysoka gęstość pianki ${density} kg/m³`)
  }
  if (answers.position === 'side' && mattress.scores.comfort >= 8.5) {
    reasons.push('świetny komfort dla śpiących na boku')
  }

  if (reasons.length === 0) {
    reasons.push(`wysoka ocena ogólna ${mattress.score}/10`)
  }

  return reasons.slice(0, 2).join(', ')
}

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const progress = (currentStep / questions.length) * 100

  const handleAnswer = (value: string) => {
    const question = questions[currentStep]
    const newAnswers = { ...answers, [question.id]: value }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const restart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const recommendations = useMemo(() => {
    if (!showResults) return []

    return mattresses
      .map(mattress => ({ mattress, score: scoreForAnswers(mattress, answers) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ mattress }) => mattress)
  }, [showResults, answers])

  if (showResults) {
    return (
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Twoje rekomendacje
              </h1>
              <p className="text-muted-foreground text-lg">
                Na podstawie Twoich {Object.keys(answers).length} odpowiedzi dopasowaliśmy dla Ciebie najlepsze materace
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {recommendations.map((mattress, index) => (
                <Card
  key={mattress.id}
  className={`relative overflow-visible pt-6 ${
    index === 0 ? 'ring-2 ring-primary md:scale-105 z-10' : ''
  }`}
>
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-primary-foreground gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" />
                        Najlepszy dla Ciebie
                      </Badge>
                    </div>
                  )}
                  {/* Mattress image */}
                  <div className="relative h-40 bg-muted">
                    <Image
                      src={mattress.image}
                      alt={`Materac ${mattress.brand} ${mattress.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">#{mattress.rank} w rankingu</Badge>
                    </div>
                  </div>

                  <CardHeader className="text-center pb-2 pt-4">
                    <div className="text-sm text-muted-foreground">{mattress.brand}</div>
                    <CardTitle className="text-xl">{mattress.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-3 bg-secondary/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">{mattress.score}</div>
                      <div className="text-sm text-muted-foreground">Ocena ogólna</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold">{mattress.price.toLocaleString('pl-PL')} zł</div>
                      {mattress.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{mattress.originalPrice} zł</div>
                      )}
                    </div>

                    {/* Why recommended */}
                    <div className="text-xs text-center px-2 py-2 bg-primary/5 rounded-lg text-primary font-medium">
                      Dlaczego pasuje: {getReasonText(mattress, answers)}
                    </div>

                    <div className="space-y-1 text-sm">
                      {mattress.pros.slice(0, 5).map((pro, i) => (
                        <div key={i} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/recenzje/${mattress.id}`}>Recenzja</Link>
                      </Button>
                      <Button asChild size="sm">
                        <a href={mattress.url} target="_blank" rel="noopener noreferrer">
                          Sprawdź cenę
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 space-y-4">
              <Button variant="outline" onClick={restart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Wypełnij quiz ponownie
              </Button>
              <div className="flex justify-center gap-4">
                <Link href="/porownaj" className="text-sm text-primary hover:underline">
                  Porównaj te materace
                </Link>
                <Link href="/ranking" className="text-sm text-primary hover:underline">
                  Zobacz pełny ranking
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const currentQuestion = questions[currentStep]

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Znajdź idealny materac
            </h1>
            <p className="text-muted-foreground text-lg">
              Odpowiedz na {questions.length} pytań, a nasz algorytm dobierze najlepszy materac do Twoich potrzeb
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Pytanie {currentStep + 1} z {questions.length}</span>
              <span>{Math.round(progress)}% ukończono</span>
            </div>
            <Progress value={progress} className="h-2" />

            {/* Step dots */}
            <div className="flex justify-center gap-2 mt-3">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i < currentStep
                      ? 'bg-primary'
                      : i === currentStep
                      ? 'bg-primary w-4'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {currentQuestion.icon}
                </div>
                <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:border-primary hover:bg-primary/5 ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border'
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-muted-foreground mt-1">{option.description}</div>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={goBack}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Wstecz
            </Button>
            <Button
              variant="ghost"
              onClick={restart}
              className="gap-2 text-muted-foreground"
            >
              <RotateCcw className="w-4 h-4" />
              Zacznij od nowa
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
