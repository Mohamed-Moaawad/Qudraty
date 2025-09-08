import { FeatureCardType } from '@/types'
import React from 'react'

const FeatureCard = ({ icon, iconColor, title, description }: FeatureCardType) => {
    return (
        <div className="feature-card rounded-xl py-10 px-5">
            <div className="icon flex justify-center items-center rounded-md" style={{ backgroundColor: iconColor }}>
                {icon}
            </div>
            <h5 className='my-3'>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default FeatureCard