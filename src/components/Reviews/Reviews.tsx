"use client";
import { useEffect, useState } from 'react';
import RatingCard from '../RatingCard/RatingCard'
import { getRatingsReviews } from '../../../lib/api';

export type Review = {
    author_name: string,
    profile_photo_url: string,
    rating: number,
    text: string,
    author_url: string
}

const Reviews = () => {

    const getReviews = async () => {

        try {
            const res = await getRatingsReviews()
            const data = await res.json();
            console.log();
            setReviews(data.reviews)


        } catch (error) {

        }
    }

    useEffect(() => {
        getReviews()
    }, [])

    const [reviews, setReviews] = useState([]);

    return (
        <div className='bg-gray-600/600 w-full p-4 grid grid-cols-3 gap-3'>
            {reviews.map((rev: Review) =>
                <RatingCard key={rev.author_name} rev={rev} />
            )}

        </div>
    )
}

export default Reviews