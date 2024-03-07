import React from 'react'
import Button from '../Button/Button'
import Link from 'next/link'

const Hero = ({ linkEnabled = true }) => {
    return (
        <div className='md:h-[65vh] bg-slate-50/90 w-screen'>

            <div className='flex md:flex-row flex-col justify-center px-auto'>

                <div className='md:w-[35%] w-full pt-[2rem] flex flex-col '>
                    {linkEnabled && <Link className='mt-[2rem] mb-[2rem] pl-[5rem] hover:text-gray-500/40 text-gray-600/90 transition-all duration-500 ease-in-out' href="/">Return Home</Link>}
                    <div id="divider" className=" h-0.5 ml-3 w-[50%] pr-10 border-t-0 bg-black opacity-100 dark:opacity-50"></div>
                    <h2 className='font-extrabold text-6xl px-[30%] text-black/90'>Get the Best Legal Service  <span className='text-gray-500/80'> Ever</span></h2></div>
                <div className='md:w-[65%] w-full'>
                    <div className='flex flex-col justify-center items-start p-10 px-[15%]'>
                        <h4 className='text-gray-500 font-montserrat text-md font-light pt-[15%]  leading-[3rem]  tracking-tighter'>
                            With more than 20 years of experience behind, today our Houston-based law firm is the #1, both when talking about the number of yearly cases dealt with and the percentage of all those cases being won.

                            But that kind of success does not come by, just when you sit idly or do not have strict work ethic principles being put into practice…

                            We’ve always cherished the three pillars which our company has always stood upon</h4>

                        {/* <Button type='button' disabled={false} label={"Read more"} size='lg' /> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hero