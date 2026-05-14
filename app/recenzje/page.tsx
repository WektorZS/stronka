import { Metadata } from 'next'
import Link from 'next/link'
import { Star, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getMattressesByRank } from '@/lib/mattresses'

export const metadata: Metadata = {
  title: 'Recenzje materaców',
  description: 'Szczegółowe recenzje materaców piankowych. Poznaj zalety, wady i dla kogo przeznaczony jest każdy model.',
}

export default function RecenzjePage() {
  const mattresses = getMattressesByRank()

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recenzje materaców
          </h1>
          <p className="text-lg text-muted-foreground">
            Szczegółowe recenzje wszystkich przetestowanych materaców. Każda recenzja zawiera
            analizę specyfikacji, warunków zakupu oraz praktyczne wnioski.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {mattresses.map((mattress) => (
            <Card 
              key={mattress.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    mattress.rank === 1 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    #{mattress.rank}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold">{mattress.score.toFixed(1)}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">{mattress.brand}</p>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/recenzje/${mattress.id}`}>
                      {mattress.name}
                    </Link>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{mattress.price} zł</Badge>
                  <Badge variant="outline">{mattress.specs.warranty} gwarancji</Badge>
                  {mattress.specs.trialType === 'refund' && (
                    <Badge className="bg-green-100 text-green-700 border-0">
                      Zwrot pieniędzy
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {mattress.verdict}
                </p>

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link href={`/recenzje/${mattress.id}`}>
                      Czytaj recenzję
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <a href={mattress.url} target="_blank" rel="noopener noreferrer">
                      Kup
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
