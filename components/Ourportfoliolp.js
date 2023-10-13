import React from 'react'
import styles from '@/styles/Ourportfoliolp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourportfolio1 from '../public/images/ourportfoliolp/1.jpg'
import ourportfolio2 from '../public/images/ourportfoliolp/2.jpg'
import ourportfolio3 from '../public/images/ourportfoliolp/3.jpg'
import ourportfolio4 from '../public/images/ourportfoliolp/4.jpg'
import ourportfolio5 from '../public/images/ourportfoliolp/5.jpg'
import ourportfolio6 from '../public/images/ourportfoliolp/6.jpg'
import ourportfolio7 from '../public/images/ourportfoliolp/7.jpg'


import Image from 'next/image';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Ourportfoliolp = () => {

    var awardslogo = {
        dots: false,
        arrows: true,
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
                    dots: true,
                    arrows: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles.ourportfolio}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={12}>
                            <h5 className='font20 fontf font-semibold t-center letterspace black'>Work</h5>
                        </Col>
                        <Col lg={12}>
                            <h2 className='font65 black fontf font-bold line60 black t-center'>Our <span className='grdiant'>Portfolio</span></h2>
                        </Col>
                        {/* <Col lg={3}>
                            <Link className={styles.bttns1} href="/our-work">View All Work</Link>
                        </Col> */}
                    </Row>

                    <Slider {...awardslogo} className='mt-lg-5 pt-3 ourarrows2'>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio1} className="img-fluid  mb-4" />
                            <Link className='fontf font25 black font-bold mt-4' href='/travel-app-development'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio2} className="img-fluid  mb-4" />
                            <Link className='fontf font25 black font-bold mt-4' href='/food-delivery-app-development'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio3} className="img-fluid  mb-4" />
                            <Link className='fontf font25 black font-bold mt-4' href='/bacteria-app-development'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio4} className="img-fluid mb-4" />
                            <Link className='fontf font25 black font-bold mt-5' href='/music-streaming-app-development'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio5} className="img-fluid mb-4" />
                            <Link className='fontf font25 black font-bold mt-5' href='/ez-ride'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio6} className="img-fluid mb-4" />
                            <Link className='fontf font25 black font-bold mt-5' href='/prohealth-application-development'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio7} className="img-fluid mb-4" />
                            <Link className='fontf font25 black font-bold mt-5' href='/real-estate-app-development-solutions'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                      
                    </Slider>
                    <Row className={`mt-5 mb-0 pt-5 pt-lg-0`}>
                        <Col lg={4} className='mx-auto'>
                            <Link className={styles.bttns1} href="/our-work">View All Work</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Ourportfoliolp