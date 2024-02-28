import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Roboto } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scaffold mail app",
  description: "This is the base of a website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-WCNQ8DGR" />
    </html>
  );
}
