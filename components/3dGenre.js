import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/3dGenre.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/3d-game-development/images/gameicon1.png"
import gameicon2 from "@/public/3d-game-development/images/gameicon2.png"
import gameicon3 from "@/public/3d-game-development/images/gameicon3.png"



const Genreof3dgames = () => {

    return (
        <>
            <section className={styles.ourserve}>
                <Container>
                    <Row className={styles.which}>
                        <Col xl={12}>
                            <p className='text-white text-center font20 font-bold'>OUR SERVICES ARE WHERE INNOVATION MEETS PLAY</p>
                            <h3 className='text-white text-center font65 font-bold'>Which Genre Of Games Do We Create?</h3>
                        </Col>
                    </Row>
                    <Row className={` ${styles.play} gx-3 mt-5`}>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} alt='Bitswits' src={gameicon1} className='img-fluid' />
                                <h3>3D Games In Unity</h3>
                                <p>BitsWits ensure your vision is realized in an exciting, compelling 2D form from concept to completion. We specialize in pixel art and animations, level designs, scripting and effects, UI/UX design, audio production, and integration. Whether a simple arcade game, a complex platformer, puzzle-solving adventures, or an adventure-filled RPG, our team can design and develop the perfect game for you. Contact us today to bring your ideas to tangible reality!!!</p>
                                <Link href='#'>LET's CONNECT</Link>
                            </div>

                        </Col>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} alt='Bitswits' src={gameicon2} className='img-fluid' />
                                <h3>3D Games In Python</h3>
                                <p>At BitsWits, we help you build 3D games that captivate your audience. Our experienced developers share an in-depth understanding of the latest technologies and techniques, i.e., Maya, 3ds Max, and whatnot, to ensure games that look and play like no other. By incorporating rendering techniques and advanced physics into each game, we simply help your project succeed in the fierce gaming competition! Connect with us to roll out a game never played before!</p>
                                <Link href='#'>LET's CONNECT</Link>
                            </div>

                        </Col>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} alt='Bitswits' src={gameicon3} className='img-fluid' />
                                <h3>3D Mobile Games</h3>
                                <p>BitsWits proudly shares its ability to create innovative and secure NFT games that give players control over their gaming assets, allowing them to be creative and have more ownership of the content they create in-game. By leveraging the power of DLT, we commit to high-quality, secure code that offers seamless UI with minimal latency. We disrupt every genre with our creative potential, from action, adventure, and strategy to simulations. Give us a try, and let us help you enter the crypto sphere with confidence!!!</p>
                                <Link href='#'>LET's CONNECT</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Genreof3dgames