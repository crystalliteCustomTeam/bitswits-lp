import React from 'react'
import Image from 'next/image';
import styles from '@/styles/CaseOvercoming.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CaseOvercoming = (props) => {

    var OverSlider = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <>
            <section className={`${styles.Overcoming} d-none d-lg-block`}>
                <Container>
                    <Row>
                        {props.challenges.map((challenge, index) => (
                            <Col lg={6} key={index}>
                                <div className={styles.overBox}>
                                    <h3>{challenge.title}</h3>
                                    <p>{challenge.text}</p>
                                    <div className={styles.overImg}>
                                        <Image quality={75} alt='BitsWits' src={challenge.icon} width={55} height={55} />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className={`${styles.Overcoming} d-block d-lg-none`}>
                <Container>
                    <Slider {...OverSlider} className='caseSlider'>
                        {props.challenges.map((challenge, index) => (
                            <div className={styles.overBox} key={index}>
                                <h3>{challenge.title}</h3>
                                <p>{challenge.text}</p>
                                <div className={styles.overImg}>
                                    <Image quality={75} alt='BitsWits' src={challenge.icon} width={55} height={55} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default CaseOvercoming;
