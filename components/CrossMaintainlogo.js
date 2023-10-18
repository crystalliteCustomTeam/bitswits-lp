import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewcrossMaintainlogo.module.css";

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
                            <h1 className='text-white f-55 font-bold text-center pb-4'> <span className='grdiant f-50'>Cross-Platform App Development</span> <br></br> One Codebase,Multiple Platforms, Infinite Possibilities </h1>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Custom Cross-Platform
                                        Development</h3>
                                    <p className={styles.para}>
                                        Premier provider of custom multi-platform app development services, BitsWits employs the latest technologies, including web services, databases, user experience design, development frameworks, and testing tools, to ensure that your app is optimized for all devices, from iPhones to Android phones.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Wearable Cross-Platform
                                        Apps</h3>
                                    <p className={styles.para}>
                                        Our team specializes in developing state-of-the-art wearable apps that seamlessly integrate with cameras and sensors across various platforms. Let us enhance your user experience with our expertise.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'> Cross-Platform
                                        UI/UX Design Services</h3>
                                    <p className={styles.para}>
                                        Our cross-platform UI/UX design services provide a seamless user experience across all devices & operating systems. Our experts deliver visually stunning & user-friendly interfaces that keep users engaged & satisfied.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold '>Web-Based Cross-Platform Apps</h3>
                                            <p className={styles.para1}>
                                                We provide a variety of options for cross-platform web app development, from cross-platform games to enterprise-level software solutions. Our cross-platform app development products are designed to be secure, user-friendly & highly adaptive.
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
                                    <h3 className='text-white font25 font-bold text-center'>AI Integrated Cross Platforms Apps</h3>
                                    <p className={styles.possibilities}>
                                        BitsWits specializes in creating custom applications that utilize the power of artificial intelligence. Our AI-integrated cross-platform application development services offer innovative and intuitive solutions that leverage the latest AI technologies to automate tasks, streamline processes, and reduce costs for your business.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Cross Platforms Apps Consulting</h3>
                                    <p className={styles.possibilities}>
                                        Our team of cross-platform app developers actively listen to your ideas and craft custom plans to precisely meet your unique requirements. We highly value every project and strive to provide exceptional services that exceed your expectations.
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