import React from 'react'
import styles from '@/styles/Understand.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Understand = () => {
    return (
        <>


            <section className={styles.vision}>

                <Container>
                    <Row className={styles.engineering}>
                        <Col lg={7} >
                           
                            <h2>We understand your concerns about outsourcing. We’ve seen the challenges, and we’ve solved them.</h2>
                        </Col>
                        <Col lg={1} >

                        </Col>
                        <Col lg={4} >

                            <p className='font16 black'>  Being over a decade in the IT industry helps us to recognize and overcome all obstacles. We  constantly seek talents for our own projects, and for our clients. </p>

                            <p className='font16 black'>  That’s why we see all outsourcing challenges from multiple angles, and know how to act accordingly!

</p>



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

export default Understand