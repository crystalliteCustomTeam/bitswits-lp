import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Coverage.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
//components
import Banner from '@/components/ServicesBanner'
import Coverage from '@/components/Coverage';
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import MyExpertise from '@/components/MyExpertise';
//images
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import aheadimage from '../public/images/services/webAhead.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'
//
import icon1 from '../public/images/magento/mescon1.png'
import icon2 from '../public/images/magento/mescon2.png'
import icon3 from '../public/images/magento/mescon3.png'
import icon4 from '../public/images/magento/mescon4.png'
import icon5 from '../public/images/magento/mescon5.png'
import icon6 from '../public/images/magento/mescon6.png'
//
import icon7 from '../public/images/magento/mes-t1.png'
import icon8 from '../public/images/magento/mes-t2.png'
import icon9 from '../public/images/magento/mes-t3.png'
import icon10 from '../public/images/magento/mes-t4.png'
import icon11 from '../public/images/magento/mes-t5.png'
import icon12 from '../public/images/magento/mes-t6.png'
//
import icon13 from '../public/images/magento/mes-ico1.png'
import icon14 from '../public/images/magento/mes-ico2.png'
import icon15 from '../public/images/magento/mes-ico2.png'


export default function motiongraphics() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> MOTION GRAPHICS </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Module Devlopment </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Third Party API  Integration </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Theme Customisations </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Manage Marketing and Sales Activities </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Report On All Activities </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Migration Service </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> We’ve delivered more than <b>80+</b> Magento Enterprise Portal solutions to <b>50+</b> clients in the last <b>21 years</b> . </p> </>



    // // coverage component data

    // const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    // const mobile = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         Mobile App Design
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UI UX Design
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research & Discovery
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Wireframing & Prototyping
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             iOS + Android Applications
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Post Launch Support
    //         </Link>
    //     </div>
    // </div>

    // const user = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         User Research
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Journey & Persona Building
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Participant Recruitments
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research Method & Material Development
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Iterative Research
    //         </Link>
    //     </div>
    // </div>


    // const ux = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         UX Optimization
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Experience Assessment
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User & KPIs Data Analysis
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             A/B Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Feature Experimentation
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UX Iterations
    //         </Link>
    //     </div>
    // </div>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Look At The Services We Have In <span className='grdiant'>MOTION GRAPHICS</span> For You</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Websites Development
                        </h5>
                        <p>
                            Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Integration With 3rd Party Applications
                        </h5>
                        <p>
                            We integrate websites with third party applications namely POS applications, CRM, ERP, accounting, bookkeeping applications and many more.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Performance Optimization
                        </h5>
                        <p>
                            We do Performance Optimization to improve loading time, increase your site's ranking, improve user experience and increase your sales.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Theming
                        </h5>
                        <p>
                            There is quite a buzz lately around Responsive Web Design (RWD) which means using the latest standards to design a site that adapts/optimizes to many different visiting devices (e.g. computers, tablets, smartphones)...
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Module Development
                        </h5>
                        <p>
                            Magento Enterprise is considered as an important platform for creating e-commerce websites bestowed with reliability, flexibility and unmatched regulation over the all platforms of use.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Customize magento Enterprise
                        </h5>
                        <p>
                            Attract more prospects and create more opportunities with less effort. Engage with your customers
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>MOTION GRAPHICS</span> Solutions</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon7} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Analytics and <br /> Reporting
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Integration with Google Analytics
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Admin Report Dashboard with Business Overview
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Sales Reports Including Total Sales and Returns
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Tax Reports
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon8} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Marketing Promotions <br /> and Tools
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Online Poll Creation and Management
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Landing Page Creation Tools
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Catalog Promotional Pricing and Controls
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon9} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Customer Service
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Contact Us Form
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Feature-rich Customer Accounts
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Order History with Status Updates
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Order Tracking from Account
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Order and Account Update Emails
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Customer <br /> Accounts
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Order status and history
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Re-orders from account
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Recently ordered items
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Address Book with unlimited addresses
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Default Billing and Shipping addresses
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Product <br /> Browsing
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Multiple Images Per Product
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Product Image Zoom-in Capability
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Product Reviews
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Related Products
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Stock Availability
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Catalog <br /> Browsing
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Layered / Faceted Navigation for filtering of products in categories and search results.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Flat Catalog Module for Improved Performance with large catalogs
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>


    // Enterprise component data

    const whyEptTitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Why <span className='grdiant'>MOTION GRAPHICS</span></h2>

    const WhyEnterprise = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon13} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-4'>
                            Drive Sales and Improve Productivity
                        </h5>
                        <p>
                            It all starts with Content Staging and Preview. Now you can easily stage, preview, and schedule a wide range of new content, including updates to products, categories, and promotions.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon14} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-4'>
                            Improve Your Management Experience
                        </h5>
                        <p>
                            Advances to the Magento Admin empower you to work more efficiently. An all-new Admin search feature enables you to quickly find customers and order information.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon15} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-4'>
                            Simplify With One Platform
                        </h5>
                        <p>
                            Sell to consumers, businesses, or anything in-between with one powerful platform. The Magento Enterprise Edition flexible feature set offers effortless customization.
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

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'

            /> */}


            <MyExpertise
                title="Solutions"
                subtitle={expsubtile}
                cards={expCards}
            />


            {/* <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            /> */}


            <WhyBuild
                cards={WhyEnterprise}
                subtitle={whyEptTitle}
            />


            {/* <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'
            /> */}


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
