import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'O redakcji',
  description: 'Poznaj zespół Ranking-Materacow.pl . Dowiedz się, dlaczego powstał ten portal i jakie są nasze cele.',
}

export default function ONasPage() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O redakcji
          </h1>
          <p className="text-lg text-muted-foreground">
            Ranking-Materacow.pl to portal poświęcony obiektywnym testom i porównaniom materaców
            dostępnych na polskim rynku.
          </p>
        </div>

        {/* Mission */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nasza misja</h3>
              <p className="text-sm text-muted-foreground">
                Pomagamy skupić się na najważniejszych aspektach przy wyborze materaca przez internet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dla kogo</h3>
              <p className="text-sm text-muted-foreground">
                Tworzymy treści dla osób poszukujących nowego materaca, które chcą poznać fakty
                zamiast marketingowych obietnic.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nasze zasady</h3>
              <p className="text-sm text-muted-foreground">
                Nie przyjmujemy darmowych produktów ani wynagrodzenia od producentów. Producenci nie mają wpływu na nasze recenzje.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h2 className="text-2xl font-bold text-foreground mb-4">Dlaczego powstał ten portal?</h2>
          <p className="text-muted-foreground mb-4">
            Konsument stający przed wyborem materaca stoi przed ścianą informacji, które na pierwszy rzut oka niewiele mu mówią.
            Producenci świetnie zdają sobie z tego sprawę, używając agresywnego marketingu i nazw, które świetnie brzmią,
            ale tak naprawdę niewiele wnoszą. Chcemy porównać najważniejsze cechy ofert, które mają znaczenie przy wyborze materaca online.
          </p>
          <p className="text-muted-foreground mb-4">
            Postanowiliśmy stworzyć portal, który będzie przejrzyście porównywać materace i wskazywać
            potencjalne pułapki. Analizujemy nie tylko specyfikacje techniczne, ale także warunki
            zakupu, polityki zwrotów i rzeczywiste doświadczenia użytkowników.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Jak pracujemy?</h2>
          <p className="text-muted-foreground mb-4">
            Każdy materac oceniamy według ujednoliconej metodologii, która obejmuje 6 kluczowych
            kryteriów. Zbieramy dane z oficjalnych źródeł, weryfikujemy informacje i porównujemy je z
            konkurencyjnymi produktami.
          </p>
          <p className="text-muted-foreground mb-4">
            Szczególną uwagę zwracamy na gęstość pianki (parametr często pomijany przez producentów),
            rzeczywiste warunki gwarancji i okresu testowego oraz ukryte koszty związane z zakupem i
            ewentualnym zwrotem.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kontakt</h2>
 <p className="text-muted-foreground mb-4">
  Jeśli masz pytania dotyczące naszych testów lub chcesz zgłosić błąd w recenzji,
  skontaktuj się z nami przez adres email. Staramy się odpowiadać na wszystkie
  wiadomości w ciągu 48 godzin.
</p>

<a
  href="mailto:kontakt@ranking-materacow.pl"
  className="inline-flex items-center text-primary font-medium hover:underline"
>
  kontakt@ranking-materacow.pl
</a>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Poznaj naszą metodologię
          </h2>
          <p className="text-muted-foreground mb-6">
            Dowiedz się, jak testujemy materace i jakie kryteria uwzględniamy w naszych ocenach.
          </p>
          <Button asChild size="lg">
            <Link href="/metodologia">
              Zobacz metodologię
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}