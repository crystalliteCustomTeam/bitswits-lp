import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Loader.module.css";
//
import loader from '../public/images/icons/loader.png';


const Loader = () => {
    return (
        <>
            <section className={styles.loader}>
                {/* <Image quality={70} src={loader} width={250} height={250} alt="BitsWits" className="img-fluid" loading='lazy' /> */}
                <video autoPlay loop muted src='./images/bitswitslogoanimation.mp4' className='w-100 h-100'></video>
            </section>
        </>
    )
}

export default Loader
