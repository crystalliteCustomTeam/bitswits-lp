import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Capabilities3d.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import blog212 from '../public/3d-game-development/images/blog1.png'
import blogModels from '../public/3d-game-development/images/3D-MODELS.png'
import blogCharacter from '../public/3d-game-development/images/CHARACTER-DESIGN.png'
import blogBackground from '../public/3d-game-development/images/2D-BACKGROUND-ART.png'
import blogUIUX from '../public/nftslider/uiux.png'
import blogDesign from '../public/3d-game-development/images/CHARACTER-DESIGN.png'
import blogGames from '../public/3d-game-development/images/Slots-Games-Concept.png'
import blogHidden from '../public/3d-game-development/images/Hidden-Objects.png'

const Capabilities3d = () => {


    var awardslogo = {
        dots: true,
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

            <section className={styles.home}>
                <Container className='qtechcap'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <h3>On-Demand</h3>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <div>
                                    <h2>Experience Immersive,<br></br>
                                        Realistic 3D Gaming with Us</h2>
                                    <p className='white f-14'>We focus on creating on-demand 3D gameplay environments, utilizing cutting-edge technologies to bring a range of virtual worlds to life. We make it happen, whether it be an action-packed first-person shooter, a thrilling online multiplayer game, or a captivating puzzle game. The cornerstone of our services caters to realistic 3D character models, dynamic lighting and shadow effects, physics-based animations, realistic particle systems, and dynamic weather effects.</p>
                                </div>
                                <Link className={styles.about} href="#">Connect Now!</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <div className={`${styles.connsct} ${styles.connsct3d}`}>
                            <Row className={` ${styles.bor}  mt-5 mb-5 `}>
                                <Col lg={2}><div className={`${styles.line1} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line2} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line3} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line4} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line5} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line6} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line7} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line8} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line9} line3d`}></div></Col>
                                <Col lg={2}><div className={`${styles.line10} line3d`}></div></Col>

                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome prohome1 mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogModels} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogCharacter} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogBackground} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogUIUX} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogDesign} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogGames} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blogHidden} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                        </Slider>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Capabilities3d