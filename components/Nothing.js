import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Nothing.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//images
import banImg1 from '../public/images/nothing/map.png'
//
import news1 from '/public/images/nothing/1.png'
import news2 from '/public/images/nothing/1.png'
import news3 from '/public/images/nothing/1.png'
import news4 from '/public/images/nothing/1.png'
import news5 from '/public/images/nothing/1.png'
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
                            <Image src={banImg1} alt='BitsWits' className='img-fluid' />
                        </Col>
                        <Col lg={4}>

                            <div>
                                <Slider {...bannerslider} className={` ${styles.startSlide} Serbannerslider`}>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news1} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. Their comprehensive work, from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                                        <h4 className='white font20 mb-1'>Joseph</h4>
                                        <p className='white font12'>CTO / FOUNDER SOUL SOUND</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news2} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company.</p>
                                        <h4 className='white font20 mb-1'>Aden Ward</h4>
                                        <p className='white font12'>CO-FOUNDER PRO HEALTH</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news3} className="img-fluid " />
                                        <p className='white font12 mt-4 mb-1'>Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They are highly skilled and knowledgeable professionals who understand customer needs and deliver well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly recommend them to anyone looking for reliable and cost-effective Flutter solutions.</p>
                                        <h4 className='white font20 mb-1'>Winnie Brooks</h4>
                                        <p className='white font12'>FOUNDER AND CEO GLOW SPA</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news4} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>We're very satisfied with the results of our working relationship with BitsWits. We were able to create a high-quality mobile app that not only met our specifications but exceeded them in every way. The entire team was friendly and professional throughout the entire process, and we would definitely recommend their services to anyone looking for a reliable custom app development company.</p>
                                        <h4 className='white font20 mb-1'>Chavi Miles</h4>
                                        <p className='white font12'>CO-FOUNDER BLISS TRAVEL</p>
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="BitsWits" src={news5} className="img-fluid  " />
                                        <p className='white font12 mt-4 mb-1'>BitsWits have done a great job making an attractive and eye-catching IOS application. I am grateful to the team for delivering this application perfectly on very short notice. Thanks a lot.</p>
                                        <h4 className='white font20 mb-1'>Andrew Drake</h4>
                                        <p className='white font12'>FOUNDER / CEO MARK PLACE</p>
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

