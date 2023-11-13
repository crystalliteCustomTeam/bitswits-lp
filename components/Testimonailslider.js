import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Testimonailslider.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import banImg1 from '../public/images/projectprocess/phon.png'
import Link from 'next/link';
//images
import slideImg1 from '../public/images/projectprocess/test1.png'
import left from '../public/images/projectprocess/left.png'
import right from '../public/images/projectprocess/right.png'


export default function Testimonailslider() {


    var clientsthink = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        nextArrow: <Image src={right} alt='BitsWits' className='img-fluid' />,
        prevArrow: <Image src={left} alt='BitsWits' className='img-fluid' />
    };



    return (
        <>
            <section class={styles.hook} id='testihook'>
                <div className={styles.first}></div>
                <Container>
                    <Row class={styles.posting}>
                        <Col xl={12}>
                            <h3>Testimonials</h3>
                            <p>Rave Reviews from Our  Valued Clients </p>
                        </Col>
                    </Row>
                    <Slider {...clientsthink} className={`${styles.clintSlider} clintSlider1`}>
                        <div>
                            <Image alt="BitsWits" className='img-fluid'
                                src={slideImg1}
                            />
                            <h3>Bryce Carlos</h3>
                            <h5>Soul Sound</h5>
                            <h4>Co-Founder</h4>
                            <p>BitsWits was a lifesaver for our business. We needed to create an app that could be used on multiple platforms, but we didn’t have a lot of technical know-how or additional development resources. Their team made it easy for us and delivered exactly what we needed. They stayed on top of our project and kept us informed throughout the process. We wouldn't hesitate to recommend them for any of your app development needs!
                            </p>
                        </div>
                        <div>
                            <Image alt="BitsWits" className='img-fluid'
                                src={slideImg1}
                            />
                              <h3>Bryce Carlos</h3>
                            <h5>Soul Sound</h5>
                            <h4>Co-Founder</h4>
                            <p>BitsWits was a lifesaver for our business. We needed to create an app that could be used on multiple platforms, but we didn’t have a lot of technical know-how or additional development resources. Their team made it easy for us and delivered exactly what we needed. They stayed on top of our project and kept us informed throughout the process. We wouldn't hesitate to recommend them for any of your app development needs!
                            </p>
                        </div>
                    </Slider>
                </Container>
                <div className={styles.last}></div>
            </section>
        </>
    )
}

