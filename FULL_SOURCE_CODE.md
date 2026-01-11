# GoodPeopleCoin - Full Source Code

This document contains ALL source code files from the GoodPeopleCoin project with their complete content.

---

## File: package.json

```json
{
  "name": "goodpeoplecoin",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@mdx-js/loader": "^3.0.0",
    "@mdx-js/react": "^3.0.0",
    "@next/mdx": "^15.1.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "@supabase/supabase-js": "^2.57.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
    "next": "^15.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/mdx": "^2.0.11",
    "@types/node": "^20.11.5",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.18",
    "eslint": "^8.56.0",
    "eslint-config-next": "^15.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3"
  }
}
```

---

## File: next.config.mjs

```javascript
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
```

---

## File: tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## File: tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neon: {
          green: '#00ff41',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## File: postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## File: mdx-components.tsx

```typescript
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mt-6 space-y-3 text-lg leading-8 text-muted-foreground list-disc list-inside">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-6 space-y-3 text-lg leading-8 text-muted-foreground list-decimal list-inside">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-neon-green pl-6 italic">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
```

---

## File: .eslintrc.json

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off"
  }
}
```

---

## File: .gitignore

```text
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
```

---

## File: src/lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## File: src/lib/articles.ts

```typescript
export interface ArticleMetadata {
  title: string
  description: string
  slug: string
  category: string
  date: string
  author: string
}

export const articles: ArticleMetadata[] = [
  {
    title: 'Top Charity Crypto Projects 2025',
    description: 'A comprehensive ranking of the most transparent and impactful crypto charity projects.',
    slug: 'top-charity-crypto-2025',
    category: 'Rankings',
    date: 'Jan 2025',
    author: 'GoodPeopleCoin Research',
  },
  {
    title: 'On-Chain Philanthropy Guide',
    description: 'How to verify donation claims and evaluate crypto charity projects using blockchain data.',
    slug: 'on-chain-philanthropy-guide',
    category: 'Guide',
    date: 'Jan 2025',
    author: 'GoodPeopleCoin Research',
  },
  {
    title: 'Crypto Charity Risks & Red Flags',
    description: 'Common warning signs and due diligence tips for evaluating blockchain-based charitable giving.',
    slug: 'crypto-charity-risks',
    category: 'Education',
    date: 'Dec 2024',
    author: 'GoodPeopleCoin Research',
  },
  {
    title: 'Best Wallets & Tools for Crypto Donations',
    description: 'A practical guide to wallets, platforms, and tools for making charitable crypto donations.',
    slug: 'best-wallets-donations-2025',
    category: 'Tools',
    date: 'Dec 2024',
    author: 'GoodPeopleCoin Research',
  },
  {
    title: 'How Binance Charity Tracks Funds On-Chain',
    description: 'A case study examining how Binance Charity uses blockchain transparency for donor accountability.',
    slug: 'binance-charity-explainer',
    category: 'Case Study',
    date: 'Nov 2024',
    author: 'GoodPeopleCoin Research',
  },
  {
    title: 'Impact DAOs and Charitable Treasuries',
    description: 'Exploring how decentralized organizations are managing charitable funds and impact initiatives.',
    slug: 'impact-daos',
    category: 'Analysis',
    date: 'Nov 2024',
    author: 'GoodPeopleCoin Research',
  },
]
```

---

## File: src/config/analytics.ts

```typescript
export const analyticsConfig = {
  gtm: {
    id: 'GTM-XXXXXX',
  },
  ga4: {
    measurementId: 'G-XXXXXXX',
  },
  googleAds: {
    conversionId: 'AW-XXXXXXX',
  },
} as const
```

---

## File: src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 3%;
    --foreground: 0 0% 98%;
    --card: 0 0% 5%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 5%;
    --popover-foreground: 0 0% 98%;
    --primary: 142 100% 50%;
    --primary-foreground: 0 0% 0%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;
    --accent: 142 100% 50%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 142 100% 50%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

.glow-green {
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
}

.glow-green-sm {
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
}

.gradient-radial {
  background: radial-gradient(circle at center, rgba(0, 255, 65, 0.03) 0%, transparent 70%);
}
```

---

## File: src/components/ui/button.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-neon-green text-black shadow hover:bg-neon-green/90 glow-green-sm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-neon-green/30 bg-transparent text-neon-green shadow-sm hover:bg-neon-green/10 hover:border-neon-green/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## File: src/components/ui/card.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-neon-green/30 hover:shadow-lg hover:shadow-neon-green/10",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

---

## File: src/components/layout/Header.tsx

