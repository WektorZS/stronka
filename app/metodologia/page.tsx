import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Bed, 
  Shield, 
  Coins, 
  Clock, 
  Sparkles, 
  Scale,
  ArrowRight,
  CheckCircle,
  Thermometer,
  Layers,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Metodologia testów | Materace i prześcieradła',
  description: 'Poznaj naszą metodologię testowania materaców i prześcieradeł. Sprawdź, jakie kryteria uwzględniamy i jak obliczamy końcową ocenę.',
}

const criteria = [
  {
    icon: Bed,
    name: 'Komfort',
    weight: 15,
    description: 'Oceniamy ogólne wrażenia z użytkowania materaca, jego miękkość i dopasowanie do ciała. Bierzemy pod uwagę różne pozycje snu oraz reakcje materaca na zmiany pozycji. Komfort jest wrażeniem indywidualnym i subiektnym, stąd stosunkowo niska waga tego czynnika',
    factors: [
      'Reakcja na nacisk',
      'Dopasowanie do kształtu ciała',
      'Wygoda w różnych pozycjach snu',
      'Izolacja ruchów',
    ],
  },
  {
    icon: Scale,
    name: 'Podparcie',
    weight: 10,
    description: 'Analizujemy, jak materac wspiera kręgosłup i rozkłada nacisk na powierzchni. Prawidłowe podparcie jest kluczowe dla zdrowego snu i unikania bólów pleców. Tak jak w przypadku komfortu zależy to od preferencji użytkownika i ewentualnych problemów z kręgosłupem.',
    factors: [
      'Podparcie kręgosłupa',
      'Rozkład nacisku',
      'Utrzymanie prawidłowej pozycji ciała',
      'Wsparcie dla różnych mas ciała',
    ],
  },
  {
    icon: Clock,
    name: 'Trwałość',
    weight: 25,
    description: 'Oceniamy przewidywaną żywotność materaca na podstawie gęstości pianki i jakości materiałów. Wyższa gęstość pianki zazwyczaj oznacza dłuższą trwałość. Premiujemy producentów, którzy otwarcie podają gęstość pianek.',
    factors: [
      'Gęstość pianki (kg/m³)',
      'Jakość pokrowca',
      'Konstrukcja warstw',
      'Opinie długoterminowe użytkowników',
    ],
  },
  {
    icon: Coins,
    name: 'Stosunek ceny do jakości',
    weight: 25,
    description: 'Porównujemy cenę materaca z jego parametrami technicznymi i warunkami zakupu. Szukamy produktów, które oferują najlepszą wartość w swojej kategorii cenowej przyrównując cenę do wszystkich aspektów oferty.',
    factors: [
      'Cena względem specyfikacji',
      'Porównanie z konkurencją',
      'Ukryte koszty (dostawa, zwrot)',
      'Promocje i ceny regularne',
    ],
  },
  {
    icon: Shield,
    name: 'Gwarancja',
    weight: 10,
    description: 'Oceniamy długość i warunki gwarancji producenta. Materac powinien służyć bezproblemowo przez wiele lat.',
    factors: [
      'Długość gwarancji',
      'Zakres gwarancji',
      'Warunki i wyłączenia',
      'Proces reklamacyjny',
    ],
  },
  {
    icon: Sparkles,
    name: 'Okres testowy',
    weight: 15,
    description: 'Sprawdzamy, czy producent oferuje możliwość przetestowania materaca z opcją zwrotu lub wymiany. Szczególnie cenimy pełny zwrot pieniędzy bez dodatkowych warunków.',
    factors: [
      'Długość okresu testowego',
      'Typ zwrotu (pieniądze czy wymiana)',
      'Dodatkowe warunki i ograniczenia',
      'Koszty zwrotu',
    ],
  },
]

