import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Careers — Damouli Law Firm",
    description: "Join Damouli Law Firm. Explore our open positions and build your legal career with our team.",
};

const CareersLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>{children}</main>
    )
}

export default CareersLayout
