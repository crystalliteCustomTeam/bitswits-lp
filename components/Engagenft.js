import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/Engagenft.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/sharknft/1.png"
import gameicon2 from "@/public/sharknft/2.png"
import gameicon3 from "@/public/sharknft/3.png"
import gameicon4 from "@/public/sharknft/4.png"
import main from "@/public/sharknft/don.png"




const Engage = () => {
    return (
        <>
            <section className={styles.engage}>
                <Container>
                    <Row className={styles.forget}>
                        <Col xl={12}>
                            <h3>Hire Developers</h3>
                            <h2>Ready to Unleash Your NFT Gaming  <br></br>
                                Potential? Choose BitsWits!</h2>
                        </Col>
                    </Row>

                    <Row className={` ${styles.cont} gx-3 `}>
                        <Col xl={4}>

                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image quality={75} src={gameicon1} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Wide Range Of Expertise</h3>
                                    <p>We have a wide range of expertise in developing NFT games, from simple mini-games to complex simulations. Our team is well-versed in developing games with an innovative edge and providing cost-effective solutions to meet your project goals.</p>
                                </div>

                            </div>
                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image quality={75} src={gameicon2} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Eye On The Latest</h3>
                                    <p>We use the latest technologies, tools, and game development platforms to give our clients the best gaming experience. We also keep up with the latest trends in NFT gaming and use cutting-edge technologies to develop visually appealing, interactive, and immersive games.</p>
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
                                    <Image quality={75} src={gameicon3} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Custom/Adaptable
                                        Solutions</h3>
                                    <p>We understand that no two NFT projects are the same. Our team is flexible enough to adapt our solutions to meet the unique requirements of your project. We deeply understand different game engines, platforms, and tools to ensure that your NFT game is designed to bring the best outcomes.</p>
                                </div>

                            </div>

                            <div className={styles.longline1}>
                                <div className={styles.expertise1}>
                                    <Image quality={75} src={gameicon4} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Security Measures</h3>
                                    <p>They use enterprise-level technologies like encryption, authentication mechanisms, and authorization protocols to ensure that each game is safeguarded against data theft and malicious attacks. We also provide a secure infrastructure for the storage and secure delivery of digital assets.</p>
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