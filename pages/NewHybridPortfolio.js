import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewHybridPortfolio.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import folio1 from "@/public/hybridmbldevelopment/folio1.png"
import folio2 from "@/public/hybridmbldevelopment/folio2.png"
import folio3 from "@/public/hybridmbldevelopment/folio3.png"
import folio4 from "@/public/hybridmbldevelopment/folio4.png"
import folio5 from "@/public/hybridmbldevelopment/folio5.png"
import folio6 from "@/public/hybridmbldevelopment/folio6.png"



const NewHybridPortfolio = () => {



    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center`}>Portfolio</p>
                            <h1 className='text-white f-55 font-bold text-center pb-5'>
                                Showcasing Our Creative Vision
                            </h1>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox1}`}>
                                <Image quality={75} src={folio1} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Bliss Travel Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox2}`}>
                                <Image quality={75} src={folio2} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Find Food Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox3}`}>
                                <Image quality={75} src={folio3} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Germ Guard Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox4}`}>
                                <Image quality={75} src={folio6} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Soul Sound Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox5}`}>
                                <Image quality={75} src={folio4} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>eride Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.poliBox} ${styles.poliBox6}`}>
                                <Image quality={75} src={folio5} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>PRO Health Case Study</span>
                                    <Link href="#" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewHybridPortfolio