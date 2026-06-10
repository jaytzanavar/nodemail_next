import { Inter, Playfair_Display, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import Header from "@/components/Header/Header";
import UtilityBar from "@/components/UtilityBar/UtilityBar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Suspense } from "react";
import Loading from "@/components/Loader/Loader";
import { getTranslations } from "next-intl/server";

// Fallback font — covers Latin, French accents and Greek
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'greek'],
  variable: '--font-inter'
})

// Design-system text face (no Greek support — Greek glyphs fall back to Inter)
const hanken = Hanken_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-hanken'
})

// Display serif, opt-in via the `font-display` Tailwind utility (no Greek support)
const playfair = Playfair_Display({
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  const t = await getTranslations('Metadata'); // here use your way to get translation string

  return {
    metadataBase: new URL('https://damoulilawfirm.com'),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: 'https://damoulilawfirm.com',
      languages: {
        [locale]: `https://${process.env.API_ENDPOINT}/${locale}`,
      },
    },
    icons: { icon: '/favicon.ico' },
  }
}


interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  const messages = useMessages()


  return (
    <html lang={locale}>

      <body className={`${hanken.className} ${hanken.variable} ${inter.variable} ${playfair.variable} font-sans bg-paper min-h-screen overflow-x-hidden`}>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider locale={locale} messages={messages} >
            <UtilityBar />
            <Header locale={locale}
            />
          </NextIntlClientProvider>
          <section>
            {children}
          </section>
          <Footer />
        </Suspense>
        <Analytics />
        <SpeedInsights />
        <script
          dangerouslySetInnerHTML={{
            __html: `requestAnimationFrame(function(){document.documentElement.classList.add('loaded');});`,
          }}
        />
      </body>

    </html>
  );
}
