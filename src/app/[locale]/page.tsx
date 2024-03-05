import { NextIntlClientProvider } from 'next-intl';
import { useMessages } from 'next-intl';
import Content from "../../components/Content/Content";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header/Header";
import Reviews from "../../components/Reviews/Reviews";
import Subcontent from "../../components/SubContent/Subcontent";
import Areas from '@/components/Areas/Areas';




export default function Home(props) {

  const { params: { locale } } = props
  const messages = useMessages()

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages} >
        <Header />
      </NextIntlClientProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Content />
        <Subcontent />

        <Experience />
        <Areas />
        <Reviews />
        <Forms />
      </main >
      <Footer />
      
    </>

  );
}



