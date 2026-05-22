'use client'

import { useState, useMemo } from 'react'
import { Filter, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SheetsRankingTable } from './sheets-ranking-table'
import type { Sheet } from '@/lib/sheets'

type FilterType = 'all' | 'cotton' | 'polyester' | 'hypoallergenic' | 'oekotex'

interface SheetsRankingClientProps {
  sheets: Sheet[]
}

export function SheetsRankingClient({ sheets }: SheetsRankingClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredSheets = useMemo(() => {
    switch (activeFilter) {
      case 'cotton':
        return sheets.filter(s => s.materialType === 'cotton')
      case 'polyester':
        return sheets.filter(s => s.materialType === 'polyester')
      case 'hypoallergenic':
        return sheets.filter(s => s.hypoallergenic)
      case 'oekotex':
        return sheets.filter(s => s.oekotex)
      default:
        return sheets
    }
  }, [sheets, activeFilter])

  const counts = useMemo(() => ({
    all: sheets.length,
    cotton: sheets.filter(s => s.materialType === 'cotton').length,
    polyester: sheets.filter(s => s.materialType === 'polyester').length,
    hypoallergenic: sheets.filter(s => s.hypoallergenic).length,
    oekotex: sheets.filter(s => s.oekotex).length,
  }), [sheets])

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: `Wszystkie (${counts.all})` },
    { key: 'cotton', label: `Bawełna (${counts.cotton})` },
    { key: 'polyester', label: `Poliester (${counts.polyester})` },
    { key: 'hypoallergenic', label: `Antyalergiczne (${counts.hypoallergenic})` },
    { key: 'oekotex', label: `Oeko-Tex® (${counts.oekotex})` },
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
            Wyczysc filtr
          </Button>
        )}
      </div>

      {/* Results info */}
      {activeFilter !== 'all' && (
        <div className="mb-4 text-sm text-muted-foreground">
          Znaleziono {filteredSheets.length}{' '}
          {filteredSheets.length === 1
            ? 'prześcieradło'
            : filteredSheets.length < 5
              ? 'prześcieradła'
              : 'prześcieradeł'}{' '}
          spełniających kryteria
        </div>
      )}

      {/* Table */}
      {filteredSheets.length > 0 ? (
        <SheetsRankingTable sheets={filteredSheets} />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg mb-2">Brak prześcieradeł spełniających wybrane kryteria</p>
          <Button variant="outline" onClick={() => setActiveFilter('all')}>
            Pokaż wszystkie
          </Button>
        </div>
      )}
    </>
  )
}
