import React from 'react'
import Image from 'next/image'
import styles from '@/styles/ReadyBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Readybanner = (props) => {
    return (
        <>
            <section className={`${styles.foody} contpost`}>
                <Container>
                    <Row className={styles.foodRow}>
                        <Col lg={12}>
                            {props.title}
                        </Col>
                        <Col lg={8}>
                            {props.para2}
                        </Col>
                        <Col lg={6}>
                          
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Readybanner