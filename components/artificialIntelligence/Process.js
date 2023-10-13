import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/Process.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import { bg } from 'date-fns/locale';


const Process = (props) => {

    let settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className={`${style.secSpacing} bg-black`}>
                <Container>
                    <Row className='pb-5 pt-5'>
                        <Col lg={12}>
                            <h2 className='f40 fw500 text-white text-left'>Explore Our <span className={`${style.grediantShadow} grdiant fw700`}>AI Development Solution</span> Suite</h2>
                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none'>
                        <Row className='justify-content-start align-items-center'>
                            <Col lg={5} className='mb-5'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> AI Consulting Company</h4>
                                            <p className='f11 fw400 text-white pb-3'>Realize the full potential of AI models in your business infrastructure to boost your workflow efficiency and productivity with enhanced automation and intelligent AI bots. Join hands with the best AI consulting firm to multiply your business.</p>
                                            <a className={style.knowMore} href='#'>Know More</a>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            1
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5} className='mb-5'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> Generative AI Development</h4>
                                            <p className='f11 fw400 text-white pb-3'>Leverage the potential of generative AI models to enhance customer experience, generate business related content and analyze massive datasets to produce accurate insights for decision making with the best generative AI development company.</p>
                                            <a className={style.knowMore} href='#'>Know More</a>
                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            2
                                        </div>
                                    </div>


                                </div>
                            </Col>
                            <Col lg={5} className='mb-5'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> Adaptive AI Development</h4>
                                            <p className='f11 fw400 text-white pb-3'>Our adaptive AI development company will assist you in building adaptive AI models that adapt itself to produce results as per the changing environment. These AI models are powered by advanced AI techniques like deep learning, computer vision, NLP and more to skyrocket your business growth.</p>
                                            <a className={style.knowMore} href='#'>Know More</a>

                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            3
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5} className='mb-5'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> Hire Prompt Developers</h4>
                                            <p className='f11 fw400 text-white pb-3'>Hire prompt developers that offer top-notch prompt engineering services to maximize the potential of your AI models and get desired & optimized outcomes for yourbusiness.</p>
                                            <a className={style.knowMore} href='#'>Know More</a>

                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            4
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} className='mb-5'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f18 mb-3'> Hire ChatGPT Developers</h4>
                                            <p className='f11 fw400 text-white pb-3'>Hire ChatGPT developers to build smart AI chatbots like ChatGPT capable of speech recognition, text generation, image production, translation and human-like conversation to cater to your business needs.</p>
                                            <a className={style.knowMore} href='#'>Know More</a>

                                        </div>
                                        <div className='fw700 text-white f50 pt-0 p-3'>
                                            5
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5} className='mb-5'>

                            </Col>
                        </Row>
                    </div>
                    <div className='d-block d-lg-none d-md-none d-sm-block'>
                        <Row className='justify-content-center align-items-center'>
                            <Slider {...settings}>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>AI Consulting Company</h4>
                                                <p className='f11 fw400 text-white pb-3'>Realize the full potential of AI models in your business infrastructure to boost your workflow efficiency and productivity with enhanced automation and intelligent AI bots. Join hands with the best AI consulting firm to multiply your business</p>
                                                <a className={style.knowMore} href='#'>Know More</a>

                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col lg={1}></Col> */}
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Generative AI Development</h4>
                                                <p className='f11 fw400 text-white pb-3'>Leverage the potential of generative AI models to enhance customer experience, generate business related content and analyze massive datasets to produce accurate insights for decision making with the best generative AI development company.</p>
                                                <br></br> <a className={style.knowMore} href='#'>Know More</a>

                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                2
                                            </div>
                                        </div>


                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Adaptive AI Development</h4>
                                                <p className='f11 fw400 text-white pb-3'>Our adaptive AI development company will assist you in building adaptive AI models that adapt itself to produce results as per the changing environment. These AI models are powered by advanced AI techniques like deep learning, computer vision, NLP and more to skyrocket your business growth.</p>
                                                <br></br> <a className={style.knowMore} href='#'>Know More</a>

                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                3
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col lg={1}></Col> */}
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Hire Prompt Developers</h4>
                                                <p className='f11 fw400 text-white pb-3'>Hire prompt developers that offer top-notch prompt engineering services to maximize the potential of your AI models and get desired & optimized outcomes for yourbusiness.</p>
                                                <br></br> <a className={style.knowMore} href='#'>Know More</a>

                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f18 mb-3'>Hire ChatGPT Developers</h4>
                                                <p className='f11 fw400 text-white pb-3'>Hire ChatGPT developers to build smart AI chatbots like ChatGPT capable of speech recognition, text generation, image production, translation and human-like conversation to cater to your business needs.</p>
                                                <a className={style.knowMore} href='#'>Know More</a>

                                            </div>
                                            <div className='fw700 text-white f50 pt-0 p-3'>
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col lg={1}></Col> */}
                            </Slider>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Process