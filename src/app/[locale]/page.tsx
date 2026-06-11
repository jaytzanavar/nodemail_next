

import Content from "@/components/Content/Content";
import { getTranslations } from 'next-intl/server';
import { PropsInterface } from "../common/PropsInterface";
import dynamic from "next/dynamic";


export async function generateMetadata({ params: { locale } }: any) {

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('subtitle')
  };

}





async function getReviews(): Promise<{ rating?: number, reviews?: Array<any> }> {
  if (!process.env.API_ENDPOINT) return {};
  try {
    const q = await fetch(`${process.env.API_ENDPOINT}/api/google-info`, {
      next: { revalidate: 3600 },
    });
    if (!q.ok) return {};
    return await q.json();
  } catch {
    return {};
  }
}

export default async function Home(props: PropsInterface) {
  const { locale } = props.params
  const reviews = await getReviews();

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
    <main className="flex min-h-screen w-full flex-col items-center justify-between">

      {/* ── Sector 1: Hero — full-screen intro with call to action ── */}
      <section id="hero" className="w-full scroll-mt-24">
        <Content />
      </section>

      {/* ── Sector 2: About — highlight cards and firm presentation ── */}
      <section id="about" className="w-full scroll-mt-24">
        <DynamicSubcontent />
      </section>

      {/* ── Sector 3: Experience — animated stats over background image ── */}
      <section id="experience" className="w-full scroll-mt-24">
        <DynamicExperience title={exp('title')} subtitle={exp('subtitle')} est={exp('est')} cases_won={exp('cases_won')} business_partners={exp('business_partners')} trusting_clients={exp('trusting_clients')} />
      </section>

      {/* ── Sector 4: Practice areas — six cards grid ── */}
      <section id="practice-areas" className="w-full scroll-mt-24">
        <DynamicAreas title={ar('title')} card0={{ title: ar('card0.title'), text: ar('card0.text') }} card1={{ title: ar('card1.title'), text: ar('card1.text') }} card2={{ title: ar('card2.title'), text: ar('card2.text') }} card3={{ title: ar('card3.title'), text: ar('card3.text') }} card4={{ title: ar('card4.title'), text: ar('card4.text') }} card5={{ title: ar('card5.title'), text: ar('card5.text') }} card6={{ title: ar('card6.title'), text: ar('card6.text') }} cardStyle="'green'" />
      </section>

      {/* ── Sector 5: Reviews — only rendered when Google reviews are available ── */}
      {reviews.reviews && reviews.reviews.length > 0 &&
        <section id="reviews" className="w-full scroll-mt-24">
          <DynamicReviews title={rev('title')} googleVerUser={rev('gvu')} userReview={rev('userR')} reviewsA={{ rating: reviews.rating ?? 0, reviews: reviews.reviews }} />
        </section>
      }

      {/* ── Sector 6: Contact — lead form posting to /api/mail ── */}
      <section id="contact" className="w-full scroll-mt-24">
        <DynamicForms title={com('title')} name={com('name')} email={com('email')} phone={com('phone')} subject={com('subject')} message={com('message')} btn={com('btn')} success={com('success')} error={com('error')} required={com('required')} invalidEmail={com('invalid_email')} />
      </section>

    </main>
  );
}







