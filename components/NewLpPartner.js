import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/NewLpPartner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import PartnerTick from '../public/newlppage/tick-partner.png'
import hybird from '../public/images/partnerpoiny/d-hybrid.webp'
import native from '../public/images/partnerpoiny/d-native.webp'

const NewLpPartner = () => {

    let prtnrSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={styles.hearfelt}>
            <Container>
                <Row className={`${styles.project} justify-content-between`}>
                    <Col lg={12}>
                        <h3 className="f-20 f-montserrat f-700 mb-2 letterspace text-center">TECHNOLOGIES</h3>
                        <h2 className="f-50 f-playfair f-700 t-center">
                            Best App Making Company Technologies <br></br> We Used
                        </h2>
                        <p className='font16 f-montserrat mb-5 t-center'>
                            Bitswits turns inventive ideas into groundbreaking mobile apps! Our award-winning app developers know hybrid and native <br></br> technologies, so your project is in good hands. With us, your project will be a success from start to finish!
                        </p>
                    </Col>
                </Row>

                <div className='d-lg-block d-none'>
                    <Row className='gy-5'>
                        <Col lg={6}>
                            <div className={styles.rightpadding}>
                                <h3 className=" f-30 f-playfair f-700 mb-3">Hybrid App Development</h3>
                                <Image quality={75} src={hybird} className='img-fluid mt-2 mb-4' />
                                <p className="f-16  f-400 f-montserrat mb-4 ">
                                    BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:
                                </p>

                                <ul className='p-0'>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        TECHNOLOGIES.</li>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        Accelerated Development Cycle.</li>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        Customizable UI/UX Design.</li>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        Cost-Effective Single Codebase Solution.</li>
                                </ul>

                                <Link href="#" className={styles.arrowBtn}>
                                    <span className="f-poppins f-600 f-capitalize">Talk To Our Experts</span>
                                </Link>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.leftpadding}>
                                <h3 className=" f-30 f-playfair f-700 mb-3">Native App Development</h3>
                                <Image quality={75} src={native} className='img-fluid mt-2 mb-4' />
                                <p className="f-16  f-400 f-montserrat mb-4 ">
                                    BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:
                                </p>

                                <ul className='p-0'>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        High Performance Platform-Optimization.</li>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        Access To Device Features & Integration.</li>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        Customized UI/UX Application Design.</li>
                                    <li className="f-16 mb-1 f-700 f-montserrat">
                                        <span>
                                            <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                        </span>
                                        Robust & Adaptable Mobile Application.</li>
                                </ul>
                                <Link href="#" className={styles.arrowBtn}>
                                    <span className="f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                                </Link>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='d-lg-none d-block'>
                    <Slider {...prtnrSlider}>
                        <div className={styles.rightpadding}>
                            <h3 className=" f-30 f-playfair f-700 mb-3">Hybrid App Development</h3>
                            <Image quality={75} src={hybird} className='img-fluid mt-2 mb-4' />
                            <p className="f-16  f-400 f-montserrat mb-4 ">
                                BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:
                            </p>

                            <ul className='p-0'>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    TECHNOLOGIES.</li>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    Accelerated Development Cycle.</li>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    Customizable UI/UX Design.</li>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    Cost-Effective Single Codebase Solution.</li>
                            </ul>

                            <Link href="#" className={styles.arrowBtn}>
                                <span className="f-poppins f-600 f-capitalize">Talk To Our Experts</span>
                            </Link>

                        </div>
                        <div className={styles.leftpadding}>
                            <h3 className=" f-30 f-playfair f-700 mb-3">Native App Development</h3>
                            <Image quality={75} src={native} className='img-fluid mt-2 mb-4' />
                            <p className="f-16  f-400 f-montserrat mb-4 ">
                                BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:
                            </p>

                            <ul className='p-0'>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    High Performance Platform-Optimization.</li>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    Access To Device Features & Integration.</li>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    Customized UI/UX Application Design.</li>
                                <li className="f-16 mb-1 f-700 f-montserrat">
                                    <span>
                                        <Image src={PartnerTick} alt="TIck_Icon" width="18" height="13" />
                                    </span>
                                    Robust & Adaptable Mobile Application.</li>
                            </ul>
                            <Link href="#" className={styles.arrowBtn}>
                                <span className="f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                            </Link>

                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default NewLpPartner