import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import CardOne from "@/public/newHomePageImages/card.png"
import lap from "@/public/newHomePageImages/lap.png"
import cool from "@/public/newHomePageImages/cool.png"
import lum from "@/public/newHomePageImages/lum.png"
import dem from "@/public/newHomePageImages/dem.png"
import World from "@/public/newHomePageImages/world.png"
import WhatImage from "@/public/newHomePageImages/what_Image.png"
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




const NewHomeMaintain = () => {
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
                            <p className={` f-20 font-bold text-white text-center mb-0`}>Delivering Excellence Daily
                            </p>
                            <h1 className='text-white f-55 font-bold text-center'>Trusted Development Company For Tech Solutions</h1>
                            <p className='m-0 text-white text-center'>We, at BitsWits, are dedicated to being innovative and making our clients happy. </p>
                            <p className='text-white text-center pb-3'>We specialize in customizing services for digital business evolution,
                                We bring the following services to the table…
                            </p>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>Mobile App Development</h3>
                                    <p className={styles.para}>
                                        We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.
                                    </p>
                                </div>

                                <div id="lottie-container"></div>


                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app1}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>Game Development</h3>
                                    <p className={styles.para}>
                                        Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.
                                    </p>
                                </div>

                                <div id="lottie"></div>

                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div>
                                    <h3 className='text-black f-20 font-bold text-center'>Blockchain Development</h3>
                                    <p className={styles.para}>
                                        We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.
                                    </p>
                                </div>

                                <div id="blockchain"></div>

                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={8}>
                                        <h3 className='text-white f-20 font-bold '>Artificial Intelligence (Ai)</h3>
                                        <p className={styles.para1}>
                                            Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through artificial intelligence that raises its potential.
                                        </p>

                                        <div className={styles.pont}>
                                            <Link className={styles.book} href="/new-home-page#">Book A Call</Link>
                                            <Link className={styles.about} href="/new-home-page#">Live Chat</Link>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div id='artifical' ></div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col xl={6}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.possibilities}>
                                        Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.
                                    </p>
                                </div>
                                <div id="lottie-web"></div>

                            </div>

                        </Col>
                        <Col xl={6}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-black f-20 font-bold text-center'>UI/UX App Design</h3>
                                    <p className={styles.para3}>
                                        Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.
                                    </p>
                                </div>
                                <div id="lottie-uiux"></div>


                            </div>
                        </Col>
                        <Col xl={8}>

                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white f-20 font-bold'>AR/VR</h3>
                                        <p className='text-white f-16'>BitsWits serves as your AR/VR portal, we specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience. </p>
                                    </div>
                                    <div>
                                        <div id="lottie-arvrapp"></div>

                                    </div>

                                </div>

                            </div>

                        </Col>
                        <Col xl={4}>
                            <div className={styles.app7}>
                                <div>
                                    <h3 className='text-white f-20 font-bold text-center'>Internet of Things</h3>
                                    <p className={styles.para9}>We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.</p>
                                </div>

                                <div id="lottie-internetapp"></div>
                            </div>

                        </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewHomeMaintain