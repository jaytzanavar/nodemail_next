'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect, useState } from 'react';

export default function Analytics() {
    const [reviews, setReviews] = useState('0')
    const fetchReviews = async () => {
        console.log(process.env.NEXT_PUBLIC_GOOGLE_KEY);
        try {
            const reviews = fetch('/api/google-place')
            console.log(reviews);

            sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })
        }



        catch (error) {
            console.log(` Error ${error}`);
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