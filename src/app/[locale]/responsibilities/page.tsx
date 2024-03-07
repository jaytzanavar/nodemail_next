import React from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Strategy from '@/components/Strategy/Strategy'

const ResponsibilitiesPage = () => {
    return (
        <div className='bg-white'>
            <Hero />
            <Strategy />
        </div>
    )
}

export default ResponsibilitiesPage