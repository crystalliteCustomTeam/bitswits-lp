import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseServices.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const CaseServices = (props) => {
    return (
        <>
            <section className={`${styles.services}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='mt-lg-5 mt-3 pt-3'>
                                <Image quality={90} src={props.servImg} alt="BitsWits" className={`${styles.secImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseServices
