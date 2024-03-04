"use client";
import { useEffect, useState } from 'react';
import RatingCard from '../RatingCard/RatingCard'
import { getRatingsReviews } from '../../../lib/api';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <div className='bg-gray-600/80 min-h-[50vh]'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div id="divider" className="my-10 h-[0.095rem] ml-3 w-[50%] pr-10 border-t-0 bg-gray-700/50 opacity-100 dark:opacity-50"></div>
                <h3 className='font-extrabold text-4xl text-center text-white'>
                    Satisfied Client Stories</h3>
                <Carousel className='w-screen px-4' showArrows={false} autoPlay={true} interval={5000} infiniteLoop={true} showStatus={false}>
                    {reviews && reviews.map((rev: Review) =>
                        <div className='w-full' key={rev.author_name}>
                            <RatingCard rev={rev} />
                        </div>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default Reviews