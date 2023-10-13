import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NewLpFaqs.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react'
//images
import arrow from '../public/newlppage/faqsarrow.png'

const NewLpFaqs = () => {

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
            <section className={`${styles.faqs} faqsgloble`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p className={`text-center f-18 font-bold mb-0 ${styles.colorPara}`}>Frequently Asked Questions</p>
                            <h2 className="black f-45 f-700 f-playfair mb-2 mb-lg-5">
                                Frequently Asked Questions
                            </h2>
                        </Col>
                        <Col lg={6}>
                            <div className={`${faq1show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq1} className={styles.heading}>
                                    <h3>
                                        What Is Mobile Application Development?  {faq1show ? <span className={styles.plus}>-</span> : <span className={styles.plus}>+</span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p className='text-start'>
                                        Mobile application development creates software applications that run on mobile devices and other connected devices, such as wearables, automotive systems, cameras, and more. It requires skill sets in design, development, testing, deployment, and maintenance to create innovative user experiences across multiple platforms. With that being said, businesses hire mobile app developers to stay ahead of the competition and deliver market-leading products to their customers.
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
                                        What does the Apple developer App do? {faq2show ? <span className={styles.plus}>-</span> : <span className={styles.plus}>+</span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p className='text-start'>
                                        BitsWits has a team of the best mobile app developers expert in providing customized development
                                        solutions, whether Hybrid or Native mobile application development is required. Our developers
                                        always come up with creative and innovative app ideas that are best in your interest.
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
                        <Col lg={6}>
                            <div className={`${faq3show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq3} className={styles.heading}>
                                    <h3>
                                        How to choose a Mobile App Development Company? {faq3show ? <span className={styles.plus}>-</span> : <span className={styles.plus}>+</span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <p className='text-start'>
                                        BitsWits is a top mobile app development company due to its decent clientele, commitment to
                                        excellence, and innovative mobile app development solutions. We enjoy the top spot in the
                                        application development industry with affordable packages and professional services.
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
                                        What kind of Apps Earn Most Money? {faq4show ? <span className={styles.plus}>-</span> : <span className={styles.plus}>+</span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p className='text-start'>
                                        Yes, BitsWits offers 24/7 incredible customer support, even post-mobile apps development USA. We
                                        do not let our customers hang in the middle with any query that may bring trouble to them.
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
                                        What are the job duties of a Google App Developer? {faq5show ? <span className={styles.plus}>-</span> : <span className={styles.plus}>+</span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p className='text-start'>
                                        Checking client portfolios, communicating your requirements clearly, and considering the
                                        development cost will help you choose the best mobile app development agency. BitsWits practices
                                        open communication so that the solution to your query is answered adequately to provide you with
                                        the utmost satisfaction.
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
                                        What is difference between Hybrid and Native Apps? {faq6show ? <span className={styles.plus}>-</span> : <span className={styles.plus}>+</span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <p className='text-start'>
                                        At BitsWits, we specialize in developing innovative and efficient mobile applications for various
                                        industries across the United States. We offer customized mobile solutions from e-commerce to
                                        healthcare and gaming to meet each client's specific requirements and business. We are a mobile
                                        application development company dedicated to creating apps that cater to each client's unique
                                        needs.
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
                </Container>
            </section>
        </>
    )
}

export default NewLpFaqs