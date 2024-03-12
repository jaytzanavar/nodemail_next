

import Content from "../../components/Content/Content";
import Experience from "../../components/Experience/Experience";
import Forms from "../../components/Forms/Forms";
import Reviews from "../../components/Reviews/Reviews";
import Subcontent from "../../components/SubContent/Subcontent";
import Areas from '@/components/Areas/Areas';
import { getTranslations } from 'next-intl/server';
import { PropsInterface } from "../common/PropsInterface";


export async function generateMetadata({ params: { locale } }: any) {

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('subtitle')
  };

}




export default async function Home(props: PropsInterface) {
  const { locale } = props.params
  const reviews = await getData()
  const exp = await getTranslations({ locale, namespace: 'Experience' });
  const ar = await getTranslations({ locale, namespace: 'Areas' });
  const rev = await getTranslations({ locale, namespace: 'Reviews' });
  const com = await getTranslations({ locale, namespace: 'Communication' });

  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Content />
        {/* <Subcontent />

        <Experience title={exp('title')} subtitle={exp('subtitle')} est={exp('est')} cases_won={exp('cases_won')} business_partners={exp('business_partners')} trusting_clients={exp('trusting_clients')} />

        <Areas title={ar('title')} card1={{ title: ar('card1.title'), text: ar('card1.text') }} card2={{ title: ar('card2.title'), text: ar('card2.text') }} card3={{ title: ar('card3.title'), text: ar('card3.text') }} card4={{ title: ar('card4.title'), text: ar('card4.text') }} card5={{ title: ar('card5.title'), text: ar('card5.text') }} card6={{ title: ar('card6.title'), text: ar('card6.text') }} cardStyle="'green'" />
        <Reviews title={rev('title')} googleVerUser={rev('gvu')} userReview={rev('userR')} reviewsA={reviews.data} />
        <Forms title={com('title')} name={com('name')} email={com('email')} phone={com('phone')} message={com('message')} btn={com('btn')} /> */}
      </main >


    </>

  );
}



async function getData() {

  const res = await fetch(`${process.env.SERVER_API_ENDPOINT}/api/google-info`, { cache: 'force-cache' });
  const data = await res.json();
  return {
    data
  }
}



