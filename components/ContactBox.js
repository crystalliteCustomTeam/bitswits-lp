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
                                    <div className={styles.line1}></div>
                                    <div className={styles.line2}></div>
                                    <div className={styles.line3}></div>
                                    <Slider {...contactSlider} className='contactSlider'>
                                        <div className="locBox">
                                            <div className={styles.locTxt}>
                                                <h2 className="font30 font-bold white mb-3 text-center">USA</h2>
                                                <h3 className="font16 font-bold white mb-0 text-center">DELAWARE</h3>
                                                <p className="font13 font-medium white mb-1 text-center">
                                                    8 The Green STE 300, Dover DE 19901.
                                                </p>
                                                <Link className='white text-center' href='tel:+18335006007'>+1 833 500 6007</Link>

                                                <h3 className="font16 font-bold white mb-0 mt-3 text-center">HOUSTON</h3>
                                                <p className="font13 font-medium white mb-1 text-center">
                                                    Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100 Houston, TX 77056
                                                </p>
                                                <Link className='white text-center' href='tel:+17135657656'>+1 713 565 7656</Link>
                                            </div>
                                            <div className={styles.locImg}>
                                                <Image src={usa} alt='Location' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="locBox">
                                            <div className={styles.locTxt}>
                                                <h2 className="font30 font-bold white mb-3 text-center">Middle East</h2>
                                                <h3 className="font16 font-bold white mb-0 text-center">SHARJAH</h3>
                                                <p className="font15 font-medium white mb-1 text-center">
                                                    Office #101, 32 Street, Al Mujarrah, Sharjah
                                                </p>
                                                <Link className='white text-center' href='tel:+971555031266'>+971 555 031266</Link>
                                                <Link className='white text-center' href='tel:+971551659060'>+971 551 659060</Link>
                                            </div>
                                            <div className={styles.locImg}>
                                                <Image src={middleEast} alt='Location' className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="locBox">
                                            <div className={styles.locTxt}>
                                                <h2 className="font30 font-bold white mb-3 text-center">Asia</h2>
                                                <h3 className="font16 font-bold white mb-0 text-center">MALAYSIA</h3>
                                                <p className="font13 font-medium white text-center">
                                                    Office 13 A - Main Office Tower - Financial Park , Labuan , Malaysia
                                                </p>

                                                <h3 className="font16 font-bold white mb-0 text-center">PAKISTAN</h3>
                                                <p className="font13 font-medium white text-center mb-1">
                                                    12th Floor Caesar's Tower, Karachi, Pakistan
                                                </p>
                                                <Link className='white text-center' href='tel:+923468280101'>+92 346 828 0101</Link>
                                            </div>
                                            <div className={styles.locImg}>
                                                <Image src={asia} alt='Location' className='img-fluid' />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <h2 className="font40 font-bold white">Say Hello!</h2>
                                <p className="font16 font-medium white">
                                    Let’s make headlines together! We’re excited to collaborate with you on your fantastic project.
                                </p>
                                <h3 className="font30 font-bold f-s mb-2 white">
                                    For Work Inquiry
                                </h3>
                                <p className="font14 font-medium white mb-4">
                                    Whether you need a mobile app or a particular game solution, every venture starts with a
                                    simple email or phone call. Fill in the following information and we will get in touch.

                                </p>

                                <form id="contactusform1" >
                                    <Row className='gy-3'>
                                        <Col lg={6}>
                                            <input type="text" className="" name="name" id="name" placeholder="Full Name" required="" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="text" name="email" id="email" placeholder="Last Name" required="" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="phone" name="phone" id="phone" placeholder="Phone" required="" minLength="7" maxlength="15" onkeypress="return /[0-9]/i.test(event.key)" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="email" name="email" id="email" placeholder="Email Address" required="" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea type="textarea" className="" name="comments" id="comments" placeholder="Comments" required="" />
                                        </Col>
                                        <Col>
                                            <div className={styles.notic}>
                                                <p className='white font16'>We take your privacy seriously. <br /> Read our <span className='font-bold'> <Link className='white' href='/privacy-policy'>Privacy Policy</Link> .</span></p>
                                                <button id="savebtns" type="submit" className={styles.bttns1}>Submit</button>
                                            </div>
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
