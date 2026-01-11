import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goodpeoplecoin.com'

  // Static pages
  const staticPages = [
    '',
    '/rankings',
    '/verified-projects',
    '/articles',
    '/how-it-works',
    '/for-projects',
    '/for-projects/advertiser',
    '/for-projects/rate-card',
    '/for-projects/media-kit',
    '/contact',
    '/press-room',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
