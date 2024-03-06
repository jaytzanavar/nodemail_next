import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const Cards = ({ icon, title, text, }: { icon: IconProp, title: string, text: string }) => {
    return (
        <div className=' flex flex-col gap-4 items-center  md:max-w-[30rem] md:max-h-[30rem] p-[3rem]  shadow-2xl rounded-md  bg-[#1a3230] text-white'>
            <div className='w-[2.5rem] h-[2.3rem]  '>
                <FontAwesomeIcon className='text-white md:text-4xl '
                    icon={icon} />
            </div>
            <div className='text-2xl text-center'>{title}</div>
            <div className='text-md text-center font-light  leading-[2rem]'>{text}</div>
        </div >
    )
}

export default Cards