
'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";



const Experience = () => {

    const ref = useRef(null)
    const [intersecting, setIntersecting] = useState(false)

    useEffect(() => {

        if (ref.current) {
            const observer = new IntersectionObserver((entries) => {

                if (entries[0].isIntersecting) {
                    setIntersecting(true)
                } else {
                    setIntersecting(false)
                }
            }, {
                threshold: 0.9
            })

            observer.observe(ref.current)

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            }

        }

    }, [])


    return (
        <div className='bg-[url("/law2.jpg")] w-screen h-[60vh] bg-no-repeat bg-cover '>
            <div className='w-full h-full bg-black/50 flex flex-col justify-center items-center'>
                <h2 className='font-extrabold text-6xl text-center text-white'>
                    20 Years Of Experience In Various Cases </h2>
                <p className='text-white/90 font-montserrat text-xl font-light  px-[20%] text-center  leading-[3rem]  tracking-tighter'>

                    We’re proud that our law firm offers top-notch legal services for a nationwide affordable pricing! With us you’ll never feel like the lawyers are just robbers in suits, besides, we win 98% of all cases. So with us, your chances of winning are as high as they possibly can be!</p>
                <div className="flex mx-auto" ref={ref}>
                    <div className='flex justify-center items-center '>
                        <div className='text-white border-r-2 border-white/60 my-2 mt-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={1992} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>Company Established</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='text-white border-r-2 border-white/60 my-2 mt-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={552} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>Cases won</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='text-white border-r-2 border-white/60 my-2 mt-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={10} />}+</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70 px-[20%] '>Business Partners</h4>

                        </div>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='text-white border-r-2 border-white/0 my-2 mt-4 py-4 flex flex-col gap-2'>
                            <h2 className='font-extrabold text-6xl text-center text-white'>
                                {intersecting && <CountUp duration={5} end={1200} />}</h2>
                            <h4 className='font-extrabold text-xl text-center text-white/70Company Established px-[20%] '>Trusting clients</h4>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience