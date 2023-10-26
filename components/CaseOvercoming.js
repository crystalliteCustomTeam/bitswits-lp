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
                        <Col lg={6}>
                            <div className={styles.overBox}>
                                <h3>{props.title1}</h3>
                                <p>{props.text1}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} src={props.icon1} width={55} height={55} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.overBox}>
                                <h3>{props.title2}</h3>
                                <p>{props.text2}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} src={props.icon2} width={55} height={55} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.overBox}>
                                <h3>{props.title3}</h3>
                                <p>{props.text3}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} src={props.icon3} width={55} height={55} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.overBox}>
                                <h3>{props.title4}</h3>
                                <p>{props.text4}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} src={props.icon4} width={55} height={55} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.overBox}>
                                <h3>{props.title5}</h3>
                                <p>{props.text5}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} src={props.icon5} width={55} height={55} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.overBox}>
                                <h3>{props.title6}</h3>
                                <p>{props.text6}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} src={props.icon6} width={55} height={55} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseOvercoming
