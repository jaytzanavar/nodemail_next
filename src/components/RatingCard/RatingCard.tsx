import React from 'react'
import { Review } from '../Reviews/Reviews'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const RatingCard = ({ rev, gvu, ur }: { gvu: string, ur: string, rev: Review }) => {
    const { author_name, author_url, profile_photo_url, rating, text }: Review = rev;

    return (

        <div className="bg-black/15 min-h-[30vh] min-w-[100%] rounded-md overflow-hidden shadow-lg">

            <div className="p-4 flex flex-col ">
                <div className="flex flex-col items-center space-x-4">
                    <div className=' bg-black/35  border-white/90 border-solid shadow-lg  p-2 rounded-full w-[105px] h-[105px]'>
                        <Image  referrerPolicy="no-referrer" src={profile_photo_url} unoptimized alt={author_name}
                            width={75} height={75} className="w-auto h-auto rounded-full" />
                    </div>

                    <div>
                        <h3 className="text-lg text-white/90 font-semibold">{author_name}</h3>

                        <p className="text-white/80">
                            <a className='hover:text-white/90' href={author_url}>
                                {gvu}
                            </a></p>
                    </div>
                </div>


                <div className="my-6 md:px-[20%] text-white/90">
                    <p>{text}</p>
                    <div className="mt-2 text-white/70">
                        {ur} :
                        {[...Array(rating)].map((_, index) => (
                            <FontAwesomeIcon
                                className='text-[#faec1b] drop-shadow-xl '
                                key={index}
                                icon={solidStar} />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RatingCard