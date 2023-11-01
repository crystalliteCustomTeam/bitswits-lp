import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/HireWant.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import tick from '../public/images/hire-page/tick.png'
import arrow from '../public/images/hire-page/arrow.png'


const contentArray = [
    [
        {
            text: "Upto 60% Cost Saving",
        },
        {
            text: "Non-Disclosure Agreement",
        },
    ],
    [
        {
            text: "Non-Disclosure Agreement",
        },
        {
            text: "Upto 2X less time",
        },
    ],
];

const items = [
    {
        title: "Full-Time Hiring",
        description: "Works only for you.",
        workingHours: "8 hours/day, 5 days/week",
    },
    {
        title: "Part-Time Hiring",
        description: "Prefer better half for your business.",
        workingHours: "4 hours/day, 5 days/week",
    },
    {
        title: "Hourly Hiring",
        description: "Need a few hours of attention to the work.",
        workingHours: "5 days/week",
    },
    {
        title: "Contractual Hiring",
        description: "Agree on your condition when needed.",
        workingHours: "8 hours/day, 5 days/week",
    }
];

const HireWant = (props) => {

    const mblSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={`${styles.wants}`}>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div className={styles.left} key={index}>
                                        <h2>{item.title}</h2>
                                        {item.text.map((text, pIndex) => (
                                            <p key={pIndex}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                                <Row>
                                    {contentArray.map((columns, rowIndex) => (
                                        <Col md={6} key={rowIndex}>
                                            <ul>
                                                {columns.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Image src={tick} alt="bitswits" className={`img-fluid`} />
                                                        <span>{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Row className='gy-4 mt-4 mt-lg-0 d-none d-md-flex'>
                                {items.map((item, index) => (
                                    <Col lg={6} key={index}>
                                        <div className={styles.wantBox}>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <div className={styles.timing}>
                                                <div className={styles.timeBox}>
                                                    <h5>Working Hours:</h5>
                                                    <p>{item.workingHours}</p>
                                                </div>
                                                <div className={styles.timeBox}>
                                                    <h5>Communication:</h5>
                                                    <p>Skype, Email, Phone</p>
                                                </div>
                                                <div className={styles.timeBox}>
                                                    <h5>Billing:</h5>
                                                    <p>Monthly</p>
                                                </div>
                                            </div>
                                            <Link href="#">
                                                <span>Hire Now</span>
                                                <Image src={arrow} alt="bitswits" className={`img-fluid`} />
                                            </Link>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {/*========= For Mobile =========*/}
                            <Row className='gy-4 mt-4 mt-lg-0 d-block d-md-none'>
                                <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                                    {items.map((item, index) => (
                                        <Col lg={6} key={index}>
                                            <div className={styles.wantBox}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <div className={styles.timing}>
                                                    <div className={styles.timeBox}>
                                                        <h5>Working Hours:</h5>
                                                        <p>{item.workingHours}</p>
                                                    </div>
                                                    <div className={styles.timeBox}>
                                                        <h5>Communication:</h5>
                                                        <p>Skype, Email, Phone</p>
                                                    </div>
                                                    <div className={styles.timeBox}>
                                                        <h5>Billing:</h5>
                                                        <p>Monthly</p>
                                                    </div>
                                                </div>
                                                <Link href="#">
                                                    <span>Hire Now</span>
                                                    <Image src={arrow} alt="bitswits" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </Col>
                                    ))}
                                </Slider>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireWant