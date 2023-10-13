import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/Aismart.module.css'
import Image from 'next/image';

import MetaBtn from './MetaBtn';
import smartai from '@/public/artificialIntelligence/Images/smart-ai.png';

const Expertise = (props) => {

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
            <section className={`${style.aismart} border11 pt-5 p-sm-5`} >
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={7} >
                            <div >
                                <h3 className='text-white text-left f35 fw400 mb-3'><span className='text-bold fw700'>Smart AI</span> Software Development <br />
                                    Services For <span className='text-bold fw700'>Smarter Businesses</span> </h3>

                                <div className={`${style.secBtns}`}>
                                    <MetaBtn></MetaBtn>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className=''>
                            <div>
                                <Image quality={75} src={smartai} alt="Blockchain" className={`${style.img11} img-fluid d-md-block d-none`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Expertise