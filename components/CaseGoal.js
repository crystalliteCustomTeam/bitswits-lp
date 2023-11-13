import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseGoal.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const CaseGoal = (props) => {
    return (
        <>
            <section className={`${styles.goal} ${styles[props.goalClass]}`}>
                <Container>
                    <Row className={`${styles.goalRow} align-items-center`}>
                        <Col lg={4}>
                            <Image quality={90} src={props.golImg} alt="BitsWits" className={`${styles.secImg} img-fluid`} />
                        </Col>
                        <Col lg={8}>
                            <h3>{props.title}</h3>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseGoal
