import React from 'react'
import styles from '@/styles/NewLpPublication.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick'
import publication1 from '/public/newlppage/1.png'
import publication2 from '/public/newlppage/2.png'
import publication3 from '/public/newlppage/3.webp'
import publication4 from '/public/newlppage/4.webp'
import publication5 from '/public/newlppage/5.webp'
import publication6 from '/public/newlppage/6.webp'
import publication7 from '/public/newlppage/7.webp'
import publication8 from '/public/newlppage/8.webp'
import publication9 from '/public/newlppage/9.webp'
import publication10 from '/public/newlppage/10.webp'
import publication11 from '/public/newlppage/11.webp'
import publication12 from '/public/newlppage/12.webp'

const NewLpPublication = () => {


    const bloglisting = [
        {
            image: publication1,
        },
        {
            image: publication2,

        },
        {
            image: publication3,

        },
        {
            image: publication4,

        },
        {
            image: publication5,

        },
        {
            image: publication6,

        },
        {
            image: publication7,

        },

        {
            image: publication8,

        },
        {
            image: publication9,

        },
        {
            image: publication10,

        },
        {
            image: publication11,

        },
        {
            image: publication12,

        },

    ]

    let rangSlider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={`${styles.public}`}>
                <Container>
                    <Row className={`${styles.project} justify-content-between`}>
                        <Col lg={12}>
                            <h3 className="f-20 f-montserrat f-700 mb-2 letterspace t-center text-white">Publications</h3>
                        </Col>
                        <Col lg={12}>
                            <h2 className='f-50 f-playfair f-700 black t-center text-white'> Many Got Featured In Major Publications Just By <br></br>Working With Us.
                            </h2>
                        </Col>
                        <Col lg={12} className={styles.brands}>
                            {bloglisting.map((item, i) =>
                                <Col md={2} key={i} className='imgspacetop'>
                                    <div className={styles.publicationimg}>
                                        <Image alt="bitswits" src={item.image} className='img-fluid' />
                                    </div>
                                </Col>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.publi} d-lg-none d-block bg-black`}>
                <Container>
                    <Row className="gy-3">
                        <Col lg={12}>
                            <h3 className="f-20 f-montserrat f-700 mb-2 letterspace t-center text-white">Publications</h3>
                        </Col>
                        <Col lg={12}>
                            <h2 className='f-50 f-playfair f-700 black t-center text-white'> Many Got Featured In Major Publications Just By <br></br>Working With Us.
                            </h2>
                        </Col>
                    </Row>
                    <Row className="gy-3 mt-4">
                        <Slider {...rangSlider} className={styles.rangSlide}>
                            {bloglisting.map((item, i) =>
                                <Col md={2} key={i} className='imgspacetop'>
                                    <div className={styles.publicationimg}>
                                        <Image alt="bitswits" src={item.image} className='img-fluid' />
                                    </div>
                                </Col>
                            )}
                        </Slider>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpPublication