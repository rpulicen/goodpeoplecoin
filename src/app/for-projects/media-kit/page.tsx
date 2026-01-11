import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download } from 'lucide-react'

export default function MediaKitPage() {
  const assets = [
    {
      title: 'Logo Package',
      description: 'PNG, SVG, and EPS formats in various color schemes. Approved for editorial and reference use only.',
      size: '2.5 MB',
    },
    {
      title: 'Brand Guidelines',
      description: 'Usage guidelines for accurate representation in editorial and research contexts.',
      size: '1.8 MB',
    },
    {
      title: 'Media Kit PDF',
      description: 'Overview of mission, methodology, and public transparency standards.',
      size: '4.2 MB',
    },
    {
      title: 'Press Images',
      description: 'Approved screenshots and visuals for editorial use.',
      size: '8.7 MB',
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Press & <span className="text-neon-green">Reference Materials</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Official reference materials for media, researchers, and public citation.
            </p>
          </div>
        </div>
      </section>

      {/* Download Assets */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Download Assets
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Brand assets and media resources for editorial and research use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {assets.map((asset) => (
            <Card key={asset.title}>
              <CardHeader>
                <CardTitle className="text-xl">{asset.title}</CardTitle>
                <CardDescription className="text-base pt-2">
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

        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <CardDescription className="mb-2">
              Media & Research Inquiries
            </CardDescription>
            <p className="text-xs text-muted-foreground mb-4">
              For citations, clarifications, or methodology questions.
            </p>
            <Button asChild size="lg">
              <a href="mailto:press@goodpeoplecoin.com">
                Contact Us
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border/40 bg-gradient-radial">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8">
              About GoodPeopleCoin
            </h2>
            <Card>
              <CardContent className="p-8 space-y-4 text-muted-foreground">
                <p>
                  GoodPeopleCoin provides transparent crypto charity rankings and verified impact project evaluations. We help donors discover and evaluate charitable crypto projects using on-chain data verification and comprehensive transparency scoring.
                </p>
                <p>
                  Founded in 2024, our mission is to bring accountability and transparency to crypto philanthropy by providing donors with the data they need to make informed giving decisions.
                </p>
                <p>
                  Our methodology is based on published transparency criteria, on-chain data, and disclosure-first principles. Rankings are independent and not influenced by commercial relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
