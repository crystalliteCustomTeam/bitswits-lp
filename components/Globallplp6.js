import React from 'react'
import styles from "@/styles/Globallplp6.module.css";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import team1 from '../public/images/bestglobal/global.png'

import bestglobal1 from '../public/images/mobilelpfinal/global/1.png'
import bestglobal2 from '../public/images/mobilelpfinal/global/2.png'
import bestglobal3 from '../public/images/mobilelpfinal/global/3.png'
import bestgloba4 from '../public/images/mobilelpfinal/global/4.png'
import bestglobal5 from '../public/images/mobilelpfinal/global/5.png'
import bestglobal6 from '../public/images/mobilelpfinal/global/6.png'
import bestglobal7 from '../public/images/mobilelpfinal/global/7.png'
import bestgloba8 from '../public/images/mobilelpfinal/global/8.png'
import bestglobal9 from '../public/images/mobilelpfinal/global/9.png'
import bestglobal10 from '../public/images/mobilelpfinal/global/10.png'
import bestglobal11 from '../public/images/mobilelpfinal/global/11.png'
import bestgloba12 from '../public/images/mobilelpfinal/global/12.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewHomeGlobal = () => {


    let lctonSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.team}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 className='font30 fw800 white center'>World-Renowned</h3>
                            <h2 className={`${styles.success} center`}>Brands Trust Us</h2>


                            <div className={styles.postpoint}>
                                <div className={styles.loop}>
                                    <Image quality={75} src={bestglobal1} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal2} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal3} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba4} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal5} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal6} className='img-fluid' alt='BitsWits' />
                                </div>

                                <div className={styles.pont}>
                                    <Image quality={75} src={bestglobal7} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba8} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal9} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal10} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestglobal11} className='img-fluid' alt='BitsWits' />
                                    <Image quality={75} src={bestgloba12} className='img-fluid' alt='BitsWits' />
                                </div>
                            </div>

                            <div className={styles.lctnslide}>
                                <Image quality={75} src={bestglobal1} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal2} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal3} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestgloba4} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal5} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal6} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal7} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestgloba8} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal9} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal10} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestglobal11} className='img-fluid' alt='BitsWits' />
                                <Image quality={75} src={bestgloba12} className='img-fluid' alt='BitsWits' />
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewHomeGlobal