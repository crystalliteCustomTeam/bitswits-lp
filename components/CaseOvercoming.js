import React from 'react'
import Image from 'next/image';
import styles from '@/styles/CaseOvercoming.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const CaseOvercoming = (props) => {
    return (
        <>
            <section className={`${styles.Overcoming}`}>
                <Container>
                    <Row>
                        {props.challenges.map((challenge, index) => (
                            <Col lg={6} key={index}>
                                <div className={styles.overBox}>
                                    <h3>{challenge.title}</h3>
                                    <p>{challenge.text}</p>
                                    <div className={styles.overImg}>
                                        <Image quality={75} src={challenge.icon} width={55} height={55} />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseOvercoming;
