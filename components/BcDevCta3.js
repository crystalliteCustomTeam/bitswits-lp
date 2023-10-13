import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/BcDevCta.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import cta from '../public/images/BlockchainDvelpment/cta/cta3.png'

const BcDevCta3 = () => {
    return (
        <>
            <section className={styles.cta3}>
                <Container>
                    <Row className={styles.ctaRow}>
                        <Col lg={8} className='mx-auto'>
                            <div>
                                <h5 className='fontf mb-3'>
                                    Hire best blockchain developers to achieve global business scalability and security standards.
                                </h5>
                                <p className='font16 black fontf font-medium'>
                                    Bitswits is ready to deliver top-notch solutions tailored to boost your business performance and reduce your operational cost. Our team is adept at working with major blockchain platforms and diverse cryptosystems meeting your needs through blockchain development services.
                                </p>
                                <div className={`${styles.bttnsto} mt-4`}>
                                    <Link className={styles.bttns1} href="#">Request A Proposal</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className='mx-auto'>
                            <div className={styles.imgBox}>
                                <Image quality={75} src={cta} alt='Bitswits' className='img-fluid mb-3' />
                                <p className='font16 black fontf font-medium'>Providing solutions through synergizing technologies and collaborative approach</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BcDevCta3