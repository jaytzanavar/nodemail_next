import React from 'react'
import Cards from '../Cards/Cards'
import { useTranslations } from 'next-intl';
import { faSuitcase as suitCase } from '@fortawesome/free-solid-svg-icons';
import { faUser as userR } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella as umbrellaI } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';


const Subcontent = () => {
    const t = useTranslations('SubContent');

    const DynamicButton = dynamic(() => import('../../components/Button/Button'), {
        loading: () => <p>Loading...</p>,
    })

    const DynamicCards = dynamic(() => import('../../components/Cards/Cards'), {
        loading: () => <p>Loading...</p>,
    })

    return (
        <div className='bg-gradient-to-b from-white via-slate-50 to-white w-full relative z-20 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-x-hidden'>
            {/* Cards Section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-6 max-w-6xl mx-auto mb-20 sm:mb-24'>
                <div>
                    <DynamicCards cardColor={'green'} icon={suitCase} title={t('card1.title')} text={t('card1.text')} />
                </div>
                <div>
                    <DynamicCards cardColor={'green'} icon={userR} title={t('card2.title')} text={t('card2.text')} />
                </div>
                <div>
                    <DynamicCards cardColor={'green'} icon={umbrellaI} title={t('card3.title')} text={t('card3.text')} />
                </div>
            </div>

            {/* Content Section */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center max-w-6xl mx-auto'>
                <div className='lg:w-1/2 flex flex-col justify-center'>
                    <div id="divider" className="mb-6 h-1 w-16 bg-gradient-to-r from-cyan-700 to-teal-600 rounded-full"></div>
                    <h2 className='font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4'>{t('title')} <span className='text-gray-500'>{t('title_strong')}</span></h2>
                </div>
                <div className='lg:w-1/2 flex flex-col justify-center'>
                    <p className='text-gray-600 text-base sm:text-lg leading-relaxed mb-6'>{t('description')}</p>
                    <DynamicButton link={'advisory'} type='button' disabled={false} label={t('read_more')} size='lg' />
                </div>
            </div>
        </div>
    )
}

export default Subcontent