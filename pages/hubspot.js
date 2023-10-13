import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
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
import CrmExamples from '@/components/CrmExamples';
import WhyBuild from '@/components/WhyBuild';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import icon24 from '../public/images/hubspot/1.png'
import icon25 from '../public/images/hubspot/2.png'
import icon26 from '../public/images/hubspot/3.png'
import icon27 from '../public/images/hubspot/4.png'
import icon28 from '../public/images/hubspot/5.png'
import icon29 from '../public/images/hubspot/6.png'
import icon30 from '../public/images/hubspot/7.png'
import icon31 from '../public/images/hubspot/8.png'
import icon32 from '../public/images/hubspot/9.png'
import icon33 from '../public/images/hubspot/10.png'
import icon34 from '../public/images/hubspot/11.png'
import icon35 from '../public/images/hubspot/12.png'

import reStyles from '@/styles/MyReason.module.css'
import MyReason from '@/components/MyReason';

//Why Icon
import icon1 from '../public/images/wide/1.png'
import icon2 from '../public/images/wide/2.png'
import icon3 from '../public/images/wide/3.png'
import icon4 from '../public/images/wide/4.png'
import icon5 from '../public/images/wide/5.png'
import icon6 from '../public/images/wide/6.png'


export default function hubspot() {





    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire <span className='grdiant'>HubSpot Developers</span>  From Leading HubSpot Agency in UK </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                One Stop Solution to all your HubSpot Solutions
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                HubSpot Consultancy and Integrations
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Team of Dedicated & HubSpot Certified Developers
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                End-to-End HubSpot Implementation
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                24 x 7 support
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Offices in Brighton, London 
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We've delivered HubSpot solutions
        to our delighted HubSpot clients,
        and our experience will guide you to success.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Our <span className='grdiant'>HubSpot Development</span> – Services
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        HubSpot Plugin Development
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        HubSpot Migration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        HubSpot Training
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        HubSpot Implementation
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Landing Pages
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Marketing Analytics
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Social Media
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        HubSpot Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Email Marketing
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Content Management
                        System
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        HubSpot Website Design
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Marketing Automation
                    </h5>
                </div>
            </Col>
        </Row>

    </>



    // Exmple component data

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



const whytitle1 = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Hire <span className='grdiant'>HubSpot Developer</span> UK</h2>

const WhyBuilds1 = <>
    <Row className={`${whyStyles.soluRow} mt-5`}>
        <Col lg={4} md={6} className={whyStyles.soluCol}>
            <div className={`${whyStyles.soluCard}`}>
                <div>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font18 fontf font-regular mt-3'>
                    Truly Agile Process
                    </h5>
                    <p>
                    Our HubSpot CMS developer use the best principles of agile approach to software development and expand it to other project's areas, to ensure the highest efficiency and transparency of our expert's work.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4} md={6} className={whyStyles.soluCol}>
            <div className={`${whyStyles.soluCard}`}>
                <div>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font18 fontf font-regular mt-3'>
                    Wide Range of Experts
                    </h5>
                    <p>
                    Our tech talent network consists of hundreds of on-site HubSpot specialists, off-site collaborators and top software houses. We will pick HubSpot developers perfectly fitted for your company culture, industry and technology.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4} md={6} className={whyStyles.soluCol}>
            <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                <div>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font18 fontf font-regular mt-3'>
                    Hyper growth Approach
                    </h5>
                    <p>
                    Our goal is not to simply deliver the project. We will help you build a hyper growth environment around your technology and your product.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4} md={6} className={whyStyles.soluCol}>
            <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                <div>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font18 fontf font-regular mt-3'>
                    Holistic Business Support
                    </h5>
                    <p>
                    Even the best algorithms are just a part of success. We will provide you with interdisciplinary team of tech business talents, from HubSpot consultants and project managers to sales and marketing experts.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4} md={6} className={whyStyles.soluCol}>
            <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                <div>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font18 fontf font-regular mt-3'>
                    We Grew Incredibly Fast
                    </h5>
                    <p>
                    In the past 21 years, our team of highly skilled marketing, development and design specialists have proven their value to businesses in various industries.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg={4} md={6} className={whyStyles.soluCol}>
            <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                <div>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font18 fontf font-regular mt-3'>
                    We believe in making a difference
                    </h5>
                    <p>
                    Evolving as a global consulting workplace with deep roots. We stand committed to commitment, believe that working together is fun and honest.
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


            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
            />

            <WhyBuild
                cards={WhyBuilds1}
                subtitle={whytitle1}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
