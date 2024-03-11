
import React from 'react'
import Link from 'next/link'
import Forms from '@/components/Forms/Forms'
import Hero from '@/components/Hero/Hero'
import { getTranslations } from 'next-intl/server'

const CommunicationPage = async ({ locale }) => {
  
    
    const heroText = "Want to Learn More About How We Help Clients in Risk? Attract thousands of individuals and businesses, all of whom (98%) have successfully dealt with their legal conundrums with our timely…"

    const com = await getTranslations({ locale, namespace: 'Communication' });
    return (
        <div>

            <Hero return_btn={com('hero.return_btn')}   heroTitle={com('hero.title')} heroSub={com('hero.title_b')} heroText={com('hero.text')} linkEnabled={true} />
            <Forms title={com('title')} name={com('name')} email={com('email')} phone={com('phone')} message={com('message')} btn={com('btn')} />

        </div>
    )
}

export default CommunicationPage