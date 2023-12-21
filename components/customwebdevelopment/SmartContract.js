import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SmartContract.module.css";

import bestgloba11 from '../../public/moniter/1.png'
import bestgloba12 from '../../public/moniter/2.png'
import bestgloba13 from '../../public/moniter/3.png'
import bestgloba14 from '../../public/moniter/4.png'
import bestgloba15 from '../../public/moniter/5.png'
import bestgloba16 from '../../public/moniter/6.png'
import videopic from '../../public/servnew/videopic.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";

const SmartContract = (props) => {



    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 480) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    }
    return (
        <>
            <section className={`${styles[props.assignClass]}`}>
                <Container>
                    <Row className="gx-2 gy-5">
                        <Col lg={12}>
                            {props.title ?
                                props.title
                                :
                                ''
                            }
                            {props.bigtitle ?
                                props.bigtitle
                                :
                                ''
                            }
                            {props.para ?
                                props.para
                                :
                                ''
                            }


                        </Col>

                        {isSliderActive ?

                            <Slider {...awardslogo} className="pt-4">
                                {props.sec.map((item, index) => (
                                    <Col lg={4}>

                                        <div className={styles.deve} key={index}>

                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                <p className="font_13 white fontsfregular linehight_2">{item.para4}</p>
                                            </div>
                                            <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                        </div>


                                    </Col>
                                ))}
                            </Slider>
                            :
                            <>
                                {props.sec.map((item, index) => (
                                    <Col lg={4}>

                                        <div className={styles.deve} key={index}>

                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title3}</h4>
                                                <p className="font_13 white fontsfregular linehight_2">{item.para4}</p>
                                            </div>
                                            <Image src={item.img1} className="img-fluid" alt="bitswits" />
                                        </div>


                                    </Col>
                                ))}
                            </>

                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default SmartContract;
