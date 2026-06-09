"use client";
import RatingCard from '../RatingCard/RatingCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import client_img from '../../../public/clients.webp';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

const arrowClasses = 'hidden md:flex absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60'

const Reviews = ({ title, googleVerUser, userReview, reviewsA }: { title: string, googleVerUser: string, userReview: string, reviewsA: G_Review }) => {

    const { reviews } = reviewsA
    const sortedReviews = reviews ? [...reviews].sort((a, b) => a.author_name.localeCompare(b.author_name)) : []

    return (
        <div className='relative w-full overflow-hidden'>
            <Image quality={90} sizes="50vw" placeholder="blur" className="z-0 relative" alt="Damouli law firm client review image" src={client_img} fill style={{ objectFit: "cover" }} />
            <div className='relative flex flex-col items-center justify-center bg-black/50 px-4 py-16 md:py-24'>
                <div aria-hidden="true" className="mb-6 h-px w-16 bg-white/40"></div>
                <h2 className='text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl'>
                    {title}
                </h2>
                <Carousel
                    className='relative mt-10 w-full max-w-2xl md:mt-12'
                    ariaLabel={title}
                    autoPlay
                    interval={6000}
                    infiniteLoop
                    swipeable
                    emulateTouch
                    showThumbs={false}
                    showStatus={false}
                    renderArrowPrev={(onClick, hasPrev, label) => hasPrev && (
                        <button type="button" aria-label={label} onClick={onClick} className={`${arrowClasses} left-2`}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    )}
                    renderArrowNext={(onClick, hasNext, label) => hasNext && (
                        <button type="button" aria-label={label} onClick={onClick} className={`${arrowClasses} right-2`}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    )}
                    renderIndicator={(onClick, isSelected, index, label) => (
                        <li
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                            onClick={onClick}
                            onKeyDown={onClick}
                            className={`mx-1 inline-block h-2 cursor-pointer rounded-full transition-all duration-300 ${isSelected ? 'w-5 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                        />
                    )}
                >
                    {sortedReviews.map((rev: Review, i) =>
                        <div className='flex w-full justify-center px-1 pb-12 md:px-16' key={`${rev.author_name}-${i}`}>
                            <RatingCard gvu={googleVerUser} ur={userReview} rev={rev} />
                        </div>
                    )}
                </Carousel>
            </div>
        </div>
    )
}




export default Reviews