```typescript
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
            <Link href="/verified-projects">Submit Project</Link>
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
              <Link href="/verified-projects">Submit Project</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

---

## File: src/components/layout/Footer.tsx

```typescript
import Link from 'next/link'
import { Twitter, Github, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-green">GoodPeopleCoin</h3>
            <p className="text-sm text-muted-foreground">
              The trusted source for transparent crypto charity rankings and verified impact projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/goodpeoplecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/goodpeoplecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/goodpeoplecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
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
```

---

## File: src/components/sections/StatsRow.tsx

```typescript
export function StatsRow() {
  const stats = [
    {
      label: 'Projects Tracked',
      value: '150+',
    },
    {
      label: 'On-Chain Verification',
      value: '100%',
    },
    {
      label: 'Total Donations Analyzed',
      value: '$50M+',
    },
    {
      label: 'Monthly Users',
      value: '10K+',
    },
  ]

  return (
    <div className="border-y border-border/40 bg-gradient-radial">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-neon-green md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

---

## File: src/components/sections/LogoStrip.tsx

```typescript
export function LogoStrip() {
  const partners = [
    'Binance Charity',
    'Giveth',
    'The Giving Block',
    'Endaoment',
    'Gitcoin',
    'Unicef CryptoFund',
  ]

  return (
    <div className="border-b border-border/40 bg-background">
      <div className="container py-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Tracking Impact From Leading Projects
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-neon-green"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

---

## File: src/components/sections/FeatureGrid.tsx

```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, TrendingUp, FileText, Zap } from 'lucide-react'

export function FeatureGrid() {
  const features = [
    {
      icon: Shield,
      title: 'On-Chain Verification',
      description: 'Every claim is verified through blockchain data. No trust required, just transparency.',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Rankings',
      description: 'Live updates on project performance, donation flows, and impact metrics.',
    },
    {
      icon: FileText,
      title: 'Detailed Reports',
      description: 'In-depth analysis and research on crypto charity projects and best practices.',
    },
    {
      icon: Zap,
      title: 'Instant Insights',
      description: 'Compare projects, track trends, and discover the most impactful opportunities.',
    },
  ]

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why GoodPeopleCoin?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Bringing transparency and accountability to crypto philanthropy through data-driven insights.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title}>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                  <Icon className="h-6 w-6 text-neon-green" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
```

---

## File: src/components/sections/CTASection.tsx

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <div className="border-y border-border/40 bg-gradient-radial">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## File: src/components/sections/ArticleCard.tsx

```typescript
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, User } from 'lucide-react'

interface ArticleCardProps {
  title: string
  description: string
  slug: string
  category: string
  date: string
  author: string
}

export function ArticleCard({ title, description, slug, category, date, author }: ArticleCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-neon-green/10 px-3 py-1 text-xs font-medium text-neon-green">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl">
          <Link href={`/articles/${slug}`} className="hover:text-neon-green transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <CardDescription className="mb-4 flex-1 text-base">
          {description}
        </CardDescription>
        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/articles/${slug}`}>
            Read Article
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
```

---

## File: src/app/layout.tsx

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoodPeopleCoin - Transparent Crypto Charity Rankings',
  description: 'The trusted source for transparent crypto charity rankings and verified impact projects. Track donations, verify claims, and discover the most impactful charitable crypto projects.',
  keywords: 'crypto charity, blockchain philanthropy, transparent donations, crypto rankings, verified projects',
  openGraph: {
    title: 'GoodPeopleCoin - Transparent Crypto Charity Rankings',
    description: 'Track and verify crypto charity projects with on-chain data.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoodPeopleCoin - Transparent Crypto Charity Rankings',
    description: 'Track and verify crypto charity projects with on-chain data.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

---

## File: src/app/page.tsx

```typescript
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
            Transparent{' '}
            <span className="text-neon-green">Crypto Charity</span>{' '}
            Rankings
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Verify donation claims, track impact, and discover the most transparent charitable crypto projects.
            All data verified on-chain.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="xl">
              <Link href="/rankings">
                View Rankings
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/verified-projects">
                Submit Your Project
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
        description="Join thousands of donors using GoodPeopleCoin to find and verify impactful charitable crypto projects."
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
```

---

## File: src/app/robots.ts

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://goodpeoplecoin.com/sitemap.xml',
  }
}
```

---

## File: src/app/sitemap.ts

```typescript
import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goodpeoplecoin.com'

  // Static pages
  const staticPages = [
    '',
    '/rankings',
    '/verified-projects',
    '/articles',
    '/how-it-works',
    '/for-projects',
    '/for-projects/advertiser',
    '/for-projects/rate-card',
    '/for-projects/media-kit',
    '/contact',
    '/press-room',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
```

---

## File: src/app/rankings/page.tsx

```typescript
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
            <a href="/verified-projects">Submit Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/verified-projects/page.tsx

```typescript
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Shield, TrendingUp, Zap } from 'lucide-react'

export default function VerifiedProjectsPage() {
  const [formData, setFormData] = useState({
    projectName: '',
    website: '',
    category: '',
    blockchain: '',
    contactEmail: '',
    description: '',
    tier: 'basic',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const tiers = [
    {
      name: 'Basic Listing',
      price: 'Free',
      description: 'Get your project listed in our rankings with basic verification.',
      features: [
        'Basic profile listing',
        'Transparency score',
        'On-chain verification',
        'Monthly updates',
      ],
      icon: Shield,
    },
    {
      name: 'Verified Badge',
      price: '$299/mo',
      description: 'Stand out with our verified badge and enhanced visibility.',
      features: [
        'Everything in Basic',
        'Verified badge on profile',
        'Priority in rankings',
        'Dedicated support',
        'Featured in newsletter',
      ],
      icon: Check,
      popular: true,
    },
    {
      name: 'Premium Partner',
      price: '$999/mo',
      description: 'Maximum visibility and comprehensive analytics for serious projects.',
      features: [
        'Everything in Verified',
        'Homepage feature spot',
        'Custom analytics dashboard',
        'Quarterly impact reports',
        'API access',
        'Co-marketing opportunities',
      ],
      icon: TrendingUp,
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get <span className="text-neon-green">Verified</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join the leading crypto charity projects that prioritize transparency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Tier
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select the verification level that best fits your project's needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.name}
                className={tier.popular ? 'border-neon-green/50 shadow-lg shadow-neon-green/10' : ''}
              >
                <CardHeader>
                  {tier.popular && (
                    <div className="mb-2">
                      <span className="rounded-full bg-neon-green/10 px-3 py-1 text-xs font-medium text-neon-green">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base">
                    {tier.description}
                  </CardDescription>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? 'default' : 'outline'}
                    onClick={() => setFormData({ ...formData, tier: tier.name.toLowerCase().replace(' ', '-') })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Application Form
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us about your project and we'll get back to you within 48 hours.
              </p>
            </div>

            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green/10">
                  <Check className="h-8 w-8 text-neon-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. We'll review your application and get back to you within 48 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Submit Another Application
                </Button>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="projectName" className="block text-sm font-medium mb-2">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      required
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="Your Project Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="https://yourproject.com"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      >
                        <option value="">Select a category</option>
                        <option value="platform">Platform</option>
                        <option value="protocol">Protocol</option>
                        <option value="organization">Organization</option>
                        <option value="dao">DAO</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="blockchain" className="block text-sm font-medium mb-2">
                        Blockchain *
                      </label>
                      <select
                        id="blockchain"
                        name="blockchain"
                        required
                        value={formData.blockchain}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      >
                        <option value="">Select blockchain</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="bsc">Binance Smart Chain</option>
                        <option value="polygon">Polygon</option>
                        <option value="celo">Celo</option>
                        <option value="multi">Multi-chain</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="contact@yourproject.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="Tell us about your project's mission, impact, and transparency practices..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/articles/page.tsx

```typescript
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
```

---

## File: src/app/articles/[slug]/page.tsx

```typescript
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
```

---

## File: src/app/how-it-works/page.tsx

```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/sections/CTASection'
import { Search, Database, BarChart3, Shield, CheckCircle, AlertCircle } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: '1. Data Collection',
      description: 'We continuously monitor blockchain networks, tracking donation flows, smart contract interactions, and public disclosures from crypto charity projects.',
    },
    {
      icon: Database,
      title: '2. On-Chain Verification',
      description: 'Every claim is verified against blockchain data. We trace funds, analyze transaction patterns, and verify wallet addresses to ensure accuracy.',
    },
    {
      icon: BarChart3,
      title: '3. Scoring & Analysis',
      description: 'Projects are scored based on transparency, documentation quality, on-chain proof, governance practices, and impact reporting.',
    },
    {
      icon: Shield,
      title: '4. Continuous Monitoring',
      description: 'Rankings are updated in real-time as new data becomes available. Projects are re-evaluated monthly to ensure accuracy.',
    },
  ]

  const criteria = [
    {
      icon: CheckCircle,
      title: 'Transparency Score',
      description: 'Measures how openly a project shares information about donations, spending, and impact.',
    },
    {
      icon: CheckCircle,
      title: 'On-Chain Proof',
      description: 'Verifies that donation claims can be independently validated on the blockchain.',
    },
    {
      icon: CheckCircle,
      title: 'Documentation Quality',
      description: 'Evaluates the depth and clarity of impact reports, financial statements, and public disclosures.',
    },
    {
      icon: CheckCircle,
      title: 'Governance',
      description: 'Assesses decision-making processes, community involvement, and accountability structures.',
    },
  ]

  const redFlags = [
    'Unverifiable donation claims',
    'Opaque wallet addresses',
    'Missing impact reports',
    'Centralized control without oversight',
    'Token incentive misalignment',
    'Inconsistent on-chain activity',
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How It <span className="text-neon-green">Works</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Our methodology combines blockchain analysis, data verification, and transparency scoring to rank crypto charity projects.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A systematic approach to evaluating crypto charity transparency.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card key={step.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="border-y border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Scoring Criteria
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What we evaluate when ranking projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {criteria.map((criterion) => {
              const Icon = criterion.icon
              return (
                <Card key={criterion.title}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-neon-green mb-2" />
                    <CardTitle className="text-lg">{criterion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {criterion.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Red Flags We Watch For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Warning signs that lower a project's transparency score.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <ul className="grid gap-4 md:grid-cols-2">
                {redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        title="Ready to Explore Transparent Projects?"
        description="Browse our rankings to find crypto charity projects that prioritize transparency and accountability."
        primaryCTA={{
          text: 'View Rankings',
          href: '/rankings',
        }}
        secondaryCTA={{
          text: 'Submit Your Project',
          href: '/verified-projects',
        }}
      />
    </div>
  )
}
```

---

## File: src/app/for-projects/page.tsx

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, Megaphone, FileText, ArrowRight } from 'lucide-react'

export default function ForProjectsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Visibility',
      description: 'Get discovered by thousands of potential donors actively looking for transparent crypto charity projects.',
    },
    {
      icon: Users,
      title: 'Build Trust',
      description: 'Demonstrate your commitment to transparency with verified on-chain data and third-party validation.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Support',
      description: 'Featured projects get exposure through our newsletter, social media, and partner channels.',
    },
    {
      icon: FileText,
      title: 'Impact Analytics',
      description: 'Access detailed analytics about your rankings, profile views, and engagement metrics.',
    },
  ]

  const services = [
    {
      title: 'Get Listed',
      description: 'Submit your project for free listing in our rankings database.',
      href: '/verified-projects',
      cta: 'Apply Now',
    },
    {
      title: 'Advertise',
      description: 'Reach our engaged audience with targeted advertising opportunities.',
      href: '/for-projects/advertiser',
      cta: 'Learn More',
    },
    {
      title: 'Rate Card',
      description: 'View pricing for premium listings, featured spots, and advertising.',
      href: '/for-projects/rate-card',
      cta: 'View Pricing',
    },
    {
      title: 'Media Kit',
      description: 'Download our media kit with audience stats and partnership opportunities.',
      href: '/for-projects/media-kit',
      cta: 'Download Kit',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              For <span className="text-neon-green">Projects</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join the leading crypto charity projects that are setting the standard for transparency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why List on GoodPeopleCoin?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Grow your impact by connecting with donors who value transparency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.title}>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to maximize your project's visibility and credibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.href}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Submit your project today and join the growing community of transparent crypto charity projects.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/verified-projects">
                  Submit Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/for-projects/advertiser/page.tsx

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, BarChart3, Users, Globe, ArrowRight } from 'lucide-react'

export default function AdvertiserPage() {
  const adFormats = [
    {
      title: 'Banner Ads',
      description: 'High-visibility banner placements on our homepage and rankings pages.',
      impressions: '100K+/month',
      ctr: '2.5%',
    },
    {
      title: 'Sponsored Listings',
      description: 'Featured placement in our rankings table with "Sponsored" badge.',
      impressions: '50K+/month',
      ctr: '4.2%',
    },
    {
      title: 'Newsletter Sponsorship',
      description: 'Exclusive sponsorship of our weekly newsletter to 10K+ subscribers.',
      impressions: '10K+/week',
      ctr: '8.5%',
    },
    {
      title: 'Article Sponsorship',
      description: 'Sponsor our research articles with logo placement and callout.',
      impressions: '25K+/article',
      ctr: '3.8%',
    },
  ]

  const audienceStats = [
    { label: 'Monthly Visitors', value: '100K+' },
    { label: 'Newsletter Subscribers', value: '10K+' },
    { label: 'Avg. Session Duration', value: '4.5 min' },
    { label: 'Return Visitor Rate', value: '45%' },
  ]

  const audienceSegments = [
    {
      icon: Users,
      title: 'Crypto Donors',
      percentage: '40%',
      description: 'Individuals actively donating to charitable causes with crypto.',
    },
    {
      icon: Target,
      title: 'Project Founders',
      percentage: '25%',
      description: 'Founders and operators of crypto charity projects.',
    },
    {
      icon: BarChart3,
      title: 'Investors & VCs',
      percentage: '20%',
      description: 'Impact investors researching charitable crypto projects.',
    },
    {
      icon: Globe,
      title: 'Researchers',
      percentage: '15%',
      description: 'Academics and journalists studying crypto philanthropy.',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Advertise on <span className="text-neon-green">GoodPeopleCoin</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Reach an engaged audience of crypto donors, project founders, and impact investors.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Stats */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Audience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with the crypto philanthropy community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-12">
          {audienceStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audienceSegments.map((segment) => {
            const Icon = segment.icon
            return (
              <Card key={segment.title}>
                <CardHeader>
                  <Icon className="h-8 w-8 text-neon-green mb-2" />
                  <CardTitle className="text-lg">{segment.title}</CardTitle>
                  <div className="text-2xl font-bold text-neon-green">
                    {segment.percentage}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {segment.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Ad Formats */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Advertising Formats
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the format that best fits your campaign goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {adFormats.map((format) => (
              <Card key={format.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{format.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {format.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-neon-green">
                        {format.impressions}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Impressions
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neon-green">
                        {format.ctr}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Avg. CTR
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Custom packages available for enterprise clients
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/for-projects/rate-card">
                  View Rate Card
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/for-projects/rate-card/page.tsx

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ArrowRight } from 'lucide-react'

export default function RateCardPage() {
  const listings = [
    {
      name: 'Basic Listing',
      price: 'Free',
      period: 'forever',
      features: [
        'Profile in rankings database',
        'Transparency score calculation',
        'On-chain verification',
        'Monthly ranking updates',
      ],
    },
    {
      name: 'Verified Badge',
      price: '$299',
      period: 'per month',
      features: [
        'All Basic features',
        'Verified badge display',
        'Priority ranking placement',
        'Email support',
        'Monthly newsletter feature',
        'Social media mentions',
      ],
      popular: true,
    },
    {
      name: 'Premium Partner',
      price: '$999',
      period: 'per month',
      features: [
        'All Verified features',
        'Homepage featured spot',
        'Custom analytics dashboard',
        'Quarterly impact reports',
        'API access for data',
        'Co-marketing opportunities',
        'Dedicated account manager',
      ],
    },
  ]

  const advertising = [
    {
      name: 'Banner Ad',
      impressions: '100K/month',
      price: '$500',
      period: 'per month',
      positions: ['Homepage header', 'Rankings page sidebar'],
    },
    {
      name: 'Sponsored Listing',
      impressions: '50K/month',
      price: '$750',
      period: 'per month',
      positions: ['Top 5 rankings table', 'Category pages'],
    },
    {
      name: 'Newsletter Sponsor',
      impressions: '10K/week',
      price: '$1,200',
      period: 'per issue',
      positions: ['Header banner', 'Dedicated section'],
    },
    {
      name: 'Article Sponsorship',
      impressions: '25K/article',
      price: '$2,000',
      period: 'per article',
      positions: ['Logo placement', 'Sponsored by section', 'CTA button'],
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Rate <span className="text-neon-green">Card</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Transparent pricing for project listings and advertising opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Project Listings */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Project Listings
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the verification level that fits your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {listings.map((listing) => (
            <Card
              key={listing.name}
              className={listing.popular ? 'border-neon-green/50 shadow-lg shadow-neon-green/10' : ''}
            >
              <CardHeader>
                {listing.popular && (
                  <div className="mb-2">
                    <span className="rounded-full bg-neon-green/10 px-3 py-1 text-xs font-medium text-neon-green">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardTitle className="text-2xl">{listing.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{listing.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {listing.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {listing.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={listing.popular ? 'default' : 'outline'}
                >
                  <Link href="/verified-projects">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advertising */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Advertising Rates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reach our engaged audience of crypto donors and project founders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {advertising.map((ad) => (
              <Card key={ad.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{ad.name}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {ad.impressions} impressions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-neon-green">
                      {ad.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {ad.period}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Placements:</div>
                    <ul className="space-y-1">
                      {ad.positions.map((position) => (
                        <li key={position} className="text-sm text-muted-foreground">
                          • {position}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6">
              <CardDescription className="mb-4">
                Need a custom package or have questions about pricing?
              </CardDescription>
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="border-t border-border/40">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer custom packages for large organizations, DAOs, and foundations with specific needs.
            </p>
            <ul className="text-left mb-8 space-y-2 inline-block">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-neon-green" />
                <span>Custom analytics and reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-neon-green" />
                <span>White-label solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-neon-green" />
                <span>API integration support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-neon-green" />
                <span>Dedicated account management</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us for Enterprise Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/for-projects/media-kit/page.tsx

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Users, TrendingUp, Globe, BarChart3 } from 'lucide-react'

export default function MediaKitPage() {
  const stats = [
    { icon: Users, label: 'Monthly Active Users', value: '100K+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '25% MoM' },
    { icon: Globe, label: 'Countries Reached', value: '120+' },
    { icon: BarChart3, label: 'Projects Tracked', value: '150+' },
  ]

  const demographics = [
    { label: 'Crypto Donors', value: '40%' },
    { label: 'Project Founders', value: '25%' },
    { label: 'Investors & VCs', value: '20%' },
    { label: 'Researchers', value: '15%' },
  ]

  const assets = [
    {
      title: 'Logo Package',
      description: 'PNG, SVG, and EPS formats in various color schemes',
      size: '2.5 MB',
    },
    {
      title: 'Brand Guidelines',
      description: 'Color palette, typography, and usage guidelines',
      size: '1.8 MB',
    },
    {
      title: 'Media Kit PDF',
      description: 'Complete overview with stats and partnership opportunities',
      size: '4.2 MB',
    },
    {
      title: 'Press Images',
      description: 'High-resolution screenshots and product images',
      size: '8.7 MB',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Media <span className="text-neon-green">Kit</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Everything you need to know about GoodPeopleCoin's audience, reach, and partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Platform Statistics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Current metrics and audience insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <CardContent className="p-6 text-center">
                  <Icon className="h-8 w-8 text-neon-green mx-auto mb-4" />
                  <div className="text-3xl font-bold text-neon-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Audience Demographics */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Audience Demographics
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Who uses GoodPeopleCoin.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {demographics.map((demo) => (
                    <div key={demo.label}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{demo.label}</span>
                        <span className="text-neon-green font-bold">{demo.value}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neon-green transition-all"
                          style={{ width: demo.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Assets */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Download Assets
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Brand assets and media resources for partners and press.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {assets.map((asset) => (
            <Card key={asset.title}>
              <CardHeader>
                <CardTitle className="text-xl">{asset.title}</CardTitle>
                <CardDescription className="text-base pt-2">
                  {asset.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{asset.size}</span>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <CardDescription className="mb-4">
              Need custom assets or have media inquiries?
            </CardDescription>
            <Button asChild size="lg">
              <a href="mailto:press@goodpeoplecoin.com">
                Contact Press Team
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8">
              About GoodPeopleCoin
            </h2>
            <Card>
              <CardContent className="p-8 space-y-4 text-muted-foreground">
                <p>
                  GoodPeopleCoin is the leading platform for transparent crypto charity rankings and verified impact projects. We help donors discover and evaluate charitable crypto projects using on-chain data verification and comprehensive transparency scoring.
                </p>
                <p>
                  Founded in 2024, our mission is to bring accountability and transparency to crypto philanthropy by providing donors with the data they need to make informed giving decisions.
                </p>
                <p>
                  Our platform tracks over 150 crypto charity projects, analyzes $50M+ in donation flows, and serves 100K+ monthly users who are committed to transparent and impactful charitable giving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/contact/page.tsx

```typescript
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'General inquiries and support',
      contact: 'hello@goodpeoplecoin.com',
      href: 'mailto:hello@goodpeoplecoin.com',
    },
    {
      icon: MessageSquare,
      title: 'Press',
      description: 'Media and partnership inquiries',
      contact: 'press@goodpeoplecoin.com',
      href: 'mailto:press@goodpeoplecoin.com',
    },
    {
      icon: Send,
      title: 'Telegram',
      description: 'Join our community',
      contact: '@goodpeoplecoin',
      href: 'https://t.me/goodpeoplecoin',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in <span className="text-neon-green">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions about our rankings, want to submit a project, or interested in partnering with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <Card key={method.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    className="text-neon-green hover:underline"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green/10">
                  <Send className="h-8 w-8 text-neon-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Submit a Project</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="press">Press/Media Inquiry</option>
                      <option value="advertising">Advertising</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/app/press-room/page.tsx

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Download, Mail, Calendar } from 'lucide-react'

export default function PressRoomPage() {
  const pressReleases = [
    {
      title: 'GoodPeopleCoin Launches Comprehensive Crypto Charity Rankings Platform',
      date: 'January 15, 2025',
      excerpt: 'New platform brings transparency to crypto philanthropy with on-chain verification and detailed project analysis.',
    },
    {
      title: 'GoodPeopleCoin Tracks $50M in Crypto Donations Across 150+ Projects',
      date: 'January 10, 2025',
      excerpt: 'Platform milestone showcases growing adoption of blockchain technology for charitable giving and impact tracking.',
    },
    {
      title: 'Q4 2024 Crypto Charity Transparency Report Released',
      date: 'December 28, 2024',
      excerpt: 'Comprehensive analysis reveals trends in crypto philanthropy and highlights most transparent projects of the year.',
    },
  ]

  const mediaAssets = [
    {
      title: 'Media Kit',
      description: 'Brand assets, logos, and product screenshots',
      size: '8.5 MB',
    },
    {
      title: 'Fact Sheet',
      description: 'Key statistics and company information',
      size: '1.2 MB',
    },
    {
      title: 'Executive Bios',
      description: 'Leadership team backgrounds and photos',
      size: '2.8 MB',
    },
  ]

  const coverage = [
    {
      outlet: 'CoinDesk',
      title: 'How GoodPeopleCoin is Bringing Transparency to Crypto Charity',
      date: 'Jan 2025',
    },
    {
      outlet: 'The Block',
      title: 'New Platform Ranks Crypto Charities by On-Chain Verification',
      date: 'Dec 2024',
    },
    {
      outlet: 'Decrypt',
      title: 'GoodPeopleCoin Launches to Track Crypto Philanthropy',
      date: 'Dec 2024',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Press <span className="text-neon-green">Room</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Latest news, press releases, and media resources for journalists and content creators.
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="container py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Media Inquiries</CardTitle>
            <CardDescription className="text-base pt-2">
              For press inquiries, interviews, or media partnerships, please contact our press team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="h-4 w-4 text-neon-green" />
                  <span className="font-medium">Email</span>
                </div>
                <a
                  href="mailto:press@goodpeoplecoin.com"
                  className="text-neon-green hover:underline"
                >
                  press@goodpeoplecoin.com
                </a>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">Send Message</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Press Releases */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Press Releases
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Recent announcements and company news.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {pressReleases.map((release) => (
              <Card key={release.title}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{release.date}</span>
                  </div>
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {release.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Read Full Release
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Media Assets
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Download brand assets and resources for media coverage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {mediaAssets.map((asset) => (
            <Card key={asset.title}>
              <CardHeader>
                <CardTitle className="text-lg">{asset.title}</CardTitle>
                <CardDescription className="text-sm pt-2">
                  {asset.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{asset.size}</span>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/for-projects/media-kit">
              View Full Media Kit
            </Link>
          </Button>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              In the News
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Recent media coverage and mentions.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {coverage.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-neon-green font-medium mb-1">
                        {item.outlet}
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        {item.date}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8">
            About GoodPeopleCoin
          </h2>
          <Card>
            <CardContent className="p-8 space-y-4 text-muted-foreground">
              <p>
                GoodPeopleCoin is the leading platform for transparent crypto charity rankings and verified impact projects. We help donors discover and evaluate charitable crypto projects using on-chain data verification and comprehensive transparency scoring.
              </p>
              <p>
                Our mission is to bring accountability and transparency to crypto philanthropy by providing donors with the data they need to make informed giving decisions. We track over 150 crypto charity projects, analyze $50M+ in donation flows, and serve 100K+ monthly users.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
```

---

## File: src/content/top-charity-crypto-2025.mdx

```markdown
# Top Charity Crypto Projects 2025

The landscape of crypto philanthropy has evolved dramatically over the past year. This comprehensive ranking analyzes the most transparent and impactful crypto charity projects based on on-chain verification, documentation quality, and demonstrated impact.

## Ranking Methodology

Our rankings are built on four key pillars:

### 1. On-Chain Verification
Every claim must be independently verifiable on the blockchain. We trace donation flows, verify wallet addresses, and analyze transaction patterns to ensure accuracy.

### 2. Transparency Score
Projects are evaluated on how openly they share information about donations, spending, and impact. This includes:
- Public wallet addresses
- Regular financial reporting
- Impact metrics and updates
- Governance documentation

### 3. Documentation Quality
We assess the depth and clarity of impact reports, financial statements, and public disclosures. Projects that provide detailed, regular updates score higher.

### 4. Community Trust
We analyze community feedback, social media sentiment, and third-party audits to gauge overall trust and reputation.

## Top 10 Ranked Projects

### #1 Binance Charity
**Transparency Score: 95/100**

Binance Charity leads our rankings with exceptional transparency and scale. Key highlights:
- $150M+ in total donations
- 100% on-chain tracking
- Real-time donation dashboard
- Regular impact reports
- Multi-chain support (BSC, Ethereum)

### #2 Giveth
**Transparency Score: 92/100**

A pioneer in decentralized philanthropy, Giveth offers:
- $25M+ donated through the platform
- Zero-fee donation model
- Community-governed treasury
- Detailed project verification
- GIVbacks rewards for donors

### #3 The Giving Block
**Transparency Score: 90/100**

The largest crypto donation platform for nonprofits:
- $100M+ in donations facilitated
- 1,000+ verified nonprofits
- Multi-cryptocurrency support
- Tax documentation support
- Corporate matching programs

### #4 Unicef CryptoFund
**Transparency Score: 88/100**

A groundbreaking initiative from a traditional organization:
- $8M+ in crypto donations
- Focus on tech for development
- Transparent treasury management
- On-chain fund tracking
- Impact-focused investments

### #5 Gitcoin
**Transparency Score: 85/100**

Leading platform for funding public goods:
- $50M+ in quadratic funding
- Focus on open-source development
- Sybil resistance mechanisms
- Transparent allocation algorithms
- Community-driven governance

## Emerging Projects to Watch

Several newer projects are showing promising transparency practices:

- **ImpactMarket**: UBI protocol on Celo with strong local community engagement
- **Endaoment**: Donor-advised funds on Ethereum with excellent reporting
- **Kolektivo**: Regenerative finance protocols for local communities
- **Proof of Humanity**: Identity verification for equitable distribution

## Red Flags to Avoid

When evaluating crypto charity projects, watch out for:

- Unverifiable donation claims
- Opaque wallet addresses
- Missing or irregular impact reports
- Centralized control without oversight
- Token incentive misalignment
- Inconsistent on-chain activity

## How to Donate Safely

1. **Verify wallet addresses** directly through official channels
2. **Start small** with test transactions
3. **Check transaction history** on block explorers
4. **Review recent impact reports** before donating
5. **Use established platforms** for first-time crypto donations

## Conclusion

The crypto charity space is maturing rapidly, with leading projects demonstrating that blockchain technology can bring unprecedented transparency to philanthropy. By prioritizing on-chain verification and regular reporting, these organizations are setting new standards for charitable accountability.

As the space continues to evolve, we expect to see even more innovation in impact tracking, donor engagement, and transparent fund management. The projects ranked here represent the current gold standard, but the bar continues to rise.

**Last Updated:** January 2025
```

---

## File: src/content/on-chain-philanthropy-guide.mdx

```markdown
# On-Chain Philanthropy Guide

Blockchain technology offers unprecedented transparency for charitable giving, but navigating on-chain verification requires understanding key concepts and tools. This guide teaches you how to verify donation claims and evaluate crypto charity projects using blockchain data.

## Understanding On-Chain Verification

On-chain verification means that every donation, transfer, and transaction is recorded on a public blockchain that anyone can inspect. This creates a permanent, tamper-proof record of fund flows.

### Key Benefits

**Transparency**: Every transaction is visible to donors and the public
**Accountability**: Projects can't misrepresent donation amounts or spending
**Real-time tracking**: Monitor fund usage as it happens
**No trust required**: Verify claims independently without relying on intermediaries

## Essential Tools for Verification

### Block Explorers

Block explorers are search engines for blockchain data. The main ones you'll need:

**Ethereum**
- Etherscan.io - Most comprehensive
- Blockscout - Open-source alternative

**Binance Smart Chain**
- BscScan.com - Official BSC explorer

**Multi-chain**
- Blockchain.com - Bitcoin and others
- Blockchair.com - Multiple chains

### Wallet Tracking Tools

Several platforms help track wallet activity:

- **Nansen**: Advanced wallet analytics with labels
- **Dune Analytics**: Custom queries and dashboards
- **Debank**: Portfolio and DeFi tracking
- **Zapper**: Multi-wallet overview

## How to Verify a Charity Project

### Step 1: Find Official Wallet Addresses

Start by locating the project's official wallet addresses:

1. Check the project's official website
2. Look for addresses in verified social media posts
3. Cross-reference with third-party platforms
4. Never use addresses from emails or DMs

### Step 2: Analyze Transaction History

Once you have a verified wallet address:

1. **Open the block explorer** (e.g., Etherscan for Ethereum)
2. **Paste the wallet address** in the search bar
3. **Review the transaction list** for patterns
4. **Check transaction frequency** and amounts
5. **Trace fund flows** to recipient addresses

### Step 3: Verify Donation Claims

Compare claimed donations with on-chain data:

- **Match amounts**: Do claimed totals align with blockchain records?
- **Check timing**: Do transaction dates match announcements?
- **Verify recipients**: Can you trace funds to beneficiaries?
- **Review spending**: How are funds being deployed?

### Step 4: Assess Transparency Practices

Evaluate how openly the project shares information:

- Public wallet addresses listed on website
- Regular transaction reports
- Impact updates with transaction links
- Response to community questions
- Third-party audits

## Reading a Block Explorer

Understanding what you're looking at on a block explorer:

### Transaction Details

**Hash**: Unique transaction identifier
**Block**: Which block included this transaction
**From**: Sender's wallet address
**To**: Recipient's wallet address
**Value**: Amount transferred
**Gas Fee**: Transaction cost paid

### Wallet Overview

**Balance**: Current holdings
**Transaction count**: Total transactions
**Token holdings**: Other assets held
**Contract interactions**: DeFi and dApp usage

## Red Flags to Watch For

### Suspicious Patterns

- **Frequent transfers to exchanges**: May indicate liquidation
- **Complex routing through mixers**: Attempts to obscure fund flows
- **Sudden large withdrawals**: Unexpected depletion of funds
- **Inactive wallets**: Funds sitting unused for long periods
- **Anonymous recipient addresses**: Can't verify final destination

### Documentation Gaps

- Claimed donations that don't appear on-chain
- Wallet addresses that aren't publicly listed
- Missing transaction hashes in reports
- Inconsistent reporting schedules
- Vague impact descriptions

## Advanced Verification Techniques

### Smart Contract Analysis

For projects using smart contracts:

1. **Verify contract code** on the block explorer
2. **Review contract functions** and permissions
3. **Check for upgradability** and admin controls
4. **Analyze token distribution** if applicable
5. **Monitor contract interactions** over time

### Fund Flow Analysis

Trace donations from source to impact:

1. Start with donor wallet
2. Follow to project wallet
3. Track to implementation partners
4. Verify final recipients
5. Cross-reference with impact reports

### Community Research

Leverage collective verification:

- Check discussions on forums
- Review third-party analyses
- Compare notes with other donors
- Participate in community audits
- Report discrepancies

## Case Study: Verifying a Donation Campaign

Let's walk through a real example:

### Scenario
A project claims to have received $100K in donations for disaster relief.

### Verification Process

1. **Find the campaign wallet address** from official sources
2. **Open Etherscan** and search for the address
3. **Review incoming transactions** during the campaign period
4. **Sum total donations** using the block explorer's tools
5. **Verify spending transactions** to relief organizations
6. **Cross-reference** with project reports

### Expected Findings

For a trustworthy project, you should see:
- Donation total matches claimed amount
- Clear outflows to verified relief organizations
- Transaction timing aligns with updates
- Reasonable treasury reserves for operations
- Regular reporting with transaction links

## Best Practices for Donors

### Before Donating

- Verify wallet addresses through multiple sources
- Review transaction history for at least 6 months
- Check for regular activity and reporting
- Assess community sentiment and trust
- Start with a small test transaction

### After Donating

- Save your transaction hash
- Monitor the project wallet periodically
- Verify your donation in impact reports
- Track fund deployment over time
- Share verification findings with community

### Ongoing Monitoring

Set up alerts for:
- Large withdrawals from project wallets
- Changes to smart contract code
- Unusual transaction patterns
- Missing scheduled reports
- Community warnings

## Tools and Resources

### Essential Bookmarks

- Etherscan.io
- BscScan.com
- CoinGecko (for token prices)
- DeFi Pulse (for protocol tracking)
- Twitter crypto community lists

### Learning Resources

- Ethereum.org documentation
- Block explorer guides and tutorials
- Crypto charity community forums
- On-chain analysis courses
- Web3 literacy programs

## Conclusion

On-chain verification transforms charitable giving from a trust-based system to a transparency-based one. By learning to read blockchain data, you can make informed decisions about where to donate and hold projects accountable for their impact claims.

The skills covered in this guide enable you to:
- Independently verify any donation claim
- Track fund flows in real-time
- Identify red flags and suspicious activity
- Evaluate project transparency practices
- Contribute to community due diligence

As blockchain technology becomes more prevalent in philanthropy, these verification skills will become increasingly important for responsible giving.

**Remember**: Don't just trust, verify.
```

---

## File: src/content/crypto-charity-risks.mdx

```markdown
# Crypto Charity Risks & Red Flags

While blockchain technology offers unprecedented transparency for charitable giving, the crypto charity space also presents unique risks. This guide identifies common warning signs and provides due diligence tips for evaluating blockchain-based charitable giving.

## Understanding the Risk Landscape

Crypto charity operates at the intersection of emerging technology and philanthropy, creating both opportunities and vulnerabilities:

### Key Risk Categories

**Technical Risks**: Smart contract bugs, wallet security, key management
**Operational Risks**: Project sustainability, team competence, governance
**Regulatory Risks**: Compliance uncertainty, changing regulations
**Fraud Risks**: Scams, misrepresentation, rug pulls
**Market Risks**: Volatility, liquidity, conversion timing

## Red Flags: Warning Signs to Watch For

### Critical Red Flags (Immediate Concerns)

#### 1. Hidden or Unverifiable Wallets

**Warning Sign**: Project doesn't publicly list wallet addresses

**Why It Matters**: Without public addresses, you can't verify donation amounts or track fund usage on the blockchain.

**What to Do**: Avoid projects that won't share wallet addresses. Transparency starts with public tracking.

#### 2. Mismatched On-Chain Data

**Warning Sign**: Claimed donations don't match blockchain records

**Why It Matters**: Indicates either incompetence or deliberate misrepresentation.

**What to Do**: Use block explorers to verify all donation claims. Document discrepancies and request explanation.

#### 3. Anonymous Team

**Warning Sign**: No real names, backgrounds, or verifiable credentials

**Why It Matters**: Accountability requires identity. Anonymous teams can disappear without consequences.

**What to Do**: Research team members on LinkedIn, check previous projects, verify credentials.

#### 4. No Regular Reporting

**Warning Sign**: Months without updates on fund usage or impact

**Why It Matters**: Regular reporting is essential for accountability and demonstrates operational competence.

**What to Do**: Set expectations for reporting frequency. Look for projects with monthly or quarterly updates.

#### 5. Excessive Marketing Spend

**Warning Sign**: Heavy promotion but little demonstrated impact

**Why It Matters**: Marketing costs should be proportionate to mission. Excessive marketing suggests misaligned priorities.

**What to Do**: Review on-chain spending. Marketing should be a small percentage of total budget.

### Moderate Red Flags (Proceed with Caution)

#### Complex Token Economics

Projects with convoluted token models may be more focused on speculation than impact.

#### Unrealistic Promises

Claims of "revolutionary" impact or guaranteed returns should trigger skepticism.

#### Pressure Tactics

Urgent appeals or "limited time" giving opportunities are common manipulation techniques.

#### Governance Centralization

Single-person control over funds creates concentration risk and reduces accountability.

#### Missing Impact Metrics

Vague descriptions of impact without measurable outcomes suggest weak theory of change.

## Common Scams and Fraud Patterns

### The Fake Charity

**How It Works**:
1. Creates professional-looking website
2. Uses stolen branding or similar names
3. Collects donations to personal wallets
4. Disappears once enough funds collected

**How to Protect Yourself**:
- Verify official social media accounts
- Check domain registration dates
- Look for third-party verification
- Start with small test donations

### The Slow Rug Pull

**How It Works**:
1. Launches with legitimate-seeming project
2. Builds trust with small early activities
3. Collects larger donations over time
4. Gradually reduces activity and transparency
5. Eventually stops responding and moves funds

**How to Protect Yourself**:
- Monitor ongoing activity regularly
- Track fund deployment rates
- Watch for declining transparency
- Set up wallet alerts

### The Middleman Markup

**How It Works**:
1. Presents itself as donation platform
2. Takes large percentage as "operational costs"
3. Delivers only fraction to actual causes
4. Obscures true fee structure

**How to Protect Yourself**:
- Ask about fee structures upfront
- Calculate actual percentage reaching causes
- Compare to traditional charity overhead
- Consider direct donations when possible

### The Abandoned Project

**How It Works**:
1. Starts with genuine intentions
2. Team loses interest or funding
3. Project becomes inactive
4. Donations sit unused in wallets

**How to Protect Yourself**:
- Research team commitment and funding
- Look for sustainable operational model
- Prefer established projects
- Monitor activity levels

## Due Diligence Checklist

### Before Donating

Use this checklist to evaluate any crypto charity project:

**Team & Organization**
- [ ] Real names and backgrounds published
- [ ] LinkedIn profiles verifiable
- [ ] Previous relevant experience
- [ ] Legal entity established
- [ ] Contact information provided

**Transparency & Reporting**
- [ ] Public wallet addresses listed
- [ ] Regular impact reports published
- [ ] Financial statements available
- [ ] On-chain data matches claims
- [ ] Response to community questions

**Operations & Governance**
- [ ] Clear mission and theory of change
- [ ] Defined governance structure
- [ ] Multiple signers on treasury
- [ ] Documented decision-making process
- [ ] Community input mechanisms

**Technical & Security**
- [ ] Smart contracts audited (if applicable)
- [ ] Secure key management practices
- [ ] Backup and recovery procedures
- [ ] No history of security incidents
- [ ] Regular security updates

**Track Record & Reputation**
- [ ] Demonstrated impact over time
- [ ] Positive community sentiment
- [ ] Third-party endorsements
- [ ] Media coverage from credible sources
- [ ] No unresolved controversies

## Risk Mitigation Strategies

### Diversification

Don't put all donations in one project:
- Support multiple causes
- Mix crypto and traditional giving
- Vary project stages and sizes
- Balance innovation with established orgs

### Incremental Engagement

Build trust gradually:
- Start with small donations
- Increase after verified impact
- Reassess quarterly
- Adjust based on performance

### Active Monitoring

Stay engaged after donating:
- Set up wallet alerts
- Review quarterly reports
- Participate in community discussions
- Track impact metrics
- Follow team updates

### Community Verification

Leverage collective intelligence:
- Join donor communities
- Share findings and concerns
- Participate in audits
- Report issues
- Coordinate response to problems

## Regulatory and Compliance Risks

### Tax Implications

**Concerns**:
- Crypto donations may have different tax treatment
- Documentation requirements vary by jurisdiction
- Valuation timing matters for deductions

**Protection**:
- Consult tax professional
- Keep detailed records
- Use platforms that provide tax documentation
- Understand local regulations

### Legal Status Uncertainty

**Concerns**:
- Regulatory landscape still evolving
- Projects may face unexpected compliance issues
- Cross-border complications

**Protection**:
- Prefer projects with legal counsel
- Check for proper registrations
- Understand jurisdiction
- Monitor regulatory changes

### KYC/AML Requirements

**Concerns**:
- Some projects require identity verification
- Privacy vs compliance tradeoffs
- Data security of personal information

**Protection**:
- Understand data usage policies
- Verify security practices
- Consider privacy implications
- Use established platforms for KYC

## Recovery Options

### If You Suspect Fraud

**Immediate Actions**:
1. Document all evidence (screenshots, transaction hashes)
2. Stop any recurring donations
3. Warn community on social media
4. Report to relevant authorities
5. Share findings on crypto scam databases

**Reporting Channels**:
- Local consumer protection agencies
- Crypto fraud reporting platforms
- Social media with evidence
- Community forums and Discord servers
- Law enforcement if significant amounts

### If Project Fails

**When Projects Don't Deliver**:
- Request refund if possible
- Participate in community recovery efforts
- Learn from experience
- Share lessons to help others
- Adjust screening criteria

## Questions to Ask Projects

### Before Committing

1. "Can you provide your wallet addresses for verification?"
2. "What percentage of donations go to overhead?"
3. "How often do you publish impact reports?"
4. "Who are the signers on your treasury multisig?"
5. "What happens to unused funds?"
6. "Have your smart contracts been audited?"
7. "How do you measure and report impact?"
8. "What's your approach to regulatory compliance?"

### During Relationship

1. "Can you explain this recent large withdrawal?"
2. "Why haven't we seen an impact report this quarter?"
3. "What caused the drop in activity?"
4. "How are you addressing community concerns?"
5. "What's your plan for sustainability?"

## Case Studies: Learning from Problems

### Case Study 1: The Disappeared DAO

A charity DAO raised $500K but stopped responding to donors after 6 months. Funds remained in wallet but no activity.

**Red Flags Missed**:
- Anonymous team members
- No clear governance structure
- Vague impact metrics
- No operational funding model

**Lesson**: Always verify team identity and ensure sustainable operations.

### Case Study 2: The Slow Pivot

A disaster relief project slowly shifted focus to "administrative costs" and eventually stopped relief activities entirely.

**Red Flags Missed**:
- Increasing operational expenses
- Declining impact reports
- Vague spending categories
- Fewer updates over time

**Lesson**: Monitor spending ratios and activity levels continuously.

## Building Better Standards

The community can reduce risks by:

**Establishing Norms**:
- Expect public wallet addresses
- Demand regular reporting
- Require multi-sig treasuries
- Prefer audited smart contracts

**Creating Infrastructure**:
- Verification platforms
- Shared due diligence
- Warning systems
- Recovery mechanisms

**Education and Awareness**:
- Share knowledge
- Train newcomers
- Document lessons learned
- Promote best practices

## Conclusion

While crypto charity presents exciting opportunities for transparency and impact, donors must approach with informed caution. The risks are real, but manageable through:

- Thorough due diligence
- Ongoing monitoring
- Community engagement
- Incremental trust-building
- Healthy skepticism

The warning signs and practices outlined in this guide help you navigate the crypto charity landscape safely while supporting genuinely transparent and impactful projects.

**Remember**: Transparency is possible because blockchain enables verification. Use that power to hold projects accountable and protect yourself from fraud.

**Stay Safe**: Trust but verify, start small, monitor actively, and share knowledge with the community.
```

---

## File: src/content/best-wallets-donations-2025.mdx

```markdown
# Best Wallets & Tools for Crypto Donations

Making charitable crypto donations requires the right tools and infrastructure. This practical guide covers the best wallets, platforms, and tools for making charitable crypto donations safely and effectively.

## Choosing a Crypto Wallet for Donations

### Key Criteria

When selecting a wallet for charitable giving, prioritize:

**Security**: Strong encryption and key management
**Ease of Use**: Simple interface for sending donations
**Multi-Chain Support**: Access to multiple blockchains
**Transaction History**: Clear records for tax purposes
**Integration**: Works with major charity platforms

## Best Wallets for Crypto Donations

### MetaMask
**Best for: Ethereum and EVM-compatible chains**

**Pros**:
- Most widely supported wallet
- Browser extension and mobile app
- Easy integration with charity platforms
- Built-in token swapping
- Clear transaction history

**Cons**:
- Learning curve for beginners
- Gas fees can be high on Ethereum
- Seed phrase management required

**How to Donate**:
1. Install MetaMask extension or app
2. Add funds via exchange or on-ramp
3. Connect to charity platform
4. Verify recipient address
5. Approve and send transaction

**Security Tips**:
- Never share your seed phrase
- Use hardware wallet for large amounts
- Verify website URLs before connecting
- Enable transaction notifications

### Coinbase Wallet
**Best for: Beginners and exchange users**

**Pros**:
- User-friendly interface
- Direct connection to Coinbase exchange
- Multi-chain support
- Detailed transaction receipts
- Built-in browser for dApps

**Cons**:
- Limited compared to MetaMask
- Some features require Coinbase account
- Less customization

**Ideal For**:
- First-time crypto donors
- Users with Coinbase accounts
- Those wanting simple interfaces
- Tax documentation needs

### Trust Wallet
**Best for: Mobile-first users**

**Pros**:
- Excellent mobile experience
- Multi-chain support (50+ blockchains)
- Built-in dApp browser
- No account required
- Binance Smart Chain native

**Cons**:
- Limited desktop support
- Can be overwhelming with features
- Support quality varies

**Best Used For**:
- Donations on BSC
- Mobile-only donors
- Multi-chain giving
- DeFi-integrated donations

### Ledger Hardware Wallet
**Best for: Large donations and security**

**Pros**:
- Highest security standard
- Offline key storage
- Multi-currency support
- Integration with MetaMask
- Peace of mind for large amounts

**Cons**:
- $100+ hardware cost
- Slower transaction process
- Less convenient for frequent small donations

**Recommended For**:
- Donations over $10,000
- Long-term donors
- Security-conscious users
- Multi-chain strategies

## Donation Platforms and Aggregators

### The Giving Block
**Best all-around donation platform**

**Features**:
- 1,000+ verified nonprofits
- 100+ cryptocurrencies accepted
- Tax receipts automatically generated
- Corporate matching programs
- Donor-advised fund option

**How It Works**:
1. Browse verified nonprofits
2. Select donation amount and currency
3. Platform generates unique wallet address
4. Send from your wallet
5. Receive tax receipt via email

**Fees**: 1% platform fee + network fees

**Best For**:
- First-time crypto donors
- Tax documentation needs
- Supporting traditional nonprofits
- Corporate giving programs

### Giveth
**Best for zero-fee donations**

**Features**:
- No platform fees
- Direct wallet-to-wallet donations
- GIVbacks rewards program
- Community verification
- Transparent project tracking

**How It Works**:
1. Connect wallet to Giveth
2. Browse projects
3. Donate directly to project wallet
4. Earn GIV token rewards
5. Track impact on-chain

**Fees**: Only network gas fees

**Best For**:
- Cost-conscious donors
- Supporting crypto-native projects
- Earning donor rewards
- Maximum transparency

### Endaoment
**Best for donor-advised funds**

**Features**:
- Tax-deductible donations
- Invest and grow donations
- Grant to any US nonprofit
- Professional fund management
- On-chain transparency

**How It Works**:
1. Donate crypto to your DAF
2. Receive immediate tax deduction
3. Invest in growth strategies
4. Grant to nonprofits over time
5. All tracked on-chain

**Fees**: 1.5% annual management fee

**Best For**:
- Large donors ($25K+)
- Long-term giving strategies
- Tax optimization
- Professional fund management

### Binance Charity
**Best for global impact**

**Features**:
- 100% donation model (no fees)
- Global humanitarian projects
- Real-time blockchain tracking
- Integrated with Binance exchange
- Multi-currency support

**How It Works**:
1. Log in to Binance account
2. Select charity project
3. Donate from exchange balance
4. Track via blockchain explorer
5. Receive impact updates

**Fees**: Zero fees

**Best For**:
- Binance users
- International disaster relief
- Zero-fee donations
- Verified large-scale projects

## Essential Tools for Crypto Donors

### Block Explorers

**Etherscan (Ethereum)**
- Verify transactions
- Check wallet activity
- Confirm donation receipt
- Export transaction history

**BscScan (Binance Smart Chain)**
- Track BSC donations
- Lower gas fees
- Fast confirmation
- DeFi integration

### Portfolio Trackers

**CoinTracker**
- Track all donations
- Calculate gains/losses
- Generate tax reports
- Multi-wallet support

**Koinly**
- Comprehensive tax reporting
- Donation categorization
- IRS form generation
- Accountant collaboration

### Tax Documentation Tools

**TaxBit**
- Crypto-specific tax software
- Donation tracking
- Form 8283 generation (for $5K+ donations)
- CPA network

**CryptoTrader.Tax**
- Automatic report generation
- Charitable deduction tracking
- Multiple country support
- Audit trail documentation

## Setting Up for Charitable Giving

### Step 1: Choose Your Primary Wallet

**Considerations**:
- Your comfort with technology
- Chains you want to donate on
- Frequency of donations
- Security requirements

**Recommended Setup**:
- Hot wallet (MetaMask/Coinbase) for frequent small donations
- Hardware wallet (Ledger) for large amounts
- Mobile wallet (Trust) for convenience

### Step 2: Secure Your Wallet

**Essential Security**:
- Write down seed phrase (never digital)
- Enable 2FA where available
- Use strong passwords
- Keep software updated
- Practice small test transactions

**Advanced Security**:
- Hardware wallet for storage
- Multisig for large treasuries
- Separate wallets for different purposes
- Regular security audits

### Step 3: Fund Your Wallet

**Options for Getting Crypto**:

**From Exchange**:
1. Buy on Coinbase/Binance
2. Withdraw to your wallet
3. Wait for confirmations
4. Ready to donate

**Peer-to-Peer**:
1. Use platforms like LocalBitcoins
2. Meet sellers in your area
3. Transfer to your wallet
4. Verify receipt

**On-Ramps**:
1. Use Moonpay/Wyre in wallet
2. Buy with credit/debit card
3. Instant to wallet
4. Higher fees but convenient

### Step 4: Find Verified Charities

**Research Tools**:
- GoodPeopleCoin rankings
- The Giving Block directory
- GiveWell recommendations
- Charity Navigator listings
- Community recommendations

**Verification Steps**:
1. Check GoodPeopleCoin transparency score
2. Verify wallet addresses on official site
3. Review recent on-chain activity
4. Read impact reports
5. Assess community sentiment

### Step 5: Make Your First Donation

**Best Practices**:
1. Start with small test donation ($10-50)
2. Verify receipt on block explorer
3. Confirm with charity if possible
4. Save transaction hash
5. Scale up when comfortable

## Maximizing Tax Benefits

### Required Documentation

**For Donations Under $250**:
- Transaction receipt
- Charity's name and address
- Date of donation
- Amount donated

**For Donations $250-$5,000**:
- All of the above plus
- Written acknowledgment from charity
- Statement that no goods/services received

**For Donations Over $5,000**:
- All of the above plus
- Qualified appraisal
- Form 8283
- Professional valuation

### Tax Strategies

**Donating Appreciated Crypto**:
- Deduct fair market value
- Avoid capital gains tax
- Hold for 1+ year for long-term rates
- Maximum benefit for highly appreciated assets

**Donor-Advised Funds**:
- Immediate tax deduction
- Invest and grow funds
- Distribute over time
- Estate planning benefits

**Bunching Donations**:
- Combine multiple years
- Exceed standard deduction
- Use donor-advised fund
- Smooth impact over time

## Common Challenges and Solutions

### High Gas Fees

**Problem**: Ethereum gas fees can exceed donation amount

**Solutions**:
- Use Layer 2 solutions (Polygon, Optimism)
- Donate on Binance Smart Chain
- Time transactions during low usage
- Batch multiple donations
- Use donation platforms with batching

### Wallet Compatibility

**Problem**: Charity doesn't support your preferred wallet

**Solutions**:
- Use WalletConnect for connection
- Try different wallet (MetaMask widely supported)
- Donate via aggregator platform
- Contact charity for alternatives

### Tax Complexity

**Problem**: Calculating gains and proper documentation

**Solutions**:
- Use crypto tax software (CoinTracker, Koinly)
- Work with crypto-savvy CPA
- Keep detailed records
- Use platforms that provide tax docs

### Verification Concerns

**Problem**: Unsure if charity is legitimate

**Solutions**:
- Check GoodPeopleCoin rankings
- Verify on blockchain
- Look for third-party validation
- Start with established platforms
- Research team and history

## Advanced Strategies

### Recurring Donations

**Setup Options**:
- Use platforms with subscription features
- Set calendar reminders
- Use smart contract automation (advanced)
- Employ DeFi yield strategies (donate interest)

### Impact Investing

**Approach**:
- Stake crypto in DeFi protocols
- Donate yield to charities
- Maintain principal
- Sustainable giving model

### Community Giving Circles

**Structure**:
- Pool funds with others
- Collective decision-making
- Shared due diligence
- Greater impact

## Mobile Apps for Donors

### Endaoment Mobile
- Manage donor-advised fund
- Make grants on-the-go
- Track portfolio growth
- Impact dashboard

### Trust Wallet
- Multi-chain donations
- Built-in dApp browser
- Instant notifications
- QR code scanning

### Coinbase Wallet
- User-friendly interface
- Easy charity connections
- Transaction tracking
- Tax documentation

## Future Innovations

### Emerging Tools

**AI-Powered Impact Tracking**:
- Automated verification
- Impact predictions
- Fraud detection
- Personalized recommendations

**Social Donation Features**:
- Share giving on social media
- Create fundraising campaigns
- Match donations with friends
- Build giving communities

**Enhanced Tax Integration**:
- Real-time tax calculations
- Automatic form generation
- CPA collaboration tools
- Audit support

## Conclusion

The right wallet and tools make crypto donations simple, secure, and impactful. Key takeaways:

**Start Simple**:
- Use beginner-friendly wallets (Coinbase Wallet)
- Leverage donation platforms (The Giving Block)
- Begin with small amounts
- Grow as you learn

**Prioritize Security**:
- Never share seed phrases
- Use hardware wallets for large amounts
- Verify all addresses
- Practice good key management

**Maximize Impact**:
- Research before donating
- Use GoodPeopleCoin rankings
- Track your impact
- Share your experience

**Optimize Taxes**:
- Keep detailed records
- Use crypto tax software
- Work with knowledgeable CPAs
- Understand donation strategies

The crypto donation infrastructure is rapidly improving. These tools and platforms make it easier than ever to give transparently and track your impact on-chain.

**Ready to start?** Set up your wallet, find a verified charity on GoodPeopleCoin, and make your first crypto donation today.
```

---

## File: src/content/binance-charity-explainer.mdx

```markdown
# How Binance Charity Tracks Funds On-Chain

Binance Charity represents one of the most successful implementations of blockchain technology for charitable transparency. This case study examines how Binance Charity uses on-chain tracking for donor accountability and what lessons other crypto charity projects can learn from their approach.

## Overview of Binance Charity

Launched in 2018, Binance Charity has become one of the largest crypto-native charitable organizations, processing over $150 million in donations and supporting humanitarian projects in more than 60 countries.

### Core Mission

Binance Charity aims to:
- Achieve 100% donation transparency
- Reduce intermediary costs to zero
- Enable real-time fund tracking
- Support global humanitarian causes
- Demonstrate blockchain's social impact potential

## The Blockchain Transparency Model

### How It Works

Binance Charity built its platform on several key principles:

**1. Public Wallet Addresses**

Every project has a dedicated wallet address published on:
- Binance Charity website
- Project pages
- Impact reports
- Social media announcements

This enables anyone to verify donations and spending on the blockchain.

**2. Zero-Fee Model**

Unlike traditional charities that take 5-30% for operations:
- 100% of donations reach projects
- Operational costs covered by Binance
- No hidden fees or markups
- Maximum impact per donated dollar

**3. Real-Time Tracking Dashboard**

Donors can:
- See their donation on-chain immediately
- Track fund deployment to beneficiaries
- Verify impact claims independently
- Receive updates on project progress

**4. Multi-Chain Support**

Binance Charity accepts donations on:
- Binance Smart Chain (primary)
- Ethereum
- Multiple other networks
- Various cryptocurrencies

## Case Study: COVID-19 Relief Campaign

Let's examine a real campaign to understand the system in action.

### Campaign Overview

**Goal**: Provide emergency medical supplies during COVID-19
**Target**: $5 million
**Duration**: March-June 2020
**Result**: $5.2 million raised from 13,000+ donors

### On-Chain Verification Process

**Step 1: Campaign Launch**

Binance Charity published:
- Dedicated wallet address: `0x8B99...` (simplified)
- Project details and goals
- Timeline and milestones
- Expected impact metrics

**Step 2: Donation Flow**

Donors sent crypto to the published wallet address:
- Every transaction visible on BscScan
- Running total updated in real-time
- Donor addresses recorded (not identities)
- Timestamps for all transactions

**Step 3: Fund Deployment**

As funds were spent:
- Transactions from campaign wallet to suppliers
- On-chain records of medical supply purchases
- Transfers to distribution partners
- Final delivery to hospitals

**Step 4: Impact Reporting**

Binance Charity published:
- Links to all relevant transactions
- Photos of supplies delivered
- Hospital acknowledgment letters
- Updated impact numbers

### Verification Results

Anyone could independently verify:
- Total donations: 5.2M (matched claimed amount)
- Spending breakdown: Medical supplies (95%), logistics (5%)
- Timeline: All funds deployed within 60 days
- Recipients: 47 hospitals in 12 countries

## Technical Infrastructure

### Smart Contract Architecture

Binance Charity uses smart contracts for:

**Donation Management**:
```
- Accept multiple currencies
- Automatic conversion to stable coins
- Track donor addresses
- Emit events for dashboard updates
```

**Fund Distribution**:
```
- Multi-signature requirements
- Time-locked withdrawals for large amounts
- Automated splitting for multiple recipients
- Audit trail for all movements
```

**Transparency Features**:
```
- Public view functions
- Transaction history queries
- Real-time balance checks
- Event logs for off-chain indexing
```

### Dashboard Implementation

The public dashboard shows:

**Donation Tracking**:
- Total raised (updated every block)
- Number of unique donors
- Average donation size
- Top donations (anonymous amounts)

**Spending Breakdown**:
- Categories and percentages
- Timeline of deployments
- Remaining balance
- Projected completion

**Impact Metrics**:
- People helped
- Supplies distributed
- Geographic reach
- Updated photos/videos

## Key Success Factors

### 1. Institutional Backing

Advantages of Binance support:
- Covers all operational costs
- Provides technical infrastructure
- Offers marketing reach
- Ensures long-term sustainability

**Lesson**: Sustainable operations funding enables zero-fee model

### 2. Professional Management

Binance Charity maintains:
- Full-time dedicated team
- Partnership with reputable NGOs
- Professional project vetting
- Quality impact reporting

**Lesson**: Professionalism builds trust and effectiveness

### 3. User-Friendly Interface

Despite complex blockchain tech:
- Simple donation process
- Clear impact visualization
- Multiple payment options
- Accessible to non-crypto users

**Lesson**: Technical transparency shouldn't require technical knowledge

### 4. Regular Communication

Frequent updates via:
- Monthly impact reports
- Social media updates
- Email newsletters
- Annual comprehensive reviews

**Lesson**: Transparency requires proactive communication

## Comparison to Traditional Charity Models

### Traditional Charity Approach

**Donation Flow**:
1. Donor → Charity HQ (takes 15-30% overhead)
2. Charity → Local partner (takes 10-20% overhead)
3. Local partner → Beneficiary (actual impact: 50-75% of donation)

**Transparency**:
- Annual reports (often delayed 6-12 months)
- Aggregated numbers (can't verify individual donations)
- Limited detail on spending
- Trust-based, not verifiable

### Binance Charity Approach

**Donation Flow**:
1. Donor → Project wallet (0% fees)
2. Project wallet → Beneficiary (100% of donation reaches cause)

**Transparency**:
- Real-time dashboard updates
- Individual transaction verification
- Complete spending detail
- Blockchain-verified, not trust-based

### Impact Comparison

For a $1,000 donation:

**Traditional Charity**:
- Administrative costs: $150-300
- Partner fees: $70-140
- Actual impact: $500-780
- Verification: Take charity's word

**Binance Charity**:
- Administrative costs: $0
- Partner fees: $0
- Actual impact: $1,000
- Verification: Check blockchain

## Challenges and Limitations

### Technology Barriers

**Challenge**: Not everyone has crypto

**Solution**:
- Accept credit card donations (converted to crypto)
- Partner with exchanges for easy on-ramps
- Provide detailed guides
- Offer customer support

### Regulatory Complexity

**Challenge**: Different rules in different countries

**Solution**:
- Work with compliant partners
- Obtain necessary licenses
- Legal team for each jurisdiction
- Conservative approach to compliance

### Market Volatility

**Challenge**: Crypto prices fluctuate

**Solution**:
- Immediate conversion to stablecoins
- Lock in value at donation time
- Hedge against major swings
- Clear communication about conversion

### Scale Limitations

**Challenge**: Not all causes suit blockchain transparency

**Solutions**:
- Focus on suitable use cases
- Partner with traditional orgs for others
- Hybrid models where appropriate
- Continuous process improvement

## Lessons for Other Crypto Charity Projects

### Must-Haves

**1. Public Wallet Addresses**
- List on website
- Update in reports
- Share on social media
- Enable easy verification

**2. Regular Reporting**
- At least monthly updates
- Include transaction links
- Show impact metrics
- Respond to questions

**3. Zero or Low Fees**
- Minimize overhead costs
- Clearly disclose any fees
- Justify operational expenses
- Maximize impact per dollar

**4. User-Friendly Experience**
- Simple donation process
- Clear impact visualization
- Accessible to non-technical users
- Multiple payment options

### Nice-to-Haves

**Advanced Features**:
- Real-time dashboards
- Multi-chain support
- Smart contract automation
- Mobile app integration

**Enhanced Transparency**:
- Third-party audits
- Impact verification photos/videos
- Beneficiary testimonials
- Independent evaluations

**Community Building**:
- Donor recognition programs
- Community voting on projects
- Volunteer opportunities
- Social sharing features

## Replicating the Model

### For Small Projects (Budget Under $100K)

**Minimum Viable Transparency**:

1. **Set up basic infrastructure**
   - Create dedicated wallet
   - Publish address publicly
   - Use free block explorer

2. **Establish reporting rhythm**
   - Monthly transaction summaries
   - Link to block explorer
   - Photos of impact
   - Simple metrics

3. **Engage community**
   - Regular social media updates
   - Respond to questions
   - Share successes and challenges
   - Build trust over time

**Tools Needed**:
- Crypto wallet (free)
- Google Sheets (free)
- Social media accounts (free)
- Camera for impact photos (phone)

**Time Investment**:
- Setup: 2-4 hours
- Monthly reporting: 4-6 hours
- Community engagement: 2-3 hours/week

### For Medium Projects ($100K-$1M)

**Enhanced Infrastructure**:

1. **Professional setup**
   - Custom website with donation page
   - Basic dashboard integration
   - Email marketing tools
   - CRM for donor management

2. **Improved reporting**
   - Automated transaction tracking
   - Professional impact reports
   - Video updates
   - Quarterly reviews

3. **Expanded reach**
   - Partnership with crypto platforms
   - Marketing campaigns
   - Media relations
   - Conference presence

**Budget Allocation**:
- Website/tech: $5K-15K
- Marketing: $10K-30K
- Staff time: $20K-50K
- Misc: $5K-15K

### For Large Projects ($1M+)

**Full Implementation**:

Follow Binance Charity model:
- Custom smart contracts
- Real-time dashboard
- Multi-chain support
- Professional management
- Comprehensive reporting
- Strategic partnerships

**Consider**:
- Dedicated blockchain team
- Annual audits
- Legal compliance team
- Marketing department
- Community managers

## Measuring Success

### Key Performance Indicators

**Transparency Metrics**:
- Percentage of funds with on-chain records
- Reporting frequency and quality
- Response time to questions
- Third-party verification scores

**Impact Metrics**:
- People/communities reached
- Problems solved
- Lives improved
- Cost per beneficiary

**Efficiency Metrics**:
- Overhead percentage
- Time from donation to impact
- Administrative costs
- Fund deployment rate

**Trust Metrics**:
- Donor retention rate
- Community sentiment
- Media coverage
- Third-party endorsements

## Future Developments

Binance Charity is exploring:

**Enhanced Verification**:
- AI-powered impact verification
- Satellite imagery confirmation
- Beneficiary feedback systems
- Automated fraud detection

**Expanded Features**:
- NFTs for donor recognition
- DAO governance for projects
- Impact tokens
- Yield farming for charity

**Greater Reach**:
- More local partnerships
- Additional blockchain networks
- Traditional charity integration
- Government collaborations

## Conclusion

Binance Charity demonstrates that blockchain transparency can work at scale. Their model proves that:

**100% Transparency is Possible**:
- Every donation traceable
- Every expense verifiable
- Real-time accountability
- No trust required

**Zero Fees are Achievable**:
- With proper operational funding
- Through efficient infrastructure
- By eliminating intermediaries
- Maximizing donor impact

**Technology Serves Mission**:
- Blockchain enables transparency
- But user experience matters most
- Technical details stay in background
- Impact remains the focus

**Lessons Apply Broadly**:
- Any scale can implement basics
- Progressive enhancement over time
- Community trust builds gradually
- Transparency compounds credibility

For crypto charity projects aspiring to similar transparency, Binance Charity provides a proven roadmap. The key is starting with fundamentals—public wallets, regular reporting, and genuine commitment to accountability—then building from there.

The future of charitable giving will be transparent. Binance Charity shows us what that future looks like.
```

---

## File: src/content/impact-daos.mdx

```markdown
# Impact DAOs and Charitable Treasuries

Decentralized Autonomous Organizations (DAOs) are pioneering new models for managing charitable funds and impact initiatives. This article explores how DAOs are revolutionizing philanthropic governance, treasury management, and community-driven impact.

## What are Impact DAOs?

Impact DAOs are decentralized organizations focused on social good, using blockchain technology to coordinate collective action and manage charitable resources transparently.

### Key Characteristics

**Decentralized Governance**:
- No single controlling authority
- Community-driven decision making
- Transparent voting mechanisms
- On-chain execution of decisions

**Transparent Treasury**:
- All funds visible on blockchain
- Public spending records
- Multi-signature security
- Real-time accountability

**Community-Focused**:
- Open participation
- Aligned incentives
- Collective ownership
- Shared impact goals

## Evolution of Charitable DAOs

### First Generation (2016-2019)

**The DAO (2016)**:
- First major DAO experiment
- $150M raised
- Technical failure but important lessons
- Established foundation for future DAOs

**Early Charity DAOs**:
- Simple token voting
- Basic treasury management
- Experimental governance
- Limited tooling

### Second Generation (2020-2022)

**Mature Frameworks**:
- Improved smart contracts
- Better governance tools
- Professional operations
- Stronger security

**Notable Projects**:
- Gitcoin (funding public goods)
- MolochDAO (Ethereum development)
- MetaCartel (dApp funding)
- Coordinape (contributor rewards)

### Third Generation (2023-Present)

**Sophisticated Operations**:
- Hybrid governance models
- Treasury diversification
- Impact measurement systems
- Regulatory compliance frameworks

**Emerging Innovations**:
- AI-assisted governance
- Quadratic funding
- Retroactive public goods funding
- Impact tokens

## Prominent Impact DAOs

### Gitcoin DAO

**Mission**: Fund public goods and open-source development

**Structure**:
- GTC token for governance
- Quadratic funding rounds
- Workstreams for different functions
- Progressive decentralization

**Treasury Management**:
- Multi-sig controlled by elected stewards
- Diversified holdings (ETH, stablecoins, other tokens)
- Regular financial reporting
- Community oversight of spending

**Impact**:
- $50M+ distributed to public goods
- 3,000+ projects funded
- 500,000+ unique donors
- Pioneered quadratic funding at scale

**Key Innovation**: Quadratic funding amplifies small donations, rewarding projects with broad community support.

### UkraineDAO

**Mission**: Support humanitarian efforts in Ukraine

**Structure**:
- Formed rapidly in response to crisis
- NFT sales to raise funds
- Community voting on deployments
- Partnership with traditional NGOs

**Treasury Approach**:
- Transparent wallet addresses
- Regular updates on fund deployment
- On-chain verification of spending
- Professional management team

**Impact**:
- $7M+ raised
- Direct support to Ukrainian organizations
- Medical supplies, body armor, humanitarian aid
- Rapid response enabled by decentralization

**Key Innovation**: Demonstrated DAOs can mobilize quickly for crisis response while maintaining transparency.

### PleasrDAO

**Mission**: Acquire and manage culturally significant NFTs

**Structure**:
- Fractionalized ownership
- Curated membership
- Focus on cultural preservation
- Some charitable activities

**Treasury Management**:
- High-value NFT portfolio
- Shared ownership model
- Professional curation
- Long-term value creation

**Impact**:
- Preserved important digital artifacts
- Created accessible ownership model
- Supported artists and creators
- Pioneered fractional NFT governance

**Key Innovation**: New models for collective cultural stewardship and accessible ownership.

### KlimaDAO

**Mission**: Drive climate action through carbon markets

**Structure**:
- KLIMA token backed by carbon credits
- Treasury of carbon offsets
- Bonding mechanism for carbon capture
- DeFi integration

**Treasury Approach**:
- Carbon credit reserves
- Transparent on-chain holdings
- Regular sustainability reports
- Community governance of strategy

**Impact**:
- 17M+ tonnes of carbon tokenized
- Created liquid carbon market
- Increased carbon credit prices
- Funded reforestation projects

**Key Innovation**: Using DeFi mechanisms to create climate impact and transparent carbon markets.

## DAO Treasury Management

### Multi-Signature Wallets

**How They Work**:
- Require multiple approvals for transactions
- Typically 3-of-5 or 4-of-7 configurations
- Prevents single point of failure
- Transparent signer identities

**Best Practices**:
- Geographic distribution of signers
- Independent signer selection
- Regular rotation schedules
- Clear escalation procedures
- Backup signer availability

**Common Tools**:
- Gnosis Safe (most popular)
- Multi-sig features in wallet providers
- DAO-specific treasury tools
- Integration with governance platforms

### Treasury Diversification

**Asset Allocation Strategies**:

**Conservative (Risk-Averse)**:
- 70% stablecoins
- 20% ETH/BTC
- 10% governance tokens
- Minimal volatility exposure

**Moderate (Balanced)**:
- 40% stablecoins
- 30% major cryptocurrencies
- 20% DeFi positions
- 10% governance tokens

**Aggressive (Growth-Focused)**:
- 20% stablecoins
- 30% major cryptocurrencies
- 30% DeFi yield strategies
- 20% high-potential tokens

**Impact-Aligned**:
- Investments in mission-related protocols
- Yield farming for good causes
- Strategic token holdings
- Impact-generating DeFi positions

### Treasury Operations

**Regular Activities**:

**Monthly**:
- Financial reporting
- Budget vs actuals review
- Rebalancing if needed
- Payment processing

**Quarterly**:
- Strategic review
- Diversification assessment
- Governance proposals
- Community updates

**Annually**:
- Comprehensive audit
- Treasury strategy review
- Long-term planning
- Impact assessment

## Governance Models

### Token-Weighted Voting

**How It Works**:
- One token = one vote
- Proposals require quorum
- Time-locked voting periods
- On-chain execution

**Pros**:
- Simple and straightforward
- Aligned with token holders
- Easy to implement
- Proven track record

**Cons**:
- Plutocratic tendencies
- Whale domination possible
- May not reflect diverse stakeholders
- Speculation vs participation

### Quadratic Voting

**How It Works**:
- Vote cost increases quadratically
- 1 vote = 1 credit, 2 votes = 4 credits, etc.
- Reduces whale advantage
- Rewards broad support

**Pros**:
- More democratic
- Harder to manipulate
- Encourages diverse participation
- Better represents community

**Cons**:
- More complex
- Sybil attack concerns
- Requires identity verification
- Gas costs can be high

### Conviction Voting

**How It Works**:
- Voting power accumulates over time
- The longer you vote, the stronger it gets
- Continuous voting process
- Can change vote anytime

**Pros**:
- Rewards long-term commitment
- Reduces short-term gaming
- More fluid than discrete votes
- Better for ongoing decisions

**Cons**:
- Complex to understand
- Requires active participation
- Not suitable for all decisions
- Limited tooling

### Hybrid Models

**Best of Multiple Approaches**:

**Example Structure**:
- Token voting for major decisions
- Elected council for day-to-day operations
- Community veto power
- Specialized committees for domains

**Benefits**:
- Balances efficiency and decentralization
- Leverages expertise where needed
- Maintains community oversight
- Flexible for different decision types

## Creating an Impact DAO

### Phase 1: Formation

**Define Mission and Values**:
- Clear impact objectives
- Measurable outcomes
- Theory of change
- Value alignment

**Choose Legal Structure**:
- LLC wrapper (Wyoming, Marshall Islands)
- Foundation (Switzerland, Cayman Islands)
- Unincorporated association
- Hybrid approach

**Initial Funding**:
- Founding member contributions
- Token sale or drop
- Grant funding
- Strategic partnerships

**Set Up Infrastructure**:
- Deploy smart contracts
- Create multi-sig wallets
- Establish communication channels
- Build initial team

### Phase 2: Governance Design

**Token Economics**:
- Distribution model
- Voting mechanics
- Vesting schedules
- Inflation/deflation

**Decision-Making Process**:
- Proposal requirements
- Voting periods
- Quorum thresholds
- Execution mechanisms

**Working Groups**:
- Treasury management
- Operations
- Community
- Impact measurement

**Documentation**:
- Governance framework
- Operating procedures
- Proposal templates
- Decision records

### Phase 3: Operations

**Treasury Management**:
- Diversification strategy
- Payment systems
- Reporting cadence
- Risk management

**Community Building**:
- Onboarding processes
- Communication forums
- Regular meetings
- Recognition programs

**Impact Activities**:
- Grant programs
- Direct initiatives
- Partnerships
- Measurement systems

**Continuous Improvement**:
- Regular retrospectives
- Governance experiments
- Process optimization
- Community feedback

## Challenges and Solutions

### Common Challenges

**Low Participation**:
- Most token holders don't vote
- Governance fatigue
- Complexity barriers
- Free-rider problems

**Solutions**:
- Delegation mechanisms
- Simplified interfaces
- Incentivized participation
- Clear communication

**Regulatory Uncertainty**:
- Unclear legal status
- Securities concerns
- Tax implications
- Compliance requirements

**Solutions**:
- Legal wrappers
- Professional counsel
- Conservative approaches
- Industry advocacy

**Coordination Difficulties**:
- Slow decision-making
- Communication challenges
- Time zone barriers
- Cultural differences

**Solutions**:
- Asynchronous tools
- Clear processes
- Professional coordinators
- Regular synchronization

**Technical Complexity**:
- Smart contract risks
- User experience barriers
- Gas cost challenges
- Security concerns

**Solutions**:
- Audited contracts
- User-friendly interfaces
- Layer 2 solutions
- Security best practices

## Impact Measurement

### Framework for DAOs

**Inputs**:
- Funds raised
- Members engaged
- Hours contributed
- Resources deployed

**Activities**:
- Projects funded
- Initiatives launched
- Partnerships formed
- Events held

**Outputs**:
- People reached
- Problems addressed
- Solutions implemented
- Knowledge shared

**Outcomes**:
- Lives improved
- Systems changed
- Capacity built
- Equity advanced

**Impact**:
- Long-term change
- Systemic transformation
- Sustained improvement
- Scaled solutions

### Metrics to Track

**Financial**:
- Treasury size
- Deployment rate
- Cost per beneficiary
- Return on impact

**Operational**:
- Proposals passed
- Decision speed
- Participation rate
- Working group activity

**Community**:
- Active members
- Proposal authors
- Voter turnout
- Retention rates

**Impact**:
- Domain-specific KPIs
- Beneficiary feedback
- Third-party verification
- Long-term tracking

## Future of Impact DAOs

### Emerging Trends

**Hybrid Governance**:
- Combining DAO and traditional structures
- Best of both approaches
- Regulatory compliance
- Operational efficiency

**AI Integration**:
- Automated analysis of proposals
- Impact prediction models
- Sentiment analysis
- Pattern recognition

**Improved Tooling**:
- Better voting interfaces
- Treasury dashboards
- Communication platforms
- Coordination tools

**Regulatory Clarity**:
- DAO-specific regulations
- Legal entity options
- Tax framework
- Compliance guidance

### Potential Applications

**Climate Action**:
- Carbon credit DAOs
- Reforestation funding
- Renewable energy projects
- Climate research grants

**Public Health**:
- Medical research funding
- Drug development DAOs
- Healthcare access initiatives
- Pandemic response coordination

**Education**:
- Scholarship funds
- Open educational resources
- Teacher support networks
- Student loan solutions

**Scientific Research**:
- Decentralized peer review
- Research funding
- Open science initiatives
- Data sharing networks

## Case Study: Successful DAO Treasury

### Structure

**Size**: $10M treasury
**Members**: 500 active participants
**Focus**: Environmental conservation

**Governance**:
- Token-weighted voting for major decisions
- 5-person elected council
- Quarterly strategy reviews
- Community veto power

**Treasury Allocation**:
- 40% stablecoins (operational runway)
- 30% ETH (long-term growth)
- 20% yield-generating DeFi (income)
- 10% impact-aligned tokens (mission)

### Operations

**Monthly Activities**:
- $50K in grants distributed
- 10-15 proposals evaluated
- 3-5 grants awarded
- Impact reports published

**Quarterly Reviews**:
- Treasury rebalancing
- Strategy adjustments
- Council elections
- Community feedback sessions

**Annual Outcomes**:
- 50 projects funded
- 10K acres protected
- 100K tonnes CO2 offset
- Community grown 50%

### Success Factors

**Clear Mission**: Everyone aligned on environmental focus
**Professional Operations**: Experienced team managing day-to-day
**Active Community**: Regular participation and engagement
**Transparent Finances**: All spending on-chain and reported
**Measurable Impact**: Clear KPIs and regular measurement

## Getting Involved

### As a Member

**Ways to Participate**:
- Vote on proposals
- Author proposals
- Join working groups
- Contribute skills
- Provide feedback

**Finding DAOs**:
- DeepDAO (DAO aggregator)
- DAO List directories
- Twitter crypto communities
- Discord servers
- Governance forums

### As a Builder

**Skills Needed**:
- Smart contract development
- Governance design
- Community management
- Operations
- Treasury management

**Resources**:
- DAOhaus (DAO framework)
- Aragon (DAO toolkit)
- Snapshot (voting platform)
- Coordinape (contributor rewards)
- Gnosis Safe (treasury management)

## Conclusion

Impact DAOs represent a paradigm shift in how charitable resources are governed and deployed. They offer:

**Unprecedented Transparency**:
- All decisions on-chain
- Public treasury management
- Verifiable impact tracking
- Community accountability

**Democratic Participation**:
- Open membership
- Collective decision-making
- Shared ownership
- Aligned incentives

**Operational Efficiency**:
- Lower overhead costs
- Faster decision-making
- Global coordination
- 24/7 operations

**Innovation Potential**:
- New funding mechanisms
- Experimental governance
- Scaled collaboration
- Rapid iteration

While challenges remain—regulatory uncertainty, participation barriers, coordination complexity—the trajectory is clear. DAOs are maturing rapidly, and their potential for charitable impact is enormous.

The future of philanthropy is decentralized, transparent, and community-driven. Impact DAOs are showing us what that future looks like.

**Want to learn more?** Explore our DAO rankings, join active communities, and consider participating in governance. The impact revolution is just beginning.
```

---

## Summary

This document contains the complete source code for all 40+ files in the GoodPeopleCoin project.

**Project Structure:**
- Next.js 15 application with App Router
- TypeScript throughout
- Tailwind CSS for styling
- MDX for content
- Radix UI components

**Total Files:** 40
- Configuration: 8
- Library/Config: 3  
- Styles: 1
- UI Components: 2
- Layout Components: 2
- Section Components: 5
- App Pages: 13
- MDX Content: 6

All files are included with their complete, unabridged content.
