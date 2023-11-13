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
                                        <span className='fw800'>For Everyone Out There</span> </h2>
                                    <p>BitsWits provides mobile app development service in the USA for every industry with innovation and efficiency. We create customized mobile solutions for various industries, from e-commerce to the healthcare or gaming industry. Our skilled app developers are determined to come up with mobile apps that meet the unique needs of every client and their business.</p>
                                    <Link class={styles.btnpost} href='#'>Let's Discuss</Link>

                                </div>
                                <div className={styles.post}>
                                    <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className={styles.point}>
                        <Col xl={6}>

                            <div>
                                <h2 class="f-30  f-600 white">What Makes BitsWits The Most Recommended <br></br>
                                    <span className='fw800'>Mobile App Development Company?</span>
                                </h2>
                                <p class="f-13  f-400 white">As the leading mobile app development agency, we've gathered top-notch resources to create exceptional solutions for mobile applications. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to instantly provide unparalleled solutions to our valued clients.</p>
                                <Link class={styles.btnpost} href="#">Let's Discuss</Link>

                            </div>
                        </Col>
                    </Row>

                    <Row class={styles.what}>
                        <Col xl={12}>
                            <p>"Our lives will be facilitated by a myriad of adaptive applications running on different devices, with different sensors, all of them collecting tidbits about everything we do, and feeding big digital brains that can adapt applications to our needs simply because they get to know us."</p>
                            <h4> Márcio Cyrillo, Executive Director at CI&T</h4>
                        </Col>

                    </Row>

                </Container>




            </section>
        </>
    )
}

