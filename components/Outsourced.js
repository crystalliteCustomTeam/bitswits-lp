import React from 'react'
import styles from '@/styles/Outsourced.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Outsourced = () => {
    return (
        <>


            <section className={styles.vision}>

                <Container>
                    <Row className={styles.engineering}>
                        <Col lg={7} >
                            <h3 className='mb-5'>OUTSOURCING <br></br>
SERVICES</h3>
                            <h2>We'll provide you with outsourced software engineering teams that build world-class software.</h2>
                        </Col>
                        <Col lg={1} >

                        </Col>
                        <Col lg={4} >

                            <p className='font16 white'>  OSM offers customized outsourcing services that will perfectly fit your business needs: hire an entire development team, or an experienced individual. </p>

                            <p className='font16 white'>  We have over a decade of experience in gathering exceptional teams that make awesome software, and a great pool of talents we work with.   </p>



                            <div className='mt-5'>
                            <Link className={styles.btnslack} href="#">
                            FIND OUT MORE
                            </Link>

                            </div>

                        </Col>
                    </Row>

                </Container>





            </section>





        </>
    )
}

export default Outsourced