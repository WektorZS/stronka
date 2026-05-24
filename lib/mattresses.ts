export interface Mattress {
  id: string
  slug: string
  rank: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  url: string
  image: string
  score: number
  overallScore: number
  shortDescription: string
  firmness: number
  warranty: string
  scores: {
    comfort: number
    support: number
    durability: number
    priceValue: number
    warranty: number
    trial: number
  }
  specs: {
    foamDensity: string
    washTemp: number
    warranty: string
    trialPeriod: string
    trialType: 'refund' | 'exchange' | 'none'
    delivery: string
    deliveryPrice: string
  }
  pros: string[]
  cons: string[]
  verdict: string
  fullReview: string
}

export const mattresses: Mattress[] = [
  {
    id: 'bett1-bodyguard',
    slug: 'bett1-bodyguard',
    rank: 1,
    name: 'Bodyguard',
    brand: 'Bett1',
    price: 1099,
    url: 'https://www.bett1.pl/produkty/materac-antykartelowy-bodyguard-90x200',
    image: '/images/mattresses/bett1-bodyguard.jpg',
    score: 9.2,
    overallScore: 9.2,
    shortDescription: 'Najlepszy stosunek ceny do jakości z pełnym zwrotem pieniędzy w 100 dni.',
    firmness: 6,
    warranty: '10 lat',
    scores: {
      comfort: 9.0,
      support: 9.5,
      durability: 9.5,
      priceValue: 9.5,
      warranty: 8.0,
      trial: 9.0,
    },
    specs: {
      foamDensity: 'Pianka QXSchaum® 35 kg/m³ i 40 kg/m³',
      washTemp: 60,
      warranty: '10 lat',
      trialPeriod: '100 dni',
      trialType: 'refund',
      delivery: 'Darmowa',
      deliveryPrice: '0 zł',
    },
    pros: [
      'Okres testowy ze zwrotem pieniędzy w ciągu 100 dni',
      'Wysoka gęstość pianki (35-40 kg/m³)',
      'Możliwość prania pokrowca w 60 stopniach',
      'Darmowa dostawa, darmowy zwrot',
      '10 lat gwarancji producenta',
      'Bardzo dobry stosunek jakości do ceny',
    ],
    cons: [
      'Dostawa z Niemiec może trwać odrobinę dłużej niż lokalnie z Polski',
      'Ograniczony asortyment do 2-3 materaców (dla niektórych może być to minusem)',
    ],
    verdict: 'Najlepszy wybór w kategorii cena/jakość, ponad 5 mln sprzedanych egzemplarzy. Jedyny materac w teście oferujący pełny zwrot pieniędzy.',
    fullReview: `Materac Bett1 Bodyguard to produkt, który wyróżnia się na tle konkurencji przede wszystkim najbardziej elastyczną opcją zwrotów, solidną gęstością pianek i rozsądną ceną. Jako jedyny w naszym teście oferuje pełny zwrot pieniędzy w ciągu 100 dni, bez żadnych dodatkowych warunków czy opłat.

    Materac podbił niemiecki rynek, według informacji producenta ten model sprzedano już w ponad 5mln egzemplarzy.
    Pod względem konstrukcji mamy do czynienia z materacem dwustronnym, gdzie każda strona oferuje inną twardość. To praktyczne rozwiązanie pozwala dostosować materac do indywidualnych preferencji bez konieczności zakupu nowego produktu.

Gęstość pianki na poziomie 35-40 kg/m³ to solidna wartość, która przekłada się na dobrą trwałość i odpowiednie podparcie kręgosłupa. Pokrowiec można prać w 60 stopniach, co jest kluczowe dla alergików i osób dbających o higienę, które chcą korzystać z materaca latami.

Darmowa dostawa i 10-letnia gwarancja dopełniają obrazu produktu, który oferuje bardzo dobry stosunek jakości do ceny. Jedynym minusem jest brak możliwości przetestowania materaca w sklepie stacjonarnym, jednak 100-dniowy okres próbny z pełnym zwrotem skutecznie niweluje to ograniczenie.`,
  },
  {
    id: 'hilding-conga',
    slug: 'hilding-conga',
    rank: 6,
    name: 'Conga',
    brand: 'Hilding',
    price: 2189,
    url: 'https://sennamaterace.pl/glowna/432-4594-hilding-conga',
    image: '/images/mattresses/hilding-conga.jpg',
    score: 6.8,
    overallScore: 6.8,
    shortDescription: 'Materac z 15-letnią gwarancją i pokrowcem Cashmere.',
    firmness: 6,
    warranty: '15 lat',
    scores: {
      comfort: 9.0,
      support: 9.0,
      durability: 7.0,
      priceValue: 7.0,
      warranty: 9.0,
      trial: 1.0,
    },
    specs: {
      foamDensity: 'Pianka HR, VISCO (brak gęstości)',
      washTemp: 40,
      warranty: '15 lat',
      trialPeriod: '14 dni (ustawowy)',
      trialType: 'none',
      delivery: 'Darmowa',
      deliveryPrice: '0 zł',
    },
    pros: [
      '15 lat gwarancji',
      'Pokrowiec Cashmere z dodatkiem kaszmiru',
      'Renomowana polska marka',
      'Darmowa dostawa',
    ],
    cons: [
      'Brak informacji o gęstości pianek',
      'Brak okresu testowego poza ustawowym 14 dni',
      'Wyższa cena niż konkurencji',
      'Dostępny tylko u pośredników online w sprzedaży detalicznej',
      'Pranie pokrowca w maksymalnie 40 stopniach',
    ],
    verdict: 'Solidny materac od znanego producenta, ale brak okresu testowego, podanej gęstości pianek i wyższa cena to istotne minusy.',
    fullReview: `Hilding to uznana marka z długą tradycją w produkcji materaców. Model Conga to propozycja z wyższej półki cenowej, która wyróżnia się pokrowcem Cashmere z dodatkiem kaszmiru i wiskozy.

Niestety producent nie udostępnia informacji o gęstości użytych pianek, co utrudnia obiektywną ocenę trwałości materaca. To znaczący minus, ponieważ gęstość pianki jest jednym z kluczowych parametrów wpływających na żywotność produktu.

Gwarancja 15 lat to jeden z najdłuższych okresów w naszym teście. Pokrowiec można prać w 40 stopniach co naszym zdaniem jest niewystarczające.

Głównym problemem jest brak jakiegokolwiek okresu testowego. Przy cenie przekraczającej 2000 zł to istotne ograniczenie. Hilding nie sprzedaje materaców bezpośrednio online, więc trzeba korzystać z pośredników, co może komplikować ewentualne reklamacje.`,
  },
  {
    id: 'jysk-wellpur-kvita',
    slug: 'jysk-wellpur-kvita',
    rank: 3,
    name: 'WELLPUR KVITA',
    brand: 'JYSK',
    price: 1899,
    url: 'https://jysk.pl/sypialnia/materace/materace-piankowe/materac-piankowy-90x200cm-wellpur-kvita-twardy',
    image: '/images/mattresses/jysk-wellpur-kvita.jpg',
    score: 7.4,
    overallScore: 7.4,
    shortDescription: 'Rekordowa gwarancja 25 lat i 100-dniowy test, ale tylko z opcją wymiany.',
    firmness: 8,
    warranty: '25 lat',
    scores: {
      comfort: 8.5,
      support: 8.5,
      durability: 7.0,
      priceValue: 7.0,
      warranty: 10.0,
      trial: 5.0,
    },
    specs: {
      foamDensity: 'Brak podanej gęstości pianki',
      washTemp: 40,
      warranty: '25 lat',
      trialPeriod: '100 dni (seria GOLD)',
      trialType: 'exchange',
      delivery: 'Płatna',
      deliveryPrice: '17 zł',
    },
    pros: [
      '25 lat gwarancji',
      '100 dni testu dla serii GOLD',
      'Sieć sklepów stacjonarnych',
      'Możliwość testu materaca w sklepie o ile jest na ekspozycji',
    ],
    cons: [
      'Tylko wymiana, nie zwrot pieniędzy',
      'Wymagana mata ochronna podczas testu',
      'Zwrot do sklepu lub opłata za odbiór',
      'Brak informacji o gęstości pianek',
      'Pranie pokrowca maks. w 40 stopniach',
    ],
    verdict: 'Atrakcyjna gwarancja 25 lat, ale warunki okresu testowego są restrykcyjne.',
    fullReview: `JYSK to duża skandynawska sieć oferująca szeroki wybór materaców. Model WELLPUR KVITA należy do serii GOLD, która obejmuje 100-dniowy okres testowy.

Największą zaletą jest rekordowa 25-letnia gwarancja. To najdłuższy okres gwarancyjny w naszym teście. Jednak warto zwrócić uwagę na warunki okresu testowego, które są dość restrykcyjne.

Po pierwsze, test dotyczy tylko wymiany na inny materac, nie zwrotu pieniędzy. Po drugie, podczas okresu testowego materac musi być zabezpieczony matą ochronną. Po trzecie, zwrot materaca do sklepu leży po stronie klienta lub wymaga dopłaty za odbiór.

Brak informacji o gęstości użytych pianek to kolejny minus. Pokrowiec można prać w 40 stopniach. Dostawa kosztuje 17 zł, co jest rozsądną kwotą.

Sieć sklepów stacjonarnych pozwala na wcześniejsze obejrzenie i przetestowanie materaca przed zakupem (o ile jest na ekspozycji), co jest znaczącą zaletą w porównaniu z markami sprzedającymi wyłącznie online.`,
  },
  {
    id: 'tempur-ease-20',
    slug: 'tempur-ease-20',
    rank: 7,
    name: 'EASE 20',
    brand: 'TEMPUR',
    price: 3699,
    url: 'https://pl.tempur.com/materace/wedlug-rozmiaru/pojedynczy-materac-PLEA20CMMED90x200.html',
    image: '/images/mattresses/tempur-ease-20.jpg',
    score: 6.5,
    overallScore: 6.5,
    shortDescription: 'Materac marki Premium TEMPUR z pianką NASA',
    firmness: 6,
    warranty: '10 lat',
    scores: {
      comfort: 10.0,
      support: 9.5,
      durability: 7.5,
      priceValue: 5.0,
      warranty: 8.0,
      trial: 1.0,
    },
    specs: {
      foamDensity: 'TEMPUR Adapt™ (brak podanej gęstości)',
      washTemp: 30,
      warranty: '10 lat',
      trialPeriod: 'Brak (Seria EASE nie kwalifikuje się)',
      trialType: 'none',
      delivery: 'Darmowa',
      deliveryPrice: '0 zł',
    },
    pros: [
      'Renomowana marka premium',
      'Pianka TEMPUR o wyjątkowych właściwościach',
      'Darmowa dostawa',
      'Doskonały komfort',
    ],
    cons: [
      'Bardzo wysoka cena',
      'Producent nie podaje gęstości użytych pianek',
      'Brak okresu testowego dla modelu z serii EASE',
      'Pranie tylko w 30 stopniach',
      'Myląca informacja o 365-dniowym teście w koszyku',
    ],
    verdict: 'Materac premium z doskonałą pianką, ale cena i brak testu to poważne ograniczenia.',
    fullReview: `TEMPUR to marka znana z innowacyjnej pianki termoplastycznej, która dostosowuje się do kształtu ciała i temperatury. Model EASE 20 to propozycja z niższej półki cenowej tej marki, choć i tak kosztuje ponad 3600 zł.

Głównym problemem jest wprowadzająca w błąd informacja w koszyku o 365-dniowym teście. Regulamin jasno wskazuje, że ta oferta dotyczy tylko modeli Pro, Pro Plus i Pro Luxe. Model EASE nie kwalifikuje się do tego programu.

Nawet jeśli materac kwalifikowałby się do testu 365 nocy, warunki są restrykcyjne. Test jest ograniczony czasowo (do końca 2026), wymaga użytkowania z ochraniaczem TEMPUR, minimalnie 60 dni użytkowania przed zwrotem i oferuje tylko wymianę na inny materac, nie zwrot pieniędzy.

Pod względem komfortu pianka TEMPUR jest rzeczywiście wyjątkowa i oferuje doskonałe podparcie. Pokrowiec można prać tylko w 30 stopniach, co jest najniższym wynikiem w teście, nie wiemy jak taka temperatura miałaby zapewnić higienę i usunięcia bakterii/roztoczy.

Przy tak wysokiej cenie brak realnego okresu testowego jest poważnym minusem. Darmowa dostawa i 10-letnia gwarancja to solidna oferta, ale nie wyroźnia się na tle konkurencji.`,
  },
  {
    id: 'janpol-essence',
    slug: 'janpol-essence',
    rank: 5,
    name: 'Essence',
    brand: 'Janpol',
    price: 1399,
    url: 'https://janpolmaterace.pl/produkt/materac-piankowy-palma/',
    image: '/images/mattresses/janpol-essence.jpg',
    score: 7.2,
    overallScore: 7.2,
    shortDescription: 'Solidny materac od renomowanego polskiego producenta w rozsądnej cenie.',
    firmness: 8,
    warranty: '5 lat',
    scores: {
      comfort: 8.0,
      support: 8.0,
      durability: 7.0,
      priceValue: 8.0,
      warranty: 7.0,
      trial: 5.0,
    },
    specs: {
      foamDensity: 'Brak informacji producenta',
      washTemp: 40,
      warranty: '5 lat',
      trialPeriod: '100 dni',
      trialType: 'exchange',
      delivery: 'Darmowa',
      deliveryPrice: '0 zł',
    },
    pros: [
      'Rozsądna cena',
      'Darmowa dostawa',
      'Renomowany polski producent',
    ],
    cons: [
      'Dość krótka gwarancja 5 lat',
      'Brak informacji o gęstości pianek',
      'Na stronie niespójne informacje o temperaturze prania pokrowca (40 vs 60 stopni)',
      'Okres testowy dostępny tylko u pośredników, wymiana na własny koszt',
    ],
    verdict: 'Solidny materac w rozsądnej cenie, ale krótka gwarancja i niejasności w specyfikacji.',
    fullReview: `Janpol to jeden z czołowych polskich producentów materacy. Model Essence to propozycja ze średniej półki cenowej, która oferuje przyzwoity stosunek jakości do ceny.

Problemem jest niespójność informacji na stronie producenta. Ikonka wskazuje na możliwość prania w 40 stopniach, podczas gdy opis mówi o 60 stopniach.

Producent nie udostępnia informacji o gęstości użytych pianek, co utrudnia ocenę trwałości. Gwarancja 5 lat nie jest najkrótsza w teście, ale wciąż wypada słabo w porównaniu z konkurencją oferującą 10 lub nawet 25 lat.

Okres testowy 100 dni jest dostępny tylko u niektórych pośredników i obejmuje wyłącznie wymianę materaca. Klient musi sam dostarczyć materac do sklepu i odebrać nowy, co generuje dodatkowe koszty i niedogodności.

Darmowa dostawa to plus. Cena 1399 zł plasuje ten materac w średnim segmencie cenowym.`,
  },
  {
    id: 'fdm-merido',
    slug: 'fdm-merido',
    rank: 2,
    name: 'Merido',
    brand: 'FDM',
    price: 1519,
    url: 'https://www.fdm.pl/produkt/materac-piankowy-merido',
    image: '/images/mattresses/fdm-merido.jpg',
    score: 7.5,
    overallScore: 7.5,
    shortDescription: 'Materac z największą gęstością pianek w teście lecz krótka gwarancja.',
    firmness: 9,
    warranty: '2 lata',
    scores: {
      comfort: 8.5,
      support: 9.0,
      durability: 10.0,
      priceValue: 7.5,
      warranty: 5.0,
      trial: 3.0,
    },
    specs: {
      foamDensity: 'BUBBLE 45 kg/m³, HR 44 kg/1m³',
      washTemp: 30,
      warranty: '2 lata',
      trialPeriod: '30 dni',
      trialType: 'none',
      delivery: 'Darmowa',
      deliveryPrice: '0 zł',
    },
    pros: [
      'Podwyższona gęstość pianek (BUBBLE 45 kg/m³, HR 44 kg/m³)',
      'Polska produkcja',
      'Pokrowiec z jonami srebra (2%)',
      'Darmowa dostawa',
    ],
    cons: [
      'Tylko podstawowa gwarancja 24 miesiące',
      'Brak okresu testowego',
      'Temperatura prania pokrowca tylko 30 stopni',
      'Zwrot na własny koszt (69-169 zł)',
    ],
    verdict: 'Bardzo twardy materac z wysoką gęstością pianek, ale krótka gwarancja i brak okresu testowego to istotne minusy.',
    fullReview: `FDM to polski producent materaców, który oferuje model Merido w średniej półce cenowej. Producent chwali się podwyższoną gęstością użytych pianek, co jest pozytywnym aspektem wpływającym na trwałość i komfort o ile komuś nie przeszkadza bardzo twarda konstrukcja.

Gwarancja 24 miesiące to najkrótszy okres w całym naszym teście. To zdecydowany minus, szczególnie przy cenie przekraczającej 1500 zł. Brak okresu testowego oznacza, że pozostaje tylko ustawowe 30 dni na zwrot, ale trzeba samemu zorganizować transport, który kosztuje od 69 do 169 zł.

Temperatura prania pokrowca w 30 stopniach to kolejny minus. Dla osób dbających o higienę lub alergików to istotna informacja.

Naszym zdaniem, przy podobnej cenie można znaleźć produkty z dłuższą gwarancją i lepszymi warunkami zwrotu.`,
  },
  {
    id: 'matinee-komedy',
    slug: 'matinee-komedy',
    rank: 8,
    name: 'Komedy',
    brand: 'Matinee',
    price: 1064,
    url: 'https://matinee.pl/produkt/materac-piankowy-komedy/',
    image: '/images/mattresses/matinee-komedy.jpg',
    score: 6.4,
    overallScore: 6.4,
    shortDescription: 'Atrakcyjna cena z darmową dostawą, ale niska gęstość pianki HR.',
    firmness: 7,
    warranty: '2 lata',
    scores: {
      comfort: 8.0,
      support: 7.0,
      durability: 6.0,
      priceValue: 7.5,
      warranty: 5.0,
      trial: 4.0,
    },
    specs: {
      foamDensity: 'HR 27-30 kg/m³, VISCO 41-45 kg/m³',
      washTemp: 40,
      warranty: '2 lata',
      trialPeriod: '45 dni',
      trialType: 'exchange',
      delivery: 'Darmowa',
      deliveryPrice: '0 zł',
    },
    pros: [
      'Jedna z niższych cen w teście',
      'Darmowa dostawa',
      '45 dni testu',
      'Polska produkcja',
      'Dwustronny materac z różną twardością',
    ],
    cons: [
      'Niska gęstość głównej pianki HR (27-30 kg/m³)',
      'Tylko standardowa gwarancja 2 lata',
      'Pranie tylko w 40 stopniach',
      'Okres testowy tylko z opcją wymiany, nie zwrotu pieniędzy',
    ],
    verdict: 'Atrakcyjna cena, ale niska gęstość pianki HR może wpływać na trwałość.',
    fullReview: `Matinee to wysoko pozycjonowany sklep z materacami oferujący własne produkty. Model Komedy to propozycja budżetowa, która wyróżnia się przejrzystą informacją o gęstości użytych pianek.

Niestety, gęstość pianki HR na poziomie 27-30 kg/m³ to niska wartość, która może wpływać na szybsze zużycie materaca. Pianka VISCO o gęstości 41-45 kg/m³ jest lepsza, ale to tylko warstwa wierzchnia, a główną funkcję nośną pełni pianka HR.

45-dniowy okres testowy brzmi atrakcyjnie, ale jest obwarowany warunkami. Test dotyczy tylko sytuacji, gdy wybrano złą twardość materaca, nie rozmiar. Nie jest jasne, jak producent zamierza to weryfikować.

Gwarancja 2 lata to jedna z najkrótszych w teście. Przy atrakcyjnej cenie i darmowej dostawie może to być opcja dla osób z ograniczonym budżetem, ale trzeba liczyć się z potencjalnie krótszą żywotnością produktu.`,
  },
  {
    id: 'ikea-akrehamn',
    slug: 'ikea-akrehamn',
    rank: 4,
    name: 'AKREHAMN',
    brand: 'IKEA',
    price: 999,
    url: 'https://www.ikea.com/pl/pl/p/akrehamn-materac-piankowy-twardy-bialy-40481667/',
    image: '/images/mattresses/ikea-akrehamn.jpg',
    score: 7.3,
    overallScore: 7.3,
    shortDescription: 'Budżetowy materac IKEA z 90-dniowym testem wymiany i dostawą od 5 zł.',
    firmness: 7,
    warranty: '10 lat',
    scores: {
      comfort: 8.0,
      support: 8.0,
      durability: 7.5,
      priceValue: 7.5,
      warranty: 8.0,
      trial: 5.0,
    },
    specs: {
      foamDensity: 'Zimna pianka 35 kg/m³, Memory 50 kg/m³, Rdzeń 28 kg/m³',
      washTemp: 60,
      warranty: '10 lat',
      trialPeriod: '90 dni',
      trialType: 'exchange',
      delivery: 'od 5 zł (IKEA Family)',
      deliveryPrice: 'od 5 zł',
    },
    pros: [
      'Solidna gęstość pianek w tej cenie (35-50 kg/m³)',
      'Pranie w 60 stopniach',
      '10 lat gwarancji',
      '90 dni na wymianę',
    ],
    cons: [
      'Tylko wymiana na inny materac, nie zwrot',
      'Trzeba samemu dostarczyć materac do sklepu',
      'Brak darmowej dostawy',
      'Rdzeń o niskiej gęstości (28 kg/m³)',
    ],
    verdict: 'Dobra opcja budżetowa z przyzwoitą specyfikacją, ale ograniczone warunki zwrotu.',
    fullReview: `IKEA AKREHAMN to jeden z lepiej wyposażonych materacy w ofercie szwedzkiego giganta. Konstrukcja łącząca zimną piankę, piankę memory i rdzeń poliuretanowy zapewnia zróżnicowane podparcie.

Gęstość zimnej pianki na poziomie 35 kg/m³ i pianki memory 50 kg/m³ to dobre wartości. Jednak rdzeń o gęstości zaledwie 28 kg/m³ może wpływać na niską długowieczność materaca.

90-dniowy okres testowy to atrakcyjna oferta, ale jest to tylko możliwość wymiany na inny materac, nie zwrot pieniędzy. Dodatkowo materac trzeba samemu dostarczyć do sklepu IKEA, co może być problematyczne.

Gwarancja 10 lat i możliwość prania pokrowca w 60 stopniach to solidne atuty. Dostawa od 5 zł z kartą IKEA Family to dość dobra oferta, choć brak darmowej dostawy to minus.

Przy cenie 999 zł i bogatej specyfikacji technicznej to rozsądna opcja dla osób z umiarkowanym budżetem, które mają łatwy dostęp do sklepu IKEA.`,
  },
  {
    id: 'agata-hudson',
    slug: 'agata-hudson',
    rank: 9,
    name: 'Hudson Antialergic',
    brand: 'Agata Meble',
    price: 899,
    url: 'https://www.agatameble.pl/meble/materace-i-stelaze/materace/materac-profilowany-hudson-antialergic-90x200-cm',
    image: '/images/mattresses/agata-hudson.jpg',
    score: 5.7,
    overallScore: 5.7,
    shortDescription: 'Materac z dużego sklepu, który niestety niczym się nie wyróżnia.',
    firmness: 5,
    warranty: '2 lata',
    scores: {
      comfort: 6.5,
      support: 8.0,
      durability: 6.0,
      priceValue: 7.0,
      warranty: 5.0,
      trial: 1.0,
    },
    specs: {
      foamDensity: '28 kg/m³, 60 kg/m³, 28 kg/m³',
      washTemp: 60,
      warranty: '2 lata (na wkład)',
      trialPeriod: 'Brak',
      trialType: 'none',
      delivery: '59 zł',
      deliveryPrice: '59 zł',
    },
    pros: [
      'Stosunkowo niska cena',
      'Pranie w 60 stopniach',
      'Sieć sklepów stacjonarnych',
    ],
    cons: [
      'Główna pianka jest z połączenia róznych pianek, jakich? ',
      'Tylko standardowy okres gwarancji 2 lata',
      'Brak okresu testowego',
      'Brak darmowej dostawy, koszt 59 zł',
    ],
    verdict: 'Tańszy materac z wieloma minusami. Niska gęstość pianki, krótka gwarancja i brak testu to poważne ograniczenia.',
    fullReview: `Agata Meble to sieć sklepów meblowych, która sprzedaje materace różnych producentów. Model Hudson Antialergic w cenie regularna=ej 899 zł.


Specyfikacja techniczna jest przeciętna.  Użycie pianek (28 kg/m³) może wpływać na szybsze zużycie. Gwarancja tylko 2 lata na wkład materaca to jedna z najkrótszych w teście.

Brak jakiegokolwiek okresu testowego, wysoka cena dostawy (59 zł) to kolejne minusy. Pranie pokrowca w 60 stopniach to jedyny wyraźny plus tuż przy wysokiej gęstości pianki RE (połączenia różncych pianek)

Przy tak wielu problemach, nawet niska cena niestety nas nie przekonuje`,
  },
  {
    id: 'ikea-afjaell',
    slug: 'ikea-afjaell',
    rank: 10,
    name: 'AFJAELL',
    brand: 'IKEA',
    price: 349,
    url: 'https://www.ikea.com/pl/pl/p/afjaell-materac-piankowy-srednio-twardy-bialy-40568646/',
    image: '/images/mattresses/ikea-afjaell.jpg',
    score: 5.0,
    overallScore: 5.0,
    shortDescription: 'Najtańszy materac w teście - z odpowiednio tanimi właściwościami.',
    firmness: 6,
    warranty: '10 lat',
    scores: {
      comfort: 5.0,
      support: 5.0,
      durability: 4.0,
      priceValue: 7.0,
      warranty: 8.0,
      trial: 1.0,
    },
    specs: {
      foamDensity: '28 kg/m³',
      washTemp: 60,
      warranty: '10 lat',
      trialPeriod: 'Brak',
      trialType: 'none',
      delivery: 'od 5 zł (IKEA Family)',
      deliveryPrice: 'od 5 zł',
    },
    pros: [
      'Bardzo niska cena',
      '10 lat gwarancji',
      'Można przetestować stacjonarnie w sklepie IKEA',
      'Pranie w 60 stopniach',
    ],
    cons: [
      'Bardzo niska gęstość pianki (28 kg/m³)',
      'Brak okresu testowego dla tego modelu',
      'Podstawowa konstrukcja',
      'Brak darmowej dostawy, koszt od 5 zł z kartą IKEA Family',
    ],
    verdict: 'Najtańszy materac w teście, ale niska gęstość pianki oznacza ograniczoną trwałość.',
    fullReview: `IKEA AFJAELL to najtańszy materac w naszym teście. Cena 349 zł jest atrakcyjna, ale odbija się na specyfikacji technicznej.

Gęstość pianki zaledwie 28 kg/m³ to najniższy wynik w teście. Przy tak niskiej gęstości materac może szybciej tracić swoje właściwości i ulegać odkształceniom.

Mimo niskiej ceny IKEA oferuje standardową 10-letnią gwarancję. To pokazuje, że nawet przy budżetowym produkcie marka dba o pewien standard obsługi.

Pokrowiec można prać w 60 stopniach, co jest zaletą dla alergików. Cena dostawy z kartą IKEA Family nie jest wysoka, ale brak darmowej dostawy to minus.

Ten materac może być dobrym wyborem jako rozwiązanie tymczasowe, do pokoju gościnnego lub dla osób z bardzo ograniczonym budżetem. Jednak na główny materac do codziennego użytku zdecydowanie zalecamy modele z wyższą gęstością pianki.`,
  },
]

export function getMattressesByRank(): Mattress[] {
  return [...mattresses]
    .sort((a, b) => b.overallScore - a.overallScore)
    .map((m, index) => ({
      ...m,
      rank: index + 1,
    }))
}

export function getMattressById(id: string): Mattress | undefined {
  return mattresses.find(m => m.id === id)
}

export function getMattressesByPriceRange(min: number, max: number): Mattress[] {
  return mattresses.filter(m => m.price >= min && m.price <= max)
}
