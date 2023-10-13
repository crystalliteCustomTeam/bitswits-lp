import React from 'react'
import styles from '@/styles/HybridApp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'
import languages from '../public/images/hybirdlp/hybrid-app.webp'
import database from '../public/images/hybirdlp/native-app.webp'






import Image from 'next/image'
import { useState } from 'react'


const HybridApp = () => {


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
            <section className={styles.lookingfor}>
                <Container>

                    <Row className="mt-4">
                        <Col lg={12}>


                            <div className={styles.devlp}>

                                <div onClick={game} className={gameshow ? styles.btnblack : styles.game} >Hybrid App Development</div>

                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>Native App Development</div>




                            </div>
                        </Col>
                    </Row>

                    {gameshow ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font25 mt-4'>Hybrid App Development</h3>

                                <p className='fontf black font-medium font15'>BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with: </p>






                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Say Hi! to Discuss a Project</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>

                                <div className='marque'>
                                    <Image quality={75} src={languages} className='img-fluid mt-5 nopl' />
                                </div>
                                <ul className='mt-5'>
                                    <li className='fontf black font-medium font15'>1. Cross-platform Compatibility.</li>
                                    <li className='fontf black font-medium font15 mt-2'>2. Accelerated Development Cycle.</li>
                                    <li className='fontf black font-medium font15 mt-2'>3. Customizable UI/UX Design.</li>
                                    <li className='fontf black font-medium font15 mt-2'>4. Cost-Effective Single Codebase Solution.</li>
                                </ul>

                            </Col>
                        </Row>
                        :
                        ''
                    }






                    {gameshow1 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font25 mt-4'>Native App Development</h3>

                                <p className='fontf black font-medium font15'>BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:</p>






                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Say Hi! to Discuss a Project</Link>

                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>

                                <div className='marque'>
                                    <Image quality={75} src={database} className='img-fluid mt-5 nopl' />
                                </div>

                                <ul className='mt-5'>
                                    <li className='fontf black font-medium font15'>1. High Performance Platform-Optimization.</li>
                                    <li className='fontf black font-medium font15 mt-2'>2. Access To Device Features & Integration.</li>
                                    <li className='fontf black font-medium font15 mt-2'>3. Customized UI/UX Application Design.</li>
                                    <li className='fontf black font-medium font15 mt-2'>4. Robust & Adaptable Mobile Application.</li>
                                </ul>
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

export default HybridApp