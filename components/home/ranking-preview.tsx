import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Star,
  ExternalLink,
  Check,
  WashingMachine,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

import { getMattressesByRank } from '@/lib/mattresses'

export function RankingPreview() {
  const topMattresses = getMattressesByRank().slice(0, 3)

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Top 3 materace 2026
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Najlepiej ocenione materace w naszym teście pod względem komfortu,
            trwałości, warunków zwrotu i opłacalności.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {topMattresses.map((mattress, index) => (
            <Card
              key={mattress.id}
              className={`
                relative overflow-hidden border transition-all duration-300
                hover:shadow-xl hover:-translate-y-1 hover:border-primary/40
                ${
                  index === 0
                    ? 'border-primary/40 bg-primary/5 ring-1 ring-primary/20'
                    : ''
                }
              `}
            >
              {/* TOP #1 ribbon */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground border-0">
                    🏆 Wybór redakcji
                  </Badge>
                </div>
              )}

              <CardContent className="p-6">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted mb-5">
                  <Image
                    src={mattress.image}
                    alt={`${mattress.brand} ${mattress.name}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Rank + score */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`
                      w-11 h-11 rounded-full flex items-center justify-center
                      font-bold text-lg
                      ${
                        index === 0
                          ? 'bg-primary text-primary-foreground'
                          : index === 1
                            ? 'bg-slate-400 text-white'
                            : index === 2
                              ? 'bg-amber-600 text-white'
                              : 'bg-muted text-muted-foreground'
                      }
                    `}
                  >
                    {mattress.rank}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />

                    <span className="font-bold text-xl text-foreground">
                      {mattress.score.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Brand + title */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    {mattress.brand}
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {mattress.name}
                  </h3>

<div className="flex items-center gap-2 flex-wrap mb-3">
  <Badge variant="secondary" className="text-xs">
    {mattress.specs.warranty} gwarancji
  </Badge>

  {mattress.specs.trialType === 'refund' && (
    <Badge className="bg-green-600 text-white border-0 text-xs">
      Okres testowy z pełnym zwrotem pieniędzy
    </Badge>
  )}

    {mattress.specs.trialType === 'none' && (
    <Badge className="bg-red-600 text-white border-0 text-xs">
      Brak okresu testowego
    </Badge>
  )}

  {mattress.specs.trialType === 'exchange' && (
    <Badge className="bg-amber-600 text-white border-0 text-xs">
      Okres testowy tylko z wymianą materaca
    </Badge>
  )}
</div>

<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
  <WashingMachine className="w-4 h-4 shrink-0" />
  <span>
    Pokrowiec można prać w{' '}
    <span className="font-medium text-foreground">
      {mattress.specs.washTemp}°C
    </span>
  </span>
</div>

                  <p className="text-3xl font-bold text-primary">
                    {mattress.price} zł
                  </p>
                </div>

                {/* Verdict */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-5">
                  {mattress.verdict}
                </p>

                {/* Quick pros */}
                <div className="space-y-2 mb-5">
                  {mattress.pros.slice(0, 2).map((pro, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />

                      <span className="text-muted-foreground">
                        {pro}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Biggest con */}
                <div className="rounded-lg bg-red-50 border border-red-100 p-3 mb-5">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />

                    <p className="text-sm text-red-700 line-clamp-2">
                      {mattress.cons[0]}
                    </p>
                  </div>
                </div>

                {/* Mini scores */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">
                        Komfort
                      </span>

                      <span className="font-medium">
                        {mattress.scores.comfort.toFixed(1)}
                      </span>
                    </div>

                    <Progress
                      value={mattress.scores.comfort * 10}
                      className="h-2"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">
                        Trwałość
                      </span>

                      <span className="font-medium">
                        {mattress.scores.durability.toFixed(1)}
                      </span>
                    </div>

                    <Progress
                      value={mattress.scores.durability * 10}
                      className="h-2"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1"
                  >
                    <Link href={`/recenzje/${mattress.id}`}>
                      Recenzja
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={mattress.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sprawdź cenę
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
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