import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import exStyle from '@/styles/Experienced.module.css'


const Approach = (props) => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.ahead}`}>
                <Container>
                    <Row className='rowGap'>
                        <Col lg={7}>
                            <div className={styles.aheadTxt}>
                                {props.title}
                                <p className='black fontf font-medium line30'>
                                    {props.para}
                                </p>
                                <p className='black fontf font-medium line30'>
                                    {props.para2}
                                </p>
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                {props.subtitle}
                                                <p className='font14 black fontf font-medium line30'>
                                                    {props.subpara}
                                                </p>
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
                                            <Link className={`${styles.bttns1} mt-3`} href="#">
                                                Call Us Now!
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.aheadImg}>
                                <Image  alt="bitswits"     src={props.ahead}  className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Approach