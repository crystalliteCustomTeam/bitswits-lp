import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import reStyles from '@/styles/MyReason.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import crmstyles from '@/styles/CRMExperts.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import styles from '@/styles/Coverage.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import CRMExperts from '@/components/CRMExperts';
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import aheadimage from '../public/images/services/webAhead.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon16 from '../public/images/crmDev/crm-choose-icon1.png'
import icon17 from '../public/images/crmDev/crm-choose-icon2.png'
import icon18 from '../public/images/crmDev/crm-choose-icon3.png'
import icon19 from '../public/images/crmDev/crm-choose-icon4.png'
import icon20 from '../public/images/crmDev/crm-choose-icon5.png'
import icon21 from '../public/images/crmDev/crm-choose-icon6.png'
import icon22 from '../public/images/crmDev/crm-choose-icon7.png'
import icon23 from '../public/images/crmDev/crm-choose-icon8.png'
//Why Icon
import icon24 from '../public/images/csharp/1.png'
import icon25 from '../public/images/csharp/2.png'
import icon26 from '../public/images/csharp/3.png'
import icon27 from '../public/images/csharp/4.png'
import icon28 from '../public/images/csharp/5.png'
import icon29 from '../public/images/csharp/6.png'


import Milestones from '@/components/Milestones';
import milStyles from '@/styles/Milestones.module.css'
import { Container } from 'react-bootstrap'
import milestones1 from '../public/images/features/1.png'
import milestones2 from '../public/images/features/2.png'
import milestones3 from '../public/images/features/3.png'
import milestones4 from '../public/images/features/4.png'
import milestones5 from '../public/images/features/5.png'
import milestones6 from '../public/images/features/6.png'
import milestones7 from '../public/images/features/7.png'
import milestones8 from '../public/images/features/8.png'
import milestones9 from '../public/images/features/9.png'
import milestones10 from '../public/images/features/10.png'


export default function hiredatabasedeveloper() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire <span className='grdiant'> Database Developers </span> </h1>

    const para = <>



        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Database Designing</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Database Programming</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Backup and Recovery</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Database Mirroring</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Database Encryption
            </li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Database Migration</li>



        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-3'>We’ve delivered more than 100+ Database
        Projects to 70+ clients in the last 21 years.</p> </>



    // coverage component data

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


    // CRMExpert component data

    const crmtitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Why choose
        <span className='grdiant'> CRM Experts</span> and Developers from BitsWits?
    </h2>

    const crmCards = <>
        <Row className={`${crmstyles.soluRow} mt-5`}>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        Our experts have the experience in using great technologies like MS Dynamics CRM and Salesforce solutions for domains ranging from Medical legal firms, Telecommunication industries, Travel.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’re great at Custom CRM Development
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ve served our clients on a vast industrial spectrum ranging from enterprises to medium and small scale organisations.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon20} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ll be responsible for complete document management.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We have the knowledge of carrying out all integrations with Microsoft SharePoint.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        Want updates and migration services? We can do it for you.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ll be responsible for Upgrade and Migration
                    </p>
                </div>
            </Col>
        </Row>
    </>


    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        <span className='grdiant'> Database Services</span> We'd Like You To Know About
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Database Programming
                    </h5>
                    <p>Our team has the capability to design, build, highly scalable and secure databases – exactly what the client expects. We’ve got absolute programming skills in hand.</p>


                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Database Reporting Services
                    </h5>
                    <p>BitsWits deploys experts in implementing reporting services using SQL Server and MySQL for the database reporting services.</p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Database Tuning & Optimization
                    </h5>
                    <p>The database tuning and optimization technique can implement remedial engineering methods that will substantially speed up and steady the system, and eliminate data integrity issues that plague most office-grown systems.</p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Database Migration Services
                    </h5>
                    <p>Our database developers are extremely experienced in the database migration from different type of database systems like SQL Server, MySQL and MongoDB.</p>


                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Application Integration
                    </h5>
                    <p>Our company offers services for integrating enterprise applications, business-to-business systems, business processes, legacy and third party systems with utmost efficiency, to provide best results to the clients.

                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Database Capacity Planning
                    </h5>
                    <p>Capacity planning is a great way to know the business well - the goal of which is to make sure that the hardware andsoftware will be able to enable your business to achieve the goal. At BitsWits, we do the database capacity planning for you.</p>

                </div>
            </Col>






        </Row>

    </>

    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='center font-bold  mb-5'>Features</h3>
                    
                </Col>
            </Row>
            <Row className='gy-3'>
                <Col xl={4}>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones1} className='img-fluid mb-4 greyscale' />
                        <p>Developed and Maintained big Travel Booking systems with high number of concurrent visitors</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones2} className='img-fluid mb-4 greyscale' />
                        <p>Developed and Maintained Tracking and Security systems for many UK based clients</p>
                    </div>

                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones3} className='img-fluid mb-4 greyscale' />
                        <p>Developed systems with full database encryption for added security and to meet UK, US and EU data privacy guidelines</p>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones4} className='img-fluid mb-4 greyscale' />
                        <p>Implemented huge database with proper design and architecture to meet performance critical standards</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones5} className='img-fluid mb-4 greyscale' />
                        <p>Implemented both code first and database first systems with Microsoft SQL Server</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones6} className='img-fluid mb-4 greyscale' />
                        <p>Data migration from MySQL to SQL Server, SQL Server to MySQL</p>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones7} className='img-fluid mb-4 greyscale' />
                        <p >SQL Server Reporting Services</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones8} className='img-fluid mb-4 greyscale' />
                        <p >Integration with PowerBI and other Big Data tools</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones9} className='img-fluid mb-4 greyscale' />
                        <p >Database migration and performance tuning</p>
                    </div>
                </Col>

                <Col xl={4} className='mongo2'>
                    <div className=' pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-0'>
                        <Image quality={75} src={milestones10} className='img-fluid mb-4 greyscale' />
                        <p >Fail safe systems using SQL Server Mirroring</p>
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

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}



            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
            /> */}

            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />

            <Milestones
                value={value}
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
