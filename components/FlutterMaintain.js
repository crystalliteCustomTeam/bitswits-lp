import React from 'react'
import Image from 'next/image';
import styles from "@/styles/FlutterMaintain.module.css";

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




const FlutterMaintain = () => {
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
                            <p className={` f-20 font-bold text-white text-center mb-0`}>What We Do
                            </p>
                            <h1 className='text-white f-55 font-bold text-center pb-3'>No Challenge Too Great For Our Flutter <br></br>
                                App Development Company!</h1>
                            <p className='text-center text-white f-15 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Dart Application
                                        Development Services</h3>
                                    <p className={styles.para}>
                                        Our Dart application development services create efficient and powerful hybrid apps using the latest libraries to modernize your native apps. We'll help your app stand out and succeed with seamless solutions exceeding expectations.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Flutter Cross-Platform
                                        App Development</h3>
                                    <p className={styles.para}>
                                        As a leading Flutter app development company, our expertise lies in developing innovative Flutter apps and provide solutions that extend your app's potential reach, driving your business growth to new heights. Hire us, and experience the difference of our exceptional Flutter app development services.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Flutter Development
                                        For IOS & Android</h3>
                                    <p className={styles.para}>
                                        We make stellar Flutter apps that work on both iOS and Android platforms. We aim to make your application stand out in the industry with our Flutter app development service. Trust our expert flutter developers to deliver seamless user experience and robust functionality.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={7}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white f-25 font-bold '>Customized Flutter Development Solutions</h3>
                                            <p className={styles.para1}>
                                                Flutter app developers at BitsWits can make customized powerful apps that help your business grow and reach more people. Hire top-rated Flutter development services and skyrocket your business growth.
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
                                    <h3 className='text-white f-25 font-bold text-center'>Testing & Quality Assurance</h3>
                                    <p className={styles.possibilities}>
                                        Our Flutter mobile app developers, quality analysts, and testers, collaborate seamlessly to ensure your app is free of bugs during development. We guarantee you a dependable, top-notch final product that meets your expectations.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Maintenance & Support Services
                                        For Flutter Apps</h3>
                                    <p className={styles.possibilities}>
                                        BitsWits offers maintenance and support services to keep your Flutter applications running smoothly after launch. Our experts provide top-notch services to ensure your applications remain in excellent condition for the long term, giving you peace of mind and ensuring the success of your business.
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

export default FlutterMaintain