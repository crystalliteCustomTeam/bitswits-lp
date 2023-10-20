import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import style from '@/styles/blockchain/Banner.module.css';
import ele from '@/public/blockchain/images/element2.svg';
import icontill from '@/public/blockchain/images/icontill.svg';
import CountUp from 'react-countup';
import phone from '@/public/blockchain/images/phone.png';
import { FaComment } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function Banners() {

    return (
        <>




            <div className='HomeBanner'>
                <div className={style.overlay}></div>
                <div className='homeVideo'>
                    <video className='' autoPlay muted loop src="../../../blockchain/images/homeback.mov" type="video/mov"></video>
                </div>

                <Container>
                    <Row className={` ${style.mood} gy-3`}>
                        <Col lg={6}>
                            <div className='point zindx'>
                                <div className={style.Lcontent}>
                                    <h1 className='text-white mb-2 pl-4'>
                                        <span className='fw700 font50'> Your Trusted Tech Partner for
                                            Fast-Paced Blockchain </span>
                                        <span className='fw700 font50 txt-primary'>Innovations & Thrilling Gaming Experiences</span></h1>
                                    <p className='text-white f15'>We build robust blockchain solutions for enterprises helping them decentralize their business & lay the foundation of transparent, & secure business systems.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={5}>
                            {/* <div className='position-relative'>
                            <div className={style.FormHo}></div>
                            <form className={`${style.ctaForm} mt-5`}>
                                <h3 className='font-30 fw-900 text-center mb-5 text-white'> Contact us </h3>
                                <Row className='px-4'>
                                    <Col lg={6} className=" pb-4"> 
                                            <label htmlFor="name"> Name *</label>
                                            <input className='form-control' type="text" placeholder="Type Name" required />
                                    </Col>
                                    <Col lg={6} className=" pb-4"> 
                                            <label htmlFor="phone">Phone *</label>
                                            <input  className='form-control' type="text" placeholder="(000) 000-000" required />
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={6} className=" pb-4"> 
                                            <label htmlFor="email">Email  *</label>
                                            <input  className='form-control' type="email" placeholder="Type Your Email" required />
                                    </Col>
                                    <Col lg={6} className=" pb-4"> 
                                            <label htmlFor="web">Your Website *</label>
                                            <input  className='form-control' type="text" placeholder="Type Your Website"  />
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={12} className=" pb-4"> 
                                        <div>
                                            <textarea type="textarea" placeholder="Type Your Message"  >
                                            </textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={12} className=" mt-4"> 
                                       
                                            <button className={style.btnprimary}>Submit</button>
                                        
                                    </Col>
                                </Row>
                            </form>
                            <div className={style.FormHoo}></div>
                        </div> */}
                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none zindx'>
                        <Row className='pb-0 mb-0 align-items-end'>
                            <Col lg={5}>
                                <div className={`${style.ctac} mt-2`}>
                                    <div className='d-flex justify-content-start'>
                                        <Link href='#' className={style.btnpri}><i></i> <FaComment /> Live Chat</Link>
                                        <Link href='#' className={style.btnpri1}><Image quality={75} src={phone} alt='logo' width={20} />  1-844-400-0025
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm1} mt-2`}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h4 className={style.h41}>Solutions Delivered</h4>
                                        <h4 className={style.h42}>
                                            <CountUp duration={5.75} end={1000} delay={3000} enableScrollSpy /> <span>+</span>

                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={`${style.ctaForm2} mt-5`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className={`${style.ctaForm2} badge badge-primary m-2`}>New</span>
                                            <span className={style.para3}>The Mystery Box Challenge is on! Update the xPortal...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm2} mt-1`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className={`${style.ctaForm2} badge badge-primary m-2`}>Jul 2</span>
                                            <span className={style.para3}>The Mystery Box Challenge is on! Update the xPortal...</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={`${style.ctaForm2} p-3 mt-2`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className='font14 text-white fw400'>Years Of Experience</span>
                                            <span className='text-white'>

                                                <CountUp duration={4.75} end={10} delay={3000} enableScrollSpy /> <span>+</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm2} p-3 mt-2`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className='font15 text-white fw600'>

                                                <span><FaGlobe /></span>

                                                <CountUp className='ps-2' duration={4.75} end={150} delay={3000} enableScrollSpy /> <span>+</span>
                                            </span>
                                            <span className='text-white font15'>Countries Served</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm1} mt-2`}>
                                    <div className='d-inline'>
                                        <p className='font10 fw400 text-white'>Vetted Developers</p>
                                        <p className={style.cheading}>
                                            <CountUp duration={4.75} end={300} delay={3000} enableScrollSpy /> <span>+</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='position-relative zindx mt-5 mt-md-0'>
                        <form className={`${style.ctaForm} mt-3`}>
                            <Row className='px-4'>
                                <Col lg={3} className="pb-4">
                                    <label htmlFor="name"> Name *</label>
                                    <input className='form-control' type="text" placeholder="Type Name" required />
                                </Col>
                                <Col lg={3} className=" pb-4">
                                    <label htmlFor="phone">Phone *</label>
                                    <input className='form-control' type="text" placeholder="(000) 000-000" required />
                                </Col>
                                <Col lg={3} className=" pb-4">
                                    <label htmlFor="email">Email  *</label>
                                    <input className='form-control' type="email" placeholder="Type Your Email" required />
                                </Col>
                                <Col lg={3} className="pt-4 mt-2">
                                    <button className={style.btnprimary}>Submit</button>
                                </Col>
                            </Row>
                        </form>

                    </div>
                </Container>

                <div className='mixColor'></div>
            </div>

        </>
    );
}
export default Banners;