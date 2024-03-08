
import React from 'react'
import Link from 'next/link'
import Forms from '@/components/Forms/Forms'
import Hero from '@/components/Hero/Hero'

const CommunicationPage = () => {
    const heroTitle = "Share your inquiry us, we respond"
    const heroSub = "instantly"
    const heroText = "Want to Learn More About How We Help Clients in Risk? Attract thousands of individuals and businesses, all of whom (98%) have successfully dealt with their legal conundrums with our timely…"
    return (
        <div>

            <Hero heroTitle={heroTitle} heroSub={heroSub} heroText={heroText} linkEnabled={true} />
            <Forms />

        </div>
    )
}

export default CommunicationPage