import React from 'react'

import styles from '@/styles/Maintainingservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Maintaining = (props) => {



    var awardslogo = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    };




    return (
        <>


            <section className={styles.mantianserve}>


                <Container>
                    <Row>
                        <Col xl={12}>

                            <h3 className={styles.serve}> {props.subtitle} </h3>
                            <h2 className={styles.qualitu}> {props.title} </h2>

                            <p className='center mb-5'> {props.paratext} </p>

                        </Col>
                    </Row>
                    <Row className={styles.apps}>
                        <Col xl={4} className='p-0'>

                            <div className={styles.dev}>
                                <Image quality={75} src={props.icon1} className='img-fluid' />
                                <h3> {props.title1} </h3>
                                <p>  {props.para1} </p>
                            </div>

                        </Col>
                        <Col xl={4} className='p-0'>
                            <div className={styles.dev}>
                                <Image quality={75} src={props.icon2} className='img-fluid' />
                                <h3> {props.title2} </h3>
                                <p>  {props.para2} </p>
                            </div>

                        </Col>

                        <Col xl={4} className='p-0'>
                            <div className={styles.dev1}>
                                <Image quality={75} src={props.icon3} className='img-fluid' />
                                <h3> {props.title3} </h3>
                                <p>  {props.para3} </p>
                            </div>

                        </Col>



                        <Col xl={4} className='p-0'>

                            <div className={styles.dev2}>
                                <Image quality={75} src={props.icon4} className='img-fluid' />
                                <h3> {props.title4} </h3>
                                <p>  {props.para4} </p>
                            </div>

                        </Col>
                        <Col xl={4} className='p-0'>
                            <div className={styles.dev2}>
                                <Image quality={75} src={props.icon5} className='img-fluid' />
                                <h3> {props.title5} </h3>
                                <p>  {props.para5} </p>
                            </div>

                        </Col>

                        <Col xl={4} className='p-0'>
                            <div className={styles.dev3}>
                                <Image quality={75} src={props.icon6} className='img-fluid' />
                                <h3> {props.title6} </h3>
                                <p>  {props.para6} </p>
                            </div>

                        </Col>

                    </Row>


                    <Slider {...awardslogo} className={` ${styles.nextalign1}`}>



                        <div className={styles.dev}>
                            <Image quality={75} src={props.icon1} className='img-fluid' />
                            <h3> {props.title1} </h3>
                            <p>  {props.para1} </p>
                        </div>



                        <div className={styles.dev}>
                            <Image quality={75} src={props.icon2} className='img-fluid' />
                            <h3> {props.title2} </h3>
                            <p>  {props.para2} </p>
                        </div>







                        <div className={styles.dev1}>
                            <Image quality={75} src={props.icon3} className='img-fluid' />
                            <h3> {props.title3} </h3>
                            <p>  {props.para3} </p>
                        </div>

                        <div className={styles.dev2}>
                            <Image quality={75} src={props.icon4} className='img-fluid' />
                            <h3> {props.title4} </h3>
                            <p>  {props.para4} </p>
                        </div>

                        <div className={styles.dev2}>
                            <Image quality={75} src={props.icon5} className='img-fluid' />
                            <h3> {props.title5} </h3>
                            <p>  {props.para5} </p>
                        </div>

                        <div className={styles.dev3}>
                            <Image quality={75} src={props.icon6} className='img-fluid' />
                            <h3> {props.title6} </h3>
                            <p>  {props.para6} </p>
                        </div>





                    </Slider>

                </Container>


            </section>



        </>
    )
}

export default Maintaining