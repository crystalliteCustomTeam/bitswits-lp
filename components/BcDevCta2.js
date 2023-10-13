import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/BcDevCta.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import cta from '../public/images/BlockchainDvelpment/cta/cta2.png'

const BcDevCta2 = () => {
    return (
        <>
            <section className={styles.cta2}>
                <Container>
                    <Row className={styles.ctaRow}>
                        <Col lg={7} className='mx-auto'>
                            <div>
                                <h5 className='fontf mb-4'>
                                    Looking for the Best
                                    <span>Blockchain Development Company?</span>
                                </h5>
                                <p className='font18 black fontf font-medium'>
                                    We are experienced in providing scalable solutions synergizing trending technologies.
                                </p>
                                <div className={`${styles.bttnsto} mt-4`}>
                                    <Link className={styles.bttns1} href="#">Get Free Estimation!</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className='mx-auto'>
                            <div className='text-center'>
                                <Image quality={75} src={cta} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BcDevCta2