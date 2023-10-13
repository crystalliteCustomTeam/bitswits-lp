import React from 'react'
import styles from '@/styles/Surehow.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Surehow = () => {
    return (
        <>


            <section className={styles.vision}>

                <Container>
                    <Row className={styles.engineering}>
                        <Col lg={7} >
                           
                            <h2>Not sure how to start your outsourcing journey? Just pick a service suits your current needs:</h2>
                        </Col>
                        <Col lg={1} >

                        </Col>
                        <Col lg={4} >

                            <p className='font16 black'>  Get a team that will work exclusively on your project, or extend your in-house team with that one team member you were missing. </p>

                            <p className='font16 black'>  Retain the control over the project, but leave all the hassles to us.   </p>



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

export default Surehow