import React from 'react'
import styles from '@/styles/Aboutweare.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Aboutweare = () => {
    return (
        <>


            <section>

                <Container>
                    <Row className={styles.engineering}>
                        <Col lg={6} >
                            <h3 className='mb-5'>ABOUT US</h3>
                            <h2>We build engineering teams that will bring your vision to life.</h2>
                        </Col>
                        <Col lg={1} >

                        </Col>
                        <Col lg={3} >

                            <p className='font18 black'>  We can agree that software development is not an easy job. That’s why we want just all-stars on our team, talented individuals that have the needed expertise, but also the desire to grow.  </p>

                            <p className='font18 black'>  OSM gathered professionals from the world of development, design, and marketing to help our clients reach their wildest goals together.   </p>

                            <p className='font18 black'>
                                Yes – we provide outsourcing services, but we collaborate closely with our clients. We act like business partners, not just as vendors. We choose our employees carefully, and take good care of them. That way we ensure that everybody is happy and motivated – and then results come naturally!
                            </p>

                            <div className='mt-5'>
                            <Link className={styles.btnslack} href="#">
                               find out more
                            </Link>

                            </div>

                        </Col>
                    </Row>

                </Container>





            </section>





        </>
    )
}

export default Aboutweare