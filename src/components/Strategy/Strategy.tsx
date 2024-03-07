"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const Strategy = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView)
            mainControls.start("visible")
    }, [isInView])
    return (
        <div className='bg-[url("/writing_.jpg")] w-screen md:h-[70vh] bg-no-repeat bg-cover flex flex-col gap-3'>
            <div className='w-full h-full md:py-0 py-10 flex flex-col md:gap-10   justify-center items-center'>
                <h1 className='font-extrabold text-6xl text-center text-white'>
                    Our Strategy Refines our Outcomes </h1>
                <p className='text-white/70  font-montserrat text-md font-light  px-[20%] text-center  leading-[2rem]  tracking-tighter'>

                    We’re proud that our law firm offers top-notch legal services for a nationwide affordable pricing! With us you’ll never feel like the lawyers are just robbers in suits, besides, we win 98% of all cases. So with us, your chances of winning are as high as they possibly can be!</p>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5 }}
                >
                    <ul ref={ref} className="text-white/90 w-full  font-montserrat text-2xl font-light flex ">
                        <li className='w-[33vw] text-center flex flex-col gap-3'>
                            <h2 className=' text-7xl text-white/20'>01</h2>
                            <h3>Thinking</h3>
                            <p className='text-white/70  font-montserrat text-lg  font-light  px-[20%] text-center  leading-[2rem]  tracking-tighter'>We are devoted to providing the legal profession reasonably priced, professional and court room experience attorneys in all types of civil cases.</p>
                        </li>
                        <li className='w-[33vw] text-center flex flex-col gap-3'>
                            <h2 className=' text-7xl text-white/20'>02</h2>
                            <h3>Searching</h3>
                            <p className='text-white/70  font-montserrat text-lg  font-light  px-[20%] text-center  leading-[2rem]  tracking-tighter'>We can provide qualified and experienced attorneys to you upon short notice for almost any court appearance, both civil and criminal.</p>
                        </li>
                        <li className='w-[33vw] text-center flex flex-col gap-3'>
                            <h2 className=' text-7xl text-white/20'>03</h2>
                            <h3>Step 3</h3>
                            <p className='text-white/70  font-montserrat text-lg  font-light  px-[20%] text-center  leading-[2rem]  tracking-tighter'>We can find attorneys to handle depositions, inspections, trials and who can even help you write your documentation.</p>
                        </li>
                    </ul>
                </motion.div>
            </div>

        </div >
    )
}

export default Strategy
