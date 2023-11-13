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

const NewFlutterFaqs = () => {
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
                  How much does Flutter app development cost?{" "}
                    {faq1show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq1show ? "d-block" : "d-none"}>
                  <p>
                    Flutter mobile app development is an increasingly popular
                    and cost-effective way to develop mobile applications.
                    Developing with Flutter is faster, easier, and produces more
                    reliable results than other cross-platform solutions. But
                    how much does flutter app development cost? The answer
                    depends on the complexity of the application and the number
                    of features you want to include. Generally speaking, simple
                    applications with basic functionality can cost anywhere from
                    $[Our Basic Package] - $[Our Premium Package], while more
                    complex applications can range up to $[Our Basic Package] or
                    more.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq2show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq2} className={styles.heading}>
                  <h3>
                  What is Flutter app development?{" "}
                    {faq2show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq2show ? "d-block" : "d-none"}>
                  <p>
                    Flutter mobile app development is a powerful software
                    development kit (SDK) created by Google. It allows
                    developers to quickly create beautiful, high-performance
                    mobile applications for both iOS and Android platforms from
                    the same codebase. Flutter apps are built using the Dart
                    programming language and have access to a wide range of
                    powerful features such as hardware acceleration, advanced UI
                    elements, and animation capabilities. Flutter apps run
                    smoothly on both platforms because of their highly optimized
                    codebase.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq3show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq3} className={styles.heading}>
                  <h3>
                    Why should I choose Flutter for app development?{" "}
                    {faq3show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq3show ? "d-block" : "d-none"}>
                  <p>
                    Flutter app development is the ideal choice because it
                    offers a wide range of advantages. It is an open-source
                    framework that simplifies mobile app creation, giving
                    flutter developers more control over their projects and
                    enabling them to write code faster. You should choose
                    Flutter app development because it allows for the rapid
                    development of high-performance apps with expressive and
                    flexible UI, using minimal effort, time, and code.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq4show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq4} className={styles.heading}>
                  <h3>
                    Is Flutter good for mobile app development?{" "}
                    {faq4show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq4show ? "d-block" : "d-none"}>
                  <p>
                    Flutter is a great choice for mobile app development. It is
                    an open-source UI toolkit created by Google to help
                    developers build beautiful and engaging apps quickly and
                    efficiently. Flutter makes it easy for developers to create
                    cross-platform applications with near-native performance.
                    With features like hot reloading, extensive libraries of
                    widgets, and its own rendering engine, Flutter can help you
                    create beautiful mobile apps faster than ever before. These
                    are some of the most prominent reasons why Flutter is better
                    for app development.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq5show ? "touch" : ""} mb-4 mb-lg-0`}>
                <div onClick={faq5} className={styles.heading}>
                  <h3>
                    What are some of the advantages of Flutter?{" "}
                    {faq5show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq5show ? "d-block" : "d-none"}>
                  <p>
                    The Flutter framework is quickly becoming one of the most
                    popular development tools around. It's easy to see why, as
                    it offers developers many advantages over traditional app
                    development methods. Here are six big benefits of Flutter:
                    <br></br>1. Faster Development Speed - Flutter enables
                    developers to create apps at lightning speed thanks to its
                    hot reload feature. This allows developers to quickly make
                    changes and see the results immediately, rather than waiting
                    for a build cycle every time they make an adjustment.
                    <br></br>2. Easy to Learn - Flutter is designed with
                    simplicity in mind and requires very little code to get
                    started. It's a great choice for new developers who want to
                    get their feet wet in the world of app development.
                    <br></br>3. Increased Productivity - With Flutter,
                    developers can make changes quickly and easily as well as
                    reuse code for future projects. This helps speed up
                    development time and increases productivity overall.
                    <br></br>4. Cross-Platform Support - One of the biggest
                    advantages of using Flutter is its cross-platform support.
                    It allows developers to create apps for multiple platforms
                    without having to rewrite code for each one.
                    <br></br>5. Accessibility - With Flutter, developers can
                    easily make their apps accessible to people with
                    disabilities by taking advantage of the accessible
                    components and APIs within the framework itself. This helps
                    ensure that the app is accessible to everyone.
                    <br></br>6. Open Source - Flutter is open source, meaning
                    developers can use the source code and freely distribute it
                    as they please. This helps keep development costs low and
                    allows developers to build apps faster by taking advantage
                    of existing libraries and components.
                    <br></br>In short, Flutter application development is the
                    ultimate choice for app development because it offers an
                    easy-to-use interface and powerful features that make
                    developing apps faster and simpler.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={faq6show ? "touch" : ""}>
                <div onClick={faq6} className={styles.heading}>
                  <h3>
                    What does Flutter Firebase do?{" "}
                    {faq6show ? (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={open}
                          className="img-fluid"
                        />{" "}
                      </span>
                    ) : (
                      <span className={styles.plus}>
                        {" "}
                        <Image
                          quality={75}
                          alt='BitsWits'
                          src={close}
                          className="img-fluid"
                        />{" "}
                      </span>
                    )}
                  </h3>
                </div>

                <div className={faq6show ? "d-block" : "d-none"}>
                  <p>
                    Flutter Firebase is a mobile development platform that combines the power of Flutter, Google's UI toolkit for building beautiful apps, with the robustness and scalability of Firebase. It offers a wide range of features like cloud storage, authentication, analytics, messaging, and much more. With Flutter Firebase, you can create powerful and dynamic mobile apps with ease. With the help of its extensive framework, developers can quickly and easily create beautiful user interfaces and powerful backends, enabling a smooth user experience. It also allows you to build complex data structures without having to write complicated code, making it perfect for quickly prototyping ideas and building highly-functional applications.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="BitsWits" className="img-fluid" src={arrow} />
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

export default NewFlutterFaqs;
