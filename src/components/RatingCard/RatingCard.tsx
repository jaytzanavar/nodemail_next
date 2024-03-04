import React from 'react'
import { Review } from '../Reviews/Reviews'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const RatingCard = ({ rev }: { rev: Review }) => {
    const { author_name, author_url, profile_photo_url, rating, text }: Review = rev;

    return (

        <div className="  bg-white/10 min-h-[30vh] rounded-md overflow-hidden shadow-lg">

            <div className="p-4 flex flex-col ">
                <div className="flex flex-col items-center space-x-4">
                    <div className=' bg-black/15  border-white/60 border-solid shadow-lg  p-2 rounded-full w-[105px] h-[105px]'>
                        <Image src={profile_photo_url} unoptimized alt="User Avatar"
                            width={75} height={75} className="w-auto h-auto rounded-full" />
                    </div>

                    <div>
                        <h3 className="text-lg text-white/80 font-semibold">{author_name}</h3>

                        <p className="text-white/60">
                            <a className='hover:text-white/80' href={author_url}>
                                Google Verified User
                            </a></p>
                    </div>
                </div>


                <p className="my-6 px-[20%] text-white/60">
                    {text}
                    <div className="mt-2">
                        User Rating :
                        {[...Array(rating)].map((_, index) => (
                            <FontAwesomeIcon
                                className='text-[#faec1b] drop-shadow-xl '
                                key={index}
                                icon={solidStar} />
                        ))
                        }
                    </div>
                </p>
            </div>
        </div>

    )
}

export default RatingCard