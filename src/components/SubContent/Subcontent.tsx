import React from 'react'
import Cards from '../Cards/Cards'
import { faSuitcase as suitCase } from '@fortawesome/free-solid-svg-icons';
import { faUser as userR } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella as umbrellaI } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';


const Subcontent = () => {
    return (
        <div className='md:h-[85vh] bg-slate-50/90 w-screen'>
            <div className='flex md:flex-row flex-col md:p-0 p-[5%] justify-center gap-5 relative bottom-[20%] '>
                <Cards icon={suitCase} title={"Business Law"} text={'Business requires strong legislative background to operate well.'}></Cards>
                <Cards icon={userR} title={"Civil Litigation"} text={'We advocate for our clients, seeking a fair resolution within a timeframe.'}></Cards>
                <Cards icon={umbrellaI} title={"Insurance Defence"} text={'Insurance issues require excellent knowledge and great intuition.'}></Cards>
            </div>
            <div className='flex md:flex-row flex-col justify-center px-auto'>

                <div className='md:w-[35%] w-full'>
                    <div id="divider" className="my-12 h-0.5 ml-3 w-[50%] pr-10 border-t-0 bg-black opacity-100 dark:opacity-50"></div>
                    <h2 className='font-extrabold text-6xl px-[30%] text-black/90'>Why You Can Trust Legalor, <span className='text-gray-500/80'> Our Values</span></h2></div>
                <div className='md:w-[65%] w-full'>
                    <div className='flex flex-col justify-center items-start p-10 px-[15%]'>
                        <h4 className='text-gray-500 font-montserrat text-md font-light pt-[15%]  leading-[3rem]  tracking-tighter'>We value justice, honesty and time. We are always at your service as we are in charge of your defence. Any detail will be noticed and it can be essential for your case.

                            During our work we gathered a team of devoted experts with rich experience in juridical help. We put a great emphasis on business law, because in today’s rapidly-changing environment, people require assistance in business spheres. Our experience allows us to be confident and stand by our words.

                            Our company was established in 2004. We started as a small legal consultancy. We have proved our competence and had many satisfied clients. We expanded our activity and started providing many other juridical services to meet wider clients needs.</h4>

                        <Button type='button' disabled={false} label={"Read more"} size='lg' />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Subcontent