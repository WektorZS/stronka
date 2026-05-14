"use client"

import { useState } from 'react'
import { ChevronDown, Search, HelpCircle, Truck, RefreshCw, Shield, Bed, Heart, DollarSign } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const faqCategories = [
  {
    id: 'ogolne',
    name: 'Pytania ogólne',
    icon: HelpCircle,
    questions: [
      {
        q: 'Jak powstaje ranking materaców?',
        a: 'Nasz ranking powstaje na podstawie wieloetapowego procesu. Każdy materac jest oceniany w 6 kategoriach: komfort, wsparcie kręgosłupa, trwałość, termoregulacja, izolacja ruchu oraz stosunek jakości do ceny. Testy przeprowadzamy przez minimum 30 nocy, angażując osoby o różnej budowie ciała i preferencjach snu. Finalna ocena to średnia ważona wszystkich kategorii.'
      },
      {
        q: 'Czy recenzje są obiektywne?',
        a: 'Tak, nasze recenzje są w 100% niezależne, choć zawsze opinia naszej redakcji będzie oceną subiektywną. Nie przyjmujemy płatności od producentów za pozytywne opinie. Wszystkie materace kupujemy samodzielnie lub otrzymujemy do testów bez zobowiązań. Nasza metodologia jest w pełni transparentna i dostępna na stronie Metodologia.'
      },
      {
        q: 'Jak często aktualizujecie ranking?',
        a: 'Ranking aktualizujemy na bieżąco - gdy tylko przetestujemy nowy materac lub gdy producent wprowadzi istotne zmiany w produkcie. Pełny przegląd wszystkich pozycji przeprowadzamy co kwartał, sprawdzając aktualne ceny, dostępność i ewentualne zmiany w specyfikacji. Staramy się, aby informacje zawsze były aktualne, choć zastrzegamy sobie prawo do błędów bądź nieaktualnych danych na stronie.'
      },
      {
        q: 'Czy mogę zasugerować materac do testu?',
        a: 'Oczywiście! Chętnie przyjmujemy sugestie od czytelników. Możesz skontaktować się z nami przez adres email podany na stronie "O nas". Staramy się testować materace, które cieszą się największym zainteresowaniem naszych czytelników.'
      }
    ]
  },
  {
    id: 'dostawa',
    name: 'Dostawa i zwroty',
    icon: Truck,
    questions: [
      {
        q: 'Jak wygląda dostawa materaca?',
        a: 'Większość nowoczesnych materaców jest dostarczana w formie skompresowanej w kartonie (tzw. "bed in a box"). Dostawa trwa zwykle 2-7 dni roboczych. Niektórzy producenci oferują również dostawę rozłożonego materaca z możliwością wniesienia i ustawienia - warto sprawdzić to przed zakupem.'
      },
      {
        q: 'Co to jest okres próbny?',
        a: 'Okres próbny to czas, w którym możesz testować materac w domu i zdecydować, czy Ci odpowiada. Większość producentów oferuje 45-100 nocy, a wyjątkowo zdarza się 365 nocy. W tym czasie możesz zwrócić materac i wymienić go na inny z oferty. Nieliczne firmy oferują zwrot pieniędzy w okresie testowym.'
      },
      {
        q: 'Jak przebiega zwrot materaca?',
        a: 'Procedura zwrotu różni się w zależności od producenta. Zazwyczaj wystarczy skontaktować się z obsługą klienta, a niektóre firmy organizują odbiór materaca z Twojego domu. Niektórzy producenci współpracują z organizacjami charytatywnymi i przekazują zwrócone materace potrzebującym.'
      },
      {
        q: 'Czy muszę przechowywać opakowanie?',
        a: 'To zależy od polityki producenta. Niektórzy wymagają, aby materac był zwracany w oryginalnym opakowaniu, podczas gdy inni akceptują zwroty bez niego '
      }
    ]
  },
  {
    id: 'gwarancja',
    name: 'Gwarancja',
    icon: Shield,
    questions: [
      {
        q: 'Co obejmuje gwarancja na materac?',
        a: 'Gwarancja zazwyczaj obejmuje wady produkcyjne, takie jak: odkształcenia powyżej określonej głębokości, pękanie pianki, rozchodzenie się szwów. Nie obejmuje naturalnego zużycia ani uszkodzeń mechanicznych.'
      },
      {
        q: 'Jak długa jest standardowa gwarancja?',
        a: 'Standardowa gwarancja na materace wynosi ustawowe 2 lata, choć niektórzy producenci oferują przedłuzoną gwarancję od 5 do nawet 25 lat gwarancji.'
      },
      {
        q: 'Czy plamy na materacu unieważniają gwarancję?',
        a: 'W większości przypadków tak - plamy i zabrudzenia mogą unieważnić gwarancję. Dlatego zdecydowanie zalecamy używanie wodoodpornego ochraniacza na materac od pierwszego dnia. To niewielka inwestycja, która chroni Twoją gwarancję i wydłuża żywotność materaca.'
      }
    ]
  },
  {
    id: 'wybor',
    name: 'Wybór materaca',
    icon: Bed,
    questions: [
      {
        q: 'Jaki materac wybrać dla osoby z bólem pleców?',
        a: 'Dla osób z bólem pleców rekomendujemy materace o średniej twardości (5-7 w skali 1-10), które zapewniają dobre wsparcie kręgosłupa przy jednoczesnym dopasowaniu do krzywizn ciała. Materace piankowe memory foam lub hybrydowe sprawdzają się najlepiej. Zawsze warto skorzystać z okresu próbnego, bo każdy kręgosłup jest inny.'
      },
      {
        q: 'Materac piankowy czy sprężynowy?',
        a: 'To zależy od Twoich preferencji. Materace piankowe lepiej izolują ruch (idealne dla par), dopasowują się do ciała i są cichsze. W naszym teście porównujemy jedynie materace piankowe.'
      },
      {
        q: 'Jak dobrać twardość materaca do wagi?',
        a: 'Ogólna zasada: im większa waga ciała, tym twardszy materac. Osoby do 60 kg zwykle preferują materace miękkie (3-5), osoby 60-90 kg - średnie (5-7), a osoby powyżej 90 kg - twarde (7-9). To jednak tylko punkt wyjścia - preferencje osobiste i pozycja snu również mają znaczenie.'
      },
      {
        q: 'Czy pozycja snu wpływa na wybór materaca?',
        a: 'Zdecydowanie tak! Osoby śpiące na boku potrzebują miękkszego materaca, który dopasuje się do barków i bioder. Śpiący na plecach dobrze czują się na materacach średnio-twardych. Śpiący na brzuchu potrzebują twardszego podłoża, które zapobiegnie nadmiernemu wyginaniu kręgosłupa.'
      }
    ]
  },
  {
    id: 'pielegnacja',
    name: 'Pielęgnacja',
    icon: RefreshCw,
    questions: [
      {
        q: 'Jak często obracać materac?',
        a: 'Przez pierwsze 3 miesiące zalecamy obracanie materaca co 2 tygodnie (jeśli jest dwustronny) lub obrót o 180 stopni (głowa-nogi). Później wystarczy robić to co 3-6 miesięcy. Regularne obracanie zapewnia równomierne zużycie i wydłuża żywotność materaca.'
      },
      {
        q: 'Jak czyścić materac?',
        a: 'Regularnie odkurzaj materac (co 1-2 miesiące) używając nasadki do tapicerki. Świeże plamy usuwaj wilgotną szmatką z delikatnym detergentem. Raz w roku możesz posypać materac sodą oczyszczoną, zostawić na kilka godzin i odkurzyć - to neutralizuje zapachy. Nigdy nie mocz materaca!'
      },
      {
        q: 'Czy potrzebuję ochraniacza na materac?',
        a: 'Nie jest to konieczne, choć wodoodporny ochraniacz chroni przed plamami, roztoczami, bakteriami i przedwczesnym zużyciem. To niedrogi dodatek (100-300 zł), który może uchronić Twoją gwarancję i znacząco wydłużyć żywotność materaca wartego kilka tysięcy złotych.'
      },
        {
        q: 'Czy to prawda, że materac powinno zmieniać się co 2-3 lata?',
        a: 'Można spotkać takie zalecenie w internecie ze względów higienicznych, ale naszym zdaniem jest to mit. Najważniejszym czynnikiem jest możliwość bezpiecznego prania pokrowca w temperaturze 60°C, które zapewni utrzymanie odpowiedniej higieny.'
      },
      {
        q: 'Kiedy wymienić materac na nowy?',
        a: 'Średnia żywotność (DOBREGO!) materaca to 7-10 lat. Sygnały do wymiany: widoczne wgniecenia, budzisz się z bólem lub po prostu lepiej śpisz w hotelach niż w domu. Jakość snu jest najważniejszym wskaźnikiem.'
      }
    ]
  },
  {
    id: 'ceny',
    name: 'Ceny i budżet',
    icon: DollarSign,
    questions: [
      {
        q: 'Ile powinien kosztować dobry materac?',
        a: 'Dobry materac w rozmiarze 90x200 cm kosztuje zwykle 1000-2500 zł. Poniżej 800 zł trudno o trwały produkt wysokiej jakości. Powyżej 3500 zł płacisz głównie za markę. Najlepszy stosunek jakości do ceny znajdziesz w przedziale 1000-2000 zł.'
      },
      {
        q: 'Czy warto kupować materac w promocji?',
        a: 'W naszym teście podajemy tylko ceny regularne materaców, promocje ciągle się zmieniają. Niektóre firmy stosują niedozwolone praktyki "ciągłych promocji" gdzie dany produkt lub cały asortyment jest w promocji nonstop.Warto śledzić ceny przez dłuższy czas - niektóre "promocje" to fikcyjne obniżki z zawyżonej ceny regularnej.'
      },
      {
        q: 'Czy droższy materac oznacza lepszy sen?',
        a: 'Nie zawsze! Droższe materace często oferują lepsze materiały i dłuższą trwałość, ale komfort snu jest bardzo subiektywny. W naszych testach materace za 1000 zł nieraz wypadały lepiej niż te za 3000 zł. Cena premium to często marketing i marka, nie gwarancja lepszego snu.'
      },
      {
        q: 'Czy warto kupić materac online?',
        a: 'Tak! Materace "bed in a box" sprzedawane online są często tańsze (brak kosztów sklepu stacjonarnego) i oferują hojne okresy próbne (45-365 nocy). To lepsze niż 5 minut leżenia w sklepie. Ryzyko jest minimalne - jeśli nie pasuje, zwracasz bez kosztów (w przypadku sklepu ze zwrotem kosztów, nie wymianą).'
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    activeCategory ? category.id === activeCategory : category.questions.length > 0
  )

  const totalQuestions = faqCategories.reduce((acc, cat) => acc + cat.questions.length, 0)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              Centrum pomocy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Często zadawane pytania
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące materaców, 
              naszego rankingu i procesu zakupowego.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Szukaj w pytaniach..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
              />
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              {totalQuestions} pytań w {faqCategories.length} kategoriach
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-card sticky top-16 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Wszystkie
            </button>
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {filteredCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {category.name}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      ({category.questions.length})
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {category.questions.map((item, idx) => {
                      const itemId = `${category.id}-${idx}`
                      const isOpen = openItems.includes(itemId)
                      
                      return (
                        <div
                          key={idx}
                          className="border rounded-xl overflow-hidden bg-card transition-all hover:border-primary/30"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between p-5 text-left"
                          >
                            <span className="font-medium text-foreground pr-4">
                              {item.q}
                            </span>
                            <ChevronDown 
                              className={cn(
                                "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                                isOpen && "rotate-180"
                              )} 
                            />
                          </button>
                          <div
                            className={cn(
                              "grid transition-all duration-200",
                              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            )}
                          >
                            <div className="overflow-hidden">
                              <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-t pt-4">
                                {item.a}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
            
            {filteredCategories.every(c => c.questions.length === 0) && (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Nie znaleziono pytań
                </h3>
                <p className="text-muted-foreground">
                  Spróbuj innych słów kluczowych lub{' '}
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
                    className="text-primary hover:underline"
                  >
                    wyczyść filtry
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Nie znalazłeś odpowiedzi?
            </h2>
            <p className="text-muted-foreground mb-6">
              Skontaktuj się z nami - chętnie pomożemy i odpowiemy na Twoje pytania.
            </p>
            <a
              href="/o-nas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
