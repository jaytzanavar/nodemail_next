"use client"
import React, { useEffect, useRef } from 'react'
import { faSuitcase as suitCase } from '@fortawesome/free-solid-svg-icons';
import { faUser as userR } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella as umbrellaI } from '@fortawesome/free-solid-svg-icons';
import { faDollar as dollar } from '@fortawesome/free-solid-svg-icons';
import Cards from '../Cards/Cards';
import { motion, useInView, useAnimation } from "framer-motion"


const Areas = ({ cardStyle }: { cardStyle: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView)
            mainControls.start("stop")
    }, [isInView])

    return (
        <div className='w-screen bg-white py-12 px-6'>
            <div className='flex flex-col md:px-0 px-5 justify-center items-center gap-10 '>
                <div id="divider" className="my-10 h-[0.155rem] ml-3 w-[8%] pr-10 border-t-0 bg-gray-700/50 opacity-100 dark:opacity-50"></div>
                <h3 className='font-extrabold text-4xl text-center text-black'>
                    Our Legal Practice Areas</h3>

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
                        <Cards cardColor={cardStyle} icon={suitCase} title={"Business Law"} text={'Business requires strong legislative background to operate well.'}></Cards>
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
                        <Cards cardColor={cardStyle} icon={userR} title={"Civil Litigation"} text={'We advocate for our clients, seeking a fair resolution within a timeframe.'}></Cards>
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
                        <Cards cardColor={cardStyle} icon={umbrellaI} title={"Insurance Defence"} text={'Insurance issues require excellent knowledge and great intuition.'}></Cards>
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
                        <Cards cardColor={cardStyle} icon={dollar} title={"Financial Law"} text={'We work in an open dialogue with you in order to devise the strategy which will best serve your interests.'}></Cards>
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
                        <Cards cardColor={cardStyle} icon={userR} title={"Civil Litigation"} text={'We advocate for our clients, seeking a fair resolution within a timeframe.'}></Cards>
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
                        <Cards cardColor={cardStyle} icon={umbrellaI} title={"Insurance Defence"} text={'Insurance issues require excellent knowledge and great intuition.'}></Cards>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Areas