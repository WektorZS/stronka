'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, X, Check, Minus, Award, Scale, ChevronDown } from 'lucide-react'
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
import { mattresses, type Mattress } from '@/lib/mattresses'

const MAX_COMPARE = 3

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ComparePageContent />
    </Suspense>
  )
}

function ComparePageContent() {
  const searchParams = useSearchParams()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [initialised, setInitialised] = useState(false)

  useEffect(() => {
    if (initialised) return
    const param = searchParams.get('materace')
    if (param) {
      const ids = param.split(',').filter(id => mattresses.some(m => m.id === id)).slice(0, MAX_COMPARE)
      if (ids.length > 0) {
        setSelectedIds(ids)
      }
    }
    setInitialised(true)
  }, [searchParams, initialised])

  const selectedMattresses = useMemo(() => {
    return selectedIds.map(id => mattresses.find(m => m.id === id)).filter(Boolean) as Mattress[]
  }, [selectedIds])

  const availableMattresses = useMemo(() => {
    return mattresses.filter(m => !selectedIds.includes(m.id))
  }, [selectedIds])

  const addMattress = (id: string) => {
    if (selectedIds.length < MAX_COMPARE && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id])
    }
  }

  const removeMattress = (id: string) => {
    setSelectedIds(selectedIds.filter(i => i !== id))
  }

  const getBestValue = (key: keyof Mattress['scores']) => {
    if (selectedMattresses.length === 0) return null
    return Math.max(...selectedMattresses.map(m => m.scores[key]))
  }

  const getLowestPrice = () => {
    if (selectedMattresses.length === 0) return null
    return Math.min(...selectedMattresses.map(m => m.price))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/ranking" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do rankingu
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Porównywarka materaców
              </h1>
              <p className="text-muted-foreground">
                Wybierz do {MAX_COMPARE} materaców, aby porównać ich parametry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            {selectedMattresses.map(mattress => (
              <Badge 
                key={mattress.id}
                variant="secondary"
                className="pl-3 pr-2 py-2 text-sm flex items-center gap-2"
              >
                <span className="font-medium">{mattress.brand} {mattress.name}</span>
                <button 
                  onClick={() => removeMattress(mattress.id)}
                  className="ml-1 p-0.5 rounded-full hover:bg-destructive/20 transition-colors"
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
                    Dodaj materac
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 max-h-80 overflow-y-auto">
                  {availableMattresses.map(mattress => (
                    <DropdownMenuItem 
                      key={mattress.id}
                      onClick={() => addMattress(mattress.id)}
                      className="cursor-pointer"
                    >
                      <div className="flex justify-between w-full">
                        <span>{mattress.brand} {mattress.name}</span>
                        <span className="text-muted-foreground">{mattress.price} zł</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {selectedMattresses.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="py-16 text-center">
                <Scale className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wybierz materace do porównania</h3>
                <p className="text-muted-foreground mb-6">
                  Kliknij &quot;Dodaj materac&quot; powyżej, aby rozpocząć porównanie
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="gap-2">
                      <Plus className="w-4 h-4" />
                      Dodaj pierwszy materac
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-64 max-h-80 overflow-y-auto">
                    {mattresses.map(mattress => (
                      <DropdownMenuItem 
                        key={mattress.id}
                        onClick={() => addMattress(mattress.id)}
                        className="cursor-pointer"
                      >
                        <div className="flex justify-between w-full">
                          <span>{mattress.brand} {mattress.name}</span>
                          <span className="text-muted-foreground">{mattress.price} zł</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {/* Cards Grid */}
              <div className={`grid gap-6 ${
                selectedMattresses.length === 1 ? 'grid-cols-1 max-w-md' :
                selectedMattresses.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                'grid-cols-1 md:grid-cols-3'
              }`}>
                {selectedMattresses.map((mattress, index) => {
                  const isBestScore = mattress.score === Math.max(...selectedMattresses.map(m => m.score))
                  const isLowestPrice = mattress.price === getLowestPrice()
                  
                  return (
                    <Card key={mattress.id} className={`relative ${isBestScore ? 'ring-2 ring-primary' : ''}`}>
                      {isBestScore && selectedMattresses.length > 1 && (
                        <div className="absolute -top-3 left-4">
                          <Badge className="bg-primary text-primary-foreground gap-1">
                            <Award className="w-3 h-3" />
                            Najlepsza ocena
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-muted-foreground">{mattress.brand}</p>
                            <CardTitle className="text-xl">{mattress.name}</CardTitle>
                          </div>
                          <button 
                            onClick={() => removeMattress(mattress.id)}
                            className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <X className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Score */}
                        <div className="text-center py-4 bg-secondary/50 rounded-lg">
                          <div className="text-4xl font-bold text-primary">{mattress.score}</div>
                          <div className="text-sm text-muted-foreground">Ocena ogólna</div>
                        </div>
                        
                        {/* Price */}
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground">Cena</span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg">{mattress.price} zł</span>
                            {isLowestPrice && selectedMattresses.length > 1 && (
                              <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                                Najtańszy
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        {/* Specs */}
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Gęstość pianki</span>
                            <span className="font-medium">{mattress.specs.foamDensity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Gwarancja</span>
                            <span className="font-medium">{mattress.specs.warranty}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Okres próbny</span>
                            <span className="font-medium">{mattress.specs.trialPeriod}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Zwrot pieniędzy</span>
                            <span className="font-medium">
                              {mattress.specs.trialType === 'refund' ? (
                                <Check className="w-4 h-4 text-green-600 inline" />
                              ) : mattress.specs.trialType === 'exchange' ? (
                                <span className="text-yellow-600">Tylko wymiana</span>
                              ) : (
                                <X className="w-4 h-4 text-red-500 inline" />
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Temp. prania</span>
                            <span className="font-medium">{mattress.specs.washTemp}°C</span>
                          </div>
                        </div>
                        
                        {/* Link */}
                        <div className="pt-2 flex gap-2">
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <Link href={`/recenzje/${mattress.id}`}>
                              Recenzja
                            </Link>
                          </Button>
                          <Button asChild size="sm" className="flex-1">
                            <a href={mattress.url} target="_blank" rel="noopener noreferrer">
                              Kup teraz
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Detailed Scores Comparison */}
              {selectedMattresses.length > 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Porównanie ocen szczegółowych</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { key: 'comfort' as const, label: 'Komfort' },
                        { key: 'support' as const, label: 'Podparcie kręgosłupa' },
                        { key: 'durability' as const, label: 'Trwałość' },
                        { key: 'priceValue' as const, label: 'Stosunek jakości do ceny' },
                        { key: 'warranty' as const, label: 'Gwarancja i warunki' },
                        { key: 'trial' as const, label: 'Okres próbny' },
                      ].map(({ key, label }) => {
                        const bestValue = getBestValue(key)
                        return (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{label}</span>
                            </div>
                            <div className="space-y-2">
                              {selectedMattresses.map(mattress => {
                                const value = mattress.scores[key]
                                const isBest = value === bestValue
                                return (
                                  <div key={mattress.id} className="flex items-center gap-3">
                                    <div className="w-32 text-sm text-muted-foreground truncate">
                                      {mattress.brand} {mattress.name}
                                    </div>
                                    <div className="flex-1">
                                      <Progress 
                                        value={value * 10} 
                                        className={`h-2 ${isBest ? '[&>div]:bg-primary' : '[&>div]:bg-muted-foreground/30'}`}
                                      />
                                    </div>
                                    <div className={`w-12 text-right font-semibold ${isBest ? 'text-primary' : 'text-muted-foreground'}`}>
                                      {value.toFixed(1)}
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
              {selectedMattresses.length > 1 && (
                <div className={`grid gap-6 ${
                  selectedMattresses.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                  'grid-cols-1 md:grid-cols-3'
                }`}>
                  {selectedMattresses.map(mattress => (
                    <Card key={mattress.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{mattress.brand} {mattress.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-green-600 mb-2 flex items-center gap-1">
                            <Check className="w-4 h-4" /> Zalety
                          </h4>
                          <ul className="space-y-1">
                            {mattress.pros.slice(0, 5).map((pro, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Plus className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-red-500 mb-2 flex items-center gap-1">
                            <X className="w-4 h-4" /> Wady
                          </h4>
                          <ul className="space-y-1">
                            {mattress.cons.slice(0, 5).map((con, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Minus className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
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
