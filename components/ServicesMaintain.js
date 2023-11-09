import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServicesMaintain.module.css";


const ServicesMaintain = (props) => {
    return (
        <>
            <section className={` ${styles.newHomeBg} combo`}>
                <Container>
                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center mb-0`}>{props.subtitle}</p>
                            <h3 className='text-white font65 font-bold text-center mb-0'>{props.title1}</h3>
                            <h2 className='grdiant font70 font-bold text-center pb-2'>{props.title2}</h2>
                            <p className='white center'>{props.text}</p>
                        </Col>
                        {props.appContent1.map((content, index) => (
                            <Col sm={6} lg={4} key={index} className={styles.earn}>
                                <div className={styles[content.appclass]}>
                                    <div className={styles.cardContent}>
                                        <h3 className='text-white font25 font-bold'>{content.title}</h3>
                                        <p className={styles.para}>{content.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {props.appContent2.map((content, index) => (
                            <Col lg={12} className={styles.earn}>
                                <div className={styles[content.appclass]}>
                                    <Row className='align-items-center'>
                                        <Col xl={5} key={index}>
                                            <div className={styles.paraThreeContent}>
                                                <h3 className='text-white font25 font-bold '>{content.title}</h3>
                                                <p className={styles.para1}>{content.text}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        ))}
                        {props.appContent3.map((content, index) => (
                            <Col key={index} sm={6} className={styles.earn}>
                                <div className={styles[content.appclass]}>
                                    <div className={styles.cardContent}>
                                        <h3 className='text-white font25 font-bold text-center'>{content.title}</h3>
                                        <p className={styles.possibilities}>{content.text}</p>
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

export default ServicesMaintain
