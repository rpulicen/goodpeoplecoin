import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, TrendingUp, FileText, Zap } from 'lucide-react'

export function FeatureGrid() {
  const features = [
    {
      icon: Shield,
      title: 'On-Chain Verification',
      description: 'All donation claims are evaluated using publicly accessible blockchain data.',
    },
    {
      icon: FileText,
      title: 'Transparent Methodology',
      description: 'Scoring criteria and inclusion standards are published and consistently applied.',
    },
    {
      icon: TrendingUp,
      title: 'Non-Promotional Rankings',
      description: 'Rankings are never influenced by sponsorships, token prices, or paid placement.',
    },
    {
      icon: Zap,
      title: 'Disclosure-First Model',
      description: 'Any commercial relationships are clearly disclosed and never override criteria.',
    },
  ]

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Evaluation Principles
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
