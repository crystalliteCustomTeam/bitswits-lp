import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Capabilitiesnft.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import blog212 from '../public/3d-game-development/images/blog1.png'
import blogModels from '../public/3d-game-development/images/3D-MODELS.png'
import blogCharacter from '../public/3d-game-development/images/CHARACTER-DESIGN.png'
import blogBackground from '../public/3d-game-development/images/2D-BACKGROUND-ART.png'
import blogUIUX from '../public/nftslider/uiux.png'
import blogDesign from '../public/3d-game-development/images/CHARACTER-DESIGN.png'
import blogGames from '../public/3d-game-development/images/Slots-Games-Concept.png'
import blogHidden from '../public/3d-game-development/images/Hidden-Objects.png'

const Capabilitiesnft = () => {


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
                                    <h2>Creating Digital Magic: Tap Into the <br></br> Power of On-Demand NFT Game <br></br> Development</h2>
                                    <p className='white'>BitsWits combine the power of blockchain technology with digital gaming to create innovative and captivating experiences. We uphold the mission of bringing a new kind of entertainment to the world—one that is safe, secure, and exciting! Whether NFT games for mobile, PC, and console platforms, our games feature dynamic gameplay, stunning graphics, and immersive storylines that captivate players. With cutting-edge technology and unbeatable artistry, we are transforming gaming into an entirely new experience.</p>
                                </div>
                                <Link className={styles.about} href="#">LET'S CONNECT</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <div className={styles.connsct}>
                            <Row className={` ${styles.bor}  mt-5 mb-5 `}>


                                <Col lg={2}><div className={styles.line1}></div></Col>
                                <Col lg={2}><div className={styles.line2}></div></Col>
                                <Col lg={2}><div className={styles.line3}></div></Col>
                                <Col lg={2}><div className={styles.line4}></div></Col>
                                <Col lg={2}><div className={styles.line5}></div></Col>
                                <Col lg={2}><div className={styles.line6}></div></Col>
                                <Col lg={2}><div className={styles.line7}></div></Col>
                                <Col lg={2}><div className={styles.line8}></div></Col>
                                <Col lg={2}><div className={styles.line9}></div></Col>


                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

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

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={blog212} alt='bitswits' className='img-fluid' />
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

export default Capabilitiesnft