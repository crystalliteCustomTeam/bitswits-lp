import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import expertStyle from '@/styles/Experts.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import rebStyles from '@/styles/Robust.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import CrmExamples from '@/components/CrmExamples';
import Experts from '@/components/experts';
import WhyBuild from '@/components/WhyBuild';
import Robust from '@/components/Robust';
import Milestones from '@/components/Milestones';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon24 from '../public/images/joomla/j-icon-1.png'
import icon25 from '../public/images/joomla/j-icon-2.png'
import icon26 from '../public/images/joomla/j-icon-3.png'
import icon27 from '../public/images/joomla/j-icon-4.png'
import icon28 from '../public/images/joomla/j-icon-5.png'
import icon29 from '../public/images/joomla/j-icon-6.png'
import icon30 from '../public/images/joomla/j-icon-7.png'
import icon31 from '../public/images/joomla/j-icon-8.png'
import icon32 from '../public/images/joomla/j-icon-9.png'
import icon35 from '../public/images/joomla/j-icon-10.png'
//
import b1 from '../public/images/joomla/jicon-1.png'
import b2 from '../public/images/joomla/jicon-2.png'
import b3 from '../public/images/joomla/jicon-3.png'
import b4 from '../public/images/joomla/jicon-4.png'
import b5 from '../public/images/joomla/jicon-5.png'
import b6 from '../public/images/joomla/jicon-6.png'
import b7 from '../public/images/joomla/jicon-7.png'
import b8 from '../public/images/joomla/jicon-8.png'
import b9 from '../public/images/joomla/jicon-9.png'
import b10 from '../public/images/joomla/jicon-10.png'
import b11 from '../public/images/joomla/jicon-11.png'
import b12 from '../public/images/joomla/jicon-12.png'
//
import slide1 from '../public/images/crmDev/crmTesti1.png'
import slide2 from '../public/images/crmDev/crmTesti2.png'
import slide3 from '../public/images/crmDev/crmTesti3.png'
import slide4 from '../public/images/crmDev/crmTesti4.png'
import slide5 from '../public/images/crmDev/crmTesti5.png'
import slide6 from '../public/images/crmDev/crmTesti6.png'
//
import servc1 from '../public/images/joomla/joomla-icon1.png'
import servc2 from '../public/images/joomla/joomla-icon02.png'
import servc3 from '../public/images/joomla/joomla-icon3.png'
import servc4 from '../public/images/joomla/joomla-icon4.png'
import servc5 from '../public/images/joomla/joomla-icon5.png'
import servc6 from '../public/images/joomla/joomla-icon6.png'
import servc7 from '../public/images/joomla/joomla-icon7.png'
import servc8 from '../public/images/joomla/joomla-icon8.png'
import servc9 from '../public/images/joomla/joomla-icon9.png'
import servc10 from '../public/images/joomla/joomla-icon10.png'
import flodimg from '../public/images/joomla/joomla.png'
//
import milestones1 from '../public/images/joomla/joomla-icon-1.png'
import milestones2 from '../public/images/joomla/joomla-icon-2.png'
import milestones3 from '../public/images/joomla/joomla-icon-3.png'
import milestones4 from '../public/images/joomla/joomla-icon-4.png'
import milestones5 from '../public/images/joomla/joomla-icon-5.png'
import milestones6 from '../public/images/joomla/joomla-icon-6.png'
import milestones7 from '../public/images/joomla/joomla-icon-7.png'
import milestones8 from '../public/images/joomla/joomla-icon-8.png'
import milestones9 from '../public/images/joomla/joomla-icon-9.png'
import milestones10 from '../public/images/joomla/joomla-icon-10.png'
import milestones11 from '../public/images/joomla/joomla-icon-11.png'
import milestones12 from '../public/images/joomla/joomla-icon-12.png'



