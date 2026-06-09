import { Inter, Playfair_Display, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import Header from "@/components/Header/Header";
import UtilityBar from "@/components/UtilityBar/UtilityBar";
import Footer from "@/components/Footer/Footer";
import Head from 'next/head'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import mainImage from '../../../public/design/img-columns.jpg'
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
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ['latin'],
  variable: '--font-playfair'
})


export async function generateMetadata() {

  const t = await getTranslations('Metadata'); // here use your way to get translation string

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords")
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

      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(() => {
                    document.documentElement.classList.add('loaded');
                  }, 100);
                });
              } else {
                setTimeout(() => {
                  document.documentElement.classList.add('loaded');
                }, 100);
              }
            `,
          }}
        />
        <link
          rel="preload"
          href={mainImage.src}
          as="image"
        />

        <link
          rel="canonical"
          href="https://damoulilawfirm.com"
          key="canonical"
        />


        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`https://${process.env.API_ENDPOINT}/${locale}`}
        />

        <link rel="icon" href="../favicon.ico" />

      </Head>

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
      </body>

    </html>
  );
}
