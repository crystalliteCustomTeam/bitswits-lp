import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/engageGame.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/blockchaindevelopment/images/engage1.png"
import gameicon2 from "@/public/blockchaindevelopment/images/engage2.png"
import gameicon3 from "@/public/blockchaindevelopment/images/engage3.png"
import gameicon4 from "@/public/blockchaindevelopment/images/engage4.png"
import main from "@/public/blockchaindevelopment/images/engagecenter.png"




const GameEngage = () => {
    return (
        <>
            <section className={styles.engage}>
                <Container>
                    <Row className={styles.forget}>
                        <Col xl={12}>
                            <p className='text-white text-center f-16 font-bold mb-0'>Hire Top-Notch Blockchain Developers</p>
                            <h2>Reason You Will Love Our Blockchain Game Development Company</h2>
                        </Col>
                    </Row>

                    <Row className={` ${styles.cont} gx-3 `}>
                        <Col xl={4}>

                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image quality={75} alt='Bitswits' src={gameicon1} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Business Value-driven <br></br> Solutions</h3>
                                    <p>BitsWits offers multiple platform support for blockchain game development, meaning your game will reach a much wider audience.</p>
                                </div>

                            </div>
                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image quality={75} alt='Bitswits' src={gameicon3} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Smooth User Experience</h3>
                                    <p>BitsWits understands that the success of any blockchain game depends on its ability to provide secure transactions in a safe environment. Hence, we take extra care to ensure that our solutions are secure and reliable, ensuring a smooth user experience.</p>
                                </div>

                            </div>

                        </Col>
                        <Col xl={4}>

                            <div className={styles.offers}>
                                <Image quality={75} alt='Bitswits' src={main} className='img-fluid' />
                            </div>

                        </Col>
                        <Col xl={4}>

                            <div className={styles.longline1}>
                                <div className={styles.expertise1}>
                                    <Image quality={75} alt='Bitswits' src={gameicon2} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Agile Methodology</h3>
                                    <p>With our agile development process, you can be sure that we will release your game quickly without compromising quality. You can be sure of the quality games with no glitches!</p>
                                </div>

                            </div>

                            <div className={styles.longline1}>
                                <div className={styles.expertise1}>
                                    <Image quality={75} alt='Bitswits' src={gameicon4} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Multi-platforms <br></br>
                                        Game Development</h3>
                                    <p>Our team of experienced developers has the capacity to craft custom blockchain games for any platform—from mobile, desktop, console, and web to virtual reality.</p>
                                </div>

                            </div>

                        </Col>
                    </Row>

                </Container>



            </section>



        </>
    )
}

export default GameEngage