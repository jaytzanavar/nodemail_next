import Image from 'next/image'
import React, { useMemo } from 'react'
import logo from '../../../public/logo.jpeg';
import Map from '../Map/Map';

const Footer = () => {


  return (
    <div className='h-[55vh] w-screen flex px-[25%] gap-10 bg-slate-800 pt-[5%] '>
      <div className='flex flex-col gap-4 '>
        <div className='text-2xl text-left text-white flex items-center gap-4'> <Image className="w-16 cursor-pointer" src={logo} alt='logo-image' /> Lawfirm</div>
        <div className='text-wrap max-w-[20vw]  font-normal text-white/70  dark:text-gray-400'>Your reliable protection in jurisprudence. Our qualification provides the opportunity solve the problems of any complexity.</div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-2xl text-left text-white'>Contact info</div>
        <div>
          <a className='text-white/70 hover:text-white/90 transition-all' href='mailto:lawfirm@gmail.com'>lawfirm@gmail.com</a>
        </div>
        <div>
          <ul className='text-white/70'>
            <li>Working Hours</li>
            <li>Mon-Tue: 9 am - 19:00 pm</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-2xl text-left text-white'>Quick Links</div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <Map />
      </div>
    </div>
  )
}

export default Footer