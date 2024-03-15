

import Content from "@/components/Content/Content";
import { getTranslations } from 'next-intl/server';
import { PropsInterface } from "../common/PropsInterface";
import dynamic from "next/dynamic";
import { Suspense } from "react";


export async function generateMetadata({ params: { locale } }: any) {

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('subtitle')
  };

}





export default async function Home(props: PropsInterface) {
  const { locale } = props.params
  if (!process.env.API_ENDPOINT)
    return null;
  const q = await await fetch(`${process.env.API_ENDPOINT}/api/google-info`, {
    cache: "no-store",
  });
  const reviews = await q.json();

  const exp = await getTranslations({ locale, namespace: 'Experience' });
  const ar = await getTranslations({ locale, namespace: 'Areas' });
  const rev = await getTranslations({ locale, namespace: 'Reviews' });
  const com = await getTranslations({ locale, namespace: 'Communication' });

  const DynamicSubcontent = dynamic(() => import('../../components/SubContent/Subcontent'), {
    loading: () => <p>Loading...</p>,
  })

  const DynamicAreas = dynamic(() => import('../../components/Areas/Areas'), {
    loading: () => <p>Loading...</p>,
  })

  const DynamicExperience = dynamic(() => import('../../components/Experience/Experience'), {
    loading: () => <p>Loading...</p>,
  })

  const DynamicReviews = dynamic(() => import('../../components/Reviews/Reviews'), {
    loading: () => <p>Loading...</p>,
  })

  const DynamicForms = dynamic(() => import('../../components/Forms/Forms'), {
    loading: () => <p>Loading...</p>,
  })


  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between ">

        <Content />

        <DynamicSubcontent />

        <DynamicExperience title={exp('title')} subtitle={exp('subtitle')} est={exp('est')} cases_won={exp('cases_won')} business_partners={exp('business_partners')} trusting_clients={exp('trusting_clients')} />

        <DynamicAreas title={ar('title')} card1={{ title: ar('card1.title'), text: ar('card1.text') }} card2={{ title: ar('card2.title'), text: ar('card2.text') }} card3={{ title: ar('card3.title'), text: ar('card3.text') }} card4={{ title: ar('card4.title'), text: ar('card4.text') }} card5={{ title: ar('card5.title'), text: ar('card5.text') }} card6={{ title: ar('card6.title'), text: ar('card6.text') }} cardStyle="'green'" />
        <DynamicReviews title={rev('title')} googleVerUser={rev('gvu')} userReview={rev('userR')} reviewsA={reviews} />
        <DynamicForms title={com('title')} name={com('name')} email={com('email')} phone={com('phone')} message={com('message')} btn={com('btn')} />
      </main >


    </>

  );
}







