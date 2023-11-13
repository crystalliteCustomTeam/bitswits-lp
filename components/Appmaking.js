import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Appmaking.module.css'
import { Row, Col, Container } from 'react-bootstrap'
// images
import logo1 from '../public/images/logoservices/1.png'
import logo2 from '../public/images/logoservices/2.png'
import logo3 from '../public/images/logoservices/3.png'
import logo4 from '../public/images/logoservices/4.png'
import logo5 from '../public/images/logoservices/5.png'
import logo6 from '../public/images/logoservices/6.png'
import line2345 from '../public/images/logoservices/line2345.png'




const Appmaking = () => {





    return (
        <>
            <section className={styles.appmaking} id='technofair'>
                <Container>
                    <Row className={`${styles.platform} gx-5`}>
                        <Col xl={10}>
                            <h2 class="white f-20 f-700 center">TECHNOLOGIES</h2>
                            <h3 class="white f-40 f-700 center">Best App Making Technologies</h3>
                            <p class="white font16 f-400 center mb-5">BitsWits turns inventive ideas into groundbreaking mobile apps! Our award-winning app developers know hybrid and native technologies, so your project is in good hands. With us, your project will be a success from start to finish!</p>
                        </Col>
                        <Col xl={5}>
                            <div class={styles.native} data-scroll data-scroll-speed="0.4">
                                <div class={styles.noroow}>
                                    <Image alt='BitsWits' src={logo1} className='img-fluid' />
                                    <Image alt='BitsWits' src={logo2} className='img-fluid' />
                                    <Image alt='BitsWits' src={logo3} className='img-fluid' />
                                    <Image alt='BitsWits' src={logo4} className='img-fluid' />

                                </div>
                                <h3 class="white font24 f-700 mt-4 mb-4">Hybrid App Development</h3>

                                <Image alt='BitsWits' src={line2345} className='img-fluid' />

                                <ul class={styles.dev}>
                                    <li class="white mt-3">Cross-platform Compatibility.</li>
                                    <li class="white mt-3">Accelerated Development Cycle.</li>
                                    <li class="white mt-3">Customizable UI/UX Design.</li>
                                    <li class="white mt-3">Cost-Effective Single Codebase Solution.</li>
                                </ul>

                                <Link href='#' className={styles.live}>Start <br></br> Live</Link>

                            </div>
                        </Col>
                        <Col xl={5}>
                            <div class={styles.native2} data-scroll data-scroll-speed="0.4">
                                <div class={`${styles.noroow2} ${styles.noroow1}`}>
                                    <Image alt='BitsWits' src={logo5} className='img-fluid' />
                                    <Image alt='BitsWits' src={logo6} className='img-fluid' />
                                 

                                </div>
                                <h3 class="white font24 f-700 mt-4 mb-4">Native App Development</h3>

                                <Image alt='BitsWits' src={line2345} className='img-fluid' />

                                <ul class={styles.dev}>
                                    <li class="white mt-3">High Performance Platform-Optimization.</li>
                                    <li class="white mt-3">Access To Device Features & Integration.</li>
                                    <li class="white mt-3">Customized UI/UX Application Design.</li>
                                    <li class="white mt-3 mb-5">Robust & Adaptable Mobile Application.</li>
                                </ul>
                                <div>
                                <Link href='#' className={styles.live1}>Call Now: 111-2222-333</Link>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
                <div class={styles.post}></div>
            </section>



        </>
    )
}

export default Appmaking