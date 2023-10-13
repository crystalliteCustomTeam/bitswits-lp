import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Expertise.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
//images
import foldImg from '../public/images/BlockchainDvelpment/expertise/foldimg.png'
import human from '../public/images/BlockchainDvelpment/expertise/human-res-indus.png'
import food from '../public/images/BlockchainDvelpment/expertise/f-b-indus.png'
import health from '../public/images/BlockchainDvelpment/expertise/health-tech-indus.png'
import social from '../public/images/BlockchainDvelpment/expertise/social-network-indus.png'

const Expertise = () => {
    return (
        <>
            <section className={`${styles.expertise}`}>
                <Container>
                    <Row className={styles.epxRow}>
                        <Col lg={6}>
                            <div className={`${styles.industxt} industxt`}>
                                <h5 className='font21 black fontf font-bold line30 mb-3'>
                                    Our Expertise Spread Across Every Niche
                                </h5>
                                <p className='font16 lscolor fontf font-medium mb-4'>
                                    We have expertise in providing blockchain development solutions using cost-efficient tools and secure methodologies.
                                </p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Image quality={75} src={human} alt='Bitswits' className='img-fluid' />
                                            <span>Human Resources</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Cyber Attack prevention tactics enabled software to safeguard the data of your employees in the HRM software.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <Image quality={75} src={food} alt='Bitswits' className='img-fluid' />
                                            <span>Food & Beverages</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Establishing transparency and ensuring quality tested products to elevate your brand’s loyalty.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <Image quality={75} src={health} alt='Bitswits' className='img-fluid' />
                                            <span>Health-Tech</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            SafeGuard your data using blockchain technology that provides efficient decentralized storing features.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <Image quality={75} src={social} alt='Bitswits' className='img-fluid' />
                                            <span>Social Network</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Monetize your apps and engage new users using blockchain technology without worry about any sorts of data threats.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.indusImgbox}>
                                <Image quality={75} src={foldImg} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Expertise