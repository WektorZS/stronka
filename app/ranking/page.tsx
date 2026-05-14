import { Metadata } from 'next'
import Link from 'next/link'
import { Info } from 'lucide-react'
import { RankingClient } from '@/components/ranking/ranking-client'
import { getMattressesByRank } from '@/lib/mattresses'

export const metadata: Metadata = {
  title: 'Ranking materaców 2026',
  description: 'Pełny ranking materaców piankowych 90x200. Porównanie 10 modeli według 6 kryteriów: komfort, podparcie, trwałość, stosunek ceny do jakości, gwarancja i okres testowy.',
}

export default function RankingPage() {
  const mattresses = getMattressesByRank()

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ranking materaców 2026
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Pełne porównanie 10 materaców piankowych dostępnych na polskim rynku. Każdy produkt
            oceniliśmy według 6 kryteriów, a końcowa ocena to średnia ważona.
          </p>
          <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Wszystkie ceny dotyczą materaców w rozmiarze 90x200 cm i są aktualne na dzień
              publikacji. Linki prowadzą do oficjalnych sklepów producentów lub autoryzowanych sprzedawców.{' '}
              <Link href="/metodologia" className="text-primary hover:underline">
                Poznaj naszą metodologię
              </Link>
            </p>
          </div>
        </div>

        {/* Ranking with Filters */}
        <RankingClient mattresses={mattresses} />

        {/* Additional Info */}
        <div className="mt-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">O rankingu</h2>
          <p className="text-muted-foreground mb-4">
            Ranking materaców 2026 powstał na podstawie analizy specyfikacji technicznych,
            warunków zakupu i polityki zwrotów poszczególnych producentów. Oceniliśmy 10 materaców
            piankowych czołowych producentów na rynku polskim w przedziale cenowym od 349 zł do 3699 zł.
          </p>
          <p className="text-muted-foreground mb-4">
            Szczególną uwagę zwróciliśmy na gęstość pianki (parametr wpływający na trwałość),
            długość gwarancji oraz warunki okresu testowego. Wiele marek oferuje możliwość
            testowania materaca, jednak warunki często różnią się od marketingowych obietnic.
          </p>
          <p className="text-muted-foreground">
            Każdy materac posiada szczegółową recenzję, w której omawiamy zalety, wady i dla kogo
            dany model będzie najlepszym wyborem. Zachęcamy do zapoznania się z pełną metodologią
            testów przed podjęciem decyzji zakupowej.
          </p>
        </div>
      </div>
    </div>
  )
}
