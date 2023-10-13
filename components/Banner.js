import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '../public/images/banner/bannerImg1.png'
import banImg2 from '../public/images/banner/bannerImg2.png'
import banImg3 from '../public/images/banner/bannerImg1.png'
import banImg4 from '../public/images/banner/bannerImg2.png'
import banImg5 from '../public/images/banner/bannerImg1.png'
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'
import callIcn from '../public/images/banner/call-icon.png'
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from 'react-icons/rx'
import Freequote from './Freequote'
import { useState } from "react";


const Banner = () => {

    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1

    };

    return (
        <section className={styles.banner}>
            <Container fluid>
                <Row className={styles.bannnerproject}>
                    <Col lg={7}>
                        <div className={styles.banerTxt}>
                            <h1 className='font65 black fontf font-bold line60'> Affordable <span className='grdiant'> Website</span> <br></br> <span className='grdiant'>Mobile App</span> & <span className='grdiant'>Game</span><br></br> Development</h1>
                            <p className='black fontf font-medium line30'>Rationalize your gaming and <span className='grdiant'> mobile app development </span> experience <br></br>  with our affordable packages and prompt deliveries. </p>

                            <div className={`${styles.bttnsto} mt-3`}>
                                <Link className={styles.bttns1} onClick={modal} href="#">Book A Call</Link>
                                <Link className={styles.bttns2} href="#">Live Chat </Link>
                            </div>


                            <div className={styles.bannerimg2}>

                                <Slider {...bannerslider} className={` ${styles.startup1} bannerslider mt-4`}>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg1} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg2} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg3} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg4} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg5} className="img-fluid" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='p-0'>
                        <div className={styles.bannerform}>

                            <div className={`${styles.discuss} d-flex`}>
                                <div className={styles.call}>
                                    <Image alt="bitswits" className='img-fluid'
                                        src={callIcn}

                                    />
                                    <p className='font13 font-semibold lightgrey fontf m-0'>
                                        Let's discuss your project:
                                    </p>
                                </div>
                                <Link className={`${styles.formA} font14 font-medium white fontf`} href='tel:(833) 500-6007'>(833) 500-6007</Link>
                            </div>

                            <div className={styles.make}>
                                <div className={styles.free}>
                                    <p className='font16 texttran font-bold fontf grey'>
                                        Make an obligation-free enquiry
                                    </p>
                                </div>
                                <form className={styles.formsbanner}>
                                    <input type='text' className={styles.forminput} placeholder='Your Name' />
                                    <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                    <input type='email' className={styles.forminput} placeholder='Email Address' />
                                    <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                    <div className={`${styles.take} d-flex`}>
                                        <p className='grey font11 font-semibold fontf m-0'>We take your privacy seriously.<br></br> Read our <strong>Privacy Notice</strong> .</p>
                                        <input type='Submit' className={styles.notice} />
                                    </div>

                                </form>
                            </div>

                            <div className={styles.read}>
                                <div className={`${styles.free} text-center`}>
                                    <p className='font21 font-bold fontf grey'>OUR OFFICES</p>
                                </div>

                                <div className={styles.locations}>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon1} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>USA</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>

                                    </div>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon2} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>UAE</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon4} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>MALAYSIA</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body> <Freequote formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}> <RxCross2 /> </span> </Modal.Body>


            </Modal>

        </section>

    )
}

export default Banner