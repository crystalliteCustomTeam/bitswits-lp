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
                  What is Artificial Intelligence (AI)?{" "}
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
                  Artificial Intelligence is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks can include learning, reasoning, problem-solving, perception, and language understanding.

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
                  What programming languages are commonly used for AI development?{" "}
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
                  Python is the most commonly used programming language for AI development due to its simplicity, flexibility, and a rich ecosystem of AI libraries and frameworks. Other languages like R, Java, and C++ are also used in specific AI applications.
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
                  What are the main types of AI?{" "}
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
                  There are typically three main types of AI:Narrow AI (Weak AI): Designed to perform a specific task, like facial recognition or language translation. <br></br>
General AI (Strong AI): Capable of performing any intellectual task that a human can do. <br></br>
Artificial Superintelligence: Exceeds human intelligence in all aspects.
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
                  What are some popular AI libraries and frameworks?{" "}
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
                  Some popular AI libraries and frameworks include TensorFlow, PyTorch, Keras, scikit-learn, and OpenCV. These tools provide pre-built modules and algorithms for various AI tasks.
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
                  What is machine learning and how does it relate to AI?{" "}
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
                  Machine learning is a subset of AI that focuses on the development of algorithms that allow systems to learn and make predictions or decisions based on data. It's a crucial component of many AI applications.
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
                  What is the difference between supervised and unsupervised learning?{" "}
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
                  In supervised learning, the model is trained on labeled data, meaning the input data is paired with the correct output. The model learns to make predictions based on this labeled data. In unsupervised learning, the model is given unlabeled data and is tasked with finding patterns or structures within the data.
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
