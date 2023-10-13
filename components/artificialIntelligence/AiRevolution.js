import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/Revolution.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import posters from '@/public/blockchain/images/poster.png';
import phone from '@/public/blockchain/images/phone.svg';
import blockchain from '@/public/artificialIntelligence/Images/PyTorch.png';
import appdev from '@/public/artificialIntelligence/Images/nvidia.png'
import technology from '@/public/artificialIntelligence/Images/mxnet.png'
import bitcoin from '@/public/artificialIntelligence/Images/caffee2.png'
import nft from '@/public/artificialIntelligence/Images/chainer.png'
import supplychain from '@/public/artificialIntelligence/Images/Theano.png'
import Slider from "react-slick";

const Revolution = (props) => {

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
                    <Row className='justify-content-center align-items-center pt-5 pb-5'>
                        <Col lg={12}>
                            <h2 className="text-white f40 mb-2 text-center">Leverage Our Expertise In <span className='f40 fw800 grdiant'>AI Framework</span></h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.revSubTile1}</h4>
                            <p className='text-white fw300 '>{props.revpara}</p>

                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none'>
                        <Row className='justify-content-center align-items-center'>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={blockchain} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>PyTorch</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={technology} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>MXNet</h4>
                            </Col>
                            <Col lg={4} className={`${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={appdev} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Nvidia Caffe </h4>
                            </Col>
                            <Col lg={4} className={`${style.br1}  position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={bitcoin} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'> Caffe2</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1}  position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={nft} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Chainer</h4>
                            </Col>
                            <Col lg={4} className='position-relative'>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image quality={75} src={supplychain} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4 pb-4'>Theano</h4>
                            </Col>

                        </Row>
                    </div>
                    <div className='d-block d-lg-none d-md-none d-sm-block'>
                        <Row className='justify-content-center align-items-center'>
                            <Slider {...settings}>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={blockchain} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Custom Blockchain
                                        <br /> App Development</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={technology} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Blockchain Technology <br />
                                        Consulting</h4>
                                </Col>
                                <Col lg={4} className={`${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={appdev} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>App <br /> Development</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={bitcoin} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>NFT Marketplace <br />
                                        Development</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={nft} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Blockchain Wallet <br />
                                        Development</h4>
                                </Col>
                                <Col lg={4} className='position-relative'>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image quality={75} src={supplychain} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Supply Chain <br /> Blockchain
                                        Development</h4>
                                </Col>
                            </Slider>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Revolution