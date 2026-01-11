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
