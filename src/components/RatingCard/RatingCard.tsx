import React from 'react'
import { Review } from '../Reviews/Reviews'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const RatingCard = ({ rev }: { rev: Review }) => {
    const { author_name, author_url, profile_photo_url, rating, text }: Review = rev;
    console.log(profile_photo_url);
    return (
      
            <div className=" mx-2 my-4 max-w-md  bg-white rounded-md overflow-hidden shadow-lg">

                <div className="bg-teal-800/50 text-white p-4 flex justify-between align-middle">
                    <h2 className="text-2xl font-semibold">Review</h2>
                    <div>
                        {[...Array(rating)].map((_, index) => (
                            <FontAwesomeIcon
                                className='text-orange-300'
                                key={index}
                                icon={solidStar} />
                        ))
                        }
                    </div>

                </div>


                <div className="p-4">

                    <div className="flex items-center space-x-4">

                        <Image src={profile_photo_url} unoptimized alt="User Avatar" width={600}
                            height={400} className="w-12 h-12 rounded-full" />
                        <div>
                            <h3 className="text-lg font-semibold">{author_name}</h3>
                            <p className="text-gray-600">Verified User</p>
                        </div>
                    </div>


                    <p className="mt-4 text-gray-700">
                        {text}
                    </p>
                </div>
            </div>
        
    )
}

export default RatingCard