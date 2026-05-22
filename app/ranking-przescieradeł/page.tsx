import { Metadata } from 'next'
import Link from 'next/link'
import { Info, ChevronRight } from 'lucide-react'
import { SheetsRankingClient } from '@/components/sheets/sheets-ranking-client'
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
  alternates: {
    canonical: '/ranking-przescieradeł',
  },
  openGraph: {
    title: 'Ranking prześcieradeł 2026 – Top 5 | Bawełna vs Poliester',
    description:
      'Porównanie 5 prześcieradeł z gumką 90x200: gramatura, materiał, temperatura prania, antyalergiczność i cena.',
    url: 'https://ranking-materacow.pl/ranking-przescieradeł',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Strona główna',
          item: 'https://ranking-materacow.pl',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ranking prześcieradeł 2026',
          item: 'https://ranking-materacow.pl/ranking-przescieradeł',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Ranking prześcieradeł 2026 – Top 5',
      description:
        'Porównanie 5 prześcieradeł jersey z gumką 90x200 cm pod kątem materiału, gramatury, temperatury prania, antyalergiczności i ceny.',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'bett1 Jersey z gumką BODYGUARD®',
          url: 'https://www.bett1.pl/produkty/przescieradlo-jersey-z-gumka-bodyguard-90-100x200-biale',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'JYSK Jersey z gumką JENNY',
          url: 'https://jysk.pl/sypialnia/przescieradla/przescieradla-frotte-i-dzersej/przescieradlo-dzersej-z-gumka-jenny-0',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pation Home Nexa z gumką (Biedronka)',
          url: 'https://home.biedronka.pl',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'home&you Micros z gumką (mikrofibra)',
          url: 'https://home-you.com/pl/p/przescieradlo-z-mikrofibry-z-gumka-micros-90x200-cm-1000024553',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Terra Beds prześcieradło mikrofibra z gumką (Amazon)',
          url: 'https://www.amazon.pl',
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
      publisher: {
        '@type': 'Organization',
        name: 'Ranking-Materacow.pl',
        url: 'https://ranking-materacow.pl',
      },
    },
  ],
}

export default function RankingPrzescieradelPage() {
  const sheets = getSheetsByRank()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Strona główna
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <span className="text-foreground font-medium" aria-current="page">
                  Ranking prześcieradeł 2026
                </span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Top 5 &ndash; Maj 2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Ranking prześcieradeł 2026
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Przetestowaliśmy 5 popularnych prześcieradeł z gumką 90&times;200 cm dostępnych na
              polskim rynku. Główne kryteria oceny:{' '}
              <strong className="text-foreground">materiał (bawełna vs poliester)</strong>,{' '}
              <strong className="text-foreground">gramatura tkaniny</strong>,{' '}
              <strong className="text-foreground">temperatura prania</strong>,{' '}
              <strong className="text-foreground">antyalergiczność</strong> i{' '}
              <strong className="text-foreground">cena</strong>.
            </p>

            {/* Info note */}
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Wszystkie ceny dotyczą rozmiaru 90&times;200 cm i są aktualne na dzień publikacji.
                Bawełna z wysoką gramaturą (200+ g/m²) i możliwością prania w 60°C to najlepsza
                opcja dla alergików i osób dbających o higienę snu.{' '}
                <Link href="/metodologia" className="text-primary hover:underline">
                  Dowiedz się więcej o metodologii
                </Link>
              </p>
            </div>
          </div>

          {/* Material legend */}
          <div className="mb-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-sm">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <span className="text-emerald-800 font-medium">Bawełna</span>
              <span className="text-emerald-700 text-xs hidden sm:inline">
                &mdash; naturalna, oddychająca, lepsza dla alergików
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
              <span className="w-3 h-3 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
              <span className="text-slate-700 font-medium">Poliester</span>
              <span className="text-slate-600 text-xs hidden sm:inline">
                &mdash; syntetyczny, gorsze oddychanie, ładunek elektrostatyczny
              </span>
            </div>
          </div>

          {/* Ranking with filters */}
          <SheetsRankingClient sheets={sheets} />

          {/* Editorial content */}
          <div className="mt-12 max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Dlaczego materiał ma znaczenie?
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Wybór materiału prześcieradłowego bezpośrednio wpływa na komfort snu, higienę
              i zdrowie. <strong className="text-foreground">Bawełna</strong> jest naturalnym
              włóknem, które oddycha, absorbuje wilgoć i nie generuje ładunków elektrostatycznych.
              Wysoka gramatura (200+ g/m²) oznacza trwalszy, gęstszy materiał, który zachowuje
              kształt przez dłuższy czas.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">
                Temperatura prania to kluczowy parametr dla alergików.
              </strong>{' '}
              Badania pokazują, że pranie w 60°C skutecznie eliminuje roztocza kurzu domowego
              &mdash; główny alergen w sypialni. Pranie w 30°C lub 40°C nie zapewnia
              wystarczającej eliminacji alergenów i bakterii.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Certyfikat Oeko-Tex® Standard 100</strong>{' '}
              potwierdza, że tkanina nie zawiera szkodliwych substancji chemicznych, pestycydów
              ani ciężkich metali. To szczególnie ważne dla niemowląt, dzieci i osób
              z wrażliwą skórą.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Poliester (mikrofibra)</strong> może wydawać
              się atrakcyjny cenowo, ale syntetyczny materiał gorzej oddycha, co sprzyja poceniu
              się nocą. Gromadzi także ładunek elektrostatyczny i może podrażniać skórę osób
              wrażliwych. Dla alergików prześcieradło z poliestru jest nieoptymalnym wyborem.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              O rankingu prześcieradeł
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ranking prześcieradeł 2026 powstał na podstawie analizy specyfikacji technicznych
              i dostępnych danych producentów. Oceniliśmy 5 popularnych modeli prześcieradeł
              z gumką w rozmiarze 90&times;200 cm dostępnych na polskim rynku &mdash;
              w sklepach stacjonarnych (JYSK, Biedronka, home&amp;you) i online (bett1.pl,
              Amazon.pl).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Szczególną uwagę zwróciliśmy na materiał (bawełna zdecydowanie przewyższa
              poliester), gramaturę tkaniny, temperaturę prania oraz posiadane certyfikaty.
              Zachęcamy również do zapoznania się z naszym{' '}
              <Link href="/ranking" className="text-primary hover:underline">
                rankingiem materaców 2026
              </Link>
              , gdzie znajdziesz równie szczegółowe porównanie.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