export default function joomlaDev() {

    var crmExamples = {
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Our <span className='grdiant'> Joomla</span>  Developers In UK</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Theme Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Website Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Extension Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Multivendor solutions</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Version Upgrades Services</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Migration Services</li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b>2000+</b> Joomla portals  to <b>1500+</b> clients in the last <b>21 years</b>.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Industries We’re Proud To Have Served
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Web & Application
                        Development
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Portal Development
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Zend Integration Services
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Zend Customisation
                        Services
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Build and Deploy
                        Zend Apps
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Maintenance and
                        Support Services
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Enterprise Solutions
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        CMS Solutions
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Payment Gateways
                        Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 mt-3 fontf font-regular line30'>
                        Zend Web 2.0
                        Application Development
                    </h5>
                </div>
            </Col>
        </Row>

    </>



    // rebust component data

    const rebust = <>
        <Container>
            <Row>
                <Col lg={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-2'>
                        Our <span className='grdiant'>Joomla</span> Expertise
                    </h3>
                    <p className='font18 fontf font-regular black text-center mb-5'>
                        Easy and customized Laravel services for robust business needs.
                    </p>
                </Col>
                <Col lg={12}>
                    <div className={rebStyles.laraBox}>
                        <div className={rebStyles.left}>
                            <ul className={rebStyles.clearfix}>
                                <li>
                                    <Image quality={75} src={servc1} className='img-fluid' alt="" />
                                    <span> Web Application Development  </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc2} className='img-fluid' alt="" />
                                    <span> Customisation and Integration</span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc3} className='img-fluid' alt="" />
                                    <span> Website Migration Services </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc4} className='img-fluid' alt="" />
                                    <span> Template Design and Development </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc5} className='img-fluid' alt="" />
                                    <span>
                                        Multilingual Solutions
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className={rebStyles.mid}>
                            <Image quality={75} src={flodimg} className='img-fluid' alt="" />
                        </div>

                        <div className={rebStyles.right}>
                            <ul className={rebStyles.clearfix}>
                                <li>
                                    <Image quality={75} src={servc6} className='img-fluid' alt="" />
                                    <span> Extension Development  </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc7} className='img-fluid' alt="" />
                                    <span> e-Commerce Development </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc8} className='img-fluid' alt="" />
                                    <span> Restful Application Development </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc9} className='img-fluid' alt="" />
                                    <span> Social Media Development  </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc10} className='img-fluid' alt="" />
                                    <span> SaaS App Development  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>



    // experts  component data

    const experttitle = <h4 className='font40 black fontf font-bold line60 black text-center'>Rapid Application Development</h4>

    const experts = <>
        <Container>
            <Row className={`${expertStyle.expertRow} justify-content-center`}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b1} alt='BitsWits' className='img-fluid' />
                        <h4>User-Friendly Interface</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b2} alt='BitsWits' className='img-fluid' />
                        <h4>Enhanced Security</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b3} alt='BitsWits' className='img-fluid' />
                        <h4>Seo-Friendly</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b4} alt='BitsWits' className='img-fluid' />
                        <h4>Scalability</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b5} alt='BitsWits' className='img-fluid' />
                        <h4>User-Friendly Interface</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>Enhanced Security</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b7} alt='BitsWits' className='img-fluid' />
                        <h4>Seo-Friendly</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b8} alt='BitsWits' className='img-fluid' />
                        <h4>Scalability</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b9} alt='BitsWits' className='img-fluid' />
                        <h4>User-Friendly Interface</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b10} alt='BitsWits' className='img-fluid' />
                        <h4>Enhanced Security</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b11} alt='BitsWits' className='img-fluid' />
                        <h4>Seo-Friendly</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b12} alt='BitsWits' className='img-fluid' />
                        <h4>Scalability</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Joomla</span> solutions
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Seizethemarket</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Event Calendar</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Journey CRM</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>YouCall-it.com</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Risk Assessor Lite</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>ICAEW Members</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let’s Talk About Your Joomla Development Requirement </>



    // Advantages component data

    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-5'>
                        The Services We Provide
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones1} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">CRM Application</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones2} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Custom Web Development</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones3} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">MVC Architecture</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones4} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Web Services</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones5} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Third PartY API</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones6} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Enterprise Applications</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones7} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">CRM Application</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones8} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Custom Web Development</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones9} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">MVC Architecture</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones10} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Web Services</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones11} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Third PartY API</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones12} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Enterprise Applications</h5>
                        <p>Our supreme coding standards are at such a level that your website will outshine other competitors, and your business would certainly flourish.</p>
                    </div>
                </Col>
            </Row>
        </Container>

    </>



    return (
        <>
            <Head>
                <title>BitsWits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                infopara={infopara}
            />


            <Milestones
                value={value}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <Robust
                rebst={rebust}
            />


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />


            <Experts
                cards={experts}
                subtitle={experttitle}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
