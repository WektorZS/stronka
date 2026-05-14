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
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Metodologia testów',
  description: 'Poznaj naszą metodologię testowania materaców. Sprawdź, jakie kryteria uwzględniamy i jak obliczamy końcową ocenę.',
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
            Każdy materac w naszym rankingu oceniamy według 6 kluczowych kryteriów. Poniżej
            znajdziesz szczegółowy opis każdego z nich oraz wagi, jakie przypisujemy poszczególnym
            aspektom.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Jak obliczamy końcową ocenę?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">
              Końcowa ocena materaca to średnia ważona wszystkich sześciu kryteriów. Każde
              kryterium oceniamy w skali od 1 do 10, gdzie 10 oznacza wynik idealny. Następnie
              mnożymy każdą ocenę przez przypisaną wagę i sumujemy wyniki.
            </p>
            <p className="text-muted-foreground">
              Wagi poszczególnych kryteriów zostały ustalone według założenia, że komfort w przypadku materaców jest sprawą często indywidualną, zależną od wielu jednostkowych czynników. Z tego powodu ważne jest, aby klient miał prawo do swobodnego przetestowania materaca i ewentualnego odzyskania pieniędzy w przypadku niezadowalającego dobrania materaca do własnych potrzeb.
    
            </p>
             <p className="text-muted-foreground">
              Największy wpływ na końcową ocenę ma stosunek ceny do jakości, oferty (gwarancji, dostawy, polityki zwrotów)
              oraz trwałość obliczana według gęstości pianek użytych w materacu, przejrzystość oferty i informacji odnośnie produkcji.
              Są to kryteria najbardziej uniwersalne. 
            </p>
          </CardContent>
        </Card>

        {/* Criteria */}
        <div className="space-y-8 mb-12" id="kryteria">
          <h2 className="text-2xl font-bold text-foreground">Kryteria oceny</h2>
          
          {criteria.map((criterion) => (
            <Card key={criterion.name}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:w-64 shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <criterion.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{criterion.name}</h3>
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

        {/* Data Sources */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Źródła danych</CardTitle>
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
              Nie przyjmujemy żadnego wynagrodzenia od producentów. Oceny w testach są ocenami naszej redakcji, ale producenci nie mają na nie wpływu. Linki do
              sklepów są linkami bezpośrednimi, nie afiliacyjnymi. Strona może być finansowana jedynie z reklam zewnętrznych dostawców wyświetlanych na stronie i odpowiednio oznaczonych, nie mających wpływu na ranking materaców.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Gotowy na wybór materaca?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Sprawdź nasz ranking i znajdź materac dopasowany do Twoich potrzeb i budżetu.
          </p>
          <Button asChild size="lg">
            <Link href="/ranking">
              Zobacz ranking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
