import React from 'react'
import Button from '../Button/Button'
import Link from 'next/link'

const Hero = ({ locale, heroTitle, heroSub, return_btn, heroText, linkEnabled = true }: { locale: string, heroTitle: string, heroSub: string, return_btn: string, heroText: string, linkEnabled: boolean }) => {


    return (
        <div className='md:h-[65vh] bg-slate-50/90 w-screen'>
            <div className='flex md:flex-row flex-col justify-center px-auto '>

                <div className='md:w-[35%] w-full pt-[2rem] flex flex-col '>
                    {linkEnabled && <Link locale={locale} className='mt-[2rem] mb-[2rem] pl-[5rem] hover:text-gray-500/40 text-gray-600/90 transition-all duration-500 ease-in-out' href="/">{return_btn}</Link>}
                    <div id="divider" className=" h-0.5 mb-3 ml-3 w-[50%] pr-10 border-t-0 bg-black opacity-100 dark:opacity-50"></div>
                    <h1 className='font-extrabold text-6xl px-[30%] text-black/90'> {heroTitle} <span className='text-gray-500/80'> {heroSub}</span></h1></div>
                <div className='md:w-[65%] w-full'>
                    <div className='flex flex-col justify-center items-start p-10 px-[15%]'>
                        <h4 className='text-gray-500 font-montserrat text-xl font-light pt-[15%]  leading-[3rem]  tracking-tighter'>
                            {heroText}</h4>

                        {/* <Button type='button' disabled={false} label={"Read more"} size='lg' /> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hero