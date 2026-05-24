import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Ranking prześcieradeł 2026 – Top 5 | Bawełna vs Poliester',
  description:
    'Ranking Top 5 prześcieradeł z gumką 90x200 cm. Porównanie bawełny i poliestru: gramatura, temperatura prania, antyalergiczność, cena. Sprawdź, które prześcieradło wybrać.',
  keywords: [
    'ranking prześcieradeł',
    'ranking prześcieradeł 2026',
    'najlepsze prześcieradło',
    'prześcieradło jersey z gumką',
    'prześcieradło bawełna vs poliester',
    'prześcieradło antyalergiczne',
    'prześcieradło 90x200',
    'gramatura prześcieradła',
    'oeko-tex prześcieradło',
    'bett1 bodyguard prześcieradło',
  ],
  alternates: { canonical: '/ranking-przescieradel' },
  openGraph: {
    title: 'Ranking prześcieradeł 2026 – Top 5 | Bawełna vs Poliester',
    description:
      'Porównanie 5 prześcieradeł z gumką 90x200: gramatura, materiał, temperatura prania, antyalergiczność i cena.',
    url: 'https://ranking-materacow.pl/ranking-przescieradel',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://ranking-materacow.pl' },
        { '@type': 'ListItem', position: 2, name: 'Rankingi', item: 'https://ranking-materacow.pl/ranking' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ranking prześcieradeł 2026',
          item: 'https://ranking-materacow.pl/ranking-przescieradel',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Ranking prześcieradeł 2026 – Top 5 Bawełna vs Poliester',
      description:
        'Porównanie 5 najpopularniejszych prześcieradeł z gumką 90x200 cm dostępnych w Polsce. Sprawdzamy materiał, gramaturę, temperaturę prania, certyfikaty i ceny.',
      datePublished: '2026-05-22',
      dateModified: '2026-05-22',
      author: { '@type': 'Organization', name: 'Redakcja Ranking-Materacow.pl' },
      publisher: { '@type': 'Organization', name: 'Ranking-Materacow.pl', url: 'https://ranking-materacow.pl' },
    },
    {
      '@type': 'ItemList',
      name: 'Ranking prześcieradeł 2026 – Top 5',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'bett1 Jersey z gumką BODYGUARD®', url: 'https://www.bett1.pl/produkty/przescieradlo-jersey-z-gumka-bodyguard-90-100x200-biale' },
        { '@type': 'ListItem', position: 2, name: 'JYSK Jersey z gumką JENNY', url: 'https://jysk.pl/sypialnia/przescieradla' },
        { '@type': 'ListItem', position: 3, name: 'Pation Home Nexa z gumką', url: 'https://home.biedronka.pl' },
        { '@type': 'ListItem', position: 4, name: 'home&you Micros z gumką', url: 'https://home-you.com' },
        { '@type': 'ListItem', position: 5, name: 'Terra Beds prześcieradło mikrofibra', url: 'https://www.amazon.pl' },
      ],
    },
  ],
}

