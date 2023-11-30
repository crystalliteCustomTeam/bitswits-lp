import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/SocialLpBanner.module.css";


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
                                <video autoPlay loop muted src='./images/socialmedialp/banner.mp4' className={styles.BanVideo}></video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SocialLpBanner