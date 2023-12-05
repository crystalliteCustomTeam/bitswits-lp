import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewCaseChoose.module.css";
//images
import banImg1 from '../public/images/lp-images/icon1.png'
import banImg2 from '../public/images/lp-images/icon2.png'
import banImg3 from '../public/images/lp-images/icon3.png'
import banImg4 from '../public/images/lp-images/icon4.png'
import banImg5 from '../public/images/lp-images/icon5.png'
import banImg6 from '../public/images/lp-images/icon6.png'
import banImg7 from '../public/images/lp-images/icon7.png'
import banImg8 from '../public/images/lp-images/icon8.png'
import banImg9 from '../public/images/lp-images/icon9.png'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const items = [
    {
        image: banImg1,
        text: (<> Experienced  <br /> Professionals </>)
    },
    {
        image: banImg2,
        text: (<> On-Time <br /> Delivery </>)
    },
    {
        image: banImg3,
        text: (<> Cost-Effective <br /> Solutions </>)
    },
    {
        image: banImg4,
        text: (<> Scalable and <br /> Secure Apps </>)
    },
    {
        image: banImg5,
        text: (<> User-Centric <br /> Design </>)
    },
    {
        image: banImg6,
        text: (<> Customized <br /> Development </>)
    },
    {
        image: banImg7,
        text: (<> Error-Free <br /> Delivery </>)
    },
    {
        image: banImg8,
        text: (<> Transparent <br /> Communication </>)
    },
    {
        image: banImg9,
        text: (<> Support and <br /> Maintenance </>)
    }
];

const NewCaseChoose = (props) => {

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
            <section className={styles.caseChoose}>
                <Container>
                    <Row className='align-items-center gy-lg-5 gy-4'>
                        <Col lg={6} className={styles.walk}>
                            <h3 className='white font50 font-bold f-700'><span>Why Trust <br /> BitsWits</span> with App Development?</h3>
                            <p>We stand as the primary choice for mobile app development, exemplifying excellence in a dynamic field. Our team combines creativity and the most suitable tech stack to develop customized app solutions.</p>
                            <p>Our track record of delivering on time and within budget, coupled with a commitment to staying ahead of industry trends, sets us apart as the best partner for mobile app development.</p>
                            <Link href="#" className={styles.dus}>Choose Expertise, Choose Bitswits – Let's Get Started</Link>
                        </Col>
                        <Col lg={6} className='d-none d-lg-block'>
                            <div className={styles.cart}>
                                <Row className='gy-4'>
                                    {items.map((item, index) => (
                                        <Col key={index} lg={4} sm={4}>
                                            <div className={styles.post}>
                                                <Image alt='BitsWits' src={item.image} className='img-fluid mb-3' />
                                                <p>{item.text}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>

                        {/* For Mobile */}
                        <Col lg={6} className='d-block d-lg-none'>
                            <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider}`}>
                                {items.map((item, index) => (
                                    <div className={styles.cart} key={index}>
                                        <div className={styles.post}>
                                            <Image alt='BitsWits' src={item.image} className='img-fluid mb-3' />
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewCaseChoose
