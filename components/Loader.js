import React from 'react'
import styles from "@/styles/Loader.module.css";


const Loader = () => {
    return (
        <>
            <section className={styles.loader}>
                <video autoPlay loop muted src='./images/bitswitslogoanimation.mp4' className='w-50 h-50'></video>
            </section>
        </>
    )
}

export default Loader
