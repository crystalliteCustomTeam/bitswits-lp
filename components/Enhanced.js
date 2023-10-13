import React from 'react'
import styles from '@/styles/Enhanced.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'



const Enhanced = (props) => {
    return (
        <>
            <section className={`${styles.bgblack} ${styles.benefits}`}>
                <Container>
                    <Row>
                        <Col md={12} className='pb-5'>
                            <h3 className='white'> {props.subtitle} </h3>
                            <h2 className={`${styles.ios} font50 f-playfair f-700 white t-center lheight1` } > {props.title} </h2>

                            {props.textnew && 
                            
                            <p className='f-16 f-500 white t-center'> {props.textnew} </p>
                            
                            }
                        </Col>
                    </Row>
                    <Row className='appfind'>
                        <Col md={2}>
                            <div className={styles.maincard}>
                                <div className={styles.cardbody}>
                                    <Image quality={75} src={props.lop1}
                                        alt="bitswits" className={styles.mapp} />
                                    <h4 className={styles.cardhd}> {props.titl1} </h4>
                                    <p> {props.text1} </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className={styles.maincard}>
                                <div className={styles.cardbody}>
                                    <Image quality={75} src={props.lop2}
                                        alt="bitswits" />
                                    <h4 className={styles.cardhd}> {props.titl2} </h4>
                                    <p> {props.text2} </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className={styles.maincard}>
                                <div className={styles.cardbody}>
                                    <Image quality={75} src={props.lop3}
                                        alt="bitswits" />
                                    <h4 className={styles.cardhd}>{props.titl3} </h4>
                                    <p>  {props.text3} </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className={styles.maincard}>
                                <div className={styles.cardbody}>
                                    <Image quality={75} src={props.lop4}
                                        alt="bitswits" />
                                    <h4 className={styles.cardhd}> {props.titl4} </h4>
                                    <p>  {props.text4} </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className={styles.maincard}>
                                <div className={styles.cardbody}>
                                    <Image quality={75} src={props.lop5}
                                        alt="bitswits" />
                                    <h4 className={styles.cardhd}> {props.titl5} </h4>
                                    <p >  {props.text5} </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className={styles.maincard}>
                                <div className={styles.cardbody}>
                                    <Image quality={75} src={props.lop6}
                                        alt="bitswits" />
                                    <h4 className={styles.cardhd}> {props.titl6} </h4>
                                    <p > {props.text6} </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={styles.mobileimg} >
                    <Image quality={75} src={props.lop7} alt="bitswits" className="img-fluid"  />
                </div>
            </section>



        </>
    )
}

export default Enhanced