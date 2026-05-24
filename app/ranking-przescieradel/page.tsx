import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  Info,
  Check,
  X,
  Thermometer,
  Layers,
  ShieldCheck,
  ExternalLink,
  Scale,
  Star,
  Calendar,
  User,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { getSheetsByRank } from '@/lib/sheets'

function WashTempBadge({ temp }: { temp: number }) {
  const cls =
    temp >= 60
      ? 'bg-blue-100 text-blue-700 border-blue-200'
      : temp >= 40
        ? 'bg-sky-100 text-sky-700 border-sky-200'
        : 'bg-slate-100 text-slate-700 border-slate-200'

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border ${cls}`}>
      <Thermometer className="w-3 h-3" />
      {temp}°C
    </span>
  )
}

function MaterialBadge({ type, material }: { type: string; material: string }) {
  return type === 'cotton' ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border bg-blue-100 text-blue-700 border-blue-200">
      <Check className="w-3 h-3" />
      {material}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border bg-slate-100 text-slate-600 border-slate-200">
      <X className="w-3 h-3" />
      {material}
    </span>
  )
}

function GramScore({ g }: { g: number }) {
  const cls =
    g >= 200
      ? 'text-blue-700 font-bold'
      : g >= 130
        ? 'text-sky-700 font-semibold'
        : 'text-slate-600 font-medium'

  return <span className={cls}>{g} g/m²</span>
}

export default function RankingPrzescieradelPage() {
  const allSheets = getSheetsByRank()

  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

        {/* HERO */}
        <section className="mb-14">
          <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2">
            <Link href="/">Strona główna</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/ranking">Rankingi</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Prześcieradła</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ranking prześcieradeł 2026
            <span className="text-blue-600"> — które wybrać?</span>
          </h1>

          <p className="text-muted-foreground max-w-3xl">
            Test 5 modeli prześcieradeł 90×200 cm. Porównanie materiału, gramatury,
            higieny i ceny.
          </p>
        </section>

        {/* HOW WE TEST */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Jak testujemy?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Layers, label: 'Materiał', desc: 'Bawełna vs poliester' },
              { icon: Layers, label: 'Gramatura', desc: 'Im więcej tym lepiej' },
              { icon: Thermometer, label: 'Pranie', desc: '60°C = higiena' },
              { icon: ShieldCheck, label: 'Alergie', desc: 'Oeko-Tex®' },
              { icon: Scale, label: 'Cena', desc: 'Jakość vs koszt' },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="p-5 rounded-2xl border bg-muted/40"
              >
                <Icon className="w-5 h-5 text-blue-600 mb-2" />
                <p className="font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold mb-8">
            Top 5 prześcieradeł
          </h2>

          {allSheets.map((sheet, index) => (
            <article
              key={sheet.id}
              id={sheet.id}
              className="border rounded-3xl overflow-hidden"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {sheet.rank}
                  </span>
                  <span className="font-semibold">
                    {index === 0 ? 'Wybór redakcji' : 'Ranking'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="font-bold">{sheet.score.toFixed(1)}</span>
                </div>
              </div>

              {/* BODY */}
              <div className="p-6 lg:p-8 grid lg:grid-cols-[260px_1fr] gap-8">

                {/* IMAGE */}
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                    <Image
                      src={sheet.image}
                      alt={sheet.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-4 space-y-2">
                    <WashTempBadge temp={sheet.washTemp} />
                    <MaterialBadge
                      type={sheet.materialType}
                      material={sheet.material}
                    />
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Layers className="w-3 h-3" />
                      <span>Gramatura:</span>
                      <GramScore g={sheet.gramatura} />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div>

                  <h3 className="text-2xl font-bold mb-2">
                    {sheet.brand} {sheet.name}
                  </h3>

                  <p className="text-muted-foreground mb-5">
                    {sheet.verdict}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold">
                      {sheet.price} zł
                    </div>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                      <a href={sheet.url} target="_blank">
                        Sprawdź
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </section>

      </div>
    </div>
  )
}