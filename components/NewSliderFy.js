import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
//css
import styles from '@/styles/NewSliderFy.module.css'
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//image
import icon1 from '../public/images/newbanner/icon-1.png'
import icon2 from '../public/images/newbanner/icon-2.png'
import icon3 from '../public/images/newbanner/icon-3.png'
import icon4 from '../public/images/newbanner/icon-4.png'
import icon5 from '../public/images/newbanner/icon-5.png'
import icon6 from '../public/images/newbanner/icon-6.png'
import icon7 from '../public/images/newbanner/icon-7.png'
import icon8 from '../public/images/newbanner/icon-8.png'


const NewSliderFy = () => {

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
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
            <section className={styles.slider}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.banerSlider}>
                                <Slider {...bannerslider}>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon1} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon2} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon3} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon4} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon5} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon6} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon7} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={icon8} className="img-fluid" />
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

export default NewSliderFy
