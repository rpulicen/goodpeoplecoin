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
