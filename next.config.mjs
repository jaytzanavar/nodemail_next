/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            },
        ],
        domains: [""]
    }
};





export default withNextIntl(nextConfig);
