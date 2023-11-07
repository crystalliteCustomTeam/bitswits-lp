import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/Ecommerce.module.css'
import Image from 'next/image'

///
import Map from 'public/ecommerce/map.webp'
import Mobile from 'public/ecommerce/mobiles.webp'
import Link from 'next/link'


const EcommerceScale = () => {
    return (
        <>
            <section className={styles.EcommerceSec}>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h2 className='font30 font-bold mb-5'>Happy Customers <span className='ecommercegredient'>on a Global Scale</span></h2>
                            <Image src={Map} alt='Map' className='' />
                        </Col>
                        <Col lg={4}>
                            <div className={styles.mobileImage}>
                                <Image src={Mobile} alt='Mobile' className='' />
                            </div>
                        </Col>

                        <Col lg={12}>
                            <p className='ecommercegredient font16 font-bold text-center mb-0'>SCHEDULE A FREE CONSULTATION</p>
                            <h2 className='font36 font-bold text-center text-black mb-3'>Adapt To Constantly Evolving Digital Trends with A Complimentary 30-Minute App Strategy Session.Claim Your Spot Now & Talk to An App Expert!</h2>

                            <div className={`d-flex align-items-center justify-content-center pt-4 gap-2 ${styles.btns}`}>
                                <Link href="tel:;" className="font14">
                                    Call Now: +1 833 500 6007
                                </Link>
                                <Link href="javascript:;" className="font14 font-medium">
                                    Start Live Chat
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceScale