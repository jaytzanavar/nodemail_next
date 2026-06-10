import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.jpeg';
import { useTranslations } from 'next-intl';
import Map from '@/components/Map/Map';

const MAPS_URL = 'https://www.google.com/maps/place/%CE%94%CE%B9%CE%BA%CE%B7%CE%B3%CE%BF%CF%81%CE%B9%CE%BA%CE%AE+%CE%95%CF%84%CE%B1%CE%B9%CF%81%CE%B5%CE%AF%CE%B1+%CE%94%CE%B1%CE%BC%CE%BF%CF%85%CE%BB%CE%AE+%CE%A3%CF%84%CE%B5%CF%86%CE%B1%CE%BD%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85+%CE%91%CE%BD%CF%84%CF%89%CE%BD%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85+%CE%BA%CE%B1%CE%B9+%CE%A3%CF%85%CE%BD%CE%B5%CF%81%CE%B3%CE%AC%CF%84%CE%B5%CF%82/@37.9922869,23.7598793,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1a2a9e8e91a5b:0xd3567c995783841e!8m2!3d37.9922827!4d23.7624542!16s%2Fg%2F11bzsgp_ht?entry=ttu'

const Footer = () => {
  const t = useTranslations('Footer')

  const contactLines = [
    {
      key: 'email',
      label: t('email'),
      icon: (
        <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
        </svg>
      ),
      value: <a className='hover:text-white transition-colors duration-200' href='mailto:info@damoulilawfirm.com'>info@damoulilawfirm.com</a>
    },
    {
      key: 'hours',
      label: t('wh'),
      icon: (
        <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      ),
      value: <span>{t('days')} · 09:00 – 19:00</span>
    },
    {
      key: 'address',
      label: t('address'),
      icon: (
        <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
        </svg>
      ),
      value: <a className='hover:text-white transition-colors duration-200' href={MAPS_URL} target='_blank' rel='noopener noreferrer'>{t('addr_name')}</a>
    }
  ]

  return (
    <footer className='bg-navy-950 text-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>

        {/* Brand */}
        <div className='flex flex-col gap-5 items-center md:items-start text-center md:text-left'>
          <div className='flex items-center gap-3'>
            <Image alt='Damouli law office logo' placeholder='blur' className='h-12 w-12 rounded-full object-cover ring-1 ring-brass-500/40' src={logo} />
            <span className='font-display text-base font-semibold leading-snug max-w-[16rem]'>{t('brand')}</span>
          </div>
          <p className='text-sm text-white/60 leading-relaxed max-w-xs'>{t('text')}</p>
        </div>

        {/* Contact — one distinct line per item */}
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-xs font-semibold uppercase tracking-eyebrow text-brass-300 mb-2'>{t('contact')}</h3>
          <ul className='w-full max-w-xs divide-y divide-white/10'>
            {contactLines.map(line => (
              <li key={line.key} className='flex items-center gap-4 py-4'>
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brass-300 ring-1 ring-white/10'>
                  {line.icon}
                </span>
                <span className='flex flex-col gap-0.5 text-left'>
                  <span className='text-[11px] font-medium uppercase tracking-wider text-white/40'>{line.label}</span>
                  <span className='text-sm text-white/75'>{line.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className='md:col-span-2 lg:col-span-1'>
          <div className='isolate h-72 sm:h-80 lg:h-full lg:min-h-[20rem] w-full overflow-hidden rounded-xl ring-1 ring-brass-500/20'>
            <Map />
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/10'>
        <p className='max-w-7xl mx-auto px-6 lg:px-8 py-5 text-center text-xs text-white/40'>
          © {new Date().getFullYear()} {t('brand')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
