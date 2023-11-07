import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/ecommerceapp.module.css'
import Link from 'next/link'

///


const EcommerceApp = () => {
    return (
        <>
            <section className={styles.EcommerceApp}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.appBox}>
                                <Row>
                                    <Col lg={12} xl={7}>
                                        <h2 className='text-white font35 font-medium '>
                                            Invest in <strong>eCommerce App <br /></strong>
                                            Development Today, Collect<br /> Higher Revenue Tomorrow!
                                        </h2>
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <Link href="tel:;" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </Link>
                                            <Link href="javascript:;" className={styles.btn1}>
                                                Start Live Chat
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12} xl={5}>
                                        <div className={styles.letsTalk}></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceApp