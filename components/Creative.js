import React from 'react'
import styles from "@/styles/Creative.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import BannerImage from "@/public/images/projectprocess/nopot.png"




const Creative = () => {



    return (
        <>

            <section className={styles.newHomeBg}>

                <Container class={styles.posting}>

                    <Row>
                        <Col xl={12}>
                            <h2 class="black f-40 f-600 center">Let's <span class="f-700">Works</span> Together <br></br> Let's <span class="f-700">Creative</span> </h2>
                        </Col>
                        <div class={` ${styles.flip} d-flex justify-content-center align-items-center`}>
                            <Image src={BannerImage} class="img-fluid dropshadow" alt="BitsWits" />
                        </div>
                        <div class={styles.btncall}>
                            <h4>START <br></br> A PROJECT?</h4>
                            <a href="tel:18335006007" class={styles.call}>Call Now: (833) 500-6007</a>
                            <div class="pt-3">
                                <a href="#" class={styles.chat}>Start Live Chat</a>
                            </div>
                        </div>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Creative