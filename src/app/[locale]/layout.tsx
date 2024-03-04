import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Playfair_Display } from "next/font/google";
// Poppins
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



const lato = Playfair_Display({
  weight: ["400", "700"],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Scaffold mail app",
  description: "This is the base of a website",
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
  return (
    <html lang={locale}>
      <body className={`${lato.className} bg-gradient-to-t from-[#fcb2eb] to-[#a6c1ee] h-screen `}>
        <Header />
        {children}
        <Footer />

      </body>
      <GoogleTagManager gtmId="GTM-WCNQ8DGR" />
    </html>
  );
}
