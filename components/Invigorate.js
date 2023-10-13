import React from 'react'
import styles from '../styles/Invigorate.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import rating1 from '../public/images/after/1.png'
import rating2 from '../public/images/after/2.png'
import rating3 from '../public/images/after/3.png'
import rating4 from '../public/images/after/4.png'
import Image from 'next/image'
import Link from 'next/link'

const Invigorate = () => {
    return (
        <>
            <section className={styles.sign}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20  f-700 white t-center'>FEATURES OF <span className='grdiant'>OUR DEVELOPMENT</span> ENDEAVORS</h3>
                            <h2 className='f-50  f-700 white t-center'>Invigorate Your <span className='grdiant'>Target Audience With Dynamic Gameplay</span> </h2>
                            <p className='f-16  f-500 white t-center'>It's time to develop compelling storylines and rich characters with BitsWits; after all, don't you want to create an immersive experience? We use the latest technologies and cutting-edge visuals to enable players to interact intuitively, whether playing on a PC, console, or mobile device.</p>
                        </Col>
                    </Row>
                    <Row className='mt-4 gy-4'>
                        <Col lg={6}>
                            <Image quality={75} src={rating1} className='img-fluid' />
                        </Col>
                        <Col lg={6}>
                            <h2 className='f-30 f-700 white'>We Ideate, Design, and Construct Expressive Games!!!</h2>
                            <p className='f-16 f-500 white'>BitsWits bring your visions into gaming reality following a structured and mindful approach.</p>
                            <p className='f-16 f-500 white'>Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game's structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!</p>

                        </Col>
                    </Row>

                    <Row className='mt-4 gy-4 alignpost'>
                        <Col lg={6}>
                            <h2 className='f-30 f-700 white'>We Design Flawless, Captivating User Interfaces And Experiences!!!</h2>
                            <p className='f-16 f-500 white'>BitsWits shares a renowned name in developing top-class UI/UX processes that glued gamers to the screen for stretched hours. Our in-depth analysis of user behavior helps us create the perfect interface for each game, ensuring that no two experiences are the same. Our industry-trained game developers develop UI/UX optimized for maximum engagement and satiation.</p>
                            <p className='f-16 f-500 white'>Now the hunger for games will see no bounds since our UI/UX experiences serve as an appetizing course of a meal for gaming enthusiasts!</p>


                        </Col>
                        <Col lg={6}>
                            <Image quality={75} src={rating2} className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='mt-4 gy-4'>
                        <Col lg={6}>
                            <Image quality={75} src={rating3} className='img-fluid' />
                        </Col>
                        <Col lg={6}>
                            <h2 className='f-30 f-700 white'>We Utilize Cutting-Edge Mobile Gaming Technologies!!!</h2>
                            <p className='f-16 f-500 white'>BitsWits collar the intricacies of mobile gaming technology and help develop a strategy for success. We use cutting-edge software, languages, and frameworks; you can enjoy superior graphics and sound that bring every battle, mission, or quest to life. Our innovative network protocols will keep your game running smoothly with low latency and excellent responsiveness.</p>
                            <p className='f-16 f-500 white'>At the same time, our advanced security technologies protect your data and privacy against malicious forces and hackers. Last but not least, our hardware-based encryption ensures that all your gaming progress is safe from prying eyes. How much better some game development company can become by leveraging innovation? Hit us up with your requirements, and VOILA, you are already halfway through the blazing-fast success!</p>

                        </Col>
                    </Row>
                    <Row className='mt-4 gy-4 alignpost'>
                        <Col lg={6}>
                            <h2 className='f-30 f-700 white'>Test, Launch, And Support!!!</h2>
                            <p className='f-16 f-500 white'>BitsWits provides end-to-end game development services to ensure your project is on track. From the initial idea stage to post-launch support, we'll be there every step of the way. We conduct rigorous tests to ensure your game is bug-free and plays well on all platforms. When your game is ready for launch, we ensure that your game is deployed without any hiccups. We also monitor performance and provide post-launch support when needed.</p>
                            <p className='f-16 f-500 white'>Simply put, BitsWits works behind the scenes to guarantee that your gaming experience is a success. With us, rest assured that your game will hit the market on time, with the highest quality possible. Contact us today, and let's get the ball rolled!</p>


                        </Col>
                        <Col lg={6}>
                            <Image quality={75} src={rating4} className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Invigorate