'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Shield, TrendingUp, Zap } from 'lucide-react'

export default function VerifiedProjectsPage() {
  const [formData, setFormData] = useState({
    projectName: '',
    website: '',
    category: '',
    blockchain: '',
    contactEmail: '',
    description: '',
    tier: 'basic',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const tiers = [
    {
      name: 'Basic Listing',
      price: 'Free',
      description: 'Get your project listed in our rankings with basic verification.',
      features: [
        'Basic profile listing',
        'Transparency score',
        'On-chain verification',
        'Monthly updates',
      ],
      icon: Shield,
    },
    {
      name: 'Verified Badge',
      price: '$299/mo',
      description: 'Enhanced verification with additional documentation review.',
      features: [
        'Everything in Basic',
        'Verification status badge',
        'Methodology review notes',
        'Response time SLA',
        'Additional documentation review',
      ],
      icon: Check,
    },
    {
      name: 'Premium Partner',
      price: '$999/mo',
      description: 'Comprehensive analytics and optional commercial disclosure.',
      features: [
        'Everything in Verified',
        'Optional sponsored disclosure (clearly labeled; does not affect ranking)',
        'Custom analytics dashboard',
        'Quarterly impact reports',
        'API access',
        'Verified status label',
      ],
      icon: TrendingUp,
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get <span className="text-neon-green">Verified</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Verification confirms that a project meets our transparency standards.
              Verification does not guarantee ranking position.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Tier
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select the verification level that best fits your project's needs.
          </p>
        </div>

        <div className="mx-auto max-w-4xl mb-8">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Verification is based on published transparency criteria. Optional commercial disclosures do not affect rankings.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <Card key={tier.name}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-2xl font-semibold text-muted-foreground">{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base">
                    {tier.description}
                  </CardDescription>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => setFormData({ ...formData, tier: tier.name.toLowerCase().replace(' ', '-') })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Application Form
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us about your project and we'll get back to you within 48 hours.
              </p>
            </div>

            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green/10">
                  <Check className="h-8 w-8 text-neon-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. We'll review your application and get back to you within 48 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Submit Another Application
                </Button>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="projectName" className="block text-sm font-medium mb-2">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      required
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="Your Project Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="https://yourproject.com"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      >
                        <option value="">Select a category</option>
                        <option value="platform">Platform</option>
                        <option value="protocol">Protocol</option>
                        <option value="organization">Organization</option>
                        <option value="dao">DAO</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="blockchain" className="block text-sm font-medium mb-2">
                        Blockchain *
                      </label>
                      <select
                        id="blockchain"
                        name="blockchain"
                        required
                        value={formData.blockchain}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      >
                        <option value="">Select blockchain</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="bsc">Binance Smart Chain</option>
                        <option value="polygon">Polygon</option>
                        <option value="celo">Celo</option>
                        <option value="multi">Multi-chain</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="contact@yourproject.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="Tell us about your project's mission, impact, and transparency practices..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
