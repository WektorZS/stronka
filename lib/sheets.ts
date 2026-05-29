export type MaterialType = 'cotton' | 'polyester' | 'blend'

export interface Sheet {
  id: string
  slug: string
  rank: number
  name: string
  brand: string
  price: number
  url: string
  image: string
  score: number
  shortDescription: string
  verdict: string
  material: string
  materialType: MaterialType
  gramatura: number
  washTemp: number
  hypoallergenic: boolean
  oekotex: boolean
  elastan: boolean
  country: string
  pros: string[]
  cons: string[]
}

export const sheets: Sheet[] = [
  {
    id: 'bett1-bodyguard-jersey',
    slug: 'bett1-bodyguard-jersey',
    rank: 1,
    name: 'Prześcieradło Jersey z gumką BODYGUARD®',
    brand: 'bett1',
    price: 149,
    url: 'https://www.bett1.pl/produkty/przescieradlo-jersey-z-gumka-bodyguard-90-100x200-biale',
    image: '/images/sheets/bett1-bodyguard-jersey.jpg',
    score: 9.5,
    shortDescription:
      'Najwyższa gramatura w rankingu: 240 g/m², pranie 60°C i certyfikat Oeko-Tex®.',
    verdict:
      'Najbardziej kompletne prześcieradło w rankingu. Bardzo wysoka gramatura, wysoka zawartość bawełny i możliwość prania w 60°C zapewniają bardzo dobrą trwałość oraz higienę użytkowania.',
    material: '96% bawełna, 4% elastan',
    materialType: 'cotton',
    gramatura: 240,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: true,
    country: 'Niemcy',
    pros: [
      'Najwyższa gramatura w rankingu: 240 g/m²',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex® Standard 100',
      'Bardzo dobra trwałość materiału',
      'Elastan poprawia dopasowanie do materaca',
      'Dobra oddychalność',
    ],
    cons: [
      'Dostępność głównie online',
      'Wysoka cena',
    ],
  },

  {
    id: 'schoner-wohnen-jersey',
    slug: 'schoner-wohnen-jersey',
    rank: 2,
    name: 'Prześcieradło Jersey SCHÖNER WOHNEN',
    brand: 'SCHÖNER WOHNEN',
    price: 105,
    url: 'https://www.amazon.pl/SCHÖNER-WOHNEN-prześcieradlo-Zielone-100x200/dp/B0F8P1PJ25/ref=sr_1_2',
    image: '/images/sheets/schoner-wohnen-jersey.jpg',
    score: 8.7,
    shortDescription:
      'Dobre jakościowo prześcieradło jersey lepszej jakości niż większość tanich modeli, z praniem do 60°C i certyfikatem Oeko-Tex®.',
    verdict:
      'Solidne prześcieradło z dobrą elastycznością, komfortem użytkowania i lepszą jakością wykonania niż większość tanich modeli jersey.',
    material: '95% bawełna, 5% elastan',
    materialType: 'cotton',
    gramatura: 180,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: true,
    country: 'Niemcy',
    pros: [
      'Dość wysoka gramatura: 180 g/m²',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex®',
      'Elastyczne i dobrze dopasowane',
      'Do materaców o wysokości do 30 cm',
    ],
    cons: [
      'Wyższa cena niż modele budżetowe',
      'Nie jest to najwyższa gramatura materiału w rankingu',
      'Wyższa cena na stronie producenta niż na Amazonie',
    ],
  },

  {
    id: 'biberna-jersey-lidl',
    slug: 'biberna-jersey-lidl',
    rank: 3,
    name: 'Prześcieradło Jersey Biberna',
    brand: 'Biberna (w sklepie Lidl)',
    price: 139,
    url: 'https://www.lidl.pl/p/biberna-przescieradlo-z-dzerseju-rozne-rozmiary/p100251944',
    image: '/images/sheets/biberna-jersey-lidl.jpg',
    score: 8.4,
    shortDescription:
      'Solidne prześcieradło jersey z dobrą relacją ceny do jakości.',
    verdict:
      'Lepszy wybór niż większość tanich modeli. Dobra higiena użytkowania dzięki praniu 60°C i certyfikatowi Oeko-Tex®.',
    material: '95% bawełna, 5% elastan',
    materialType: 'cotton',
    gramatura: 160,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: true,
    country: 'Niemcy',
    pros: [
      '95% bawełna z dodatkiem elastanu 5% dla lepszego dopasowania',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex®',
      'Dobra cena',
      'Wysokość materaca od 25-35cm',
    ],
    cons: [
      'Średnia trwałość materiału - gramatura 160 g/m²',
      'Wysoka cena względem gramatury',
    ],
  },

  {
    id: 'jysk-jenny-jersey',
    slug: 'jysk-jenny-jersey',
    rank: 4,
    name: 'Prześcieradło Jersey Jysk JENNY',
    brand: 'JYSK',
    price: 35,
    url: 'https://jysk.pl/sypialnia/przescieradla/przescieradla-frotte-i-dzersej/przescieradlo-dzersej-z-gumka-jenny-0',
    image: '/images/sheets/jysk-jenny-jersey.jpg',
    score: 8.0,
    shortDescription:
      'Bardzo dobra relacja ceny do jakości. 100% bawełna, Oeko-Tex® i pranie 60°C.',
    verdict:
      'Jeden z najlepszych budżetowych modeli w rankingu. Niska gramatura ogranicza trwałość, ale dobra higiena użytkowania i certyfikat Oeko-Tex® mocno poprawiają ocenę.',
    material: '100% bawełna',
    materialType: 'cotton',
    gramatura: 130,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Dania',
    pros: [
      'Bardzo dobra cena',
      '100% bawełna',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex®',
      'Dobra dostępność nawet w sklepach stacjonarnych',
    ],
    cons: [
      'Dość niska gramatura',
      'Niższa trwałość przy częstym praniu',
    ],
  },

  {
    id: 'eurofirany-jersey',
    slug: 'eurofirany-jersey',
    rank: 5,
    name: 'Prześcieradło Jersey Eurofirany',
    brand: 'Eurofirany',
    price: 75,
    url: 'https://www.eurofirany.com.pl/przescieradlo-jersey-z-gumka-90x200-cm-z-bawelny-kolor-jasnoszary-140-g-m2-id-79801',
    image: '/images/sheets/eurofirany-jersey.jpg',
    score: 7.3,
    shortDescription:
      'Prześcieradło bawełniane polskiej produkcji.',
    verdict:
      'Niezłe prześcieradło polskiej produkcji, ale pranie tylko w 40°C i dość niska gramatura obniżają ocenę pod względem higieny i trwałości.',
    material: '100% bawełna',
    materialType: 'cotton',
    gramatura: 140,
    washTemp: 40,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Polska',
    pros: [
      'Można odebrać w sklepie stacjonarnym',
      'Wysokość materaca do 25cm',
      'Certyfikat Oeko-Tex®',
      'Bawełna, choć szkoda, że bez elastanu',
    ],
    cons: [
      'Dość niska gramatura produktu',
      'Pranie tylko 40°C',
    ],
  },

  {
    id: 'bambaw-bambusowe',
    slug: 'bambaw-bambusowe',
    rank: 6,
    name: 'Prześcieradło Bambusowe Bambaw',
    brand: 'Bambaw',
    price: 146,
    url: 'https://www.amazon.pl/Bambaw-Prześcieradlo-odświeżające-prześcieradlo-jednoosobowe/dp/B0C6R1LN1W/ref=sr_1_46',
    image: '/images/sheets/bambaw-bambusowe.jpg',
    score: 6.5,
    shortDescription:
      'Miękkie i chłodne prześcieradło bambusowe dobrze odprowadzające wilgoć.',
    verdict:
      'Dobry wybór dla osób przegrzewających się podczas snu. Komfort termiczny stoi na wysokim poziomie, ale trwałość zwykle ustępuje najlepszym modelom bawełnianym.',
    material: '100% wiskoza bambusowa',
    materialType: 'blend',
    gramatura: 135,
    washTemp: 30,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Chiny',
    pros: [
      'Bardzo dobra oddychalność',
      'Dobrze odprowadza wilgoć',
      'Miękkie i chłodne w dotyku',
      'Dobry komfort termiczny',
      'Certyfikat Oeko-Tex®',
    ],
    cons: [
      'Chińska produkcja',
      'Pranie tylko do 30°C',
      'Oprócz właściwości termicznych nie wyroźnia się pozostałymi cechami',
    ],
  },

  {
    id: 'biedronka-pation-nexa',
    slug: 'biedronka-pation-nexa',
    rank: 7,
    name: 'Prześcieradło Nexa Pation Home',
    brand: 'Pation Home (Biedronka)',
    price: 79.9,
    url: 'https://home.biedronka.pl/pation-home-przescieradlo-z-gumka-90-x-200-cm-pation-home-nexa-jasnoszare-000000000000744193.html',
    image: '/images/sheets/biedronka-pation-nexa.jpg',
    score: 6.0,
    shortDescription:
      'Bawełniane prześcieradło z ograniczoną higieną użytkowania przez pranie tylko w 30°C.',
    verdict:
      'Naturalna bawełna jest plusem, ale pranie tylko w 30°C znacząco obniża ocenę pod względem higieny i użyteczności dla alergików.',
    material: '100% bawełna',
    materialType: 'cotton',
    gramatura: 140,
    washTemp: 30,
    hypoallergenic: false,
    oekotex: false,
    elastan: false,
    country: 'Polska',
    pros: [
      '100% bawełna, choć szkoda, że bez elastanu',
      'Polska produkcja',
    ],
    cons: [
      'Pranie tylko 30°C',
      'Brak certyfikatów Oeko-Tex® i hipoalergiczności',
      'Słabsza higiena użytkowania',
      'Dość niska gramatura',
    ],
  },

  {
    id: 'cashmere-touch-malika',
    slug: 'cashmere-touch-malika',
    rank: 8,
    name: 'Prześcieradło Cashmere Touch MALIKA®',
    brand: 'MALIKA®',
    price: 105,
    url: 'https://www.amazon.pl/Przytulne-prześcieradlo-Cashmere-Touch-dżerseju-polarowe/dp/B07H8P8FR2/ref=sr_1_24',
    image: '/images/sheets/cashmere-touch-malika.jpg',
    score: 4.8,
    shortDescription:
      'Bardzo miękkie i ciepłe prześcieradło o syntetycznym charakterze.',
    verdict:
      'Model nastawiony głównie na efekt miękkości i ciepła. Komfort termiczny zimą jest dobry, ale oddychalność wyraźnie słabsza niż w prześcieradłach bawełnianych.',
    material: '100% poliester (polar)',
    materialType: 'polyester',
    gramatura: 0,
    washTemp: 0,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Brak danych',
    pros: [
      'Bardzo miękkie',
      'Certyfikat Oeko-Tex®',
      'Wysokość materaca do 28cm',
    ],
    cons: [
      'Słaba oddychalność',
      'Produkt nie jest całoroczny, lepszy na chłodniejsze miesiące',
      'Materiał syntetyczny',
      'Słabszy komfort latem',
      'Brak informacji o gramaturze i zalecanej temperaturze prania',
    ],
  },

  {
    id: 'magano-jersey',
    slug: 'magano-jersey',
    rank: 9,
    name: 'Prześcieradło Jersey MAGANO®',
    brand: 'MAGANO',
    price: 108,
    url: 'https://www.amazon.pl/MAGANO®-Prześcieradlo-prasowania-hipoalergiczne-oddychające/dp/B0BYXKDC7Z/ref=sr_1_12',
    image: '/images/sheets/magano-jersey.jpg',
    score: 4.5,
    shortDescription:
      'Elastyczne prześcieradło jersey z dodatkiem syntetyków.',
    verdict:
      'Praktyczne w codziennym użytkowaniu i łatwe w pielęgnacji, ale domieszka poliestru pogarsza oddychalność względem dobrej jakości bawełny.',
    material: '100% polierster (mikrofibra)',
    materialType: 'blend',
    gramatura: 95,
    washTemp: 40,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Niemcy',
    pros: [
      'Wysokość materaca do 25cm',
      'Miękkie w dotyku',
      'Przyzwoita cena',
      'Certyfikat Oeko-Tex®',
    ],
    cons: [
      'Skład 100% poliester (mikrofibra) - słaba oddychalność, gorszy komfort termiczny',
      'Pranie tylko do 40°C',
      'Spora cena jak za prześcieradło z sztucznego materiału',
    ],
  },

  {
    id: 'home-you-micros-mikrofibra',
    slug: 'home-you-micros-mikrofibra',
    rank: 10,
    name: 'Prześcieradło Micros Home&You',
    brand: 'home&you',
    price: 39.99,
    url: 'https://home-you.com/pl/p/przescieradlo-z-mikrofibry-z-gumka-micros-90x200-cm-1000024553',
    image: '/images/sheets/home-you-micros-mikrofibra.jpg',
    score: 4.0,
    shortDescription:
      'Budżetowe prześcieradło z mikrofibry o słabej przewiewności.',
    verdict:
      'Typowy tani model poliestrowy. Komfort termiczny i oddychalność są wyraźnie słabsze niż w prześcieradłach bawełnianych.',
    material: '100% poliester (mikrofibra)',
    materialType: 'polyester',
    gramatura: 120,
    washTemp: 40,
    hypoallergenic: false,
    oekotex: false,
    elastan: false,
    country: 'Brak danych',
    pros: [
      'Niska cena',
      'Miękkie w dotyku',
      'Łatwe w pielęgnacji',
    ],
    cons: [
      'Słaba oddychalność',
      'Gromadzi ładunki elektrostatyczne',
      'Niższy komfort snu',
      'Brak certyfikatów i informacji o kraju produkcji na stronie producenta',
    ],
  },
]

export function getSheetsByRank(): Sheet[] {
  return [...sheets].sort((a, b) => a.rank - b.rank)
}

export function getSheetById(id: string): Sheet | undefined {
  return sheets.find(s => s.id === id)
}

export function getSheetsByMaterialType(type: MaterialType): Sheet[] {
  return sheets
    .filter(s => s.materialType === type)
    .sort((a, b) => a.rank - b.rank)
}