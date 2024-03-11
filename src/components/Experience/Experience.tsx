
'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";
import { useTranslations } from "next-intl";



const Experience = ({ title, subtitle, est, cases_won, business_partners, trusting_clients }: { title: string, subtitle: string, est: string, cases_won: string, business_partners: string, trusting_clients: string }) => {

    const ref = useRef(null)
    const [intersecting, setIntersecting] = useState(false)
    const [obs, setObserver] = useState<IntersectionObserver | null>(null)

    useEffect(() => {
        if (ref.current) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setIntersecting(true)
                } else {
                    setIntersecting(false)
                }

                if (entries[0].intersectionRatio > 0)
                    observer.unobserve(ref.current)
            }, {
                threshold: 0.9
            })

            observer.observe(ref.current)
            setObserver(observer)

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            }

        }

    }, [])




    return (
        <div className='bg-[url("/law2.jpg")] w-screen md:h-[60vh]   bg-no-repeat bg-cover '>
            <div className='w-full h-full md:py-0 py-10 bg-black/50 flex flex-col md:gap-0 gap-5 justify-center items-center'>
                <h2 className='font-extrabold text-6xl text-center text-white'>
                    {title} </h2>
                <p className='text-white/90 font-montserrat text-xl font-light  px-[20%] text-center  leading-[3rem]  tracking-tighter'>

                    {subtitle}</p>
                <div className="flex md:flex-row flex-col mx-auto" >
                    <div className='flex justify-center items-center ' >
                        <div className='text-white md:border-r-2 md:border-b-0 border-b-2 border-white/60 my-2 mt-4  md:px-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={1992} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>   {est}</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='text-white md:border-b-0  md:border-r-2 border-b-2 border-white/60 my-2 mt-4 md:px-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={552} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>{cases_won}</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center ' ref={ref}>
                        <div className='text-white  md:border-r-2 md:border-b-0 border-b-2  border-white/60 my-2 mt-4 md:px-4  py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={10} />}+</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>{business_partners}</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='text-white  md:border-r-2 border-b-2 border-white/0 my-2 mt-4 md:px-4  py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={1200} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70Company Established px-[20%] '>{trusting_clients}</h4>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience