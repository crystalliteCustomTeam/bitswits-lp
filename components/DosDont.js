import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/DosDont.module.css'
//images
import icon1 from '../public/images/startup/do.png'
import icon2 from '../public/images/startup/ddo.png'


const DosDont = () => {
    return (
        <>
            <section className={`${styles.dosDont}`}>
                <Container>
                    <Row>
                        <Col lg={12} className='mx-auto'>
                            <h2 className='font40 black fontf font-bold line60 black text-center mb-5 pb-3'>
                                Start-up Team Do’s and Don’ts
                            </h2>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Do
                                    </h5>
                                    <p>
                                        Take advantage of a cheaper cost base but with the same levels of experience and customer care
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Do
                                    </h5>
                                    <p>
                                        Rapidly scale up your Development Team and gain access to multiple skill-sets and years of experience
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Do
                                    </h5>
                                    <p>
                                        Keep full control of the development process
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Do
                                    </h5>
                                    <p>
                                        Take advantage of the latest technologies such as Big Data and Internet of Things
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard} ${styles.dont}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Don't
                                    </h5>
                                    <p>
                                        Waste time and resources worrying about recruitment and HR
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard} ${styles.dont}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Don't
                                    </h5>
                                    <p>
                                        Miss out on flexible resources, inexpensive 24/7 support options
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard} ${styles.dont}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Don't
                                    </h5>
                                    <p>
                                        Spend time thinking about the right technology choices as we can walk you through the options
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={styles.soluCol}>
                            <div className={`${styles.soluCard} ${styles.dont}`}>
                                <div>
                                    <div className={`${styles.imgBox}`}>
                                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 fontf font-medium my-3'>
                                        Don't
                                    </h5>
                                    <p>
                                        Think this is not for you! We prioritise communications and work with an Agile methodology to be as flexible as possible
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DosDont