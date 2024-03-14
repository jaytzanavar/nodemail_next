import React from 'react'
import Hero from '@/components/Hero/Hero'
import Strategy from '@/components/Strategy/Strategy'
import { PropsInterface } from '@/app/common/PropsInterface'

const ResponsibilitiesPage = (props: PropsInterface) => {
    const { locale } = props.params
    const heroTitle = "Get the Best Legal Service"
    const heroSub = "Ever"
    const heroText = " With more than 20 years of experience behind, today our Athens law firm is the #1, both when talking about the number of yearly cases dealt with and the percentage of all those cases being won. But that kind of success does not come by, just when you sit idly or do not have strict work ethic principles being put into practice…    We’ve always cherished the three pillars which our company has always stood upon"
    return (
        <div className='bg-white'>
            <Hero locale={locale} return_btn={'Return Home'} heroTitle={heroTitle} heroSub={heroSub} heroText={heroText} linkEnabled={true} />
            <Strategy />
        </div>
    )
}

export default ResponsibilitiesPage