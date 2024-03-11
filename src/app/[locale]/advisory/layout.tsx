import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Advisory Damouli Law Firm",
    description: "Our advisory is top level",
  };

const AdvisoryLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>{children}</main>
    )
}

export default AdvisoryLayout
