import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/artificialIntelligence/powerup.module.css';
import Aipowerup1 from '@/public/artificialIntelligence/Images/11.png';
import Aipowerup2 from '@/public/artificialIntelligence/Images/22.png';
import Aipowerup3 from '@/public/artificialIntelligence/Images/33.png';


const powerup = () => {

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
            <section className={`${styles.aipowerup} bg-black`}>
                <Container className='p-sm-5 pb-5 '>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={12} className='px-0'>
                            <div>
                                <h3 className='text-white text-center f45 fw400 '>Power-Up <soan className="grdiant fw800">Your Business Excellence</soan> With<br></br> Natural Language</h3>
                                {/* <h4 className='grdiant text-center f50 fw800'>AI Development Solution</h4> */}
                                <p className='text-center f14 text-white '>Give your robotic business systems a touch of life with Natural Language Processing. NLP enhances your systems’<br></br> ability to understand, analyze and produce human language.</p>

                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} >
                            <div className='justify-content-center align-items-center text-center'>
                                <Image quality={75} src={Aipowerup1} className='text-center' />
                                <p className='f18 fw400 text-white text-center'>Understand customer experience by analyzing data from social media, feedback forms and chatbot history.</p>
                            </div>

                        </Col>

                        <Col lg={4} className='justify-content-center align-items-center '>
                        <div className='justify-content-center align-items-center text-center'>
                            <Image quality={75} src={Aipowerup2} />
                            <p className='f18 fw400 text-white text-center'>Understand customer experience by analyzing data from social media, feedback forms and chatbot history.</p>

                            </div>
                        </Col>

                        <Col lg={4} className='justify-content-center align-items-center text-center'>
                        <div className='justify-content-center align-items-center'>

                            <Image quality={75} src={Aipowerup3} />
                            <p className='f18 fw400 text-white text-center'>Understand customer experience by analyzing data from social media, feedback forms and chatbot history.</p>
                        </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>

    );
};
export default powerup