import React from 'react'
import Hero from '@/components/Hero/Hero'
import Strategy from '@/components/Strategy/Strategy'
import { PropsInterface } from '@/app/common/PropsInterface'

const ResponsibilitiesPage = (props: PropsInterface) => {
    const { locale } = props.params
    const heroTitle = "Our Legal Expertise"
    const heroSub = "Trusted & Proven"
    const heroText = "With over 20 years of experience, we’ve earned our reputation as Athens’ leading law firm. Our success speaks for itself: we handle the highest volume of cases while maintaining a 98% win rate.\n\nOur commitment to excellence is built on three core pillars that guide every decision we make."
    return (
        <div className='bg-white'>
            <Hero locale={locale} return_btn={'Return Home'} heroTitle={heroTitle} heroSub={heroSub} heroText={heroText} linkEnabled={true} />
            <Strategy />
        </div>
    )
}

export default ResponsibilitiesPage