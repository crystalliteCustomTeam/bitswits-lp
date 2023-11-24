import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm6.module.css";


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
                                        <h4 className='font50 text-white font-bold mb-3'>Turn Your App Idea Into An App</h4>
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
                                                <Link className={`${styles.book}`} href="#">Submit</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>

                    <div className={styles.para}>
                        <p className='mb-0'>
                            Welcome to Bitswits, where app creation meets innovation. Whether it's 'Creating an App,' 'Making an App,' or diving into 'iOS' or 'Android Application' development, we're your team. Let's turn your vision into reality with our leading-edge app development expertise.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpForm
