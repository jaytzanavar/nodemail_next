import React from 'react'
import Cards from '../Cards/Cards'
import { useTranslations } from 'next-intl';
import { faSuitcase as suitCase } from '@fortawesome/free-solid-svg-icons';
import { faUser as userR } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella as umbrellaI } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';


const Subcontent = () => {
    const t = useTranslations('SubContent');

    return (
        <div className='min-h-[90vh] pb-[3rem] bg-slate-50 w-screen relative z-20 '>
            <div className='flex md:flex-row flex-col md:p-0 p-[5%] justify-center gap-5 min-h-[350px] relative w-screen  '>
                <div className='md:absolute relative top-[-35%]'>
                    <Cards icon={suitCase} title={t('card1.title')} text={t('card1.text')}></Cards></div>
                <div className='md:absolute relative md:left-[10%] top-[-35%]'>
                    <Cards icon={userR} title={t('card2.title')} text={t('card2.text')}></Cards></div>
                <div className='md:absolute  relative md:right-[10%] top-[-35%]'>
                    <Cards icon={umbrellaI} title={t('card3.title')} text={t('card3.text')}></Cards></div>
            </div>
            <div className='flex md:flex-row flex-col justify-center px-auto relative'>

                <div className='md:w-[35%] w-full'>
                    <div id="divider" className="my-12 mb-3 h-0.5 ml-3 w-[50%] pr-10 border-t-0 bg-black opacity-100 dark:opacity-50"></div>
                    <h2 className='font-extrabold text-6xl px-[30%] text-black/90'>{t('title')} <span className='text-gray-500/80'> {t('title_strong')}</span></h2></div>
                <div className='md:w-[65%] w-full'>
                    <div className='flex flex-col justify-center items-start p-10 px-[15%]'>
                        <h4 className='text-gray-500 font-montserrat text-md font-light pt-[15%]  leading-[3rem]  tracking-tighter'>{t('description')}</h4>

                        <Button type='button' disabled={false} label={t('read_more')} size='lg' />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Subcontent