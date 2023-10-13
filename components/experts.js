import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Experts.module.css'


const WhyBuild = (props) => {
    return (
        <>
            <section className={`${styles.myExpertise} ${props.expo}`}>
                <Container>
                    <Row className='aboutfold'>
                        <Col lg={12} className='mx-auto'>
                            {props.subtitle}
                            {props.text}
                        </Col>
                    </Row>
                    <div className='mt-0 mt-md-5'>{props.cards}</div>
                </Container>
            </section>
        </>
    )
}

export default WhyBuild