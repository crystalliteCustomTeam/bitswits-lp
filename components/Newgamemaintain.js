import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/Newgamemaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import { useEffect, useRef } from "react";
import lottie from 'lottie-web';

// import mobileapp from '../public/mobileapp.json';
// import game from '../public/game.json';
// import blockchain from '../public/blockchain.json';
// import ai from '../public/artificial.json';

// import web from '../public/webapp.json';
// import uiux from '../public/uiuxapp.json';
// import arvrapp from '../public/arvr.json';
// import internetapp from '../public/internetofthings.json';




const Newgamemaintain = () => {
    const anime = useRef(null);

    // useEffect(() => {

    //     lottie.loadAnimation({
    //         container: document.getElementById('lottie'),
    //         animationData: game,
    //         loop: true,
    //         autoplay: true,
    //     });

    //     lottie.loadAnimation({
    //         container: document.getElementById('blockchain'),
    //         animationData: blockchain,
    //         loop: true,
    //         autoplay: true,
    //     });
    //     lottie.loadAnimation({
    //         container: document.getElementById('artifical'),
    //         animationData: ai,
    //         loop: true,
    //         autoplay: true,
    //         renderer: "svg",
    //     });



    //     lottie.loadAnimation({
    //         container: document.getElementById('lottie-container'),
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         animationData: mobileapp,
    //     });

    //     lottie.loadAnimation({
    //         container: document.getElementById('lottie-web'),
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         animationData: web,
    //     });
    //     lottie.loadAnimation({
    //         container: document.getElementById('lottie-uiux'),
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         animationData: uiux,
    //     });
    //     lottie.loadAnimation({
    //         container: document.getElementById('lottie-arvrapp'),
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         animationData: arvrapp,
    //     });
    //     lottie.loadAnimation({
    //         container: document.getElementById('lottie-internetapp'),
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         animationData: internetapp,
    //     });





    // }, []);

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center mb-0`}>The Work We Undertake
                            </p>
                            <h1 className='text-white f-55 font-bold text-center'>The Genres Of Games We Develop</h1>
                            <p className='m-0 text-white text-center'>We are famous for creating immersive game experiences with engaging storylines, <br></br> stunning visuals, and innovative gameplay mechanics.</p>
                            <p className='text-white text-center pb-3'>Here's an exciting rundown of what we bring to the table…</p>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={styles.app}>
                                <div>
                                    <h3 className='text-white f-20 font-bold '>Unity 3D Games</h3>
                                    <p className={styles.para}>
                                        We work with Unity 3D technology to foster unforgettable gaming experiences that push the boundaries of what's possible. Whether you want an action-packed shooter or a more peaceful puzzle title, we can ensure your game is a success and tends to become a revenue-generating machine!
                                    </p>
                                </div>

                                {/* <div id="lottie-container"></div> */}
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={styles.app1}>
                                <div>
                                    <h3 className='text-white f-20 font-bold '>Unity 3D Games</h3>
                                    <p className={styles.para}>
                                        Producing immersive and mind-blowing virtual reality experiences for gamers and businesses alike. Our games are designed with the player's experience in mind and feature intuitive controls, immersive soundscapes, and realistic visuals that transport players into another world. Get ready to hook your gamers and urge them to return for more!
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div>
                                    <h3 className='text-white f-20 font-bold'>3D Game Development</h3>
                                    <p className={styles.para}>
                                        Producing immersive and mind-blowing virtual reality experiences for gamers and businesses alike. Our games are designed with the player's experience in mind and feature intuitive controls, immersive soundscapes, and realistic visuals that transport players into another world. Get ready to hook your gamers and urge them to return for more!
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center '>
                                    <Col xl={7}>
                                        <h3 className='text-white f-20 font-bold '>Unreal Game Development</h3>
                                        <p className={styles.para1}>
                                            Unleashing the potential of Unreal Engine Technology, BitsWits create games that push the boundaries of what's possible in gaming and transport players into new worlds with breathtaking visuals and engaging gameplay. Let your imagination run wild with the one-of-a-kind gaming studio, BitsWits!!!
                                        </p>
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col md={6}>
                            <div className={`${styles.app4} d-flex align-items-center justify-content-center`}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>AR Game Development</h3>
                                    <p className={styles.possibilities}>
                                        BitsWits helps you unlock a world of dazzling possibilities and experience the ultimate gaming entertainment with its sheer expertise in building AR games. With cutting-edge technologies such as 3D scanning, game engine creation, and cloud-based storage, we provide innovative solutions built to stand the test of time!
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col md={6}>
                            <div className={`${styles.app5} d-flex align-items-center justify-content-center`}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>MR Game Development</h3>
                                    <p className={styles.para3}>
                                        BitsWits create technology-advanced VR games using the latest 3D graphics, motion capture systems, and robust gaming engines. From intense battles, realistic racing simulators, exciting open-world exploration, and highly interactive first-person shooters to interactive puzzles, there is nothing our gaming maestros don't excel at. Time to leave your gamers gasping for more; after all, this is what we always ensure!
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8}>
                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white f-20 font-bold'>Cross-platform Game <br></br>
                                            Development</h3>
                                        <p className='text-white f-16'>BitsWits capitalizes on the latest technologies to develop games that look and run seamlessly on all devices and gadgets. We share the experience in a slew of genres, i.e., casual, RPG, FPS, and more. Hire us to get a game that serves as the ticket to reaching a global audience!</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={`${styles.app7} d-flex align-items-center justify-content-center`}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>Buildbox Game <br></br>
                                        Development</h3>
                                    <p className={styles.para9}>BitsWits cashes in on the Buildbox platform and creates beautiful 3D worlds, physics-based levels, mind-bending puzzles, heart-pumping action games, side-scrolling runners, and whatnot. Tap into the power of this ground-breaking space with our world-class game developers, and let your rivals be knocked out of the competition!</p>
                                </div>

                                {/* <div id="lottie-internetapp"></div> */}
                            </div>

                        </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default Newgamemaintain