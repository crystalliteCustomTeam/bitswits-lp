import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WorkforUser.module.css'


const WhyBuild = (props) => {
    return (
        <>
            <section className={styles.myExpertise}>
                <Container>
                    <Row className='aboutfold'>
                        {/* <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>{props.title}</h3>
                        </Col> */}
                        <Col lg={12}>
                            {props.subtitle}
                        </Col>
                        {/* <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                CALL NOW!
                            </Link>
                        </Col> */}
                    </Row>
                    <div className='mt-0 mt-md-5'>{props.cards}</div>
                </Container>
            </section>
        </>
    )
}

export default WhyBuild