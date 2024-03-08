import React from 'react'
import Hero from '@/components/Hero/Hero'
import Areas from '@/components/Areas/Areas'

const AdvisoryPage = () => {
    const heroTitle = "Your Trusted Advocate Always"
    const heroSub = "Your Protector"
    const heroText = "While the yearly number of cases which we take totals to an insurmountable number, unparalleled by any other Athens law firm, our percentage of wins is record-breaking too… Just to drop some statistics here, in more than 9000 cases that we have ever taken on, a whopping 98% of those (which is 9800+) were the cases which we eventually won…"
    return (
        <div>
            <Hero heroTitle={heroTitle} heroSub={heroSub} heroText={heroText} linkEnabled={true} />
          
                <Areas cardStyle={"white"} />
          
        </div>
    )
}

export default AdvisoryPage