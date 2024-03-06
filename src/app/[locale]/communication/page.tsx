
import React from 'react'
import Link from 'next/link'
import Forms from '@/components/Forms/Forms'

const CommunicationPage = () => {
    return (
        <div>
            <Link href="/">Link to Home</Link>
            <div className='h-[75vh]'>
                <Forms />
            </div>
        </div>
    )
}

export default CommunicationPage