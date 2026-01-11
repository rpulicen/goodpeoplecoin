export function LogoStrip() {
  const partners = [
    'Binance Charity',
    'Giveth',
    'The Giving Block',
    'Endaoment',
    'Gitcoin',
    'Unicef CryptoFund',
  ]

  return (
    <div className="border-b border-border/40 bg-background">
      <div className="container py-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Referenced public data sources and infrastructure
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-neon-green"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