const sheetCriteria = [
  {
    icon: Layers,
    name: 'Materiał',
    weight: 30,
    description:
      'Bawełna jest zdecydowanie lepszym materiałem niż poliester (mikrofibra). Bawełna oddycha, pochłania wilgoć i nie generuje ładunków elektrostatycznych. Poliester jest tańszy, ale syntetyczny — gorsze oddychanie sprzyja poceniu się nocą.',
    factors: [
      'Bawełna vs poliester',
      'Udział procentowy bawełny',
      'Obecność elastanu (lepsze przyleganie)',
      'Rodzaj splotu (jersey, satin)',
    ],
  },
  {
    icon: Layers,
    name: 'Gramatura tkaniny',
    weight: 20,
    description:
      'Gramatura (g/m²) określa gęstość i wagę tkaniny. Im wyższa gramatura, tym materiał jest trwalszy, grubszy i bardziej odporny na mechacenie. Prześcieradła poniżej 120 g/m² są cienkie i szybko tracą kształt. Powyżej 200 g/m² mamy do czynienia z materiałem premium.',
    factors: [
      'Gramatura w g/m²',
      'Odporność na mechacenie',
      'Trwałość przy wielokrotnym praniu',
      'Gęstość splotu',
    ],
  },
  {
    icon: Thermometer,
    name: 'Temperatura prania',
    weight: 25,
    description:
      'Kluczowy parametr dla alergików i osób dbających o higienę. Roztocza kurzu domowego i bakterie giną dopiero w 60°C. Pranie w 30°C lub 40°C nie zapewnia skutecznej eliminacji alergenów. Bawełna wytrzymuje 60°C, poliester nie — to poważna wada syntetyków.',
    factors: [
      'Maksymalna temperatura prania',
      'Eliminacja roztoczy (min. 60°C)',
      'Eliminacja bakterii i grzybów',
      'Zachowanie właściwości po wielu praniach',
    ],
  },
  {
    icon: ShieldCheck,
    name: 'Antyalergiczność i certyfikaty',
    weight: 15,
    description:
      'Certyfikat Oeko-Tex® Standard 100 potwierdza brak szkodliwych substancji: pestycydów, metali ciężkich, formaldehydu. Prześcieradło antyalergiczne to połączenie bawełny, certyfikatu Oeko-Tex® i możliwości prania w 60°C.',
    factors: [
      'Certyfikat Oeko-Tex® Standard 100',
      'Brak substancji szkodliwych',
      'Możliwość prania w 60°C',
      'Naturalny skład (bawełna)',
    ],
  },
  {
    icon: Coins,
    name: 'Cena i dostępność',
    weight: 10,
    description:
      'Porównujemy cenę w rozmiarze 90×200 cm względem parametrów technicznych. Bawełna z certyfikatem Oeko-Tex® w przyzwoitej gramaturze nie musi kosztować fortuny.',
    factors: [
      'Cena za rozmiar 90×200 cm',
      'Stosunek jakości do ceny',
      'Dostępność (online i stacjonarnie)',
      'Zakres rozmiarów w ofercie',
    ],
  },
]

