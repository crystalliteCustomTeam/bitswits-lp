import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Altruist.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
//images
import foldImg from '../public/images/BlockchainDvelpment/altruist/foldimg.png'
import supply from '../public/images/BlockchainDvelpment/altruist/suppliy-chain-indus.png'
import demand from '../public/images/BlockchainDvelpment/altruist/on-demand-indus.png'
import conglomerate from '../public/images/BlockchainDvelpment/altruist/conglomerate-indus.png'
import industries from '../public/images/BlockchainDvelpment/altruist/shopping.png'

const Altruist = () => {
    return (
        <>
            <section className={`${styles.altruist}`}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.indusImgbox}>
                                <Image quality={75} src={foldImg} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.industxt} industxt`}>
                                <h5 className='font21 black fontf font-bold line30 mb-3'>
                                    An Altruist in Developing Businesses.
                                </h5>
                                <p className='font16 lscolor fontf font-medium mb-4'>
                                    In this rapidly evolving tech-enabled world we want to become a contributor introducing sustainable blockchain ecosystems.
                                </p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Image quality={75} src={supply} alt='Bitswits' className='img-fluid' />
                                            <span>SupplyChain</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Smart documentation process and implementation of blockchain allows you to achieve complete transparency.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <Image quality={75} src={demand} alt='Bitswits' className='img-fluid' />
                                            <span>On-Demand</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Any software that needs rigorous traceability and secure transactions can use scalable blockchain solutions.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <Image quality={75} src={conglomerate} alt='Bitswits' className='img-fluid' />
                                            <span>Conglomerate</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Reducing compliance cost and achieving high standard transparency in the very process to help you grow in the market.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <Image quality={75} src={industries} alt='Bitswits' className='img-fluid' />
                                            <span>Other-Industries</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Multi-step authentication and the complexity in codes allow you to be worry free even handling sugaring amounts of data.
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

export default Altruist