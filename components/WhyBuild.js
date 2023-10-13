import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WhyBuild.module.css'


const WhyBuild = (props) => {
    return (
        <>
            <section className={`${styles.myExpertise} ${props.expo} ${styles[props.alignclass]} ${styles[props.chngColor]}`}>
                <Container>
                    <Row className='aboutfold'>
                        <Col md={12}>
                            <h3 className='font20 fontf font-semibold letterspace fyColor2 text-center mb-2'>{props.title}</h3>
                        </Col>
                        <Col lg={12}>
                            {props.subtitle}
                            {props.text}
                        </Col>
                    </Row>
                    <div>{props.cards}</div>
                </Container>
            </section>
        </>
    )
}

export default WhyBuild