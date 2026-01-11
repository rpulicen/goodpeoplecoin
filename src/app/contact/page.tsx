'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'General inquiries and support',
      contact: 'hello@goodpeoplecoin.com',
      href: 'mailto:hello@goodpeoplecoin.com',
    },
    {
      icon: MessageSquare,
      title: 'Press',
      description: 'Media and research inquiries',
      contact: 'press@goodpeoplecoin.com',
      href: 'mailto:press@goodpeoplecoin.com',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in <span className="text-neon-green">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions about our rankings, methodology, or want to submit a project for evaluation? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <Card key={method.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon-green/10">
                    <Icon className="h-6 w-6 text-neon-green" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    className="text-neon-green hover:underline"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green/10">
                  <Send className="h-8 w-8 text-neon-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Submit a Project</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="press">Press/Media Inquiry</option>
                      <option value="advertising">Advertising</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
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
