'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calculator, Info, TrendingUp, Clock, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { mattresses } from '@/lib/mattresses'

export default function CalculatorPage() {
  const [budget, setBudget] = useState([1500])
  const [years, setYears] = useState([10])
  const [hoursPerNight, setHoursPerNight] = useState([7])

  const calculations = useMemo(() => {
    const totalNights = years[0] * 365
    const totalHours = totalNights * hoursPerNight[0]
    const costPerNight = budget[0] / totalNights
    const costPerHour = budget[0] / totalHours

    return {
      totalNights,
      totalHours,
      costPerNight: costPerNight.toFixed(2),
      costPerHour: costPerHour.toFixed(2),
    }
  }, [budget, years, hoursPerNight])

const recommendedMattresses = useMemo(() => {
  // 1. filtr: tylko w budżecie
  const withinBudget = mattresses.filter(m => m.price <= budget[0] * 1.15)

  // 2. jeśli nic nie ma w budżecie → najtańsze
  if (withinBudget.length === 0) {
    return [...mattresses]
      .sort((a, b) => a.price - b.price)
      .slice(0, 3)
  }

  // 3. sortowanie WYŁĄCZNIE po overallScore (ranking strony)
  return withinBudget
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, 3)
}, [budget])

  const qualityTier = useMemo(() => {
    const b = budget[0]
    const count = mattresses.filter(m => m.price <= b).length
    if (b < 950) return { label: 'Podstawowy', color: 'bg-yellow-500', description: `${count} modeli do wyboru – dobre opcje tymczasowe` }
    if (b < 1400) return { label: 'Dobry', color: 'bg-green-500', description: `${count} modeli do wyboru – optymalny stosunek jakości do ceny` }
    if (b < 3400) return { label: 'Premium', color: 'bg-blue-500', description: `${count} modeli do wyboru – wysoka jakość materiałów` }
    return { label: 'Luksusowy', color: 'bg-indigo-500', description: `Wszystkie ${count} modeli dostępne – najwyższa jakość` }
  }, [budget])

  const budgetFeatures = useMemo(() => {
    const b = budget[0]
    const inBudget = mattresses.filter(m => m.price <= b)
    const features: string[] = []

    // Trial type
    const hasRefund = inBudget.some(m => m.specs.trialType === 'refund')
    const hasExchange = inBudget.some(m => m.specs.trialType === 'exchange')
    if (hasRefund) features.push('Okres testowy z pełnym zwrotem pieniędzy (tylko Bett1)')
    else if (hasExchange) features.push('Okres testowy, ale tylko z opcją wymiany na inny materac')

    // Warranty
    const maxWarrantyYears = Math.max(...inBudget.map(m => parseInt(m.specs.warranty) || 0))
    if (maxWarrantyYears >= 25) features.push(`Gwarancja nawet do ${maxWarrantyYears} lat (JYSK)`)
    else if (maxWarrantyYears >= 10) features.push(`Gwarancja do ${maxWarrantyYears} lat`)

    // Foam density
    const highDensity = inBudget.some(m => {
      const d = parseInt(m.specs.foamDensity) || 0
      return d >= 35
    })
    if (highDensity) features.push('Pianki o gęstości 35+ kg/m³')

    // Wash temp
    const washAt60 = inBudget.some(m => m.specs.washTemp >= 60)
    if (washAt60) features.push('Pokrowiec z możliwością prania w 60°C')

    // Count
    features.push(`${inBudget.length} z 10 materaców z rankingu`)

    return features
  }, [budget])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Kalkulator budżetu
              </h1>
              <p className="text-muted-foreground">
                Sprawdź ile naprawdę kosztuje dobry sen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Inputs */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Twój budżet</CardTitle>
                  <CardDescription>Ile chcesz przeznaczyć na materac?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Kwota</span>
                      <span className="text-2xl font-bold text-primary">{budget[0]} zł</span>
                    </div>
                    <Slider
                      value={budget}
                      onValueChange={setBudget}
                      min={200}
                      max={4000}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>200 zł</span>
                      <span>4000 zł</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${qualityTier.color}`} />
                    <span className="font-medium">{qualityTier.label}</span>
                    <span className="text-sm text-muted-foreground">= {qualityTier.description}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Planowany okres użytkowania</CardTitle>
                  <CardDescription>Jak długo chcesz używać materaca?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Liczba lat</span>
                      <span className="text-2xl font-bold text-primary">{years[0]} lat</span>
                    </div>
                    <Slider
                      value={years}
                      onValueChange={setYears}
                      min={1}
                      max={15}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>1 rok</span>
                      <span>15 lat</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    <span>Dobry materac powinien służyć 7-10 lat</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Godziny snu</CardTitle>
                  <CardDescription>Ile godzin śpisz średnio na dobę?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Godzin dziennie</span>
                      <span className="text-2xl font-bold text-primary">{hoursPerNight[0]} h</span>
                    </div>
                    <Slider
                      value={hoursPerNight}
                      onValueChange={setHoursPerNight}
                      min={4}
                      max={12}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>4 h</span>
                      <span>12 h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Twoje wyniki
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary">{calculations.costPerNight}</div>
                      <div className="text-sm text-muted-foreground">złotych za noc</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary">{calculations.costPerHour}</div>
                      <div className="text-sm text-muted-foreground">złotych za godzinę snu</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-foreground">{calculations.totalNights.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">nocy łącznie</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-foreground">{calculations.totalHours.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">godzin snu</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-card rounded-lg">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Perspektywa</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Za {calculations.costPerNight} zł dziennie zyskujesz {hoursPerNight[0]} godzin regeneracji.
                          To mniej niż filiżanka kawy, a sen to fundament Twojego zdrowia.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    Co zyskujesz w tym budżecie?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {budgetFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {recommendedMattresses.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Materace w Twoim budżecie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendedMattresses.map((mattress, index) => (
                        <div 
                          key={mattress.id}
                          className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                              {index + 1}
                            </Badge>
                            <div>
                              <div className="font-medium">{mattress.brand} {mattress.name}</div>
                              <div className="text-sm text-muted-foreground">Ocena: {mattress.score}/10</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{mattress.price} zł</div>
                            <Link 
                              href={`/recenzje/${mattress.id}`}
                              className="text-xs text-primary hover:underline"
                            >
                              Zobacz recenzję
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button asChild className="w-full">
                        <Link href="/ranking">
                          Zobacz pełny ranking
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
