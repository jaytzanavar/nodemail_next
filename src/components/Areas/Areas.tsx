import React from 'react'
import { faSuitcase as suitCase } from '@fortawesome/free-solid-svg-icons';
import { faUser as userR } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella as umbrellaI } from '@fortawesome/free-solid-svg-icons';
import { faDollar as dollar } from '@fortawesome/free-solid-svg-icons';
import Cards from '../Cards/Cards';

const Areas = () => {
    return (
        <div className='w-screen bg-white py-12'>
            <div className='flex flex-col md:px-0 px-5 justify-center items-center gap-4'>
                <div id="divider" className="my-10 h-[0.155rem] ml-3 w-[8%] pr-10 border-t-0 bg-gray-700/50 opacity-100 dark:opacity-50"></div>
                <h3 className='font-extrabold text-4xl text-center text-black'>
                    Our Legal Practice Areas</h3>

                <div className='grid md:grid-cols-3  gap-4 md:grid-rows-2 grid-col-2 '>
                    <Cards icon={suitCase} title={"Business Law"} text={'Business requires strong legislative background to operate well.'}></Cards>
                    <Cards icon={userR} title={"Civil Litigation"} text={'We advocate for our clients, seeking a fair resolution within a timeframe.'}></Cards>
                    <Cards icon={umbrellaI} title={"Insurance Defence"} text={'Insurance issues require excellent knowledge and great intuition.'}></Cards>
                    <Cards icon={dollar} title={"Financial Law"} text={'We work in an open dialogue with you in order to devise the strategy which will best serve your interests.'}></Cards>
                </div>
            </div>
        </div>
    )
}

export default Areas