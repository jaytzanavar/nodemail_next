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
                    <h1 className='font-extrabold text-3xl sm:text-4xl px-[5%] sm:px-[10%] text-black/90'> {heroTitle} <span className='text-gray-500/80'> {heroSub}</span></h1></div>
                <div className='md:w-[65%] w-full'>
                    <div className='flex flex-col justify-center items-start p-10 px-[15%]'>
                        <div className='text-gray-600 text-base sm:text-lg pt-[15%] leading-relaxed max-w-2xl space-y-4'>
                            {heroText.split('\n').map((paragraph, idx) => (
                                paragraph.trim() && <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        {/* <Button type='button' disabled={false} label={"Read more"} size='lg' /> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hero