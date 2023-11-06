import React from 'react'
import styles from "@/styles/NewBanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


//
import HomeBannerSlider from './HomeBannerSlider';

const NewBanner = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <div className={styles.content}>
                                <p className={`${styles.just} text-center f-20 mb-lg-0`}>Top Mobile App Development Company</p>
                                <h1 className={`${styles.develop} text-center f-60 font-bold`}>Empowering Brands with Big Dreams and Innovative Visions</h1>
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

export default NewBanner