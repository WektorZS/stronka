import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  X,
  Thermometer,
  Star,
  Scale,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import { getSheetsByRank } from '@/lib/sheets'

function WashTempBadge({ temp }: { temp: number }) {
  const cls =
    temp >= 60
      ? 'bg-green-100 text-green-700 border-green-200'
      : temp >= 40
        ? 'bg-amber-100 text-amber-700 border-amber-200'
        : 'bg-red-100 text-red-700 border-red-200'

  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-semibold border ${cls}`}
    >
      <Thermometer className="w-3 h-3" />
      {temp}°C
    </span>
  )
}

export function SheetsPreview() {
  const top3 = getSheetsByRank().slice(0, 3)

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
              Top 3 prześcieradła 2026
            </h2>

            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Porównaliśmy najpopularniejsze prześcieradła pod względem
              trwałości, jakości materiału, higieny i komfortu snu.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="shrink-0 self-start sm:self-auto"
          >
            <Link href="/ranking-przescieradel">
              Pełny ranking
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {top3.map((sheet, index) => (
            <Card
              key={sheet.id}
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
              {/* TOP #1 */}
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
                    src={sheet.image}
                    alt={`${sheet.brand} ${sheet.name}`}
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
                            : 'bg-amber-600 text-white'
                      }
                    `}
                  >
                    {sheet.rank}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />

                    <span className="font-bold text-xl text-foreground">
                      {sheet.score.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    {sheet.brand}
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {sheet.name}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {sheet.materialType === 'cotton'
                        ? 'Bawełna'
                        : 'Poliester'}
                    </Badge>

                    <WashTempBadge temp={sheet.washTemp} />

                    <Badge variant="secondary" className="text-xs">
                      {sheet.gramatura} g/m²
                    </Badge>

                    {sheet.oekotex && (
                      <Badge className="bg-green-600 text-white border-0 text-xs">
                        Oeko-Tex®
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-bold text-primary">
                    {sheet.price % 1 === 0
                      ? `${sheet.price} zł`
                      : `${sheet.price.toFixed(2)} zł`}
                  </p>
                </div>

                {/* Pros */}
                <div className="space-y-2 mb-5">
                  {sheet.pros.slice(0, 2).map((pro, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />

                      <span className="text-muted-foreground">
                        {pro}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Cons */}
                <div className="rounded-lg bg-red-50 border border-red-100 p-3 mb-6">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />

                    <p className="text-sm text-red-700 line-clamp-2">
                      {sheet.cons[0]}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1"
                  >
                    <Link href={`/recenzje-przescieradel/${sheet.id}`}>
                      Recenzja
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={sheet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sprawdź cenę
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/ranking-przescieradel">
              Zobacz pełny ranking prześcieradeł
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/porownaj-przescieradla">
              <Scale className="mr-2 h-4 w-4" />
              Porównaj prześcieradła
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}