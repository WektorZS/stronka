# Dokumentacja techniczna - Test Materacy

## Spis tresci

1. [Wprowadzenie](#wprowadzenie)
2. [Struktura projektu](#struktura-projektu)
3. [Technologie](#technologie)
4. [Komponenty](#komponenty)
5. [Dane materacy](#dane-materacy)
6. [Stylowanie](#stylowanie)
7. [SEO i metadane](#seo-i-metadane)
8. [Responsywnosc](#responsywnosc)
9. [Dodawanie nowych materacy](#dodawanie-nowych-materacy)
10. [Uruchomienie projektu](#uruchomienie-projektu)

---

## Wprowadzenie

Test Materacy to strona porownujaca materace piankowe dostepne na polskim rynku. Projekt zbudowany jest w oparciu o Next.js 15 z App Router, Tailwind CSS i komponenty shadcn/ui.

---

## Struktura projektu

```
/
├── app/                          # Strony aplikacji (App Router)
│   ├── layout.tsx               # Glowny layout z naglowkiem i stopka
│   ├── page.tsx                 # Strona glowna
│   ├── globals.css              # Globalne style i zmienne CSS
│   ├── ranking/
│   │   └── page.tsx             # Strona pelnego rankingu
│   ├── recenzje/
│   │   ├── page.tsx             # Lista wszystkich recenzji
│   │   └── [slug]/
│   │       └── page.tsx         # Dynamiczna strona recenzji materaca
│   ├── metodologia/
│   │   └── page.tsx             # Opis metodologii testow
│   ├── o-nas/
│   │   └── page.tsx             # Informacje o redakcji
│   ├── regulamin/
│   │   └── page.tsx             # Regulamin serwisu
│   └── polityka-prywatnosci/
│       └── page.tsx             # Polityka prywatnosci
│
├── components/                   # Komponenty React
│   ├── layout/
│   │   ├── header.tsx           # Naglowek strony z nawigacja
│   │   └── footer.tsx           # Stopka strony
│   ├── home/
│   │   ├── ranking-preview.tsx  # Podglad top 3 materacy na stronie glownej
│   │   ├── methodology-preview.tsx # Podglad kryteriow oceny
│   │   └── latest-articles.tsx  # Lista ostatnich artykulow
│   ├── ranking/
│   │   ├── ranking-table.tsx    # Glowna tabela rankingu z rozwijalnymi szczegolami
│   │   └── ranking-filters.tsx  # Filtry rankingu
│   └── ui/                      # Komponenty shadcn/ui (button, card, badge, etc.)
│
├── lib/
│   ├── mattresses.ts            # DANE MATERACY - glowny plik z informacjami
│   └── utils.ts                 # Funkcje pomocnicze (cn)
│
└── public/
    └── images/
        └── mattresses/          # Zdjecia materacy (do dodania)
```

---

## Technologie

- **Framework**: Next.js 15 (App Router)
- **Jezyk**: TypeScript
- **Stylowanie**: Tailwind CSS 4
- **Komponenty UI**: shadcn/ui
- **Ikony**: Lucide React
- **Fonty**: Inter (body), Merriweather (naglowki)

---

## Komponenty

### Layout

#### `components/layout/header.tsx`
Naglowek strony zawierajacy:
- Logo z linkiem do strony glownej
- Menu nawigacyjne (desktop: poziome, mobile: hamburger)
- Dropdown dla podstron recenzji
- Efekt przezroczystosci przy scrollowaniu

#### `components/layout/footer.tsx`
Stopka z linkami do:
- Sekcji rankingu
- Recenzji poszczegolnych materacy
- Stron informacyjnych (regulamin, polityka prywatnosci)

### Strona glowna

#### `components/home/ranking-preview.tsx`
Wyswietla karty 3 najlepszych materacy z:
- Pozycja w rankingu
- Ocena ogolna
- Cena
- Krotki werdykt
- Przyciski do recenzji i zakupu

#### `components/home/methodology-preview.tsx`
Siatka 6 kart przedstawiajacych kryteria oceny materacy.

#### `components/home/latest-articles.tsx`
Lista ostatnich artykulow/poradnikow (dane statyczne).

### Ranking

#### `components/ranking/ranking-table.tsx`
Glowny komponent rankingu z funkcjami:
- Rozwijanie szczegolowych informacji o materacu
- Wyswietlanie ocen w formie paskow postepu
- Przyciski do recenzji i zakupu
- Responsywny uklad (mobile/desktop)

#### `components/ranking/ranking-filters.tsx`
Filtry szybkiego dostepu (do rozbudowy o funkcjonalnosc).

---

## Dane materacy

### Lokalizacja: `lib/mattresses.ts`

Ten plik zawiera wszystkie dane materacy. Struktura pojedynczego materaca:

```typescript
interface Mattress {
  id: string              // Unikalny identyfikator (slug URL)
  rank: number            // Pozycja w rankingu
  name: string            // Nazwa modelu
  brand: string           // Nazwa producenta
  price: number           // Cena w PLN
  originalPrice?: number  // Cena przed promocja (opcjonalne)
  url: string             // Link do sklepu
  image: string           // Sciezka do zdjecia
  score: number           // Ocena ogolna (1-10)
  scores: {               // Oceny szczegolowe
    comfort: number
    support: number
    durability: number
    priceValue: number
    warranty: number
    trial: number
  }
  specs: {                // Specyfikacja techniczna
    foamDensity: string
    washTemp: number
    warranty: string
    trialPeriod: string
    trialType: 'refund' | 'exchange' | 'none'
    delivery: string
    deliveryPrice: string
  }
  pros: string[]          // Lista zalet
  cons: string[]          // Lista wad
  verdict: string         // Krotki werdykt
  fullReview: string      // Pelna recenzja (tekst)
}
```

### Dostepne funkcje:
- `getMattressById(id)` - pobiera materac po ID
- `getMattressesByRank()` - zwraca materace posortowane wg rankingu

---

## Stylowanie

### Kolory (globals.css)

Projekt uzywa schematu kolorow bialo-niebieskiego. Glowne zmienne:

```css
--primary: oklch(0.45 0.15 240);        /* Niebieski glowny */
--accent: oklch(0.55 0.12 240);         /* Niebieski akcentowy */
--background: oklch(0.99 0.002 240);    /* Jasne tlo */
--foreground: oklch(0.15 0.02 240);     /* Ciemny tekst */
--muted: oklch(0.95 0.01 240);          /* Przytlumione tlo */
--muted-foreground: oklch(0.45 0.03 240); /* Przytlumiony tekst */
```

### Animacje

Zdefiniowane animacje w globals.css:
- `animate-fade-in` - plynne pojawienie sie
- `animate-slide-in-left` - wjazd z lewej
- `animate-scale-in` - skalowanie
- Klasy `stagger-1` do `stagger-5` dla opoznien

---

## SEO i metadane

Kazda strona definiuje wlasne metadane:

```typescript
export const metadata: Metadata = {
  title: 'Tytul strony',
  description: 'Opis strony dla wyszukiwarek',
}
```

Glowny layout (`app/layout.tsx`) definiuje:
- Tytul domyslny i szablon
- Open Graph tags
- Viewport i theme-color
- Robots directives
- Structured data (mozna dodac)

---

## Responsywnosc

Strona jest w pelni responsywna. Breakpointy:

```
sm: 640px   - Wieksze telefony
md: 768px   - Tablety
lg: 1024px  - Male laptopy
xl: 1280px  - Desktop
2xl: 1440px - Duze monitory
```

Kluczowe elementy responsywne:
- **Nawigacja**: Hamburger menu na mobile, poziome na desktop
- **Ranking**: Karty zwija sie na mobile, rozwiniety widok na desktop
- **Recenzje**: Sidebar przenosi sie pod glowna tresc na mobile
- **Siatki**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Dodawanie nowych materacy

1. Otworz plik `lib/mattresses.ts`
2. Dodaj nowy obiekt do tablicy `mattresses[]`
3. Wypelnij wszystkie wymagane pola zgodnie z interfejsem
4. Dostosuj pozycje w rankingu (`rank`) wszystkich materacy
5. Dodaj zdjecie do `/public/images/mattresses/`

Przyklad:

```typescript
{
  id: 'nowy-materac',
  rank: 5,
  name: 'Nazwa Modelu',
  brand: 'Producent',
  price: 1299,
  url: 'https://sklep.pl/materac',
  image: '/images/mattresses/nowy-materac.jpg',
  score: 8.0,
  scores: {
    comfort: 8.0,
    support: 8.0,
    durability: 8.0,
    priceValue: 8.0,
    warranty: 8.0,
    trial: 7.0,
  },
  specs: {
    foamDensity: '35 kg/m3',
    washTemp: 40,
    warranty: '10 lat',
    trialPeriod: '30 dni',
    trialType: 'exchange',
    delivery: 'Darmowa',
    deliveryPrice: '0 zl',
  },
  pros: ['Zaleta 1', 'Zaleta 2'],
  cons: ['Wada 1', 'Wada 2'],
  verdict: 'Krotki opis materaca.',
  fullReview: 'Pelna recenzja materaca...',
}
```

---

## Uruchomienie projektu

### Wymagania
- Node.js 18+
- pnpm (zalecane) lub npm

### Instalacja

```bash
# Klonowanie repozytorium
git clone [url-repo]
cd test-materacy

# Instalacja zaleznosci
pnpm install

# Uruchomienie serwera deweloperskiego
pnpm dev
```

### Budowanie produkcyjne

```bash
pnpm build
pnpm start
```

### Zmienne srodowiskowe

Projekt nie wymaga zmiennych srodowiskowych do podstawowego dzialania.

---

## Kontakt

W razie pytan dotyczacych kodu lub potrzeby pomocy, skontaktuj sie z zespolem deweloperskim.
