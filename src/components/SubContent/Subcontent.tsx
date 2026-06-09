import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import library_img from '../../../public/design/img-library.jpg';
import Icon, { IconName } from '@/components/Icon/Icon';


const Subcontent = () => {
    const t = useTranslations('SubContent');

    const cards: Array<{ icon: IconName, title: string, text: string }> = [
        { icon: 'shield', title: t('card1.title'), text: t('card1.text') },
        { icon: 'scale', title: t('card2.title'), text: t('card2.text') },
        { icon: 'landmark', title: t('card3.title'), text: t('card3.text') },
    ]

    const pills = [t('pill1'), t('pill2'), t('pill3')]

    return (
        <div className='w-full bg-paper px-4 sm:px-6 lg:px-10 py-16 lg:py-24'>
            <div className='mx-auto max-w-[1200px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16'>
                    <div className='relative'>
                        <Image placeholder='blur' src={library_img} alt={t('alt_img')} sizes='(max-width: 1024px) 100vw, 50vw'
                            className='aspect-[4/3] w-full rounded-2xl object-cover shadow-card' />
                        <div className='absolute -bottom-4 right-3 lg:-right-4 rounded-xl bg-navy-800 px-6 py-5 text-brass-100 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)]'>
                            <div className='font-display text-[32px] font-bold leading-none'>{t('badge_n')}</div>
                            <div className='mt-2 text-[11.5px] uppercase tracking-[0.14em] text-brass-400'>{t('badge_l')}</div>
                        </div>
                    </div>
                    <div>
                        <div className='mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brass-700'>
                            <span className='h-0.5 w-[30px] bg-brass-500'></span>
                            {t('eyebrow')}
                        </div>
                        <h2 className='font-display text-[34px] lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-ink-900'>{t('title')}</h2>
                        <p className='mt-5 text-[17px] leading-relaxed text-ink-700'>{t('lead')}</p>
                        <div className='mt-6 flex flex-wrap gap-2.5'>
                            {pills.map(pill => (
                                <span key={pill} className='inline-flex items-center rounded-full border border-navy-200 px-3.5 py-[7px] text-[13px] font-semibold text-navy-800'>{pill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {cards.map(card => (
                        <div key={card.title} className='rounded-2xl border border-stone-100 bg-white p-7 transition-all duration-300 ease-lift hover:-translate-y-1.5 hover:shadow-card'>
                            <span className='mb-4 inline-flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-navy-50 text-navy-800'>
                                <Icon name={card.icon} className='h-6 w-6' />
                            </span>
                            <h3 className='font-display text-[21px] font-bold text-ink-900'>{card.title}</h3>
                            <p className='mt-2.5 text-[15px] leading-relaxed text-ink-700'>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Subcontent
