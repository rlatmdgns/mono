import type { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_ORIGIN as string
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}
