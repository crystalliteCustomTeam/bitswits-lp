import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewHomeMaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import cardNine from '../public/newHomePage/images/newMaintain9.png'


const NewMaintain = () => {

    var servSlider = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row className='d-none d-lg-flex g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center mb-0`}>Delivering Excellence Daily
                            </p>
                            <h1 className='text-white f-55 font-bold text-center'>Trusted Development Company For Tech Solutions</h1>
                            <p className='m-0 text-white text-center'>We, at BitsWits, are dedicated to being innovative and making our clients happy. </p>
                            <p className='text-white text-center pb-3'>We specialize in customizing services for digital business evolution and bring the following services to the table…
                            </p>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Mobile App Development</h3>
                                    <p className={styles.para}>
                                        We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Game Development</h3>
                                    <p className={styles.para}>
                                        Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Blockchain Development</h3>
                                    <p className={styles.para}>
                                        We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold '>Artificial Intelligence (Ai)</h3>
                                            <p className={styles.para1}>
                                                Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        {/* <div id='artifical' ></div> */}
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.possibilities}>
                                        Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>UI/UX App Design</h3>
                                    <p className={styles.possibilities}>
                                        Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={8}>

                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white font25 font-bold'>AR/VR</h3>
                                        <p className={`text-white f-16 ${styles.contentPara}`}>
                                            BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app7}>
                                <Image quality={75} alt='BitsWits' src={cardNine} className={`${styles.appImage}`} />
                                <div className={styles.mblApp7}>
                                    <h3 className='text-white font25 font-bold text-center'>Internet of Things</h3>
                                    <p className={styles.para9}>
                                        We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* ======================================================= */}

                    <div className='d-block d-lg-none'>
                        <Row>
                            <Col lg={12}>
                                <p className={` f-20 font-bold text-white text-center mb-0`}>Delivering Excellence Daily</p>
                                <h1 className='text-white f-55 font-bold text-center'>Trusted Development Company For Tech Solutions</h1>
                                <p className='m-0 text-white text-center'>We, at BitsWits, are dedicated to being innovative and making our clients happy.</p>
                                <p className='text-white text-center pb-3'>We specialize in customizing services for digital business evolution and bring the following services to the table.</p>
                            </Col>
                        </Row>
                        <Slider {...servSlider} className={`${styles.servSlider} servSlider`}>
                            <div className={`${styles.app} ${styles.app1}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Mobile App Development</h3>
                                    <p className={styles.para}>
                                        We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app2}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Game Development</h3>
                                    <p className={styles.para}>
                                        Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app3}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Blockchain Development</h3>
                                    <p className={styles.para}>
                                        We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app4}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold '>Artificial Intelligence (Ai)</h3>
                                    <p className={styles.para1}>
                                        Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app5}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.para}>
                                        Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app6}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold text-center'>UI/UX App Design</h3>
                                    <p className={styles.para}>
                                        Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app7}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>AR/VR</h3>
                                    <p className={`text-white f-16 ${styles.para}`}>
                                        BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.app} ${styles.app8}`}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold text-center'>Internet of Things</h3>
                                    <p className={styles.para}>
                                        We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default NewMaintain