import React from 'react'
import { useTranslations } from 'next-intl';
import bg_img from '../../../public/design/img-columns.jpg'
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';


export default function Content() {

    const t = useTranslations('Content');

    // "Reputation. Respect. Result." → one word per line, last one accented
    const promptLines = t('prompt').split('.').map(p => p.trim()).filter(Boolean);

    const stats = [
        { n: t('stats.s1_n'), l: t('stats.s1_l') },
        { n: t('stats.s2_n'), l: t('stats.s2_l') },
        { n: t('stats.s3_n'), l: t('stats.s3_l') },
    ]

    return (
        <div className='relative isolate w-full overflow-hidden bg-navy-950'>
            <Image quality={60} sizes="100vw" placeholder='blur' priority fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50" alt={t('alt_img')} src={bg_img} fill />

            {/* Scrim: darkest on the left where the text sits */}
            <div className='absolute inset-0 -z-10 bg-hero-scrim'></div>

            <div className='mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-20 md:py-[110px]'>
                <div className='max-w-[760px]'>
                    <div className='mb-6 flex items-center gap-3 text-[12.5px] font-bold uppercase tracking-eyebrow text-brass-400'>
                        <span className='h-0.5 w-[34px] bg-brass-500'></span>
                        {t('eyebrow')}
                    </div>

                    <h1 className='font-display text-[42px] sm:text-[56px] lg:text-[84px] font-extrabold leading-[1.02] tracking-[-0.025em] text-[#FBF7EF]'>
                        {promptLines.map((line, i) => (
                            <span key={line} className={`block ${i === promptLines.length - 1 ? 'italic text-brass-400' : ''}`}>{line}.</span>
                        ))}
                    </h1>

                    <p className='mt-6 max-w-[560px] text-lg sm:text-xl leading-relaxed text-[#EAF1F5]/80'>
                        {t('hero')}
                    </p>

                    <div className='mt-9 flex flex-wrap gap-3.5'>
                        <a href='#contact'
                            className='inline-flex items-center gap-2 rounded-lg bg-brass-500 px-7 py-4 text-base font-semibold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brass-600 hover:shadow-[0_10px_24px_-12px_rgba(176,141,91,0.8)]'>
                            <Icon name='scale' className='h-[17px] w-[17px]' />
                            {t('button-c')}
                        </a>
                        <a href='#practice-areas'
                            className='inline-flex items-center gap-2 rounded-lg border border-white/35 px-7 py-4 text-base font-semibold text-[#EAF1F5] transition-colors duration-200 hover:border-white/60 hover:bg-white/10'>
                            {t('button-areas')}
                            <Icon name='arrow-down' className='h-[17px] w-[17px]' />
                        </a>
                    </div>

                    <div className='mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-8'>
                        {stats.map(stat => (
                            <div key={stat.l}>
                                <div className='font-display text-[32px] font-bold leading-none text-brass-100'>{stat.n}</div>
                                <div className='mt-2 text-[12.5px] tracking-wide text-[#EAF1F5]/60'>{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
