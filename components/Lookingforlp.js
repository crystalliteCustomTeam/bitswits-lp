import React from 'react'
import styles from '@/styles/Lookinglp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'
import languages from '../public/images/lookingforlp/languages.png'
import database from '../public/images/lookingforlp/database.png'
import framework from '../public/images/lookingforlp/framework.png'





import Image from 'next/image'
import { useState } from 'react'


const Lookingforlp = (props) => {


    const [gameshow, gameapp] = useState(true);
    const [gameshow1, gameapp1] = useState(false);
    const [gameshow2, gameapp2] = useState(false);

    function game() {


        gameapp(true);
        gameapp1(false);
        gameapp2(false);

    }
    function game1() {

        gameapp(false);
        gameapp1(true);
        gameapp2(false);

    }
    function game2() {

        gameapp(false);
        gameapp1(false);
        gameapp2(true);

    }


    return (
        <>
            <section className={`${styles.lookingfor} pt-4`}>
                <Container>
                    <Row className={`${styles.project} justify-content-between`}>
                        <Col lg={12}>
                          {props.tilte}
                        </Col>
                        <Col lg={12}>
                            {props.title2}
                            
                            {props.para}

                        </Col>
                        {/* <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col> */}
                    </Row>
                    <Row className="mt-4">
                        <Col lg={12}>


                            <div className={styles.devlp}>

                                <div onClick={game} className={gameshow ? styles.btnblack : styles.game} >LANGUAGES</div>

                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>DATABASES</div>

                                <div onClick={game2} className={gameshow2 ? styles.btnblack : styles.game}>FRAMEWORKS</div>


                            </div>
                        </Col>
                    </Row>

                    {gameshow ?

                        <Row>
                            <Col lg={6}>


                                <p className='fontf black font-medium font15 mt-4'>At BitsWits, we create customized mobile apps that deliver exceptional user experiences. To achieve this, we utilize a range of programming languages such as Java, Swift, Kotlin, and React Native, among others. Our team of skilled app developers uses the latest tools and frameworks to build efficient, scalable apps that cater to your unique business needs. Whether you're looking for an iOS or Android app, our focus on quality and innovation ensures that your app is developed with the best programming languages for your specific requirements. </p>




                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3 - 6 Months</p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> iOS App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Beacon Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Android App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> React Native Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Smart Watch Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Mobile Web Apps</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={languages} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }






                    {gameshow1 ?

                        <Row>
                            <Col lg={6}>


                                <p className='fontf black font-medium font15 mt-4'>At BitsWits, we understand that choosing the correct database is an essential part of the app development process that's why we use a range of databases, including SQL and NoSQL databases such as MySQL, MongoDB, and Firebase, among others. Our team of expert developers leverages the latest database technologies to design robust, reliable backend systems that power your mobile app. From data modeling to performance optimization, we ensure your app's database is optimized for your specific business requirements, providing seamless integration and unparalleled user experiences. </p>




                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3 - 6 Months</p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> iOS App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Beacon Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Android App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> React Native Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Smart Watch Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Mobile Web Apps</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={database} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }







                    {gameshow2 ?

                        <Row>
                            <Col lg={6}>


                                <p className='fontf black font-medium font15 mt-4'>Our team of experts uses a variety of frameworks to develop mobile apps and leverage the latest frameworks, such as React Native, Flutter, and Xamarin, among others, to build cross-platform mobile apps that work seamlessly across various devices and operating systems. We also utilize popular frameworks such as AngularJS and Vue.js to create potent web applications that integrate seamlessly with your mobile app. Our focus on innovation ensures that your app is developed using the best framework for your unique business needs, delivering exceptional user experiences and driving business growth.</p>





                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3 - 6 Months</p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> iOS App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Beacon Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Android App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> React Native Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Smart Watch Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Mobile Web Apps</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={framework} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }













                </Container>

            </section>
        </>
    )
}

export default Lookingforlp