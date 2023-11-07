import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/benefits.module.css'


const Benefits = () => {
    return (
        <>
            <section className={styles.benefits}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='font100 font-bold ecommercegredient'>Benefits</h2>
                            <p className='font20 text-black font-medium mb-3 ms-lg-3'>Of hiring the best eCommerce app builders in US;</p>

                            <div className={styles.lists}>
                                <div className={styles.itemsOne}>
                                    <h5 className='font24 font-bold text-center'>Increased <br />
                                        Revenue</h5>
                                    <p className='font16 '>Boosts financial growth</p>
                                </div>
                                <div className={styles.itemsSecond}>
                                    <h5 className='font24 font-bold text-center'>Enhanced Customer <br />
                                        Experience</h5>
                                    <p className='font16 '>Increases brand loyalty</p>
                                </div>
                                <div className={styles.itemsThree}>
                                    <h5 className='font24 font-bold text-center'>Organized <br />
                                        Operations</h5>
                                    <p className='font16 '>Improves Efficiency and Productivity</p>
                                </div>
                                <div className={styles.itemsfour}>
                                    <h5 className='font24 font-bold text-center'>Higher Customer <br />
                                        Retention</h5>
                                    <p className='font16 '>Ensures long-term relationships</p>
                                </div>
                                <div className={styles.itemsfive}>
                                    <h5 className='font24 font-bold text-center'>Data-Driven <br />
                                        Insights</h5>
                                    <p className='font16 '>Drives informed business decisions</p>
                                </div>
                                <div className={styles.itemsSix}>
                                    <h5 className='font24 font-bold text-center'>Higher Conversion <br />
                                        Rate</h5>
                                    <p className='font16 '>Maximizes sales performance</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Benefits