"use client"
import React, { useRef } from 'react'
import { faHandshake, faGavel, faShieldHalved, faPeopleGroup, faChartLine, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const DiscCard = ({ icon, title, text, step, style }: { icon: IconProp; title: string; text: string; step: number; style: React.CSSProperties }) => {
    return (
        <div
            style={style}
            className='absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#1a3230] to-[#0f2220] border-2 border-[#2a4240] shadow-lg hover:shadow-2xl hover:scale-105 hover:z-20 transition-all duration-300 flex flex-col items-center justify-center text-center text-white p-5 cursor-pointer'
        >
            <div className='absolute top-4 right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center'>
                {step}
            </div>
            <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-white/10 text-white/70 mb-2'>
                <FontAwesomeIcon icon={icon} className='text-base sm:text-lg' />
            </div>
            <h3 className='text-xs sm:text-base font-bold leading-snug'>{title}</h3>
            <p className='text-xs font-light leading-relaxed opacity-75 mt-1'>{text}</p>
        </div>
    );
};

const Areas = ({ title, card1, card2, card3, card4, card5, card6, cardStyle }: { title: string, card1: any, card2: any, card3: any, card4: any, card5: any, card6: any, cardStyle: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Positions for 6 discs in a hexagonal layout
    const discPositions = [
        { top: '0%', left: '50%', transform: 'translate(-50%, 0)' },           // Top
        { top: '25%', right: '0%', transform: 'translate(0, -50%)' },          // Top Right
        { top: '75%', right: '0%', transform: 'translate(0, -50%)' },          // Bottom Right
        { bottom: '0%', left: '50%', transform: 'translate(-50%, 0)' },        // Bottom
        { top: '75%', left: '0%', transform: 'translate(0, -50%)' },           // Bottom Left
        { top: '25%', left: '0%', transform: 'translate(0, -50%)' }            // Top Left
    ];

    const discs = [
        { icon: faHandshake, title: card1.title, text: card1.text, step: 1 },
        { icon: faGavel, title: card2.title, text: card2.text, step: 2 },
        { icon: faShieldHalved, title: card3.title, text: card3.text, step: 3 },
        { icon: faPeopleGroup, title: card4.title, text: card4.text, step: 4 },
        { icon: faChartLine, title: card5.title, text: card5.text, step: 5 },
        { icon: faBuilding, title: card6.title, text: card6.text, step: 6 }
    ];

    return (
        <div className='w-full bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden'>
            <div className='max-w-7xl mx-auto flex flex-col justify-center items-center gap-14'>
                {/* Divider */}
                <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full shadow-lg shadow-cyan-500/50"></div>

                {/* Title */}
                <h2 className='font-extrabold text-4xl sm:text-5xl text-center text-gray-900 max-w-3xl leading-tight'>
                    {title}
                </h2>

                {/* Connected Discs Network */}
                <div
                    ref={containerRef}
                    className='relative w-full max-w-3xl mx-auto'
                    style={{
                        aspectRatio: '1',
                        minHeight: '600px'
                    }}
                >
                    {/* SVG Lines */}
                    <svg
                        className='absolute inset-0 w-full h-full'
                        style={{ pointerEvents: 'none' }}
                        viewBox='0 0 100 100'
                        preserveAspectRatio='none'
                    >
                        <defs>
                            <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                <stop offset='0%' style={{ stopColor: 'rgba(34, 197, 94, 0.3)', stopOpacity: 1 }} />
                                <stop offset='100%' style={{ stopColor: 'rgba(20, 184, 166, 0.3)', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>

                        {/* Draw connections - Hexagon outline */}
                        <line x1='50' y1='15' x2='85' y2='35' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='85' y1='35' x2='85' y2='65' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='85' y1='65' x2='50' y2='85' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='50' y1='85' x2='15' y2='65' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='15' y1='65' x2='15' y2='35' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='15' y1='35' x2='50' y2='15' stroke='url(#lineGradient)' strokeWidth='0.5' />

                        {/* Inner connections - connecting to center */}
                        <line x1='50' y1='15' x2='50' y2='85' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='85' y1='35' x2='15' y2='65' stroke='url(#lineGradient)' strokeWidth='0.5' />
                        <line x1='85' y1='65' x2='15' y2='35' stroke='url(#lineGradient)' strokeWidth='0.5' />
                    </svg>

                    {/* Discs */}
                    {discs.map((disc, idx) => (
                        <DiscCard
                            key={idx}
                            icon={disc.icon}
                            title={disc.title}
                            text={disc.text}
                            step={disc.step}
                            style={{
                                ...discPositions[idx],
                                position: 'absolute'
                            } as React.CSSProperties}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Areas;
