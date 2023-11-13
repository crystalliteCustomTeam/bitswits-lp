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
                            {props.textArray1.map((item, index) => (
                                <div className={styles.left} key={index}>
                                    <h2>{item.title}</h2>
                                    {item.text.map((text, pIndex) => (
                                        <p key={pIndex}>{text}</p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={5}>
                            {props.textArray2.map((item, index) => (
                                <div className={styles.right} key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <div className={styles.caseBtn}>
                                        <Link href='tel:(833) 500-6007'>BOOK A CALL</Link>
                                    </div>
                                </div>
                            ))}
                        </Col>
                        <Col lg={12}>
                            <div className={styles.SecImg}>
                                <Image quality={90} src={props.foldImg} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-between mt-md-5 pt-4'>
                        <Col lg={12}>
                            {props.textArray3.map((item, index) => (
                                <div className={styles.leftText} key={index}>
                                    <h3>{item.title}</h3>
                                    {item.text.map((para, pIndex) => (
                                        <p key={pIndex}>{para}</p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseGlamic;
