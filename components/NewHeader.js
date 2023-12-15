import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styles from "@/styles/NewHeader.module.css";

// images
import logo from "../public/images/icons/footerlogo.png";
import dsicon from "../public/images/newfydemand/ds-icon.svg";
import icontwo from "../public/images/newfydemand/icontwo.svg";
import hiring1 from "../public/images/newfydemand/hiring1.svg";
import hiring2 from "../public/images/newfydemand/hiring2.svg";
import security from "../public/images/newfydemand/security.png";
import alcohol from "../public/images/newfydemand/alcohol.png";
import construction from "../public/images/newfydemand/construction.png";
import healthsafety from "../public/images/newfydemand/health-safety.png";
import elearning from "../public/images/newfydemand/elearning.png";
import driving from "../public/images/newfydemand/driving.png";
import securitygear from "../public/images/newfydemand/security-gear.png";
import securityjobs from "../public/images/newfydemand/security-jobs.png";
import gamehead from "../public/images/newfydemand/gamehead.png";
import blockchainhead from "../public/images/newfydemand/blockchainhead.png";

//
import icon1 from "../public/newHomePageImages/tech/1.png";
import icon2 from "../public/newHomePageImages/tech/2.png";
import icon3 from "../public/newHomePageImages/tech/3.png";
import icon4 from "../public/newHomePageImages/tech/4.png";
import icon5 from "../public/newHomePageImages/tech/5.png";
import icon6 from "../public/newHomePageImages/tech/6.png";
import icon7 from "../public/newHomePageImages/tech/7.png";
import icon8 from "../public/newHomePageImages/tech/8.png";
//
import frontend1 from "../public/newHomePageImages/tech/frontend/1.png";
import frontend2 from "../public/newHomePageImages/tech/frontend/2.png";
import frontend3 from "../public/newHomePageImages/tech/frontend/3.png";
import frontend4 from "../public/newHomePageImages/tech/frontend/4.png";
import frontend5 from "../public/newHomePageImages/tech/frontend/5.png";
import frontend6 from "../public/newHomePageImages/tech/frontend/6.png";
//
import database1 from "../public/newHomePageImages/tech/database/1.png";
import database2 from "../public/newHomePageImages/tech/database/2.png";
import database3 from "../public/newHomePageImages/tech/database/3.png";
import database4 from "../public/newHomePageImages/tech/database/4.png";
import database5 from "../public/newHomePageImages/tech/database/5.png";
import database6 from "../public/newHomePageImages/tech/database/6.png";
//
import php1 from "../public/newHomePageImages/tech/php/1.png";
import php2 from "../public/newHomePageImages/tech/php/2.png";
import php3 from "../public/newHomePageImages/tech/php/3.png";
//
import cms1 from "../public/newHomePageImages/tech/cms/1.png";
import cms2 from "../public/newHomePageImages/tech/cms/2.png";
import cms3 from "../public/newHomePageImages/tech/cms/3.png";
//
import dev1 from "../public/newHomePageImages/tech/dev/1.png";
import dev2 from "../public/newHomePageImages/tech/dev/2.png";
import dev3 from "../public/newHomePageImages/tech/dev/3.png";
import dev4 from "../public/newHomePageImages/tech/dev/4.png";
import dev5 from "../public/newHomePageImages/tech/dev/5.png";
import dev6 from "../public/newHomePageImages/tech/dev/6.png";
import dev7 from "../public/newHomePageImages/tech/dev/7.png";
import dev8 from "../public/newHomePageImages/tech/dev/8.png";
import dev9 from "../public/newHomePageImages/tech/dev/9.png";
import about2 from "../public/images/icons/about.png";
import call from "../public/images/icons/phone-icon.webp";
import mail from "../public/images/icons/email-icon.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import apps from "../public/images/icons/apps.png";
import newImg from "../public/images/1.jpg";
import company from "../public/images/icons/company.png";
import ourbg from "../public/images/icons/ourbg.png";
import estate from "../public/images/icons/estate.png";
import travel from "../public/images/icons/travel.png";
import health from "../public/images/icons/health.png";
import foods from "../public/images/icons/foods.png";
import backarrow from "../public/images/icons/back-arrow.webp";
import music from "../public/images/icons/music.png";
import ride from "../public/images/icons/ride.png";
import wisu from "../public/images/icons/wisu.png";
import fit from "../public/images/icons/fit.png";
import grease from "../public/images/icons/grease.png";
import homeconnect from "../public/images/icons/homeconnect.png";
import ready from "../public/images/icons/ready.png";
import scribe from "../public/images/icons/scribe.png";
import sponsord from "../public/images/icons/sponsord.png";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
import mbllogo from "../public/images/icons/footerlogo.png";
import { useEffect } from "react";

