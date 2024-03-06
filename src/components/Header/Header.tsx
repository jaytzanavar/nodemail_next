'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import styles from './Header.module.css';
import { useTranslations } from "next-intl";
import ReactCountryFlag from 'react-country-flag'
import { AnimatePresence, stagger, motion } from "framer-motion";
import { useRouter } from 'next/navigation';


const DEFAULT_COUNTRIES = { gb: 'GB', fr: 'FR', gr: 'GR' }

const Header = ({ locale }: { locale: string }) => {
  console.log('Locale', locale);
  const [openBurger, setOpenBurger] = useState(false)
  const [countryToggle, setCountryToggle] = useState(false)
  const [currentLocale, setCurrentLocale] = useState(DEFAULT_COUNTRIES[locale === 'en' ? 'gb' : locale])
  const t = useTranslations('Header')
  const keys = ['responsibilities', 'advisory', 'communication'] as const;
  const router = useRouter();

  useEffect(() => {
    if (openBurger) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the className when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [openBurger]);



  const selectLocale = (loc: string) => {
    setCurrentLocale(DEFAULT_COUNTRIES[loc]);
    setCountryToggle(prev => !prev)
    router.push(`/${loc === 'gb' ? 'en' : loc}`)
  }

  console.log(keys);
  return (
    <header>
      <nav className='flex justify-between  relative z-50 items-center md:w-full bg-white px-[5%] md:mx-auto '>
        <div>
          <Link href={'/' + locale}>
            <Image className="w-16 cursor-pointer" src={logo} alt='logo-image' /></Link>
        </div>
        <div className={` bg-white mx-auto w-full  md:flex hidden justify-center items-center transform transition-transform duration-500 ease-in-out md:translate-y-[0]  md:opacity-100 md:h-auto   ${openBurger ? ' overflow-hidden  ' : ' translate-y-[-100%] opacity-0'}  left-0   px-5`}>
          <ul className="flex md:flex-row flex-col h-full my-auto items-center gap-[4vw]">
            {keys.map((key) => <li key={locale + '/' + key}>
              <Link className='hover:text-gray-500/40' href={`/${locale}/${key}`} locale={locale}>{t(`${key}.title`)}</Link>
            </li>
            )}
          </ul>
        </div>
        <div className='md:relative z-60  md:block hidden'>
          <button className='md:relative z-50 w-[50px] h-[50px]  hover:bg-black/20 bg-slate-400/30 rounded-full' onClick={() => setCountryToggle(prev => !prev)}>
            <ReactCountryFlag
              countryCode={currentLocale === 'en' ? 'gb' : currentLocale}
              svg
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '3rem'
              }}
              title={'locale'}
            />
          </button>



        </div>



        <div>
          <button onClick={() => setOpenBurger(prev => !prev)} className={` md:hidden block  ${styles.menu_button} `}>
            <span className={`${styles.menu_button_line} ${styles.top} ${openBurger ? styles.on_menu_top : ''} bg-slate-700`}></span>
            <span className={` ${styles.menu_button_line} ${styles.mid} ${openBurger ? styles.on_menu_mid : ''} bg-slate-700`}></span>
            <span className={` ${styles.menu_button_line} ${styles.botm} ${openBurger ? styles.on_menu_botm : ''} bg-slate-700`}></span>
          </button>
        </div>
      </nav>




      <AnimatePresence>
        {countryToggle &&

          <motion.div
            initial={{ opacity: 0, translateY: "-58px", zIndex: 5 }} animate={{ opacity: 1, translateY: "0px", zIndex: 5 }} exit={{ opacity: 0, translateY: "-58px", zIndex: 5 }} transition={{ duration: 1, ease: "easeInOut" }} className={`absolute z-10 right-[3%]  w-[100px] items-center  bg-black/35 flex flex-col`}>
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
                      title={loc}

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