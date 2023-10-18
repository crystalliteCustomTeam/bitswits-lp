import React from 'react'
import Image from 'next/image'
import styles from '@/styles/HealthBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg00 from '../public/images/case-health/mbl-img.png'

const HealthBanner = () => {
    return (
        <>
            <section className={styles.healthBanner}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.heading}>
                                <h1 className='black fontf font-bold'>
                                    PRO <br />HEALTH
                                </h1>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                <h2 className='liBlack fontf font-bold'>
                                    A Pharmacy Delivery App That Brings The Medicine <br /> At Your Door And Transforms Healthcare In Every <br /> Direction!”
                                </h2>
                                <p className='font16 liBlack fontf font-medium line30 mt-3'>
                                    Pharmacies are an indispensable constituent of any healthcare system, ensuring patients have access to the needed medications. In contemporary times, there has been a dramatic growth in demand for healthcare apps; mobile applications designed specifically for this sector are an industry trend on the rise. The amazing portfolio of BitsWits convinced Pro Health, a pharmaceutical company, to use our specialized pharma application development services to accomplish its objective.
                                </p>
                                <div>
                                    <Image  alt="bitswits"     src={foldImg00} className={`${styles.mblImg} img-fluid`}></Image>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HealthBanner