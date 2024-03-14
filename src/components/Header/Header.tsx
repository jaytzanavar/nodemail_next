'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import styles from './Header.module.css';
import { useTranslations } from "next-intl";
import ReactCountryFlag from 'react-country-flag'
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useRouter } from 'next/navigation';

type countryType = { [key: string]: string }

const DEFAULT_COUNTRIES: countryType = { gb: 'GB', fr: 'FR', gr: 'GR' }


const Header = ({ locale }: { locale: string }) => {

  const [openBurger, setOpenBurger] = useState(false)
  const [countryToggle, setCountryToggle] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<any>(DEFAULT_COUNTRIES[locale === 'en' ? 'gb' : locale])
  const t = useTranslations('Header')
  const keys = ['responsibilities', 'advisory', 'communication'] as const;
  const router = useRouter();
  const burgerControls = useAnimation();


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
    <header className='overflow-x-hidden'>
      <nav className='flex justify-between relative z-20 items-center md:w-full bg-white px-[5%] md:mx-auto '>
        <div>
          <Link locale={locale} href={'/' + locale}>
            <Image className="w-16 cursor-pointer" placeholder='blur' src={logo} alt='logo-image' /></Link>
        </div>
        <div className={` bg-white mx-auto w-full  md:flex hidden justify-center items-center transform transition-transform duration-500 ease-in-out md:translate-y-[0]  md:opacity-100 md:h-auto   ${openBurger ? ' overflow-hidden  ' : ' translate-y-[-100%] opacity-0'}  left-0   px-5`}>
          <ul className="flex md:flex-row flex-col h-full my-auto items-center gap-[4vw]">
            {keys.map((key) => <li key={locale + '/' + key}>
              <Link locale={locale} className='hover:text-gray-500/40' href={`/${locale}/${key}`} >{t(`${key}.title`)}</Link>
            </li>
            )}
          </ul>
        </div>
        <div className='md:relative z-60  md:block hidden'>
          <button className='md:relative z-50 w-[50px] h-[50px] min-h-[45px] min-w-[45px] hover:bg-black/20 bg-slate-400/30 rounded-full' onClick={() => setCountryToggle(prev => !prev)}>
            <ReactCountryFlag
              countryCode={currentLocale === 'en' ? 'gb' : currentLocale}
              svg
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '3rem'
              }}
              title={t(currentLocale.toLocaleLowerCase())}
            />
          </button>



        </div>



        <div className='md:hidden flex'>
          <div >
            <button className='block z-50 w-[50px] h-[50px]  hover:bg-black/20 bg-slate-400/30 rounded-full' onClick={() => setCountryToggle(prev => !prev)}>
              <ReactCountryFlag
                countryCode={currentLocale === 'en' ? 'gb' : currentLocale}
                svg
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '3rem'
                }}
                title={t(currentLocale.toLocaleLowerCase())}
              />
            </button>
          </div>
          <div>
            <button onClick={() => setOpenBurger(prev => !prev)} className={` relative top-3.5 ml-5 min-h-[45px] min-w-[45px] ${styles.menu_button} `}>
              <span className={`${styles.menu_button_line} ${styles.top} ${openBurger ? styles.on_menu_top : ''} bg-slate-700`}></span>
              <span className={` ${styles.menu_button_line} ${styles.mid} ${openBurger ? styles.on_menu_mid : ''} bg-slate-700`}></span>
              <span className={` ${styles.menu_button_line} ${styles.botm} ${openBurger ? styles.on_menu_botm : ''} bg-slate-700`}></span>
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
                    <Link locale={locale} className='text-3xl text-black/80 hover:text-gray-900/40' href={`/${locale}/${key}`} >{t(`${key}.title`)}</Link>
                  </li>
                </motion.div>
              )
            }
          </motion.div>}
      </motion.div>




      <AnimatePresence>
        {countryToggle &&

          <motion.div
            initial={{ opacity: 0, translateY: "-58px", zIndex: 15 }} animate={{ opacity: 1, translateY: "0px", zIndex: 15 }} exit={{ opacity: 0, translateY: "-58px", zIndex: 5 }} transition={{ duration: 1, ease: "easeInOut" }} className={`absolute z-10 md:right-[4%] right-[8%]  w-[100px] items-center  bg-black/35 flex flex-col`}>
            <ul>{
              Object.keys(DEFAULT_COUNTRIES).filter(ct => ct.toLocaleLowerCase() !== currentLocale.toLocaleLowerCase()).map(loc => (
                <motion.li
                  key={loc}
                >
                  <button className='w-[45px] h-[45px] bg-black/20 hover:bg-slate-400/30 rounded-full' onClick={() => selectLocale(loc)}>
                    <ReactCountryFlag

                      countryCode={loc}
                      svg
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '3rem'
                      }}
                      title={t(loc)}

                    />
                  </button>


                </motion.li>
              ))
            }
            </ul>
          </motion.div>

        }
      </AnimatePresence>
    </header>

  )
}

export default Header