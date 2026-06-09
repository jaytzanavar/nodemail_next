# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14** web application for a law firm with multi-language support (English, Greek, French). It uses:
- **Next.js App Router** with file-based routing
- **next-intl** for internationalization (i18n) with locale-based segments
- **Tailwind CSS** for styling
- **TypeScript** with strict mode enabled
- **Nodemailer** for email contact forms via `/api/mail`
- **Vercel Analytics** and **Speed Insights** for monitoring

## Development Commands

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm lint
```

**Note**: There are currently no test commands configured (no Jest/Vitest setup). Testing is not yet automated in this project.

## Architecture

### App Router Structure

The app uses Next.js App Router with locale-based routing handled by `next-intl` middleware:

- **Route Pattern**: `/[locale]/[page]` (e.g., `/en/advisory`, `/gr/communication`)
- **Supported Locales**: `en` (English), `gr` (Greek), `fr` (French) — configured in:
  - `src/middleware.ts` (routing)
  - `src/i18n.ts` (i18n config)
- **Default Locale**: English (`en`)
- **Root Routes**: Some routes exist at the root level (e.g., `/api/*`, robots, sitemap)

### i18n System

- **Translations** are loaded from `src/messages/{locale}.json` (not currently committed, but referenced in `src/i18n.ts`)
- **Usage in Components**: Use `getTranslations()` from `next-intl/server` in Server Components
- **Namespaces**: Translations are organized by namespace (e.g., `'Metadata'`, `'Experience'`, `'Areas'`, `'Reviews'`, `'Communication'`)
- **Example**: `const t = await getTranslations({ locale, namespace: 'Metadata' }); t('title')`

### Component Organization

Components are organized by feature/section in `src/components/`:
- **Content**: Hero/landing section
- **SubContent**: Secondary content sections
- **Areas**: Practice areas cards (6 cards, green styling)
- **Experience**: Stats/metrics (established date, cases won, partners, clients)
- **Forms**: Contact form with nodemailer integration
- **Reviews**: Google reviews display
- **Header/Footer**: Navigation and footer
- **Map**: Google Maps integration (react-leaflet and @react-google-maps/api)
- **Utility Components**: Button, Cards, Loader, Spinner, SmoothScroll, Strategy, RatingCard

**Dynamic Imports**: Heavy components (SubContent, Areas, Experience, Reviews, Forms) are dynamically imported in the home page for performance.

### API Routes

- **`POST /api/mail`**: Sends contact form emails via Nodemailer
  - Required fields: `name`, `email`, `subject`, `message`
  - Uses Gmail SMTP with credentials from environment variables
  - Returns 200 on success, 400 on error
  - Configured in `config/nodemailer.ts`

- **`GET /api/google-info`**: Fetches Google reviews (details in route handler at `src/app/api/google-info/route.tsx`)

### Contact Form & Email Flow

The contact form is a key feature for lead generation:

1. **User submits form** in the `Forms` component (dynamically loaded on home page)
2. **Client-side validation** via Formik
3. **POST request** to `/api/mail` with `{ name, email, subject, message }`
4. **Server-side validation** checks all required fields exist
5. **Nodemailer sends email** via Gmail SMTP (credentials from `NEXT_PUBLIC_EMAIL_USERNAME` and `NEXT_PUBLIC_EMAIL_PASSWORD`)
6. **Email HTML template** includes sender name and email as clickable link
7. **Response** returns JSON with success/error message and HTTP status (200 or 400)

Environment setup: Gmail requires an **app-specific password** (not the regular account password) for security. This is configured in `config/nodemailer.ts` which imports credentials from env vars.

### Type Aliases & Paths

- TypeScript path alias: `@/*` → `src/*` (configured in `tsconfig.json`)
- Common interface: `PropsInterface` in `src/app/common/PropsInterface.tsx` (used for locale routing props)

### Environment Variables

Required for email functionality:
```
NEXT_PUBLIC_EMAIL_USERNAME=  # Gmail address
NEXT_PUBLIC_EMAIL_PASSWORD=  # Gmail app password
API_ENDPOINT=https://law-website-template.vercel.app  # For Google reviews API
```

The `API_URL` is hard-coded in `next.config.mjs` for Vercel deployments.

### Styling & Configuration

- **Tailwind CSS** with custom gradients (`gradient-radial`, `gradient-conic`)
- **PostCSS** for CSS processing
- **FontAwesome** icons (@fortawesome/react-fontawesome)
- **Animations**: Framer Motion, React Spring for smooth transitions
- **Carousel**: react-responsive-carousel for image galleries
- **Maps**: Google Maps and Leaflet (react-leaflet)

## Key Implementation Notes

- **Server Components**: Pages use `async` Server Components to fetch translations and Google reviews at request time
- **Dynamic Component Loading**: Most section components are lazy-loaded to optimize page load (see home page line 39-57)
- **Image Optimization**: Google user photo avatars allowed via `remotePatterns` in `next.config.mjs`
- **Metadata Generation**: SEO metadata (title, description) generated dynamically per locale via `generateMetadata()` in pages
- **Sitemap & Robots**: Auto-generated at `src/app/sitemap.ts` and `src/app/robots.ts`

## Common Workflows

- **Adding a new locale**: Add to the locales array in `src/middleware.ts` and `src/i18n.ts`, then create `src/messages/{locale}.json`
- **Adding a new page**: Create a route folder in `src/app/[locale]/` with `page.tsx` and optionally `layout.tsx`
- **Adding translations**: Update the relevant namespace in the `.json` message files, then reference with `getTranslations()`
- **Styling**: Use Tailwind classes; extend the theme in `tailwind.config.ts` for custom colors/gradients
