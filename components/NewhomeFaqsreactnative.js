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

const NewhomeFaqs = () => {

    const [faq1show, setfaq1] = useState(false);
    const [faq2show, setfaq2] = useState(false);
    const [faq3show, setfaq3] = useState(false);
    const [faq4show, setfaq4] = useState(false);
    const [faq5show, setfaq5] = useState(false);
    const [faq6show, setfaq6] = useState(false);
    const [faq7show, setfaq7] = useState(false);

    function faq1() {
        setfaq1(!faq1show);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
        setfaq7(false);
    }
    function faq2() {

        setfaq1(false);
        setfaq2(!faq2show);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
        setfaq7(false);
    }
    function faq3() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(!faq3show);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
        setfaq7(false);
    }
    function faq4() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(!faq4show);
        setfaq5(false);
        setfaq6(false);
        setfaq7(false);
    }
    function faq5() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(!faq5show);
        setfaq6(false);
        setfaq7(false);
    }
    function faq6() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(!faq6show);
        setfaq7(false);
    }

    function faq7() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
        setfaq7(!faq7show);
    }


    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={2}>
                            <h2 className="white f-20 f-500 left mt-3">
                                App Development
                            </h2>
                        </Col>
                        <Col lg={6}>
                            <h2 className="white f-50 f-700 left">
                                FAQs
                            </h2>
                        </Col>
                        <Col lg={4}>
                            <Link className={styles.about} href="#">Connect Now</Link>
                        </Col>
                    </Row>
                    <Row>

                        <Col lg={12}>
                            <div className={`${faq1show ? 'touch' : ''} mb-4 mb-lg-0 mt-5`}>
                                <div onClick={faq1} className={styles.heading}>
                                    <h3>
                                        Is React Native Good for Mobile Apps Development?  {faq1show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                        React Native is one of the most popular and widely used frameworks for developing mobile apps. It provides a great platform for creating natively rendered, high-performance mobile applications that look and feel like they were made specifically for the user's device. This framework makes it easy to create apps with beautiful user interfaces, clean code, and rapid development cycles. It also offers a few advantages when it comes to mobile app development, such as the ability to write code once and deploy across multiple platforms, access to native device features, and scalability for larger projects. All in all, React Native app development agency is an excellent choice for developing mobile apps.
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
                                        How Do You Create a Simple Mobile App Using React Native? {faq2show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Creating a simple mobile app using React Native is incredibly easy. With its intuitive user interface, you can get started in no time! All you need to do is: <br></br>

                                        1. Download and install the React Native command line interface (CLI) on your development machine. <br></br>

                                        2. Create a new project by running the CLI command ‘react-native init NewProjectName’. <br></br>

                                        3. Use the React Native components such as View, Text, Image, and others to design your app’s user interface. <br></br>

                                        4. Add navigation between different scenes in your app using React Navigation library. <br></br>

                                        5. Add application logic and interactivity with React JS, which is the language used by React Native. <br></br>

                                        6. Run your app in an emulator or on a physical device to see and interact with it. <br></br>

                                        7. When ready, you can build for production and deploy to both the iOS App Store and Google Play Store. <br></br>

                                        With React Native, creating a simple mobile app is as easy as pie. Get started today and create React app in no time! Hire react native app developer to achieve business excellence.
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
                                        Can We Convert React Web App to Mobile App? {faq3show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <p>

                                        The answer is YES! We can convert React web apps to mobile apps. With a little know-how, you can turn your website into an app in no time. Here at <b>BitsWits</b>, we are experts in taking websites and transforming them into mobile experiences that engage users and drive conversions. Our team of experienced developers will take your website and convert it into the ultimate mobile app experience. We use React Native to create apps that are fast, reliable, and user-friendly, so you can trust your website is in good hands. Get in touch today and let <b>BitsWits</b>, the best React Native development company turn your web React app into a mobile masterpiece!

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
                                        How To Make React App Mobile Friendly? {faq4show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                    The answer is YES! We can convert React web apps to mobile apps. With a little know-how, you can turn your website into an app in no time. Here at BitsWits, we are experts in taking websites and transforming them into mobile experiences that engage users and drive conversions. Our team of experienced developers will take your website and convert it into the ultimate mobile app experience. We use React Native to create apps that are fast, reliable, and user-friendly, so you can trust your website is in good hands. Get in touch today and let us turn your web React app into a mobile masterpiece!
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
                                        What Does a React Native App Developer Do? {faq5show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                        A React Native app developer is an expert in creating apps that can seamlessly run on both Android and iOS mobile platforms. They take advantage of the flexibility of JavaScript to create natively rendered, responsive user interfaces for mobile applications. The developer should have a deep understanding of modern web technologies like HTML5, CSS3, and JavaScript as well as a strong grasp of the React Native framework. He is also familiar with mobile development platforms such as iOS and Android, including device-specific APIs for customizing an app's appearance and functionality across different devices. In short, a React Native app developer is responsible for designing, building, and deploying dynamic applications that are optimized for performance on both Android and iOS devices.
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
                                        Why Is It Necessary to Hire React Native App Developers for Businesses? {faq6show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Hiring React Native app developers for businesses is a smart decision considering the wide range of benefits it provides. With React Native, businesses can create high-quality cross-platform mobile applications that are both reliable and efficient. Development times are shorter, making it faster to launch new products or updates. Additionally, native features can be implemented with ease while providing a native look and feel. <br></br>

                                        Moreover, React Native offers flexibility in development as well as scalability to ensure that the applications built with it can accommodate complex features, such as real-time updates, payment systems, and more. The framework also allows developers to reuse code for multiple platforms, ultimately saving both time and money for businesses.
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

                            <div className={faq7show ? 'touch' : ''}>
                                <div onClick={faq7} className={styles.heading}>
                                    <h3>
                                        Why Is BitsWits the Perfect Company for Native App Development Services? {faq7show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq7show ? 'd-block' : 'd-none'}>
                                    <p>
                                        <b>BitsWits</b> offers the best React Native app development services. With our experienced team of developers, your project will be completed quickly and efficiently. We are experts in developing applications for both iOS and Android platforms, so you can rest assured that your project will be designed with the latest technology. Our developers utilize industry-leading tools and frameworks to ensure that your app is built correctly and optimized for maximum performance.

                                        We are also capable of creating customized solutions that meet the specific needs of your business. Our team understands the importance of creating a user experience that engages users and encourages them to use your application frequently. We can help you integrate features, design attractive interfaces, and optimize your React Native iOS app for different devices. Hire React JS application development expert now!
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
                </Container >
            </section >
        </>
    )
}

export default NewhomeFaqs