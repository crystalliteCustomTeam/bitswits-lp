import React from 'react'
import styles from '@/styles/EcomGrowth.module.css'


const EcomGrowth = (props) => {
    return (
        <>
            <section className={styles.busniessgroth}>{props.growth}</section>
        </>
    )
}

export default EcomGrowth