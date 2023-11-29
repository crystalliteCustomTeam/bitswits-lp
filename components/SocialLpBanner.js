import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/SocialLpBanner.module.css";
//
import BannerImage from "@/public/images/socialmedialp/banner.png"


const SocialLpBanner = (props) => {

    return (
        <>
            <section className={styles[props.newHomeBgprops]} >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.smTxt}>
                                <h3>Our Award-Winning</h3>
                                <h2>Social Media App Development</h2>
                                <p>Connecting Communities with Engaging Social Media Apps, <span>CRAFTED TO PERFECTION & DELIVERED WITH PRECISION</span></p>
                            </div>
                            <div className={styles.smImg}>
                                <Image alt='BitsWits' src={BannerImage} className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SocialLpBanner