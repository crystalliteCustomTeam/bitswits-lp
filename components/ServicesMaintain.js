import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServicesMaintain.module.css";


const ServicesMaintain = (props) => {
    return (
        <>
            <section className={` ${styles.newHomeBg} ${styles[props.assignClass]} combo`}>
                <Container>
                    <Row className='g-3'>
                        <Col lg={10} className='mx-auto'>
                            <h3 className={` f-20 font-bold text-white text-center mb-0`}>{props.subtitle}</h3>
                            <h2 className='text-white font50 font-bold text-center'>
                                {props.title0}
                                <span className='grdiant font55 font-bold text-center d-block mb-2'>{props.title}</span>
                                {props.title1}
                                <span className='grdiant font55 font-bold text-center d-block mb-2'>{props.title2}</span>
                                {props.title3}
                            </h2>
                            <p className='white center'>{props.text}</p>
                        </Col>
                        {props.appContent.map((content, index) => (
                            <Col key={index} sm={6} className={styles.earn}>
                                <div className={styles[content.appclass]}>
                                    <div className={styles.cardContent}>
                                        <h3 className='text-white font25 font-bold text-center'>{content.title}</h3>
                                        <p className={styles.possibilities}>{content.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {props.appContent1.map((content, index) => (
                            <Col key={index} sm={6} lg={4} className={styles.earn}>
                                <div className={styles[content.appclass]}>
                                    <div className={styles.cardContent}>
                                        <h3 className='text-white font25 font-bold'>{content.title}</h3>
                                        <p className={styles.para}>{content.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {props.appContent2.map((content, index) => (
                            <Col key={index} lg={12} className={styles.earn}>
                                <div className={styles[content.appclass]}>
                                    <Row className='align-items-center'>
                                        <Col xl={6} key={index}>
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
