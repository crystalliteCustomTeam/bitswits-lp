import React from 'react'
import styles from '@/styles/HireChoose.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const choosesArray = [
    {
        number: "01",
        title: (<> Happy <br /> Coders </>),
        description: "Hire the web programmers and app programmers to your working place. It’s pretty bond building and pleasure for us to assist you.",
    },
    {
        number: "02",
        title: (<> Your Ideas <br /> Are Secret </>),
        description: "We would love to sign an NDA with you. This states that your ideas are totally safe and it’s secret between us.",
    },
    {
        number: "03",
        title: (<> You Owns <br /> The Code </>),
        description: "With the fantastic project, the source code will also be given to you. You have a complete right on it and will never use by us.",
    },
    {
        number: "04",
        title: (<> We’re Always <br /> Open For You </>),
        description: "Connect us through various channels. We are happy to assist you at any time.",
    },
    {
        number: "05",
        title: (<> Happy <br /> Coders </>),
        description: "When comes to hire mobile app developers and web app developer, we have a happy gang of coders who frame every idea into reality. They work in synchronisation with clients.",
    },
    {
        number: "06",
        title: (<> No Invisible <br /> Charges </>),
        description: "We never prefer any extra cost apart from the quoted price. We believe to stick on the quoted budget, in order to make the transparency between our client.",
    },
    {
        number: "07",
        title: (<> Keep An Eye <br /> On Your Project </>),
        description: "Get the regular updates in the form of a report to avoid any mistakes. Likewise, you can trace the progress in your project.",
    },
    {
        number: "08",
        title: (<> Secure <br /> Alert </>),
        description: "We assure 100% security of data at our working centre. The systems and channels are encrypted strongly to avoid any data breaching.",
    },
    {
        number: "09",
        title: (<> Rocket Speed <br /> Delivery </>),
        description: "We always burn candles at both the ends to meet up your delivery date. On-time delivery is assured by our team.",
    },
    {
        number: "10",
        title: (<> Bug-Free <br /> Solution </>),
        description: "Our QA team test the project from every possible end. We make sure the deliverable is bug-free and secure from every aspect.",
    },
    {
        number: "11",
        title: (<> Scale <br /> The Team </>),
        description: "Tell us, in case you want to add or decrease the number of hired developers. We will take action at its quick.",
    },
    {
        number: "12",
        title: (<> We’re <br /> With You </>),
        description: "Our experts are always there to help you during the development cycle and after that. We are always open to sort your queries.",
    },
];


const HireChoose = (props) => {

    const mblSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={`${styles.choose}`}>
                <Container fluid>
                    <Row className='gy-5 d-none d-lg-flex'>
                        <Col lg={10} className='mx-auto mb-4'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div key={index}>
                                        <h2>{item.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        {choosesArray.map((chooseItem, index) => (
                            <Col lg={3} md={6} key={index}>
                                <div className={styles.chooseBox}>
                                    <div className={styles.num}>{chooseItem.number}</div>
                                    <h5>{chooseItem.title}</h5>
                                    <p>{chooseItem.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>
                        <Col lg={10} className='mx-auto mb-4'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div key={index}>
                                        <h2>{item.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                            {choosesArray.map((chooseItem, index) => (
                                <Col lg={3} md={6} key={index}>
                                    <div className={styles.chooseBox}>
                                        <div className={styles.num}>{chooseItem.number}</div>
                                        <h5>{chooseItem.title}</h5>
                                        <p>{chooseItem.description}</p>
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

export default HireChoose
