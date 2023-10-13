import React from 'react'
import styles from '@/styles/Developer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'




const Developer = (props) => {
    return (
        <>
            <section className="developer mt-5">
                <Container>
                    <Row className={`${styles.devtop}`} >

                        <Col lg={12}>
                            {props.subtitle2 &&
                                <h3 className='f-20 f-700 black t-center'>{props.subtitle2}</h3>
                            }
                            <h2 className='f-50 f-700 black t-center'>
                                {props.subtitle}
                            </h2>
                            <p className='f-16 f-500 black t-center'>
                                {props.title}
                            </p>
                        </Col>
                    </Row>
                    <div className={`${styles.devcard} mt-5`}>
                        <Row>
                            <Col lg={5}>
                                <div className={styles.leftside}>
                                    <Image className="img-fluid" alt="bitswits"
                                        src={props.pic1} />
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className={styles.devcard}>
                                    <Row>
                                        <Col lg={6} className={styles.devcardslide}>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <Image quality={75} src={props.pic2}
                                                            className="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        {props.tit1}
                                                    </h4>
                                                    <p>
                                                        {props.text1}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <Image quality={75} src={props.pic3}
                                                            className="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        {props.tit2}
                                                    </h4>
                                                    <p>
                                                        {props.text2}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className={styles.devcardslide}>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <Image quality={75} src={props.pic4}
                                                            className="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        {props.tit3}
                                                    </h4>
                                                    <p>
                                                        {props.text3}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <Image quality={75} src={props.pic5}
                                                            className="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        {props.tit4}
                                                    </h4>
                                                    <p>
                                                        {props.text4}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Developer