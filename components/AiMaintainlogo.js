import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewaiMaintainlogo.module.css";

import { Container, Row, Col } from 'react-bootstrap'
//
import cardNine from '../public/newHomePage/images/newMaintain9.png'
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




const AndriodMaintainlogo = () => {
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

            <section className={`${styles.newHomeBg} combo` }>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center mb-0`}> Go an Extra Mile with
                            </p>
                            <h1 className='text-white f-55 font-bold text-center pb-4'>Our Advanced  <br></br><span className='grdiant f-50'> Artificial Intelligence Development  </span><br></br> Services </h1>


                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Smart Systems</h3>
                                    <p className={styles.para}>
                                    We create clever systems that can do tasks automatically for your business, can understand information, learn from it, and help make your work easier and faster. 
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Gesture Recognition</h3>
                                    <p className={styles.para}>
                                    BitsWits specializes in creating technology that can recognize and respond to your movements. Our systems understand gestures like hand waves or nods, allowing you to control devices effortlessly through simple motions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Facial Recognition</h3>
                                    <p className={styles.para}>
                                    Hire us to build technology that can recognize your face, just like a key unlocks a door. Our systems use your unique features to grant access and make interactions easier and more secure.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold '>Location Tracking</h3>
                                            <p className={styles.para1}>
                                            We develop location tracking technology using intelligent AI algorithms to monitor the whereabouts of people or things. Our system predicts movement patterns, assisting businesses in effectively managing their assets and making informed decisions.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        {/* <div id='artifical' ></div> */}
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Motion Sensing</h3>
                                    <p className={styles.possibilities}>
                                    we merge AI algorithms with motion sensors, enabling high-precision motion detection. Our model training and optimization ensure smooth integration for real-time and reliable motion sensing capabilities.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Web Conferencing </h3>
                                    <p className={styles.possibilities}>
                                    At BitsWits, we use smart technology to make online meetings better. Our system has features like automatic note-taking, language translation, and clear video, making virtual meetings easier and more effective.
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

export default AndriodMaintainlogo