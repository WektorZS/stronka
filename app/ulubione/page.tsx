"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Trash2, ArrowRight, Star, Scale } from 'lucide-react'
import { mattresses, type Mattress } from '@/lib/mattresses'
import { useFavorites } from '@/lib/favorites'

export default function FavoritesPage() {
  const { favorites, remove } = useFavorites()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const favoriteMattresses = mattresses.filter(m => favorites.includes(m.id))

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-red-500 fill-red-500" />
            <h1 className="text-3xl font-bold text-foreground">Twoje ulubione materace</h1>
          </div>
          <p className="text-muted-foreground">
            Zapisane materace, które Cię zainteresowały. Możesz je porównać lub przejść do szczegółowej recenzji.
          </p>
        </div>

        {favoriteMattresses.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Heart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Brak ulubionych materacy</h2>
              <p className="text-muted-foreground mb-6">
                Przeglądaj ranking i dodawaj materace do ulubionych, klikając ikonę serca.
              </p>
              <Button asChild>
                <Link href="/ranking">
                  Przejdź do rankingu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <p className="text-muted-foreground">
                Masz {favoriteMattresses.length} {favoriteMattresses.length === 1 ? 'ulubiony materac' :
                  favoriteMattresses.length < 5 ? 'ulubione materace' : 'ulubionych materacy'} (maks. 3)
              </p>
              {favoriteMattresses.length >= 2 && (
                <Button asChild variant="outline" className="shrink-0">
                  <Link href={`/porownaj?materace=${favoriteMattresses.map(m => m.id).join(',')}`}>
                    <Scale className="mr-2 h-4 w-4" />
                    Porównaj wszystkie
                  </Link>
                </Button>
              )}
            </div>

            <div className="grid gap-4">
              {favoriteMattresses.map((mattress) => (
                <FavoriteCard
                  key={mattress.id}
                  mattress={mattress}
                  onRemove={(id) => remove(id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}

function FavoriteCard({ mattress, onRemove }: { mattress: Mattress; onRemove: (id: string) => void }) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Image */}
          <div className="shrink-0 w-20 h-20 rounded-lg bg-muted overflow-hidden relative">
            <Image
              src={mattress.image}
              alt={`${mattress.brand} ${mattress.name}`}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">{mattress.brand} {mattress.name}</h3>
              <Badge variant="secondary">#{mattress.rank}</Badge>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium">{mattress.overallScore.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {mattress.shortDescription}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="font-semibold text-primary">{mattress.price.toLocaleString('pl-PL')} zł</span>
              <span className="text-muted-foreground">Twardość: {mattress.firmness}/10</span>
              <span className="text-muted-foreground">Gwarancja: {mattress.warranty}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/recenzje/${mattress.id}`}>
                Zobacz recenzję
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(mattress.id)}
              className="text-muted-foreground hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
