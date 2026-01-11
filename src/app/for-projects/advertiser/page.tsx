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
