import React from 'react'
import styles from '@/styles/Profilecreation.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Profilecreation = (props) => {
    return (
        <section className={styles.profilecreation}>
            <Container>
                <Row>
                    <Col lg={12}>
                        {props.music}
                    </Col>
                </Row>
                <Row className='g-3'>

                    {props.part ?

                        <>
                            <Col lg={6}>

                                <div className={styles.creation1}>
                                    {props.demo}
                                    {props.demo1}

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.creation1}>
                                    {props.profile}
                                    {props.profile1}

                                </div>
                            </Col>
                        </>
                        :
                        ''

                    }



                    {props.part1 ?
                        <>
                            <Col lg={6}>
                                <div className={styles.creation1}>
                                    {props.push}
                                    {props.push1}

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.creation1}>
                                    {props.media}
                                    {props.media1}
                                </div>
                            </Col>
                        </>

                        :
                        ''

                    }

                </Row>
            </Container>
        </section>
    )
}

export default Profilecreation