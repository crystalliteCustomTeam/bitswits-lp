import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/AiBuild.module.css';
import Image from 'next/image';
import AiIcon1 from '@/public/artificialIntelligence/Images/ai-1.png';
import AiIcon2 from '@/public/artificialIntelligence/Images/ai-2.png';
import AiIcon3 from '@/public/artificialIntelligence/Images/ai-3.png';
import Slider from "react-slick";
import { bg } from 'date-fns/locale';


const Aibuild = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    return (
        <>
            <section className={`${style.secSpacing} bg-black`}>
                <Container>
                    <Row className='pb-sm-5 pt-5'>
                        <Col lg={12}>
                            <h2 className='f40 fw500 text-white text-center pb-3'>Hire AI App Developers <span className='grdiant fw800 '>AI Build AI Chatbot </span> </h2>
                            <p className='f18 fw500 text-white text-center mb-4'> Scale your business value by offering quality and personalized customer service. AI bots and Chatbots powered by machine learning, deep learning and NLP enable human-like interactions to enrich customer service</p>

                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none'>
                        <Row className='justify-content-center align-items-center'>
                            <Col lg={4} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center align-items-center pt-5 pb-5 px-4`}>

                                        <div className={`text-center ${style.cardContent}`}>
                                            <Image quality={75} src={AiIcon1} className='mx-auto' />
                                            <h4 className={`fw700 text-white f15 mb-3 mt-3 ${style.line20}`}> Improve customer<br></br> experience with a custom<br></br> chatbot</h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div className={`text-center ${style.cardContent}`}>
                                            <Image quality={75} src={AiIcon2} className='mx-auto' />
                                            <h4 className={`fw700 text-white f15 mb-3 mt-3 ${style.line20}`}>  Reduce operational costs <br></br>on sales and support<br></br> resources</h4>
                                        </div>
                                    </div>


                                </div>
                            </Col>
                            <Col lg={4} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div className={`text-center ${style.cardContent}`}>
                                            <Image quality={75} src={AiIcon3} className='mx-auto' />
                                            <h4 className={`fw700 text-white f15 mb-3 mt-3 ${style.line20}`}> Make your business smarter<br></br> with AI-powered chatbots<br></br> that understand the tone and<br></br> intent of the queries.</h4>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col lg={3} className='mb-3'>
                               
                           </Col> */}

                        </Row>
                    </div>
                    <div className='d-block d-lg-none d-md-none d-sm-block'>
                        <Row className='justify-content-center align-items-center'>
                            <Slider {...settings}>
                                <Col lg={4} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center align-items-center pt-5 pb-5 px-4`}>

                                            <div className={`text-center ${style.cardContent}`}>
                                                <Image quality={75} src={AiIcon1} className='mx-auto' />
                                                <h4 className={`fw700 text-white f15 mb-3 mt-3 ${style.line20}`}> Improve customer experience<br></br> with a custom chatbot</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div className={`text-center ${style.cardContent}`}>
                                                <Image quality={75} src={AiIcon2} className='mx-auto' />
                                                <h4 className={`fw700 text-white f15 mb-3 mt-3 ${style.line20}`}>  Reduce operational costs on <br></br>sales and support resources</h4>


                                            </div>
                                        </div>


                                    </div>
                                </Col>
                                <Col lg={4} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div className={`text-center ${style.cardContent}`}>
                                                <Image quality={75} src={AiIcon3} className='mx-auto' />
                                                <h4 className={`fw700 text-white f15 mb-3 mt-3 ${style.line20}`}> Make your business smarter with<br></br> AI-powered chatbots that <br></br> understand the tone<br></br> and intent of the queries.</h4>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Slider>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Aibuild