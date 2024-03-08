import Image from 'next/image'
import React, { useMemo } from 'react'
import logo from '../../../public/logo.jpeg';
import Map from '../Map/Map';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Footer = () => {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map/Map'),
    {
      loading: () => <p>Map is Loading...</p>,
      ssr: false
    }
  ), [])

  return (
    <div className='md:h-[35vh] px-[4vw] grid-cols-1 grid-rows-3 sm:grid sm:grid-cols-3 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-1 place-items-center gap-10 bg-slate-800 pt-[5%] '>
      <div className='flex flex-col gap-4 md:w-[15vw] w-full'>
        <div className='text-2xl  text-white flex lg:flex-row flex-col justify-center items-center gap-4'>
          <Image className=" rounded-full w-[100px] cursor-pointer" src={logo} alt='logo-image' />
          <h2>Lawfirm</h2>
        </div>
        <div className='  md:max-w-[300px]  sm:w-full w-[75vw]  text-wrap text-center  font-normal text-white/70 dark:text-gray-400'>Your reliable protection in jurisprudence. Our qualification provides the opportunity solve the problems of any complexity.</div>
      </div>
      <div className='flex flex-col gap-4  md:w-[15vw] w-full items-center'>
        <div className='text-2xl md:text-left text-white'>Contact info</div>
        <div>
          <a className='text-white/70 hover:text-white/90 transition-all' href='mailto:lawfirm@gmail.com'>lawfirm@gmail.com</a>
        </div>
        <div>
          <ul className='text-white/70'>
            <li>Working Hours</li>
            <li>Mon-Tue: 9 am - 19:00 pm</li>
          </ul>
          <div className='text-white/70 hover:text-white/90'>Address: <a href='https://www.google.com/maps/place/%CE%94%CE%B9%CE%BA%CE%B7%CE%B3%CE%BF%CF%81%CE%B9%CE%BA%CE%AE+%CE%95%CF%84%CE%B1%CE%B9%CF%81%CE%B5%CE%AF%CE%B1+%CE%94%CE%B1%CE%BC%CE%BF%CF%85%CE%BB%CE%AE+%CE%A3%CF%84%CE%B5%CF%86%CE%B1%CE%BD%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85+%CE%91%CE%BD%CF%84%CF%89%CE%BD%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85+%CE%BA%CE%B1%CE%B9+%CE%A3%CF%85%CE%BD%CE%B5%CF%81%CE%B3%CE%AC%CF%84%CE%B5%CF%82/@37.9922869,23.7598793,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1a2a9e8e91a5b:0xd3567c995783841e!8m2!3d37.9922827!4d23.7624542!16s%2Fg%2F11bzsgp_ht?entry=ttu'>Karystou & Iteas 3</a></div>
        </div>
      </div>
      <div className='flex flex-col gap-4 md:w-[15vw] w-full  items-center'>

        <Map />

      </div>
      <div>
      </div>
    </div>
  )
}

export default Footer