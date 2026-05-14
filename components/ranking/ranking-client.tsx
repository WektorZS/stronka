'use client'

import { useState, useMemo } from 'react'
import { Filter, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RankingTable } from './ranking-table'
import type { Mattress } from '@/lib/mattresses'

type FilterType = 'all' | 'refund' | 'cheap' | 'warranty'

interface RankingClientProps {
  mattresses: Mattress[]
}

export function RankingClient({ mattresses }: RankingClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredMattresses = useMemo(() => {
    switch (activeFilter) {
      case 'refund':
        return mattresses.filter(m => m.specs.trialType === 'refund')
      case 'cheap':
        return mattresses.filter(m => m.price <= 1500)
      case 'warranty':
        return mattresses.filter(m => {
          const years = parseInt(m.specs.warranty)
          return years >= 10
        })
      default:
        return mattresses
    }
  }, [mattresses, activeFilter])

  const counts = useMemo(() => ({
    all: mattresses.length,
    refund: mattresses.filter(m => m.specs.trialType === 'refund').length,
    cheap: mattresses.filter(m => m.price <= 1500).length,
    warranty: mattresses.filter(m => {
      const years = parseInt(m.specs.warranty)
      return years >= 10
    }).length,
  }), [mattresses])

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: `Wszystkie (${counts.all})` },
    { key: 'refund', label: `Ze zwrotem pieniędzy (${counts.refund})` },
    { key: 'cheap', label: `Do 1500 zł (${counts.cheap})` },
    { key: 'warranty', label: `Gwarancja 10+ lat (${counts.warranty})` },
  ]

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Szybkie filtry:</span>
        </div>
        {filters.map(filter => (
          <Badge 
            key={filter.key}
            variant={activeFilter === filter.key ? 'default' : 'outline'}
            className={`cursor-pointer transition-all ${
              activeFilter === filter.key 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'hover:bg-secondary'
            }`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </Badge>
        ))}
        {activeFilter !== 'all' && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 px-2 text-xs"
            onClick={() => setActiveFilter('all')}
          >
            <X className="w-3 h-3 mr-1" />
            Wyczyść filtr
          </Button>
        )}
      </div>

      {/* Results info */}
      {activeFilter !== 'all' && (
        <div className="mb-4 text-sm text-muted-foreground">
          Znaleziono {filteredMattresses.length} {
            filteredMattresses.length === 1 ? 'materac' : 
            filteredMattresses.length < 5 ? 'materace' : 'materacy'
          } spełniających kryteria
        </div>
      )}

      {/* Ranking Table */}
      {filteredMattresses.length > 0 ? (
        <RankingTable mattresses={filteredMattresses} />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg mb-2">Brak materaców spełniających wybrane kryteria</p>
          <Button variant="outline" onClick={() => setActiveFilter('all')}>
            Pokaż wszystkie materace
          </Button>
        </div>
      )}
    </>
  )
}
