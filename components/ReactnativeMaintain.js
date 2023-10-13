import React from 'react'
import Image from 'next/image';
import styles from "@/styles/ReactnativeMaintain.module.css";

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




const ReactnativeMaintain = () => {
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
                            <p className={` f-20 font-bold text-white text-center mb-0`}>Go Beyond Expectations With
                            </p>
                            <h1 className='text-white f-55  font-bold text-center pb-3'>React Native App Development In A Whole
                                New Way - Access Unique Services &
                                Solutions!</h1>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>React Native Mobile App
                                        Development Services</h3>
                                    <p className={styles.para}>
                                        Our expert team of React Native developers creates high-performance, native-like mobile apps for both Android and iOS platforms. With our React Native mobile app development services, you can ensure the best user experience for your app users.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Expert React Native Code
                                        Development Services</h3>
                                    <p className={styles.para}>
                                        Our React Native code development services ensure your app is developed with clean, efficient, and high-quality code. Our experienced developers ensure that your app's performance is optimized for performance and scalability.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Expert React Native App
                                        Maintenance Services</h3>
                                    <p className={styles.para}>
                                        We provide reliable and efficient React Native app maintenance services to maintain your app up-to-date with the latest features and functionalities. Our team of experts ensures that your app runs smoothly, is bug-free, and is optimized for performance.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={7}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white f-25 font-bold '>Hybrid Mobile App with React Native</h3>
                                            <p className={styles.para1}>
                                                Our React Native, hybrid mobile app development services combine the benefits of both native and web-based apps. This approach allows for faster development, cost-effectiveness, & cross-platform compatibility.
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
                                    <h3 className='text-white f-25 font-bold text-center'>Custom React Plugin<br></br>
                                        Development for Apps</h3>
                                    <p className={styles.possibilities}>
                                        Our React Native plugin development services allow you to integrate custom features into your app. We create customized plugins that enhance your app's functionality and provide a unique user experience.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Custom React Native UI/UX <br></br>
                                        Design for Apps</h3>
                                    <p className={styles.possibilities}>
                                        Our React Native UI/UX design services ensures your app has an intuitive, user-friendly interface with stunning visuals. We create customized designs for your app that look great and provide a seamless user experience.
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

export default ReactnativeMaintain