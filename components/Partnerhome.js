import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Partner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import right from '../public/images/homebanner/right-arrow.webp'
import laptop from '../public/images/partner/laptop.webp'
import servicecard from '../public/images/partner/service-card.webp'

import hybird from '../public/images/partnerpoiny/d-hybrid.webp'
import native from '../public/images/partnerpoiny/d-native.webp'

const Partner = () => {

    let prtnrSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={styles.hearfelt}>
            <Container>
                <Row className={`${styles.project} justify-content-between`}>
                    <Col lg={2}>
                        <h3 className="f-20 white f-montserrat f-700 mb-2 letterspace">OUR HEARTFELT SERVICES</h3>
                    </Col>
                    <Col lg={12}>
                        <h2 className="f-50 f-playfair f-700 white t-center mb-4">

                            The <span className='grdiant'>Partner That Makes You</span> A
                            Shining Star!

                        </h2>

                    </Col>
                </Row>

                <div className='d-lg-block d-none'>
                    <Row className='gy-5'>
                        <Col lg={6}>
                            <div className={styles.rightpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Mobile <br className="d-none d-xl-block" /> <span className='grdiant'>Application Development</span> </h3>
                              
                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                BitsWits mobile app developers love creating awesome mobile apps for you with all the challenges accepted. With the best Android and iOS app development, we are the perfect app development company in the USA to get your app idea off the ground!
                                </p>

                               

                                <Link href="#" className={styles.arrowBtn}>
                                    <span className="grdiant f-poppins f-600 f-capitalize">Explore More</span>

                                </Link>

                              

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.leftpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Mobile <br className="d-none d-xl-block" />  <span className='grdiant'>Game Development</span> </h3>
                               
                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                Our expert game developers are best when it comes to developing a concept, launching the game, and sustaining success. We strive to develop engaging gaming applications to elevate your project to its full potential - all with the utmost professionalism.
                                </p>

                                <Link href="#" className={styles.arrowBtn}>
                                <span className="grdiant f-poppins f-600 f-capitalize">Explore More</span>

                                </Link>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='d-lg-none d-block'>
                    <Slider {...prtnrSlider}>
                    <div className={styles.rightpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Mobile <br className="d-none d-xl-block" /> <span className='grdiant'>Application Development</span> </h3>
                              
                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                BitsWits mobile app developers love creating awesome mobile apps for you with all the challenges accepted. With the best Android and iOS app development, we are the perfect app development company in the USA to get your app idea off the ground!
                                </p>

                               

                                <Link href="#" className={styles.arrowBtn}>
                                    <span className="grdiant f-poppins f-600 f-capitalize">Explore More</span>

                                </Link>

                            </div>
                        <div className={styles.leftpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Mobile <br className="d-none d-xl-block" />  <span className='grdiant'>Game Development</span> </h3>
                               
                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                Our expert game developers are best when it comes to developing a concept, launching the game, and sustaining success. We strive to develop engaging gaming applications to elevate your project to its full potential - all with the utmost professionalism.
                                </p>

                                <Link href="#" className={styles.arrowBtn}>
                                <span className="grdiant f-poppins f-600 f-capitalize">Explore More</span>

                                </Link>

                            </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Partner