import React from 'react'
import styles from '@/styles/Solutions.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'

const Solutions = (props) => {
    return (
        <>
            <section className={styles[props.caseSolution]}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={4}>
                            <div className={styles.heading}>
                                <div className={styles.headBox}>
                                    {props.title ?
                                        <h2 className='font65 white font-bold line60'>
                                            {props.title}
                                        </h2>
                                        :
                                        ''
                                    }
                                    <FaAngleRight />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                {props.text ?
                                    <p className='font16 white fontf line30'>
                                        {props.text}
                                    </p>
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solutions