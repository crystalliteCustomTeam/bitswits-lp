import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Expertapphome.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import banImg1 from '../public/images/expert/expert.png'
import banImg2 from '../public/images/expert/1.png'
import banImg3 from '../public/images/expert/2.png'
import banImg4 from '../public/images/expert/3.png'
import banImg5 from '../public/images/expert/4.png'
import banImg6 from '../public/images/expert/5.png'
import Link from 'next/link';
import Htmlfile from './Htmlfile';

export default function Expertapphome(props) {



    return (
        <>

        {/* <Htmlfile /> */}
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2'>

                        <Col lg={12} >
                            <h3 className='white f-20 f-700 center'>SERVICES</h3>
                            <h2 className='white f-40 f-700 center'>Mobile App Development Services</h2>
                            <p className={`${styles.appno} white font16 f-400 center`}>Revolutionize Your Business With A Mobile App Development Firm Dedicated To Providing You With The Most Innovative Apps. Take Advantage Of Their Extensive Offerings For Essential Platforms Like Ios, And Android For Maximum Impact.</p>

                        </Col>

                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <h3 className='font15 white fw700'>IOS Application Development</h3>
                                    <p className='font12 white fw400'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.</p>
                                </div>
                                <div>
                                    <Image src={banImg1} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <h3 className='font15 white fw700'>Android Application Development</h3>
                                    <p className='font12 white fw400'>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. </p>
                                </div>
                                <div>
                                    <Image src={banImg2} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <h3 className='font15 white fw700'>React NativeApp Development</h3>
                                    <p className='font12 white fw400'>Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. </p>
                                </div>
                                <div>
                                    <Image src={banImg3} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <h3 className='font15 white fw700'>Flutter App Development</h3>
                                    <p className='font12 white fw400'>Our team of expert Flutter app developers at Bitswits use the latest tools and techniques.</p>
                                </div>
                                <div>
                                    <Image src={banImg4} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <h3 className='font15 white fw700'>Cross Platform App Development</h3>
                                    <p className='font12 white fw400'>We prioritize creating seamless user experiences in cross-platform app development.</p>
                                </div>
                                <div>
                                    <Image src={banImg5} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <h3 className='font15 white fw700'>Web App Development</h3>
                                    <p className='font12 white fw400'>We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.</p>
                                </div>
                                <div>
                                    <Image src={banImg6} className='img-fluid' />
                                </div>
                            </div>

                        </Col>
                      

                    </Row>

                </Container>

            </section>
        </>
    )
}