///// New Images Import
import IOS from "public/images/icons/ios.png";
import andriod from "public/images/icons/android.png";
import Flutter from "public/images/icons/flutter.png";
import ReactNative from "public/images/icons/reactnative.png";
import Programming from "public/images/icons/webdevelopment.png";
import Cross from "public/images/icons/cross.png";
import WebApp from "public/images/icons/programming.png";
import UIUX from "public/images/icons/uiux.png";
import TwodIcon from "public/images/icons/2d.png";
import ThreedIcon from "public/images/icons/3d.png";
import NFT from "public/images/icons/nft.png";
import blockchainIcon from "public/images/icons/blockchain.png";
import AI from "public/images/icons/aiIcon.png";
import Augment from "public/images/icons/augment.png";

// newworkimages

import travelimg from "public/headerbits/travel.png";
import realestateimgg from "public/headerbits/realestate.png";
import ecommerceimg from "public/headerbits/ecommerce.png";
import scribeimg from "public/headerbits/scribe.png";
import greepeimg from "public/headerbits/greepe.png";
import sponserdimg from "public/headerbits/sponserd.png";
import healthimg from "public/headerbits/health.png";
import riderimg from "public/headerbits/rider.png";
import fitnowimg from "public/headerbits/fitnow.png";
import cruveimg from "public/headerbits/cruve.png";
import homeconnctimg from "public/headerbits/homeconnct.png";
import beatsimg from "public/headerbits/beats.png";
import readyappimg from "public/headerbits/readyapp.png";
import contact from "public/headerbits/contact.png";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";

