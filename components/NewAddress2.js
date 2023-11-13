import React from 'react'
import styles from "@/styles/address2.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import icon11 from '../public/newMobilePageImages/city1.png'
import icon12 from '../public/newMobilePageImages/city2.png'
import icon14 from '../public/newMobilePageImages/city3.png'
//
import arrow from '../public/newlppage/arrow.png'

const NewAddress = () => {
    return (
        <>
            <Container className={styles.appios}>
                <Row className='align-items-start'>


                    <Col lg={3}>
                        <Row>
                            <Col lg={12}>
                                <div className={`mb-lg-4`}>
                                    <h4 className='font28 grdiant2 font-bold'>Ready For Success?</h4>
                                    <h5 className='font20 font-bold text-white'>Schedule a complimentary strategy session now with our experienced product strategists.</h5>
                                    <div className={styles.menu}>
                                        <Link className={`${styles.book} ${styles.book2}`} href="#">
                                            Avail My Free Session.
                                            <Image alt="BitsWits" src={arrow} className='img-fluid ms-2' />
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Col>

                    <Col lg={9}>
                        <div className={styles.make}>
                            <form className={styles.formsbanner}>
                                <Row className='star gx-3'>
                                    <Col lg={5} className='demono2'>
                                        <div>
                                            <input type='text' className={styles.forminput} placeholder='Your Name' />
                                            <input type='email' className={styles.forminput} placeholder='Email Address' />
                                            <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                            <textarea className={`${styles.formarea} d-block d-lg-none`} placeholder='How can we help you?' ></textarea>
                                            <div className={`${styles.take} d-flex`}>
                                                <p className='font12 font-semibold fontf m-0'>We take your privacy seriously. Read our <span>Privacy</span></p>
                                            </div>
                                            <input type='Submit' className={`${styles.notice} d-block d-lg-none my-3`} />
                                        </div>
                                    </Col>
                                    <Col lg={5} className='d-none d-lg-block demono2'>
                                        <div>
                                            <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                            <input type='Submit' className={styles.notice} />
                                        </div>
                                    </Col>

                                    <Col lg={2} className='d-none d-lg-block newfire'>
                                        <div className={`${styles.read} mb-lg-4`}>
                                            <div className={`${styles.free}`}>
                                                <p className='font20 texttran text-white font-bold fontf'>
                                                    Our Presence
                                                </p>
                                            </div>
                                            <div className={styles.locInner}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon11} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>USA</p>
                                                    <Link href="tel:+18335006007" className='font12 font-regular fontf white texdocration'>
                                                        +1 833 500 6007
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={ ` ${styles.locInner} mt-2 mb-2 ` }>
                                            <div className={styles.locImg}>
                                                <Image alt="BitsWits" src={icon12} className='img-fluid' />
                                            </div>
                                            <div className={styles.subInner}>
                                                <p className='font12 font-bold fontf mb-0'>Middle East</p>
                                                <Link href="tel:+97 155 503 1266" className='font12 font-regular fontf white texdocration'>
                                                    +97 155 503 1266
                                                </Link>
                                            </div>
                                            </div>
                                            <div className={styles.locInner}>
                                            <div className={styles.locImg}>
                                                <Image alt="BitsWits" src={icon14} className='img-fluid' />
                                            </div>
                                            <div className={styles.subInner}>
                                                <p className='font12 font-bold fontf mb-0'>Asia</p>
                                                <Link href="tel:+923468280101" className='font12 font-regular fontf white texdocration'>
                                                    +92 346 828 0101
                                                </Link>
                                            </div>
                                            </div>
                                        </div>


                                    </Col>

                                </Row>
                            </form>
                        </div>
                    </Col>


                </Row>
            </Container>
        </>
    )
}

export default NewAddress