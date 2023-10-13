import React from 'react'
import styles from '@/styles/About.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/about/icon1.svg'
import icon2 from '../public/images/about/icon2.svg'
import icon3 from '../public/images/about/icon3.svg'
import icon4 from '../public/images/about/icon4.svg'
import icon5 from '../public/images/about/icon5.svg'
import icon6 from '../public/images/about/icon6.svg'
import thumb1 from '../public/images/about/thumbnail-1.png'
import thumb2 from '../public/images/about/thumbnail-2.png'
import thumb3 from '../public/images/about/thumbnail-3.png'
import thumb4 from '../public/images/about/thumbnail-4.png'
import thumb5 from '../public/images/about/thumbnail-5.png'
import thumb6 from '../public/images/about/thumbnail-6.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className={styles.aboutus}>

                <Container>
                    <Row className='aboutfold'>
                        <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>About Us</h3>
                        </Col>
                        <Col lg={10}>
                            <h2 className='font50 black fontf font-bold line60'>Ride in the Journey of Innovation with the Most Trusted  <span className='grdiant font-bold'>Mobile App Development Company!</span> </h2>

                            <p className='font20 fontf font-medium mt-4 mb-4 black'> 
                            
                            Take a turning trip through the innovation sector, where the <span className='grdiant font-bold'>top app developers</span> provide brilliance on the center of the stage. 
                            
                             </p>

                            <p className='font20 fontf font-medium mt-4 mb-4 black'>
                                
                            We at BitsWits are the dream <span className='grdiant font-bold'>app developers</span> who create applications that capture the exact essence of innovation, perfecting every line of code and every pixel.
                                
                                  </p>

                            <Row className={styles.decade}>

                                <Col md={4}>
                                    <div className={`${styles.toltip} ${styles.smlp}`}>
                                        <p className='fontf font20 font-medium m-0 black'>Our portfolio includes:</p>
                                    </div>
                                </Col>

                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon4} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font20 font-medium m-0 black'>Home ,</p>
                                        <Image alt="bitswits" className={styles.tolImg}
                                            src={thumb1}

                                        />
                                    </div>
                                </Col>

                                <Col md={2} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon1} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font20 font-medium m-0 black'>Real Estate,</p>
                                        <Image alt="bitswits" className={styles.tolImg}
                                            src={thumb2}

                                        />
                                    </div>

                                </Col>


                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon6} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font20 font-medium m-0 black'>Food ,</p>
                                        <Image alt="bitswits" className={styles.tolImg}
                                            src={thumb3}

                                        />
                                    </div>

                                </Col>

                                <Col md={4} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon5} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font20 font-medium m-0 black'>Health ,</p>
                                        <Image alt="bitswits" className={styles.tolImg}
                                            src={thumb4}

                                        />
                                    </div>

                                </Col>

                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon2} className='img-fluid' />
                                    </div>

                                    <div className={`${styles.toltip} ${styles.smlp}`}>
                                        <p className='fontf font20 font-medium m-0 black'>Ecommerce,</p>
                                        <Image alt="bitswits" className={styles.tolImg}
                                            src={thumb5}

                                        />
                                    </div>

                                </Col>

                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon3} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font20 font-medium m-0 black'>Education ,</p>
                                        <Image alt="bitswits" className={styles.tolImg}
                                            src={thumb6}

                                        />
                                    </div>

                                </Col>



                            </Row>



                            <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon4} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>Home</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon1} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>food</p>
                                    </div>

                                </div>


                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon6} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>improve health</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon5} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>make better trade</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon2} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>educate leaders</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="bitswits" src={icon3} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>and more</p>
                                    </div>

                                </div>


                            </Slider>

                            <Button className={styles.aboutbtn}>About US</Button>

                        </Col>
                    </Row>
                </Container>


            </section>


        </>
    )
}

export default About