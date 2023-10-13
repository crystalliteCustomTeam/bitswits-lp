import Image from 'next/image';
import React from 'react';
// import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import style from '@/styles/artificialIntelligence/AiLogo.module.css';

import logo1 from '@/public/blockchain/images/logo-1.png';
import logo2 from '@/public/blockchain/images/logo-2.png';
import logo3 from '@/public/blockchain/images/logo-3.png';
import logo4 from '@/public/blockchain/images/logo-4.png';
import logo5 from '@/public/blockchain/images/logo-5.png';
import logo6 from '@/public/blockchain/images/logo-6.png';
import Slider from "react-slick";

function LogoSlide() {


    let settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className={`${style.aiSection}`}>
                <Container>
                    <Row>
                        <Col>
                            <Slider {...settings} className={`${style.partnerLogos} partnerLogos ForSeoLogo`}>
                                <div>
                                    <Image quality={75} src={logo1} width="127" alt="trustPilot" height="auto" />
                                </div>
                                <div>
                                    <Image quality={75} src={logo2} alt="amazon" width="127" height="auto" />
                                </div>
                                <div>
                                    <Image quality={75} src={logo3} alt="googleCloud" width="127" height="auto" />
                                </div>
                                <div>
                                    <Image quality={75} src={logo4} alt="microSoft" width="127" height="auto" />
                                </div>
                                <div>
                                    <Image quality={75} src={logo5} alt="googlePartner" width="127" height="auto" />
                                </div>
                                <div>
                                    <Image quality={75} src={logo6} alt="fb" width="127" height="auto" />
                                </div>

                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default LogoSlide;