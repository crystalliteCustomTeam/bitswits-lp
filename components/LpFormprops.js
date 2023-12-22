import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/LpForm.module.css";


const LpFormprops = (props) => {

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

            {props.data ?

                <section className={styles.datapost}>
                    <Container className={styles.appios}>
                        <Row className='gx-3 gy-3'>
                            {props.data.map((item, index) => (
                                <Col lg={3}>

                                    <div className={styles.deve} key={index}>
                                        <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                        <div>
                                            <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                            <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                :
                ''
            }

            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>

                    <div className={styles.para}>
                        <p className='mb-0'>
                            {props.heading}
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpFormprops
