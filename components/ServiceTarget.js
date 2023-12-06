import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import styles from "@/styles/ServiceTarget.module.css";
//
import home_btn1 from "@/public/shark/home_btn.png"


const ServiceTarget = (props) => {
    return (
        <>
            <section className={`${styles.tesla} ${styles[props.addClass]}`}>
                <Container>
                    <Row className={styles.after}>
                        <Col xl={12}>
                            <h3>{props.subTitle}</h3>
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                        </Col>
                    </Row>
                    <Row className='gy-2 gx-0'>
                        <Col xl={6}>
                            <div className={styles.desigh}>
                                <h3>{props.heading1}</h3>
                                <p>{props.content1}</p>
                                <Link href="#">
                                    Get to know us
                                    <Image quality={75} alt='BitsWits' src={home_btn1} className='img-fluid' />
                                </Link>
                            </div>
                        </Col>
                        <Col xl={6}></Col>
                        <Col xl={6}></Col>
                        <Col xl={6}>
                            <div className={styles.desigh}>
                                <h3>{props.heading2}</h3>
                                <p>{props.content2}</p>
                                <Link href="#">
                                    Get to know us
                                    <Image quality={75} alt='BitsWits' src={home_btn1} className='img-fluid' />
                                </Link>
                            </div>
                        </Col>
                        <Col xl={6} className='mt-4 mt-lg-0'>
                            <div className={styles.desigh}>
                                <h3>{props.heading3}</h3>
                                <p>{props.content3}</p>
                                <Link href="#">
                                    Get to know us
                                    <Image quality={75} alt='BitsWits' src={home_btn1} className='img-fluid' />
                                </Link>
                            </div>
                        </Col>
                        <Col xl={6}></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceTarget
