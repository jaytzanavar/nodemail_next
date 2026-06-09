import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const Cards = ({ icon, title, text, cardColor }: { icon: IconProp, title: string, text: string, cardColor: string }) => {
    return (
        <div className={`flex flex-col gap-3 items-center w-full h-full p-6 rounded-xl transition-all duration-300 border ${
            cardColor !== 'white'
                ? 'bg-gradient-to-br from-[#1a3230] to-[#0f2220] text-white border-[#2a4240] shadow-lg hover:shadow-2xl hover:-translate-y-1'
                : 'bg-white text-gray-900 border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1'
        }`}>
            {/* Icon Container */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-300 flex-shrink-0 text-sm ${
                cardColor !== 'white'
                    ? 'bg-white/10 text-white/70'
                    : 'bg-gray-100 text-gray-600'
            }`}>
                <FontAwesomeIcon icon={icon} />
            </div>

            {/* Content */}
            <h3 className='text-base font-semibold text-center leading-snug'>{title}</h3>
            <p className='text-sm text-center font-normal leading-relaxed opacity-85'>{text}</p>
        </div>
    )
}

export default Cards