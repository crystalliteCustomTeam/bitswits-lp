import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewLpForm.module.css'

const NewLpForm = () => {
    return (
        <>
            <section className={styles.lpForm}>
                <Container>
                    <form className={styles.newForm}>

                        <h5 className='font50 white font-bold text-center mb-5'>Let's Talk Apps. Reserve A Spot!</h5>

                        <Row>
                            <Col lg={3}>
                                <input type='text' placeholder='Hi,What`s Your Name?' />
                            </Col>
                            <Col lg={3}>
                                <input type='email' placeholder='What`s Your Email Address?' />
                            </Col>
                            <Col lg={3}>
                                <input type='number' placeholder='Your Contact Number' />
                            </Col>
                            <Col lg={3}>
                                <input type='Submit' value={'SUBMIT DETAILS'} className={styles.notice} />
                            </Col>
                        </Row>
                    </form>
                </Container>
            </section>
        </>
    )
}

export default NewLpForm
