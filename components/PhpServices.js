import React from 'react'
import styles from '@/styles/PhpServices.module.css'


const PhpServices = (props) => {
    return (
        <>
            <section className={styles.phpServices}>{props.servcs}</section>
        </>
    )
}

export default PhpServices