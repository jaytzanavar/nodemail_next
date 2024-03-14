import { MetadataRoute } from 'next';


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private'
    },
    sitemap: "https://law-website-template.vercel.app/sitemaps.xml"
  }
}
