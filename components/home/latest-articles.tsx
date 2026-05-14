import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getLatestArticles } from '@/lib/articles'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function LatestArticles() {
  const articles = getLatestArticles(6)

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Blog: Poradniki i artykuły
            </h2>
            <p className="text-lg text-muted-foreground">
              Praktyczna wiedza o materacach, zdrowym śnie i wyposażeniu sypialni.
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/artykuly">
              Wszystkie artykuły
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
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
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/artykuly/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {formatDate(article.date)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
