import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import reStyles from '@/styles/MyReason.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import MyReason from '@/components/MyReason';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import icon24 from '../public/images/bigcommerce/bigcom-icon1.png'
import icon25 from '../public/images/bigcommerce/bigcom-icon2.png'
import icon26 from '../public/images/bigcommerce/bigcom-icon3.png'
import icon27 from '../public/images/bigcommerce/bigcom-icon4.png'
import icon28 from '../public/images/bigcommerce/bigcom-icon5.png'
import icon29 from '../public/images/bigcommerce/bigcom-icon6.png'
import icon30 from '../public/images/bigcommerce/bigcom-icon7.png'
import icon31 from '../public/images/bigcommerce/bigcom-icon8.png'
import icon32 from '../public/images/bigcommerce/bigcom-icon9.png'
import icon33 from '../public/images/bigcommerce/bigcom-icon10.png'
import icon34 from '../public/images/bigcommerce/bigcom-icon11.png'
import icon35 from '../public/images/bigcommerce/bigcom-icon12.png'
//
import icon1 from '../public/images/bigcommerce/pre-icon-1.png'
import icon2 from '../public/images/bigcommerce/pre-icon-2.png'
import icon3 from '../public/images/bigcommerce/pre-icon-3.png'
import icon4 from '../public/images/bigcommerce/pre-icon-4.png'
import icon5 from '../public/images/bigcommerce/pre-icon-5.png'
import icon6 from '../public/images/bigcommerce/pre-icon-6.png'
import icon7 from '../public/images/bigcommerce/pre-icon-7.png'
import icon8 from '../public/images/bigcommerce/pre-icon-8.png'
import icon9 from '../public/images/bigcommerce/pre-icon-9.png'
import icon10 from '../public/images/bigcommerce/pre-icon-10.png'
import icon11 from '../public/images/bigcommerce/pre-icon-11.png'
import icon12 from '../public/images/bigcommerce/pre-icon-12.png'


export default function hireBigcommerceDeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Experienced <span className='grdiant'>BigCommerce Developers</span> Ready To Start Work, From $15/hr</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Custom Programming
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Template Design
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Bigcommerce Customization
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Template Integration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Website Maintenence & Support
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                API Integration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Inventory Modules
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Flash Integration
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b>40+</b> BigCommerce portals to <b>30+</b> clients in the last <b>21 years</b>.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        BigCommerce Benefits
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Theme Development
                        & Customization
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Installation
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Template Design
                        & Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        API Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Payment Module
                        Development
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Website Maintenance
                        & Support
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon7} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Flash Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon8} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Development Of
                        Inventory Modules
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon9} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        PSD To
                        BigCommerce
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        CMS Development
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Migration Services
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Blog Integration
                    </h5>
                </div>
            </Col>
        </Row>
    </>


    // MyReason component data


    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>BigCommerce Features</h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6>28%</h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Annual Growth
                    </h5>
                    <p>
                        According to research by Ipsos, BigCommerce merchants grow 28% year over year, nearly 2x the industry average.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6>99.99%</h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Average Uptime
                    </h5>
                    <p>
                        Your store is always open for business thanks to one of the best uptimes in the industry, including 100% availability during Cyber Week.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6>1/4</h6>
                    <h5 className='font20 fontf font-bold line30'>
                        The Cost
                    </h5>
                    <p>
                        BigCommerce is a quarter of the cost of on-premise solutions like Magento, with no hosting, maintenance or update expenses.
                    </p>
                </div>
            </Col>
        </Row>
    </>



    // Build component data

    const whyChosetitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Our Solutions
    </h2>

    const WhyChoseBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        21+ years experience
                        in the industry
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Streamlined
                        Communication System
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Proven
                        Methodologies
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Competitive
                        Pricing
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Source Code
                        Authorization
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Comprehensive
                        Reporting
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Security and
                        IP Protection
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Well versed with
                        MVC Structure
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Quality Network &
                        Zero Downtime
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Flexible Engagement
                        Models
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Best-in-industry
                        quotations
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Hire from a pool of highly
                        Proficient Developers
                    </h5>
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


            <MyReason
                title="Features"
                subtitle={reSubtile}
                cards={resCards}
            />


            <WhyBuild
                cards={WhyChoseBuilds}
                subtitle={whyChosetitle}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
