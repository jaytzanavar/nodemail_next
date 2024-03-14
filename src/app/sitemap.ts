import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://law-website-template.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://law-website-template.vercel.app/en',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://law-website-template.vercel.app/en/advisory',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },

        {
            url: 'https://law-website-template.vercel.app/en/responsibilities',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://law-website-template.vercel.app/en/communication',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },

        {
            url: 'https://law-website-template.vercel.app/fr',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://law-website-template.vercel.app/fr/responsibilities',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://law-website-template.vercel.app/fr/communication',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://law-website-template.vercel.app/fr/advisory',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://law-website-template.vercel.app/gr',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://law-website-template.vercel.app/gr/responsibilities',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://law-website-template.vercel.app/gr/communication',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://law-website-template.vercel.app/gr/advisory',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },

    ]
}