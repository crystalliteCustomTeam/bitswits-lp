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
                                        How do I get started with app development at BitsWits?  {faq1show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                        Reach out to us via our contact page, and let's discuss your app idea.
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
                                        What types of apps does BitsWits specialize in developing? {faq2show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                        We specialize in a wide range of app types, from mobile and web apps to custom enterprise solutions.
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
                                        How long does it typically take to develop an app? {faq3show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Timelines vary based on complexity, but we work efficiently to ensure timely delivery.
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
                                        What sets BitsWits apart in terms of customer support? {faq4show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Our dedicated support team ensures your needs are met throughout the development process and beyond.
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
                                        Can you help me with app maintenance and updates post-launch? {faq5show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Yes, we offer ongoing support and maintenance services to keep your app up-to-date and functioning smoothly.
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
                                        How can I stay updated on the progress of my app development project? {faq6show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <p>
                                        We provide regular project updates and encourage open communication to keep you informed every step of the way.
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

export default NewhomeFaqs