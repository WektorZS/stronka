import Link from 'next/link'
import { ArrowRight, Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getMattressesByRank } from '@/lib/mattresses'

export function RankingPreview() {
  const topMattresses = getMattressesByRank().slice(0, 3)

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Top 3 materace 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Najlepiej ocenione materace w naszym teście. Kliknij, aby poznać szczegóły.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {topMattresses.map((mattress, index) => (
            <Card 
              key={mattress.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index === 0 ? 'border-primary/50 bg-primary/5' : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Rank Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    index === 0 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {mattress.rank}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{mattress.score.toFixed(1)}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">{mattress.brand}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{mattress.name}</h3>
                  <p className="text-2xl font-bold text-primary">{mattress.price} zł</p>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Gwarancja: {mattress.specs.warranty}
                  </Badge>
                  {mattress.specs.trialType === 'refund' && (
                    <Badge variant="default" className="text-xs bg-green-600">
                      Zwrot pieniędzy
                    </Badge>
                  )}
                </div>

                {/* Verdict */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {mattress.verdict}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link href={`/recenzje/${mattress.id}`}>
                      Recenzja
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
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

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/ranking">
              Zobacz pełny ranking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
