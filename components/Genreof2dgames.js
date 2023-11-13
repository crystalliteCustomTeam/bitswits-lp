import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/Genreof2dgames.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/gameicon/ios2d.png"
import gameicon2 from "@/public/gameicon/andriodgame.png"
import gameicon3 from "@/public/gameicon/cons.png"



const Genreof2dgames = () => {
    return (
        <>
            <section className={styles.ourserve}>
                <Container>
                    <Row className={styles.which}>
                        <Col xl={12}>

                        </Col>
                    </Row>
                    <Row className={` ${styles.play} gx-3 mt-5`}>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} alt='BitsWits' src={gameicon1} className='img-fluid' />
                                <h3>IOS 2D Game <br></br>
                                    Development</h3>
                                <p>We offer top-notch iOS 2D game development services that combine top-of-the-line technology and creative designs. BitsWits is a master at creating visually compelling games with captivating storylines, vibrant characters, and intense levels. From conceptualization to design and launch, our team ensures you get a complete gaming experience that stands out from the crowd.</p>
                                <Link href='#'>LET'S CONNECT</Link>
                            </div>

                        </Col>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} alt='BitsWits' src={gameicon2} className='img-fluid' />
                                <h3>Android 2D Game <br></br>
                                    Development</h3>
                                <p>BitsWits is the go-to destination for all your Android 2D game development needs. From creating solid and user-friendly architecture to stunning visuals and fast loading times, we ensure the outcome is exceptional. With our expertise in Java language and open-source platforms like Unity 2D & Unreal Engine, we provide high-end services for game development, design & testing.</p>
                                <Link href='#'>LET'S CONNECT</Link>
                            </div>

                        </Col>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} alt='BitsWits' src={gameicon3} className='img-fluid' />
                                <h3>2D Games For Consoles
                                    And PCs</h3>
                                <p>BitsWits provides the best 2D games for PCs and consoles. With our expansive library of titles, you can get your hands on classic console and arcade games and explore new worlds full of adventure, excitement, and challenge. We create intricate storylines with captivating characters that draw players in from start to finish. We also work closely with our partners to develop world-class titles for platforms such as Xbox, PlayStation, Nintendo Switch, and Windows PC.</p>
                                <Link href='#'>LET'S CONNECT</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Genreof2dgames