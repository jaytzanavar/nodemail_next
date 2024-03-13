"use client";
import RatingCard from '../RatingCard/RatingCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export type Review = {
    author_name: string,
    profile_photo_url: string,
    rating: number,
    text: string,
    author_url: string
}

export type G_Review = {
    rating: number,
    reviews: Array<any>
}

const Reviews = ({ title, googleVerUser, userReview, reviewsA }: { title: string, googleVerUser: string, userReview: string, reviewsA: G_Review }) => {

    const { reviews } = reviewsA
    
    return (
        <div className='  bg-[url("/clients.jpg")] w-screen  bg-no-repeat bg-cover '>
            <div className='bg-black/30 h-full md:px-0 px-2 flex flex-col py-10 justify-center items-center gap-4'>
                <div id="divider" className="my-10 mb-3 h-[0.155rem] ml-3 w-[8%]  pr-10 border-t-0 bg-white/50 opacity-100 dark:opacity-50"></div>
                <h3 className='font-extrabold text-4xl text-center text-white/90'>
                    {title}
                </h3>
                {/* autoPlay={true} interval={5000} infiniteLoop={true} */}
                <Carousel autoPlay={true} interval={5000} infiniteLoop={true} className='md:w-[50%] w-[92%] px-4' showArrows={false} showStatus={false}>
                    {reviews && reviews.sort((a, b) => a.author_name.localeCompare(b.author_name) ).map((rev: Review) =>
                        <div className=' w-full flex justify-center' key={rev.author_name}>
                            <RatingCard gvu={googleVerUser} ur={userReview} rev={rev} />
                        </div>
                    )}
                </Carousel>
            </div>
        </div>
    )
}




export default Reviews