"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { usePathname } from 'next/navigation'

const Button = ({ type, label = '', disabled = false, size = 'md', link }: { type: "button" | "submit" | "reset" | undefined, label: any | string, disabled: boolean, size: string, link: string | null }) => {
    const router = useRouter();
    const path = usePathname()



    const handleClick = () => {
        router.push(`${path}/${link}`)
    }
    return (
        <>
            {type === "submit" ? <button disabled={disabled} type={type} className={` ${size === 'xl' && 'h-14 w-40 px-8 m-4 '} ${size === 'lg' && 'h-12 px-6 m-2 '} ${size === 'md' && 'h-10 px-5 m-2 '} mt-5 text-white bg-gradient-to-r from-cyan-800 via-cyan-800 to-teal-900 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-teal-500 dark:focus:ring-teal-800 shadow-lg shadow-teal-700/40 hover:shadow-teal-500/40 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 min-h-[45px] min-w-[45px]`}>{label}</button> :
                <button disabled={disabled} type={type} onClick={handleClick} className={` ${size === 'xl' && 'h-14 w-40 px-8 m-4 '} ${size === 'lg' && 'h-12 px-6 m-2 '} ${size === 'md' && 'h-10 px-5 m-2 '} mt-5 text-white bg-gradient-to-r from-cyan-800 via-cyan-800 to-teal-900 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-teal-500 dark:focus:ring-teal-800 shadow-lg shadow-teal-700/40 hover:shadow-teal-500/40 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 min-h-[45px] min-w-[45px]`}>{label}</button>
            }
        </>
    )
}

export default Button