import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Challenge.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleLeft } from "react-icons/fa";


const Challenge = (props) => {
    return (
        <>
            <section className={styles[props.caseChallengs]}>
                <Container>
                    <Row className={`${styles.soulRow} align-items-center`}>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                {props.text ?
                                    <p className='font20 white fontf line30'>
                                        {props.text}
                                    </p>
                                    :
                                    ''
                                }

                                {props.text2 ?
                                    <p className='font20 white fontf line30'>
                                        {props.text2}
                                        <Link href="#"> Read More</Link>
                                    </p>
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.heading}>
                                <div className={styles.headBox}>
                                    <FaAngleLeft />
                                    {props.title ?
                                        <h2 className='font65 white fontf font-bold line60'>
                                            {props.title}
                                        </h2>
                                        :
                                        ''
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Challenge