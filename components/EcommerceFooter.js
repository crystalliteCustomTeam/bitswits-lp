import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/EcommerFooter.module.css'
import Image from 'next/image'
import Link from 'next/link'

//
import Award from 'public/ecommerce/award.svg'
import Envelop from 'public/ecommerce/envelop.svg'
import Phone from 'public/ecommerce/phone.svg'


const EcommerceFooter = () => {
    return (
        <>
            <section className={styles.footer}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.award}>
                                <Image src={Award} alt='Award' />
                                <div className={styles.footerpara}>
                                    <p className='font15 font-bold mb-0'>No#1 Top Application Development Company</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <h5 className={`text-white font18 font-bold pb-2 ${styles.borderbottom}`}>Services</h5>
                            <Row>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>iPhone App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Cross Platform App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Android App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>React Native App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Flutter App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Wearable App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>UI / UX App Design</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Mobile App Development USA</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Mobile App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Web App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Game Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>2D Game Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>3D Game Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Blockchain Game Development</Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5}>
                            <h5 className={`text-white font18 font-bold pb-2 ${styles.borderbottom}`}>On Demand Solutions</h5>
                            <Row>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>On Demand App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Taxi App Solution</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Food Delivering App Solutions</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Elearning App Solutions</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Lifestyle App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Healthcare App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>On Demand eWallet App Solutions</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Fantasy Sports App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Grocery Delivery App Development</Link>
                                        </li>
                                        <li>
                                            <Link href="javascrtipt:;" className='font12 lightgrey'>Live Streaming App Development</Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={2}>
                            <h5 className={`text-white font18 font-bold pb-2 ${styles.borderbottom}`}>Useful Links</h5>
                            <ul>
                                <li>
                                    <Link href="javascrtipt:;" className='font12 lightgrey'>About Us</Link>
                                </li>
                                <li>
                                    <Link href="javascrtipt:;" className='font12 lightgrey'>Works</Link>
                                </li>
                                <li>
                                    <Link href="javascrtipt:;" className='font12 lightgrey'>Testimonials</Link>
                                </li>
                                <li>
                                    <Link href="javascrtipt:;" className='font12 lightgrey'>Contact Us</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="mailto:;" className='font12 lightgrey'>
                                        <Image src={Envelop} alt='Envelope' />
                                        <span className='font12 lightgrey ms-2'>Contact Email</span>
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="tel:;" className='font12 lightgrey'>
                                        <Image src={Phone} alt='Phone' className='mb-2' />
                                        <span className='font12 lightgrey ms-2'>+1 312 379 5987</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:;" className='font12 lightgrey'>
                                        <Image src={Phone} alt='Phone' className='mb-2' />
                                        <span className='font12 lightgrey ms-2'>+1 833 500 6007</span>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommerceFooter