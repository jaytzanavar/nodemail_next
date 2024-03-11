import React from 'react'
import Hero from '@/components/Hero/Hero'
import Areas from '@/components/Areas/Areas'
import { getTranslations } from 'next-intl/server'

const AdvisoryPage = async ({ locale }) => {
    const ar = await getTranslations({ locale, namespace: 'Areas' });
    const adv = await getTranslations({ locale, namespace: 'Advisory' });

    const heroSub = adv('hero.title_b')
    const heroText = adv('hero.text')
    const return_btn = adv('hero.return_btn')



    return (
        <div>
            <Hero return_btn={return_btn} heroTitle={adv('hero.title')} heroSub={heroSub} heroText={heroText} linkEnabled={true} />

            <Areas title={ar('title')} card1={{ title: ar('card1.title'), text: ar('card1.text') }} card2={{ title: ar('card2.title'), text: ar('card2.text') }} card3={{ title: ar('card3.title'), text: ar('card3.text') }} card4={{ title: ar('card4.title'), text: ar('card4.text') }} card5={{ title: ar('card5.title'), text: ar('card5.text') }} card6={{ title: ar('card6.title'), text: ar('card6.text') }} cardStyle="'green'" />

        </div>
    )
}

export default AdvisoryPage