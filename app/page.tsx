import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Award, Shield, Search, Moon, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RankingPreview } from '@/components/home/ranking-preview'
import { SheetsPreview } from '@/components/home/sheets-preview'
import { MethodologyPreview } from '@/components/home/methodology-preview'
import { LatestArticles } from '@/components/home/latest-articles'
import { ToolsSection } from '@/components/home/tools-section'

export const metadata: Metadata = {
  title: 'Ranking Materaców i Prześcieradeł 2026 | Testy i porównania',
  description: 'Redakcja testująca produkty do sypialni. Rankingi i recenzje materaców piankowych oraz prześcieradeł jersey. Sprawdź który produkt wygrał nasz test.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bedroom.jpg"
            alt="Przytulna sypialnia z wysokiej jakości materacem"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
        </div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.08)_1px,transparent_0)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Moon className="w-4 h-4" />
              Ranking zaktualizowany: Maj 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in stagger-1 text-balance">
              Testujemy produkty<br />
              <span className="text-primary">do Twojej sypialni</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in stagger-2 text-pretty leading-relaxed">
              Przetestowaliśmy 10 materaców i 5 prześcieradeł dostępnych na polskim rynku.
              Szczegółowe recenzje, oceny i porównania — bez sponsorowanych treści.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Button asChild size="lg" className="text-base shadow-lg shadow-primary/25">
                <Link href="/ranking">
                  Zobacz ranking 2026
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-background/80 backdrop-blur-sm">
                <Link href="/quiz">
                  Dobierz materac pod siebie
                </Link>
              </Button>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 animate-fade-in stagger-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>10 materaców w teście</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>5 prześcieradeł w teście</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Bez sponsorowanych treści</span>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Ranking Preview */}
      <RankingPreview />

      {/* Sheets Preview */}
      <SheetsPreview />

      {/* Tools Section */}
      <ToolsSection />

    

      {/* Methodology Preview */}
      <MethodologyPreview />

            {/* Trust Indicators */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">15</span>
              <span className="text-sm text-muted-foreground mt-1">Produktów w testach</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">6</span>
              <span className="text-sm text-muted-foreground mt-1">Kryteriów oceny</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">349–3699</span>
              <span className="text-sm text-muted-foreground mt-1">Zakres cenowy (zł)</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">2026</span>
              <span className="text-sm text-muted-foreground mt-1">Aktualne dane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <LatestArticles />

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Moon className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Gotowy na lepszy sen?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-pretty max-w-xl mx-auto leading-relaxed">
              Sprawdź pełny ranking materaców i znajdź model idealnie dopasowany do Twoich potrzeb.
              Każda recenzja zawiera szczegółową analizę zalet i wad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/ranking">
                  Przejdź do rankingu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
<Button
  asChild
  size="lg"
  variant="outline"
  className="text-base border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
>
  <Link href="/quiz">
    Wypełnij quiz
  </Link>
</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
