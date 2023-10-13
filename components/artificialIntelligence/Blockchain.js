import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/Blockchain.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import posters from '../public/images/poster.png';
import phone from '@/public/blockchain/images/phone.png';
import Slider from "react-slick";


const Blockchain = (props) => {


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
                    <Row className='justify-content-center align-items-center mb-5'>
                        <Col lg={12}>
                            <h2 className="text-white f40 mb-2 pt-5">{props.hireTile}</h2>
                            <h4 className="fw300 f40 txt-primary mb-2">{props.hireSubTile}</h4>
                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none'>
                        <Row className='justify-content-center align-items-center '>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative pt-5 pb-5`}>
                                <div className={`${style.feature}`}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>1</span>
                                        <span className='text-white f14'>Process large chunks of data to offer a predictive analysis report</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative pt-5 pb-5`}>
                                <div className={style.feature}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>2</span>
                                        <span className='text-white f14'>Provide accurate big data analysis to help you make informed decisions
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className={`${style.bb1} position-relative pt-5 pb-5`}>
                                <div className={style.feature}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>3</span>
                                        <span className='text-white f14'>Automate repetitive tasks to increase business productivity
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative pt-5 pb-5`}>
                                <div className={style.feature}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>4</span>
                                        <span className='text-white f14'>Reduce human errors and frauds to enhance business efficiency
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative pt-5 pb-5`}>
                                <div className={style.feature}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>5</span>
                                        <span className='text-white f14'>Gather customer insights to enhance customer engagement
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className={`${style.bb1} position-relative pt-5 pb-5`}>
                                <div className={style.feature}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>6</span>
                                        <span className='text-white f14'>Conduct customer behaviour analysis to offer personalized products & services
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bl1} position-relative pt-5 pb-5`}>
                                <div className={style.feature}>
                                    <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                        <span className={`${style.numbers} f50 fw900`}>7</span>
                                        <span className='text-white f14'>Transform customer support with smart AI bots
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </div>
                    <div className='d-block d-lg-none d-md-none d-sm-block'>
                        <Row className='justify-content-center align-items-center'>
                            <Slider {...settings}>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>1</span>
                                            <span className='text-white f14'>100% decentralized
                                                business structure</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>2</span>
                                            <span className='text-white f14'>Highly secure
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.bb1} position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>3</span>
                                            <span className='text-white f14'>Better control over
                                                business data
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>4</span>
                                            <span className='text-white f14'>Build trust between
                                                parties
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>5</span>
                                            <span className='text-white f14'>Improved privacy
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.bb1} position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>6</span>
                                            <span className='text-white f14'>Reduced costs
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.br1} position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>7</span>
                                            <span className='text-white f14'>Highly efficient &
                                                scalable
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>8</span>
                                            <span className='text-white f14'>Immutability &
                                                traceability
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className={`position-relative`}>
                                    <div className={style.feature}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <span className={`${style.numbers} f50 fw900`}>9</span>
                                            <span className='text-white f14'>Accelerated
                                                business processes
                                            </span>
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
export default Blockchain