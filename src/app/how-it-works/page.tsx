import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/sections/CTASection'
import { Search, Database, BarChart3, Shield, CheckCircle, AlertCircle } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: '1. Data Collection',
      description: 'We continuously monitor blockchain networks, tracking donation flows, smart contract interactions, and public disclosures from crypto charity projects.',
    },
    {
      icon: Database,
      title: '2. On-Chain Verification',
      description: 'Every claim is verified against blockchain data. We trace funds, analyze transaction patterns, and verify wallet addresses to ensure accuracy.',
    },
    {
      icon: BarChart3,
      title: '3. Scoring & Analysis',
      description: 'Projects are scored based on transparency, documentation quality, on-chain proof, governance practices, and impact reporting.',
    },
    {
      icon: Shield,
      title: '4. Continuous Monitoring',
      description: 'Rankings are updated in real-time as new data becomes available. Projects are re-evaluated monthly to ensure accuracy.',
    },
  ]

  const criteria = [
    {
      icon: CheckCircle,
      title: 'Transparency Score',
      description: 'Measures how openly a project shares information about donations, spending, and impact.',
    },
    {
      icon: CheckCircle,
      title: 'On-Chain Proof',
      description: 'Verifies that donation claims can be independently validated on the blockchain.',
    },
    {
      icon: CheckCircle,
      title: 'Documentation Quality',
      description: 'Evaluates the depth and clarity of impact reports, financial statements, and public disclosures.',
    },
    {
      icon: CheckCircle,
      title: 'Governance',
      description: 'Assesses decision-making processes, community involvement, and accountability structures.',
    },
  ]

  const redFlags = [
    'Unverifiable donation claims',
    'Opaque wallet addresses',
    'Missing impact reports',
    'Centralized control without oversight',
    'Token incentive misalignment',
    'Inconsistent on-chain activity',
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How It <span className="text-neon-green">Works</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Our methodology combines blockchain analysis, data verification, and transparency scoring to rank crypto charity projects.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A systematic approach to evaluating crypto charity transparency.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card key={step.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="border-y border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Scoring Criteria
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What we evaluate when ranking projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {criteria.map((criterion) => {
              const Icon = criterion.icon
              return (
                <Card key={criterion.title}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-neon-green mb-2" />
                    <CardTitle className="text-lg">{criterion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {criterion.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Red Flags We Watch For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Warning signs that lower a project's transparency score.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <ul className="grid gap-4 md:grid-cols-2">
                {redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        title="Ready to Explore Transparent Projects?"
        description="Browse our rankings to find crypto charity projects that prioritize transparency and accountability."
        primaryCTA={{
          text: 'View Rankings',
          href: '/rankings',
        }}
        secondaryCTA={{
          text: 'Submit Your Project',
          href: '/verified-projects',
        }}
      />
    </div>
  )
}
