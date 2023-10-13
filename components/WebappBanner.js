import React from 'react'
import styles from "@/styles/Iosbanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import BannerImage from "@/public/images/iosbanner/webapp.png"
import icon11 from '../public/newMobilePageImages/city1.png'
import icon12 from '../public/newMobilePageImages/city2.png'
import icon13 from '../public/newMobilePageImages/city4.png'
import icon14 from '../public/newMobilePageImages/city3.png'
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
import NewAddress from './NewAddress';



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
                            <p className={`${styles.just} text-center f-16 font-medium mb-0`}>Top-Notch Web Development Company</p>
                            <h3 className={`${styles.develop} text-center f-50 font-bold mb-2`}>
                                Where Imagination Meets <br></br>
                                Creativity
                            </h3>

                            <p className='white center mb-4'>
                                BitsWits is a future-forward, human-centered, and client-focused web development company that <br></br> revolutionizes the way businesses appear on the online paradigm. We build dynamic, multi-purpose, <br></br> secure, and highly-performing websites that help brands gain online traction in no time.

                            </p>


                            <div className={styles.pont}>
                                <Link className={styles.book} href="#">Book A Call</Link>
                                <Link className={styles.about} href="#">Live Chat</Link>
                            </div>

                            <div className='mt-5 center'>
                                <Image quality={100} src={BannerImage} className={`img-fluid`} />
                            </div>

                        </Col>
                    </Row>
                </Container>
                <div className={`${styles.bannerform} blkgrdiant pt-4 pt-lg-5 pb-lg-3 pb-4`}>
                <NewAddress />
                </div>

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