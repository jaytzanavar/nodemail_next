
'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";
import bg_img from "../../../public/law2.jpg";
import Image from 'next/image';



const Experience = ({ title, subtitle, est, cases_won, business_partners, trusting_clients }: { title: string, subtitle: string, est: string, cases_won: string, business_partners: string, trusting_clients: string }) => {

    const ref = useRef<null | HTMLDivElement>(null)
    const [intersecting, setIntersecting] = useState(false)
    const [obs, setObserver] = useState<IntersectionObserver | null>(null)

    useEffect(() => {
        let observerRefValue: null | HTMLDivElement | Element = null;
        if (ref.current) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setIntersecting(true)
                } else {
                    setIntersecting(false)
                }

                if (entries[0].intersectionRatio > 0)
                    observer.unobserve(ref.current as Element)
            }, {
                threshold: 0.9
            })

            observer.observe(ref.current)
            observerRefValue = ref.current
            setObserver(observer)

            return () => {
                if (ref.current && observerRefValue) {
                    observer.unobserve(observerRefValue)
                }
            }

        }

    }, [])




    return (
        <div className=' w-screen lg:h-[60vh] md:h-[140vh]  relative z-10'>
            <Image quality={90} sizes="100vw" placeholder='blur' className="z-0 relative" alt="Damouli law firm experience background image" src={bg_img} fill style={{ objectFit: "cover" }} />
            <div className='w-full h-full relative z-10 md:py-0 py-10 bg-black/50 flex flex-col md:gap-0 gap-5 justify-center items-center'>
                <h2 className='font-extrabold text-6xl text-center text-white'>
                    {title} </h2>
                <p className='text-white/90 font-montserrat text-xl font-light  px-[20%] text-center  leading-[3rem]  tracking-tighter'>

                    {subtitle}</p>
                <div className="flex md:flex-row flex-col mx-auto" >
                    <div className='flex justify-center items-center' >
                        <div className='text-white md:border-r-2 md:border-b-0 border-b-2 border-white/60 my-2 mt-4  md:px-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={1992} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>   {est}</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-white md:border-b-0  md:border-r-2 border-b-2 border-white/60 my-2 mt-4 md:px-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={552} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>{cases_won}</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center' ref={ref}>
                        <div className='text-white  md:border-r-2 md:border-b-0 border-b-2  border-white/60 my-2 mt-4 md:px-4  py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={10} />}+</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>{business_partners}</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center'>
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