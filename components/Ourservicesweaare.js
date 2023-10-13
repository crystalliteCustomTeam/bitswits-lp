import React from 'react'
import styles from '@/styles/Ourservicesweaare.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import team1 from '../public/gif/blueII.gif'
import team2 from '../public/gif/pink.gif'
import team3 from '../public/gif/yell.gif'

const Ourservicesweaare = () => {


    var crmExamples = {
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    var crmExamples1 = {
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    return (
        <>


            <section className={styles.vision}>

                <Container>
                    <Row className={styles.engineering}>
                        <Col lg={4} >
                            <h3 className='mb-5'>Our <br></br> Services </h3>
                            <h2>We believe that companies that develop applications, websites, and software need to provide more than just a code.</h2>
                        </Col>
                        <Col lg={1} >

                        </Col>
                        <Col lg={7} >


                            <div className={styles.newteam}>
                                <Slider {...crmExamples1} className={styles.site1}>

                                    <div className={styles.want1}>
                                        <Image quality={75} src={team1} className='img-fluid' />
                                    </div>
                                    <div className={styles.want1}>
                                        <Image quality={75} src={team2} className='img-fluid' />
                                    </div>
                                    <div className={styles.want1}>
                                        <Image quality={75} src={team3} className='img-fluid' />
                                    </div>


                                </Slider>


                                <Slider {...crmExamples} className={styles.site}>

                                    <div className={styles.want}>
                                        <h2>Development</h2>
                                        <p className='font16 black'>  Whether you want to upgrade an existing site or start from the beginning, we will make sure that each line of code is in place. Easy and clean code is crucial for the smooth functioning of your website or application. </p>

                                        <div className='mt-4'>
                                            <Link className={styles.btnslack} href="#">
                                                FIND OUT MORE
                                            </Link>
                                        </div>

                                    </div>

                                    <div className={styles.want}>
                                        <h2>Support & maintenance</h2>

                                        <p className='font16 black p-0 m-0'> OSM also offers professional, modern and reliable IT and telecommunication services.  Upgrade your company to become a modern business using OSM Support services.    </p>

                                        <div className='mt-4'>
                                            <Link className={styles.btnslack} href="#">
                                                FIND OUT MORE
                                            </Link>
                                        </div>

                                    </div>

                                    <div className={styles.want}>
                                        <h2>Design</h2>

                                        <p className='font16 black p-0 m-0'>
                                            Branding plays a key role in any company that wants a unique and different presence in the market. Branding is the one thing that clearly separates you from the crowd.

                                        </p>

                                        <div className='mt-4'>
                                            <Link className={styles.btnslack} href="#">
                                                FIND OUT MORE
                                            </Link>
                                        </div>

                                    </div>



                                </Slider>
                            </div>


                        </Col>
                    </Row>

                </Container>





            </section >





        </>
    )
}

export default Ourservicesweaare