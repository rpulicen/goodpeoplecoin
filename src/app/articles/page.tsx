'use client'

import { useState } from 'react'
import { ArticleCard } from '@/components/sections/ArticleCard'
import { articles } from '@/lib/articles'
import { Search } from 'lucide-react'

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filteredArticles = articles.filter(article => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'All' || article.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Research & <span className="text-neon-green">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Deep dives into crypto philanthropy, transparency best practices, and impact measurement.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  )
}
