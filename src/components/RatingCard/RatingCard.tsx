import React from 'react'
import { Review } from '../Reviews/Reviews'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const RatingCard = ({ rev, gvu, ur }: { gvu: string, ur: string, rev: Review }) => {
    const { author_name, author_url, profile_photo_url, rating, text }: Review = rev;

    return (
        <div className="flex w-full flex-col rounded-lg border border-stone-100 bg-white px-6 py-10 text-left shadow-md sm:px-12">

            {/* User header */}
            <div className="flex w-full items-center justify-between gap-3.5">
                <div className="flex min-w-0 items-center gap-3.5">
                    <Image referrerPolicy="no-referrer" src={profile_photo_url} unoptimized alt={author_name}
                        width={52} height={52} className="!h-[52px] !w-[52px] aspect-square flex-shrink-0 rounded-full object-cover ring-2 ring-brass-200 ring-offset-2 ring-offset-white" />

                    <div className="min-w-0">
                        <div className="truncate text-base font-bold text-navy-900">{author_name}</div>
                        <a className="mt-0.5 inline-block truncate text-[10px] font-medium uppercase tracking-wider text-ink-400 transition hover:text-brass-600"
                            href={author_url} target="_blank" rel="noopener noreferrer">
                            {gvu}
                        </a>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-1" role="img" aria-label={`${ur}: ${rating}/5`}>
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={solidStar}
                            className={`text-sm ${index < rating ? 'text-brass-500' : 'text-stone-300'}`} />
                    ))}
                </div>
            </div>

            {/* Review */}
            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" className="mt-7 text-2xl text-brass-300" />

            <p className="mt-3 line-clamp-6 break-words font-display text-lg italic leading-relaxed text-ink-900 sm:text-xl">
                &ldquo;{text}&rdquo;
            </p>
        </div>
    )
}

export default RatingCard
