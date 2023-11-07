import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/3dEngage.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/3d-game-development/images/engage1.png"
import gameicon2 from "@/public/3d-game-development/images/engage2.png"   
import gameicon3 from "@/public/3d-game-development/images/engage3.png"
import gameicon4 from "@/public/3d-game-development/images/engage4.png"   
import main from "@/public/3d-game-development/images/engagemain.png"




const Engage3d = () => {

    return (
        <>
            <section className={styles.engage}>
                <Container>
                    <Row className={styles.forget}>
                        <Col xl={12}>
                            <p className='text-white f-20 font-bold text-center mb-0'>HIRE THE BEST; FORGET THE REST!</p>
                            <h2>Why Engage BitsWits As Your Game
                                Development Studio?</h2>
                        </Col>
                    </Row>

                    <Row className={` ${styles.cont} gx-3 `}>
                        <Col xl={4}>

                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image alt='Bitswits' quality={75} src={gameicon1} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Skilled Team</h3>
                                    <p>BitsWits celebrates a team of experienced game developers and designers with the necessary skills and knowledge to create engaging, highly-converting 3D games. Our developers always keep an eye on innovation and creativity.</p>
                                </div>

                            </div>
                            <div className={styles.longline2}>
                                <div className={styles.expertise}>
                                    <Image alt='Bitswits' quality={75} src={gameicon3} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Cutting Edge Technology</h3>
                                    <p>The developers at BitsWits are always looking to stay ahead of the curve when it comes to using innovative technology in their 3D games. They utilize the latest technologies and tools to ensure top-quality 3D games with immersive graphics, engaging gameplay, and high performance.</p>
                                </div>

                            </div>

                        </Col>
                        <Col xl={4}>

                            <div className={styles.offers}>
                                <Image alt='Bitswits' quality={75} src={main} className='img-fluid' />
                            </div>

                        </Col>
                        <Col xl={4}>

                            <div className={`${styles.longline3}`}>
                                <div className={styles.expertise1}>
                                    <Image alt='Bitswits' quality={75} src={gameicon2} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Quality Graphics</h3>
                                    <p>BitsWits is committed to providing its clients with high-quality 3D graphics that capture the attention of players, making the gaming experience even more immersive.</p>
                                </div>

                            </div>

                            <div className={`${styles.longline1}`}>
                                <div className={styles.expertise1}>
                                    <Image alt='Bitswits' quality={75} src={gameicon4} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Quality Assurance</h3>
                                    <p>BitsWits employs a rigorous quality assurance process to ensure that every game created meets the highest standards of excellence. This helps to guarantee an exciting and bug-free gaming experience for all players.</p>
                                </div>

                            </div>

                        </Col>
                    </Row>

                </Container>



            </section>



        </>
    )
}

export default Engage3d