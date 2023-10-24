import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseServices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import tick from '../public/images/case-monkey/tick.png'


const CaseServices = (props) => {
    return (
        <>
            <section className={`${styles.services}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <h3>{props.title}</h3>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text1}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text2}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text3}</span>
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className='mt-lg-5 mt-3 pt-3'>
                                <Image src={props.servImg} alt="bitswits" className={`${styles.secImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseServices