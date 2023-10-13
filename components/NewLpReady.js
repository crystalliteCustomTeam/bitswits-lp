import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/NewLpReady.module.css'


const NewLpReady = () => {
    return (
        <>
            <section className={`${styles.readySec}`}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <p className='text-white font-bold f-18 mb-0'>Have a Project To Discuss?</p>
                            <h2 className='text-white f-75 font-bold'>
                                We're Ready!
                            </h2>
                            <form action='javascript:;' >
                                <input type='text' placeholder='Full Name' required />
                                <input type='email' placeholder='Email Address' required />
                                <input type='text' placeholder='Company' required />
                                <input type='number' placeholder='Phone' required />
                                <label>
                                    Message
                                </label>
                                <textarea rows="4" cols="50" required>

                                </textarea>
                                <Button className={styles.secBtn} type='submit'>
                                    GET MY FREE 30 MINUTES STRATEGY SESSION
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpReady