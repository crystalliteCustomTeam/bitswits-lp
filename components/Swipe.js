import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image


const Swipe = (props) => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.swipe}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            {props.title1}
                            {props.para1 &&
                                <p className='text-center'>{props.para1}</p>
                            }
                        </Col>
                    </Row>
                    <Row className='justify-content-between align-items-center mt-3'>
                        <Col lg={4}>
                            <div className={styles.swipeImg}>
                                <Image alt="bitswits" src={props.foldimg} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={styles.swipeTxt}>
                                {props.title}
                                <p className='black fontf font-medium line30'>
                                    {props.para}
                                </p>
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                {props.subtitle}

                                                {props.subpara &&
                                                    <p className='font14 black fontf font-medium line30'>
                                                        {props.subpara}
                                                    </p>
                                                }

                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                {props.subtitle2}
                                                <p className='font14 black fontf font-medium line30'>
                                                    {props.subpara2}
                                                </p>
                                            </div>
                                        </Col>
                                        <Col sm={5}>
                                            <Link className={`${styles.bttns1}`} href="#">
                                                Book a Call Today!
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Swipe