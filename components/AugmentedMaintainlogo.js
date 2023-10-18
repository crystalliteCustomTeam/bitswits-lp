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
                            <p className={` f-20 font-bold text-white text-center mb-0`}> Go Beyond Expectations With
                            </p>
                            <h1 className='text-white f-58 font-bold text-center pb-4'>

                                Enhance your customer's experience <br></br> and empower your employees with<br></br> top-tier   <span className="grdiant f-40"> Augmented Reality<br></br> Development </span> Service

                            </h1>


                        </Col>

                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app44}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>AR, Game Development<br></br>
                                        2D, 3D and Isometric Games</h3>
                                    <p className={styles.possibilities}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app55}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Education<br></br>
                                        3D Visual Animations |<br></br>
                                        Interactions & Clicks</h3>
                                    <p className={styles.possibilities}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white f-25 font-bold '>Travel <br></br>
                                                Interactive, Real-Time Guide</h3>
                                            <p className={styles.para1}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
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
                                    <h3 className='text-white f-25 font-bold text-center'>Manufacturing <br></br>
                                        Digital Models | Design Insight</h3>
                                    <p className={styles.possibilities}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Product Launch <br></br>
                                        3D Visual Presentation | <br></br>
                                        Visualize, Measure Space</h3>
                                    <p className={styles.possibilities}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
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