import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import styles from "@/styles/EcommerceSlider.module.css";


///

import banImg1 from '../public/ecommerce/1.webp'
import banImg2 from '../public/ecommerce/2.webp'
import banImg3 from '../public/ecommerce/3.webp'
import banImg4 from '../public/ecommerce/4.webp'
import banImg5 from '../public/ecommerce/5.webp'
import banImg6 from '../public/ecommerce/6.webp'
import banImg7 from '../public/ecommerce/7.webp'



const EcommerceSlider = () => {

    var Ecommerceslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.slider}>
                <Row>
                    <Col lg={12}>

                        <Slider {...Ecommerceslider} className="">
                            <div className="">
                                <Image alt="BitsWits" src={banImg1} className="mx-auto img-fluid" />
                            </div>
                            <div className="">
                                <Image alt="BitsWits" src={banImg2} className="mx-auto img-fluid" />
                            </div>
                            <div className="">
                                <Image alt="BitsWits" src={banImg3} className="mx-auto img-fluid" />
                            </div>
                            <div className="">
                                <Image alt="BitsWits" src={banImg4} className="mx-auto img-fluid" />
                            </div>
                            <div className="">
                                <Image alt="BitsWits" src={banImg5} className="mx-auto img-fluid" />
                            </div>
                            <div className="">
                                <Image alt="BitsWits" src={banImg6} className="mx-auto img-fluid" />
                            </div>
                            <div className="">
                                <Image alt="BitsWits" src={banImg7} className="mx-auto img-fluid" />
                            </div>
                        </Slider>

                    </Col>
                </Row>
            </section>
        </>
    )
}

export default EcommerceSlider