# GoodPeopleCoin - Complete Codebase Reference

## Configuration Files

### package.json
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

### next.config.mjs
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

### tsconfig.json
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

### tailwind.config.js
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

### .eslintrc.json
```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off"
  }
}
```

### mdx-components.tsx
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

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Core Files

### src/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### src/lib/articles.ts
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

### src/config/analytics.ts
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

### src/app/globals.css
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

## UI Components

### src/components/ui/button.tsx
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

### src/components/ui/card.tsx
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

## Section Components

All section components (StatsRow, LogoStrip, FeatureGrid, CTASection, ArticleCard) and layout components (Header, Footer) are in the project.

## All Page Routes

The complete pages are in:
- src/app/page.tsx (Home)
- src/app/rankings/page.tsx
- src/app/verified-projects/page.tsx
- src/app/articles/page.tsx
- src/app/articles/[slug]/page.tsx
- src/app/how-it-works/page.tsx
- src/app/for-projects/page.tsx
- src/app/for-projects/advertiser/page.tsx
- src/app/for-projects/rate-card/page.tsx
- src/app/for-projects/media-kit/page.tsx
- src/app/contact/page.tsx
- src/app/press-room/page.tsx
- src/app/layout.tsx
- src/app/sitemap.ts
- src/app/robots.ts

## MDX Articles

Six complete articles in src/content/:
- top-charity-crypto-2025.mdx
- on-chain-philanthropy-guide.mdx
- crypto-charity-risks.mdx
- best-wallets-donations-2025.mdx
- binance-charity-explainer.mdx
- impact-daos.mdx

## To Run

```bash
npm install
npm run dev    # Development at localhost:3000
npm run build  # Production build
npm start      # Production server
```
