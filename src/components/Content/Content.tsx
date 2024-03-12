import React from 'react'
import { useTranslations } from 'next-intl';
import bg_img from '../../../public/lawWallPaper.jpg'
import Image from 'next/image';


export default function Content() {
    const t = useTranslations('Content');
    return (
        <div className='min-h-[90vh] w-screen flex relative z-10'>
            <Image  quality={90} className=" z-0 relative" alt="Damouli law firm background image in content" src={bg_img} fill objectFit="cover" objectPosition='cover' />
            <div className='md:w-[50%] md:block hidden relative z-10'></div>
            <div className='md:w-[50%] w-full bg-black/50 flex flex-col gap-3 justify-center content-center items-center relative z-10'>
                <h1 className='font-extrabold text-6xl md:text-left text-center md:px-[30%] text-white/90'>
                    {t('prompt')}</h1>
                <h4 className='mb-6 text-lg font-normal text-white/70 lg:text-xl sm:px-16 xl:px-48 px-10 dark:text-gray-400'>
                    {t('hero')}</h4>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-800 via-cyan-800 to-teal-900 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-teal-500 dark:focus:ring-teal-800 shadow-lg shadow-teal-700/40 hover:shadow-teal-500/40 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    {t('button-c')}</button>
            </div>

        </div>
    )
}

