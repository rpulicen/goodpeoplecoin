import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { StatsRow } from '@/components/sections/StatsRow'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { CTASection } from '@/components/sections/CTASection'
import { ArticleCard } from '@/components/sections/ArticleCard'
import { articles } from '@/lib/articles'
import { ArrowRight, Search, TrendingUp } from 'lucide-react'

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Independent On-Chain Verification{' '}
            <span className="text-neon-green">for Crypto Charity Projects</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            We evaluate crypto charity projects using publicly verifiable on-chain data.
            No paid rankings. No token price metrics. Full disclosure methodology.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="xl">
              <Link href="/rankings">
                View Transparency Rankings
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/verified-projects">
                Apply for Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsRow />
      <LogoStrip />
      <FeatureGrid />

      {/* Rankings Preview */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Top Ranked Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See which crypto charity projects rank highest for transparency and impact.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-semibold">Rank</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Project</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Transparency Score</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Total Donated</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, name: 'Binance Charity', category: 'Platform', score: 95, donated: '$150M+' },
                { rank: 2, name: 'Giveth', category: 'Platform', score: 92, donated: '$25M+' },
                { rank: 3, name: 'The Giving Block', category: 'Platform', score: 90, donated: '$100M+' },
                { rank: 4, name: 'Unicef CryptoFund', category: 'Organization', score: 88, donated: '$8M+' },
                { rank: 5, name: 'Gitcoin', category: 'Platform', score: 85, donated: '$50M+' },
              ].map((project) => (
                <tr key={project.rank} className="border-b border-border/50 hover:bg-neon-green/5 transition-colors">
                  <td className="px-4 py-4">
                    <span className="font-semibold text-neon-green">#{project.rank}</span>
                  </td>
                  <td className="px-4 py-4 font-medium">{project.name}</td>
                  <td className="px-4 py-4 text-muted-foreground">{project.category}</td>
                  <td className="px-4 py-4 text-right">
                    <span className="rounded-full bg-neon-green/10 px-3 py-1 text-sm font-medium text-neon-green">
                      {project.score}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">{project.donated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/rankings">
              View Full Rankings
              <Search className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Research & Insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Deep dives into crypto philanthropy, transparency, and impact measurement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/articles">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Discover Transparent Crypto Charities?"
        description="Use GoodPeopleCoin to find and evaluate charitable crypto projects with published transparency criteria."
        primaryCTA={{
          text: 'Explore Rankings',
          href: '/rankings',
        }}
        secondaryCTA={{
          text: 'Learn How It Works',
          href: '/how-it-works',
        }}
      />
    </div>
  )
}
