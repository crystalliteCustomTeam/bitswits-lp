import React from 'react'
import styles from "./NewHomeWho.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import WhoImage from "@/public/newHomePageImages/who_image.png"
import ButtonIcon from "@/public/shark/home_btn.png"


const NewHomeWho = () => {

    return (
        <>

            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.text_content}>
                                <h2 className={`${styles.textPink} fontpink100 text-white font-bold mb-4`}>Who we are</h2>
                                <p className={`fontwhite40 font-bold text-white`}>Shaping a Smarter Tomorrow <br/> Through Technological Excellence.</p>
                                <p className={`${styles.width} fonthomereg`}>At Bitswits, we blend pioneering IT services and consulting with over a decade of expertise, helping businesses around the globe achieve their transformative goals.</p>
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