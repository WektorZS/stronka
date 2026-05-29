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
  gramatura: number | null
  washTemp: number | null
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
    name: 'Jersey z gumką BODYGUARD®',
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
    country: 'Brak danych',
    pros: [
      'Najwyższa gramatura w rankingu: 240 g/m²',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex® Standard 100',
      'Bardzo dobra trwałość materiału',
      'Elastan poprawia dopasowanie do materaca',
      'Dobra oddychalność',
    ],
    cons: [
      'Wysoka cena',
      'Dostępność głównie online',
    ],
  },

  {
    id: 'schoner-wohnen-jersey',
    slug: 'schoner-wohnen-jersey',
    rank: 2,
    name: 'Jersey SCHÖNER WOHNEN',
    brand: 'SCHÖNER WOHNEN',
    price: 89,
    url: 'https://www.amazon.pl/SCHÖNER-WOHNEN-prześcieradlo-Zielone-100x200/dp/B0F8P1PJ25/ref=sr_1_2',
    image: '/images/sheets/schoner-wohnen-jersey.jpg',
    score: 8.4,
    shortDescription:
      'Dobre jakościowo prześcieradło jersey z wyższej półki niż typowe modele marketplace.',
    verdict:
      'Solidne prześcieradło z dobrą elastycznością, komfortem użytkowania i lepszą jakością wykonania niż większość tanich modeli jersey.',
    material: 'Bawełna z dodatkiem elastanu',
    materialType: 'blend',
    gramatura: 180,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: true,
    country: 'Brak danych',
    pros: [
      'Dobra jakość wykonania',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex®',
      'Elastyczne i dobrze dopasowane',
      'Lepsza trwałość niż tanie modele marketowe',
    ],
    cons: [
      'Wyższa cena niż modele budżetowe',
      'Niższa gramatura niż lider rankingu',
    ],
  },

  {
    id: 'jysk-jenny-jersey',
    slug: 'jysk-jenny-jersey',
    rank: 3,
    name: 'Jersey z gumką JENNY',
    brand: 'JYSK',
    price: 35,
    url: 'https://jysk.pl/sypialnia/przescieradla/przescieradla-frotte-i-dzersej/przescieradlo-dzersej-z-gumka-jenny-0',
    image: '/images/sheets/jysk-jenny-jersey.jpg',
    score: 7.9,
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
    country: 'Brak danych',
    pros: [
      'Bardzo dobra cena',
      '100% bawełna',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex®',
      'Dobra dostępność',
    ],
    cons: [
      'Dość niska gramatura',
      'Brak elastanu',
      'Niższa trwałość przy częstym praniu',
    ],
  },

  {
    id: 'biberna-jersey-lidl',
    slug: 'biberna-jersey-lidl',
    rank: 4,
    name: 'Prześcieradło jersey Biberna',
    brand: 'Biberna (Lidl)',
    price: 49.99,
    url: 'https://www.lidl.pl/p/biberna-przescieradlo-z-dzerseju-rozne-rozmiary/p100251944',
    image: '/images/sheets/biberna-jersey-lidl.jpg',
    score: 7.5,
    shortDescription:
      'Solidne prześcieradło jersey z dobrą relacją ceny do jakości.',
    verdict:
      'Lepszy wybór niż większość tanich modeli marketplace. Dobra higiena użytkowania dzięki praniu 60°C i certyfikatowi Oeko-Tex®.',
    material: '100% bawełna jersey',
    materialType: 'cotton',
    gramatura: 140,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Brak danych',
    pros: [
      '100% bawełna',
      'Pranie do 60°C',
      'Certyfikat Oeko-Tex®',
      'Dobra cena',
      'Przyjemny materiał',
    ],
    cons: [
      'Brak elastanu',
      'Średnia trwałość materiału',
      'Mniej komfortowe niż modele premium',
    ],
  },

  {
    id: 'bambaw-bambusowe',
    slug: 'bambaw-bambusowe',
    rank: 5,
    name: 'Prześcieradło bambusowe',
    brand: 'Bambaw',
    price: 119,
    url: 'https://www.amazon.pl/Bambaw-Prześcieradlo-odświeżające-prześcieradlo-jednoosobowe/dp/B0C6R1LN1W/ref=sr_1_46',
    image: '/images/sheets/bambaw-bambusowe.jpg',
    score: 7.1,
    shortDescription:
      'Miękkie i chłodne prześcieradło bambusowe dobrze odprowadzające wilgoć.',
    verdict:
      'Dobry wybór dla osób przegrzewających się podczas snu. Komfort termiczny stoi na wysokim poziomie, ale trwałość zwykle ustępuje najlepszym modelom bawełnianym.',
    material: '100% wiskoza bambusowa',
    materialType: 'blend',
    gramatura: 170,
    washTemp: 40,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    country: 'Brak danych',
    pros: [
      'Bardzo dobra oddychalność',
      'Dobrze odprowadza wilgoć',
      'Miękkie i chłodne w dotyku',
      'Dobry komfort termiczny',
      'Certyfikat Oeko-Tex®',
    ],
    cons: [
      'Pranie tylko do 40°C',
      'Niższa trwałość niż najlepsze modele bawełniane',
      'Wysoka cena względem parametrów',
    ],
  },

  {
    id: 'magano-jersey',
    slug: 'magano-jersey',
    rank: 6,
    name: 'Prześcieradło jersey MAGANO®',
    brand: 'MAGANO',
    price: 69,
    url: 'https://www.amazon.pl/MAGANO®-Prześcieradlo-prasowania-hipoalergiczne-oddychające/dp/B0BYXKDC7Z/ref=sr_1_12',
    image: '/images/sheets/magano-jersey.jpg',
    score: 6.5,
    shortDescription:
      'Elastyczne prześcieradło jersey z dodatkiem syntetyków.',
    verdict:
      'Praktyczne w codziennym użytkowaniu i łatwe w pielęgnacji, ale domieszka poliestru pogarsza oddychalność względem dobrej jakości bawełny.',
    material: 'Bawełna i poliester',
    materialType: 'blend',
    gramatura: 150,
    washTemp: 40,
    hypoallergenic: false,
    oekotex: false,
    elastan: true,
    country: 'Brak danych',
    pros: [
      'Dobrze dopasowuje się do materaca',
      'Nie wymaga prasowania',
      'Miękkie w dotyku',
      'Przyzwoita cena',
    ],
    cons: [
      'Domieszka poliestru pogarsza oddychalność',
      'Brak Oeko-Tex®',
      'Pranie tylko do 40°C',
    ],
  },

  {
    id: 'biedronka-pation-nexa',
    slug: 'biedronka-pation-nexa',
    rank: 7,
    name: 'Nexa z gumką',
    brand: 'Pation Home (Biedronka)',
    price: 79.9,
    url: 'https://home.biedronka.pl/pation-home-przescieradlo-z-gumka-90-x-200-cm-pation-home-nexa-jasnoszare-000000000000744193.html',
    image: '/images/sheets/biedronka-pation-nexa.jpg',
    score: 5.9,
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
    country: 'Brak danych',
    pros: [
      '100% bawełna',
      'Przyjemne w dotyku',
      'Łatwa dostępność',
    ],
    cons: [
      'Pranie tylko 30°C',
      'Brak certyfikatów',
      'Brak elastanu',
      'Słabsza higiena użytkowania',
    ],
  },

  {
    id: 'cashmere-touch-polarowe',
    slug: 'cashmere-touch-polarowe',
    rank: 8,
    name: 'Cashmere Touch',
    brand: 'Przytulne',
    price: 59,
    url: 'https://www.amazon.pl/Przytulne-prześcieradlo-Cashmere-Touch-dżerseju-polarowe/dp/B07H8P8FR2/ref=sr_1_24',
    image: '/images/sheets/cashmere-touch.jpg',
    score: 5.2,
    shortDescription:
      'Bardzo miękkie i ciepłe prześcieradło o syntetycznym charakterze.',
    verdict:
      'Model nastawiony głównie na efekt miękkości i ciepła. Komfort termiczny zimą jest dobry, ale oddychalność wyraźnie słabsza niż w prześcieradłach bawełnianych.',
    material: 'Mikrofibra / poliester',
    materialType: 'polyester',
    gramatura: 160,
    washTemp: 40,
    hypoallergenic: false,
    oekotex: false,
    elastan: true,
    country: 'Brak danych',
    pros: [
      'Bardzo miękkie',
      'Ciepłe zimą',
      'Nie wymaga prasowania',
    ],
    cons: [
      'Słaba oddychalność',
      'Może powodować przegrzewanie',
      'Materiał syntetyczny',
      'Słabszy komfort latem',
    ],
  },

  {
    id: 'home-you-micros-mikrofibra',
    slug: 'home-you-micros-mikrofibra',
    rank: 9,
    name: 'Micros z gumką (mikrofibra)',
    brand: 'home&you',
    price: 39.99,
    url: 'https://home-you.com/pl/p/przescieradlo-z-mikrofibry-z-gumka-micros-90x200-cm-1000024553',
    image: '/images/sheets/home-you-micros-mikrofibra.jpg',
    score: 4.3,
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
      'Brak certyfikatów',
    ],
  },

  {
    id: 'terra-beds-mikrofibra',
    slug: 'terra-beds-mikrofibra',
    rank: 10,
    name: 'Prześcieradło mikrofibra z gumką',
    brand: 'Terra Beds (Amazon)',
    price: 28.88,
    url: 'https://www.amazon.pl/s?k=prześcieradło+mikrofibra+z+gumką+90x200',
    image: '/images/sheets/terra-beds-mikrofibra.jpg',
    score: 3.5,
    shortDescription:
      'Najtańszy model w rankingu wykonany z cienkiej mikrofibry.',
    verdict:
      'Opcja wyłącznie budżetowa. Bardzo niska gramatura, poliester i pranie tylko 30°C znacząco obniżają komfort oraz trwałość.',
    material: '100% poliester (mikrofibra)',
    materialType: 'polyester',
    gramatura: 90,
    washTemp: 30,
    hypoallergenic: false,
    oekotex: false,
    elastan: false,
    country: 'Brak danych',
    pros: [
      'Najniższa cena',
      'Łatwa dostępność online',
    ],
    cons: [
      'Najniższa gramatura w rankingu',
      'Słaba oddychalność',
      'Pranie tylko 30°C',
      'Niska trwałość',
      'Brak certyfikatów',
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