const HeaderNewDesign = () => {
  const router = useRouter();
  const [isSliderActive, setIsSliderActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 991) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const opnen = () => {
    window.open("../companyprofile.pdf", "_blank");
  };

  const [show, setShow] = useState(false);

  function modal(e) {
    e.preventDefault();
    setShow(true);
  }
  function closemodal() {
    setShow(false);
  }

  const [isHovered, setIsHovered] = useState("");

  function fun1(vale) {
    setIsHovered(vale);
  }

  function fun2(vale1) {
    setIsHovered(vale1);
  }

  function handleClickproduct(val5) {
    setIsHovered1(val5);
  }

  const [isHovered1, setIsHovered1] = useState("");
  const [toggleCloseMeg, isToggleCloseMeg] = useState(false);
  function fun11(vale) {
    setIsHovered1(vale);
  }
  function fun21(vale1) {
    setIsHovered1(vale1);
  }

  const [isHovered2, setIsHovered2] = useState("");

  function funserve(vale) {
    setIsHovered2(vale);
  }
  function funserve2(vale1) {
    setIsHovered2(vale1);
  }

  const [isHovered3, setIsHovered3] = useState("");

  function funcom(vale) {
    setIsHovered3(vale);
  }
  function funcom2(vale1) {
    setIsHovered3(vale1);
  }

  const [isHovered4, setIsHovered4] = useState("");

  function funwork(vale) {
    setIsHovered4(vale);
  }
  function funwork2(vale1) {
    setIsHovered4(vale1);
  }

  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  const [activeTab1, setActiveTab1] = useState("tab1");
  function fun1(tabs1) {
    setActiveTab1(tabs1);
  }
  useEffect(() => {
    setTimeout(() => {
      setIsHovered1("secImage11");
      setIsHovered4("secImage2");
      setIsHovered3("secImage2");
    }, 3000);
  }, [toggleCloseMeg, router]);
  return (
    <>
      <header className={styles.headernew}>
        <div className={styles.logo}>
          <Link href="/">
            <Image alt="bitswits" src={logo} className="img-fluid" />
          </Link>
        </div>
        <nav>
          <ul
            className={
              isActive
                ? `${styles.newone} ${styles.active}`
                : `${styles.newone}`
            }
          >
            <div className={`${styles.navLogo} ${styles.mblLogo}`}>
              <Link href="/">
                <Image alt="bitswits" className="img-fluid" src={mbllogo} />
              </Link>
            </div>
            <li>
              <Link href="/" className={styles.post}>
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => fun11("active1")}
              onMouseLeave={() => fun21("secImage11")}
              className={styles.product}
            >
              <Link className={styles.post} href="#">
                Services
                <FaAngleDown />
              </Link>
              {isHovered1 === "active1" ? (
                <div className={styles.megamenu}>
                  <Row>
                    <Col lg={4} className={` ${styles.newspace}`}>
                      <div>
                        <h4 className={styles.course1}>
                          Mobile App Development
                        </h4>
                      </div>
                      <div className={styles.hire}>
                        <Row>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab1" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab1")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Mobile App <br /> Development
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={IOS}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab2" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab2")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Game <br /> Development
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={andriod}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab3" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab3")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Blockchain <br /> Development{" "}
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab4" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab4")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Artificial <br /> Intelligence (Ai){" "}
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab5" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab5")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Web App <br /> Development
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab6" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab6")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Augmented <br /> Reality{" "}
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab7" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab7")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Web <br /> Development
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${
                                activeTab1 == "tab8" ? styles.active : ""
                              }`}
                              onClick={() => fun1("tab8")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  UI/UX App <br /> Design{" "}
                                </h4>
                                <Image
                                  alt="bitswits"
                                  src={UIUX}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col lg={4} className={` ${styles.menupostblog1}`}>
                      {activeTab1 == "tab1" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={IOS}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                href="/ios-app-development"
                                text="IOS Application Development"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={andriod}
                                  guardicon
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/android-application-development"
                                text="Android Application Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Flutter}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/flutter-mobile-development"
                                text="Flutter App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={ReactNative}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/react-native-mobile-development"
                                text="React Native App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Cross}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/cross-platform-app-development"
                                text="Cross Platform App Development"
                              />
                            </li>
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab2" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={andriod}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/game-application-development"
                                text="Game App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={TwodIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/2d-game-development-company"
                                text="2D Game Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={ThreedIcon}
                                  guardicon
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/3d-game-development-company"
                                text="3D Game Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={NFT}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/nft-game-development"
                                text="NFT Game Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-game-development"
                                text="Blockchain Game Development"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab3" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-development-lp"
                                text="Blockchain Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/artificial-intelligence-development-company"
                                text="Artificial Intelligence"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/augmented-reality-apps-development-company"
                                text=" Augmented Reality App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web Development"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab4" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/artificial-intelligence-development-company"
                                text="Artificial Intelligence"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-development-lp"
                                text="Blockchain Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/augmented-reality-apps-development-company"
                                text="Augmented Reality App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text=" Web Development"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab5" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text=" Web Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-development-lp"
                                text="Blockchain Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/artificial-intelligence-development-company"
                                text="Artificial Intelligence"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/augmented-reality-apps-development-company"
                                text="Augmented Reality App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web Development"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab6" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/augmented-reality-apps-development-company"
                                text="Augmented Reality App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-development-lp"
                                text="Blockchain Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/artificial-intelligence-development-company"
                                text="Artificial Intelligence"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web Development"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab7" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/augmented-reality-apps-development-company"
                                text="Augmented Reality App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-development-lp"
                                text="Blockchain Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/artificial-intelligence-development-company"
                                text="Artificial Intelligence"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}

                      {activeTab1 == "tab8" && (
                        <div>
                          <ul className={`${styles.mega} mt-5 pt-3`}>
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Augment}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/augmented-reality-apps-development-company"
                                text="Augmented Reality App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/web-app-development"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={blockchainIcon}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/blockchain-development-lp"
                                text="Blockchain Development"
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={AI}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="/artificial-intelligence-development-company"
                                text="Artificial Intelligence"
                              />
                            </li>
                            <hr />
                          </ul>
                        </div>
                      )}
                    </Col>
                    <Col lg={4} className={`${styles.newset}`}>
                      <div className={styles.lptow}>
                        <div className={styles.newbits}>
                          <div>
                            <h6>
                              Train Now, <br></br>{" "}
                              <span className={styles.pay}>Pay Later</span>{" "}
                            </h6>
                            <p>Book now and pay in instalments</p>
                            <Link href="#">
                              Learn more{" "}
                              <RiArrowDropRightLine
                                className={styles.train12}
                              />{" "}
                            </Link>
                          </div>
                          <div>
                            <Image
                              alt="bitswits"
                              src={icontwo}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className={styles.proper}>
                          <h4>FOR BUSINESS CUSTOMERS</h4>
                          <h3>
                            HIRING & <br></br> TRAINING
                          </h3>
                          <p>
                            Welcome to Bitswits, where app creation meets
                            innovation. Whether it's 'Creating an App,' 'Making
                            an App,' or diving into 'iOS' or 'Android
                            Application' development, we're your team. Let's
                            turn your vision into reality with our leading-edge
                            app development expertise. Our Client’s Feedback Has
                            Been
                          </p>
                        </div>
                        <div className={styles.slaes}>
                          <p className="pb-0 mb-0">
                            {" "}
                            <Link href="tel:18335006007">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={call}
                                loading="lazy"
                              />
                              <span className="number">+1 833 500 6007</span>
                            </Link>
                          </p>
                          <p>
                            <Link href="mailto:info@BitsWits.co">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={mail}
                                loading="lazy"
                              />
                              <span className="email f-uppercase">
                                Contact Email
                              </span>
                            </Link>
                          </p>
                          <p className="mb-0 pb-3">
                            <Link href="#" className={styles.newyork}>
                              Learn More{" "}
                              <RiArrowDropRightLine className={styles.train} />
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : null}
            </li>
            <li
              onMouseEnter={() => funcom("active3")}
              onMouseLeave={() => funcom2("secImage2")}
              className={styles.product}
            >
              <Link href="#" className={styles.post}>
                OUR COMPANY
                <FaAngleDown />
              </Link>

              {isHovered3 == "active3" ? (
                <div className={styles.megamenucom}>
                  <Row>
                    <Col lg={4}>
                      <ul className={`${styles.glop} mb-0 mt-0`}>
                        <div className={styles.listHeading}>
                          <div className={styles.megaIcon}>
                            <Image
                              alt="bitswits"
                              className="img-fluid"
                              src={about2}
                            />
                          </div>
                          <h5 className="font14 fontf font-semibold mb-0">
                            ABOUT US
                          </h5>
                        </div>
                        <div className={styles.california}>
                          <Row>
                            <Col md={12}>
                              <p>
                                Based in California, US, our company is driven
                                by a relentless commitment to client
                                satisfaction, fueled by our passion for
                                technology innovation and business process
                                expertise. Since our inception in 2002, we have
                                experienced remarkable growth year after year,
                                currently boasting a thriving in-house team of
                                over 1,000 employees spread across various
                                international locations.
                              </p>
                              <Link
                                className={styles.download}
                                onClick={opnen}
                                href="#"
                                download
                              >
                                <FaAngleRight className="white font14" />
                                Download our E-brochure
                              </Link>
                            </Col>
                          </Row>
                        </div>
                      </ul>
                    </Col>

                    <Col lg={2}>
                      <ul className={`${styles.glop} mb-0 mt-0`}>
                        <div className={styles.listHeading}>
                          <div className={styles.megaIcon}>
                            <Image
                              alt="bitswits"
                              className="img-fluid"
                              src={company}
                            />
                          </div>
                          <h5 className="font14 fontf font-semibold mb-0">
                            COMPANY
                          </h5>
                        </div>

                        <li>
                          <button
                            className={styles.aboutButton}
                            onClick={() => router.push("/about-us")}
                          >
                            <FaAngleRight />
                            <ActiveLink
                              href="/about-us"
                              text="About Us"
                              handle={() => isToggleCloseMeg((prev) => !prev)}
                            />
                          </button>
                        </li>
                      </ul>
                    </Col>

                    <Col lg={6}>
                      <div className={styles.glop}>
                        <div className={styles.listImg}>
                          <Image
                            alt="bitswits"
                            className="img-fluid"
                            src={ourbg}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : (
                ""
              )}
            </li>
            <li
              onMouseEnter={() => funwork("active4")}
              onMouseLeave={() => funwork2("secImage2")}
              className={styles.product}
            >
              <Link href="#" className={styles.post}>
                OUR WORK
                <FaAngleDown />
              </Link>

              {isHovered4 == "active4" ? (
                <div className={styles.megamenuwork}>
                  <Row className="gy-4">
                    <Col lg={4} className="pt-4">
                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/travel-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/travel-app-development-case-study"
                                text="TRAVEL APP"
                                className="white"
                                // handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={travelimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/real-estate-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/real-estate-app-development-case-study"
                                text="REAL ESTATE APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={realestateimgg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push(
                            "/clothing-marketplace-app-development-case-study"
                          )
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/clothing-marketplace-app-development-case-study"
                                text="ECOMMERCE APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={ecommerceimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/social-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/social-app-development-case-study"
                                text="SOCIAL MEDIA APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={scribeimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push(
                            "/automobile-repair-app-development-case-study"
                          )
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/automobile-repair-app-development-case-study"
                                text="AUTOMOBILE REPAIR APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={greepeimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push(
                            "/food-delivery-app-development-case-study"
                          )
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/food-delivery-app-development-case-study"
                                text="FOOD DELIVERY APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={cruveimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push(
                            "/handyman-on-demand-app-development-case-study"
                          )
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/handyman-on-demand-app-development-case-study"
                                text="HANDYMAN APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={homeconnctimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/music-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/music-app-development-case-study"
                                text="MUSIC APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={beatsimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>
                    </Col>

                    <Col lg={4} className={`${styles.menupostblog1} pt-4`}>
                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push(
                            "/marketing-partnership-app-development-case-study"
                          )
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="//marketing-partnership-app-development-case-study"
                                text="INFLUENCER MARKETING APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={sponserdimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/healthcare-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/healthcare-app-development-case-study"
                                text="HEALTH CARE APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={healthimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/ride-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/ride-app-development-case-study"
                                text="RIDE APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={riderimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/fitness-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/fitness-app-development-case-study"
                                text="FITNESS APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={fitnowimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <button
                        className={styles.polo1}
                        onClick={() =>
                          router.push("/hiring-app-development-case-study")
                        }
                      >
                        <div>
                          <div>
                            <h4>
                              <ActiveLink
                                href="/hiring-app-development-case-study"
                                text="HIRING APP"
                                className="white"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </h4>
                          </div>
                          <Image
                            alt="bitswits"
                            src={readyappimg}
                            className="img-fluid"
                          />
                        </div>
                      </button>

                      <div className={`${styles.polo} ${styles.polo3}`}>
                        <div>
                          <h3 className="white font-bold letterspacefy font18">
                            Contact Us
                          </h3>
                          <div className={styles.fill}>
                            <div>
                              <BsFillEnvelopeFill
                                size={15}
                                className={styles.email}
                              />
                            </div>
                            <div>
                              <Link
                                className="font15 font-medium white fontf"
                                href="mailto:info@bitswits.co"
                              >
                                info@bitswits.com
                              </Link>
                            </div>
                          </div>
                          <div className={styles.fill}>
                            <div>
                              <BsFillTelephoneFill
                                size={15}
                                className={styles.email}
                              />
                            </div>
                            <div>
                              <Link
                                className="font15 font-medium white fontf"
                                href="tel:+1 312 379 5987"
                              >
                                +1 312 379 5987
                              </Link>
                            </div>
                          </div>
                          <div className={styles.fill}>
                            <div>
                              <BsFillTelephoneFill
                                size={15}
                                className={styles.email}
                              />
                            </div>
                            <div>
                              <Link
                                className="font15 font-medium white fontf"
                                href="tel:+18335006007"
                              >
                                +1 833 500 6007
                              </Link>
                            </div>
                          </div>
                          <div className={styles.fill}>
                            <div className="mt-1">
                              <Link
                                className="font15 font-medium white fontf"
                                href="#"
                              >
                                Read More{" "}
                                <RiArrowDropRightLine
                                  className={styles.train}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Image
                            alt="bitswits"
                            src={contact}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} className={`${styles.newset}`}>
                      <div className={styles.lptow}>
                        <div className={styles.newbits}>
                          <div>
                            <h6>
                              Train Now, <br></br>{" "}
                              <span className={styles.pay}>Pay Later</span>{" "}
                            </h6>
                            <p>Book now and pay in instalments</p>
                            <Link href="#">
                              Learn more{" "}
                              <RiArrowDropRightLine
                                className={styles.train12}
                              />{" "}
                            </Link>
                          </div>
                          <div>
                            <Image
                              alt="bitswits"
                              src={icontwo}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className={styles.proper}>
                          <h4>FOR BUSINESS CUSTOMERS</h4>
                          <h3>
                            HIRING & <br></br> TRAINING
                          </h3>
                          <p>
                            Welcome to Bitswits, where app creation meets
                            innovation. Whether it's 'Creating an App,' 'Making
                            an App,' or diving into 'iOS' or 'Android
                            Application' development, we're your team. Let's
                            turn your vision into reality with our leading-edge
                            app development expertise. Our Client’s Feedback Has
                            Been
                          </p>
                        </div>
                        <div className={styles.slaes}>
                          <p className="pb-0 mb-0">
                            {" "}
                            <Link href="tel:18335006007">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={call}
                                loading="lazy"
                              />
                              <span className="number">+1 833 500 6007</span>
                            </Link>
                          </p>
                          <p>
                            <Link href="mailto:info@BitsWits.co">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={mail}
                                loading="lazy"
                              />
                              <span className="email f-uppercase">
                                Contact Email
                              </span>
                            </Link>
                          </p>
                          <p className="mb-0 pb-3">
                            <Link href="#" className={styles.newyork}>
                              Learn More{" "}
                              <RiArrowDropRightLine className={styles.train} />
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <Link href="/about-us" className={styles.post}>
                About
              </Link>
            </li>
            <li>
              <Link href="/ontact-us" className={styles.post}>
                Contact
              </Link>
            </li>
            <li onClick={modal}>
              <Link className={`${styles.post} ${styles.quote}`} href="#">
                GET A QUOTE
              </Link>
            </li>
          </ul>
          <div className={styles.navTogle} onClick={handleMenu}>
            <span
              className={
                isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`
              }
            ></span>
            <span
              className={
                isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`
              }
            ></span>
            <span
              className={
                isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`
              }
            ></span>
          </div>
        </nav>

        {/* <Modal show={show} onHide={closemodal} className={styles.modalnew}>
          <Modal.Body>
            {" "}
            <Bitswitspopup formsaspire="popquote" />{" "}
            <span onClick={closemodal} className={styles.cross}>
              {" "}
              <RxCross2 />{" "}
            </span>{" "}
          </Modal.Body>
        </Modal> */}
      </header>
    </>
  );
};

export default HeaderNewDesign;
