import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewLpBanner.module.css";
//
import BannerImage from "@/public/newlppage/banner-img.png"

const NewLpBanner = () => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <p className={`${styles.just} f-20 mb-0 font-bold`}>Transform Your Business With Our Revolutionary</p>
                            <h3 className={`${styles.develop} f-50 font-bold my-1`}>Mobile Application <br /> Development Company!</h3>
                            <p className={`${styles.just} f-20 mb-0 font-bold`}>We Don't Just Create Apps; We Create Experiences</p>
                            <div className={styles.pont}>
                                <Link className={styles.book} href="#">GET FREE CONSULTATION</Link>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <Image quality={75} src={BannerImage} className={styles.secImage} alt='Bitswits' loading="eager" unoptimized={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpBanner
