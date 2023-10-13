import React from 'react'
import styles from '@/styles/Portal.module.css'


const Portal = (props) => {
    return (
        <>
            <section className={styles.portal}>{props.portal}</section>
        </>
    )
}

export default Portal