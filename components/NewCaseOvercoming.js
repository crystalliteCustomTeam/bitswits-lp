import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewCaseOvercoming.module.css";
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function NewCaseOvercoming(props) {


    const mblSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };


    return (
        <>
            <section className={styles.Overcoming}>
                <Container fluid>
                    <Row className='align-items-center g-3 px-4'>
                        {props.appData.map((data, index) => (
                            <Col lg={4} key={index}>
                                <div key={index} className={styles.app}>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