export default function MetodologiaPage() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Metodologia testów
          </h1>
          <p className="text-lg text-muted-foreground">
            Testujemy produkty do sypialni — materace i prześcieradła — według jasno określonych
            kryteriów. Poniżej znajdziesz szczegółowy opis metodologii dla obu kategorii.
          </p>
        </div>

        {/* ── Mattresses section ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Bed className="w-6 h-6 text-primary" />
            Metodologia — materace
          </h2>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Jak obliczamy końcową ocenę materaca?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Końcowa ocena materaca to średnia ważona wszystkich sześciu kryteriów. Każde
                kryterium oceniamy w skali od 1 do 10, gdzie 10 oznacza wynik idealny. Następnie
                mnożymy każdą ocenę przez przypisaną wagę i sumujemy wyniki.
              </p>
              <p className="text-muted-foreground">
                Wagi poszczególnych kryteriów zostały ustalone według założenia, że komfort jest sprawą
                indywidualną, zależną od wielu jednostkowych czynników. Z tego powodu ważne jest, aby
                klient miał prawo do swobodnego przetestowania materaca i ewentualnego odzyskania
                pieniędzy w przypadku niezadowalającego doboru.
              </p>
              <p className="text-muted-foreground">
                Największy wpływ na końcową ocenę ma stosunek ceny do jakości, oferty (gwarancji,
                dostawy, polityki zwrotów) oraz trwałość obliczana według gęstości pianek użytych
                w materacu, przejrzystość oferty i informacji odnośnie produkcji.
              </p>
            </CardContent>
          </Card>

          {/* Criteria */}
          <div className="space-y-6 mb-8" id="kryteria">
            <h3 className="text-xl font-semibold text-foreground">Kryteria oceny materaców</h3>
            {criteria.map((criterion) => (
              <Card key={criterion.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-center gap-4 lg:w-64 shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <criterion.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{criterion.name}</h4>
                        <p className="text-sm text-muted-foreground">Waga: {criterion.weight}%</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4">{criterion.description}</p>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Co bierzemy pod uwagę:</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {criterion.factors.map((factor, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Sheets section ── */}
        <div className="mb-16" id="przescieradla">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Layers className="w-6 h-6 text-emerald-600" />
            Metodologia — prześcieradła
          </h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Jak oceniamy prześcieradła?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Prześcieradła oceniamy według 5 obiektywnych kryteriów, które mają realny wpływ
                na komfort i higienę snu. Skupiamy się wyłącznie na parametrach technicznych
                i dostępnych danych producentów — bez subiektywnych wrażeń estetycznych.
              </p>
              <p className="text-muted-foreground">
                Kluczową zasadą jest wyraźne rozróżnienie między bawełną a poliestrem: bawełna jest
                zdecydowanie lepszym materiałem na prześcieradło z punktu widzenia zdrowia i higieny.
                Poliester może być tańszy, ale nie zapewnia odpowiedniej oddychalności ani czystości higienicznej.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-5" id="kryteria-przescieradeł">
            <h3 className="text-xl font-semibold text-foreground">Kryteria oceny prześcieradeł</h3>
            {sheetCriteria.map((criterion) => (
              <Card key={criterion.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-center gap-4 lg:w-64 shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <criterion.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{criterion.name}</h4>
                        <p className="text-sm text-muted-foreground">Waga: {criterion.weight}%</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4">{criterion.description}</p>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Co bierzemy pod uwagę:</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {criterion.factors.map((factor, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Źródła danych i niezależność redakcji</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">
              Dane do naszych recenzji pozyskujemy z oficjalnych stron producentów i autoryzowanych
              sprzedawców. Weryfikujemy informacje o cenach, specyfikacji technicznej, warunkach
              gwarancji i polityce zwrotów.
            </p>
            <p className="text-muted-foreground">
              Szczególną uwagę zwracamy na rozbieżności między komunikacją marketingową a
              rzeczywistymi warunkami oferty. W naszych recenzjach jasno wskazujemy przypadki, gdy
              informacje na stronie mogą wprowadzać konsumentów w błąd.
            </p>
            <p className="text-muted-foreground">
              Nie przyjmujemy żadnego wynagrodzenia od producentów. Oceny w testach są ocenami naszej
              redakcji, ale producenci nie mają na nie wpływu. Linki do sklepów są linkami
              bezpośrednimi, nie afiliacyjnymi. Strona może być finansowana jedynie z reklam
              zewnętrznych dostawców wyświetlanych na stronie i odpowiednio oznaczonych, niemających
              wpływu na ranking produktów.
            </p>
          </CardContent>
        </Card>

        {/* CTAs */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Ranking materaców</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Sprawdź nasz ranking 10 materaców piankowych testowanych według powyższej metodologii.
            </p>
            <Button asChild size="sm">
              <Link href="/ranking">
                Zobacz ranking materaców
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Ranking prześcieradeł</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Sprawdź nasz ranking Top 5 prześcieradeł jersey z gumką w rozmiarze 90&times;200 cm.
            </p>
            <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/ranking-przescieradel">
                Zobacz ranking prześcieradeł
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
