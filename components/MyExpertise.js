import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/MyExpertise.module.css'


const MyExpertise = (props) => {
    return (
        <>
            <section className={`${props.className} ${styles.myExpertise}`}>

                <Container>
                    <Row className='aboutfold'>
                        <Col md={12}>
                            <h3 className='font20 fontf font-semibold letterspace text-center fyColor2 mb-0'>{props.title}</h3>
                        </Col>
                        <Col lg={12}>
                            {props.subtitle}
                        </Col>
                    </Row>
                    <div className='-mt0 mt-md-2'>{props.cards}</div>
                </Container>
            </section>
        </>
    )
}

export default MyExpertise