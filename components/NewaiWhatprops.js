import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMblWhat.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import WhatImage from "@/public/images/aipost/what_Image.png"
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"

const NewaiWhat = (props) => {

    return (
        <>
            <section className={styles.newHomeBg}>
                <div className={styles.mixColor1}></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='text-white f-60 font-bold'> {props.title} </h1>
                            <p className={`${styles.wid} f-20 text-white`}>
                                {props.subtitle}
                            </p>
                            <p className={`${styles.width} font14`}>
                                {props.para}
                            </p>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    {props.btn1}
                                    <span>
                                        <Image quality={75} alt='Bitswits' src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className='sec_image text-center pt-5'>
                    <Image quality={75} alt='Bitswits' src={WhatImage} className={styles.secImage} />
                </div>
                <div className={styles.mixColor2}></div>
            </section>
        </>
    )
}

export default NewaiWhat