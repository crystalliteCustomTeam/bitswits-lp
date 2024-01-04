import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServiceGenre.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServiceGenre = (props) => {

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={`${styles.ourserve} ${styles[props.addClass]}`}>
                <Container>
                    <Row className={styles.which}>
                        <Col xl={12}>
                            <p className='text-center font24 font-bold'>{props.subTitle}</p>
                            <h3 className='text-white text-center newchoose font-bold'>{props.title}</h3>
                        </Col>
                    </Row>
                    <Row className={` ${styles.play} d-none d-lg-flex`}>
                        {props.sections.map((section, index) => (
                            <Col xl={4} className={styles.compelling}>
                                <div key={index} className={styles.bod}>
                                    <Image quality={75} alt='BitsWits' src={section.gameicon} className='img-fluid' />
                                    <h3>{section.title}</h3>
                                    <p>{section.text}</p>
                                    <Link href='javascript:$zopim.livechat.window.show();'>LET's CONNECT</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {/* ====================== */}
                    <div className={`${styles.play} d-block d-lg-none`}>
                        <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                            {props.sections.map((section, index) => (
                                <div className={styles.compelling}>
                                    <div key={index} className={styles.bod}>
                                        <Image quality={75} alt='BitsWits' src={section.gameicon} className='img-fluid' />
                                        <h3>{section.title}</h3>
                                        <p>{section.text}</p>
                                        <Link href='javascript:$zopim.livechat.window.show();'>LET's CONNECT</Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ServiceGenre