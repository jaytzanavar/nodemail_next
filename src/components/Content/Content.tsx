import React from 'react'
import { useTranslations } from 'next-intl';
import bg_img from '../../../public/lawWallPaper.webp'
import Image from 'next/image';
import dynamic from 'next/dynamic';



export default function Content(props: any) {

    const DynamicButton = dynamic(() => import('../../components/Button/Button'), {
        loading: () => <p>Loading...</p>,
    })


    const t = useTranslations('Content');
    return (
        <div className='lg:h-[90vh] md:h-[165vh] min-h-[90vh] w-screen flex relative z-10'>
            <Image quality={90} sizes="100vw" placeholder='blur' className=" z-0 relative" alt={t('alt_img')} src={bg_img} fill style={{ objectFit: "cover" }} />
            <div className='md:w-[50%] md:block hidden relative z-10'></div>
            <div className='md:w-[50%] w-full bg-black/50 flex flex-col gap-3 justify-center content-center items-center relative z-10'>
                <h1 className='font-extrabold md:text-6xl text-xl md:text-left text-center md:px-[3rem] text-white/90'>
                    {t('prompt')}</h1>
                <h4 className='mb-6 text-lg font-normal text-white/70 lg:text-xl sm:px-16 xl:px-48 px-10 dark:text-gray-400'>
                    {t('hero')}</h4>
                <DynamicButton disabled={false} type="button" link='communication' label={t('button-c')} size={'lg'} />
            </div>

        </div>
    )
}

