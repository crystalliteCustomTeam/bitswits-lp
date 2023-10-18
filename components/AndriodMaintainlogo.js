import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewandriodMaintainlogo.module.css";

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

            <section className={` ${styles.newHomeBg} combo`}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <h1 className='text-white f-55 font-bold text-center pb-4'>Leveling Up Your App Game With Our Slew of <br></br>
                                <span className='grdiant f-60'>Android App Development </span><br></br>
                                Service!</h1>


                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Custom Android App Development</h3>
                                    <p className={styles.para}>
                                        Our expert Android developers team can help take your business to the next level with custom Android mobile app development services. Let us create stunning visuals, intuitive interfaces, and robust security features to keep you ahead of the competition. Contact us today to get started.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Android App <br /> Integration</h3>
                                    <p className={styles.para}>
                                        Need help integrating your Android app with other software systems and APIs? Look no further. Our expert Android developers’ team is here to assist you in streamlining the process, ensuring your users have a seamless experience with enhanced functionality. Let us help take your app to the next level.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Android Game
                                        Development</h3>
                                    <p className={styles.para}>
                                        Do you plan to produce an exceptional Android mobile game that will captivate your audience? Worry no more, as our team of Android game developers can provide you with the best assistance in developing exciting and irresistible games that will keep your users hooked and always craving more.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold'>Android Wear Development</h3>
                                            <p className={styles.para1}>
                                                Expand your reach in the wearable market with our expert Android developers. Our advanced Android Wear solutions will give you a competitive edge and elevate your brand visibility. Allow us to help you take your enterprise to new heights.
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
                                    <h3 className='text-white font25 font-bold text-center'>Enterprise Android Apps</h3>
                                    <p className={styles.possibilities}>
                                        We can help streamline your business operations with our enterprise Android app development services. Our solutions cover all aspects, from employee communication and data management to workflow optimization. Contact us to learn more.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Android UI/UX Design</h3>
                                    <p className={styles.possibilities}>
                                        Our team of experienced Android designers can assist you in crafting visually appealing and user-friendly interfaces for your Android app. With our expertise, we can enhance user engagement and ensure a seamless user experience.
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