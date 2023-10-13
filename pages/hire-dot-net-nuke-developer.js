import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
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
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon22 from '../public/images/dotnet/dot-icon-1.png'
import icon23 from '../public/images/dotnet/dot-icon-2.png'
import icon24 from '../public/images/dotnet/dot-icon-3.png'
import icon25 from '../public/images/dotnet/dot-icon-4.png'
import icon26 from '../public/images/dotnet/dot-icon-5.png'
import icon27 from '../public/images/dotnet/dot-icon-6.png'
import icon28 from '../public/images/dotnet/dot-icon-7.png'
import icon29 from '../public/images/dotnet/dot-icon-8.png'
import icon30 from '../public/images/dotnet/dot-icon-9.png'
import icon31 from '../public/images/dotnet/dot-icon-10.png'
//
import icon32 from '../public/images/dotnet/dotn-icon-1.png'
import icon33 from '../public/images/dotnet/dotn-icon-2.png'
import icon34 from '../public/images/dotnet/dotn-icon-3.png'
import icon35 from '../public/images/dotnet/dotn-icon-4.png'
import icon36 from '../public/images/dotnet/dotn-icon-5.png'
import icon37 from '../public/images/dotnet/dotn-icon-6.png'
import icon38 from '../public/images/dotnet/dotn-icon-7.png'
import icon39 from '../public/images/dotnet/dotn-icon-8.png'
//
import slide1 from '../public/images/crmDev/crmTesti1.png'
import slide2 from '../public/images/crmDev/crmTesti2.png'
import slide3 from '../public/images/crmDev/crmTesti3.png'
import slide4 from '../public/images/crmDev/crmTesti4.png'
import slide5 from '../public/images/crmDev/crmTesti5.png'
import slide6 from '../public/images/crmDev/crmTesti6.png'



export default function dnnDevelopment() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our expert <br /><span className='grdiant'>DNN</span> Developers</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                E-Commerce and Marketing
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                User Interaction
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Skinning and Theme Design
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Module Development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Maintenance and Version Upgrades
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Intranet Application Development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Mobile Development
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> We’ve delivered more than <b>50+</b> DotNetNuke Portal to <b>30+</b> clients in the last <b>21 years</b> . </p> </>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Why DotNetNuke?</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} justify-content-center mt-5`}>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Open Source
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Ease of Use
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Powers You to Manage
                            Your Content Yourself
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Optimize Website
                            Performance
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Increase Website Traffic
                        </h5>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className={`${whyStyles.soluRow} justify-content-center`}>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Helps Keep Your Website
                            Secure and Scalable
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Provides Ability
                            to Customize
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Power Modules
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Reliable and
                            Trustworthy Platform
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={2} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-medium mt-3'>
                            Over 750,000 Organizations
                            Worldwide Have Built
                        </h5>
                    </div>
                </div>
            </Col>
        </Row>

    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>DNN</span> solutions
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

    const exmplText = <> Let's talk about your DotNetNuke requirements </>



    // Build component data

    const whySpcltitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our Specialized Solutions</h2>

    const WhySpclBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Theme Design
                            & Implementation
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
                            <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Extension Development
                            & Integration
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
                            <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Custom DNN
                            CMS Development
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
                            <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid' />
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
                            <Image quality={75} src={icon36} alt='BitsWits' className='img-fluid' />
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
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon37} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Migration And Update
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
                            <Image quality={75} src={icon38} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Multilanguage
                            Development
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
                            <Image quality={75} src={icon39} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            SEO & QA
                            of DNN Portals
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

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


            <WhyBuild
                cards={WhySpclBuilds}
                subtitle={whySpcltitle}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
