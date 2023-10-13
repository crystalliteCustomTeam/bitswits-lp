import React from 'react'
import styles from '@/styles/Globalset.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/global/1.png'
import icon2 from '../public/images/global/2.png'
import icon3 from '../public/images/global/3.png'
import icon4 from '../public/images/global/4.png'
import icon5 from '../public/images/global/5.png'
import icon6 from '../public/images/global/6.png'

import icon7 from '../public/images/global/7.png'
import icon8 from '../public/images/global/8.png'
import icon9 from '../public/images/global/9.png'
import icon10 from '../public/images/global/10.png'
import icon11 from '../public/images/global/11.png'
import icon12 from '../public/images/global/12.png'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Globalsucces = () => {



    var awardslogo = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1
       
    };



    return (
        <>

            <section className={styles.global}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <h3 className={styles.develop}>App Developers</h3>
                            <h2 className={styles.sucees}>Global Success</h2>
                        </Col>
                    </Row>

                    <Row>
                        <div className={styles.atten}>
                            <Image quality={75} src={icon1} className='img-fluid' />
                            <Image quality={75} src={icon2} className='img-fluid' />
                            <Image quality={75} src={icon3} className='img-fluid' />
                            <Image quality={75} src={icon4} className='img-fluid' />
                            <Image quality={75} src={icon5} className='img-fluid' />
                            <Image quality={75} src={icon6} className='img-fluid' />

                        </div>

                        <div className={styles.atten}>
                            <Image quality={75} src={icon7} className='img-fluid' />
                            <Image quality={75} src={icon8} className='img-fluid' />
                            <Image quality={75} src={icon9} className='img-fluid' />
                            <Image quality={75} src={icon10} className='img-fluid' />
                            <Image quality={75} src={icon11} className='img-fluid' />
                            <Image quality={75} src={icon12} className='img-fluid' />

                        </div>
                    </Row>

                    <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                   
                            <Image quality={75} src={icon1} className='img-fluid' />
                            <Image quality={75} src={icon2} className='img-fluid' />
                            <Image quality={75} src={icon3} className='img-fluid' />
                            <Image quality={75} src={icon4} className='img-fluid' />
                            <Image quality={75} src={icon5} className='img-fluid' />
                            <Image quality={75} src={icon6} className='img-fluid' />
                            <Image quality={75} src={icon7} className='img-fluid' />
                            <Image quality={75} src={icon8} className='img-fluid' />
                            <Image quality={75} src={icon9} className='img-fluid' />
                            <Image quality={75} src={icon10} className='img-fluid' />
                            <Image quality={75} src={icon11} className='img-fluid' />
                            <Image quality={75} src={icon12} className='img-fluid' />

                       


                    </Slider>

                </Container>


            </section>



        </>
    )
}

export default Globalsucces