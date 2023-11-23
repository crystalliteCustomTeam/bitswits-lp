import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm.module.css";
//
import arrow from '../public/newlppage/arrow.png'


const LpForm = (props) => {
    return (
        <>
            <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
                <Container className={styles.appios}>
                    <Row className='align-items-start'>
                        <Col lg={12}>
                            <div className={styles.make}>
                                <form className={styles.formsbanner}>
                                    <div className={`mb-lg-4 pb-1 text-center`}>
                                        <h4 className='font28 text-white font-bold'>Ready For Success?</h4>
                                        <h5 className='font20 font-bold text-white'>Schedule a complimentary strategy session now with our experienced product strategists.</h5>
                                    </div>
                                    <Row>
                                        <Col lg={3}>
                                            <div>
                                                <input type='text' className={styles.forminput} placeholder='Your Name' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='email' className={styles.forminput} placeholder='Email Address' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <input type='text' className={styles.forminput} placeholder='How can we help you?' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='align-items-end mt-3'>
                                        <Col lg={4}>
                                            <p className='font14 font-semibold fontf m-0 white'>
                                                We take your privacy seriously. Read our privacy
                                            </p>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={styles.menu}>
                                                <Link className={`${styles.book} ${styles.book2}`} href="#">
                                                    Avail My Free Session
                                                    <Image alt="BitsWits" src={arrow} className='img-fluid ms-2' />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default LpForm
