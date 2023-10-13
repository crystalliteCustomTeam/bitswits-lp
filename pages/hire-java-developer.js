import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
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
// import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
import whyStyles from '@/styles/whyServices.module.css'
import styles from '@/styles/Marketingexpertise.module.css'
//Why Icon
import icon24 from '../public/images/long/1.png'
import icon25 from '../public/images/long/2.png'
import icon26 from '../public/images/long/3.png'
import icon27 from '../public/images/long/4.png'
import icon28 from '../public/images/fix/5.png'
import icon29 from '../public/images/fix/6.png'
import icon30 from '../public/images/fix/7.png'
import icon31 from '../public/images/fix/8.png'
import icon32 from '../public/images/fix/9.png'
import icon33 from '../public/images/fix/10.png'
import icon34 from '../public/images/fix/11.png'
import icon35 from '../public/images/fix/12.png'
//
import mobilearrow2 from '../public/images/Include/star.jpg'
//
import reStyles from '@/styles/MyReason.module.css'
import MarketingExpertise from '@/components/MarketingExpertise';
import dataStyles from '@/styles/Marketingexpertise.module.css'
import mobilearrow1 from '../public/images/Include/star.jpg'

import Milestones from '@/components/Milestones';

//Why Icon
import milestones1 from '../public/images/mining/1.png'
import milestones2 from '../public/images/mining/2.png'
import milestones3 from '../public/images/mining/3.png'
import milestones4 from '../public/images/mining/4.png'
import milestones5 from '../public/images/mining/5.png'
import milestones6 from '../public/images/mining/6.png'

export default function hirejavadeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire talented, highly experienced <span className='grdiant'>Java developers</span> from just $20/hr</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Java/J2EE/J2SE development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Enterprise Java development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Java Mobile & IOT development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Custom Java development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Integration services</li>
        </ul>
    </>


    const infopara = <> <p className='black fontf font-medium line30 mt-3'>Did you know? Every one of our 27 Java developers are employed full-time at our office. No sub-contractors, no risk.</p> </>


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



    // Swipe component data


    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-1'>Our <span className='grdiant'>Java Development </span>
        Services</h2>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Java Web
                        Development
                    </h5>

                    <p>With expert JAVA developers, we deploy collaborative and integrated approach in customizing Java-based application and web application to fulfil the business requirements along with the easy to use secure and use friendly mobile responsive website.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Java mobile &
                        IOT development
                    </h5>

                    <p>As a Java development company with software and hardware expertise, we utilize android SDk and third-party tools and deliver custom application for Android based mobile devices. we also use java embedded pltform including Java SE embedded and java embedded suite to create portable iot applications for edge devices.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Custom Java
                        Development
                    </h5>

                    <p>We deploy collaborative & integrated approcah in customizing Java based apps & website ensuring smooth workflow of the java application and website with all-time active Java application and maintenance technical support.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Apps modernization
                        & migration
                    </h5>
                    <p>Legacy migration/ re-engineering of application to the Java platform. renovate and grow with our maintenance and support services that include 2nd and 3rd level support. functionality enhancements, and upgrade to the latest Java version.</p>

                </div>
            </Col>


        </Row>

    </>





const whytitle1 = <h2 className='font30 black fontf font-bold line60 black text-center mb-1'>Integration Services with <span className='grdiant'>
Team in BitsWits </span></h2>



    const WhyBuilds1 = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    JAVA API Development
                    </h5>

                    <p>Extensive B2B,B2C integartion</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Web Services integartion
                    </h5>

                    <p>Any 3rd party and protal</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Manageable Data Connector
                    </h5>

                    <p>Using direct connect with SAP,
Oracle, Microsoft and ERP Solutions</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Enterprise Service

                    </h5>
                    <p>Secure Integation between
