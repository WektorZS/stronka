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
  gramatura: number // g/m² - for all products
  washTemp: number // °C
  hypoallergenic: boolean
  oekotex: boolean
  elastan: boolean
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
    score: 9.4,
    shortDescription: 'Premium bawełna jersey 240 g/m² z certyfikatem Oeko-Tex®. Najwyższa gramatura i temp. prania 60°C w teście.',
    verdict: 'Najlepszy wybór: najwyższa gramatura, certyfikat Oeko-Tex®, pranie 60°C i naturalny skład 96% bawełna + 4% elastan.',
    material: '96% bawełna, 4% elastan',
    materialType: 'cotton',
    gramatura: 240,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: true,
    pros: [
      'Najwyższa gramatura w teście: 240 g/m²',
      'Certyfikat Oeko-Tex® Standard 100 - brak szkodliwych substancji',
      'Pranie do 60°C - eliminuje roztocza i bakterie',
      '96% bawełna jersey - miękka, oddychająca, naturalna',
      'Dopasowuje się do materacy do 22 cm wysokości',
      'Dostępne w dwóch eleganckich kolorach: biały i srebrny',
    ],
    cons: [
      'Wyższa cena niż syntetyczne alternatywy',
      'Dostępny głównie online (bett1.pl lub Amazon.pl)',
    ],
  },
  {
    id: 'jysk-jenny-jersey',
    slug: 'jysk-jenny-jersey',
    rank: 2,
    name: 'Jersey z gumką JENNY',
    brand: 'JYSK',
    price: 32.50,
    url: 'https://jysk.pl/sypialnia/przescieradla/przescieradla-frotte-i-dzersej/przescieradlo-dzersej-z-gumka-jenny-0',
    image: '/images/sheets/jysk-jenny-jersey.jpg',
    score: 6.8,
    shortDescription: 'Bawełniane prześcieradło JYSK w dobrej cenie, ale niska gramatura 130 g/m² wpływa na trwałość.',
    verdict: 'Dobra cena i certyfikat Oeko-Tex®, lecz gramatura 130 g/m² jest prawie dwukrotnie niższa niż lidera.',
    material: '100% bawełna',
    materialType: 'cotton',
    gramatura: 130,
    washTemp: 60,
    hypoallergenic: true,
    oekotex: true,
    elastan: false,
    pros: [
      'Niska cena - 32,50 zł za rozmiar 90x200',
      'Certyfikat Oeko-Tex® Standard 100',
      '100% bawełna - naturalny skład',
      'Pranie do 60°C',
      'Szeroka dostępność w sieci sklepów JYSK',
    ],
    cons: [
      'Niska gramatura 130 g/m² - cienki materiał, mniej trwały',
      'Brak elastanu - może słabiej przylegać do materaca',
      'Brak informacji o dopasowaniu do wysokości materaca',
    ],
  },
  {
    id: 'biedronka-pation-nexa',
    slug: 'biedronka-pation-nexa',
    rank: 3,
    name: 'Nexa z gumką',
    brand: 'Pation Home (Biedronka)',
    price: 79.90,
    url: 'https://home.biedronka.pl/pation-home-przescieradlo-z-gumka-90-x-200-cm-pation-home-nexa-jasnoszare-000000000000744193.html',
    image: '/images/sheets/biedronka-pation-nexa.jpg',
    score: 5.5,
    shortDescription: 'Bawełna 100%, ale ograniczona temperatura prania do 30°C to poważna wada dla alergików.',
    verdict: 'Naturalny skład z bawełny, ale pranie tylko 30°C znacznie ogranicza skuteczność higienizacji - duży minus dla alergików.',
    material: '100% bawełna',
    materialType: 'cotton',
    gramatura: 140,
    washTemp: 30,
    hypoallergenic: false,
    oekotex: false,
    elastan: false,
    pros: [
      '100% bawełna - naturalny skład',
      'Gramatura 140 g/m² - nieco lepsza niż JYSK',
      'Szeroka dostępność w sklepach Biedronka',
    ],
    cons: [
      'Pranie maksymalnie 30°C - nie eliminuje skutecznie roztoczy i bakterii',
      'Brak certyfikatu Oeko-Tex® - nieznana zawartość substancji chemicznych',
      'Nie zalecana dla alergików z uwagi na niską temp. prania',
      'Brak informacji o wysokości dopasowania do materaca',
    ],
  },
  {
    id: 'home-you-micros-mikrofibra',
    slug: 'home-you-micros-mikrofibra',
    rank: 4,
    name: 'Micros z gumką (mikrofibra)',
    brand: 'home&you',
    price: 39.99,
    url: 'https://home-you.com/pl/p/przescieradlo-z-mikrofibry-z-gumka-micros-90x200-cm-1000024553',
    image: '/images/sheets/home-you-micros-mikrofibra.jpg',
    score: 4.2,
    shortDescription: 'Tanie prześcieradło z mikrofibry (100% poliester). Słabo oddycha i może gromadzić ładunki elektrostatyczne.',
    verdict: 'Poliester jest gorszym materiałem niż bawełna: słabsza oddychalność, efekt statyczny, niezalecany dla alergików.',
    material: '100% poliester (mikrofibra)',
    materialType: 'polyester',
    gramatura: 120,
    washTemp: 40,
    hypoallergenic: false,
    oekotex: false,
    elastan: false,
    pros: [
      'Niska cena - 39,99 zł',
      'Pranie do 40°C',
      'Szeroka dostępność w sieci home&you',
    ],
    cons: [
      '100% poliester - syntetyczny materiał, gorsze oddychanie nocne',
      'Niska gramatura 120 g/m² - najcieńszy produkt w teście',
      'Gromadzi ładunki elektrostatyczne',
      'Brak certyfikatu Oeko-Tex®',
      'Nie zalecany dla alergików i osób pocących się w nocy',
    ],
  },
  {
    id: 'terra-beds-mikrofibra',
    slug: 'terra-beds-mikrofibra',
    rank: 5,
    name: 'Prześcieradło mikrofibra z gumką',
    brand: 'Terra Beds (Amazon)',
    price: 28.88,
    url: 'https://www.amazon.pl/s?k=prześcieradło+mikrofibra+z+gumką+90x200',
    image: '/images/sheets/terra-beds-mikrofibra.jpg',
    score: 3.5,
    shortDescription: 'Najtańsza opcja w teście - 100% poliester, pranie tylko 30°C. Wyłącznie dla osób szukających najtańszej opcji.',
    verdict: 'Najniższa cena w teście, ale poliester + pranie 30°C + brak certyfikatów sprawia, że to opcja wyłącznie budżetowa.',
    material: '100% poliester (mikrofibra)',
    materialType: 'polyester',
    gramatura: 90,
    washTemp: 30,
    hypoallergenic: false,
    oekotex: false,
    elastan: false,
    pros: [
      'Najniższa cena w teście - od 28,88 zł',
      'Łatwa dostępność na Amazon.pl',
    ],
    cons: [
      '100% poliester - syntetyczny, słabo oddychający materiał',
      'Najniższa gramatura w teście: 90 g/m²',
      'Pranie maksymalnie 30°C - niewystarczające dla alergików',
      'Brak certyfikatu Oeko-Tex®',
      'Brak elastanu - może zsuwać się z materaca',
      'Niska trwałość materiału przy regularnym praniu',
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
  return sheets.filter(s => s.materialType === type).sort((a, b) => a.rank - b.rank)
}
