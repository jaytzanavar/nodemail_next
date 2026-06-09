import React from 'react'
import { useTranslations } from 'next-intl'
import Icon from '@/components/Icon/Icon'
import { FIRM_EMAIL, FIRM_PHONE, FIRM_PHONE_HREF, FIRM_MAPS_URL } from '@/lib/firm'

const UtilityBar = () => {
    const t = useTranslations('UtilityBar')

    return (
        <div className='hidden md:block bg-navy-950 text-[#EAF1F5]/70 text-[13px]'>
            <div className='max-w-[1200px] mx-auto px-10 h-11 flex items-center justify-between gap-5'>
                <div className='flex items-center gap-6'>
                    <a className='inline-flex items-center gap-[7px] hover:text-brass-300 transition-colors duration-200' href={`mailto:${FIRM_EMAIL}`}>
                        <Icon name='mail' className='w-3.5 h-3.5' />{FIRM_EMAIL}
                    </a>
                    <a className='inline-flex items-center gap-[7px] hover:text-brass-300 transition-colors duration-200' href={FIRM_MAPS_URL} target='_blank' rel='noopener noreferrer'>
                        <Icon name='pin' className='w-3.5 h-3.5' />{t('address')}
                    </a>
                </div>
                <a className='inline-flex items-center gap-[7px] text-brass-300 font-semibold tracking-wide hover:text-brass-200 transition-colors duration-200' href={FIRM_PHONE_HREF}>
                    <Icon name='phone' className='w-3.5 h-3.5' />{FIRM_PHONE}
                </a>
            </div>
        </div>
    )
}

export default UtilityBar
