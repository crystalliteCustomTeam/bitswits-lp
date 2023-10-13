import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/Engage.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/shark/shark.png"
import gameicon2 from "@/public/shark/shark2.png"
import gameicon3 from "@/public/shark/shark3.png"
import gameicon4 from "@/public/shark/shark4.png"
import main from "@/public/shark/main.png"




const Engage = () => {
    return (
        <>
            <section className={styles.engage}>
                <Container>
                    <Row className={styles.forget}>
                        <Col xl={12}>
                            <h3> HIRE THE BEST; FORGET THE REST! </h3>
                            <h2>Why Engage BitsWits As Your Game
                                Development Studio?</h2>
                        </Col>
                    </Row>

                    <Row className={` ${styles.cont} gx-3 `}>
                        <Col xl={4}>

                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image quality={75} src={gameicon1} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Unpaired Expertise</h3>
                                    <p>Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy.</p>
                                </div>

                            </div>
                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image quality={75} src={gameicon3} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Creative Solutions</h3>
                                    <p>BitsWits offers innovative solutions tailored to your specific needs and marketing objectives. Whether you're looking to create a game that educates, entertains, or helps you earn a steady stream of revenue, our team can craft the perfect experience to meet your needs.</p>
                                </div>

                            </div>

                        </Col>
                        <Col xl={4}>

                           <div className={styles.offers}>
                           <Image quality={75} src={main} className='img-fluid' />
                           </div>

                        </Col>
                        <Col xl={4}>

                            <div className={styles.longline1}>
                                <div className={styles.expertise1}>
                                    <Image quality={75} src={gameicon2} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Tabs On Latest Trends</h3>
                                    <p>We are passionate about gaming and strive to stay up-to-date on the latest trends in the industry. We are equipped with the necessary tools, knowledge, and skills to create an engaging video game experience.</p>
                                </div>

                            </div>

                            <div className={styles.longline1}>
                                <div className={styles.expertise1}>
                                    <Image quality={75} src={gameicon4} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Prices That Make Sense</h3>
                                    <p>We offer competitive prices for our services, meaning you get a great game at an even better price. Plus, if you're not 100% satisfied with the final product, we offer a full refund so you can be sure that your money is being well spent. There is one thing for sure BitsWits, your hard-earned money won't go down the drain.</p>
                                </div>

                            </div>

                        </Col>
                    </Row>

                </Container>



            </section>



        </>
    )
}

export default Engage