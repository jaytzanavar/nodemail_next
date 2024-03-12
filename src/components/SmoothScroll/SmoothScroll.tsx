"use client"
import { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            console.log('event', event.deltaY);

            event.preventDefault();
            const delta = Math.max(-1, Math.min(1, event.deltaY));
            const scrollableElement = document.documentElement;
            console.log('section.scrollTop', scrollableElement.scrollTop);

            if (scrollableElement) {
                console.log('I am scrolling', section);
                const targetScroll = scrollableElement.scrollTop + delta * 300;
                console.log('tg scroll', targetScroll);
                scrollableElement.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            }
        };

        const section = document.querySelector('section');
        if (section) {
            section.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (section) {
                section.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);
    console.log('SMOOTH SCROLL');
    return null;
};

export default SmoothScroll;