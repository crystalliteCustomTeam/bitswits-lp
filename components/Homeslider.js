import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Homeslider.module.css'
import { Row, Col, Container } from 'react-bootstrap'
// images
import logo1 from '../public/images/logoservices/1.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon20 from '../public/images/logoservices/1.svg'
import icon30 from '../public/images/logoservices/2.svg'
import icon40 from '../public/images/logoservices/3.svg'
import icon50 from '../public/images/logoservices/4.svg'
import icon60 from '../public/images/logoservices/5.svg'
import icon70 from '../public/images/logoservices/6.svg'
import icon80 from '../public/images/logoservices/7.svg'



const Homeslider = () => {


    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className={`${styles.peace} newbird`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 class="black f-20 f-700 center mb-4">SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!</h3>
                            <h2 class="black f-40 f-700 center">We Love Transfoming Product ideas into <br></br> Digital Reality </h2>
                        </Col>
                    </Row>

                </Container>
                <div className={styles.slider}>
                    <Slider {...awardslogo} className={` ${styles.startup1} pt-5`}>

                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon20} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon30} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon40} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon50} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon60} className="img-fluid" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="bitswits" src={icon70} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon80} className="img-fluid" />
                        </div>
                    </Slider>
                </div>


            </section>

            <section className={styles.view1sec}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <Link href='#' className={styles.view} >View All Projects</Link>
                        </Col>
                    </Row>

                </Container>
            </section>



        </>
    )
}

export default Homeslider