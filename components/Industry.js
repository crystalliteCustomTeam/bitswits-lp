import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Industry.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
//images
import foldImg from '../public/images/BlockchainDvelpment/industry/foldimg.png'
import game from '../public/images/BlockchainDvelpment/industry/gaming.png'
import fantsy from '../public/images/BlockchainDvelpment/industry/fantasy-indus.png'
import edTech from '../public/images/BlockchainDvelpment/industry/Ed-Tech.png'
import finTech from '../public/images/BlockchainDvelpment/industry/fintech-indus.png'

const Industry = () => {
    return (
        <>
            <section className={`${styles.industry}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='text-center mb-5'>
                                <h2 className='font40 black fontf font-bold line60'>
                                    We are Successfully Serving Every Industry.
                                </h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.indusImgbox}>
                                <Image quality={75} src={foldImg} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.industxt} industxt`}>
                                <h5 className='font21 black fontf font-bold line30 mb-3'>
                                    Delivering Excellence in Various Industry
                                </h5>
                                <p className='font16 lscolor fontf font-medium mb-4'>
                                    Serving every industry niches by incorporating accelerated digital transformation and top-notch custom blockchain solutions
                                </p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Image quality={75} src={game} alt='Bitswits' className='img-fluid' />
                                            <span>Gaming</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Build a scalining entertainment architecture and introduce a play to ear model for your idea now made easy.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <Image quality={75} src={fantsy} alt='Bitswits' className='img-fluid' />
                                            <span>Fantasy</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Secure payment routes and data flow networks that validates every single transaction before passing through the user and sources.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <Image quality={75} src={edTech} alt='Bitswits' className='img-fluid' />
                                            <span>Ed-Tech</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Enable your fundamental pillar of the education system using blockchain technology which will secure features.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <Image quality={75} src={finTech} alt='Bitswits' className='img-fluid' />
                                            <span>FinTech</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Build an entire ecosystem based on ‘Trust Economy’ to introduce reliability, scalability, and security in your business operations.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Industry