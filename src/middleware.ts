import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

// A list of all locales that are supported
const locales = ['en', 'gr', 'fr'];

// Country → locale: Greece gets Greek, France and Switzerland get French,
// everywhere else (including the rest of Europe) gets English.
const COUNTRY_LOCALES: { [country: string]: string } = {
    GR: 'gr',
    FR: 'fr',
    CH: 'fr'
};

function detectLocale(request: NextRequest): string {
    // A locale the user explicitly picked earlier wins over geolocation
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    if (cookieLocale && locales.includes(cookieLocale)) {
        return cookieLocale;
    }

    const country = (
        request.geo?.country ??
        request.headers.get('x-vercel-ip-country') ??
        ''
    ).toUpperCase();

    return COUNTRY_LOCALES[country] ?? 'en';
}

export default function middleware(request: NextRequest) {
    return createMiddleware({
        locales,

        // Used when no locale matches
        defaultLocale: detectLocale(request),

        // The locale comes from the URL prefix, the saved cookie or
        // geolocation — never from the browser's Accept-Language header
        localeDetection: false
    })(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(gr|en|fr)/:path*']
};
