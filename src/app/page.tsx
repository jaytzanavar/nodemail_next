'use client'

import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Forms from "@/components/Forms/Forms";
import Header from "@/components/Header/Header";
import Reviews from "@/components/Reviews/Reviews";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Content />
      <Reviews />
      <Forms />
      <Footer />
    </main >
  );
}
