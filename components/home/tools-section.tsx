import Link from 'next/link'
import { Sparkles, Scale, Calculator, ArrowRight, Trophy } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tools = [
  {
    title: 'Ranking materaców 2026',
    description: 'Pełne porównanie 10 materaców piankowych według 6 kryteriów. Sprawdź, który materac wygrywa.',
    icon: Trophy,
    href: '/ranking',
    color: 'bg-primary/10 text-primary',
    cta: 'Zobacz ranking',
  },
  {
    title: 'Ranking prześcieradeł 2026',
    description: 'Top 5 prześcieradeł z gumką: bawełna vs poliester, gramatura, temperatura prania, certyfikaty.',
    icon: Scale,
    href: '/ranking-przescieradeł',
    color: 'bg-emerald-500/10 text-emerald-600',
    cta: 'Porównaj prześcieradła',
  },
  {
    title: 'Quiz – znajdź materac',
    description: 'Odpowiedz na kilka pytań, a pomożemy Ci wybrać idealny materac dopasowany do Twoich potrzeb.',
    icon: Sparkles,
    href: '/quiz',
    color: 'bg-purple-500/10 text-purple-600',
    cta: 'Rozpocznij quiz',
  },
  {
    title: 'Kalkulator budżetu',
    description: 'Skorzystaj z kalkulatora, aby sprawdzić, jakie cechy materaca zyskasz w swoim budżecie.',
    icon: Calculator,
    href: '/kalkulator',
    color: 'bg-green-500/10 text-green-600',
    cta: 'Oblicz budżet',
  },
]

export function ToolsSection() {
  return (
    <section className="py-16 sm:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Rankingi i narzędzia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sprawdź nasze rankingi i skorzystaj z interaktywnych narzędzi, które ułatwią Ci wybór idealnych produktów do sypialni
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card 
                key={tool.href} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-2`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link href={tool.href}>
                      {tool.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
