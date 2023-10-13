import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/BcDevCta.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/BlockchainDvelpment/cta/counts.png'

const BcDevCta4 = () => {
    return (
        <>
            <section className={styles.cta4}>
                <Container>
                    <Row className={styles.ctaRow}>
                        <Col lg={5} md={6}>
                            <div className={styles.left}>
                                <h6 className='font20 white fontf font-medium line30 mb-1'>
                                    LOOKING TO INITIATE A PARTNERSHIP?
                                </h6>
                                <h4 className='font30 white fontf font-bold line40'>
                                    Your Big Break is just One Click Away!
                                </h4>
                                <div className={`${styles.bttnsto} mt-4 pt-2`}>
                                    <Link className={styles.bttns1} href="#">Let’s Talk</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className={styles.right}>
                                <Image quality={75} src={foldImg} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BcDevCta4