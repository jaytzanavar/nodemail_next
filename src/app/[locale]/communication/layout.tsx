import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Communication Damouli Law Firm",
    description: "The most important factor for our collaboration is communication , direct transparent and effective",
  };


const CommunicationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>{children}</main>
    )
}

export default CommunicationLayout