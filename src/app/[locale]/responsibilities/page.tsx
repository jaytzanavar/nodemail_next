import React from 'react'
import Hero from '@/components/Hero/Hero'
import Strategy from '@/components/Strategy/Strategy'
import { getTranslations } from 'next-intl/server'
import { PropsInterface } from '@/app/common/PropsInterface'

const ResponsibilitiesPage = async (props: PropsInterface) => {
    const { locale } = props.params
    const res = await getTranslations({ locale, namespace: 'Responsibilities' })

    const pillars = res.raw('strategy.pillars') as { title: string; description: string }[]

    return (
        <div className='bg-white'>
            <Hero
                locale={locale}
                return_btn={res('hero.return_btn')}
                heroTitle={res('hero.title')}
                heroSub={res('hero.title_b')}
                heroText={res('hero.text')}
                linkEnabled={true}
            />
            <Strategy
                title={res('strategy.title')}
                subtitle={res('strategy.subtitle')}
                pillars={pillars}
                ctaTitle={res('strategy.cta_title')}
                ctaText={res('strategy.cta_text')}
            />
        </div>
    )
}

export default ResponsibilitiesPage