function WashTempBadge({ temp }: { temp: number }) {
  const cls =
    temp >= 60
      ? 'bg-green-100 text-green-700 border-green-200'
      : temp >= 40
        ? 'bg-amber-100 text-amber-700 border-amber-200'
        : 'bg-red-100 text-red-700 border-red-200'
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cls}`}>
      <Thermometer className="w-3 h-3" />
      {temp}°C
    </span>
  )
}

function MaterialBadge({ type, material }: { type: string; material: string }) {
  return type === 'cotton' ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border bg-blue-100 text-blue-700 border-blue-200">
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

function GramScore({ g }: { g: number }) {
  const cls =
    g >= 200 ? 'text-blue-700 font-bold' : g >= 130 ? 'text-amber-700 font-semibold' : 'text-red-700 font-semibold'
  return <span className={cls}>{g} g/m²</span>
}

export default function RankingPrzescieradelPage() {
  const allSheets = getSheetsByRank()
  const winner = allSheets[0]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-blue-500/8 to-background pt-10 pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Strona główna</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><Link href="/ranking" className="hover:text-foreground transition-colors">Rankingi</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><span className="text-foreground font-medium" aria-current="page">Ranking prześcieradeł 2026</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide border border-blue-200">
                Test redakcji
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
                <Calendar className="w-3.5 h-3.5" />
                Maj 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
                <User className="w-3.5 h-3.5" />
                Redakcja Ranking-Materacow.pl
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
              Prześcieradła z gumką w teście:{' '}
              <span className="text-blue-600">na którym śpi się najlepiej?</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Przetestowaliśmy 5 popularnych prześcieradeł jersey z gumką w rozmiarze 90&times;200 cm,
              dostępnych w sklepach stacjonarnych i online w Polsce. Sprawdzamy{' '}
              <strong className="text-foreground">materiał</strong> (bawełna vs poliester),{' '}
              <strong className="text-foreground">gramaturę tkaniny</strong>,{' '}
              <strong className="text-foreground">temperaturę prania</strong>,{' '}
              <strong className="text-foreground">antyalergiczność</strong> i{' '}
              <strong className="text-foreground">cenę</strong>. Spoiler: różnice są znaczące.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="#wyniki">Przejdź do wyników</a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/porownaj-przescieradla">
                  <Scale className="w-4 h-4 mr-2" />
                  Porównywarka
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero visual strip — quick ranking summary */}
        <div className="border-t border-border bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {allSheets.map((sheet, i) => (
                <a
                  key={sheet.id}
                  href={`#${sheet.id}`}
                  className={`flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-1 px-4 py-4 sm:py-5 hover:bg-muted/50 transition-colors ${i === 0 ? 'sm:border-b-2 sm:border-b-blue-500' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      i === 0 ? 'bg-blue-500 text-white' : i === 1 ? 'bg-slate-400 text-white' : i === 2 ? 'bg-amber-500 text-white' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {sheet.rank}
                  </div>
                  <div className="sm:text-center min-w-0">
                    <p className="text-xs text-muted-foreground truncate">{sheet.brand}</p>
                    <p className="text-xs font-medium text-foreground truncate leading-tight">{sheet.name.split('BODYGUARD')[0].trim() || sheet.name}</p>
                    <div className="flex sm:justify-center items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs font-bold text-primary">{sheet.score.toFixed(1)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* ─── How we test ──────────────────────────────────── */}
          <section className="my-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Jak testujemy prześcieradła?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Każde prześcieradło oceniamy według 5 obiektywnych kryteriów, które mają realny wpływ
              na komfort i higienę snu. Nie uwzględniamy subiektywnych cech wizualnych ani wzornictwa,
              skupiamy się wyłącznie na parametrach technicznych i dostępnych danych producentów.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
              {[
                { icon: Layers, label: 'Materiał', desc: 'Bawełna > Poliester' },
                { icon: Layers, label: 'Gramatura', desc: 'g/m² — im więcej, tym lepiej' },
                { icon: Thermometer, label: 'Temp. prania', desc: '60°C = eliminacja roztoczy' },
                { icon: ShieldCheck, label: 'Antyalergiczne', desc: 'Oeko-Tex® + pranie 60°C' },
                { icon: Scale, label: 'Cena', desc: 'Stosunek jakości do ceny' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex flex-col items-start gap-1.5 p-4 rounded-xl bg-muted/50 border border-border">
                  <Icon className="w-5 h-5 text-blue-600 shrink-0" />
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Summary verdict ──────────────────────────────── */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Który wybrać? Krótkie podsumowanie</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardContent className="p-5">
                  <Badge className="bg-blue-600 text-white border-0 mb-3">Wybór redakcji</Badge>
                  <p className="font-semibold text-foreground text-sm mb-1">bett1 BODYGUARD®</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Najwyższa gramatura (240 g/m²), certyfikat Oeko-Tex®, pranie 60°C,
                    96% bawełna — najlepszy dla alergików i wymagających.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="p-5">
                  <Badge className="bg-amber-500 text-white border-0 mb-3">Najlepsza cena/jakość</Badge>
                  <p className="font-semibold text-foreground text-sm mb-1">JYSK JENNY</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    100% bawełna, Oeko-Tex®, pranie 60°C za jedyne 32,50 zł.
                    Niska gramatura to kompromis, ale jakość certyfikowana.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-slate-50/50">
                <CardContent className="p-5">
                  <Badge className="bg-slate-500 text-white border-0 mb-3">Tylko budżetowe</Badge>
                  <p className="font-semibold text-foreground text-sm mb-1">Terra Beds / home&you</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Poliester ogranicza oddychalność i higienę. Pranie max 30–40°C
                    może być mniej korzystny dla alergików. Opcja budżetowa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ─── Individual product deep-dives ───────────────── */}
{/* ─── Ranking Section (NOWY LAYOUT) ─────────────────────── */}
<section id="wyniki" className="py-8 sm:py-12 lg:py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="max-w-3xl mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Top 5 prześcieradeł — szczegółowe opisy
      </h2>
      <p className="text-lg text-muted-foreground">
        Każde prześcieradło oceniliśmy według materiału, gramatury, temperatury prania,
        właściwości antyalergicznych i ceny. Poniżej pełne zestawienie modeli od najlepszego.
      </p>

      <div className="flex items-start gap-3 p-4 bg-muted rounded-lg mt-6">
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          Wszystkie produkty porównujemy w rozmiarze 90×200 cm. Linki prowadzą do oficjalnych sklepów lub sprzedawców.
        </p>
      </div>
    </div>

    {/* Ranking list */}
    <div className="space-y-6">
      {allSheets.map((sheet) => (
        <article
          key={sheet.id}
          id={sheet.id}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="p-5 sm:p-6 flex flex-col md:flex-row gap-6">

            {/* LEFT */}
            <div className="md:w-56 shrink-0">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={sheet.image}
                  alt={`${sheet.brand} ${sheet.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 224px"
                />
              </div>

              <div className="mt-3 space-y-2">
                <WashTempBadge temp={sheet.washTemp} />
                <MaterialBadge type={sheet.materialType} material={sheet.material} />

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Layers className="w-3 h-3" />
                  Gramatura: <GramScore g={sheet.gramatura} />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1">

              {/* top row */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="text-sm text-muted-foreground">{sheet.brand}</p>
                  <h3 className="text-xl font-bold text-foreground">
                    {sheet.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-4 h-4 fill-primary" />
                  <span className="font-bold">{sheet.score.toFixed(1)}</span>
                </div>
              </div>

              {/* badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {sheet.oekotex && (
                  <Badge className="bg-blue-100 text-blue-700 border-0">
                    Oeko-Tex®
                  </Badge>
                )}
                {sheet.materialType === 'cotton' ? (
                  <Badge className="bg-green-100 text-green-700 border-0">
                    Bawełna
                  </Badge>
                ) : (
                  <Badge className="bg-slate-100 text-slate-600 border-0">
                    Poliester
                  </Badge>
                )}
              </div>

              {/* short */}
              <p className="text-sm text-muted-foreground mb-4">
                {sheet.shortDescription}
              </p>

              {/* pros / cons */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-green-700 mb-2">Zalety</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {sheet.pros.map((p, i) => (
                      <li key={i} className="flex gap-1">
                        <Check className="w-3 h-3 text-green-600 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">Wady</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {sheet.cons.map((c, i) => (
                      <li key={i} className="flex gap-1">
                        <X className="w-3 h-3 text-red-500 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* footer */}
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">
                  {sheet.price % 1 === 0
                    ? `${sheet.price} zł`
                    : `${sheet.price.toFixed(2)} zł`}
                </p>

                <Button asChild>
                  <a href={sheet.url} target="_blank" rel="noopener noreferrer">
                    Sprawdź cenę
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>

          {/* ─── Buying guide ─────────────────────────────────── */}
          <section className="mb-12 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4 not-prose">
              Na co zwrócić uwagę kupując prześcieradło z gumką?
            </h2>

            <div className="space-y-6 not-prose">
              {/* Materiał */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Materiał: bawełna vs poliester</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  <strong className="text-foreground">Jersey</strong> to nie materiał, a technika tkania — może być wykonany z bawełny, poliestru
                  lub wiskozy. Bawełna jerseyowa jest miękka, elastyczna i oddychająca. Pochłania wilgoć
                  (pot) i oddaje ją z powrotem, regulując temperaturę ciała podczas snu. Poliester (mikrofibra)
                  jest tańszy w produkcji, ale gorzej oddycha — w ciepłe noce powoduje efekt &quot;folii&quot;.
                  Generuje też ładunki elektrostatyczne, co może być uciążliwe.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-800">Bawełna</p>
                      <p className="text-xs text-blue-700">Oddycha, pochłania wilgoć, brak elektryczności statycznej, lepsza dla alergików</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <X className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Poliester</p>
                      <p className="text-xs text-slate-600">Słabo oddycha, efekt statyczny, gorsza higieniczność, niezalecany dla alergików</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gramatura */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Gramatura: im więcej, tym lepiej</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Gramatura tkaniny (g/m²) opisuje ciężar jednego metra kwadratowego materiału. Im wyższa,
                  tym tkanina jest gęstsza, bardziej trwała i mniej podatna na mechacenie.
                  W naszym teście najwyższą gramaturę ma bett1 BODYGUARD® (240 g/m²) — jest to blisko
                  3-krotnie gęstszy materiał niż najtańsza opcja Terra Beds (90 g/m²). Prześcieradła
                  z gramaturą poniżej 120 g/m² są cienkie i szybko tracą kształt po praniu.
                </p>
              </div>

              {/* Temperatura prania */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Temperatura prania — kluczowe dla alergików</h3>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted border border-border mb-3">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Badania pokazują, że roztocza kurzu domowego i bakterie giną dopiero w temperaturze
                    <strong className="text-foreground"> 60°C</strong>. Pranie w 30°C lub 40°C
                    nie zapewnia wystarczającej eliminacji alergenów — co jest szczególnie istotne
                    dla dzieci, astmatyków i alergików.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Bawełna jest odporna na wysokie temperatury, co pozwala prać ją w 60°C lub nawet wyżej.
                  Poliester deformuje się powyżej 40°C, dlatego prześcieradła syntetyczne można prać
                  maksymalnie w 40°C — co stanowi poważne ograniczenie higieniczne.
                </p>
              </div>

              {/* Oeko-Tex */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Certyfikat Oeko-Tex® Standard 100</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Certyfikat Oeko-Tex® Standard 100 potwierdza, że tkanina nie zawiera szkodliwych
                  substancji: pestycydów, metali ciężkich, formaldehydu ani środków wybielających.
                  Jest to szczególnie ważne przy bezpośrednim kontakcie skóry z tkaniną — przez całą noc.
                  W naszym teście certyfikat posiadają tylko bett1 BODYGUARD® i JYSK JENNY.
                </p>
              </div>
            </div>
          </section>

          {/* ─── Compare CTA ──────────────────────────────────── */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-200 p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-foreground mb-1">Porównaj prześcieradła obok siebie</h3>
              <p className="text-sm text-muted-foreground">
                Skorzystaj z naszej porównywarki, aby zestawić parametry dowolnych 2–3 modeli
              </p>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">
              <Link href="/porownaj-przescieradla">
                <Scale className="mr-2 h-4 w-4" />
                Otwórz porównywarkę
              </Link>
            </Button>
          </div>

          {/* ─── Cross-link to mattresses ─────────────────────── */}
          <div className="rounded-xl border border-border bg-muted/40 p-6 text-center">
            <p className="text-muted-foreground text-sm mb-3">
              Szukasz też dobrego materaca? Sprawdź nasz szczegółowy ranking 10 materaców piankowych.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/ranking">Ranking materaców 2026</Link>
            </Button>
          </div>

        </div>
      
    </>
  )
}
