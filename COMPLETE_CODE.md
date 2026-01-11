# GoodPeopleCoin - Complete Source Code Export

## Quick Start

```bash
# Install dependencies
npm install

# Run development server  
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
goodpeoplecoin/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── articles/           # Articles section
│   │   ├── contact/            # Contact page
│   │   ├── for-projects/       # For projects pages
│   │   ├── how-it-works/       # How it works page
│   │   ├── press-room/         # Press room page
│   │   ├── rankings/           # Rankings page
│   │   ├── verified-projects/  # Verified projects page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── robots.ts           # Robots.txt
│   │   └── sitemap.ts          # Sitemap
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Section components
│   │   └── ui/                 # UI primitives
│   ├── config/                 # Configuration files
│   ├── content/                # MDX articles
│   └── lib/                    # Utility functions
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── mdx-components.tsx          # MDX component overrides
```

## Configuration Files
