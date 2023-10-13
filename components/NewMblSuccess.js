import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/NewMblSuccess.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import team1 from '../public/newMobilePageImages/bg-f.png'


const Newsuccess = () => {


    return (
        <>

            <section className={styles.happens}>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                                <h5 className='grdiant'>Ready For Success?</h5>
                                <h2 className='f-80 font-bold white center mb-5'>Brace Yourself for What Happens Next</h2>
                            </div>
                        </Col>
                        <Col xl={12} className='mx-auto'>
                            <div className={styles.mainBox}>
                                <div className={styles.sucssBox}>
                                    <span className='f-60 font-bold grdiant mb-0'>01</span>
                                    <span className='font30 font-bold white mb-0'>Talk To Our Experts</span>
                                    <span className='font16 white'>Contact us without obligation by email or phone and secure your free consultation.</span>
                                    <Link href="#" className={styles.sucssBtn}>Connect Now!</Link>
                                </div>
                                <div className={`${styles.sucssBox} ${styles.box2}`}>
                                    <span className='f-60 font-bold grdiant mb-0'>02</span>
                                    <span className='font30 font-bold white mb-0'>Get A Quote</span>
                                    <span className='font16 white'>Get an exact cost breakdown structure of your app</span>
                                    <Link href="#" className={styles.sucssBtn}>Chat Now!</Link>
                                </div>
                                <div className={styles.sucssBox}>
                                    <span className='f-60 font-bold grdiant mb-0'>03</span>
                                    <span className='font30 font-bold white mb-0'>Build An MVP</span>
                                    <span className='font16 white'>Contact us without obligation by email or phone and secure your free consultation.</span>
                                    <Link href="#" className={styles.sucssBtn}>Call Now!</Link>
                                </div>
                                <Image quality={75} src={team1} alt='BitsWits' className={`${styles.befImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Newsuccess