"use client"
import { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {


            event.preventDefault();
            const delta = Math.max(-1, Math.min(1, event.deltaY));
            const scrollableElement = document.documentElement;


            if (scrollableElement) {

                const targetScroll = scrollableElement.scrollTop + delta * 650;

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

    return null;
};

export default SmoothScroll;