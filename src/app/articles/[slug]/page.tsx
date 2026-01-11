import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User } from 'lucide-react'

// Import all MDX articles
const articleComponents: Record<string, any> = {
  'top-charity-crypto-2025': () => import('@/content/top-charity-crypto-2025.mdx'),
  'on-chain-philanthropy-guide': () => import('@/content/on-chain-philanthropy-guide.mdx'),
  'crypto-charity-risks': () => import('@/content/crypto-charity-risks.mdx'),
  'best-wallets-donations-2025': () => import('@/content/best-wallets-donations-2025.mdx'),
  'binance-charity-explainer': () => import('@/content/binance-charity-explainer.mdx'),
  'impact-daos': () => import('@/content/impact-daos.mdx'),
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | GoodPeopleCoin`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article || !articleComponents[slug]) {
    notFound()
  }

  const MDXContent = (await articleComponents[slug]()).default

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-12 md:py-16">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>

          <div className="mx-auto max-w-3xl">
            <div className="mb-4">
              <span className="rounded-full bg-neon-green/10 px-3 py-1 text-xs font-medium text-neon-green">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="container py-12 md:py-16">
        <div className="prose prose-invert mx-auto max-w-3xl">
          <MDXContent />
        </div>
      </article>

      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-muted-foreground mb-6">
              Explore our rankings to find the most transparent crypto charity projects.
            </p>
            <Button asChild size="lg">
              <Link href="/rankings">View Rankings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
