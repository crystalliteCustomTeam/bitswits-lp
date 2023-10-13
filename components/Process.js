import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Process.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import icon1 from '../public/images/BlockchainDvelpment/process/research-plan-ic.png'
import icon2 from '../public/images/BlockchainDvelpment/process/code-ic.png'
import icon3 from '../public/images/BlockchainDvelpment/process/build-ic.png'
import icon4 from '../public/images/BlockchainDvelpment/process/monitor-process.png'
import icon5 from '../public/images/BlockchainDvelpment/process/test-ic.png'
import icon6 from '../public/images/BlockchainDvelpment/process/release-ic.png'
import icon7 from '../public/images/BlockchainDvelpment/process/deploy-ic.png'
import icon8 from '../public/images/BlockchainDvelpment/process/operate-ic.png'

const Process = () => {
    return (
        <>
            <section className={`${styles.process}`}>
                <Container>
                    <div className={styles.procesHead}>
                        <h3>
                            Our Business Process
                        </h3>
                    </div>
                    <Row className={styles.procesRow}>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon1} alt="Bitswits" className='img-fluid' />
                                <h5>Research & Plan</h5>
                                <p>Perform solution specific research and draft a plan accordingly.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon2} alt="Bitswits" className='img-fluid' />
                                <h5>Code</h5>
                                <p>Utilize modern and scalable coding practices with our in-house team of experts.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon3} alt="Bitswits" className='img-fluid' />
                                <h5>Build</h5>
                                <p>Building the solutions from scratch with the help of expert resources.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon4} alt="Bitswits" className='img-fluid' />
                                <h5>Monitor</h5>
                                <p>Carefully monitor each and every aspect of the product for optimum performance.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon5} alt="Bitswits" className='img-fluid' />
                                <h5>Test</h5>
                                <p>Achieving the best user experience for users through rigorous testing methods.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon6} alt="Bitswits" className='img-fluid' />
                                <h5>Release</h5>
                                <p>Gathering true data to make alterations and finally releasing the solutions.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon7} alt="Bitswits" className='img-fluid' />
                                <h5>Deploy</h5>
                                <p>Installing, configuring, and constantly improving to tackle modern upgrades.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={styles.procesBox}>
                                <Image quality={75} src={icon8} alt="Bitswits" className='img-fluid' />
                                <h5>Operate</h5>
                                <p>Post-production support and maintenance for enhancing performance.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Process