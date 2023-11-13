import React from 'react'
import styles from "@/styles/Targetaudience.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import home_btn1 from "@/public/shark/home_btn.webp"


const Targetaudience = () => {
    return (

        <>
            <section className={styles.tesla}>

                <Container>

                    <Row className={styles.after}>
                        <Col xl={12}>
                            <h3>Features Of Our Development Endeavors</h3>
                            <h2>Invigorate Your Target Audience With Dynamic Gameplay</h2>
                            <p>It's time to develop compelling storylines and rich characters with BitsWits; after all, don't you want to create an immersive <br></br> experience? We use the latest technologies and cutting-edge visuals to enable players to interact intuitively, whether playing on a PC, <br></br> console, or mobile device.</p>

                        </Col>
                    </Row>
                    <Row className='gy-0 gx-0'>
                        <Col xl={6}>
                            <div className={styles.desigh}>
                                <h3>We Ideate, Design, and Construct Expressive Games!!!</h3>
                                <p className='mb-0'>BitsWits bring your visions into gaming reality following a structured and mindful approach.</p>
                                <p>  Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game's structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!</p>
                                <Link href="#">Get to know us  <Image quality={75} alt='BitsWits' src={home_btn1} className='img-fluid' /> </Link>
                            </div>
                        </Col>
                        <Col xl={6}>

                        </Col>
                        <Col xl={6}>

                        </Col>
                        <Col xl={6}>
                        <div className={styles.desigh}>
                                <h3>We Design Flawless, Captivating User Interfaces And Experiences!!!</h3>
                                <p>BitsWits shares a renowned name in developing top-class UI/UX processes that glued gamers to the screen for stretched hours. Our in-depth analysis of user behavior helps us create the perfect interface for each game, ensuring that no two experiences are the same. Our industry-trained game developers develop UI/UX optimized for maximum engagement and satiation.</p>
                                <Link href="#">Get to know us <Image quality={75} alt='BitsWits' src={home_btn1} className='img-fluid' /> </Link>
                              
                            </div>
                        </Col>
                        <Col xl={6}>
                        <div className={styles.desigh}>
                                <h3>We Utilize Cutting-Edge Mobile Gaming Technologies!!!</h3>
                                <p>BitsWits collar the intricacies of mobile gaming technology and help develop a strategy for success. We use cutting-edge software, languages, and frameworks; you can enjoy superior graphics and sound that bring every battle, mission, or quest to life. Our innovative network protocols will keep your game running smoothly with low latency and excellent responsiveness.</p>
                                <Link href="#">Get to know us  <Image quality={75} alt='BitsWits' src={home_btn1} className='img-fluid' /> </Link>
                             
                            </div>
                        </Col>
                        <Col xl={6}>

                        </Col>
                    </Row>
                </Container>
            </section>





        </>


    )
}

export default Targetaudience