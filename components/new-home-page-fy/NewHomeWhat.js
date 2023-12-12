import React from 'react'
import Link from 'next/link';
import styles from "./NewHomeWhat.module.css";
import { Container, Row, Col } from 'react-bootstrap'


const NewHomeWhat = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <div className={styles.videobackground}>
                    <video autoPlay loop muted src='./center.mp4' className='w-100 h-100'></video>
                </div>
        
                <div className={styles.newHomeOvrly}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h2 className={`text-white f-60 font-bold ${styles.textPink}`}>What we do</h2>
                                <p className={`${styles.wid} f-20 text-white`}>Shaping a Smarter Tomorrow
                                    Through Technological Excellence.</p>
                                <p className={`${styles.width} font14`}>At Bitswits, we blend pioneering IT services and consulting with over a decade of expertise, helping businesses around the globe achieve their transformative goals.</p>
                                <div className={styles.sec_btn}>
                                    <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                        Get To Know Us
                                    </Link>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='mixColor5'></div>
            </section>
        </>
    )
}

export default NewHomeWhat