import React from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from "@/styles/HomeBanner.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import HomeBannerSlider from './HomeBannerSlider';


const HomeBanner = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <div className={styles.content}>
                                <p className={`${styles.just} text-center font-bold f-20 mb-lg-0`}>Top Mobile App Development Company</p>
                                <h1 className={`${styles.develop} text-center font55 font-bold`}>Empowering Brands with Big Dreams and Innovative Visions</h1>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href="tel:+18335006007">LET'S CONNECT</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>

            <HomeBannerSlider />

        </>
    )
}

export default HomeBanner