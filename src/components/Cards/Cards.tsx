import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const Cards = ({ icon, title, text, }: { icon: IconProp, title: string, text: string }) => {
    return (
        <div className='w-[350px] h-[350px] flex flex-col items-center  px-[3%] shadow-2xl rounded-md py-[5%] bg-[#1a3230] text-white'>
            <div>
                <FontAwesomeIcon className='text-white text-5xl'
                    icon={icon} />
            </div>
            <div className='text-2xl text-center'>{title}</div>
            <div className='text-sm text-center font-light pt-[15%]  leading-[2rem]'>{text}</div>
        </div >
    )
}

export default Cards