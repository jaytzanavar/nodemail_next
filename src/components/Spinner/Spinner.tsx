import React from 'react';
import styles from './Spinner.module.css';
import logo from '../../../public/logo.jpeg';

const Spinner = () => {
    return (

        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <circle className={styles.spin2} cx="400" cy="400" fill="none"
                r="177" stroke-width="7" stroke="#bab4bc"
                stroke-dasharray="696 1400"
                stroke-linecap="round" />

            <image
                xlinkHref={logo.src}
                x="20"
                y="20"
                width="70"
                height="70"
                transform="translate(350 350)"
                style={{ borderRadius: '50%' }}
            />
        </svg>

    );
};

export default Spinner;