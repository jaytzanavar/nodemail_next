'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import styles from './Header.module.css';
import { useTranslations } from "next-intl";
import ReactCountryFlag from 'react-country-flag'
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useRouter, usePathname } from 'next/navigation';

type countryType = { [key: string]: string }

const DEFAULT_COUNTRIES: countryType = { gb: 'GB', fr: 'FR', gr: 'GR' }


const Header = ({ locale }: { locale: string }) => {

  const [openBurger, setOpenBurger] = useState(false)
  const [hoverBurger, setBurgerHover] = useState(false)
  const [countryToggle, setCountryToggle] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<any>(DEFAULT_COUNTRIES[locale === 'en' ? 'gb' : locale])
  const t = useTranslations('Header')
  const keys = ['responsibilities', 'advisory', 'communication'] as const;
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


  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm'>
      <nav className='flex justify-between relative z-20 items-center md:w-full bg-white px-4 sm:px-6 lg:px-8 md:mx-auto py-3'>
        {/* Logo + Business Name */}
        <div className='flex-shrink-0 flex items-center gap-3'>
          <Link locale={locale} href={'/' + locale}>
            <Image width={52} height={52} className="w-13 h-13 cursor-pointer rounded-md hover:shadow-md transition-all duration-200 object-cover" placeholder='blur' src={logo} alt='logo-image' /></Link>
          <div className='hidden sm:flex flex-col gap-0.5'>
            <span className='text-sm font-bold text-gray-900 leading-none tracking-wide'>{t('firmName')}</span>
            <span className='text-xs text-gray-500 font-light'>{t('firmType')}</span>
          </div>
        </div>
        <div className={` bg-white mx-auto w-full  md:flex hidden justify-center items-center transform transition-transform duration-500 ease-in-out md:translate-y-[0]  md:opacity-100 md:h-auto   ${openBurger ? ' overflow-hidden  ' : ' translate-y-[-100%] opacity-0'}  left-0   px-5`}>
          <ul className="flex md:flex-row flex-col h-full my-auto items-center gap-8">
            {keys.map((key) => <li key={locale + '/' + key}>
              <Link locale={locale} aria-current={isActive(key) ? 'page' : undefined} className={`${isActive(key) ? 'text-cyan-700 font-semibold' : 'text-gray-700 font-medium'} text-sm relative group hover:text-cyan-700 transition-colors duration-200 pb-2`} href={`/${locale}/${key}`}>
                {t(`${key}.title`)}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-700 to-teal-600 transition-all duration-300 ${isActive(key) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
            )}
          </ul>
        </div>
        <div className='md:relative z-60 md:block hidden'>
          <button className='md:relative z-50 px-3 py-2 h-10 min-h-[40px] hover:bg-gray-50 bg-white rounded-lg border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 font-medium text-sm text-gray-700' onClick={() => setCountryToggle(prev => !prev)}>
            <ReactCountryFlag
              countryCode={currentLocale === 'en' ? 'gb' : currentLocale}
              svg
              style={{
                width: '1.25rem',
                height: '1.25rem',
                borderRadius: '3px',
                objectFit: 'cover'
              }}
              title={t(currentLocale.toLocaleLowerCase())}
            />
            <span className='text-xs font-semibold uppercase tracking-wider'>
              {currentLocale === 'EN' ? 'En' : currentLocale === 'FR' ? 'Fr' : 'El'}
            </span>
            <svg className='w-4 h-4 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </button>



        </div>



        <div className='md:hidden flex items-center gap-2'>
          <div>
            <button className='z-50 px-3 py-2 h-10 hover:bg-gray-50 bg-white rounded-lg border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 font-medium text-sm text-gray-700' onClick={() => setCountryToggle(prev => !prev)}>
              <ReactCountryFlag
                countryCode={currentLocale === 'en' ? 'gb' : currentLocale}
                svg
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '3px',
                  objectFit: 'cover'
                }}
                title={t(currentLocale.toLocaleLowerCase())}
              />
              <span className='text-xs font-semibold uppercase'>
                {currentLocale === 'EN' ? 'En' : currentLocale === 'FR' ? 'Fr' : 'El'}
              </span>
            </button>
          </div>
          <div>
            <button onMouseOver={(e) => setBurgerHover(true)} onMouseLeave={(e) => setBurgerHover(false)} onClick={() => setOpenBurger(prev => !prev)} className={` relative top-3.5 ml-5  ${styles.menu_button} `}>
              <span className={`${styles.menu_button_line} ${styles.top} ${openBurger ? styles.on_menu_top : ''}  ${openBurger ? 'min-h-[4px] min-w-[37px]' : 'min-h-[4px] min-w-[42.5px]'} bg-slate-700`}></span>
              <span className={` ${styles.menu_button_line} ${styles.mid} ${openBurger ? styles.on_menu_mid : ''} ${hoverBurger && ' min-h-[4px] min-w-[42.5px]'} min-h-[4px] min-w-[25px] bg-slate-700`}></span>
              <span className={` ${styles.menu_button_line} ${styles.botm} ${openBurger ? styles.on_menu_botm : ''}  ${openBurger ? 'min-h-[4px] min-w-[36px]' : 'min-h-[4px] min-w-[42.5px]'} bg-slate-700`}></span>
            </button>
          </div>
        </div>
      </nav>


      <motion.div
        variants={{
          hidden: { opacity: 0, x: 105, },

          visible: { opacity: 1, x: 0, zIndex: 100 }
        }}
        transition={{ duration: .65 }}
        initial="hidden"
        animate={burgerControls}
        className={`absolute  md:hidden top-[4rem] z-60  left-0 ${openBurger && 'w-screen gap-8'} h-screen bg-white text-white flex flex-col items-center justify-center `}>
        {openBurger &&
          <motion.div
            className='flex flex-col gap-10 font-medium'
            variants={listVariants}
            initial="closed"
            animate="opened"
            transition={{ duration: .55 }}>
            {
              keys.map((key) =>
                <motion.div variants={itemListVariant} key={locale + '/' + key}>
                  <li >
                    <Link locale={locale} aria-current={isActive(key) ? 'page' : undefined} onClick={() => setOpenBurger(false)} className={`text-3xl ${isActive(key) ? 'text-cyan-700 font-semibold' : 'text-black/80'} hover:text-gray-900/40`} href={`/${locale}/${key}`} >{t(`${key}.title`)}</Link>
                  </li>
                </motion.div>
              )
            }
          </motion.div>}
      </motion.div>




      <AnimatePresence>
        {countryToggle &&
          <>
            <div className='fixed inset-0 z-40' onClick={() => setCountryToggle(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className='absolute top-full z-50 md:right-0 md:mr-0 right-0 mt-2 min-w-[9rem] origin-top-right rounded-lg border border-gray-200 bg-white py-1 shadow-lg'>
              <ul className='w-full'>{
                Object.keys(DEFAULT_COUNTRIES).filter(ct => ct.toLocaleLowerCase() !== currentLocale.toLocaleLowerCase()).map(loc => (
                  <li key={loc}>
                    <button className='flex w-full items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150' onClick={() => selectLocale(loc)}>
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
    </header>

  )
}

export default Header