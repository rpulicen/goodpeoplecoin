import Link from 'next/link'
import { Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-green">GoodPeopleCoin</h3>
            <p className="text-sm text-muted-foreground">
              Independent source for transparent crypto charity rankings and verified impact projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/goodpeoplecoin?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rankings" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Rankings
                </Link>
              </li>
              <li>
                <Link href="/verified-projects" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Verified Projects
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-neon-green transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/for-projects" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/for-projects/advertiser" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/for-projects/rate-card" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Rate Card
                </Link>
              </li>
              <li>
                <Link href="/for-projects/media-kit" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press-room" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Press Room
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-muted-foreground hover:text-neon-green transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GoodPeopleCoin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
