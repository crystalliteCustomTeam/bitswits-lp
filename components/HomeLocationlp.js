import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/HomeLocationlp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
///
import LocationWorld from '../public/newHomePage/images/locationWorld.png'

const HomeLocationlp = () => {

    let lctonSlider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.locations}>
                {/* <div className={styles.mapVideo}>
                    <div className={`${styles.map} h-100`}>
                        <video autoPlay muted className='w-100' loop src="/video.mp4" type="video/mp4"></video>
                    </div>
                </div> */}
                <div className={styles.upside}>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className={styles.lctnMain}>
                                    <p className="f-16 f-montserrat f-700 text-white f-uppercase mb-0">
                                        Areas We Serve
                                    </p>
                                    <h3 className="newchoose f-playfair white f-700 mb-4 mb-lg-5">
                                        Our Locations Globally
                                    </h3>
                                    <div className="d-lg-block d-none">
                                        <Row>
                                            <Col lg={6}>
                                                <div className={`${styles.loctnDetls} ${styles.one} mb-lg-5`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        USA
                                                    </h4>
                                                    <div className={`${styles.detail} border-btm`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                            Delaware
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            8 The Green STE 300, Dover DE 19901.
                                                        </p>
                                                        <Link className="f-16 f-500 white"
                                                            href="tel:+18335006007">
                                                            +1 833 500 6007
                                                        </Link><br />
                                                        <Link className="f-16 f-500 white"
                                                            href="tel:+13123795987">
                                                            +1 312 379 5987
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                            HOUSTON
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100 Houston, TX 77056</p>
                                                        <Link className="f-16 f-500 white"
                                                            href="tel:+17135657656">
                                                            +1 713 565 7656
                                                        </Link><br />
                                                    </div>
                                                </div>
                                                <div className={`${styles.loctnDetls} ${styles.two}`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        UAE
                                                    </h4>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                            Sharjah
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            Office #101, 32 Street, Al Mujarrah, Sharjah
                                                        </p>
                                                        <Link className="f-16 f-500 white"
                                                            href="tel:+971555031266">
                                                            +971 555 031266
                                                        </Link> <br />
                                                        <Link className="f-16 f-500 white"
                                                            href="tel:+971551659060">
                                                            +971 551 659060
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={`${styles.loctnDetls} ${styles.three} mb-lg-5`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        Malaysia
                                                    </h4>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                            Labuan
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            Office 13 A - Main Office Tower - Financial Park , Labuan , Malaysia
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`${styles.loctnDetls} ${styles.four}`}>
                                                    <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                        Pakistan
                                                    </h4>
                                                    <div className={`${styles.detail}`}>
                                                        <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                            Karachi
                                                        </p>
                                                        <p className="f-14 f-500 f-montserrat white mb-0">
                                                            12th Floor Caesar's Tower, Karachi, Pakistan
                                                        </p>
                                                        <Link className="f-16 f-500 white" href="tel:923468280101">
                                                            +92 346 828 0101
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="d-lg-none d-block">
                                        <Row>
                                            <Col lg={12}>
                                                <Slider {...lctonSlider} className={styles.lctnslide}>
                                                    <div className={`${styles.loctnDetls}`}>
                                                        <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                            USA
                                                        </h4>
                                                        <div className={`${styles.detail} border-btm`}>
                                                            <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                                Delaware
                                                            </p>
                                                            <p className="f-14 f-500 f-montserrat white mb-0">
                                                                8 The Green STE 300, Dover DE 19901.
                                                            </p>
                                                            <Link className="f-16 f-500 white"
                                                                href="tel:+18335006007">
                                                                +1 833 500 6007
                                                            </Link><br />
                                                            <Link className="f-16 f-500 white"
                                                                href="tel:+13123795987">
                                                                +1 312 379 5987
                                                            </Link>
                                                        </div>

                                                        <div className={`${styles.detail}`}>
                                                            <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                                California
                                                            </p>
                                                            <p className="f-14 f-500 f-montserrat white mb-0">350 South Grand Avenue, Los Angeles,
                                                                CA 90071</p>
                                                            <Link className="f-16 f-500 white"
                                                                href="tel:+13123795987">
                                                                +1 312 379 5987
                                                            </Link><br />
                                                            <Link className="f-16 f-500 white"
                                                                href="tel:+18335006007">
                                                                +1 833 500 6007
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className={`${styles.loctnDetls} ${styles.three} mb-lg-5`}>
                                                        <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                            Malaysia
                                                        </h4>
                                                        <div className={`${styles.detail}`}>
                                                            <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                                Labuan
                                                            </p>
                                                            <p className="f-14 f-500 f-montserrat white mb-0">
                                                                Office 13 A - Main Office Tower - Financial Park , Labuan , Malaysia
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className={`${styles.loctnDetls} ${styles.two}`}>
                                                        <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                            UAE
                                                        </h4>
                                                        <div className={`${styles.detail}`}>
                                                            <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                                Sharjah
                                                            </p>
                                                            <p className="f-14 f-500 f-montserrat white mb-0">
                                                                Office #101, 32 Street, Al Mujarrah, Sharjah
                                                            </p>
                                                            <Link className="f-16 f-500 white"
                                                                href="tel:+971555031266">
                                                                +97 155 503 1266
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className={`${styles.loctnDetls} ${styles.four}`}>
                                                        <h4 className={`${styles.heading} f-28 f-montserrat f-700 mb-2 white f-uppercase`}>
                                                            Pakistan
                                                        </h4>
                                                        <div className={`${styles.detail}`}>
                                                            <p className="f-18 f-700 f-montserrat mb-1 f-uppercase text-white">
                                                                Karachi
                                                            </p>
                                                            <p className="f-14 f-500 f-montserrat white mb-0">
                                                                12th Floor Caesar's Tower, Karachi, Pakistan
                                                            </p>
                                                            <Link className="f-16 f-500 white" href="tel:923468280101">
                                                                +92 346 828 0101
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} className={`d-lg-block d-none ${styles.positionDiv}`}>
                                <Image quality={75} alt='BitsWits' src={LocationWorld} className={styles.locationImage} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default HomeLocationlp