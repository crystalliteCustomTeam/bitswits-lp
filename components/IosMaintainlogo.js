import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewIosMaintainlogo.module.css";

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




const IosMaintainlogo = () => {
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
                            <p className={` f-20 font-bold text-white text-center mb-0`}> iOS App Development Services
                            </p>
                            <h3 className='text-white font65 font-bold text-center mb-0'>Craft Incredible Apps</h3>
                            <h2 className='grdiant font70 font-bold text-center pb-4'>Hire iOS App Developer!</h2>

<p className='white center'>As a premier iOS app development company, our iOS developers create eye-catching and user-friendly iPhone and iPad apps that capture attention immediately. To develop customized applications that are appropriate for Apple devices, our professional iOS developers and designers make use of the newest iOS capabilities.</p>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Custom iOS
App Development</h3>
                                    <p className={styles.para}>
                                    Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>iPhone App Development</h3>
                                    <p className={styles.para}>
                                    We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Apple Watch Development</h3>
                                    <p className={styles.para}>
                                    Our team of expert iOS developers creates exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white f-25 font-bold '>Apple TV App Development</h3>
                                            <p className={styles.para1}>
                                            Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality!
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
                                    <h3 className='text-white f-25 font-bold text-center'>iPhone App Designing</h3>
                                    <p className={styles.possibilities}>
                                    Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Hybrid iPhone App Development</h3>
                                    <p className={styles.possibilities}>
                                    Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more.
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

export default IosMaintainlogo