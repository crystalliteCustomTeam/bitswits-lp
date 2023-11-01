import React from 'react'
import Image from 'next/image'
import styles from '@/styles/HireSteps.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import step1 from '../public/images/hire-page/hireicon1.png'
import step2 from '../public/images/hire-page/hireicon2.png'
import step3 from '../public/images/hire-page/hireicon3.png'
import step4 from '../public/images/hire-page/hireicon4.png'


const stepsArray = [
    {
        step: "Step 01",
        imageSrc: step1,
        description: "Send us a request",
    },
    {
        step: "Step 02",
        imageSrc: step2,
        description: "Select the resume that fits for you",
    },
    {
        step: "Step 03",
        imageSrc: step3,
        description: "Take interview session of selected geeks",
    },
    {
        step: "Step 04",
        imageSrc: step4,
        description: "Start the rollercoaster of your project",
    },
];


const HireSteps = (props) => {

    const mblSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            <section className={`${styles.steps}`}>
                <Container>
                    <Row className='gy-5 d-none d-md-flex'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div className={styles.left} key={index}>
                                        <h2>{item.title}</h2>
                                        {item.text.map((text, pIndex) => (
                                            <p key={pIndex}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        {stepsArray.map((stepItem, index) => (
                            <Col lg={3} md={6} key={index}>
                                <div className={styles.stepBox}>
                                    <h5>{stepItem.step}</h5>
                                    <Image src={stepItem.imageSrc} alt='BitsWits' className='img-fluid' />
                                    <h6>{stepItem.description}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <Row className='gy-4 d-block d-md-none'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div className={styles.left} key={index}>
                                        <h2>{item.title}</h2>
                                        {item.text.map((text, pIndex) => (
                                            <p key={pIndex}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {stepsArray.map((stepItem, index) => (
                                <Col lg={3} md={6} key={index}>
                                    <div className={styles.stepBox}>
                                        <h5>{stepItem.step}</h5>
                                        <Image src={stepItem.imageSrc} alt="BitsWits" className="img-fluid" />
                                        <h6>{stepItem.description}</h6>
                                    </div>
                                </Col>
                            ))}
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireSteps