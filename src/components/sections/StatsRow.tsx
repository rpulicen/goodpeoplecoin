export function StatsRow() {
  const principles = [
    {
      title: 'On-Chain–Based Evaluation',
      description: 'All assessments use publicly verifiable blockchain data.',
    },
    {
      title: 'Disclosure-First Methodology',
      description: 'Assumptions, limitations, and data sources are published.',
    },
    {
      title: 'No Paid Rankings',
      description: 'Commercial relationships never influence scores.',
    },
    {
      title: 'Public Evaluation Criteria',
      description: 'Inclusion and scoring standards are documented and consistent.',
    },
  ]

  return (
    <div className="border-y border-border/40 bg-gradient-radial">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.title} className="text-center">
              <div className="text-base font-semibold text-neon-green mb-2">
                {principle.title}
              </div>
              <div className="text-sm text-muted-foreground">
                {principle.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
