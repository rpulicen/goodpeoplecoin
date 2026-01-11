# GoodPeopleCoin - Complete Source Code

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

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
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

### .gitignore
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## Source Files

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

Continue to next file...
