import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import portstyles from '@/styles/Portal.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
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
import WhyBuild from '@/components/WhyBuild';
import Portal from '@/components/Portal';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon22 from '../public/images/umbraco/umbraco-icon-1.png'
import icon23 from '../public/images/umbraco/umbraco-icon-2.png'
import icon24 from '../public/images/umbraco/umbraco-icon-3.png'
import icon25 from '../public/images/umbraco/umbraco-icon-4.png'
import icon26 from '../public/images/umbraco/umbraco-icon-5.png'
import icon27 from '../public/images/umbraco/umbraco-icon-6.png'
import icon28 from '../public/images/umbraco/umbraco-icon-7.png'
import icon29 from '../public/images/umbraco/umbraco-icon-8.png'
//
import sevcImg from '../public/images/umbraco/serviceimg3.png'
//
import slide1 from '../public/images/crmDev/crmTesti1.png'
import slide2 from '../public/images/crmDev/crmTesti2.png'
import slide3 from '../public/images/crmDev/crmTesti3.png'
import slide4 from '../public/images/crmDev/crmTesti4.png'
import slide5 from '../public/images/crmDev/crmTesti5.png'
import slide6 from '../public/images/crmDev/crmTesti6.png'



export default function umbracodevelopment() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our expert <br /><span className='grdiant'>Umbraco Solution</span> Architects and Developers</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                E-Commerce
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Backoffice
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                User Interaction
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Site Owners
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Multi Language
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Cloud
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Certified
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Add-ONS
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> We’ve delivered more than <b>50+ Umbraco Portal</b> since it was launched publicly in <b>2004</b>. </p> </>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our Specialised Solutions</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            50+ Umbraco
                            Developers
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Planning & Design
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Proven Results
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Custom CMS Development
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            E-Commerce
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Umbraco UI Design
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Intranet Applications
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Umbraco API
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Umbraco Development</span>
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

    const exmplText = <> Let's talk about your Umbraco requirements </>




    // Portal component data

    const portSec = <>
        <Container>
            <Row className={portstyles.portRow}>
                <Col lg={6} className='mx-auto'>
                    <Image quality={75} src={sevcImg} alt='BitsWits' className='img-fluid' />
                </Col>
                <Col lg={6} className='mx-auto'>
                    <h3 className='font-bold mb-3'>Umbraco Portal Development Services</h3>
                    <ul>
                        <li>Social Networks and Communities</li>
                        <li>Content Distribution Portals (Digital Docs and Media)</li>
                        <li>B2C and B2B Ecommerce Portals</li>
                        <li>Enterprise Information Portals</li>
                        <li>Business Intelligence Portals</li>
                        <li>Sales Management Solution</li>
                        <li>Production Management Solutions</li>
                        <li>Supply Chain Management</li>
                        <li>Customer Relation Management</li>
                        <li>Human Capital Management</li>
                        <li>Finance Management Solutions</li>
                        <li>Service Management Solutions</li>
                        <li>Project Management Solutions</li>
                        <li>Knowledge Management Portals</li>
                        <li>Application/Web Services Portals</li>
                    </ul>
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


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />


            <Portal
                portal={portSec}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
