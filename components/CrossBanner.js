import React from 'react'
import styles from "@/styles/Iosbanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import BannerImage from "@/public/images/cross/crossplatform.png"
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon20 from '../public/newHomePageImages/nexticon/1.png'
import icon30 from '../public/newHomePageImages/nexticon/2.png'
import icon40 from '../public/newHomePageImages/nexticon/3.png'
import icon50 from '../public/newHomePageImages/nexticon/5.png'
import icon60 from '../public/newHomePageImages/nexticon/6.png'
import icon70 from '../public/newHomePageImages/nexticon/7.png'
 import icon80 from '../public/newHomePageImages/nexticon/8.png'



const CrossBanner = () => {

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

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} text-center f-16 font-medium mb-0`}>Create The Future With Our</p>
                            <h3 className={`${styles.develop} text-center f-50 font-bold mb-2`}>
                                Cross Platform Apps <br></br>
                                Development
                            </h3>

                            <p className='white center mb-4'>
                                With our cross-platform app development services, you can easily create apps that are compatible <br></br> across multiple platforms. No more worrying about developing an app for every operating system; <br></br> now you can develop  and deploy one single app for both Android and iOS!

                            </p>


                            <div className={styles.pont}>
                                    <Link className={styles.about} href="tel:+18335006007">LET'S CONNECT</Link>
                                </div>

                            <div className='mt-5 center'>
                                <Image quality={100} src={BannerImage} className={`img-fluid`} />
                            </div>

                        </Col>
                    </Row>
                </Container>
                 
                <div>
                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-5`}>

                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon20} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon30} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon80} className="img-fluid w-25" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon40} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon50} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon60} className="img-fluid w-50" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="bitswits" src={icon70} className="img-fluid w-25" />
                        </div>

                    </Slider>
                </div>
            </section>
        </>
    )
}

export default CrossBanner