import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewaugmentedMaintainlogo.module.css";

import { Container, Row, Col } from 'react-bootstrap'

// ------------- //
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




const AugmentedMaintainlogo = () => {

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
                            <p className={` f-20 font-bold text-white text-center mb-0`}> BitsWits Sets New Standards
                            </p>
                            <h1 className='text-white f-58 font-bold text-center pb-4'>

                                Expert <span className='grdiant'>Augmented Reality <br></br> Development </span>
                                at Your Service!


                            </h1>


                        </Col>

                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app44}>
                                <div>
                                    <h3 className='text-white font25 font-bold'>2D, 3D, And Isometric Games Development</h3>
                                    <p className={styles.possibilities}>
                                    We make games super cool by integrating augmented reality elements into 2D, 3D, and Isometric games, creating captivating and dynamic visuals. 
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app55}>
                                <div>
                                    <h3 className='text-white font25 font-bold'>Interactive 3D Visual Learning for Education with AR Technology</h3>
                                    <p className={styles.possibilities}>
                                    Using AR, we create fun 3D experiences for learning. Our user-friendly designs and activities offer an engaging way to understand things better.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold '>AR powered Travel Experiences for the Modern Explorer</h3>
                                            <p className={styles.para1}>
                                            We develop augmented reality solutions for the travel industry, integrating immersive navigation, virtual tours, interactive guides, and cultural experiences for enhanced travel exploration.
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
                                    <h3 className='text-white font25 font-bold text-center'>Design Insight and Manufacturing Digital Models With AR</h3>
                                    <p className={`${styles.possibilities} text-center`}>
                                    Our advanced AR solutions for manufacturing, facilitate precise design insights and digital model visualization to optimize efficiency and streamline production processes effectively.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>3D Visual Presentation for Product Launch Through AR </h3>
                                    <p className={`${styles.possibilities} text-center`}>
                                    Our AR solutions offer 3D visual presentations, allowing users to visualize products in real-world contexts and accurately measure space requirements.
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

export default AugmentedMaintainlogo