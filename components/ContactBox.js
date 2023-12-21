import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ContactUs.module.css'
//
import malaysia from '../public/images/contact/malaysia.png'
import pakistan from '../public/images/contact/pakistan.png'
import delaware from '../public/images/contact/delaware.png'
import houston from '../public/images/contact/houston.png'
import Sharjah from '../public/images/contact/sharjah.png'


const ContactBox = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    function loc(tabs1) {
        setActiveTab(tabs1);
    }

    return (
        <>
            <section className={styles.bannerContact}>
                <Container fluid>
                    <div className={styles.contactCard}>
                        <Row className='align-items-center cntctRow'>
                            <Col lg={6}>
                                <div className={styles.locSlider}>

                                    <div className={styles.tabsBtns}>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab1" ? styles.active : ""}`}
                                            onClick={() => loc("tab1")}
                                            href="#">
                                            USA
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab2" ? styles.active : ""}`}
                                            onClick={() => loc("tab2")}
                                            href="#">
                                            Middle East
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab3" ? styles.active : ""}`}
                                            onClick={() => loc("tab3")}
                                            href="#">
                                            ASIA
                                        </div>
                                    </div>

                                    <div>
                                        {activeTab == "tab1" && (
                                            <div className="locBox">
                                                <div className={styles.locTxt}>
                                                    <h2 className="font30 font-bold white mb-3 text-center">United States</h2>
                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">DELAWARE</h3>
                                                    <p className="font13 font-medium white mb-1 text-center">
                                                        8 The Green STE 300, Dover DE 19901.
                                                    </p>
                                                    <Link className='font14 white text-center mb-3' href='tel:+18335006007'>+1 833 500 6007</Link>
                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={delaware} alt='Location' className='img-fluid mb-4' />
                                                    </div>

                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">HOUSTON</h3>
                                                    <p className="font13 font-medium white mb-1 text-center">
                                                        Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100 Houston, TX 77056
                                                    </p>
                                                    <Link className='font14 white text-center mb-3' href='tel:+17135657656'>+1 713 565 7656</Link>
                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={houston} alt='Location' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab == "tab2" && (
                                            <div className="locBox">
                                                <div className={styles.locTxt}>
                                                    <h2 className="font30 font-bold white mb-3 text-center">Middle East</h2>
                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">SHARJAH</h3>
                                                    <p className="font15 font-medium white mb-1 text-center">
                                                        Office #101, 32 Street, Al Mujarrah, Sharjah
                                                    </p>
                                                    <Link className='font14 white text-center' href='tel:+971555031266'>+971 555 031266</Link>
                                                </div>
                                                <div className={styles.locImg}>
                                                    <Image src={Sharjah} alt='Location' className='img-fluid mt-4' />
                                                </div>
                                            </div>
                                        )}
                                        {activeTab == "tab3" && (
                                            <div className="locBox">
                                                <div className={styles.locTxt}>
                                                    <h2 className="font30 font-bold white mb-3 text-center">Asia</h2>
                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">MALAYSIA</h3>
                                                    <p className="font13 font-medium white text-center">
                                                        Office 13 A - Main Office Tower - Financial Park , Labuan , Malaysia
                                                    </p>

                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={malaysia} alt='Location' className='img-fluid mb-4' />
                                                    </div>

                                                    <h3 className="font16 font-bold newfycolr mb-0 text-center">PAKISTAN</h3>
                                                    <p className="font13 font-medium white text-center mb-1">
                                                        12th Floor Caesar's Tower, Karachi, Pakistan
                                                    </p>
                                                    <Link className='font14 white text-center' href='tel:+923468280101'>+92 346 828 0101</Link>
                                                    <div className={`${styles.locImg} ${styles.asiaImg}`}>
                                                        <Image src={pakistan} alt='Location' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <h2 className="font40 font-bold newfycolr">Say Hello!</h2>
                                <p className="font16 font-medium white">
                                    Let’s make headlines together! We’re excited to collaborate with you on your fantastic project.
                                </p>
                                <h3 className="font30 font-bold f-s mb-2 newfycolr">
                                    For Work Inquiry
                                </h3>
                                <p className="font14 font-medium white mb-4">
                                    Whether you need a mobile app or a particular game solution, every venture starts with a
                                    simple email or phone call. Fill in the following information and we will get in touch.

                                </p>

                                <form id="contactusform1" >
                                    <Row className='gy-3'>
                                        <Col lg={6}>
                                            <input type="text" className="" name="name" id="name" placeholder="Full Name" required="" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="text" name="email" id="email" placeholder="Last Name" required="" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="phone" name="phone" id="phone" placeholder="Phone" required="" minLength="7" maxlength="15" onkeypress="return /[0-9]/i.test(event.key)" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="email" name="email" id="email" placeholder="Email Address" required="" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea type="textarea" className="" name="comments" id="comments" placeholder="Comments" required="" />
                                        </Col>
                                        <Col>
                                            <div className={styles.notic}>
                                                <p className='white font16'>We take your privacy seriously. <br /> Read our <span className='font-bold'> <Link className='newfycolr' href='/privacy-policy'>Privacy Policy</Link> .</span></p>
                                                <button id="savebtns" type="submit" className={styles.bttns1}>Submit</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactBox
