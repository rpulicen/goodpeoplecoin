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
  metadataBase: new URL('https://goodpeoplecoin.com'),
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
