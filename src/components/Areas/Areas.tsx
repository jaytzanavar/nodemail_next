import React from 'react'
import Icon, { IconName } from '@/components/Icon/Icon';

type AreaCard = { title: string, text: string }

interface AreasProps {
    title: string
    card1: AreaCard
    card2: AreaCard
    card3: AreaCard
    card4: AreaCard
    card5: AreaCard
    card6: AreaCard
    cardStyle?: string
    // Optional intro column (homepage). When omitted the bento spans full width.
    eyebrow?: string
    intro?: string
    ctaLabel?: string
    ctaHref?: string
    learnMore?: string
}

const CARD_ICONS: IconName[] = ['briefcase', 'gavel', 'shield', 'building', 'file', 'users']

const Areas = ({ title, card1, card2, card3, card4, card5, card6, eyebrow, intro, ctaLabel, ctaHref = '#contact', learnMore }: AreasProps) => {

    const cards = [card1, card2, card3, card4, card5, card6]
    const hasIntro = Boolean(intro)

    const areaCard = (card: AreaCard, idx: number) => {
        const feature = idx === 0
        return (
            <a key={card.title} href={ctaHref}
                className={`group relative flex overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-lift hover:-translate-y-1.5
                    before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-brass-rule before:transition-transform before:duration-500 before:ease-lift hover:before:scale-x-100
                    ${feature
                        ? 'sm:col-span-2 flex-col sm:flex-row items-start sm:items-center gap-5 border-transparent bg-navy-900 hover:shadow-card'
                        : 'min-h-[196px] flex-col border-stone-100 bg-white hover:border-brass-200 hover:shadow-card'}`}>
                <span className={`inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl transition-all duration-300
                    ${feature
                        ? 'bg-brass-500/15 text-brass-400 group-hover:bg-brass-500 group-hover:text-navy-950'
                        : 'bg-navy-50 text-navy-800 group-hover:bg-navy-800 group-hover:text-brass-300 group-hover:-rotate-6 group-hover:scale-105'}`}>
                    <Icon name={CARD_ICONS[idx]} className='h-6 w-6' />
                </span>
                <span className={feature ? 'flex-1' : 'mt-auto pt-4'}>
                    <h3 className={`font-display font-bold ${feature ? 'text-2xl text-[#FBF7EF]' : 'text-[19px] text-ink-900'}`}>{card.title}</h3>
                    <p className={`mt-2 text-[14.5px] leading-relaxed ${feature ? 'text-[#EAF1F5]/80' : 'text-ink-700'}`}>{card.text}</p>
                    {learnMore &&
                        <span className={`mt-4 inline-flex items-center gap-[7px] text-[13px] font-semibold ${feature ? 'text-brass-400' : 'text-brass-700'}`}>
                            {learnMore}
                            <Icon name='arrow-right' className='h-[15px] w-[15px] transition-transform duration-300 group-hover:translate-x-1' />
                        </span>}
                </span>
            </a>
        )
    }

    return (
        <div className='w-full border-y border-stone-100 bg-white px-4 sm:px-6 lg:px-10 py-16 lg:py-24'>
            <div className={`mx-auto max-w-[1200px] ${hasIntro ? 'grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16' : ''}`}>
                <div className={hasIntro ? '' : 'mx-auto mb-12 max-w-2xl text-center'}>
                    {eyebrow &&
                        <div className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brass-700 ${hasIntro ? '' : 'justify-center'}`}>
                            <span className='h-0.5 w-[30px] bg-brass-500'></span>
                            {eyebrow}
                        </div>}
                    <h2 className='font-display text-[34px] lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-ink-900'>{title}</h2>
                    {intro && <p className='mt-5 max-w-[420px] text-[16.5px] leading-relaxed text-ink-700'>{intro}</p>}
                    {ctaLabel &&
                        <a href={ctaHref}
                            className='mt-7 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-5 py-3 text-[15px] font-semibold text-brass-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900'>
                            {ctaLabel}
                            <Icon name='arrow-right' className='h-[17px] w-[17px]' />
                        </a>}
                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    {cards.map((card, idx) => areaCard(card, idx))}
                </div>
            </div>
        </div>
    )
}

export default Areas;
