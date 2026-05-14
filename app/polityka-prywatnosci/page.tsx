import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności serwisu Ranking-Materacow.pl . Dowiedz się, jak przetwarzamy Twoje dane.',
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Polityka prywatności
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Ostatnia aktualizacja: 1 maja 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Administrator danych</h2>
              <p className="text-muted-foreground">
                Administratorem serwisu ranking-materacow.pl jest właściciel serwisu Ranking-Materacow.pl .
                W sprawach związanych z ochroną danych osobowych można kontaktować się przez adres email kontakt@ranking-materacow.pl
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Zakres zbieranych danych</h2>
              <p className="text-muted-foreground mb-4">
                Serwis zbiera tylko dane niezbędne do jego prawidłowego funkcjonowania:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Anonimowe dane analityczne (statystyki odwiedzin, urządzenia, przeglądarki)</li>
                <li>Informacje techniczne niezbędne do wyświetlenia strony</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Serwis nie wymaga rejestracji ani logowania. Nie zbieramy danych osobowych takich
                jak imię, nazwisko, adres email czy numer telefonu. Nie korzystamy z formularzy kontaktowych ani newsletterów, które wymagałyby podania danych osobowych.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Serwis wykorzystuje pliki cookies w następujących celach:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Zapewnienie prawidłowego działania strony</li>
                <li>Anonimowa analiza ruchu na stronie</li>
                <li>Zapamiętanie preferencji użytkownika</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Użytkownik może zarządzać plikami cookies w ustawieniach przeglądarki. Wyłączenie
                cookies może wpłynąć na funkcjonalność strony.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Analityka</h2>
              <p className="text-muted-foreground">
                Serwis korzysta z narzędzi analitycznych do zbierania anonimowych statystyk
                odwiedzin. Dane te pomagają nam zrozumieć, jak użytkownicy korzystają z serwisu i
                umożliwiają jego ulepszanie. Zebrane dane nie pozwalają na identyfikację
                poszczególnych użytkowników.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Linki zewnętrzne</h2>
              <p className="text-muted-foreground">
                Serwis zawiera linki do zewnętrznych stron producentów i sklepów z materacami.
                Niniejsza polityka prywatności dotyczy wyłącznie serwisu Ranking-Materacow.pl . Zachęcamy
                do zapoznania się z politykami prywatności stron, na które prowadzą linki
                zewnętrzne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Prawa użytkownika</h2>
              <p className="text-muted-foreground mb-4">
                Zgodnie z RODO, użytkownikowi przysługują następujące prawa:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Prawo dostępu do swoich danych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do wniesienia sprzeciwu</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                W celu realizacji powyższych praw prosimy o kontakt przez adres email kontakt@ranking-materacow.pl.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Bezpieczeństwo danych</h2>
              <p className="text-muted-foreground">
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych przed
                nieuprawnionym dostępem, utratą lub zniszczeniem. Serwis korzysta z szyfrowanego
                połączenia HTTPS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Zmiany polityki</h2>
              <p className="text-muted-foreground">
                Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. O istotnych
                zmianach będziemy informować na stronie serwisu.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}