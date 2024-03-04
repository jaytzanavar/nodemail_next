'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import styles from './Header.module.css';

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false)

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

  console.log('Burger ?', openBurger);
  return (
    <header className='bg-white'>
      <nav className='flex justify-between items-center w-[92%]  mx-auto'>
        <div>
          <Image className="w-16 cursor-pointer" src={logo} alt='logo-image' />
        </div>
        <div className={` bg-white mx-auto w-full  flex justify-center items-center transform transition-transform duration-500 ease-in-out md:translate-y-[0]  md:opacity-100 md:h-auto ${openBurger ? 'translate-y-[50%] overflow-hidden h-screen ' : ' translate-y-[-100%] opacity-0'}  left-0   px-5`}>
          <ul className="flex md:flex-row flex-col h-full my-auto items-center gap-[4vw]">
            <li>
              <Link className='hover:text-gray-500/40' href=''>Responsibilities</Link>
            </li>
            <li><Link className='hover:text-gray-500/40' href=''>Advisory</Link></li>
            <li><Link className='hover:text-gray-500/40' href=''>Communication</Link></li>
          </ul>
        </div>

        <div>
          <button onClick={() => setOpenBurger(prev => !prev)} className={` md:hidden block  ${styles.menu_button} `}>
            <span className={`${styles.menu_button_line} ${styles.top} ${openBurger ? styles.on_menu_top : ''} bg-slate-700`}></span>
            <span className={` ${styles.menu_button_line} ${styles.mid} ${openBurger ? styles.on_menu_mid : ''} bg-slate-700`}></span>
            <span className={` ${styles.menu_button_line} ${styles.botm} ${openBurger ? styles.on_menu_botm : ''} bg-slate-700`}></span>
          </button>
        </div>
      </nav>
    </header >
  )
}

export default Header