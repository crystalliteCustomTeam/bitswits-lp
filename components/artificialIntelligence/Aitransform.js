import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/artificialIntelligence/Aitransform.module.css";
import MetaBtn from './MetaBtn';

const Aitransform = (props) => {
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
                },
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
                },
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
                },
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
                },
            },
        ],
    };

    return (
        <>
            <section className={`${styles.aitransform} bg-black`}>
                <Container className="pt-5 pb-5 px-0 ">
                    <Row className="justify-content-center align-items-center">
                        <Col lg={12}>
                            <div>
                                <h3 className={`text-white text-center f40 fw400 ${styles.f40}`}>
                                    Transform Your Business Infrastructure With{" "}
                                </h3>
                                <h4 className={`grdiant text-center f50 fw800 ${styles.f50}`}>
                                    AI Development Solution
                                </h4>
                                <p className="text-center f18 text-white pt-3 pb-3">
                                    Hire our seasoned AI app developers to build brilliant AI
                                    solutions. We assist your business to become smart with
                                    improved efficiency, performance and productivity.
                                </p>

                            </div>
                            <div className={`${styles.secBtns}`}>
                                <MetaBtn></MetaBtn>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
export default Aitransform;
