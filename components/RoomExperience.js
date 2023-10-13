import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WorkExp.module.css'


const RoomExperience = (props) => {
    return (
        <>
            <section className={styles.myExpertise}>
                <Container>
                    <Row className='aboutfold'>
                        {/* <Col md={2}>
                           
                        </Col> */}
                        <Col lg={12}>
                            {/* {props.subtitle} */}
         <h3 className='font40 fontf font-bold mt-1 black text-center'>{props.title} </h3>                              </Col>
                        {/* <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                CALL NOW!
                            </Link>
                        </Col> */}
                    </Row>
                    <div className='mt-5'>{props.RoomSpace}</div>
                </Container>
            </section>
        </>
    )
}

export default RoomExperience