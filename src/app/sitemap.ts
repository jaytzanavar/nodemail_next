import { MetadataRoute } from 'next'

const BASE_URL = 'https://damoulilawfirm.com'
const locales = ['en', 'gr', 'fr'] as const
const pages = ['advisory', 'responsibilities', 'communication', 'careers'] as const

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    const entries: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified,
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]

    for (const locale of locales) {
        entries.push({
            url: `${BASE_URL}/${locale}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        })

        for (const page of pages) {
            entries.push({
                url: `${BASE_URL}/${locale}/${page}`,
                lastModified,
                changeFrequency: 'weekly',
                priority: 0.5,
            })
        }
    }

    return entries
}
