import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Blog - Artykuły i poradniki o materacach',
  description: 'Poradniki i artykuły o materacach, zdrowym śnie i wyposażeniu sypialni. Praktyczna wiedza o wyborze materaca, gęstości pianki i pielęgnacji.',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const categories = ['Wszystkie', 'Poradniki', 'Wiedza', 'Zdrowie', 'Analizy']

export default function ArtykulyPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Grupowanie artykułów według kategorii
  const articlesByCategory = categories.reduce((acc, category) => {
    if (category === 'Wszystkie') {
      acc[category] = sortedArticles
    } else {
      acc[category] = sortedArticles.filter(article => article.category === category)
    }
    return acc
  }, {} as Record<string, typeof articles>)

  // Wyróżniony artykuł (najnowszy)
  const featuredArticle = sortedArticles[0]
  const remainingArticles = sortedArticles.slice(1)

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Artykuły i poradniki
          </h1>
          <p className="text-lg text-muted-foreground">
            Praktyczna wiedza o materacach, zdrowym śnie i wyposażeniu sypialni. 
            Dowiedz się, jak wybrać najlepszy materac i jak o niego dbać.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[200px]">
                    <div className="text-center">
                      <span className="text-6xl font-bold text-primary/20">01</span>
                      <p className="text-sm text-primary font-medium mt-2">Najnowszy artykuł</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/artykuly/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredArticle.date)}
                      </span>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/artykuly/${featuredArticle.slug}`}>
                          Czytaj więcej
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default
                ${category === 'Wszystkie' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
            >
              {category} ({articlesByCategory[category].length})
            </span>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.map((article, index) => (
            <Card 
              key={article.slug}
              className="group overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/artykuly/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.date)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Chcesz więcej porad o zdrowym śnie?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Regularnie publikujemy nowe artykuły i aktualizujemy ranking materaców. 
            Sprawdzaj nasz blog, by być na bieżąco.
          </p>
          <Button asChild size="lg">
            <Link href="/ranking">
              Zobacz ranking materaców
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
