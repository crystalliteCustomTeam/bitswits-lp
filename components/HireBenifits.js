import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/HireBenifits.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import { FaAngleDown } from 'react-icons/fa';
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


const tabsData = [
    {
        id: 1,
        title: 'Custom iPhone App Development',
        content: {
            imageSrc: benif1,
            heading: 'Hire iPhone Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 2,
        title: 'iPad App Development',
        content: {
            imageSrc: benif2,
            heading: 'Hire iPad App Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 3,
        title: 'iPhone Social Media Applications',
        content: {
            imageSrc: benif3,
            heading: 'Hire iPhone Social Media Applications Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 4,
        title: 'Enterprise iOS Applications',
        content: {
            imageSrc: benif4,
            heading: 'Hire Enterprise iOS Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 5,
        title: 'E-Commerce App Development',
        content: {
            imageSrc: benif5,
            heading: 'Hire E-Commerce Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 6,
        title: 'Utility App Development',
        content: {
            imageSrc: benif6,
            heading: 'Hire Utility Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 7,
        title: 'iOS Wearable Apps',
        content: {
            imageSrc: benif7,
            heading: 'Hire iOS Wearable Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 8,
        title: 'App UI/UX Designing',
        content: {
            imageSrc: benif8,
            heading: 'Hire UI/UX Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 9,
        title: 'iOS Game Development',
        content: {
            imageSrc: benif9,
            heading: 'Hire iOS Game Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
    {
        id: 10,
        title: 'iPhone M-commerce Applications',
        content: {
            imageSrc: benif10,
            heading: 'Hire iPhone M-commerce Developer to Kick Start your Journey of User-Driven App',
            text: [
                'Hiring our extravagant iPhone app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and iPhone app solutions suitable to your business.',

                'We are liable to your queries and will provide you with the most decent iOS app development services yet classy for the users. Hire iOS developer India team to keep you buoyant whole app development cycle.',

                'Our iOS app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.',

                'In the past 10 years, we have excelled our skills and worked on more than 1000+ iOS app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our iOS programmer’s aim.',

                'Hire iPhone app developer  to take the best service to your workplace.',
            ],
        },
    },
];


const HireBenifits = (props) => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleTabChange = (event) => {
        const selectedTabId = parseInt(event.target.value);
        setActiveTab(selectedTabId);
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
                            <Row className={`${styles.benifitsBox} align-items-center d-none d-lg-flex`}>
                                <Col lg={5} className={`${styles.tabs} tabs`}>
                                    {tabsData.map((tab, index) => (
                                        <div
                                            key={tab.id}
                                            className={activeTab === tab.id ? `active ${styles.beniftIcon} ${styles.active}` : `${styles.beniftIcon} ${index === tabsData.length - 1 ? styles.last : ''}`}
                                            onClick={() => handleTabClick(tab.id)}
                                        >
                                            <Image src={tab.content.imageSrc} alt='BitsWits' className='img-fluid' />
                                            <h5>{tab.title}</h5>
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={7} className={`${styles.tabContent} tab-content`}>
                                    {tabsData.map((tab) => (
                                        <div key={tab.id} className={activeTab === tab.id ? styles.benifTxt : styles.hidden}>
                                            <h3>{tab.content.heading}</h3>
                                            {tab.content.text.map((para, index) => (
                                                <p key={index}>{para}</p>
                                            ))}
                                            <div className={styles.btns}>
                                                <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                            </Row>
                            {/*========= For mobile =========*/}
                            <Row className={`${styles.benifitsOpt} align-items-center d-flex d-lg-none`}>
                                <Col lg={5} className={`${styles.tabs} tabs mb-4`}>
                                    <select value={activeTab} onChange={handleTabChange} className='form-select'>
                                        {tabsData.map((tab) => (
                                            <option key={tab.id} value={tab.id} className={styles.option}>
                                                {tab.title}
                                            </option>
                                        ))}
                                    </select>
                                    <FaAngleDown />
                                </Col>
                                <div className={`${styles.benifitsBox}`}>
                                    <Col lg={7} className={`${styles.tabContent} tab-content`}>
                                        {tabsData.map((tab) => (
                                            <div key={tab.id} className={activeTab === tab.id ? styles.benifTxt : styles.hidden}>
                                                <h3>{tab.content.heading}</h3>
                                                {tab.content.text.map((para, index) => (
                                                    <p key={index}>{para}</p>
                                                ))}
                                                <div className={styles.btns}>
                                                    <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                                    <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireBenifits
