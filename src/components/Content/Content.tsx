import React from 'react'
import { useTranslations } from 'next-intl';
import bg_img from '../../../public/lawWallPaper.webp'
import Image from 'next/image';
import dynamic from 'next/dynamic';



export default function Content() {

    const DynamicButton = dynamic(() => import('../../components/Button/Button'), {
        loading: () => <p>Loading...</p>,
    })


    const t = useTranslations('Content');

    // "Reputation. Respect. Result." → one word per line, last one accented
    const promptLines = t('prompt').split('.').map(p => p.trim()).filter(Boolean);

    return (
        // 5rem ≈ sticky header height, so the hero (incl. scroll cue) fits the first viewport
        <div className='relative isolate w-full min-h-[calc(100svh-5rem)] flex items-center overflow-hidden'>
            <Image quality={90} sizes="100vw" placeholder='blur' className="absolute inset-0 -z-10" alt={t('alt_img')} src={bg_img} fill style={{ objectFit: "cover" }} />

            {/* Scrim: darkest on the right where the text sits over the sky */}
            <div className='absolute inset-0 -z-10 bg-gradient-to-l from-black/80 via-black/50 to-black/25'></div>
            <div className='absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-black/60 to-transparent'></div>

            {/* Content — right half of a centered container, over the open sky */}
            <div className='w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-center md:justify-end'>
                <div className='w-full md:w-1/2 lg:w-[45%] flex flex-col gap-8 py-16 md:py-24 text-center md:text-left'>
                    <div className='flex items-center gap-4 justify-center md:justify-start'>
                        <span className='h-px w-12 bg-white/40'></span>
                        <span className='text-xs sm:text-sm font-medium uppercase tracking-[0.35em] text-white/70'>{t('eyebrow')}</span>
                    </div>

                    <h1 className='font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white space-y-3'>
                        {promptLines.map((line) => (
                            <span key={line} className='block'>{line}.</span>
                        ))}
                    </h1>

                    <p className='text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto md:mx-0'>
                        {t('hero')}
                    </p>

                    <div>
                        <DynamicButton disabled={false} type="button" link='communication' label={t('button-c')} size={'lg'} />
                    </div>
                </div>
            </div>

            {/* Scroll cue down to the about sector */}
            <a href='#about' aria-label={t('scroll')} className='absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200'>
                <svg className='h-8 w-8 animate-bounce' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
            </a>
        </div>
    )
}
