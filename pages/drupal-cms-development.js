import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import servStyles from '@/styles/PhpServices.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import PhpServices from '@/components/PhpServices';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import icon24 from '../public/images/drupal/drupal1.png'
import icon25 from '../public/images/drupal/drupal2.png'
import icon26 from '../public/images/drupal/drupal3.png'
import icon27 from '../public/images/drupal/drupal4.png'
import icon28 from '../public/images/drupal/drupal5.png'
import icon29 from '../public/images/drupal/drupal6.png'
import icon30 from '../public/images/drupal/drupal7.png'
import icon31 from '../public/images/drupal/drupal8.png'
import icon32 from '../public/images/drupal/drupal9.png'



export default function hireDrupalDeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire <span className='grdiant'>Drupal Experts</span> From a Leading Drupal Agency London, UK</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                21 Years Experience & Counting
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                100+ In-House Team Of Certified Drupal Developers
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                CMMI Dev/3 Appraised Development Centers
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Offices in 5 Countries (UK, USA, Australia, UAE )
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Drupal Certified Gold Partner
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We've delivered more than <strong>114+</strong> Drupal solutions since Drupal launched, back in 2005.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Things Our <span className='grdiant'>Drupal Developers</span> Can Help You With?
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Performance Optimisation</h5>
                    <p>
                        The latest release of the software, Symfony2 is fast. As far as websites build on this framework are concerned, you don’t need to worry about slow loading or even incomplete loading.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Custom Applications</h5>
                    <p>
                        This framework can handle heavy, multi-tiered websites without compromising on performance as long as you are smart when you hire a Symfony Developer. Another reason why the performance of the code is great, is easy testing. The framework has a layer that works well with testing, allowing us to gauge the performance of the code at all levels.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Startup Solutions</h5>
                    <p>
                        We developers love frameworks that make debugging easy and Symfony does just that. In the end, this helps us identify any mistakes in the code, any paths that aren’t working, and correct it. The product you get is efficient because of the powerful debugging toolbar and profiler.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Established Business Solutions</h5>
                    <p>
                        They are one of the best features of Symfony2. They give us a choice. We can use the entire framework and develop a complex website. We have the option of building the website to your specifications, disregarding applications that you don’t need.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Solutions Across Industries</h5>
                    <p>
                        The framework is perfect when the concern is finding an appropriate, attractive and an SEO friendly URL. Unlike most platforms, when a site is made on the Symfony framework the concern of an SEO friendly URL is almost finished, and what is left is just meeting other demands of SEO.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">B2b Solutions</h5>
                    <p>
                        They are one of the best feature of Symfony 2 RAD (rapid application development), it is a concept that products can be developed faster and of higher quality.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">B2c Solutions</h5>
                    <p>
                        This framework maintained coding standard in the website development, so we developers follow the same coding standard during the website development.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Headless Drupal Development</h5>
                    <p>
                        This framework has a massive range of inbuilt features with respect to any new functionality. Having these already installed plugins helps the Symfony developers with the work of the website development, rather perfectly without any major complications.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Integration With Third-Party Apis</h5>
                    <p>
                        This framework allows to integrate 3rd party API’s or other vendor libraries into the application in easy way.
                    </p>
                </div>
            </Col>
        </Row>

    </>



    // Services component data

    const ourServcs = <>
        <Container>
            <Row>
                <Col lg={3}>
                    <div className={`${servStyles.left} ${servStyles.leftArm}`}>
                        <h2 className='font30 white fontf font-bold line30 black mb-2 mb-lg-4'>Our <span className='grdiant'>Drupal Development</span> Services</h2>
                        <p className='white font14 fontf font-medium'>
                            Our expert developers can help you with a comprehensive range of Drupal development services. With transparent communication and efficient project management, we have a strong portfolio of Drupal projects.
                        </p>
                    </div>
                </Col>
                <Col lg={9} className={`${servStyles.secondHalf} ${servStyles.right}`}>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Latest Technology Stack
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Latest Technology Stack
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Create custom themes for your Drupal platform and give your website an exceptional feel as per your business idea. Our experts can customise a theme suitable for your brand by determining the overall layout and visual design.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Website Development
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Website Development
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Get a fully functional website from an idea and make a solid online presence. Our expert can help you with creating the website architecture, designing the user interface, building custom functionalities, and implementing website content.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Custom Extension Development
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Custom Extension Development
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Extend the functionalities of the website with custom modules and meet the business requirements with smooth processes. Our experts are efficient in developing custom extensions to give flexibility to your business website.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Drupal Upgrades Services
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Drupal Upgrades Services
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Upgrade to the latest version of Drupal and get more secure and advanced than ever. Stay up to date to ensure peak performance and get the newest features with our expertise with no downtime or data loss.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Migration Services
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Migration Services
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Migrate your website infrastructure to Drupal with no downtime or business interruption. Our experts can help you with quick migration so you can get optimal performance and deliver an exceptional user experience.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            E-Commerce Solutions
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                E-Commerce Solutions
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Boost your online retail business with quality eCommerce from Drupal. We can help you with online stores, product catalogues, and payment integrations. Make your website more conversion-friendly with Drupal.
                            </p>
                        </div>
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


            <PhpServices
                servcs={ourServcs}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
