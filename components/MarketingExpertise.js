import React from 'react'
import styles from '@/styles/Marketingexpertise.module.css'


const MarketingExpertise = (props) => {
    return (

        <>
            <section className={`${styles.marketingExpertise} ${props.bgpost}`}>{props.data}</section>
        </>


    )
}

export default MarketingExpertise