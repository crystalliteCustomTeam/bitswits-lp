import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import portstyles from '@/styles/Portal.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import Portal from '@/components/Portal';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon22 from '../public/images/sharepoint/share-point-icon-1.png'
import icon23 from '../public/images/sharepoint/share-point-icon-2.png'
import icon24 from '../public/images/sharepoint/share-point-icon-3.png'
import icon27 from '../public/images/sharepoint/share-point-icon-4.png'
import icon28 from '../public/images/sharepoint/share-point-icon-5.png'
import icon29 from '../public/images/sharepoint/share-point-icon-6.png'
//
import sevcImg from '../public/images/etpSolutions/serviceimg.png'


export default function sharepointdevelopment() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>We are <br /><span className='grdiant'>SharePoint</span> experts</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Sharepoint websites
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Web part-development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Workflow development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Business workflows
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                MS Dynamics CRM
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Enterprise collaboration
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> We’ve delivered more than <b>50+</b> Sharepoint Portal solutions to <b>50+</b> clients in the last <b>21 years</b> . </p> </>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>We Let Our Business Values Look After Our Quality Of Work</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Online Document
                            Management System
                        </h5>
                        <p>
                            Our team has the capability to manage the Document management system (DMS) of platform. This DMS includes categories of different documents, creating a custom metadata column in SharePoint, creating custom wcontent types, preparing document library for custom content types and custom metadata etc.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Integration with Business Applications
                            like Microsoft Dynamics CRM
                        </h5>
                        <p>
                            The larger the enterprise, the more challenges there are. Therefore, to implement large scale tools that help enterprises in bringing different processes, people and data on one platform, enterprise solutions are developed.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Site Pages Designing
                        </h5>
                        <p>
                            One of the biggest challenges that companies with multiple locations face is sharing data from one part of the company with another. Even when all portions of the company want to share, it’s often hard to figure out the best way to do so. Enterprise portal solutions ease this problem beautifully.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Workflow Creation and Business
                            Process Management
                        </h5>
                        <p>
                            ECM systems can be successfully integrated into any business, like in the case of financial services, public sector, media and entertainment, manufacturing and utilities, healthcare, education, e-commerce, services and transport- at BitsWits, we provide you these enterprise portal solution developments.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Site Branding and Page
                            Customization
                        </h5>
                        <p>
                            ERP solutions for manufacturing are being built with speed and productivity as the focus. And that unquestionably means that employing such a system at your company will build the benefits of cost reduction and streamlined operations.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Installation and Site Migration
                        </h5>
                        <p>
                            A business Intelligence system produces detailed analysis that can benefit every company. The tools can track performance, identify hidden trends and strategic information – providing powerful analytics to highlight the right data for business decisions, affecting growth and success.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

    </>


    // Portal component data

    const portSec = <>
        <Container>
            <Row className={portstyles.portRow}>
                <Col lg={6} className='mx-auto'>
                    <Image quality={75} src={sevcImg} alt='BitsWits' className='img-fluid' />
                </Col>
                <Col lg={6} className='mx-auto'>
                    <h3 className='font-bold mb-3'>Services we offer</h3>
                    <ul>
                        <li>SharePoint Development</li>
                        <li>Document Management</li>
                        <li>Custom made solutions</li>
                        <li>Language integrated query</li>
                        <li>Sharepoint Administration</li>
                        <li>Site migration</li>
                        <li>Branding & Customization</li>
                        <li>SharePoint Installation</li>
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


            <Portal
                portal={portSec}
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
