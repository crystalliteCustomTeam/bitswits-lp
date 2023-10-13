import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WorkExp.module.css'


const WhyBuild = (props) => {
    return (
        <>
            <section className={`${styles[props.myExpertise]} ${styles[props.expclass]}`}>  
                <Container>
                    <Row className='aboutfold'>

                        <Col lg={12}>


                            {props.title &&
                                <h3 className='font40 fontf font-bold mt-1 black text-center'>{props.title} </h3>
                            }

                        </Col>

                    </Row>
                    <div>{props.Workspace}</div>
                </Container>
            </section>
        </>
    )
}

export default WhyBuild