import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ContactUs.module.css'
//
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'


export default function ContactUs() {

    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <main>
                <section className={styles.bannerContact}>
                    <Container>
                        <div className={styles.contactCard}>
                            <Row className="justify-content-center align-content-center py-5">
                                <Col lg={10} className='mx-auto'>
                                    <h2 className="font40 font-bold t-center white"> Say Hello!</h2>
                                    <p className="t-center font18 font-medium white">
                                        Let’s make headlines together! We’re excited to collaborate with you on your fantastic project.
                                    </p>
                                </Col>
                                <Row className="p-md-4 p-3 mt-4">
                                    <Col lg={8} className="mt-3">
                                        <h2 className="font40 font-bold f-s mb-2 white">
                                            For Work <span className="grdiant">Inquiry</span>
                                        </h2>
                                        <p className="font14 font-medium white mb-4">
                                            Whether you need a mobile app or a particular game solution, every venture starts with a
                                            simple email or phone call. Fill in the following information and we will get in touch
                                            within 1 business day.
                                        </p>

                                        <form id="contactusform1" >
                                            <Row className='gy-3'>
                                                <Col lg={6}>
                                                    <input type="text" className="" name="name" id="name" placeholder="Full Name" required="" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="email" name="email" id="email" placeholder="Email Address" required="" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="phone" name="phone" id="phone" placeholder="Phone" required="" minlength="7" maxlength="15" onkeypress="return /[0-9]/i.test(event.key)" />
                                                </Col>
                                                <Col lg={6}>
                                                    <input type="text" className="" name="budget" id="budget" placeholder="Budget (in USD)" required="" />
                                                </Col>
                                                <Col lg={12} className='mt-3'>
                                                    <label for="upload"></label>
                                                    <input type="file" name="upload" id="upload" className={`${styles.cnFoFill} form-control-file`} />
                                                </Col>
                                                <Col lg={12}>
                                                    <input type="textarea" className="" name="comments" id="comments" placeholder="Comments" required="" />
                                                </Col>
                                                <Col className="mt-3 d-flex gap-5">
                                                    <p className='white font16'>We take your privacy <br /> seriously. Read our <span className='font-bold'>Privacy</span></p>
                                                    <button id="savebtns" type="submit" className={styles.bttns1}>Submit</button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="pt-4 pe-md-3 px-md-3">
                                            <h3 className="font18 font-semibold grdiant letterspacing f-upperCase mb-3">
                                                GET IN TOUCH
                                            </h3>
                                            <h2 className="font20 font-bold mb-1 white">
                                                For Work Inquiry
                                            </h2>
                                            <h4 className="f-14 font-bold mb-0 white">Mail to Our Sales Department</h4>
                                            <ul className="ps-0 mt-3 mb-3">
                                                <li>
                                                    <Link href="mailto:info@bitswits.co" className="grdiant font-bold">Contact Email</Link>
                                                </li>
                                                <li className='font14 font-bold white'>Skype - Daniel</li>
                                                <li className='font14 font-bold white'>Phone:
                                                    <Link href="tel:13123795987" className="grdiant font-bold"> 1 - 312 379 5987</Link>
                                                </li>
                                            </ul>
                                            <h4 className="font20 font-bold mb-0 white">For Career Inquiry</h4>
                                            <ul className="ps-0 my-3">
                                                <li>
                                                    <Link href="mailto:hr@bitswits.co" className="grdiant font-bold">Email Us</Link>
                                                </li>
                                            </ul>
                                            <h4 className="font20 font-bold mb-4 white">Connect With Us</h4>
                                            <div className={styles.socialicons}>
                                                <Link href="#">
                                                    <FaFacebookF size={20} className={styles.email} />
                                                </Link>
                                                <Link href="#">
                                                    <AiOutlineInstagram size={20} className={styles.email} />
                                                </Link>
                                                <Link href="#">
                                                    <AiOutlineTwitter size={20} className={styles.email} />
                                                </Link>
                                                <Link href="#">
                                                    <FaLinkedinIn size={20} className={styles.email} />
                                                </Link>
                                                <Link href="#">
                                                    <BsYoutube size={20} className={styles.email} />
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </Container>

                </section>
            </main>
        </>
    )
}
