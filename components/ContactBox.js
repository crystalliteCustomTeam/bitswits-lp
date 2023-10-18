import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ContactUs.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import usa from '../public/images/contact/usa.png'
import asia from '../public/images/contact/asia.png'
import middleEast from '../public/images/contact/middle-east.png'

const ContactBox = () => {

    var contactSlider = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
    };

    return (
        <>
            <section className={styles.bannerContact}>
                <Container fluid>
                    <div className={styles.contactCard}>
                        <Row className='align-items-center cntctRow'>
                            <Col lg={6}>
                                <div className={styles.locSlider}>
                                    <Slider {...contactSlider} className='contactSlider'>
                                        <div className="locBox">
                                            <div className={styles.locTxt}>
                                                <h2 className="font30 font-bold white mb-0">USA</h2>
                                                <p className="font16 font-medium white my-3">
                                                    502 W 7th ST STE 100 Erie, PA 16502
                                                </p>
                                                <Link href="#" className={styles.locBtn}>View Location</Link>
                                            </div>
                                            <div className={styles.locImg}>
                                                <Image src={usa} alt='Location' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="locBox">
                                            <div className={styles.locTxt}>
                                                <h2 className="font30 font-bold white mb-0">Middle East</h2>
                                                <p className="font16 font-medium white my-3">
                                                    502 W 7th ST STE 100 Erie, PA 16502
                                                </p>
                                                <Link href="#" className={styles.locBtn}>View Location</Link>
                                            </div>
                                            <div className={styles.locImg}>
                                                <Image src={middleEast} alt='Location' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="locBox">
                                            <div className={styles.locTxt}>
                                                <h2 className="font30 font-bold white mb-0">Asia</h2>
                                                <p className="font16 font-medium white my-3">
                                                    502 W 7th ST STE 100 Erie, PA 16502
                                                </p>
                                                <Link href="#" className={styles.locBtn}>View Location</Link>
                                            </div>
                                            <div className={styles.locImg}>
                                                <Image src={asia} alt='Location' className='img-fluid' />
                                            </div>
                                        </div>
                                    </Slider>
                                    <div className={styles.line1}></div>
                                    <div className={styles.line2}></div>
                                    <div className={styles.line3}></div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <h2 className="font40 font-bold white">Say Hello!</h2>
                                <p className="font16 font-medium white">
                                    Let’s make headlines together! We’re excited to collaborate with you on your fantastic project.
                                </p>
                                <h3 className="font30 font-bold f-s mb-2 white">
                                    For Work <span className="grdiant">Inquiry</span>
                                </h3>
                                <p className="font14 font-medium white mb-4">
                                    Whether you need a mobile app or a particular game solution, every venture starts with a
                                    simple email or phone call. Fill in the following information and we will get in touch
                                    within 1 business day.
                                </p>

                                <form id="contactusform1" >
                                    <Row className='gy-3'>
                                        <Col lg={6}>
                                            <input type="text" className="" name="name" id="name" placeholder="Full Name" required="" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="email" name="email" id="email" placeholder="Email Address" required="" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="phone" name="phone" id="phone" placeholder="Phone" required="" minLength="7" maxlength="15" onkeypress="return /[0-9]/i.test(event.key)" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="text" className="" name="budget" id="budget" placeholder="Budget (in USD)" required="" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea type="textarea" className="" name="comments" id="comments" placeholder="Comments" required="" />
                                        </Col>
                                        <Col className="mt-3 d-flex gap-5">
                                            <p className='white font16'>We take your privacy seriously. <br /> Read our <span className='font-bold'>Privacy Notice.</span></p>
                                            <button id="savebtns" type="submit" className={styles.bttns1}>Submit</button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </section>
        </>
    )
}

export default ContactBox
