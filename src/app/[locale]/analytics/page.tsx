'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect, useState } from 'react';

export default function Analytics() {
    const [reviews, setReviews] = useState('0')
    const fetchReviews = async () => {
        try {
            const reviews = fetch(`${process.env.API_URL}/api/google-place`)
            sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })
        }



        catch (error) {
            console.error(` Error ${error}`);
        }

    }


    return (
        <div>
            <div>
                <button
                    onClick={() => fetchReviews()}
                >
                    Send Event
                </button>
                {reviews}
            </div>
        </div>
    )
}