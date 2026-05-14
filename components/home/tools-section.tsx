import Link from 'next/link'
import { Sparkles, Scale, Calculator, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tools = [
  {
    title: 'Quiz - znajdź materac',
    description: 'Odpowiedz na kilka pytań, a pomożemy Ci wybrać idealny materac dopasowany do Twoich potrzeb.',
    icon: Sparkles,
    href: '/quiz',
    color: 'bg-purple-500/10 text-purple-600',
    cta: 'Rozpocznij quiz',
  },
  {
    title: 'Porównywarka materaców',
    description: 'Porównaj do 3 materaców obok siebie. Sprawdź różnice w parametrach, ocenach i cenach.',
    icon: Scale,
    href: '/porownaj',
    color: 'bg-blue-500/10 text-blue-600',
    cta: 'Porównaj materace',
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
            Narzędzia pomocne przy wyborze
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skorzystaj z naszych interaktywnych narzędzi, które ułatwią Ci wybór idealnego materaca
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
