import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Capabilities3d.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon1 from '../public/CapablitiesImgs/2dgame/icon1.png'
import icon2 from '../public/CapablitiesImgs/2dgame/icon2.png'
import icon3 from '../public/CapablitiesImgs/2dgame/icon3.png'
import icon4 from '../public/CapablitiesImgs/2dgame/icon4.png'
import icon5 from '../public/CapablitiesImgs/2dgame/icon5.png'
import icon6 from '../public/CapablitiesImgs/2dgame/icon6.png'
import icon7 from '../public/CapablitiesImgs/2dgame/icon7.png'
import icon8 from '../public/CapablitiesImgs/2dgame/icon8.png'
import icon9 from '../public/CapablitiesImgs/2dgame/icon9.png'


const Capabilities2d = () => {


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
                                    <h2>Join the Revolution - Play on Any <br></br> Platform with BitsWits' 2D Game <br></br> Development Company</h2>
                                    <p className='white'>We provide an optimal gaming experience across multiple platforms by developing games for iOS, Android,  Windows, and Mac OS. Our cross-platform approach ensures that your game reaches the broadest possible audience  of gamers. We also provide extensive testing and optimization services to ensure seamless performance and compatibility on the target platforms. BitsWits uses high-quality tools such as Unity 2D and HTML5 to develop custom games to ensure maximum device performance. So, get in touch with us today, and let us help you take your gaming  venture to the next level!</p>
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
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome prohome1 mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon1} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon2} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon3} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon4} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>



                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon5} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon6} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon7} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon8} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image quality={75} src={icon9} alt='bitswits' className='img-fluid' />
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

export default Capabilities2d