'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Plus,
  X,
  Check,
  Scale,
  ChevronDown,
  Thermometer,
  Layers,
  ShieldCheck,
  ExternalLink,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { sheets, type Sheet } from '@/lib/sheets'

const MAX_COMPARE = 3

export default function CompareSheetPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CompareSheetPageContent />
    </Suspense>
  )
}

function WashTempBadge({ temp }: { temp: number }) {
  const color =
    temp >= 60
      ? 'bg-green-100 text-green-700 border border-green-200'
      : temp >= 40
        ? 'bg-amber-100 text-amber-700 border border-amber-200'
        : 'bg-red-100 text-red-700 border border-red-200'
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>
      <Thermometer className="w-3 h-3" />
      {temp}°C
    </span>
  )
}

function GramaturaBadge({ gramatura }: { gramatura: number }) {
  const color =
    gramatura >= 200
      ? 'text-emerald-700 font-bold'
      : gramatura >= 130
        ? 'text-amber-700 font-semibold'
        : 'text-red-700 font-semibold'
  return <span className={`text-sm ${color}`}>{gramatura} g/m²</span>
}

function CompareSheetPageContent() {
  const searchParams = useSearchParams()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [initialised, setInitialised] = useState(false)

  useEffect(() => {
    if (initialised) return
    const param = searchParams.get('przescieradla')
    if (param) {
      const ids = param.split(',').filter(id => sheets.some(s => s.id === id)).slice(0, MAX_COMPARE)
      if (ids.length > 0) setSelectedIds(ids)
    }
    setInitialised(true)
  }, [searchParams, initialised])

  const selectedSheets = useMemo(
    () => selectedIds.map(id => sheets.find(s => s.id === id)).filter(Boolean) as Sheet[],
    [selectedIds],
  )

  const availableSheets = useMemo(
    () => sheets.filter(s => !selectedIds.includes(s.id)),
    [selectedIds],
  )

  const addSheet = (id: string) => {
    if (selectedIds.length < MAX_COMPARE && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id])
    }
  }

  const removeSheet = (id: string) => {
    setSelectedIds(selectedIds.filter(i => i !== id))
  }

  const getBestWashTemp = () =>
    selectedSheets.length ? Math.max(...selectedSheets.map(s => s.washTemp)) : null
  const getBestGramatura = () =>
    selectedSheets.length ? Math.max(...selectedSheets.map(s => s.gramatura)) : null
  const getLowestPrice = () =>
    selectedSheets.length ? Math.min(...selectedSheets.map(s => s.price)) : null

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-500/5 to-background py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/ranking-przescieradel"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do rankingu prześcieradeł
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Scale className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Porównywarka prześcieradeł
              </h1>
              <p className="text-muted-foreground">
                Wybierz do {MAX_COMPARE} prześcieradeł, aby porównać materiał, gramaturę,
                temperaturę prania i cenę
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection bar */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 items-center">
            {selectedSheets.map(sheet => (
              <Badge
                key={sheet.id}
                variant="secondary"
                className="pl-3 pr-2 py-2 text-sm flex items-center gap-2"
              >
                <span className="font-medium">{sheet.brand} {sheet.name}</span>
                <button
                  onClick={() => removeSheet(sheet.id)}
                  className="ml-1 p-0.5 rounded-full hover:bg-destructive/20 transition-colors"
                  aria-label={`Usuń ${sheet.brand}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </Badge>
            ))}

            {selectedIds.length < MAX_COMPARE && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Dodaj prześcieradło
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-72 max-h-80 overflow-y-auto">
                  {availableSheets.map(sheet => (
                    <DropdownMenuItem
                      key={sheet.id}
                      onClick={() => addSheet(sheet.id)}
                      className="cursor-pointer"
                    >
                      <div className="flex justify-between w-full gap-2">
                        <span className="truncate">{sheet.brand} {sheet.name}</span>
                        <span className="text-muted-foreground shrink-0 text-xs">
                          {sheet.price % 1 === 0 ? sheet.price : sheet.price.toFixed(2)} zł
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </section>

      {/* Main comparison */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {selectedSheets.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="py-16 text-center">
                <Scale className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wybierz prześcieradła do porównania</h3>
                <p className="text-muted-foreground mb-6">
                  Kliknij &quot;Dodaj prześcieradło&quot; powyżej, aby rozpocząć porównanie
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="gap-2">
                      <Plus className="w-4 h-4" />
                      Dodaj pierwsze prześcieradło
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-72 max-h-80 overflow-y-auto">
                    {sheets.map(sheet => (
                      <DropdownMenuItem
                        key={sheet.id}
                        onClick={() => addSheet(sheet.id)}
                        className="cursor-pointer"
                      >
                        <div className="flex justify-between w-full gap-2">
                          <span className="truncate">{sheet.brand} {sheet.name}</span>
                          <span className="text-muted-foreground shrink-0 text-xs">
                            {sheet.price % 1 === 0 ? sheet.price : sheet.price.toFixed(2)} zł
                          </span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {/* Cards grid */}
              <div
                className={`grid gap-6 ${
                  selectedSheets.length === 1
                    ? 'grid-cols-1 max-w-md'
                    : selectedSheets.length === 2
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedSheets.map(sheet => {
                  const isBestScore = sheet.score === Math.max(...selectedSheets.map(s => s.score))
                  const isLowestPrice = sheet.price === getLowestPrice()
                  const isBestTemp = sheet.washTemp === getBestWashTemp()
                  const isBestGram = sheet.gramatura === getBestGramatura()

                  return (
                    <Card
                      key={sheet.id}
                      className={`relative ${isBestScore ? 'ring-2 ring-primary' : ''}`}
                    >
                      {isBestScore && selectedSheets.length > 1 && (
                        <div className="absolute -top-3 left-4">
                          <Badge className="bg-primary text-primary-foreground gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Najlepsza ocena
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="min-w-0">
                            <p className="text-sm text-muted-foreground truncate">{sheet.brand}</p>
                            <CardTitle className="text-lg leading-snug">{sheet.name}</CardTitle>
                          </div>
                          <button
                            onClick={() => removeSheet(sheet.id)}
                            className="p-1.5 rounded-lg hover:bg-secondary transition-colors shrink-0"
                            aria-label="Usuń"
                          >
                            <X className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Image */}
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={sheet.image}
                            alt={`${sheet.brand} ${sheet.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Overall score */}
                        <div className="text-center py-3 bg-secondary/50 rounded-lg">
                          <div className="flex items-center justify-center gap-1.5">
                            <Star className="w-5 h-5 fill-primary text-primary" />
                            <span className="text-4xl font-bold text-primary">{sheet.score.toFixed(1)}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">Ocena ogólna</div>
                        </div>

                        {/* Price */}
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Cena 90x200</span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg">
                              {sheet.price % 1 === 0 ? `${sheet.price} zł` : `${sheet.price.toFixed(2)} zł`}
                            </span>
                            {isLowestPrice && selectedSheets.length > 1 && (
                              <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                                Najtańsze
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Key specs */}
                        <div className="space-y-3 text-sm">
                          {/* Material */}
                          <div className="flex justify-between items-center gap-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5" /> Materiał
                            </span>
                            <span>
                              {sheet.materialType === 'cotton' ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                                  <Check className="w-3 h-3" /> {sheet.material}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                                  <X className="w-3 h-3" /> {sheet.material}
                                </span>
                              )}
                            </span>
                          </div>

                          {/* Gramatura */}
                          <div className="flex justify-between items-center gap-2">
                            <span className="text-muted-foreground text-sm">Gramatura</span>
                            <div className="flex items-center gap-1.5">
                              <GramaturaBadge gramatura={sheet.gramatura} />
                              {isBestGram && selectedSheets.length > 1 && (
                                <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-300">
                                  Najwyższa
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Wash temp */}
                          <div className="flex justify-between items-center gap-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                              <Thermometer className="w-3.5 h-3.5" /> Pranie maks.
                            </span>
                            <div className="flex items-center gap-1.5">
                              <WashTempBadge temp={sheet.washTemp} />
                              {isBestTemp && selectedSheets.length > 1 && (
                                <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                                  Najwyższa
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Hypoallergenic */}
                          <div className="flex justify-between items-center gap-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5" /> Antyalergiczne
                            </span>
                            <span>
                              {sheet.hypoallergenic ? (
                                <span className="text-green-600 flex items-center gap-1 text-xs font-medium">
                                  <Check className="w-3.5 h-3.5" /> Tak
                                </span>
                              ) : (
                                <span className="text-muted-foreground text-xs flex items-center gap-1">
                                  <X className="w-3.5 h-3.5 text-red-500" /> Nie
                                </span>
                              )}
                            </span>
                          </div>

                          {/* Oekotex */}
                          <div className="flex justify-between items-center gap-2 border-t border-border pt-3">
                            <span className="text-muted-foreground text-sm">Oeko-Tex® Std 100</span>
                            <span>
                              {sheet.oekotex ? (
                                <span className="text-green-600 flex items-center gap-1 text-xs font-medium">
                                  <Check className="w-3.5 h-3.5" /> Certyfikat
                                </span>
                              ) : (
                                <span className="text-muted-foreground text-xs flex items-center gap-1">
                                  <X className="w-3.5 h-3.5 text-red-500" /> Brak
                                </span>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Verdict */}
                        <p className="text-xs text-muted-foreground italic leading-relaxed border-t border-border pt-3">
                          {sheet.verdict}
                        </p>

                        {/* CTA */}
                        <div className="pt-1 flex gap-2">
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <Link href="/ranking-przescieradel">
                              Ranking
                            </Link>
                          </Button>
                          <Button asChild size="sm" className="flex-1">
                            <a href={sheet.url} target="_blank" rel="noopener noreferrer">
                              Kup teraz
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Side-by-side score bars */}
              {selectedSheets.length > 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Porównanie parametrów</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { label: 'Ocena ogólna', getValue: (s: Sheet) => s.score, max: 10 },
                        { label: 'Gramatura (g/m²)', getValue: (s: Sheet) => s.gramatura / 30, max: 10 },
                        { label: 'Temperatura prania (°C)', getValue: (s: Sheet) => s.washTemp / 6, max: 10 },
                        {
                          label: 'Antyalergiczne',
                          getValue: (s: Sheet) => (s.hypoallergenic ? 10 : 2),
                          max: 10,
                        },
                        { label: 'Oeko-Tex®', getValue: (s: Sheet) => (s.oekotex ? 10 : 2), max: 10 },
                      ].map(({ label, getValue }) => {
                        const bestValue = Math.max(...selectedSheets.map(getValue))
                        return (
                          <div key={label} className="space-y-2">
                            <span className="text-sm font-medium text-foreground">{label}</span>
                            <div className="space-y-2">
                              {selectedSheets.map(sheet => {
                                const value = getValue(sheet)
                                const isBest = value === bestValue
                                return (
                                  <div key={sheet.id} className="flex items-center gap-3">
                                    <div className="w-36 text-sm text-muted-foreground truncate">
                                      {sheet.brand}
                                    </div>
                                    <div className="flex-1">
                                      <Progress
                                        value={value * 10}
                                        className={`h-2 ${isBest ? '[&>div]:bg-primary' : '[&>div]:bg-muted-foreground/30'}`}
                                      />
                                    </div>
                                    <div
                                      className={`w-10 text-right text-sm font-semibold ${isBest ? 'text-primary' : 'text-muted-foreground'}`}
                                    >
                                      {label === 'Gramatura (g/m²)'
                                        ? `${sheet.gramatura}`
                                        : label === 'Temperatura prania (°C)'
                                          ? `${sheet.washTemp}°C`
                                          : label === 'Antyalergiczne' || label === 'Oeko-Tex®'
                                            ? value === 10
                                              ? 'Tak'
                                              : 'Nie'
                                            : value.toFixed(1)}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Pros & Cons */}
              {selectedSheets.length > 1 && (
                <div
                  className={`grid gap-6 ${
                    selectedSheets.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'
                  }`}
                >
                  {selectedSheets.map(sheet => (
                    <Card key={sheet.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {sheet.brand} {sheet.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-green-600 mb-2 flex items-center gap-1">
                            <Check className="w-4 h-4" /> Zalety
                          </h4>
                          <ul className="space-y-1.5">
                            {sheet.pros.slice(0, 5).map((pro, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Plus className="w-3 h-3 text-green-600 mt-1 shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-red-500 mb-2 flex items-center gap-1">
                            <X className="w-4 h-4" /> Wady
                          </h4>
                          <ul className="space-y-1.5">
                            {sheet.cons.slice(0, 4).map((con, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <X className="w-3 h-3 text-red-500 mt-1 shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

