import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm.module.css";


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
                                        <h4 className='font50 text-white font-bold mb-3'>Let's Talk Apps. Reserve A Spot! </h4>
                                        <p className='font18 font-medium text-white mb-3'>Schedule A Complimentary Strategy Session Now With Our Experienced Product Strategists.</p>
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
                            Welcome to our world of innovative app creation. At BitsWits, we don't just create a mobile app, we transform your vision into a digital masterpiece. With a blend of creativity and technical skill, we're recognized as the best app making company dedicated to elevating your business.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpForm
