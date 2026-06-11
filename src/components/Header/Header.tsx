'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/design/logo-mark.png';
import styles from './Header.module.css';
import { useTranslations } from "next-intl";
import ReactCountryFlag from 'react-country-flag'
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useRouter, usePathname } from 'next/navigation';
import Icon from '@/components/Icon/Icon';

type countryType = { [key: string]: string }

const DEFAULT_COUNTRIES: countryType = { gb: 'GB', fr: 'FR', gr: 'GR' }


const Header = ({ locale }: { locale: string }) => {

  const [openBurger, setOpenBurger] = useState(false)
  const [countryToggle, setCountryToggle] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<any>(DEFAULT_COUNTRIES[locale === 'en' ? 'gb' : locale])
  const t = useTranslations('Header')
  const navItems: { key: string; children?: string[] }[] = [
    { key: 'responsibilities' },
    { key: 'advisory' },
    { key: 'communication', children: ['careers'] },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const burgerControls = useAnimation();

  const isActive = (key: string) =>
    pathname === `/${locale}/${key}` || pathname?.startsWith(`/${locale}/${key}/`);


  useEffect(() => {
    if (openBurger) {
      burgerControls.start("visible")

      document.body.classList.add('no-scroll');
    }
    else {
      burgerControls.start("hidden")

      document.body.classList.remove('no-scroll');
    }

  }, [openBurger, burgerControls]);



  const selectLocale = (loc: string) => {
    setCurrentLocale(DEFAULT_COUNTRIES[loc]);
    setCountryToggle(prev => !prev)
    router.push(`/${loc === 'gb' ? 'en' : loc}`)
  }

  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const itemListVariant = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  const langPillClass = 'inline-flex items-center gap-2 rounded-full border border-stone-200 bg-paper px-4 py-[7px] text-[13px] font-semibold text-ink-700 transition-colors duration-200 hover:border-stone-300 hover:bg-white'

  const LangDropdown = ({ flagSize }: { flagSize: string }) => (
    <div className='relative'>
      <button className={langPillClass} onClick={() => setCountryToggle(prev => !prev)}>
        <ReactCountryFlag
          countryCode={currentLocale === 'en' ? 'gb' : currentLocale}
          svg
          style={{
            width: flagSize,
            height: flagSize,
            borderRadius: '3px',
            objectFit: 'cover'
          }}
          title={t(currentLocale.toLocaleLowerCase())}
        />
        <span className='uppercase'>
          {currentLocale === 'FR' ? 'Fr' : currentLocale === 'GR' ? 'El' : 'En'}
        </span>
        <Icon name='chevron-down' className={`h-3 w-3 text-ink-500 transition-transform duration-200 ${countryToggle ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {countryToggle &&
          <>
            <div className='fixed inset-0 z-40' onClick={() => setCountryToggle(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className='absolute top-full right-0 z-50 mt-2 min-w-[9rem] origin-top-right rounded-lg border border-stone-200 bg-white py-1 shadow-lg'>
              <ul className='w-full'>{
                Object.keys(DEFAULT_COUNTRIES).filter(ct => ct.toLocaleLowerCase() !== currentLocale.toLocaleLowerCase()).map(loc => (
                  <li key={loc}>
                    <button className='flex w-full items-center gap-2 px-5 py-2 text-sm font-medium text-ink-700 hover:bg-paper transition-colors duration-150' onClick={() => selectLocale(loc)}>
                      <ReactCountryFlag
                        countryCode={loc}
                        svg
                        style={{
                          width: '1.25rem',
                          height: '1.25rem',
                          borderRadius: '3px',
                          objectFit: 'cover'
                        }}
                        title={t(loc)}
                      />
                      <span>{t(loc)}</span>
                    </button>
                  </li>
                ))
              }
              </ul>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </div>
  )

  return (
    <header className='sticky top-0 z-50 bg-paper border-b border-stone-200 shadow-header'>
      <nav className='relative z-20 mx-auto flex h-16 md:h-[78px] max-w-[1200px] items-center justify-between gap-3 md:gap-6 px-4 sm:px-6 lg:px-10'>
        {/* Logo + Business Name */}
        <Link locale={locale} href={'/' + locale} className='flex shrink-0 items-center gap-3'>
          <Image className='h-9 md:h-[42px] w-auto' placeholder='blur' src={logo} alt='Damouli & Associates logo' />
          <span className='hidden md:flex flex-col leading-none'>
            <span className='whitespace-nowrap font-display text-lg font-bold text-navy-900'>{t('firmName')}</span>
            <span className='mt-[5px] whitespace-nowrap text-[9.5px] font-semibold uppercase tracking-[0.26em] text-brass-600'>{t('firmType')}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <li key={locale + '/' + item.key} className='relative group'>
              <Link locale={locale} aria-current={isActive(item.key) ? 'page' : undefined}
                className={`relative inline-flex items-center gap-1 py-1.5 text-[14.5px] transition-colors duration-200 hover:text-navy-900
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-brass-500 after:transition-transform after:duration-300 after:ease-lift
                  ${isActive(item.key) ? 'font-semibold text-navy-900 after:scale-x-100' : 'font-medium text-ink-700 after:scale-x-0 hover:after:scale-x-100'}`}
                href={`/${locale}/${item.key}`}>
                {t(`${item.key}.title`)}
                {item.children && <Icon name='chevron-down' className='h-3 w-3 text-ink-500 transition-transform duration-200 group-hover:rotate-180' />}
              </Link>

              {item.children &&
                <div className='invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100'>
                  <ul className='min-w-[12rem] rounded-lg border border-stone-200 bg-white py-1 shadow-lg'>
                    {item.children.map((child) => (
                      <li key={child}>
                        <Link locale={locale} aria-current={isActive(child) ? 'page' : undefined}
                          className={`block px-5 py-2.5 text-sm transition-colors duration-150 hover:bg-paper ${isActive(child) ? 'font-semibold text-navy-900' : 'font-medium text-ink-700'}`}
                          href={`/${locale}/${child}`}>
                          {t(`${child}.title`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            </li>
          ))}
        </ul>

        {/* Desktop actions: language pill + CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <LangDropdown flagSize='1.1rem' />
          <Link locale={locale} href={`/${locale}/communication`}
            className='inline-flex items-center gap-2 rounded-lg bg-brass-500 px-5 py-3 text-[15px] font-semibold text-navy-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brass-600 hover:shadow-[0_10px_24px_-12px_rgba(176,141,91,0.8)]'>
            <Icon name='scale' className='h-[17px] w-[17px]' />
            {t('cta')}
          </Link>
        </div>

        {/* Mobile: language pill + burger */}
        <div className='md:hidden flex items-center gap-2'>
          <LangDropdown flagSize='20px' />
          <button
            type='button'
            aria-label='Toggle menu'
            aria-expanded={openBurger}
            onClick={() => setOpenBurger(prev => !prev)}
            className='relative -mr-2 p-2 text-navy-900 transition-colors duration-200 hover:text-brass-600'>
            <span className='relative block h-[18px] w-[26px]'>
              <span className={`${styles.menu_button_line} ${styles.top} ${openBurger ? styles.on_menu_top : ''}`}></span>
              <span className={`${styles.menu_button_line} ${styles.mid} ${openBurger ? styles.on_menu_mid : ''}`}></span>
              <span className={`${styles.menu_button_line} ${styles.botm} ${openBurger ? styles.on_menu_botm : ''}`}></span>
            </span>
          </button>
        </div>
      </nav>


      {/* Mobile slide-in menu */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 105, },

          visible: { opacity: 1, x: 0, zIndex: 100 }
        }}
        transition={{ duration: .65 }}
        initial="hidden"
        animate={burgerControls}
        className={`absolute md:hidden top-16 z-60 left-0 ${openBurger && 'w-screen gap-8'} h-screen bg-paper flex flex-col items-center justify-center`}>
        {openBurger &&
          <motion.ul
            className='flex flex-col items-center gap-10 font-medium'
            variants={listVariants}
            initial="closed"
            animate="opened"
            transition={{ duration: .55 }}>
            {
              navItems.map((item) =>
                <motion.li variants={itemListVariant} key={locale + '/' + item.key} className='flex flex-col items-center gap-5'>
                  <Link locale={locale} aria-current={isActive(item.key) ? 'page' : undefined} onClick={() => setOpenBurger(false)}
                    className={`font-display text-3xl ${isActive(item.key) ? 'font-semibold text-navy-900' : 'text-ink-700'} hover:text-brass-600 transition-colors duration-200`}
                    href={`/${locale}/${item.key}`}>{t(`${item.key}.title`)}</Link>
                  {item.children && item.children.map((child) =>
                    <Link key={child} locale={locale} aria-current={isActive(child) ? 'page' : undefined} onClick={() => setOpenBurger(false)}
                      className={`font-display text-xl ${isActive(child) ? 'font-semibold text-navy-900' : 'text-ink-500'} hover:text-brass-600 transition-colors duration-200`}
                      href={`/${locale}/${child}`}>{t(`${child}.title`)}</Link>
                  )}
                </motion.li>
              )
            }
            <motion.li variants={itemListVariant}>
              <Link locale={locale} href={`/${locale}/communication`} onClick={() => setOpenBurger(false)}
                className='inline-flex items-center gap-2 rounded-lg bg-brass-500 px-6 py-3.5 text-base font-semibold text-navy-950 shadow-sm'>
                <Icon name='scale' className='h-[17px] w-[17px]' />
                {t('cta')}
              </Link>
            </motion.li>
          </motion.ul>}
      </motion.div>
    </header>

  )
}

export default Header
