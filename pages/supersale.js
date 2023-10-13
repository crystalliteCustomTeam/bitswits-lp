import React from 'react'
import styles from '@/styles/Supersale.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/supersale/logo.svg'
import Head from 'next/head'

const supersale = () => {










    return (
        <>

            <Head>

                <title>Top Mobile App Development Company - Bitswits.</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life" />

            </Head>


            <header className={styles.bannerhome}>
                <section>
                    <Container>
                        <div className="">
                            <div className={styles.toasNotification}>
                                <div className={styles.innerborder}>
                                    <div className={styles.textform}>
                                        <Link href="javascript:;" className="" id="closeBtn"> <i className="fa-solid fa-xmark"></i>
                                        </Link>
                                        <span className=""> 25% OFF any package! USE:
                                            <span className={styles.textth}>today25</span> today!</span>
                                    </div>
                                    <div className={styles.mouse}>
                                        <Link href="javascript:;" className="">CLAIM</Link>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.toasNotificationGoogle}>
                                <div className={styles.innerborder}>
                                    <div className="">
                                        <Link href="javascript:;" className="">
                                            <Image quality={75} src={logo} width="300px" alt="bitswits" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className={styles.backImgmain}>
                            <div className="row justify-content-center align-content-center align-items-center">
                                <Col lg={12}>
                                    <div className={styles.headercontent}>
                                        <div className={styles.textcenter}>
                                            <Image quality={75} src="" className="img-fluid" width="155" alt="logo" />
                                            <h4 className={styles.elevate}>Elevate Your Mobile App
                                                Experience With
                                            </h4>
                                            <h1 className={styles.mobile}>Top Mobile App Development
                                            </h1>
                                            <p className=""> Let us help you bring your vision to life and take your
                                                business to
                                                the
                                                next level with our industry-leading <br></br> <b> mobile app development </b>
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </div>


                            <Row className='justify-content-center align-content-center align-items-center"'>
                                <Col lg={11}>
                                    <div className={styles.headerform}>
                                        <form className="px-lg-5" role="form">
                                            <div className="row pl-0">
                                                <div className="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="text" id="fname" name="name" placeholder="Your Good Name" className={styles.formcontrol} required="" />
                                                </div>
                                                <div className="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="email" id="email" name="email" placeholder="Email Address" className={styles.formcontrol} required="" />
                                                </div>
                                                <div className="form-group col-xl-4 col-lg-4  mb-3">
                                                    <input type="phone" id="phone" name="phone" maxlength="15" placeholder="Phone Number" className={styles.formcontrol} onkeypress="return /[0-9]/i.test(event.key)" required="" />
                                                </div>
                                                <div className="form-group col-xl-8 col-lg-8 mb-3">
                                                    <textarea rows="1" type="text" id="message" name="message" placeholder="Message" className={styles.formcontrol} required=""></textarea>
                                                </div>
                                                <div className="form-group  col-xl-4 col-lg-4 ">
                                                    <button type="submit" name="saves1" id="butact2" className={styles.butpost}>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Col>

                            </Row>

                            <div className="award-section">
                                <div className="row justify-content-center align-content-center align-items-center">
                                    <div className="col-lg-11 col-xl-11">
                                        <div className="awarded mt-2">
                                            <div className="row justify-content-center align-content-center align-items-center">
                                                <div className=" col-xl-4 col-lg-4  col-sm-10 bg-white border-r-20 ">
                                                    <h2 className="font-34  font-bold text-gradient gradient1 ">Awards <br></br>
                                                        Recogniation
                                                    </h2>
                                                </div>
                                                <div className="col-lg-1"></div>
                                                <div className="col-lg-6 col-xl-6  mt-2">
                                                    <Image quality={75} src="" className="img-fluid" alt="Awards" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="position-relative">
                                    <div className="position-absolute social-area">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-lg-6 col-xl-6  col-sm-12">
                                                <ul className="trusted-social">
                                                    <li>
                                                        Trusted by
                                                    </li>
                                                    <li className="border-right-1"></li>
                                                    <li>
                                                        <Link href="https://www.facebook.com/officialbitswits" target="_blank" rel="noopener noreferrer"> <Image quality={75} src="" width="" height="" alt="bitswits" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/officialbitswits/" target="_blank" rel="noopener noreferrer"> <Image quality={75} src="" width="" height="" alt="bitswits" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.linkedin.com/company/officialbitswits" target="_blank" rel="noopener noreferrer"> <Image quality={75} src="" width="" height="" alt="bitswits" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" target="_blank" rel="noopener noreferrer"> <Image quality={75} src="" width="" height="" alt="bitswits" /></Link>
                                                    </li>

                                                    <li className="border-left-1"></li>
                                                    <li>
                                                        <Link href="#"> <Image quality={75} src="" width="" height="26" alt="bitswits" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </header>




        </>
    )
}

export default supersale