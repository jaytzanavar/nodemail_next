"use client"
import React, { useEffect, useRef } from 'react'
import { faSuitcase as suitCase } from '@fortawesome/free-solid-svg-icons';
import { faUser as userR } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella as umbrellaI } from '@fortawesome/free-solid-svg-icons';
import { faDollar as dollar } from '@fortawesome/free-solid-svg-icons';
import Cards from '../Cards/Cards';
import { motion, useInView, useAnimation } from "framer-motion"


const Areas = ({ title, card1, card2, card3, card4, card5, card6, cardStyle }: { title: string, card1: any, card2: any, card3: any, card4: any, card5: any, card6: any, cardStyle: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView)
            mainControls.start("stop")
    }, [isInView, mainControls])

    console.log(card1);

    return (
        <div className='w-screen bg-white py-12 px-6'>
            <div className='flex flex-col md:px-0 px-5 justify-center items-center gap-10 '>
                <div id="divider" className="my-10 mb-3 h-[0.155rem] ml-3 w-[8%] pr-10 border-t-0 bg-gray-700/50 opacity-100 dark:opacity-50"></div>
                <h3 className='font-extrabold text-4xl text-center text-black'>
                    {title}</h3>

                <div ref={ref} className='grid md:grid-cols-3  gap-4 md:grid-rows-2 grid-col-2 '>
                    <motion.div
                        variants={{
                            start: { x: -75 },
                            stop: { x: 0 }
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}
                    >
                        <Cards cardColor={cardStyle} icon={suitCase} title={card1.title} text={card1.text}></Cards>
                    </motion.div>
                    <motion.div
                        variants={{
                            start: { opacity: 0, y: -125 },
                            stop: { opacity: 1, y: 0 }
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}
                    >
                        <Cards cardColor={cardStyle} icon={userR} title={card2.title} text={card2.text}></Cards>
                    </motion.div>
                    <motion.div
                        variants={{
                            start: { x: 75 },
                            stop: { x: 0 }
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}
                    >
                        <Cards cardColor={cardStyle} icon={umbrellaI} title={card3.title} text={card3.text}></Cards>
                    </motion.div>
                    <motion.div
                        variants={{
                            start: { x: -75 },
                            stop: { x: 0 }
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}
                    >
                        <Cards cardColor={cardStyle} icon={dollar} title={card4.title} text={card4.text}></Cards>
                    </motion.div>
                    <motion.div
                        variants={{
                            start: { opacity: 0, y: 125 },
                            stop: { opacity: 1, y: 0 }
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}
                    >
                        <Cards cardColor={cardStyle} icon={userR} title={card5.title} text={card5.text}></Cards>
                    </motion.div>
                    <motion.div
                        variants={{
                            start: { x: 75 },
                            stop: { x: 0 }
                        }}
                        initial="start"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}
                    >
                        <Cards cardColor={cardStyle} icon={umbrellaI} title={card6.title} text={card6.text}></Cards>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Areas