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

const NewIOSFaqs = () => {
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
              <h2 className="white f-20 f-500 left mt-3">iOS App Development</h2>
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
                    What Are the Stages Of iOS Development and Is iOS App
                    Development Cost?{" "}
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
                    iOS development is a complex process that requires careful
                    planning and budgeting. The stages of iOS development
                    involve concepts to launch. The first stage is concept
                    creation, which involves coming up with an idea for an app
                    and determining how it will be designed and developed. Next
                    comes the design phase, where developers create wireframes
                    that help define the look and feel of an app. After that,
                    the development stage begins, where coding and testing take
                    place. Finally, the launch stage involves ensuring the app
                    is compliant with Apple standards and distributing it
                    through either the App Store or other means.
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
                    What Are the Types Of iOS Development?{" "}
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
                    iOS development is an incredibly versatile field. Whether
                    you're creating a brand-new app, tweaking an existing one,
                    or developing a mobile-friendly website, there are several
                    different types of iOS development to explore. Here's a look
                    at some of the most popular:
                    <br></br>1. Native Development: This type of development
                    involves using Apple's Xcode IDE and the official SDK to
                    create apps that are specifically designed for iOS devices.
                    Native development is popular because it takes full
                    advantage of all the latest features available on iOS,
                    including access to device hardware and software libraries.
                    <br></br>2. Cross-Platform Development: This type of
                    development involves creating a single app that can be used
                    on both iOS and Android devices. Cross-platform development
                    is becoming increasingly popular as it reduces the need to
                    develop multiple versions of the same app.
                    <br></br>3. Web Development: This type of development
                    involves creating a mobile-friendly version of an existing
                    website using HTML, CSS, and JavaScript technologies. Web
                    development is ideal for companies that want their users to
                    access content on the go.
                    <br></br>4. Hybrid App Development: This type of development
                    combines elements of native and web development to create an
                    app that is both functional and visually appealing. It’s
                    ideal for companies who want a custom solution that looks
                    great on any device.
                    <br></br>No matter what type of iOS development you choose,
                    a well-designed and optimized app can help your business
                    stand out from the competition. With the right iOS and
                    android app developer such as BitsWits, you can create an
                    amazing user experience that will keep customers coming back
                    for more.
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
                    Why You Should Consider Investing In iOS App Development
                    Company?{" "}
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
                    Investing in iOS app development company is a great way to
                    ensure that your business stands out from the competition.
                    Here’s how:
                    <br></br>1. Increased Brand Visibility: Developing an iOS
                    app can make your business more visible to potential
                    customers, allowing them to easily find and use your
                    services. This is especially useful if you want to reach a
                    wider audience outside of your traditional local area.
                    <br></br>2. Improved Customer Engagement: By giving
                    customers the ability to access and interact with your
                    services via an iOS app, you can improve customer engagement
                    and build stronger relationships with them. This in turn
                    could lead to an increase in sales or a more loyal customer
                    base.
                    <br></br>3. Increased Efficiency: Developing an iOS app can
                    streamline processes such as ordering products or services,
                    making payments, and scheduling appointments. By automating
                    many of these tasks, you can save time and money, allowing
                    you to focus on other areas of your business.
                    <br></br>4. Improved Security: iOS apps are more secure than
                    other platforms, providing an added layer of protection for
                    customer data. This can help to give customers peace of mind
                    that their information is being kept safe and secure when
                    using your services.
                    <br></br>Overall, investing in iOS app development company
                    is a smart decision that can benefit your business in
                    numerous ways.
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
                    What Are the Programming Language(s) for iOS Development?{" "}
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
                    The best programming language for iOS development depends on
                    the app you want to create. If you’re just starting,
                    consider learning Swift—Apple’s modern and intuitive coding
                    language. It features a streamlined syntax that makes it
                    easy to learn, and its versatile nature allows developers to
                    create everything from simple apps with minimal code to
                    advanced applications with elaborate features. Objective-C
                    is another popular choice for the apple app development
                    language, and if you’ve already written apps in this
                    language, it might be a good option to stick with it. Both
                    languages are supported by Apple, so the decision ultimately
                    comes down to personal preference and what's most
                    comfortable for you.
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
                    What Is Swift iOS App Development?{" "}
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
                    Swift iOS App Development is the process of creating,
                    coding, and designing mobile applications for Apple's iOS
                    operating system. With Swift being an open-source language,
                    it allows developers to develop apps quickly with fewer code
                    lines and robust features. The result? A faster, more
                    efficient development process that produces exceptionally
                    designed, user-friendly applications. For those who are
                    looking for an innovative and reliable way to build their
                    app, Swift is a perfect choice. From simple games to complex
                    enterprise solutions – whatever you need, iOS App
                    Development with hire swift developers has you covered!
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
                    What Are iOS App Development Services?{" "}
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
                    iOS app development company help businesses create custom,
                    engaging, and user-friendly applications for Apple's iOS
                    platform. With their experienced professionals, they provide
                    comprehensive services to develop an app that fits your
                    business needs and stands out from the competition. They are
                    well-versed in the latest iOS technologies and have a proven
                    track record of developing apps for both the App Store and
                    enterprise solutions. Whether you need an app to increase
                    customer engagement or expand your market reach, iOS app
                    development company will help take your business to the next
                    level.
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

export default NewIOSFaqs;
