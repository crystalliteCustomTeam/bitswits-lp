import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/NewCaseGlamic.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const NewCaseGlamic = (props) => {
    return (
        <>
            <section className={`${styles.glamic}`}>
                <Container>
                    <Row className='justify-content-between gy-5'>
                        <Col lg={12}>
                            {props.textArray1.map((item, index) => (
                                <div className={styles.left} key={index}>
                                    <h2>{item.title}</h2>
                                    {item.text.map((text, pIndex) => (
                                        <p key={pIndex}>{text}</p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={12} className='pt-4'>
                            {props.textArray2.map((item, index) => (
                                <div className={styles.right} key={index}>
                                    <Row className='align-items-center justify-content-between'>
                                        <Col lg={7}>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </Col>
                                        <Col lg={4}>
                                            <div className={styles.caseBtn}>
                                                <Link href='tel:(833) 500-6007'>BOOK A CALL</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Col>
                        <Col lg={12}>
                            <div className={styles.SecImg}>
                                <Image quality={90} src={props.slide1} alt="BitsWits" className={`img-fluid`} />
                                <Image quality={90} src={props.slide2} alt="BitsWits" className={`img-fluid`} />
                                <Image quality={90} src={props.slide3} alt="BitsWits" className={`img-fluid`} />
                                <Image quality={90} src={props.slide4} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                        <Col lg={11} className='mx-auto'>
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

export default NewCaseGlamic;