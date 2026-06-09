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
    }, [isInView, mainControls])

    const pillars = [
        {
            number: "01",
            title: "Strategic Thinking",
            description: "We analyze every case thoroughly, developing comprehensive legal strategies tailored to your unique situation and goals."
        },
        {
            number: "02",
            title: "Thorough Research",
            description: "Our team conducts extensive legal research and investigation to build the strongest possible case for you."
        },
        {
            number: "03",
            title: "Expert Execution",
            description: "With decades of courtroom experience, we execute our strategies with precision and professionalism at every stage."
        }
    ];

    return (
        <div className='w-full bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden'>
            <div className='max-w-6xl mx-auto'>
                {/* Header Section */}
                <div className='mb-16 sm:mb-20'>
                    <h2 className='font-extrabold text-4xl sm:text-5xl text-center text-gray-900 mb-6'>
                        Our Three Pillars
                    </h2>
                    <p className='text-center text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed'>
                        Success in law is built on a foundation of strategic thinking, thorough research, and expert execution. These three principles guide everything we do.
                    </p>
                </div>

                {/* Pillars Grid */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10'
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: idx * 0.2, duration: 0.5 }
                                }
                            }}
                            className='flex flex-col gap-5'
                        >
                            {/* Number Badge */}
                            <div className='flex items-center gap-4'>
                                <div className='text-5xl sm:text-6xl font-extrabold text-cyan-600/20 leading-none'>
                                    {pillar.number}
                                </div>
                                <div className='h-12 w-1 bg-gradient-to-b from-cyan-600 to-teal-600 rounded-full'></div>
                            </div>

                            {/* Content */}
                            <div className='flex flex-col gap-3'>
                                <h3 className='text-xl sm:text-2xl font-bold text-gray-900'>
                                    {pillar.title}
                                </h3>
                                <p className='text-gray-600 text-base leading-relaxed'>
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA Section */}
                <div className='mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-gray-200'>
                    <div className='text-center max-w-2xl mx-auto'>
                        <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
                            98% Success Rate
                        </h3>
                        <p className='text-gray-600 text-base sm:text-lg leading-relaxed mb-8'>
                            We&apos;re proud to offer top-notch legal services at affordable, transparent pricing. With us, you&apos;re not just hiring a lawyer—you&apos;re gaining a dedicated partner committed to your success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strategy
