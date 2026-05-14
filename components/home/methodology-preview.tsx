import Link from 'next/link'
import { ArrowRight, Bed, Shield, Coins, Clock, Sparkles, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'

const criteria = [
  {
    icon: Bed,
    name: 'Komfort',
    description: 'Ocena miękkości, dopasowania do ciała i ogólnych wrażeń z użytkowania.',
  },
  {
    icon: Scale,
    name: 'Podparcie',
    description: 'Analiza podparcia kręgosłupa i rozkładu nacisku na powierzchni materaca.',
  },
  {
    icon: Clock,
    name: 'Trwałość',
    description: 'Gęstość pianki i przewidywana żywotność produktu na podstawie specyfikacji.',
  },
  {
    icon: Coins,
    name: 'Stosunek ceny do jakości',
    description: 'Ocena czy cena jest adekwatna do oferowanych parametrów i warunków.',
  },
  {
    icon: Shield,
    name: 'Gwarancja',
    description: 'Długość i warunki gwarancji producenta.',
  },
  {
    icon: Sparkles,
    name: 'Okres testowy',
    description: 'Możliwość przetestowania materaca z opcją zwrotu lub wymiany.',
  },
]

export function MethodologyPreview() {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Jak testujemy materace?
          </h2>
          <p className="text-lg text-muted-foreground">
            Każdy materac oceniamy według 6 kluczowych kryteriów. Końcowa ocena to średnia ważona
            uwzględniająca znaczenie poszczególnych aspektów dla codziennego użytkowania.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {criteria.map((criterion) => (
            <div 
              key={criterion.name}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <criterion.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{criterion.name}</h3>
              <p className="text-sm text-muted-foreground">{criterion.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/metodologia">
              Poznaj pełną metodologię
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
