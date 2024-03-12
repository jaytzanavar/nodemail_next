import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
// Poppins
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Content from "@/components/Content/Content";

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
      <body className={`${lato.className} bg-gradient-to-t from-[#fcb2eb] to-[#a6c1ee] h-screen overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages} >
          <Header locale={locale}
          />
        </NextIntlClientProvider>
        <Content />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-WCNQ8DGR" />
    </html>
  );
}
