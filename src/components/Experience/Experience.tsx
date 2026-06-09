
'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";
import bg_img from "../../../public/law2.webp";
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
                if (observerRefValue) {
                    observer.unobserve(observerRefValue)
                }
            }

        }

    }, [])




    return (
        <div className='w-full relative z-10 min-h-screen md:min-h-[70vh]'>
            <Image alt="Damouli law firm experience background image" quality={90} sizes="100vw" placeholder='blur' className="z-0 absolute inset-0" src={bg_img} fill style={{ objectFit: "cover" }} />
            <div className='w-full h-full relative z-10 bg-black/55 flex flex-col py-16 md:py-24 justify-center items-center'>
                {/* Header Section */}
                <div className='flex flex-col gap-6 md:gap-10 items-center mb-16 md:mb-20 px-4'>
                    <h2 className='font-extrabold text-4xl sm:text-5xl md:text-5xl text-center text-white max-w-3xl'>
                        {title}
                    </h2>
                    <p className='text-white/85 text-base sm:text-lg text-center max-w-2xl leading-relaxed'>
                        {subtitle}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full px-4 max-w-5xl mx-auto">
                    <div className='flex flex-col items-center justify-center py-6 md:py-8 px-4 md:px-6' ref={ref}>
                        <h2 className='font-extrabold text-4xl sm:text-5xl text-center text-white mb-3'>
                            {intersecting && <CountUp duration={5} end={2010} />}
                        </h2>
                        <h4 className='text-sm md:text-base text-center text-white/70 font-medium'>{est}</h4>
                    </div>

                    <div className='flex flex-col items-center justify-center py-6 md:py-8 px-4 md:px-6'>
                        <h2 className='font-extrabold text-4xl sm:text-5xl text-center text-white mb-3'>
                            {intersecting && <CountUp duration={5} end={552} />}
                        </h2>
                        <h4 className='text-sm md:text-base text-center text-white/70 font-medium'>{cases_won}</h4>
                    </div>

                    <div className='flex flex-col items-center justify-center py-6 md:py-8 px-4 md:px-6'>
                        <h2 className='font-extrabold text-4xl sm:text-5xl text-center text-white mb-3'>
                            {intersecting && <CountUp duration={5} end={10} />}+
                        </h2>
                        <h4 className='text-sm md:text-base text-center text-white/70 font-medium'>{business_partners}</h4>
                    </div>

                    <div className='flex flex-col items-center justify-center py-6 md:py-8 px-4 md:px-6'>
                        <h2 className='font-extrabold text-4xl sm:text-5xl text-center text-white mb-3'>
                            {intersecting && <CountUp duration={5} end={1200} />}
                        </h2>
                        <h4 className='text-sm md:text-base text-center text-white/70 font-medium'>{trusting_clients}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience