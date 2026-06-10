import React from 'react'
import { Review } from '../Reviews/Reviews'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const RatingCard = ({ rev, gvu, ur }: { gvu: string, ur: string, rev: Review }) => {
    const { author_name, author_url, profile_photo_url, rating, text }: Review = rev;

    return (
        <div className="flex w-full max-w-xl flex-col items-center rounded-lg border border-stone-100 bg-white px-6 py-10 text-center shadow-md sm:px-12">

            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" className="text-3xl text-brass-300" />

            <p className="mt-5 line-clamp-6 font-display text-lg italic leading-relaxed text-ink-900 sm:text-xl">
                &ldquo;{text}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-1.5" role="img" aria-label={`${ur}: ${rating}/5`}>
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={solidStar}
                        className={`text-base ${index < rating ? 'text-brass-500' : 'text-stone-300'}`} />
                ))}
            </div>

            <div className="mt-6 flex items-center gap-3.5">
                <Image referrerPolicy="no-referrer" src={profile_photo_url} unoptimized alt={author_name}
                    width={60} height={60} className="aspect-square h-[60px] w-[60px] flex-shrink-0 rounded-full object-cover ring-2 ring-brass-200 ring-offset-2 ring-offset-white" />

                <div className="text-left">
                    <div className="text-base font-bold text-navy-900">{author_name}</div>
                    <a className="mt-0.5 inline-block text-xs font-semibold uppercase tracking-eyebrow text-brass-700 transition hover:text-brass-600"
                        href={author_url} target="_blank" rel="noopener noreferrer">
                        {gvu}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RatingCard
