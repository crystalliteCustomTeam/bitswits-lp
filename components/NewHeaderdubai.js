import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styles from "@/styles/NewHeaderdubai.module.css";
//
import { FaAngleDown } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoCallSharp } from "react-icons/io5";
//
import ActiveLink from "./ActiveLink";
import Modal from "react-bootstrap/Modal";
import Bitswitspopup from "../components/Bitswitspopup";
// images
import logo from "../public/images/icons/footerlogo.webp";
import discount from "../public/headerbits/discount.jpg";
import cta1 from "../public/headerbits/cta1.png";
import cta2 from "../public/headerbits/cta2.png";
import cta3 from "../public/headerbits/cta3.png";
import mbllogo from "../public/images/icons/footerlogo.png";
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
import blockServ from "public/images/icons/block-serv.png";
import mblApp from "public/images/icons/mblApp.png";
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
// 
import travel from "../public/images/case-studies/case-travel/banner-img.png"
import estate from "../public/images/case-studies/case-dreamhome/banner-img.png"
import ecommerce from "../public/images/case-studies/case-wisu/banner-img.png"
import scribe from "../public/images/case-studies/case-scribe/banner-img.png"
import greepe from "../public/images/case-studies/case-monkey/banner-img.png"
import sponserd from "../public/images/case-studies/case-sponsord/banner-img.png"
import health from "../public/images/case-studies/case-health/banner-img.png"
import rider from "../public/images/case-studies/case-ride/banner-img.png"
import fitnow from "../public/images/case-studies/case-fitnow/banner-img.png"
import crave from "../public/images/case-studies/case-crave/banner-img.png"
import home from "../public/images/case-studies/case-homepro/banner-img.png"
import beats from "../public/images/case-studies/case-beats/banner-img.png"
import ready from "../public/images/case-studies/case-ready/banner-img.png"


