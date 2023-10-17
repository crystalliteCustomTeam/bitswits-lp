import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NewhomeFaqs.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react'
//images
// import arrow from '../public/images/icons/arrow.webp'
import arrow from '../public/newHomePageImages/pick.png'
import close from '../public/newHomePageImages/close.png'
import open from '../public/newHomePageImages/open.png'

const NewCrossFaqs = () => {

    const [faq1show, setfaq1] = useState(false);
    const [faq2show, setfaq2] = useState(false);
    const [faq3show, setfaq3] = useState(false);
    const [faq4show, setfaq4] = useState(false);
    const [faq5show, setfaq5] = useState(false);
    const [faq6show, setfaq6] = useState(false);

    function faq1() {
        setfaq1(!faq1show);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq2() {

        setfaq1(false);
        setfaq2(!faq2show);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq3() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(!faq3show);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq4() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(!faq4show);
        setfaq5(false);
        setfaq6(false);
    }
    function faq5() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(!faq5show);
        setfaq6(false);
    }
    function faq6() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(!faq6show);
    }


    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={12}>
                            <h2 className="white f-60 f-700">
                                FAQs
                            </h2>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={12}>
                            <div className={`${faq1show ? 'touch' : ''} mb-4 mb-lg-0 mt-5`}>
                                <div onClick={faq1} className={styles.heading}>
                                    <h3>
                                        Which apps use cross-platform?  {faq1show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                        Cross-platform apps are applications that can run on multiple operating systems, such as iOS and Android. Popular examples of cross-platform apps include social media networks like Twitter, Facebook, and Instagram; messaging services like WhatsApp, iMessage, and Skype; cloud storage solutions like Dropbox, Google Drive, and iCloud; productivity tools like Evernote, Slack, and Trello; and gaming services like Apple Arcade, Google Play Games and Xbox Live. These apps have become essential for staying connected across multiple devices and platforms.

                                        Ultimately, the list of cross-platform apps is as long as your imagination allows – chances are that there's an app for whatever you need. Whether it's a powerful productivity tool, a fun gaming experience, or the latest social media craze, chances are there's a cross-platform app that can help you stay connected and productive. And since it works on multiple platforms, you don't have to worry about compatibility issues. It's really that simple!
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq2show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq2} className={styles.heading}>
                                    <h3>
                                    What is cross-platform in app development?{faq2show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                        “Cross-platform app development is the process of creating a single application that can run on multiple operating systems, such as iOS and Android.” This allows developers to create one version of their app for all users, rather than having to write code specifically for each platform. By utilizing cross-platform tools and frameworks, it makes it easier for companies to bring their apps to market faster and with fewer resources. It also provides the cross platform mobile app design and development agency with the opportunity to create a unified experience across all devices, regardless of platform.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq3show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq3} className={styles.heading}>
                                    <h3>
                                        What language is used for cross-platform apps? {faq3show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <p>
                                        The language used for cross-platform apps is usually a combination of HTML, CSS, and JavaScript. However, there are various frameworks available such as React Native, Flutter, Ionic, and Xamarin that allow developers to create apps for multiple platforms using the same codebase. Additionally, some languages like Dart are designed with the intent to create cross-platform apps. Ultimately, the language used for cross-platform apps depends on the platform and tools chosen by the developer. BitsWits masters the art of flutter cross platform development.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq4show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq4} className={styles.heading}>
                                    <h3>
                                    Is cross-platform development in demand on 2023? {faq4show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Yes, cross-platform app development services will still be in demand in 2023. As the need for efficient and cost-effective software grows, companies are increasingly turning to cross-platform development solutions to reduce development costs and time while delivering a unified user experience across all devices. In addition, cross-platform development is becoming increasingly popular due to the growing trend toward mobile applications that require code that can be shared across multiple devices. With its cost savings, flexibility, and scalability, cross-platform development is sure to remain in demand for years to come.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq5show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq5} className={styles.heading}>
                                    <h3>
                                    What is the best custom mobile app development company? {faq5show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                        The best custom mobile app development company is the one that meets your specific requirements and budget. They should have a proven track record of successful projects and provide top-notch customer support. Look for an experienced cross platform mobile app developer that can effectively take your concept from idea to market quickly and efficiently. Finally, make sure they are up-to-date on the latest technologies and trends in mobile app development to bring your project to life. If you find a company that meets these criteria, then you are likely to have the best custom mobile app development experience. And if you are looking for such a company, BitsWits is the perfect destination to hire cross platform app developers. Because we take pride in possessing all those attributes mentioned above.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={faq6show ? 'touch' : ''}>
                                <div onClick={faq6} className={styles.heading}>
                                    <h3>
                                    Which framework can be used to develop cross-platform applications? {faq6show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <p>
                                        The best framework to use for cross-platform app development services is React Native. It allows the cross platform mobile app development agency to create apps that can run on multiple platforms with the same codebase, making it a great choice for anyone looking to develop an app across multiple devices. React Native also offers a wide range of features and capabilities, making it one of the most popular frameworks available today.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Link className={styles.about} href="#">LET'S CONNECT</Link>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default NewCrossFaqs