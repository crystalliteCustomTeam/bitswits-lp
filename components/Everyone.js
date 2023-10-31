import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Everyone.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import banImg1 from '../public/images/projectprocess/phon.png'
import Link from 'next/link';


export default function Everyone() {



    return (
        <>
            <section class={styles.hook}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={10}>
                            <div className={styles.dev}>
                                <div className={styles.eve}>
                                    <h2 class="f-30  f-600 white">Mobile Application Development Company <br></br>
                                        <span className='f-700'>For Everyone Out There</span> </h2>
                                        <p>BitsWits provides mobile app development service in the USA for every industry with innovation and efficiency. We create customized mobile solutions for various industries, from e-commerce to the healthcare or gaming industry. Our skilled app developers are determined to come up with mobile apps that meet the unique needs of every client and their business.</p>
                                        <Link class={styles.btnpost} href='#'>Let's Discuss</Link>
                               
                                </div>
                                <div className={styles.post}>
                                    <Image src={banImg1} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

