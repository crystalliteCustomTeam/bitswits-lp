import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import crmstyles from '@/styles/CRMExperts.module.css'


const CRMExperts = (props) => {
    return (
        <>
            <section className={crmstyles.crmExperts}>
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

export default CRMExperts