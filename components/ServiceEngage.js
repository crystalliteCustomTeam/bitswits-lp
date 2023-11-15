import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServiceEngage.module.css";


const ServiceEngage = (props) => {

    return (
        <>
            <section className={`${styles.engage} ${styles[props.addClass]}`}>
                <Container>
                    <Row className={styles.forget}>
                        <Col xl={12}>
                            <p className='text-white f-20 font-bold text-center mb-0'>{props.subTitle}</p>
                            <h2>{props.title}</h2>
                        </Col>
                    </Row>

                    <Row className={` ${styles.cont} gx-3 `}>
                        <Col xl={4}>
                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image alt='BitsWits' quality={75} src={props.engIcon1} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>{props.heading1}</h3>
                                    <p>{props.text1}</p>
                                </div>
                            </div>
                            <div className={styles.longline2}>
                                <div className={styles.expertise}>
                                    <Image alt='BitsWits' quality={75} src={props.engIcon3} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                <h3>{props.heading3}</h3>
                                    <p>{props.text3}</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.offers}>
                                <Image alt='BitsWits' quality={75} src={props.main} className='img-fluid' />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={`${styles.longline3}`}>
                                <div className={styles.expertise1}>
                                    <Image alt='BitsWits' quality={75} src={props.engIcon2} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                <h3>{props.heading2}</h3>
                                    <p>{props.text2}</p>
                                </div>
                            </div>
                            <div className={`${styles.longline1}`}>
                                <div className={styles.expertise1}>
                                    <Image alt='BitsWits' quality={75} src={props.engIcon4} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                <h3>{props.heading4}</h3>
                                    <p>{props.text4}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceEngage