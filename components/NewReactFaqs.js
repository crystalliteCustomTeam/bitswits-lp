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
                    Is react native good for mobile apps development?{" "}
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
                    React Native is one of the most popular and widely used
                    frameworks for developing mobile apps. It provides a great
                    platform for creating natively rendered, high-performance
                    mobile applications that look and feel like they were made
                    specifically for the user's device. This framework makes it
                    easy to create apps with beautiful user interfaces, clean
                    code, and rapid development cycles. It also offers a few
                    advantages when it comes to mobile app development, such as
                    the ability to write code once and deploy across multiple
                    platforms, access to native device features, and scalability
                    for larger projects. All in all, React Native app
                    development agency is an excellent choice for developing
                    mobile apps.
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
                    How to make react app mobile friendly?{" "}
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
                    The answer is YES! We can convert React web apps to mobile
                    apps. With a little know-how, you can turn your website into
                    an app in no time. Here at BitsWits, we are experts in
                    taking websites and transforming them into mobile
                    experiences that engage users and drive conversions. Our
                    team of experienced developers will take your website and
                    convert it into the ultimate mobile app experience. We use
                    React Native to create apps that are fast, reliable, and
                    user-friendly, so you can trust your website is in good
                    hands. Get in touch today and let us turn your web React app
                    into a mobile masterpiece!
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
                    How do you create a simple mobile app using react native?{" "}
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
                    Creating a simple mobile app using React Native is
                    incredibly easy. With its intuitive user interface, you can
                    get started in no time! All you need to do is:
                    <br></br>1. Download and install the React Native command
                    line interface (CLI) on your development machine.
                    <br></br>2. Create a new project by running the CLI command
                    ‘react-native init NewProjectName’.
                    <br></br>3. Use the React Native components such as View,
                    Text, Image, and others to design your app’s user interface.
                    <br></br>4. Add navigation between different scenes in your
                    app using React Navigation library.
                    <br></br>5. Add application logic and interactivity with
                    React JS, which is the language used by React Native.
                    <br></br>6. Run your app in an emulator or on a physical
                    device to see and interact with it.
                    <br></br>7. When ready, you can build for production and
                    deploy to both the iOS App Store and Google Play Store.
                    <br></br>With React Native, creating a simple mobile app is
                    as easy as pie. Get started today and create React app in no
                    time! Hire react native app developer to achieve business
                    excellence.
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
                    What does a react native app developer do?{" "}
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
                    A React Native app developer is an expert in creating apps
                    that can seamlessly run on both Android and iOS mobile
                    platforms. They take advantage of the flexibility of
                    JavaScript to create natively rendered, responsive user
                    interfaces for mobile applications. The developer should
                    have a deep understanding of modern web technologies like
                    HTML5, CSS3, and JavaScript as well as a strong grasp of the
                    React Native framework. He is also familiar with mobile
                    development platforms such as iOS and Android, including
                    device-specific APIs for customizing an app's appearance and
                    functionality across different devices. In short, a React
                    Native app developer is responsible for designing, building,
                    and deploying dynamic applications that are optimized for
                    performance on both Android and iOS devices.
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
                    Can we convert react web app to mobile app?{" "}
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
                    The answer is YES! We can convert React web apps to mobile
                    apps. With a little know-how, you can turn your website into
                    an app in no time. Here at BitsWits, we are experts in
                    taking websites and transforming them into mobile
                    experiences that engage users and drive conversions. Our
                    team of experienced developers will take your website and
                    convert it into the ultimate mobile app experience. We use
                    React Native to create apps that are fast, reliable, and
                    user-friendly, so you can trust your website is in good
                    hands. Get in touch today and let BitsWits, the best React
                    Native development company turn your web React app into a
                    mobile masterpiece!
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
                  Why is it necessary to hire react native app developers for businesses?{" "}
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
                    Hiring React Native app developers for businesses is a smart
                    decision considering the wide range of benefits it provides.
                    With React Native, businesses can create high-quality
                    cross-platform mobile applications that are both reliable
                    and efficient. Development times are shorter, making it
                    faster to launch new products or updates. Additionally,
                    native features can be implemented with ease while providing
                    a native look and feel. Moreover, React Native offers
                    flexibility in development as well as scalability to ensure
                    that the applications built with it can accommodate complex
                    features, such as real-time updates, payment systems, and
                    more. The framework also allows developers to reuse code for
                    multiple platforms, ultimately saving both time and money
                    for businesses.
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