enterprise solutions</p>

                </div>
            </Col>


        </Row>

    </>


    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>Here are <span className='grdiant'>six key reasons</span> why
        UK agencies choose to partner with us</h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #1
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Competitive rates
                    </h5>
                    <p>
                        Even though our service is a cut above the rest, we remain competitively priced. Our developer rates start from as little as <strong>$15/hr</strong>
                    </p>
                    <p>
                        Agencies who work with us enjoy making more profit per client and have a higher throughput of projects.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #2
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Quality
                    </h5>
                    <p>
                        We are CMMI level 3 appraised and members of the Agile Alliance, which is your assurance that we have processes and safeguards in place to ensure the delivery of a high quality finished product, each and every time.
                    </p>
                    <p>
                        Read more about our <strong>CMMI appraisal</strong>.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #3
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Flexibility
                    </h5>
                    <p>
                        Our massive permanent workforce is comprised of designers, developers and PMs. You can hire as many or as few of them as you need - on a per project or retained basis.
                    </p>
                    <p>
                        This flexibility means that you’re never paying for skills and time that you’re not using.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #4
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        In-house expertise
                    </h5>
                    <p>
                        Every one of our <strong>1,000+</strong> designers, developers and project managers in the UK, USA and Worldwide are directly employed by us, and they work in offices that are owned by us.
                    </p>
                    <p>
                        This enables us to ensure continuity of knowledge and in fact, many of our team members have been working with the same clients for years - maintaining consistently high quality, reliability and efficiency at all times.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #5
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Security & confidentiality
                    </h5>
                    <p>
                        Your contract of engagement is with our UK company (DotSquares Ltd), so our liability to you is governed and protected by UK law.
                    </p>
                    <p>
                        This is a very important detail that sets us apart from many offshoring companies. Furthermore, all Intellectual Property Rights & source code are yours, forever.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #6
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        The original, and best
                    </h5>
                    <p>
                        We’ve been servicing UK businesses like yours with offshore teams for <strong>21 years</strong>. In fact, we were one of the first companies to set up this offshore business model, back in 2002. Since then we’ve completed over <strong>20,000 projects</strong> (at last count, and we are still growing!) Our scalability provides you with the best talent backed up by guarantees and consumer protection, whilst our attention to detail, perfectionism and personal service still makes every customer feel very special indeed.
                    </p>
                </div>
            </Col>
        </Row>
    </>


    const smmExperties = <>
        <Container>
            <Row>
                <Col>
                    <h3 className='center font-bold'>Our Social Media Marketing Expertise Also Include</h3>

                    <ul className={styles.mservice}>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" /> SIMPLE DEVELOPMENT PROCESS </li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" /> HIGH PERFORMANCE  </li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" /> ELIMINATES COMPLEXITY </li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" />  SAVES TIME</li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" />   HIGH SPEED </li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" />   IMPROVES FLEXIBILITY</li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" /> STRONG CONSISTENCY</li>
                        <li> <Image quality={75} src={mobilearrow2} alt="bitswits" /> COST EFFECTIVE MODEL</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>

    const data =
        <>

            <section className={dataStyles.marketingExpertise}>
                <Container className='pb-5'>
                    <Row className='pb-5'>
                        <Col>

                            <h3 className='center font-bold'>Why MongoDB Development?</h3>
                            <p className='center mb-5'>Everything about MongoDB is amazing – these benefits do all the talking.</p>

                            <ul className={dataStyles.mservice}>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" />   SIMPLE DEVELOPMENT PROCESS </li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" /> HIGH PERFORMANCE  </li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" /> ELIMINATES COMPLEXITY</li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" />   SAVES TIME</li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" />   HIGH SPEED </li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" />   IMPROVES FLEXIBILITY</li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" />  STRONG CONSISTENCY</li>
                                <li> <Image quality={75} src={mobilearrow1} alt="bitswits" />   COST EFFECTIVE MODEL</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>



    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center '>
                        Enterprise <span className='grdiant'>Java Development</span>
                    </h3>
                    <p className='mb-5 text-center'>We help organisations to build custom enterprise Java development solutions that are capable of transforming core
                        operations and scaling new opportunities which boost the business growth efficiently & consistently.</p>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones1} className='img-fluid me-auto mb-3 greyscale' />
                        <h5 className="font18 fontf font-semibold me-auto">Enterprise Content
                            Management</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones2} className='img-fluid me-auto mb-3 greyscale' />
                        <h5 className="font18 fontf font-semibold me-auto">Data Mining and
                            Business Interlligence</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones3} className='img-fluid me-auto mb-3 greyscale' />
                        <h5 className="font18 fontf font-semibold me-auto">Customer Relationship
                            Management</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones4} className='img-fluid me-auto mb-3 greyscale' />
                        <h5 className="font18 fontf font-semibold me-auto">Middleware</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones5} className='img-fluid me-auto mb-3 greyscale' />
                        <h5 className="font18 fontf font-semibold me-auto">Corporate Portals</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones6} className='img-fluid me-auto mb-3 greyscale' />
                        <h5 className="font18 fontf font-semibold me-auto">Inventory Management</h5>
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
            {/* 
            <Coverage
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


            {/* 
            <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            /> */}

            <WhyBuild
                title="Why Build"
                cards={WhyBuilds}
                text={<> <p className='center'>Java development services from BitsWits include the full cycle of software development from consulting to project support. Our app maintenance and modernization clubbed with integration services forms our complete Java Development suite and by this means our Java programmers can make high-end applications that conform to your plans and business goals.</p> </>}
                subtitle={whytitle}
            />


            <Milestones
                value={value}
            />


            <WhyBuild
                title="Why Build"
                cards={WhyBuilds1}
                text={<> <p className='center'>We are experts in Java consulting and java architects and developers make patterns for design and implementation of a variety of integration solutions. we plug together Java and non-Java application that are custom-built. part of legacy systems. acquired form a 3rd-party vendor.</p> </>}
                subtitle={whytitle1}
            />


            {/* 
            <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'

            /> */}



            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
            />



            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
