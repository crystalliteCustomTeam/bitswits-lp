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

const NewAndroidFaqs = () => {
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
            <Col lg={2}>
              <h2 className="white f-20 f-500 left mt-3">
                Android App Development
              </h2>
            </Col>
            <Col lg={6}>
              <h2 className="white f-50 f-700 left">FAQs</h2>
            </Col>
            <Col lg={4}>
              <Link className={styles.about} href="#">
                Connect Now
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className={`${faq1show ? "touch" : ""} mb-4 mb-lg-0 mt-5`}>
                <div onClick={faq1} className={styles.heading}>
                  <h3>
                    What Is Best Language for Android App Development?{" "}
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
                    Android app development is a complex process that requires a
                    deep understanding of the best language for it. Java has
                    been the traditional go-to language for the android mobile
                    app development company, but there are other options worth
                    considering. Kotlin and C++ are both languages that have
                    become popular in recent years. They offer different levels
                    of performance and abstraction, so you can choose the
                    language which best suits your app's needs.
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
                    What Is Android Development?{" "}
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
                    Mobile app development android is the process of creating
                    mobile applications for Android devices. It involves writing
                    code in Java and Kotlin, integrating APIs, designing apps
                    with a great user experience, and more. With Android's large
                    market share and open-source nature, it is one of the best
                    platforms for app developers to create innovative
                    applications that can reach millions of users. Android
                    development is also an ever-evolving field as new
                    technologies, frameworks, and APIs are frequently released
                    by Google and other third parties. By developing with
                    Android, developers can create powerful apps that have the
                    potential to revolutionize the way we use mobile devices
                    today. So, get ready to take full advantage of this amazing
                    platform and join the world of Android development now with
                    BitsWits! We are experts in serving you in android and iOS
                    app development.
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
                    How Much Does It Cost to Design an Android App?{" "}
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
                    Designing an Android app can be a complex and expensive
                    process. But there is no one-size-fits-all answer to the
                    question, "How much does it cost to design an Android app?”
                    The price of developing an Android app varies depending on
                    the type of features, complexity, size, and other elements
                    that need to be included. The android app developer cost can
                    range from a few thousand to hundreds of thousands of
                    dollars, depending on the scope and complexity of the
                    project. The price to build applications for Android
                    includes labor costs, design expenses, hosting fees, and
                    other costs associated with releasing the app in Google Play
                    Store. Professional teams may charge up to [Our Own Bundle
                    Cost], depending on their experience and skill set.
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
                    Who Is the Google Android App Developer?{" "}
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
                    Google Android app developer is a one-stop shop for
                    developing and launching Android apps. From creating an app
                    concept to distributing it on Google Play, this team of
                    expert developers has the experience and resources necessary
                    to make your vision come true. Whether you're looking to
                    build a game, create a business tool, or create something
                    completely unique, they have the skills to make it happen.
                    Whatever your needs are, the Google Android app developer is
                    here to help you get started and guide you every step of the
                    way. Don't just dream it; code it! Make your app dreams a
                    reality today with BitsWits.
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
                    What Is Android App Development Using Python?{" "}
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
                    Android app development using Python is the process of
                    creating native Android applications with the popular coding
                    language Python. This open-source programming language
                    allows you to create powerful and interactive mobile apps
                    that are both feature-rich and user-friendly. With a wide
                    array of libraries, tools, and modules available, developers
                    can quickly build secure and reliable Android apps with
                    minimal effort. Additionally, Python has been optimized for
                    mobile computing and is ideal for producing complex
                    applications that require low-level control over device
                    resources. This makes it a great choice for creating
                    advanced Android apps that are tailored specifically to the
                    needs of mobile users. Whether you're a beginner or an
                    experienced android app developer looking to develop a
                    cutting-edge Android app, it is an excellent choice for
                    python android app development. With its flexibility and
                    power, you can ask for android app developer for hire and
                    create innovative apps that will bring your ideas to life!
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
                    How Much Does It Cost to Hire an App Developer?{" "}
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
                    Hiring an app developer to create a great user experience
                    for your business can be costly, but it doesn't have to
                    break the bank. The android app development cost varies
                    widely and depends on many factors such as the complexity of
                    the project, the platform you want your app built for, and
                    any specific features or customization requested. In
                    general, you can expect to pay anywhere from a few thousand
                    dollars up to tens of thousands for more advanced projects.
                    Investing in an experienced app developer can help ensure
                    that your android app dev project is built efficiently and
                    effectively while saving you time and money in the long run.
                    So, if you're looking to create a great user experience with
                    an app, you'll need to hire dedicated android app developer
                    like BitsWits.
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
        </Container>
      </section>
    </>
  );
};

export default NewAndroidFaqs;
