import React from 'react'
import Image from 'next/image';
import styles from "@/styles/3dMaintain.module.css";

import { Container, Row, Col } from 'react-bootstrap'
//
import { useEffect, useRef } from "react";
import lottie from 'lottie-web';

import mobileapp from '../public/mobileapp.json';
import game from '../public/game.json';
import blockchain from '../public/blockchain.json';
import ai from '../public/artificial.json';
import web from '../public/webapp.json';
import uiux from '../public/uiuxapp.json';
import arvrapp from '../public/arvr.json';
import internetapp from '../public/internetofthings.json';




const New3dMaintain = () => {
    const anime = useRef(null);

    useEffect(() => {

        lottie.loadAnimation({
            container: document.getElementById('lottie'),
            animationData: game,
            loop: true,
            autoplay: true,
        });

        lottie.loadAnimation({
            container: document.getElementById('blockchain'),
            animationData: blockchain,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.getElementById('artifical'),
            animationData: ai,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });



        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: mobileapp,
        });

        lottie.loadAnimation({
            container: document.getElementById('lottie-web'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: web,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-uiux'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: uiux,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-arvrapp'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: arvrapp,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-internetapp'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: internetapp,
        });

    }, []);

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <h3 className={` f-20 font-bold text-white text-center mb-0`}>The Work We Undertake
                            </h3>
                            <h1 className='text-white font55 font-bold text-center '>The Genres Of Games We Develop</h1>
                            <p className={` f-16 text-white text-center pb-4`}>We are famous for creating immersive game experiences with engaging storylines, stunning visuals, and innovative gameplay mechanics.<br></br>
                                Here's an exciting rundown of what we bring to the table…</p>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app}>
                                <div className={`${styles.cardContent} text-center`}>
                                    <h3 className='text-white font22 font-bold'>3D Game Concept Art</h3>
                                    <p className={styles.para}>
                                        Our design and 3D game development team have extensive experience crafting vibrant and immersive artwork for various gaming applications. From characters and environmental designs to UI/UX, we can help define the visual identity of any game.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app1}>
                                <div className={`${styles.cardContent} text-center`}>
                                    <h3 className='text-white font22 font-bold'>3D Web and App Development</h3>
                                    <p className={styles.para}>
                                        BitsWits offers world-class solutions for both web and mobile platforms. We are specialized in creating stunning 3D apps with modern technologies such as Augmented Reality, Virtual Reality, 3D Modeling and Animation, WebGL, HTML5/CSS3, etc.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={`${styles.cardContent} text-center`}>
                                    <h3 className='text-white font25 fontfont22bold'>Advanced 3D Videos</h3>
                                    <p className={styles.para}>
                                        With our state-of-the-art technology, we can turn your
                                        ideas into fully rendered 3D game videos with stunning
                                        visuals. Our services range from custom-created 3D
                                        game videos to motion capture animation.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center mt-5'>
                                    <Col xl={8}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white f-25 font-bold mt-2 mt-lg-5'>3D Game App Integration</h3>
                                            <p className={styles.para1}>
                                                BitsWits allow you to quickly and easily add 3D gaming experiences to your existing apps so that you can play high-end games without extra coding or hardware configurations. With our services, you can also easily and quickly integrate a virtual reality (VR) or augmented reality (AR) game into your project.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        {/* <div id='artifical' ></div> */}
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col md={8}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white f-25 font-bold'>3D Imagining Art</h3>
                                    <p className={styles.possibilities}>
                                        Our team of experienced 3D artists and engineers can turn your ideas into reality with stunning visuals that will wow <br></br>your players. We specialize in creating engaging worlds with realistic landscapes, characters, and environments.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Support and Maintenance</h3>
                                    <p className={`${styles.possibilities} text-center`}>
                                        BitsWits recognizes that the game development journey doesn't end with its launch. That's why we provide our clients with comprehensive support and maintenance services to ensure their games remain attractive, immersive, and up-to-date with the latest trends.
                                    </p>
                                </div>
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


        </>
    )
}

export default New3dMaintain