import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, User } from 'lucide-react'

interface ArticleCardProps {
  title: string
  description: string
  slug: string
  category: string
  date: string
  author: string
}

export function ArticleCard({ title, description, slug, category, date, author }: ArticleCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-neon-green/10 px-3 py-1 text-xs font-medium text-neon-green">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl">
          <Link href={`/articles/${slug}`} className="hover:text-neon-green transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <CardDescription className="mb-4 flex-1 text-base">
          {description}
        </CardDescription>
        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/articles/${slug}`}>
            Read Article
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
