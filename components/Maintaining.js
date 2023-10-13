import React from 'react'

import styles from '@/styles/Maintaining.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/servicesnewicon/1.png'
import icon2 from '../public/images/servicesnewicon/2.png'
import icon3 from '../public/images/servicesnewicon/3.png'
import icon4 from '../public/images/servicesnewicon/4.png'
import icon5 from '../public/images/servicesnewicon/5.png'
import icon6 from '../public/images/servicesnewicon/6.png'
import icon7 from '../public/images/servicesnewicon/7.png'
import icon8 from '../public/images/servicesnewicon/8.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Maintaining = () => {



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


            <section>


                <Container>
                    <Row>
                        <Col xl={12}>

                            <h3 className={styles.serve}>Services</h3>
                            <h2 className={styles.qualitu}> Maintaining Digital Quality with <br></br> our Collection of Customizable Services </h2>
                        </Col>
                    </Row>
                    <Row className={styles.apps}>
                        <Col xl={3} className='p-0'>

                            <div className={styles.dev}>
                                <Image quality={75} src={icon1} className='img-fluid' />
                                <h3>Mobile App Development</h3>
                                <p>The mobile apps developed by app developers at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.</p>
                            </div>

                        </Col>
                        <Col xl={3} className='p-0'>
                            <div className={styles.dev}>
                                <Image quality={75} src={icon2} className='img-fluid' />
                                <h3>Web App Development</h3>
                                <p>Our top app developers excel in web app development, offering top-tier expertise ensuring client satisfaction and on-time delivery.</p>
                            </div>

                        </Col>
                        <Col xl={3} className='p-0'>
                            <div className={styles.dev}>
                                <Image quality={75} src={icon3} className='img-fluid' />
                                <h3>Game Development</h3>
                                <p>Use our fascinating game development solutions to transport your audience to spellbound virtual worlds.</p>
                            </div>

                        </Col>
                        <Col xl={3} className='p-0'>
                            <div className={styles.dev1}>
                                <Image quality={75} src={icon4} className='img-fluid' />
                                <h3>Blockchain Development</h3>
                                <p>We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.</p>
                            </div>

                        </Col>



                        <Col xl={3} className='p-0'>

                            <div className={styles.dev2}>
                                <Image quality={75} src={icon5} className='img-fluid' />
                                <h3>UI/UX App Design</h3>
                                <p>Our team of professional UI/UX app designers help develop designs that guide users towards meaningful interactions and impactful user experience.</p>
                            </div>

                        </Col>
                        <Col xl={3} className='p-0'>
                            <div className={styles.dev2}>
                                <Image quality={75} src={icon6} className='img-fluid' />
                                <h3>Internet of Things</h3>
                                <p>Our Internet of Things (IoT) services assist you in developing your concept for IoT adoption and in setting up safe technical support systems for complex data work.</p>
                            </div>

                        </Col>
                        <Col xl={3} className='p-0'>
                            <div className={styles.dev2}>
                                <Image quality={75} src={icon7} className='img-fluid' />
                                <h3>AR/VR</h3>
                                <p>Utilize AI's potential to promote automated interactions, personalized experiences, & predictive insights for better engagement with technology & data.</p>
                            </div>

                        </Col>
                        <Col xl={3} className='p-0'>
                            <div className={styles.dev3}>
                                <Image quality={75} src={icon8} className='img-fluid' />
                                <h3>AI</h3>
                                <p>Utilize AI's potential to promote automated interactions, personalized experiences, & predictive insights for better engagement with technology & data.</p>
                            </div>

                        </Col>

                    </Row>


                    <Slider {...awardslogo} className={` ${styles.nextalign1}`}>

                        

                            <div className={styles.dev}>
                                <Image quality={75} src={icon1} className='img-fluid' />
                                <h3>Mobile App Development</h3>
                                <p>The mobile apps developed by app developers at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.</p>
                            </div>

                        
                        
                            <div className={styles.dev}>
                                <Image quality={75} src={icon2} className='img-fluid' />
                                <h3>Web App Development</h3>
                                <p>Our top app developers excel in web app development, offering top-tier expertise ensuring client satisfaction and on-time delivery.</p>
                            </div>

                        
                        
                            <div className={styles.dev}>
                                <Image quality={75} src={icon3} className='img-fluid' />
                                <h3>Game Development</h3>
                                <p>Use our fascinating game development solutions to transport your audience to spellbound virtual worlds.</p>
                            </div>

                        
                        
                            <div className={styles.dev1}>
                                <Image quality={75} src={icon4} className='img-fluid' />
                                <h3>Blockchain Development</h3>
                                <p>We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.</p>
                            </div>

                        



                        

                            <div className={styles.dev2}>
                                <Image quality={75} src={icon5} className='img-fluid' />
                                <h3>UI/UX App Design</h3>
                                <p>Our team of professional UI/UX app designers help develop designs that guide users towards meaningful interactions and impactful user experience.</p>
                            </div>

                        
                        
                            <div className={styles.dev2}>
                                <Image quality={75} src={icon6} className='img-fluid' />
                                <h3>Internet of Things</h3>
                                <p>Our Internet of Things (IoT) services assist you in developing your concept for IoT adoption and in setting up safe technical support systems for complex data work.</p>
                            </div>

                        
                        
                            <div className={styles.dev2}>
                                <Image quality={75} src={icon7} className='img-fluid' />
                                <h3>AR/VR</h3>
                                <p>Utilize AI's potential to promote automated interactions, personalized experiences, & predictive insights for better engagement with technology & data.</p>
                            </div>

                        
                        
                            <div className={styles.dev3}>
                                <Image quality={75} src={icon8} className='img-fluid' />
                                <h3>AI</h3>
                                <p>Utilize AI's potential to promote automated interactions, personalized experiences, & predictive insights for better engagement with technology & data.</p>
                            </div>

                        



                    </Slider>

                </Container>


            </section>



        </>
    )
}

export default Maintaining