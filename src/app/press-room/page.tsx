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
