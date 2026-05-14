'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ExternalLink, ChevronDown, ChevronUp, Check, X, Minus, Heart, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { Mattress } from '@/lib/mattresses'
import { useFavorites, MAX_FAVORITES } from '@/lib/favorites'

interface RankingTableProps {
  mattresses: Mattress[]
}

export function RankingTable({ mattresses }: RankingTableProps) {
  const MAX_COMPARE = 3
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([])
  const [compareWarning, setCompareWarning] = useState(false)
  const [favoriteWarning, setFavoriteWarning] = useState(false)
  const { favorites, toggle } = useFavorites()

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleToggleFavorite = (id: string) => {
    const result = toggle(id)
    if (result.limitReached) {
      setFavoriteWarning(true)
      setTimeout(() => setFavoriteWarning(false), 3000)
    }
  }

  const handleToggleCompare = (id: string) => {
    setSelectedForCompare(prev => {
      if (prev.includes(id)) return prev.filter(s => s !== id)
      if (prev.length >= MAX_COMPARE) {
        setCompareWarning(true)
        setTimeout(() => setCompareWarning(false), 3000)
        return prev
      }
      return [...prev, id]
    })
  }

  return (
    <TooltipProvider>
      <div className="space-y-4">
        {/* Favorite limit warning */}
        {favoriteWarning && (
          <div className="sticky top-20 z-50 bg-red-500 text-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
            <Heart className="h-5 w-5 shrink-0" />
            <span className="font-medium text-sm">
              Możesz dodać maksymalnie {MAX_FAVORITES} materace do ulubionych. Usuń jeden, aby dodać inny.
            </span>
          </div>
        )}

        {/* Compare limit warning */}
        {compareWarning && (
          <div className="sticky top-20 z-50 bg-amber-500 text-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
            <Scale className="h-5 w-5 shrink-0" />
            <span className="font-medium text-sm">
              Możesz porównać maksymalnie {MAX_COMPARE} materace. Usuń jeden, aby dodać inny.
            </span>
          </div>
        )}

        {/* Compare bar */}
        {selectedForCompare.length >= 1 && (
          <div className="sticky top-20 z-40 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-3">
              <Scale className="h-5 w-5 shrink-0" />
              <div>
                <span className="font-medium">
                  Wybrano {selectedForCompare.length}/{MAX_COMPARE} do porównania
                </span>
                {selectedForCompare.length < 2 && (
                  <p className="text-xs opacity-80 mt-0.5">Zaznacz co najmniej 2 materace, aby porównac</p>
                )}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedForCompare([])}
              >
                {"Wyczy\u015B\u0107"}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                asChild
                disabled={selectedForCompare.length < 2}
              >
                <Link href={`/porownaj?materace=${selectedForCompare.join(',')}`}>
                  {"Por\u00F3wnaj teraz"}
                </Link>
              </Button>
            </div>
          </div>
        )}

        {mattresses.map((mattress, index) => {
          const isFav = favorites.includes(mattress.id)
          const isSelected = selectedForCompare.includes(mattress.id)

          return (
            <Card
              key={mattress.id}
              className={`overflow-hidden transition-all duration-300 ${
                index === 0 ? 'border-primary ring-1 ring-primary/20' : ''
              } ${isSelected ? 'ring-2 ring-blue-400' : ''}`}
            >
              <CardContent className="p-0">
                {/* Main Row */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                    {/* Rank badge */}
                    <div className="flex items-center gap-4 lg:w-20 shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                        index === 0
                          ? 'bg-primary text-primary-foreground'
                          : index === 1
                            ? 'bg-slate-400 text-white'
                            : index === 2
                              ? 'bg-amber-600 text-white'
                              : 'bg-muted text-muted-foreground'
                      }`}>
                        {mattress.rank}
                      </div>
                    </div>

                    {/* Product image */}
                    <div className="shrink-0 w-20 h-20 rounded-lg bg-muted overflow-hidden relative hidden sm:block">
                      <Image
                        src={mattress.image}
                        alt={`Materac ${mattress.brand} ${mattress.name}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground">{mattress.brand}</span>
                        {index === 0 && (
                          <Badge className="bg-primary/10 text-primary border-0 text-xs">
                            Najlepsza ocena
                          </Badge>
                        )}
                        {mattress.specs.trialType === 'refund' && (
                          <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                            Zwrot pieniędzy
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        <Link href={`/recenzje/${mattress.id}`} className="hover:text-primary transition-colors">
                          {mattress.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 lg:line-clamp-1">
                        {mattress.verdict}
                      </p>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-2 shrink-0">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span className="font-bold text-2xl text-foreground">{mattress.score.toFixed(1)}</span>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 lg:w-32 lg:text-right">
                      <div className="text-2xl font-bold text-foreground">{mattress.price} zł</div>
                      {mattress.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          {mattress.originalPrice} zł
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleToggleFavorite(mattress.id)}
                            className={
                              isFav
                                ? 'text-red-500'
                                : favorites.length >= MAX_FAVORITES
                                  ? 'text-muted-foreground/40 cursor-not-allowed'
                                  : 'text-muted-foreground hover:text-red-500'
                            }
                          >
                            <Heart className={`h-5 w-5 ${isFav ? 'fill-current' : ''}`} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isFav
                            ? 'Usuń z ulubionych'
                            : favorites.length >= MAX_FAVORITES
                              ? `Limit ${MAX_FAVORITES} ulubionych osiągnięty`
                              : 'Dodaj do ulubionych'}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant={isSelected ? "default" : "ghost"}
                            size="icon"
                            onClick={() => handleToggleCompare(mattress.id)}
                            className={
                              !isSelected && selectedForCompare.length >= MAX_COMPARE
                                ? 'text-muted-foreground/40 cursor-not-allowed'
                                : !isSelected
                                  ? 'text-muted-foreground'
                                  : ''
                            }
                          >
                            <Scale className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isSelected
                            ? 'Usu\u0144 z por\u00F3wnania'
                            : selectedForCompare.length >= MAX_COMPARE
                              ? 'Limit 3 matracy osi\u0105gni\u0119ty'
                              : 'Dodaj do por\u00F3wnania'}
                        </TooltipContent>
                      </Tooltip>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(mattress.id)}
                        className="hidden sm:flex"
                      >
                        Szczegóły
                        {expandedId === mattress.id ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/recenzje/${mattress.id}`}>
                          Recenzja
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <a href={mattress.url} target="_blank" rel="noopener noreferrer">
                          Kup
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Mobile expand button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(mattress.id)}
                    className="sm:hidden w-full mt-4"
                  >
                    {expandedId === mattress.id ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
                    {expandedId === mattress.id ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Expanded Details */}
                {expandedId === mattress.id && (
                  <div className="border-t border-border bg-muted/30 p-4 sm:p-6 animate-fade-in">
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Scores */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Oceny szczegółowe</h4>
                        <div className="space-y-3">
                          {Object.entries(mattress.scores).map(([key, value]) => (
                            <div key={key}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground capitalize">
                                  {key === 'comfort' ? 'Komfort' :
                                   key === 'support' ? 'Podparcie' :
                                   key === 'durability' ? 'Trwałość' :
                                   key === 'priceValue' ? 'Cena/jakość' :
                                   key === 'warranty' ? 'Gwarancja' :
                                   key === 'trial' ? 'Okres testowy' : key}
                                </span>
                                <span className="font-medium text-foreground">{value.toFixed(1)}</span>
                              </div>
                              <Progress value={value * 10} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specs */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Specyfikacja</h4>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Gęstość pianki</dt>
                            <dd className="text-foreground font-medium">{mattress.specs.foamDensity}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Pranie pokrowca</dt>
                            <dd className="text-foreground font-medium">
                              {mattress.specs.washTemp > 0 ? `${mattress.specs.washTemp}°C` : 'Brak info'}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Gwarancja</dt>
                            <dd className="text-foreground font-medium">{mattress.specs.warranty}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Okres testowy</dt>
                            <dd className="text-foreground font-medium">{mattress.specs.trialPeriod}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Typ zwrotu</dt>
                            <dd className="text-foreground font-medium">
                              {mattress.specs.trialType === 'refund' ? (
                                <span className="text-green-600 flex items-center gap-1">
                                  <Check className="w-4 h-4" /> Zwrot pieniędzy
                                </span>
                              ) : mattress.specs.trialType === 'exchange' ? (
                                <span className="text-amber-600 flex items-center gap-1">
                                  <Minus className="w-4 h-4" /> Tylko wymiana
                                </span>
                              ) : (
                                <span className="text-muted-foreground flex items-center gap-1">
                                  <X className="w-4 h-4" /> Brak
                                </span>
                              )}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Dostawa</dt>
                            <dd className="text-foreground font-medium">{mattress.specs.deliveryPrice}</dd>
                          </div>
                        </dl>
                      </div>

                      {/* Pros & Cons */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Zalety i wady</h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-medium text-green-600 mb-2">ZALETY</p>
                            <ul className="space-y-1">
                              {mattress.pros.slice(0, 3).map((pro, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-red-600 mb-2">WADY</p>
                            <ul className="space-y-1">
                              {mattress.cons.slice(0, 2).map((con, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </TooltipProvider>
  )
}
