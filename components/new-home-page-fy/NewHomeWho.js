import React from 'react'
import styles from "./NewHomeWho.module.css";
import { Container, Row, Col } from 'react-bootstrap'


const NewHomeWho = () => {

    return (
        <>

            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.text_content}>
                                <h2 className={`${styles.textPink} text-white f-60 font-bold`}>Who we are</h2>
                                <p className={`${styles.wid} f-20 text-white`}>Shaping a Smarter Tomorrow Through Technological Excellence.</p>
                                <p className={`${styles.width} font14`}>At Bitswits, we blend pioneering IT services and consulting with over a decade of expertise, helping businesses around the globe achieve their transformative goals.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="mixColor1"></div>
            </section>
        </>
    )
}

export default NewHomeWho