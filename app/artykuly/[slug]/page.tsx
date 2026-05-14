import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar, User, ChevronRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { articles, getArticleBySlug, getLatestArticles } from '@/lib/articles'
import ReactMarkdown from 'react-markdown'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Artykuł nie znaleziony',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getLatestArticles(4).filter(a => a.slug !== slug).slice(0, 3)

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Strona główna
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/artykuly" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground line-clamp-1">{article.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <article className="max-w-3xl">
            {/* Back Button */}
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
              <Link href="/artykuly">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Wszystkie artykuły
              </Link>
            </Button>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {article.readTime} czytania
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6 text-pretty">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-table:border prose-table:border-border
              prose-th:bg-muted prose-th:px-4 prose-th:py-2
              prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-border
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-3">Tagi:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Szukasz odpowiedniego materaca?
              </h3>
              <p className="text-muted-foreground mb-4">
                Sprawdź nasz ranking porównanych materaców i znajdź model idealny dla siebie.
              </p>
              <Button asChild>
                <Link href="/ranking">
                  Zobacz ranking 2026
                </Link>
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related Articles */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Podobne artykuły
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.slug} className="group">
                    <CardContent className="p-4">
                      <span className="text-xs font-medium text-primary">
                        {relatedArticle.category}
                      </span>
                      <h4 className="font-medium text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/artykuly/${relatedArticle.slug}`}>
                          {relatedArticle.title}
                        </Link>
                      </h4>
                      <span className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedArticle.readTime}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Kategorie</h3>
              <div className="space-y-2">
                {['Poradniki', 'Wiedza', 'Zdrowie', 'Analizy'].map((category) => (
                  <Link
                    key={category}
                    href="/artykuly"
                    className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Przydatne linki</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ranking" className="text-muted-foreground hover:text-primary transition-colors">
                    → Ranking materaców 2026
                  </Link>
                </li>
                <li>
                  <Link href="/metodologia" className="text-muted-foreground hover:text-primary transition-colors">
                    → Metodologia testów
                  </Link>
                </li>
                <li>
                  <Link href="/recenzje" className="text-muted-foreground hover:text-primary transition-colors">
                    → Wszystkie recenzje
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
