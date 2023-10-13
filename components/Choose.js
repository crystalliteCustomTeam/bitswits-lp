import React from 'react'
import styles from '@/styles/choose.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import insight1 from '../public/images/choose/1.png'
import insight2 from '../public/images/choose/2.png'
import insight3 from '../public/images/choose/3.png'
import insight4 from '../public/images/choose/4.png'
import insight5 from '../public/images/choose/5.png'
import insight6 from '../public/images/choose/6.png'
import Image from 'next/image'


const Choose = () => {




    return (
        <>

            <section className={styles.Offer}>

                <Container>
                    <Row>
                        <Col xl={12} className='mb-5'>
                            <h2 className='font50 font-bold center black'>Choose Us <span className='grdiant'>Because</span> </h2>
                            <p className='font18 font-bold center black'>We’re efficiently effective!</p>
                        </Col>
                    </Row>
                    <Row className='gy-5'>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight1} />
                                <h3 className='font16 black'>21+ years experience in the industry</h3>
                            </div>
                        </Col>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight2}  />
                                <h3 className='font16 black'>Streamlined Communication System</h3>
                            </div>
                        </Col>
                       
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight3} />
                                <h3 className='font16 black'>Proven Methodologies</h3>
                            </div>
                        </Col>
                        <hr></hr>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight4} />
                                <h3 className='font16 black'>Competitive Pricing</h3>
                            </div>
                        </Col>
                     
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight5} />
                                <h3 className='font16 black'>Comprehensive Reporting</h3>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight6} />
                                <h3 className='font16 black'>Best-in-industry quotations</h3>
                            </div>
                        </Col>
                        <hr></hr>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight4} />
                                <h3 className='font16 black'>Hire from a pool of highly Proficient SEO Experts</h3>
                            </div>
                        </Col>
                     
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight5} />
                                <h3 className='font16 black'>Free Website Analysis</h3>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight6} />
                                <h3 className='font16 black'>White Hat SEO & Quality Backlinks</h3>
                            </div>
                        </Col>

                        <hr></hr>

                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight4} />
                                <h3 className='font16 black'>Improved Rankings & Traffic</h3>
                            </div>
                        </Col>
                     
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight5} />
                                <h3 className='font16 black'>Branding & Reputation Management</h3>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image quality={75} src={insight6} />
                                <h3 className='font16 black'>Incresed ROI & Sales Volume</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </section>

        </>
    )
}

export default Choose