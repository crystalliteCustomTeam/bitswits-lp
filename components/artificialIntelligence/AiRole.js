import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/AiRole.module.css';
import Slider from "react-slick";


const Process = (props) => {

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
                    <Row className='pb-5 pt-5'>
                        <Col lg={12}>
                            <h2 className='f40 fw500 text-white text-center'>The <span className='f40 fw800 text-white'>Future</span><span></span> <span className='grdiant'> </span> of Business:</h2>
                            <h2 className='f40 fw700 text-white text-center'> <span className='grdiant'> <strong>AI's</strong> Role In Driving Industry<span className='fw800'> Evolution</span></span></h2>

                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none pt-3'>
                        <Row className='justify-content-center align-items-center'>
                            <Col lg={3} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Retail</h4>
                                            <p className={`f15 fw400 ${style.paraColor}`}>AI in the retail sector is bridging the gap between customers and companies by offering personalized services and products as per the preference of each customer. In the retail sector, AI is playing a crucial role in digitalizing the retail sector, boosting virtual and physical sales and enhancing customer engagement.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Manufacturing</h4>
                                            <p className={`f15 fw400 ${style.paraColor}`}>Artificial intelligence in manufacturing is helping companies with market insights to strategize better for the future. By enhancing the supply chain, artificial intelligence is contributing to bridging the digital revolution in the manufacturing sector.</p>


                                        </div>
                                    </div>


                                </div>
                            </Col>
                            <Col lg={3} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Healthcare</h4>
                                            <p className={`f15 fw400 ${style.paraColor}`}>Artificial intelligence uses intricate algorithms and software that mimic human thinking to analyze, interpret, and comprehend complex medical and healthcare information changing the healthcare landscape.</p>


                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} className='mb-3'>
                                <div className={`${style.feature} gap2`}>
                                    <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                        <div>
                                            <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Travel</h4>
                                            <p className={`f15 fw400 ${style.paraColor}`}>From searching the best hotels to booking your flights, exploring local cafes and planning your itinerary, artificial intelligence offers you highly customized services to plan a perfect gateway for you. Planning a vacation has never been this easy with the integration of AI solutions in the tourism service providers.</p>


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
                                <Col lg={3} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Retail</h4>
                                                <p className='f20 fw400 text-white'>AI in the retail sector is bridging the gap between customers and companies by offering personalized services and products as per the preference of each customer. In the retail sector, AI is playing a crucial role in digitalizing the retail sector, boosting virtual and physical sales and enhancing customer engagement.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Manufacturing</h4>
                                                <p className='f20 fw400 text-white'>Artificial intelligence in manufacturing is helping companies with market insights to strategize better for the future. By enhancing the supply chain, artificial intelligence is contributing to bridging the digital revolution in the manufacturing sector.</p>


                                            </div>
                                        </div>


                                    </div>
                                </Col>
                                <Col lg={3} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Healthcare</h4>
                                                <p className='f20 fw400 text-white'>Artificial intelligence uses intricate algorithms and software that mimic human thinking to analyze, interpret, and comprehend complex medical and healthcare information changing the healthcare landscape.</p>


                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} className='mb-3'>
                                    <div className={`${style.feature} gap2`}>
                                        <div className={`${style.gaps} d-flex justify-content-center pt-5 pb-5 px-4`}>
                                            <div>
                                                <h4 className='fw700 text-white f20 mb-3'> Artificial Intelligence in Travel</h4>
                                                <p className='f20 fw400 text-white'>From searching the best hotels to booking your flights, exploring local cafes and planning your itinerary, artificial intelligence offers you highly customized services to plan a perfect gateway for you. Planning a vacation has never been this easy with the integration of AI solutions in the tourism service providers.</p>


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
export default Process