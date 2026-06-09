
'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";
import themis_img from "../../../public/design/img-themis.jpg";
import Image from 'next/image';



const Experience = ({ title, subtitle, est, cases_won, business_partners, trusting_clients }: { title: string, subtitle: string, est: string, cases_won: string, business_partners: string, trusting_clients: string }) => {

    const ref = useRef<null | HTMLDivElement>(null)
    const [intersecting, setIntersecting] = useState(false)

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
                threshold: 0.5
            })

            observer.observe(ref.current)
            observerRefValue = ref.current

            return () => {
                if (observerRefValue) {
                    observer.unobserve(observerRefValue)
                }
            }

        }

    }, [])

    const stats = [
        { end: 2010, suffix: '', label: est },
        { end: 552, suffix: '', label: cases_won },
        { end: 10, suffix: '+', label: business_partners },
        { end: 1200, suffix: '+', label: trusting_clients },
    ]

    return (
        <div className='w-full bg-navy-900 px-4 sm:px-6 lg:px-10 py-16 lg:py-24 text-[#EAF1F5]'>
            <div className='mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16'>
                <div>
                    <div className='mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brass-400'>
                        <span className='h-0.5 w-[30px] bg-brass-500'></span>
                        {subtitle}
                    </div>
                    <h2 className='font-display text-[34px] lg:text-[44px] font-extrabold leading-[1.08] tracking-tight text-[#FBF7EF]'>
                        {title}
                    </h2>

                    <div ref={ref} className='mt-11 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
                        {stats.map(stat => (
                            <div key={stat.label}>
                                <div className='font-display text-[40px] lg:text-[48px] font-bold leading-none text-brass-400'>
                                    {intersecting ? <CountUp duration={4} end={stat.end} separator={stat.end > 2000 ? '' : ','} /> : 0}{stat.suffix}
                                </div>
                                <div className='mt-2.5 text-[13.5px] text-[#EAF1F5]/70'>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Image placeholder='blur' src={themis_img} alt='Statue of Themis, goddess of justice' sizes='(max-width: 1024px) 100vw, 40vw'
                        className='aspect-[3/4] w-full max-h-[560px] rounded-2xl object-cover shadow-card-dark' />
                </div>
            </div>
        </div>
    )
}

export default Experience
