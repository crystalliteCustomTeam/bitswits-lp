import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NewhomeFaqs.module.css";
import { Container, Row, Col } from "react-bootstrap";
// import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
//images
// import arrow from '../public/images/icons/arrow.webp'
import arrow from "../public/newHomePageImages/pick.png";
import close from "../public/newHomePageImages/close.png";
import open from "../public/newHomePageImages/open.png";

const NewReactFaqs = () => {
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
              <div className={`${faq1show ? "touch" : ""} mb-4 mb-lg-0 mt-5`}>
                <div onClick={faq1} className={styles.heading}>
                  <h3>
                  What AI services does BitsWits offer? {" "}
                    {faq1show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq1show ? "d-block" : "d-none"}>
                  <p>
                  BitsWits provides AI consulting, custom AI solutions development, and AI integration services.

                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq2show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq2} className={styles.heading}>
                  <h3>
                  How long does AI development with BitsWits usually take?{" "}
                    {faq2show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq2show ? "d-block" : "d-none"}>
                  <p>
                  The timeline depends on the project's complexity but typically ranges from a few months to a year.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq3show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq3} className={styles.heading}>
                  <h3>
                  What kind of support does BitsWits offer post-deployment?{" "}
                    {faq3show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq3show ? "d-block" : "d-none"}>
                  <p>
                  BitsWits provides ongoing support and maintenance to ensure the smooth functioning and optimal performance of AI solutions.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq4show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq4} className={styles.heading}>
                  <h3>
                  What industries does BitsWits specialize in for AI development? {" "}
                    {faq4show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq4show ? "d-block" : "d-none"}>
                  <p>
                  BitsWits has extensive experience in providing AI solutions for industries such as healthcare, finance, retail, and manufacturing, among others.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq5show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq5} className={styles.heading}>
                  <h3>
                  Does BitsWits offer AI maintenance services after the project is completed?{" "}
                    {faq5show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq5show ? "d-block" : "d-none"}>
                  <p>
                  Yes, BitsWits provides ongoing AI maintenance services, including updates and optimizations for continued performance.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={faq6show ? "touch" : ""}>
                <div onClick={faq6} className={styles.heading}>
                  <h3>
                  Can BitsWits help in the integration of AI-driven analytics for data insights?{" "}
                    {faq6show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq6show ? "d-block" : "d-none"}>
                  <p>
                  Absolutely, BitsWits specializes in integrating AI-driven analytics to provide valuable data insights for informed decision-making and improved business strategies.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className="img-fluid" src={arrow} />
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
  );
};

export default NewReactFaqs;
