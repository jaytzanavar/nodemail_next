import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from 'next/head'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import mainImage from '../../../public/lawWallPaper.webp'
import { Suspense } from "react";
import Loading from "@/components/Loader/Loader";
import { getTranslations } from "next-intl/server";

const lato = Playfair_Display({
  weight: ["400", "700"],
  style: "normal",
  subsets: ['latin']
})

// export const metadata: Metadata = {
//   title: "Damouli Law Firm official website",
//   description: "Discover unparalleled legal expertise and personalized solutions at Damouli Law Firm. With a legacy of excellence, our dedicated team ensures unwavering support, strategic counsel, and successful outcomes for your legal challenges. From business law to civil litigation and insurance defense, trust Damouli Law Firm to safeguard your interests with precision and integrity.",
//   keywords: "Law firm, Legal counsel,Business law,Civil litigation,Insurance defense,Legal expertise,Legal solutions,Trusted attorneys,Client success,Damouli Law Firm"
// };

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
    <html className="scroll-smooth" lang={locale}>

      <Head>
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

      <body className={`${lato.className} bg-gradient-to-t  from-white to-slate-800 h-screen overflow-x-hidden`}>
        <SmoothScroll />

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
