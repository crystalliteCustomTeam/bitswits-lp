import React from 'react'
import styles from '@/styles/Robust.module.css'


const Robust = (props) => {
    return (
        <>
            <section className={`${styles.robust}`}>
                {props.rebst}
            </section>
        </>
    )
}

export default Robust