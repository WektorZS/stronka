import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulamin',
  description: 'Regulamin korzystania z serwisu ranking-materacow.pl.',
}

export default function RegulaminPage() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Regulamin serwisu
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Ostatnia aktualizacja: 1 maja 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Postanowienia ogólne
              </h2>

              <p className="text-muted-foreground mb-4">
                Niniejszy regulamin określa zasady korzystania z serwisu internetowego
                ranking-materacow.pl (zwanego dalej „Serwisem”).
              </p>

              <p className="text-muted-foreground mb-4">
                Właścicielem Serwisu jest redakcja Ranking-Materacow.pl z siedzibą w Polsce.
              </p>

              <p className="text-muted-foreground">
                Korzystanie z Serwisu oznacza akceptację niniejszego regulaminu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Charakter treści
              </h2>

              <p className="text-muted-foreground mb-4">
                Treści publikowane w Serwisie mają charakter informacyjny i edukacyjny.
                Recenzje oraz rankingi są opiniami redakcji opartymi na analizie publicznie
                dostępnych danych, specyfikacji producentów oraz własnych kryteriów oceny.
              </p>

              <p className="text-muted-foreground mb-4">
                Serwis nie jest sklepem internetowym i nie prowadzi sprzedaży materacy.
                Linki do sklepów prowadzą do zewnętrznych stron producentów lub sprzedawców.
              </p>

              <p className="text-muted-foreground">
                Redakcja dokłada starań, aby publikowane informacje były aktualne i zgodne
                z rzeczywistością, jednak nie gwarantuje ich kompletności ani niezmienności
                w czasie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Linki afiliacyjne
              </h2>

              <p className="text-muted-foreground">
                Niektóre linki znajdujące się w Serwisie mogą być linkami afiliacyjnymi.
                Oznacza to, że redakcja może otrzymać prowizję w przypadku dokonania zakupu
                po przejściu przez taki link. Nie wpływa to jednak na niezależność opinii,
                ocen i rankingów publikowanych w Serwisie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Prawa autorskie
              </h2>

              <p className="text-muted-foreground mb-4">
                Wszelkie treści publikowane w Serwisie, w tym teksty, grafiki, układ strony
                oraz logo, są chronione prawem autorskim i stanowią własność redakcji
                Test Materacy lub odpowiednich właścicieli znaków towarowych.
              </p>

              <p className="text-muted-foreground">
                Kopiowanie, rozpowszechnianie lub wykorzystywanie treści w celach
                komercyjnych bez pisemnej zgody jest zabronione.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Linki zewnętrzne
              </h2>

              <p className="text-muted-foreground mb-4">
                Serwis zawiera linki do zewnętrznych stron internetowych producentów
                i sprzedawców materacy. Redakcja nie ponosi odpowiedzialności za treść,
                dostępność ani polityki prywatności tych stron.
              </p>

              <p className="text-muted-foreground">
                Użytkownik korzysta z linków zewnętrznych na własną odpowiedzialność.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Odpowiedzialność
              </h2>

              <p className="text-muted-foreground mb-4">
                Redakcja nie ponosi odpowiedzialności za decyzje zakupowe podejmowane
                na podstawie treści publikowanych w Serwisie. Przed zakupem zalecamy
                samodzielną weryfikację informacji na oficjalnych stronach producentów.
              </p>

              <p className="text-muted-foreground">
                Serwis nie odpowiada za ewentualne szkody wynikłe z korzystania lub
                niemożności korzystania z Serwisu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Zmiany regulaminu
              </h2>

              <p className="text-muted-foreground mb-4">
                Redakcja zastrzega sobie prawo do wprowadzania zmian w niniejszym
                regulaminie.
              </p>

              <p className="text-muted-foreground">
                Zmiany wchodzą w życie z chwilą ich opublikowania w Serwisie.
                Dalsze korzystanie z Serwisu oznacza akceptację zmian.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                8. Kontakt
              </h2>

              <p className="text-muted-foreground">
                W sprawach związanych z regulaminem lub funkcjonowaniem Serwisu
                prosimy o kontakt pod adresem:{' '}
                <a
                  href="mailto:kontakt@ranking-materacow.pl"
                  className="text-primary hover:underline"
                >
                  kontakt@ranking-materacow.pl
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}