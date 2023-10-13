import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Coverage.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Coverage = (props) => {
    return (
        <>
            <section className={styles.coverage}>
                <Container>
                    <Row className='aboutfold'>
                        <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>{props.title}</h3>
                        </Col>
                        <Col lg={7}>
                           {props.subtitle}
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                CALL NOW!
                            </Link>
                        </Col>
                    </Row>
                    <div className='mt-5'>
                        <Row className='justify-content-between rowGap'>
                            <Col lg={3}>
                                {props.mobile}
                            </Col>
                            <Col lg={3}>
                              {props.user}
                            </Col>
                            <Col lg={3}>
                             {props.ux}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Coverage