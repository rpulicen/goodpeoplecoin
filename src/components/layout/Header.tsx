'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-neon-green">GoodPeopleCoin</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/rankings" className="text-sm font-medium transition-colors hover:text-neon-green">
            Rankings
          </Link>
          <Link href="/verified-projects" className="text-sm font-medium transition-colors hover:text-neon-green">
            Verified Projects
          </Link>
          <Link href="/articles" className="text-sm font-medium transition-colors hover:text-neon-green">
            Articles
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-neon-green">
            How It Works
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-neon-green">
              For Projects
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border border-border rounded-md shadow-lg">
              <Link href="/for-projects" className="block px-4 py-2 text-sm hover:bg-neon-green/10">
                Overview
              </Link>
              <Link href="/for-projects/advertiser" className="block px-4 py-2 text-sm hover:bg-neon-green/10">
                Advertise
              </Link>
              <Link href="/for-projects/rate-card" className="block px-4 py-2 text-sm hover:bg-neon-green/10">
                Rate Card
              </Link>
              <Link href="/for-projects/media-kit" className="block px-4 py-2 text-sm hover:bg-neon-green/10">
                Media Kit
              </Link>
            </div>
          </div>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-neon-green">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/verified-projects">Apply for Verification</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-3">
            <Link
              href="/rankings"
              className="block text-sm font-medium transition-colors hover:text-neon-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rankings
            </Link>
            <Link
              href="/verified-projects"
              className="block text-sm font-medium transition-colors hover:text-neon-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Verified Projects
            </Link>
            <Link
              href="/articles"
              className="block text-sm font-medium transition-colors hover:text-neon-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/how-it-works"
              className="block text-sm font-medium transition-colors hover:text-neon-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/for-projects"
              className="block text-sm font-medium transition-colors hover:text-neon-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Projects
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium transition-colors hover:text-neon-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/verified-projects">Apply for Verification</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
