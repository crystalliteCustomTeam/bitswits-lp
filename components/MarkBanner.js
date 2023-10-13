import React from 'react'
import styles from '@/styles/MarkBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const MarkBanner = () => {
    return (
        <>
            <section className={styles.markBanner}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.heading}>
                                <h1 className='font80 black fontf font-bold'>
                                    <span className='font90 d-block'>MARK</span>
                                    PLACE
                                </h1>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className={styles.contnt}>
                                <h2 className='font65 white fontf font-bold line65'>
                                    A Real Estate App Instilling <br /> Confidence Among Users To <br /> Invest In Properties
                                </h2>
                                <p className='font16 white fontf font-medium line30 mt-3'>
                                    Mark Place has made a name for itself as one of Mississippi's top real estate networks, bringing together thousands of international buyers and sellers of real estate. For the past 8 years, they have offered competent real estate services. Brick Properties' team advises clients on the finest investment options, thoroughly researches lucrative investment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default MarkBanner