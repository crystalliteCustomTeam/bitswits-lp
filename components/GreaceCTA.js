import React from 'react'
import styles from '@/styles/GreaceCTA.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const GreaceCTA = (props) => {
    return (
        <>
            <section className={styles[props.soulCta]}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.heading}>
                                {props.headfire}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GreaceCTA