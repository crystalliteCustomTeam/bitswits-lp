import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Streamlining.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import research from '../public/images/BlockchainDvelpment/streamlining/research.png'
import design from '../public/images/BlockchainDvelpment/streamlining/design.png'
import product from '../public/images/BlockchainDvelpment/streamlining/product.png'
import support from '../public/images/BlockchainDvelpment/streamlining/support.png'

const Streamlining = () => {
    return (
        <>
            <section className={`${styles.streamlining}`}>
                <Container className={styles.myContainer}>
                    <Row className={styles.strmRow}>
                        <Col lg={12}>
                            <div className={styles.indus}>
                                <h2 className='font40 black fontf font-bold line60 mb-0 mb-md-5'>
                                    Streamlining the Development Journey
                                </h2>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.cardbox}>
                                <Image quality={75} src={research} alt='Bitswits' className='img-fluid' />
                                <h5 className='font20 black fontf font-bold line30 my-2'>
                                    Research and Idea Generation
                                </h5>
                                <p className='font16 lscolor fontf font-medium'>
                                    Achieving perfection requires a continual process of research and innovation that would help us to address the demands of our clients intelligibly.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.cardbox}>
                                <Image quality={75} src={design} alt='Bitswits' className='img-fluid' />
                                <h5 className='font20 black fontf font-bold line30 my-2'>
                                    Innovation and Design
                                </h5>
                                <p className='font16 lscolor fontf font-medium'>
                                    Helping our clients to carefully curate through the best design and innovation possibilities elevating their market occupancy.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.cardbox}>
                                <Image quality={75} src={product} alt='Bitswits' className='img-fluid' />
                                <h5 className='font20 black fontf font-bold line30 my-2'>
                                    Full-Cycle Product Development
                                </h5>
                                <p className='font16 lscolor fontf font-medium'>
                                    A 360 degree service offering that envelopes each and every phase of development integrating an agile methodology for enhanced progress.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.cardbox}>
                                <Image quality={75} src={support} alt='Bitswits' className='img-fluid' />
                                <h5 className='font20 black fontf font-bold line30 my-2'>
                                    Product Growth And Support
                                </h5>
                                <p className='font16 lscolor fontf font-medium'>
                                    Assisting our clients to recognize the strong points of the solutions and resolving every single inaccuracy without any delay for greater growth.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Streamlining