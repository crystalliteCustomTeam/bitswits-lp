import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Transformideaslp6.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import banImg1 from '../public/images/mobilelpfinal/chooselog/1.png'
import banImg2 from '../public/images/mobilelpfinal/chooselog/2.png'
import banImg3 from '../public/images/mobilelpfinal/chooselog/3.png'
import banImg4 from '../public/images/mobilelpfinal/chooselog/4.png'
import banImg5 from '../public/images/mobilelpfinal/chooselog/5.png'
import banImg6 from '../public/images/mobilelpfinal/chooselog/6.png'
import banImg7 from '../public/images/mobilelpfinal/chooselog/7.png'
import banImg8 from '../public/images/mobilelpfinal/chooselog/8.png'
import banImg9 from '../public/images/mobilelpfinal/chooselog/9.png'

import Link from 'next/link';


export default function Transformideaslp6(props) {



    return (
        <>
            <section className={styles[props.transform]}>
                <Container>
                    <Row className='align-items-center'>

                        <Col lg={6} className={styles.walk}>
                            <h3>Why Choose Us</h3>
                            <h2>For Your Mobile App Development
                                Needs?</h2>
                            <p className='mt-4'>Our <span>mobile app development services</span> turn your innovative ideas into success stories by crafting apps that stand out in the market!</p>

                            <p>While you <span>focus on your business</span>, Bitswits will handle the technical aspects of developing your app.</p>
                            <p>Did you know that a <span>poorly developed app</span> can negatively impact your brand's reputation? That's a risk you don't want to take. But with Bitswits, there's no need to worry. We ensure your app functions seamlessly and enhances your brand's digital presence.</p>
                            <p>Unlike <span>Mobile app development firms</span>, we don't believe in a one-size-fits-all approach. We understand that the reason behind an underperforming app often lies in its development and user experience. That's where our expertise comes into play. With a <span>team of seasoned mobile app developers</span>, the latest technological resources, and a bespoke development strategy.</p>
                            <p className='mt-4 mb-4'>Every app we develop undergoes thorough quality checks to ensure <span>IT'S NOT JUST GOOD, BUT GREAT</span>.</p>
                            <div className={styles.ourt}>
                                <Link href="#" className={styles.dus}>Choose Expertise, Choose Bitswits – Let's Get Started </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.cart}>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg1} className='img-fluid mb-3' />

                                    <p>Experienced 
                                        Professionals</p>
                                </div>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg2} className='img-fluid mb-3' />

                                    <p>On-Time
                                  
                                        Delivery</p>
                                </div>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg3} className='img-fluid mb-3' />

                                    <p>Cost-Effective
                                       
                                           Solutions</p>
                                </div>
                            </div>
                            <div className={styles.cart}>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg4} className='img-fluid mb-3' />

                                    <p>Scalable and
                                       
                                        Secure Apps</p>
                                </div>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg5} className='img-fluid mb-3' />

                                    <p>User-Centric
                                       
                                        Design</p>
                                </div>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg6} className='img-fluid mb-3' />

                                    <p>Customized
                                        
                                        Development</p>
                                </div>
                            </div>


                            <div className={styles.cart}>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg7} className='img-fluid mb-3' />

                                    <p>Error-Free

                                       
                                        Delivery</p>
                                </div>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg8} className='img-fluid mb-3' />

                                    <p>Transparent
                                       
                                        Communication</p>
                                </div>
                                <div className={styles.post}>
                                    <Image quality={95} alt='BitsWits' src={banImg9} className='img-fluid mb-3' />

                                    <p>Support and

                                       
                                        Maintenance</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}

