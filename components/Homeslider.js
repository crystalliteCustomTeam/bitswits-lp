
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
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';

const Homeslider = () => {



    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {





        const handleResize = () => {
            const isMobileView = window.innerWidth < 768; // Adjust the breakpoint as needed
            setSlidesPerView(isMobileView ? 1 : 5);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        const slides = document.getElementsByClassName('swiper-slide');

        const Cursor2 = document.querySelector('.swiper-slide[data-swiper-slide-index="0"]');
        Cursor2.classList.add('lt0');

        const Cursor3 = document.querySelector('.swiper-slide[data-swiper-slide-index="1"]');
        Cursor3.classList.add('lt1');

        const Cursor4 = document.querySelector('.swiper-slide[data-swiper-slide-index="2"]');
        Cursor4.classList.add('lt2');

        const Cursor5 = document.querySelector('.swiper-slide[data-swiper-slide-index="3"]');
        Cursor5.classList.add('lt3');

        const Cursor6 = document.querySelector('.swiper-slide[data-swiper-slide-index="4"]');
        Cursor6.classList.add('gt4');

        const Cursor7 = document.querySelector('.swiper-slide[data-swiper-slide-index="5"]');
        Cursor7.classList.add('gt5');

        const Cursor8 = document.querySelector('.swiper-slide[data-swiper-slide-index="6"]');
        Cursor8.classList.add('gt6');

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const slides = [
        {
            avatar: 'images/logoservices/1.svg',

        },
        {
            avatar: 'images/logoservices/2.svg',


        },
        {
            avatar: 'images/logoservices/3.svg',


        },
        {
            avatar: 'images/logoservices/4.svg',


        },
        {
            avatar: 'images/logoservices/5.svg',


        },
        {
            avatar: 'images/logoservices/6.svg',


        },
        {
            avatar: 'images/logoservices/7.svg',


        },
    ];




    // useEffect(() => {

    //     const Cursor1 = document.querySelector('.slick-slide[data-index="6"]');
    //     Cursor1.classList.add('lt4');
    //     const Cursor2 = document.querySelector('.slick-slide[data-index="5"]');
    //     Cursor2.classList.add('lt3');
    //     const Cursor3 = document.querySelector('.slick-slide[data-index="4"]');
    //     Cursor3.classList.add('lt2');
    //     const Cursor4 = document.querySelector('.slick-slide[data-index="3"]');
    //     Cursor4.classList.add('lt1');
    //     const Cursor6 = document.querySelector('.slick-slide[data-index="2"]');
    //     Cursor6.classList.add('gt2');
    //     const Cursor7 = document.querySelector('.slick-slide[data-index="1"]');
    //     Cursor7.classList.add('gt3');



    // }, []);




    const awardslogo = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500
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
                    {/* <Slider {...awardslogo} className={` ${styles.startup1} pt-5`}>

                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon20} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon30} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon40} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon50} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon60} className="img-fluid" />
                        </div>
                        <div className={`${styles.strpImg}`}>
                            <Image alt="BitsWits" src={icon70} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="BitsWits" src={icon80} className="img-fluid" />
                        </div>
                    </Slider> */}

                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        slidesPerView={slidesPerView}
                        centeredSlides={true}
                        spaceBetween={0}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 0,
                                modifier: 2.5,
                            }
                        }
                        keyboard={{ enabled: true }}
                        loop={true}

                    >
                        {slides.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="card testimonialscard">
                                    <img data-scroll data-scroll-speed="0.4" src={testimonial.avatar} alt={testimonial.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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