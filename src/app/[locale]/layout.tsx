import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from 'next/head'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import mainImage from '../../../public/lawWallPaper.jpg'
import { Suspense } from "react";
import Loading from "@/components/Loader/Loader";

const lato = Playfair_Display({
  weight: ["400", "700"],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Damouli Law Firm Website",
  description: "This is the landing page of Damouli Law Firm official website",
  // openGraph: {
  //   title: "Damouli Law Firm Website",
  //   description: "All kinds of law and attorney services is our strength",
  //   url: "damoulilawfirm.com",
  //   siteName: "damoulilawfirm athens",
  //   images: [
  //     {
  //       url: "/public.png",
  //       width: 1200,
  //       height: 800
  //     }
  //   ]

  // }
};

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
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`https://${process.env.API_ENDPOINT}/${locale}`}
        />

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
      <GoogleTagManager gtmId="GTM-WCNQ8DGR" />
    </html>
  );
}
