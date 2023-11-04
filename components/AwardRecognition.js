import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/Award.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

///
import banImg1 from 'public/ecommerce/1.svg'
import banImg2 from 'public/ecommerce/2.svg'
import banImg3 from 'public/ecommerce/3.svg'
import banImg4 from 'public/ecommerce/4.svg'
import banImg5 from 'public/ecommerce/5.svg'
import Image from 'next/image';

const AwardRecognition = () => {

    var bannerslider = {
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
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.awardSec}>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h2 className='font50 text-white font-bold line45'>Awards &
                                Recognition</h2>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.slider}>
                                <Slider {...bannerslider} className={styles.newLogoSlide}>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg1} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg2} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg3} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg4} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg5} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg1} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg2} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg3} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg4} className="img-fluid" />
                                    </div>
                                    <div className="">
                                        <Image alt="bitswits" width={131} height={10} src={banImg5} className="img-fluid" />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AwardRecognition