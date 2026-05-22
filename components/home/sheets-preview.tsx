import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, X, Thermometer, Star, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getSheetsByRank } from '@/lib/sheets'

function WashTempBadge({ temp }: { temp: number }) {
  const cls =
    temp >= 60
      ? 'bg-green-100 text-green-700 border-green-200'
      : temp >= 40
        ? 'bg-amber-100 text-amber-700 border-amber-200'
        : 'bg-red-100 text-red-700 border-red-200'
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-semibold border ${cls}`}>
      <Thermometer className="w-3 h-3" />
      {temp}°C
    </span>
  )
}

export function SheetsPreview() {
  const top3 = getSheetsByRank().slice(0, 3)

  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-emerald-200 mb-3">
              Nowość — test redakcji
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
              Top 3 prześcieradła 2026
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Porównaliśmy 5 popularnych prześcieradeł z gumką. Bawełna czy poliester?
              Sprawdź, który materiał wygrywa pod kątem higieny i trwałości.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 self-start sm:self-auto">
            <Link href="/ranking-przescieradel">
              Pełny ranking
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3 mb-8">
          {top3.map((sheet, index) => (
            <div
              key={sheet.id}
              className={`rounded-xl border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                index === 0 ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-border'
              }`}
            >
              {/* Top strip */}
              {index === 0 && (
                <div className="bg-emerald-600 px-4 py-1.5 flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">Wybór redakcji</span>
                </div>
              )}

              <div className="p-5">
                {/* Image + rank */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                    <Image
                      src={sheet.image}
                      alt={`${sheet.brand} ${sheet.name}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                          index === 0
                            ? 'bg-emerald-500 text-white'
                            : index === 1
                              ? 'bg-slate-400 text-white'
                              : 'bg-amber-500 text-white'
                        }`}
                      >
                        {sheet.rank}
                      </span>
                      {sheet.materialType === 'cotton' ? (
                        <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">Bawełna</Badge>
                      ) : (
                        <Badge className="bg-slate-100 text-slate-600 border-0 text-xs">Poliester</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{sheet.brand}</p>
                    <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2">{sheet.name}</h3>
                  </div>
                </div>

                {/* Key specs row */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <WashTempBadge temp={sheet.washTemp} />
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-semibold border bg-muted text-muted-foreground border-border">
                    {sheet.gramatura} g/m²
                  </span>
                  {sheet.oekotex && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-semibold border bg-emerald-50 text-emerald-700 border-emerald-200">
                      <Check className="w-3 h-3" /> Oeko-Tex®
                    </span>
                  )}
                  {sheet.hypoallergenic ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-semibold border bg-green-50 text-green-700 border-green-200">
                      <Check className="w-3 h-3" /> Antyalerg.
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs font-semibold border bg-slate-50 text-slate-500 border-slate-200">
                      <X className="w-3 h-3" /> Nie antyalerg.
                    </span>
                  )}
                </div>

                {/* Score + Price */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-bold text-xl text-foreground">{sheet.score.toFixed(1)}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground">
                      {sheet.price % 1 === 0 ? `${sheet.price} zł` : `${sheet.price.toFixed(2)} zł`}
                    </div>
                    <div className="text-xs text-muted-foreground">90×200 cm</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link href="/ranking-przescieradel">
              Zobacz pełny ranking prześcieradeł
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/porownaj-przescieradel">
              <Scale className="mr-2 h-4 w-4" />
              Porównaj prześcieradła
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
