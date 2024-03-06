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

            setReviews(data.reviews)


        } catch (error) {

        }
    }

    useEffect(() => {
        getReviews()
    }, [])

    const [reviews, setReviews] = useState([]);

    return (
        <div className='  bg-[url("/clients.jpg")] w-screen  bg-no-repeat bg-cover '>
            <div className='bg-black/30 h-full md:px-0 px-2 flex flex-col py-10 justify-center items-center gap-4'>
                <div id="divider" className="my-10 h-[0.155rem] ml-3 w-[8%]  pr-10 border-t-0 bg-white/50 opacity-100 dark:opacity-50"></div>
                <h3 className='font-extrabold text-4xl text-center text-white/90'>
                    Satisfied Client Stories</h3>
                    {/* autoPlay={true} interval={5000} infiniteLoop={true} */}
                <Carousel className='md:w-[50%] w-[92%] px-4' showArrows={false}  showStatus={false}>
                    {reviews && reviews.map((rev: Review) =>
                        <div className=' w-full flex justify-center' key={rev.author_name}>
                            <RatingCard rev={rev} />
                        </div>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default Reviews