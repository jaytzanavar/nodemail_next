import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Damouli Law Firm Responsibilities",
    description: "Damouli law firm is a law firm that reasures the client with its success story",
  };

const ResponsibilitiesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>{children}</main>
    )
}

export default ResponsibilitiesLayout