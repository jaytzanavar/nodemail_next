import { useTranslations } from "next-intl";

import Content from "../../components/Content/Content";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header/Header";
import Reviews from "../../components/Reviews/Reviews";
import Subcontent from "../../components/SubContent/Subcontent";





export default function Home() {
  const t = useTranslations('Content')
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Content />
        <Subcontent />
        <Experience />
        <Reviews />
        <Forms />
      </main >
    </>

  );
}