const NewHeaderdubai = () => {
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

  const [activeTab2, setActiveTab2] = useState("tab1");
  function fun2(tabs1) {
    setActiveTab2(tabs1);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsHovered1("secImage11");
      setIsHovered4("secImage2");
      setIsHovered3("secImage2");
    }, 1000);
  }, [toggleCloseMeg, router]);


  return (
    <>
      <header className={styles.headernew}>
        <div className={styles.logo}>
          <Link href="/">
            <Image alt="bitswits" loading="lazy" src={logo} className="img-fluid" />
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
              <Link href="#" className={styles.post}>
              Technologies <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.post}>
              Our Company <FaAngleDown />
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
                              className={`${styles.hire} ${activeTab1 == "tab1" ? styles.active : ""
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
                                  src={mblApp}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div
                              className={`${styles.hire} ${activeTab1 == "tab2" ? styles.active : ""
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
                              className={`${styles.hire} ${activeTab1 == "tab3" ? styles.active : ""
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
                              className={`${styles.hire} ${activeTab1 == "tab4" ? styles.active : ""
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
                              className={`${styles.hire} ${activeTab1 == "tab5" ? styles.active : ""
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
                              className={`${styles.hire} ${activeTab1 == "tab6" ? styles.active : ""
                                }`}
                              onClick={() => fun1("tab6")}
                              href="#"
                            >
                              <div className={styles.polo}>
                                <h4>
                                  Business <br /> Intelligence{" "}
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
                              className={`${styles.hire} ${activeTab1 == "tab7" ? styles.active : ""
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
                              className={`${styles.hire} ${activeTab1 == "tab8" ? styles.active : ""
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
                                  src={mblApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                href="#"
                                text="Mobile App Development"
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                              />
                            </li>
                            <hr />
                            <li className={styles.imgpost}>
                              <div className={styles.dsicon}>
                                <Image
                                  alt="bitswits"
                                  src={IOS}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                href="#"
                                text="IOS App Development"
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
                                href="#"
                                text="Android App Development"
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
                                href="#"
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
                                href="#"
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
                                href="#"
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
                                href="#"
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
                                href="#"
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
                                href="#"
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
                                href="#"
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
                                href="#"
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
                                  src={blockServ}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="#"
                                text="Blockchain Development Services"
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
                                href="#"
                                text="Blockchain App Development"
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
                                href="#"
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
                                href="#"
                                text="Custom Mobile Development"
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
                                href="#"
                                text=" Augmented Reality App Development"
                              />
                            </li>
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
                                href="#"
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
                                href="#"
                                text=" Augmented Reality App Development"
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
                                href="#"
                                text="Blockchain Development Services"
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
                                href="#"
                                text="Blockchain App Development"
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
                                href="#"
                                text="Cross Platform App Development"
                              />
                            </li>
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
                                  src={WebApp}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="#"
                                text=" Web App Development"
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
                                href="#"
                                text="Cross Platform App Development"
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
                                href="#"
                                text="Augmented Reality App Development"
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
                                href="#"
                                text="Blockchain App Development"
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
                                href="#"
                                text="Custom Mobile Development"
                              />
                            </li>
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
                                href="#"
                                text="Business Intelligence Software Development"
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
                                href="#"
                                text="Custom Mobile Development"
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
                                href="#"
                                text="Cross Platform App Development"
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
                                href="#"
                                text="Blockchain Development Services"
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
                                href="#"
                                text="Artificial Intelligence"
                              />
                            </li>
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
                                  src={Programming}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                href="#"
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
                                href="#"
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
                                href="#"
                                text="Custom Mobile Development"
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
                                href="#"
                                text="Cross Platform App Development"
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
                                href="#"
                                text="Web App Development"
                              />
                            </li>
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
                                  src={IOS}
                                  className="img-fluid"
                                />
                              </div>
                              <ActiveLink
                                href="#"
                                text="UI & UX Design And Development "
                                handle={() => isToggleCloseMeg((prev) => !prev)}
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
                                href="#"
                                text="Web App Development"
                              />
                            </li>
                            <hr />
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
                                href="#"
                                text="Game App Development"
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
                                href="#"
                                text="Blockchain App Development"
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
                                href="#"
                                text="Artificial Intelligence"
                              />
                            </li>
                          </ul>
                        </div>
                      )}
                    </Col>
                    <Col lg={4} className={`${styles.newset}`}>
                      <div className={styles.lptow}>
                        <div className={styles.newbits}>
                          <Link href="javascript:$zopim.livechat.window.show();">
                            <Image
                              alt="bitswits"
                              src={discount}
                              className="img-fluid"
                            />
                          </Link>
                        </div>
                        <div className={styles.proper}>
                          <h4>Development Excellence with Bitswits</h4>
                          <h3>
                            On Time, Within Budget
                          </h3>
                          <p>
                            At Bitswits, we bridge your ideas with the real world, turning visions into vivid experiences. Innovation drives us, whether it's through mobile apps or blockchain technology, and we're committed to keeping you ahead. Our deep understanding of technology isn't just our craft; it's our passion, powering every unique solution we create for you. At Bitswits, we don't just build solutions; we craft a future where our success is intertwined with yours.
                          </p>
                        </div>
                        <div className={styles.slaes}>
                          <p className="pb-0 mb-0">
                            <Link href="tel:+18335006007">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={cta1}
                                loading="lazy"
                              />
                              <span className="number">BOOK A CALL</span>
                            </Link>
                          </p>
                          <p className="pb-0 mb-0">
                            <Link href="mailto:info@BitsWits.co" className={styles.saleEmail}>
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={cta2}
                                loading="lazy"
                              />
                              <span className="email f-uppercase">
                                Contact Email
                              </span>
                            </Link>
                          </p>
                          <p className="pb-0 mb-0">
                            <Link href="javascript:$zopim.livechat.window.show();">
                              <Image
                                alt="bitswits"
                                className="img-fluid"
                                src={cta3}
                                loading="lazy"
                              />
                              <span className="email f-uppercase">
                                Lets Chat
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : null}
            </li>
           

            <li>
              <Link href="#" className={styles.post}>
              Our Work
              </Link>
            </li>
           
            <li>
              <Link className={`${styles.post} ${styles.quote}`} href="tel:+18335006007">
              <IoCallSharp />  +1 833 500 6007
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

        <Modal show={show} onHide={closemodal} className={styles.modalnew}>
          <Modal.Body>
            {" "}
            <Bitswitspopup formsaspire="popquote" />{" "}
            <span onClick={closemodal} className={styles.cross}>
              {" "}
              <RxCross2 />{" "}
            </span>{" "}
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default NewHeaderdubai;
