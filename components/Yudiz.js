import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Yudiz.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import banner from '../public/images/BlockchainDvelpment/yudiz/banner.png'
import shape from '../public/images/BlockchainDvelpment/yudiz/shape.png'
import arrow from '../public/images/BlockchainDvelpment/yudiz/white-arrow.svg'

const Yudiz = () => {
    return (
        <>
            <section className={`${styles.yudiz}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.indus}>
                                <div className={styles.imgBox}>
                                    <Image quality={75} src={banner} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className={styles.cntntBox}>
                                    <div className={styles.left}>
                                        <h5 className='font20 black fontf font-bold line30 mb-3'>
                                            Why Work With Bitswits ?
                                        </h5>
                                        <p className='font16 black fontf font-regular line30'>
                                            We have decades of experience in assisting clients with accelerated digital transformations. Hire skilled blockchain developers who promise a thorough understanding of the client's project journey.
                                        </p>
                                        <ul className={styles.list}>
                                            <li>Top 3% Talent</li>
                                            <li>Defined Workflow</li>
                                            <li>Systemized Operation</li>
                                            <li>Shared Knowledge</li>
                                            <li>Customer-Centric Approach</li>
                                            <li>Effective Communication</li>
                                        </ul>
                                    </div>
                                    <div className={styles.right}>
                                        <Image quality={75} src={shape} alt='Bitswits' className='img-fluid' />
                                        <div className={styles.arrowBtn}>
                                            <Link href="#">
                                                <Image className="img-fluid" src={arrow} alt="BitsWits" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Yudiz