"use client";
import RatingCard from '../RatingCard/RatingCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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

const arrowClasses = 'hidden md:flex absolute top-1/2 z-10 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-300 bg-white text-navy-800 shadow-sm transition hover:border-brass-300 hover:text-brass-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass-500'

const Reviews = ({ title, googleVerUser, userReview, reviewsA }: { title: string, googleVerUser: string, userReview: string, reviewsA: G_Review }) => {

    const { reviews } = reviewsA
    const sortedReviews = reviews ? [...reviews].sort((a, b) => a.author_name.localeCompare(b.author_name)) : []

    return (
        <div className='w-full bg-paper-2 px-4 py-20 md:py-16'>
            <div className='mx-auto flex max-w-3xl flex-col items-center'>
                <div aria-hidden="true" className="mb-5 h-0.5 w-14 bg-brass-500"></div>
                <h2 className='text-center font-display text-3xl font-bold text-navy-900 sm:text-4xl md:text-5xl'>
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
                        <button type="button" aria-label={label} onClick={onClick} className={`${arrowClasses} left-0`}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    )}
                    renderArrowNext={(onClick, hasNext, label) => hasNext && (
                        <button type="button" aria-label={label} onClick={onClick} className={`${arrowClasses} right-0`}>
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
                            className={`mx-1 inline-block h-2 cursor-pointer rounded-full transition-all duration-300 ${isSelected ? 'w-6 bg-brass-500' : 'w-2 bg-stone-300 hover:bg-stone-400'}`}
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
