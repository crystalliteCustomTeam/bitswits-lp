import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Nothing.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';

//images
import banImg1 from '../public/images/nothing/map.png'

//
import news1 from '/public/images/nothing/1.png'
import news2 from '/public/images/nothing/1.png'
import news3 from '/public/images/nothing/1.png'
import news4 from '/public/images/nothing/1.png'
import news5 from '/public/images/nothing/1.png'
import news6 from '/public/images/nothing/1.png'
import news7 from '/public/images/nothing/1.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Nothing(props) {

    var bannerslider = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    };


    return (
        <>
            <section className={styles[props.Nothing]}>
                <Container className='newfoldlp'>
                    <Row className='  align-items-center'>
                        <Col lg={12}>
                            <h3 className="white f-30 f-500 center">Our Client’s Feedback Has Been</h3>
                            <h2 className="white f-60 f-700 center mb-5">Nothing Short Of Amazing!</h2>
                        </Col>
                        <Col lg={8}>
                            <Image src={banImg1} className='img-fluid' />
                        </Col>
                        <Col lg={4}>

                            <div>
                                <Slider {...bannerslider} className={` ${styles.startSlide} Serbannerslider`}>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={news1} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        <h4 className='white font20 mb-1'>Vivien Francis</h4>
                                        <p className='white font12'>Digital Marketing Consultant of Asia School of Business</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={news2} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        <h4 className='white font20 mb-1'>Vivien Francis</h4>
                                        <p className='white font12'>Digital Marketing Consultant of Asia School of Business</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={news3} className="img-fluid " />
                                        <p className='white font12 mt-4 mb-1'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        <h4 className='white font20 mb-1'>Vivien Francis</h4>
                                        <p className='white font12'>Digital Marketing Consultant of Asia School of Business</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={news4} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        <h4 className='white font20 mb-1'>Vivien Francis</h4>
                                        <p className='white font12'>Digital Marketing Consultant of Asia School of Business</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={news5} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                        <h4 className='white font20 mb-1'>Vivien Francis</h4>
                                        <p className='white font12'>Digital Marketing Consultant of Asia School of Business</p>
                                    </div>
                                  
                                </Slider>
                                <div className='mt-5'>
                                    <Link href="#" className={styles.btnpost}>Begin Your Success Story : Connect Now</Link>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}

