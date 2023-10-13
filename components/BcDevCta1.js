import React from 'react'
import Link from 'next/link'
import styles from '@/styles/BcDevCta.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const BcDevCta1 = () => {
    return (
        <>
            <section className={styles.cta1}>
                <Container>
                    <Row className={styles.ctaRow}>
                        <Col lg={10} className='mx-auto'>
                            <div className='text-center'>
                                <h3 className='font40 white fontf font-bold line50 mb-4'>
                                    Let us Build the Best for You
                                </h3>
                                <p className='font18 white fontf font-medium line30'>
                                    We provide enterprise enabling blockchain solutions using the stellar technologies
                                </p>
                                <div className={`${styles.bttnsto} mt-4`}>
                                    <Link className={styles.bttns1} href="#">Book A Call</Link>
                                    <Link className={styles.bttns2} href="#">Chat With Us Online! </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BcDevCta1