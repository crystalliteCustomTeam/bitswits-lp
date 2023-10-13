import React from 'react'
import styles from '@/styles/Whathowwhy.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Whathowwhy = () => {
    return (
        <>

            <section className={styles.result}>
                <Container>
                    <Row>
                        <Col md={4}>

                            <div className={styles.see}>

                   

                                <h3 className={styles.approch}>What?</h3>
                                <p>We strive to help businesses achieve exceptional growth and desired results. Our specific approach and fusion of development, design, and marketing have proven to be the best practice when it comes to end results. </p>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className={styles.see}>
                                <h3 className={styles.approch}>How?</h3>
                                <p>We have brought together the most professional and experienced people to provide high-quality services. We have been working with clients from different industries for the last 11 years. Client satisfaction is our top priority! </p>
                            </div>

                        </Col>
                        <Col md={4}>

                            <div className={styles.see}>

                                <h3 className={styles.approch}>Why?</h3>
                                <p>To be noticed in the market, you have to perform better than your competitors. This means that your website or application should have a beautiful design and easy-to-use functionalities for end-users.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Whathowwhy