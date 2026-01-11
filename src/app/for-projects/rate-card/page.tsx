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
