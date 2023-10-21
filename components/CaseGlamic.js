import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/CaseGlamic.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const CaseGlamic = (props) => {
    return (
        <>
            <section className={`${styles.glamic}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={6}>
                            <div className={styles.left}>
                                <h2>{props.title}</h2>
                                <p>{props.text1}</p>
                                <p>{props.text2}</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.right}>
                                <h3>{props.subtitle}</h3>
                                <p>{props.subtext}</p>
                                <div className={styles.caseBtn}>
                                    <Link href='#'>BOOK A CALL</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.SecImg}>
                                <Image src={props.foldImg} alt="bitswits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-between mt-md-5 pt-4'>
                        <Col lg={6}>
                            <div className={styles.leftText}>
                                <h3>{props.title2}</h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.rightText}>
                                <p>{props.text3}</p>
                                <p>{props.text4}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-between mt-3 mt-md-5'>
                        <Col lg={6}>
                            <div className={styles.leftText}>
                                <h3>{props.title3}</h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.rightText}>
                                <p>{props.text5}</p>
                                <p>{props.text6}</p>
                                <p>{props.text7}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseGlamic
