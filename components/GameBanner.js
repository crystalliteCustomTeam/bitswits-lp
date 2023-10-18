import React from 'react'
import Image from 'next/image'
import styles from '@/styles/GameBanner.module.css'
//images
import foldImg00 from '../public/images/case-game/banImg.png'


const GameBanner = (props) => {
    return (
        <>
            <section className={`${styles.game} contpost`}>
                <div className={styles.bnrImg}>
                    <Image
                        alt="bitswits"
                        src={foldImg00}
                        className={`${styles.banImg} img-fluid`}>
                    </Image>
                </div>
            </section>
        </>
    )
}

export default GameBanner