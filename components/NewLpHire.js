import React from 'react'
import Link from 'next/link'
import styles from '../styles/NewLpHireus.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewLpHire = (props) => {

    let teamSlider = {
        centerMode: true,
        centerPadding: '80px',
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <>
            <section className={`${styles.resources} ${styles[props.bgColor]}`}>
                <div className={styles.hireUs}>
                    <Container>

                        <Row className={`${styles.project} justify-content-between`}>
                            <Col lg={12}>
                                <h5 className='font20 fontf font-semibold t-center mb-2 letterspace text-white'>Why Hire Us?</h5>
                            </Col>
                            <Col lg={12}>
                                <h2 className="black f-45 f-700 f-playfair t-center text-white">
                                    What Makes Bitswits The Most Recommended Mobile App Development Company?
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <p className="text-white text-center f-16 f-400 t-justify mt-3 mb-5">
                                    BitsWits provides mobile app development service in the USA for every industry with innovation and efficiency. We create customized <br className='d-xl-block d-none'></br> mobile solutions for various industries, from e-commerce to the healthcare or gaming industry. Our skilled app developers are <br className='d-xl-block d-none'></br> determined to come up with mobile apps that meet the unique needs of every client and their business.
                                </p>
                                <Link href='#' className={`${styles.btnHire}`}>
                                    Get Free Consultation
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default NewLpHire