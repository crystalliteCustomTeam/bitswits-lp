import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/ServicesFaqs.module.css";
//
import arrow from "../public/newHomePageImages/pick.png";
import close from "../public/newHomePageImages/close.png";
import open from "../public/newHomePageImages/open.png";


const ServicesFaqs = (props) => {

    const [faqStates, setFaqStates] = useState(Array(props.faqsData.length).fill(false));

    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
    };

    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={12}>
                            <h2 className={`white f-60 f-700 mb-5`}>
                                FAQs
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq" : ""} mb-4 mb-lg-0`}>
                                    <div onClick={() => toggleFaq(index)} className={`${styles.heading}`}>
                                        <h3>
                                            {faq.question} {faqStates[index] ? <Image quality={75} src={open} className="img-fluid" /> : <Image quality={75} src={close} className="img-fluid" />}
                                        </h3>
                                    </div>

                                    <div className={faqStates[index] ? "d-block" : "d-none"}>
                                        <p>{faq.answer}</p>
                                        <div className="mt-2">
                                            <Link href="#">Let's Start<Image alt="bitswits" className="img-fluid" src={arrow} /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Link className={`${styles.about} ${styles.customClass}`} href="#">
                                LET'S CONNECT
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ServicesFaqs;
