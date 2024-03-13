import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const Cards = ({ icon, title, text, cardColor }: { icon: IconProp, title: string, text: string, cardColor: string }) => {
    return (
        <div className={` flex flex-col gap-4 items-center  min-h-[20rem]  lg:md:max-w-[25rem] max-h-[20rem]  p-[3rem] shadow-2xl rounded-md ${cardColor !== 'white' ? 'bg-[#1a3230] text-white' : 'bg-white text-black/80'}   `}>
            <div className='w-[1.8rem] h-[2rem] ' >
                <FontAwesomeIcon size='2xl' icon={icon} />
            </div>
            <h2 className='text-3xl text-center'>{title}</h2>
            <div className='text-md text-center font-light  leading-[1.5rem]'>{text}</div>
        </div >
    )
}

export default Cards