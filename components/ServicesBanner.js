import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServicesBanner.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon20 from '../public/newHomePageImages/nexticon/1.png'
import icon30 from '../public/newHomePageImages/nexticon/2.png'
import icon40 from '../public/newHomePageImages/nexticon/3.png'
import icon50 from '../public/newHomePageImages/nexticon/5.png'
import icon60 from '../public/newHomePageImages/nexticon/6.png'
import icon70 from '../public/newHomePageImages/nexticon/7.png'
import icon80 from '../public/newHomePageImages/nexticon/8.png'


const ServiceBanner = (props) => {

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>

            <section className={`${styles.newHomeBg} ${styles[props.assignClass]}`}>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} text-center f-16 font-bold mb-0`}>{props.subtitle}</p>
                            <h1 className={`${styles.develop} text-center f-50 font-bold mb-2`}>{props.title}</h1>
                            <p className='font15 white center mb-3'>{props.text}</p>
                            <div className={styles.pont}>
                                <Link className={styles.about} href="tel:+18335006007">LET'S CONNECT</Link>
                            </div>
                            <div className={`${styles.banImg}`}>
                                <Image quality={75} alt='BitsWits' src={props.BannerImage} className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-5`}>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon20} className="img-fluid mx-auto" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon30} className="img-fluid mx-auto" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="BitsWits" src={icon80} className="img-fluid mx-auto" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon40} className="img-fluid mx-auto" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon50} className="img-fluid mx-auto" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon60} className="img-fluid mx-auto" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="BitsWits" src={icon70} className="img-fluid mx-auto" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default ServiceBanner