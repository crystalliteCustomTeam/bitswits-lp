import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/OverView.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'


const OverView = (props) => {
    return (
        <>
            <section className={styles[props.caseOverView]}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={4}>
                            <div className={styles.heading}>
                                <div className={styles.headBox}>
                                    {props.title ?
                                        <h2 className='font40 black fontf font-bold line50'>
                                            {props.title}
                                        </h2>
                                        :
                                        ''
                                    }
                                    <FaAngleRight />
                                </div>

                                {props.subtitle ?
                                    <h5 className='font20 black fontf font-bold line30'>
                                        {props.subtitle}
                                    </h5>
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.contnt}>

                                {props.subtext ?
                                    <h5 className='font20 black fontf font-bold line30'>
                                        {props.subtext}
                                    </h5>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font16 black fontf font-medium line30'>
                                        {props.text}
                                        <Link href="#"> Read More</Link>
                                    </p>
                                    :
                                    ''
                                }

                                {props.text2 ?
                                    <p className='font16 black fontf font-medium line30'>
                                        {props.text2}
                                    </p>
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row>
                        <Col lg={12} className='p-0'>
                            <div className={styles.foldImg}>
                                <Image  alt="bitswits"     className='img-fluid' src={props.imagefold}  />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OverView