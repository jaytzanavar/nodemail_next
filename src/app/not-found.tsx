'use client';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const router = useRouter()
    const [timer, setTimer] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {

            setTimer(prev => prev - 1)
            console.log('timer', timer);

        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [timer])


    if (timer === 1)
        router.push('/en');
    return (
        <html lang="en">
            <body>
                <div className="bg-black/90 text-white/90 w-screen h-screen flex justify-center  gap-3 items-center ">

                    <h1 className='font-extrabold text-2xl md:text-left text-center  border-r-3 border-white/90 text-white/90'>
                        Page not found</h1>
                    <div className=' w-[2px] h-[30px] bg-white border-r-3 border-white/90'></div>
                    <h4 className="font-extrabold text-xl text-center text-white/70 ">Redirecting to main website... {timer}</h4>
                </div>
            </body>
        </html>
    );
}