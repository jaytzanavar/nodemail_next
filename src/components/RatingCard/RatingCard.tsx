import React from 'react'
import { Review } from '../Reviews/Reviews'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const RatingCard = ({ rev, gvu, ur }: { gvu: string, ur: string, rev: Review }) => {
    const { author_name, author_url, profile_photo_url, rating, text }: Review = rev;

    return (
        <div className="flex w-full max-w-xl flex-col items-center rounded-2xl bg-white/10 px-6 py-8 text-center shadow-xl ring-1 ring-white/15 backdrop-blur-sm sm:px-10">

            <Image referrerPolicy="no-referrer" src={profile_photo_url} unoptimized alt={author_name}
                width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-2 ring-white/40" />

            <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">{author_name}</h3>

            <a className="text-xs text-white/60 transition hover:text-white sm:text-sm" href={author_url} target="_blank" rel="noopener noreferrer">
                {gvu}
            </a>

            <div className="mt-3 flex items-center gap-1" role="img" aria-label={`${ur}: ${rating}/5`}>
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={solidStar}
                        className={`text-sm ${index < rating ? 'text-amber-400' : 'text-white/25'}`} />
                ))}
            </div>

            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" className="mt-6 text-xl text-white/25" />

            <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-white/85 sm:text-base">
                {text}
            </p>
        </div>
    )
}

export default RatingCard