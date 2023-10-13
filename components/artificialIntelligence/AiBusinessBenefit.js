import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import style from '@/styles/artificialIntelligence/Aibussiness.module.css';

//images first row 
import Enhanced from '@/public/artificialIntelligence/Images/enhanced1.png';
import impove from '@/public/artificialIntelligence/Images/improve1.png';
import enable from '@/public/artificialIntelligence/Images/enable1.png';
import accelerate from '@/public/artificialIntelligence/Images/accelerate1.png';
import UX from '@/public/artificialIntelligence/Images/UX1.png';
import increase from '@/public/artificialIntelligence/Images/increase1.png';
//images second row
import bigdata from '@/public/artificialIntelligence/Images/big-data1.png';
import ensure from '@/public/artificialIntelligence/Images/ensure1.png';
import predictive from '@/public/artificialIntelligence/Images/predictive1.png';
import cut from '@/public/artificialIntelligence/Images/cut1.png';
import reduce from '@/public/artificialIntelligence/Images/reduce1.png';
import automate from '@/public/artificialIntelligence/Images/automate1.png';
import Slider from "react-slick";





const Aibusiness = () => {

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
            <section className={`${style.Aibusiness} bg-black`}>
                <Container className='pt-4  p-sm-5 pb-5 '>
                    <Row className='justify-content-center align-items-center mt-md-5 mb-5'>
                        <Col lg={12} className='px-0'>
                            <div>
                                <h3 className='text-white text-center f50 fw400 mb-0'>Stay Ahead Of The Competition With </h3>
                                <h4 className='grdiant text-center f50 fw800'>AI Business Benefits</h4>
                                <p className='text-center f18 text-white pt-4'>We are providing Web3.0 development Solutions with a rich user experience design.</p>

                            </div>
                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none'>
                        <Row className='aibusiness11'>
                            <Col lg={2} className={`${style.border12}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={Enhanced} />
                                        <p className='text-white f14'>Enhanced <br></br> Productivity</p>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border12}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={impove} />
                                        <p className='text-white f14'>Improve <br></br> Efficiency</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border12}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={enable} />
                                        <p className='text-white f14'>Enable Informed  <br></br> Decision Making</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border12}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={accelerate} />
                                        <p className='text-white f14'>Accelerate Sales<br></br> Growth</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border12}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={UX} />
                                        <p className='text-white f14'>Improve Customer<br></br>Experience</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border13}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={increase} />
                                        <p className='text-white f14'>Increase  <br></br>Profitability</p>
                                    </div>
                                </div>
                            </Col>
                            {/* row changed */}
                            <Col lg={2} className={`${style.border14}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={bigdata} />
                                        <p className='text-white f14'>Accurate Big <br></br>Data Analysis</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border14}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={ensure} />
                                        <p className='text-white f14'>Ensure Brand  <br></br>Resilience</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border14}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={predictive} />
                                        <p className='text-white f14'>Predictive   <br></br>Analysis</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border14}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={cut} />
                                        <p className='text-white f14'>Cut Operational  <br></br>Costs</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border14}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={reduce} />
                                        <p className='text-white f14'>Reduce Human   <br></br>Errors</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className={`${style.border15}`}>
                                <div className={`${style.whyy} justify-content-center align-items-center`}>
                                    <div className={`${style.img11}`}>
                                        <Image quality={75} src={automate} />
                                        <p className='text-white f14'>Automate Repetitive <br></br>Tasks</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='d-block d-lg-none d-md-none d-sm-block'>
                        <Row className='justify-content-center align-items-center text-center mt-5'>
                            <Slider {...settings} className='d-flex justify-content-center align-items-center text-center'>
                                <Col lg={2}>
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11} `}>
                                            <Image quality={75} src={Enhanced} className='mx-auto' />
                                            <p className='text-white f20'>Enhanced <br></br> Productivity</p>
                                        </div>

                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={impove} className='mx-auto' />
                                            <p className='text-white f20'>Improve <br></br> Efficiency</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={enable} className='mx-auto' />
                                            <p className='text-white f20'>Enable Informed  <br></br> Decision Making</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={accelerate} className='mx-auto' />
                                            <p className='text-white f20'>Accelerate Sales<br></br> Growth</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={UX} className='mx-auto' />
                                            <p className='text-white f20'>Improve Customer<br></br>Experience</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={increase} className='mx-auto' />
                                            <p className='text-white f20'>Increase  <br></br>Profitability</p>
                                        </div>
                                    </div>
                                </Col>
                                {/* row changed */}
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={bigdata} className='mx-auto' />
                                            <p className='text-white f20'>Accurate Big <br></br>Data Analysis</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={ensure} className='mx-auto' />
                                            <p className='text-white f20'>Ensure Brand  <br></br>Resilience</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={predictive} className='mx-auto' />
                                            <p className='text-white f20'>Predictive   <br></br>Analysis</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={cut} className='mx-auto' />
                                            <p className='text-white f20'>Cut Operational  <br></br>Costs</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={reduce} className='mx-auto' />
                                            <p className='text-white f20'>Reduce Human   <br></br>Errors</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className={`${style.whyy} justify-content-center align-items-center`}>
                                        <div className={`${style.img11}`}>
                                            <Image quality={75} src={automate} className='mx-auto' />
                                            <p className='text-white f20'>Automate Repetitive <br></br>Tasks</p>
                                        </div>
                                    </div>
                                </Col>
                            </Slider>
                        </Row>
                    </div>
                </Container>
            </section>
        </>

    );
};
export default Aibusiness