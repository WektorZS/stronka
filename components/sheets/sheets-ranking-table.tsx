'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Star,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Thermometer,
  Layers,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { Sheet } from '@/lib/sheets'

interface SheetsRankingTableProps {
  sheets: Sheet[]
}

function WashTempBadge({ temp }: { temp: number }) {
  const color =
    temp >= 60
      ? 'bg-green-100 text-green-700 border-green-200'
      : temp >= 40
        ? 'bg-amber-100 text-amber-700 border-amber-200'
        : 'bg-red-100 text-red-700 border-red-200'

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${color}`}
    >
      <Thermometer className="w-3 h-3" />
      {temp}°C
    </span>
  )
}

function MaterialBadge({ type, material }: { type: Sheet['materialType']; material: string }) {
  return type === 'cotton' ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border bg-emerald-100 text-emerald-700 border-emerald-200">
      <Check className="w-3 h-3" />
      {material}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border bg-slate-100 text-slate-600 border-slate-200">
      <X className="w-3 h-3" />
      {material}
    </span>
  )
}

function GramaturaBadge({ gramatura, materialType }: { gramatura: number; materialType: Sheet['materialType'] }) {
  const color =
    gramatura >= 200
      ? 'text-emerald-700 font-bold'
      : gramatura >= 130
        ? 'text-amber-700 font-semibold'
        : 'text-red-700 font-semibold'
  return (
    <span className={`text-sm ${color}`}>
      {gramatura} g/m²
    </span>
  )
}

export function SheetsRankingTable({ sheets }: SheetsRankingTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <TooltipProvider>
      <div className="space-y-4">
        {sheets.map((sheet, index) => (
          <Card
            key={sheet.id}
            className={`overflow-hidden transition-all duration-300 ${
              index === 0 ? 'border-primary ring-1 ring-primary/20' : ''
            }`}
          >
            <CardContent className="p-0">
              {/* Winner badge strip */}
              {index === 0 && (
                <div className="bg-primary px-4 sm:px-6 py-1.5 flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 fill-primary-foreground text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground tracking-wide uppercase">
                    Najlepszy wybór redakcji
                  </span>
                </div>
              )}

              {/* Main row */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">

                  {/* Rank badge */}
                  <div className="shrink-0 lg:w-12">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg ${
                        index === 0
                          ? 'bg-primary text-primary-foreground'
                          : index === 1
                            ? 'bg-slate-400 text-white'
                            : index === 2
                              ? 'bg-amber-600 text-white'
                              : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {sheet.rank}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="shrink-0 w-20 h-20 rounded-lg bg-muted overflow-hidden relative hidden sm:block">
                    <Image
                      src={sheet.image}
                      alt={`Prześcieradło ${sheet.brand} ${sheet.name}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground">{sheet.brand}</span>
                      {sheet.oekotex && (
                        <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                          Oeko-Tex®
                        </Badge>
                      )}
                      {sheet.materialType === 'cotton' && (
                        <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                          Bawełna
                        </Badge>
                      )}
                      {sheet.materialType === 'polyester' && (
                        <Badge className="bg-slate-100 text-slate-600 border-0 text-xs">
                          Poliester
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{sheet.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{sheet.shortDescription}</p>
                  </div>

                  {/* Key specs pills - desktop */}
                  <div className="hidden xl:flex flex-col gap-2 shrink-0 min-w-[160px]">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Thermometer className="w-3.5 h-3.5 shrink-0" />
                      <span>Pranie:</span>
                      <WashTempBadge temp={sheet.washTemp} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Layers className="w-3.5 h-3.5 shrink-0" />
                      <span>Gramatura:</span>
                      <GramaturaBadge gramatura={sheet.gramatura} materialType={sheet.materialType} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>Antyalergen.:</span>
                      {sheet.hypoallergenic ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-red-500" />
                      )}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-bold text-2xl text-foreground">{sheet.score.toFixed(1)}</span>
                  </div>

                  {/* Price */}
                  <div className="shrink-0 lg:w-28 lg:text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {sheet.price % 1 === 0
                        ? `${sheet.price} zł`
                        : `${sheet.price.toFixed(2)} zł`}
                    </div>
                    <div className="text-xs text-muted-foreground">90x200 cm</div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedId(expandedId === sheet.id ? null : sheet.id)}
                      className="hidden sm:flex"
                    >
                      Szczegóły
                      {expandedId === sheet.id ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </Button>
                    <Button asChild size="sm">
                      <a href={sheet.url} target="_blank" rel="noopener noreferrer nofollow sponsored">
                        Kup
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Mobile expand */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedId(expandedId === sheet.id ? null : sheet.id)}
                  className="sm:hidden w-full mt-4"
                >
                  {expandedId === sheet.id ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
                  {expandedId === sheet.id ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Expanded details */}
              {expandedId === sheet.id && (
                <div className="border-t border-border bg-muted/30 p-4 sm:p-6 animate-fade-in">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Comparison specs */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Porównanie parametrów</h4>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between items-center gap-2">
                          <dt className="text-muted-foreground">Materiał</dt>
                          <dd><MaterialBadge type={sheet.materialType} material={sheet.material} /></dd>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <dt className="text-muted-foreground">Gramatura</dt>
                          <dd className="flex items-center gap-1.5">
                            <GramaturaBadge gramatura={sheet.gramatura} materialType={sheet.materialType} />
                          </dd>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <dt className="text-muted-foreground">Temp. prania</dt>
                          <dd><WashTempBadge temp={sheet.washTemp} /></dd>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <dt className="text-muted-foreground">Antyalergiczne</dt>
                          <dd>
                            {sheet.hypoallergenic ? (
                              <span className="text-green-600 flex items-center gap-1 text-xs font-medium">
                                <Check className="w-3.5 h-3.5" /> Tak
                              </span>
                            ) : (
                              <span className="text-muted-foreground flex items-center gap-1 text-xs">
                                <X className="w-3.5 h-3.5 text-red-500" /> Nie
                              </span>
                            )}
                          </dd>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <dt className="text-muted-foreground">Oeko-Tex® Std 100</dt>
                          <dd>
                            {sheet.oekotex ? (
                              <span className="text-green-600 flex items-center gap-1 text-xs font-medium">
                                <Check className="w-3.5 h-3.5" /> Certyfikat
                              </span>
                            ) : (
                              <span className="text-muted-foreground flex items-center gap-1 text-xs">
                                <X className="w-3.5 h-3.5 text-red-500" /> Brak
                              </span>
                            )}
                          </dd>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <dt className="text-muted-foreground">Elastan</dt>
                          <dd>
                            {sheet.elastan ? (
                              <span className="text-green-600 flex items-center gap-1 text-xs font-medium">
                                <Check className="w-3.5 h-3.5" /> Tak
                              </span>
                            ) : (
                              <span className="text-muted-foreground flex items-center gap-1 text-xs">
                                - Nie
                              </span>
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Pros */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Zalety</h4>
                      <ul className="space-y-2">
                        {sheet.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Wady</h4>
                      <ul className="space-y-2">
                        {sheet.cons.map((con, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5">
                        <p className="text-xs font-semibold text-foreground mb-1">Werdykt redakcji</p>
                        <p className="text-sm text-muted-foreground italic">{sheet.verdict}</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </TooltipProvider>
  )
}
