import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from 'next/head'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import mainImage from '../../../public/lawWallPaper.webp'
import { Suspense } from "react";
import Loading from "@/components/Loader/Loader";
import { getTranslations } from "next-intl/server";

// Base font — covers Latin, French accents and Greek
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'greek'],
  variable: '--font-inter'
})

// Display serif, opt-in via the `font-display` Tailwind utility (no Greek support)
const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: "normal",
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

      <body className={`${inter.className} ${inter.variable} ${playfair.variable} bg-gradient-to-t  from-white to-slate-800 min-h-screen overflow-x-hidden`}>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider locale={locale} messages={messages} >
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
