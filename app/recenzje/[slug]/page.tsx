import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  ArrowLeft,
  Truck,
  Shield,
  Calendar,
  Thermometer,
  Scale
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { getMattressById, getMattressesByRank } from '@/lib/mattresses'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const mattresses = getMattressesByRank()
  return mattresses.map((mattress) => ({
    slug: mattress.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const mattress = getMattressById(slug)
  
  if (!mattress) {
    return {
      title: 'Materac nie znaleziony',
    }
  }

  return {
    title: `${mattress.brand} ${mattress.name} - Recenzja`,
    description: `Szczegółowa recenzja materaca ${mattress.brand} ${mattress.name}. ${mattress.verdict}`,
  }
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params
  const mattress = getMattressById(slug)

  if (!mattress) {
    notFound()
  }

  const allMattresses = getMattressesByRank()
  const currentIndex = allMattresses.findIndex(m => m.id === mattress.id)
  const prevMattress = currentIndex > 0 ? allMattresses[currentIndex - 1] : null
  const nextMattress = currentIndex < allMattresses.length - 1 ? allMattresses[currentIndex + 1] : null

  return (
    <article className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Button asChild variant="ghost" size="sm" className="pl-0">
            <Link href="/recenzje">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Wszystkie recenzje
            </Link>
          </Button>
        </nav>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="outline">#{mattress.rank} w rankingu</Badge>
                {mattress.specs.trialType === 'refund' && (
                  <Badge className="bg-green-100 text-green-700 border-0">
                    Zwrot pieniędzy
                  </Badge>
                )}
              </div>
              <p className="text-lg text-muted-foreground mb-2">{mattress.brand}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {mattress.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-primary text-primary" />
                  <span className="text-2xl font-bold">{mattress.score.toFixed(1)}</span>
                  <span className="text-muted-foreground">/ 10</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-2xl font-bold text-primary">{mattress.price} zł</span>
              </div>
            </header>

            {/* Verdict */}
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="font-semibold text-foreground mb-2">Werdykt redakcji</h2>
                <p className="text-muted-foreground">{mattress.verdict}</p>
              </CardContent>
            </Card>

            {/* Full Review */}
            <div className="prose prose-slate max-w-none mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Pełna recenzja</h2>
              {mattress.fullReview.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Scores Detail */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Oceny szczegółowe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {Object.entries(mattress.scores).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {key === 'comfort' ? 'Komfort' :
                           key === 'support' ? 'Podparcie' :
                           key === 'durability' ? 'Trwałość' :
                           key === 'priceValue' ? 'Stosunek ceny do jakości' :
                           key === 'warranty' ? 'Gwarancja' :
                           key === 'trial' ? 'Okres testowy' : key}
                        </span>
                        <span className="font-semibold text-foreground">{value.toFixed(1)}</span>
                      </div>
                      <Progress value={value * 10} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pros & Cons */}
            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Check className="w-5 h-5" />
                    Zalety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mattress.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <X className="w-5 h-5" />
                    Wady
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mattress.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border">
              {prevMattress ? (
                <Button asChild variant="outline">
                  <Link href={`/recenzje/${prevMattress.id}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {prevMattress.brand} {prevMattress.name}
                  </Link>
                </Button>
              ) : <div />}
              {nextMattress && (
                <Button asChild variant="outline">
                  <Link href={`/recenzje/${nextMattress.id}`}>
                    {nextMattress.brand} {nextMattress.name}
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Buy Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Cena</p>
                    <p className="text-3xl font-bold text-foreground">{mattress.price} zł</p>
                    {mattress.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        {mattress.originalPrice} zł
                      </p>
                    )}
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href={mattress.url} target="_blank" rel="noopener noreferrer">
                      Kup w sklepie
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Link prowadzi do oficjalnego sklepu producenta lub autoryzowanego sprzedawcy.
                  </p>
                </CardContent>
              </Card>

              {/* Specs Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Specyfikacja</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Gęstość pianki</p>
                      <p className="text-sm font-medium text-foreground">{mattress.specs.foamDensity}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Pranie pokrowca</p>
                      <p className="text-sm font-medium text-foreground">
                        {mattress.specs.washTemp > 0 ? `Do ${mattress.specs.washTemp}°C` : 'Brak informacji'}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Gwarancja</p>
                      <p className="text-sm font-medium text-foreground">{mattress.specs.warranty}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Okres testowy</p>
                      <p className="text-sm font-medium text-foreground">{mattress.specs.trialPeriod}</p>
                      <p className="text-xs text-muted-foreground">
                        {mattress.specs.trialType === 'refund' 
                          ? 'Ze zwrotem pieniędzy' 
                          : mattress.specs.trialType === 'exchange'
                            ? 'Tylko wymiana'
                            : 'Brak okresu testowego'}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Dostawa</p>
                      <p className="text-sm font-medium text-foreground">{mattress.specs.deliveryPrice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back to ranking */}
              <Button asChild variant="outline" className="w-full">
                <Link href="/ranking">
                  Powrót do rankingu
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
