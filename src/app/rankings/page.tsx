'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUpDown, Search, Filter } from 'lucide-react'

interface Project {
  rank: number
  name: string
  category: string
  score: number
  donated: string
  chain: string
  verified: boolean
}

const projectsData: Project[] = [
  { rank: 1, name: 'Binance Charity', category: 'Platform', score: 95, donated: '$150M+', chain: 'BSC', verified: true },
  { rank: 2, name: 'Giveth', category: 'Platform', score: 92, donated: '$25M+', chain: 'Ethereum', verified: true },
  { rank: 3, name: 'The Giving Block', category: 'Platform', score: 90, donated: '$100M+', chain: 'Multi-chain', verified: true },
  { rank: 4, name: 'Unicef CryptoFund', category: 'Organization', score: 88, donated: '$8M+', chain: 'Ethereum', verified: true },
  { rank: 5, name: 'Gitcoin', category: 'Platform', score: 85, donated: '$50M+', chain: 'Ethereum', verified: true },
  { rank: 6, name: 'Endaoment', category: 'Platform', score: 84, donated: '$15M+', chain: 'Ethereum', verified: true },
  { rank: 7, name: 'ImpactMarket', category: 'Protocol', score: 82, donated: '$5M+', chain: 'Celo', verified: true },
  { rank: 8, name: 'Proof of Humanity', category: 'Protocol', score: 80, donated: '$3M+', chain: 'Ethereum', verified: false },
  { rank: 9, name: 'Kolektivo', category: 'Protocol', score: 78, donated: '$2M+', chain: 'Celo', verified: false },
  { rank: 10, name: 'GoodDollar', category: 'Protocol', score: 76, donated: '$4M+', chain: 'Multi-chain', verified: true },
]

export default function RankingsPage() {
  const [projects, setProjects] = useState<Project[]>(projectsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sortField, setSortField] = useState<keyof Project>('rank')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (field: keyof Project) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }

    const sorted = [...projects].sort((a, b) => {
      const aVal = a[field]
      const bVal = b[field]

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal
      }

      return sortDirection === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal))
    })

    setProjects(sorted)
  }

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Crypto Charity <span className="text-neon-green">Rankings</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Compare projects by transparency score, donation volume, and on-chain verification status.
              Rankings are based solely on transparency criteria.
              Token price, market capitalization, and sponsorships are excluded.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <Card className="p-6 mb-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="h-10 w-10 p-2 text-muted-foreground" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="flex-1 rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  <button
                    onClick={() => handleSort('rank')}
                    className="flex items-center gap-1 hover:text-neon-green transition-colors"
                  >
                    Rank
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  <button
                    onClick={() => handleSort('name')}
                    className="flex items-center gap-1 hover:text-neon-green transition-colors"
                  >
                    Project
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  <button
                    onClick={() => handleSort('category')}
                    className="flex items-center gap-1 hover:text-neon-green transition-colors"
                  >
                    Category
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Chain</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">
                  <button
                    onClick={() => handleSort('score')}
                    className="flex items-center justify-end gap-1 w-full hover:text-neon-green transition-colors"
                  >
                    Score
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Donated</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Verified</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr key={project.rank} className="border-b border-border/50 hover:bg-neon-green/5 transition-colors">
                  <td className="px-4 py-4">
                    <span className="font-semibold text-neon-green">#{project.rank}</span>
                  </td>
                  <td className="px-4 py-4 font-medium">{project.name}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-muted-foreground text-sm">{project.chain}</td>
                  <td className="px-4 py-4 text-right">
                    <span className="rounded-full bg-neon-green/10 px-3 py-1 text-sm font-medium text-neon-green">
                      {project.score}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">{project.donated}</td>
                  <td className="px-4 py-4 text-center">
                    {project.verified ? (
                      <span className="inline-block h-2 w-2 rounded-full bg-neon-green" title="Verified" />
                    ) : (
                      <span className="inline-block h-2 w-2 rounded-full bg-muted" title="Not verified" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Want to see your project listed here?
          </p>
          <Button asChild variant="outline">
            <a href="/verified-projects">Apply for Verification</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
