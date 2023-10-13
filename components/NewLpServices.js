import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewLpServices.module.css";
//
import Services1 from "@/public/newlppage/services1.png";
import serviceArrow from "@/public/newlppage/service_arrow.png"


const NewLpServices = () => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <p className={`${styles.just} f-20 mb-0 font-bold text-center`}>SERVICES</p>
                            <h3 className={`${styles.develop} f-50 font-bold mb-3 text-center`}>Mobile App Development Services</h3>
                            <p className={`${styles.just} f-15 mb-0 text-center mb-4`}>Revolutionize your business with a mobile app development firm dedicated to providing you with the most innovative apps. Take <br></br> advantage of their extensive offerings for essential platforms like iOS, and Android for maximum impact.</p>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4'>
                            <div className={styles.card}>
                                <Image src={Services1} alt='Services1 ' className='mx-auto d-block mb-2' />
                                <h4 className='f-22 font-bold text-center mb-2'>Android Application <br></br> Development</h4>
                                <p className='f-14 text-center'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>

                                <div className={styles.btn}>
                                    <Link href='javascript:;' className='font-bold f-17'>
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4'>
                            <div className={styles.card}>
                                <Image src={Services1} alt='Services1 ' className='mx-auto d-block mb-2' />
                                <h4 className='f-22 font-bold text-center mb-2'>Android Application <br></br> Development</h4>
                                <p className='f-14 text-center'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>

                                <div className={styles.btn}>
                                    <Link href='javascript:;' className='font-bold f-17'>
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4'>
                            <div className={styles.card}>
                                <Image src={Services1} alt='Services1 ' className='mx-auto d-block mb-2' />
                                <h4 className='f-22 font-bold text-center mb-2'>Android Application <br></br> Development</h4>
                                <p className='f-14 text-center'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>

                                <div className={styles.btn}>
                                    <Link href='javascript:;' className='font-bold f-17'>
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4'>
                            <div className={styles.card}>
                                <Image src={Services1} alt='Services1 ' className='mx-auto d-block mb-2' />
                                <h4 className='f-22 font-bold text-center mb-2'>Android Application <br></br> Development</h4>
                                <p className='f-14 text-center'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>

                                <div className={styles.btn}>
                                    <Link href='javascript:;' className='font-bold f-17'>
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4'>
                            <div className={styles.card}>
                                <Image src={Services1} alt='Services1 ' className='mx-auto d-block mb-2' />
                                <h4 className='f-22 font-bold text-center mb-2'>Android Application <br></br> Development</h4>
                                <p className='f-14 text-center'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>

                                <div className={styles.btn}>
                                    <Link href='javascript:;' className='font-bold f-17'>
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4'>
                            <div className={styles.card}>
                                <Image src={Services1} alt='Services1 ' className='mx-auto d-block mb-2' />
                                <h4 className='f-22 font-bold text-center mb-2'>Android Application <br></br> Development</h4>
                                <p className='f-14 text-center'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>

                                <div className={styles.btn}>
                                    <Link href='javascript:;' className='font-bold f-17'>
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <div class={styles.pont}>
                            <Link class={styles.book} href="javascript:;">VIEW ALL</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpServices
