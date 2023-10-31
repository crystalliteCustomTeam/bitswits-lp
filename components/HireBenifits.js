import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/HireBenifits.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import benif1 from '../public/images/hire-page/benifit-icon1.png'
import benif2 from '../public/images/hire-page/benifit-icon2.png'
import benif3 from '../public/images/hire-page/benifit-icon3.png'
import benif4 from '../public/images/hire-page/benifit-icon4.png'
import benif5 from '../public/images/hire-page/benifit-icon5.png'
import benif6 from '../public/images/hire-page/benifit-icon6.png'
import benif7 from '../public/images/hire-page/benifit-icon7.png'
import benif8 from '../public/images/hire-page/benifit-icon8.png'
import benif9 from '../public/images/hire-page/benifit-icon9.png'
import benif10 from '../public/images/hire-page/benifit-icon10.png'


const HireBenifits = (props) => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <>
            <section className={`${styles.benifits}`}>
                <Container>
                    <Row className='gy-5'>
                        <Col lg={10} className='mx-auto'>
                            <div>
                                {props.textArray.map((item, index) => (
                                    <div key={index}>
                                        <h2>{item.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <div>
                            <Row className={`${styles.benifitsBox} align-items-center`}>
                                <Col lg={5} className={`${styles.tabs} tabs`}>
                                    <div className={activeTab === 1 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(1)}>
                                        <Image src={benif1} alt='BitsWits' className='img-fluid' />
                                        <h5>Custom iPhone App Development</h5>
                                    </div>
                                    <div className={activeTab === 2 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(2)}>
                                        <Image src={benif2} alt='BitsWits' className='img-fluid' />
                                        <h5>iPad App Development</h5>
                                    </div>
                                    <div className={activeTab === 3 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(3)}>
                                        <Image src={benif3} alt='BitsWits' className='img-fluid' />
                                        <h5>iPhone Social Media Applications</h5>
                                    </div>
                                    <div className={activeTab === 4 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(4)}>
                                        <Image src={benif4} alt='BitsWits' className='img-fluid' />
                                        <h5>Enterprise iOS Applications</h5>
                                    </div>
                                    <div className={activeTab === 5 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(5)}>
                                        <Image src={benif5} alt='BitsWits' className='img-fluid' />
                                        <h5>E-Commerce App Development</h5>
                                    </div>
                                    <div className={activeTab === 6 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(6)}>
                                        <Image src={benif6} alt='BitsWits' className='img-fluid' />
                                        <h5>Utility App Development</h5>
                                    </div>
                                    <div className={activeTab === 7 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(7)}>
                                        <Image src={benif7} alt='BitsWits' className='img-fluid' />
                                        <h5>iOS Wearable Apps</h5>
                                    </div>
                                    <div className={activeTab === 8 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(8)}>
                                        <Image src={benif8} alt='BitsWits' className='img-fluid' />
                                        <h5>App UI/UX Designing</h5>
                                    </div>
                                    <div className={activeTab === 9 ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon}`} onClick={() => handleTabClick(9)}>
                                        <Image src={benif9} alt='BitsWits' className='img-fluid' />
                                        <h5>iOS Game Development</h5>
                                    </div>
                                    <div className={activeTab === 10 ? `active ${styles.beniftIcon} ${styles.active} ${styles.last}` : `${styles.beniftIcon} ${styles.last}`} onClick={() => handleTabClick(10)}>
                                        <Image src={benif10} alt='BitsWits' className='img-fluid' />
                                        <h5>iPhone M-commerce Applications</h5>
                                    </div>
                                </Col>
                                <Col lg={7} className={`${styles.tabContent} tab-content`}>
                                    {activeTab === 1 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire iPhone Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire iPhone app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 2 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire iPad App Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant iPad app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPad app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire iPad app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 3 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire iPhone Social Media Applications Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant iPhone Social Media app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone Social Media app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire iPhone Social Media app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 4 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire Enterprise iOS Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant Enterprise iOS app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Enterprise iOS app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire Enterprise iOS app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 5 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire E-Commerce Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant E-Commerce app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and E-Commerce app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire E-Commerce app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 6 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire Utility Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant Utility app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Utility app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire Utility app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 7 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire iOS Wearable Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant iOS Wearable app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iOS Wearable app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire iOS Wearable app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 8 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire UI/UX Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant UI/UX app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and UI/UX app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire UI/UX app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 9 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire iOS Game Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant iOS Game app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iOS Game app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire iOS Game app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 10 && (
                                        <div className={styles.benifTxt}>
                                            <h3>Hire iPhone M-commerce Developer to Kick Start your Journey of User-Driven App</h3>
                                            <p>Hiring our extravagant iPhone M-commerce app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone M-commerce app solutions suitable to your business.</p>
                                            <p>We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.</p>
                                            <p>Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.</p>
                                            <p>In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.</p>
                                            <p>Hire iPhone M-commerce app developer  to take the best service to your workplace.</p>
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireBenifits
