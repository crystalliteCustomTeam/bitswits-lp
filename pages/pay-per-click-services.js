import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
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
import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
import { Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
//Why Icon
import icon24 from '../public/images/ways/1.png'
import icon25 from '../public/images/ways/2.png'
import icon26 from '../public/images/ways/3.png'
import icon27 from '../public/images/ways/4.png'
import icon28 from '../public/images/ways/5.png'
import icon29 from '../public/images/ways/6.png'
import icon30 from '../public/images/ways/7.png'
import icon31 from '../public/images/ways/8.png'
import icon32 from '../public/images/ways/9.png'
import icon33 from '../public/images/ways/10.png'
import icon34 from '../public/images/ways/11.png'
import icon35 from '../public/images/ways/12.png'
import ppcimg from '../public/images/ppc/ppcbigimg.png'

import reStyles from '@/styles/MyReason.module.css'

import icon16 from '../public/images/phpdev/phpdev-tec1.png'
import icon17 from '../public/images/phpdev/phpdev-tec2.png'
import icon18 from '../public/images/phpdev/phpdev-tec3.png'
import icon19 from '../public/images/phpdev/phpdev-tec4.png'
import icon20 from '../public/images/phpdev/phpdev-tec5.png'
import icon21 from '../public/images/phpdev/phpdev-tec6.png'
import icon22 from '../public/images/phpdev/phpdev-tec7.png'
import icon23 from '../public/images/phpdev/phpdev-tec8.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'
import expStyles from '@/styles/MyExpertise.module.css'
import MyExpertise from '@/components/MyExpertise';
//
import CrmExamples from '@/components/CrmExamples';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../public/images/seo/1.jpg'
import slide2 from '../public/images/seo/2.png'
import slide3 from '../public/images/seo/3.png'
import slide4 from '../public/images/seo/4.png'
import slide5 from '../public/images/seo/5.png'
import slide6 from '../public/images/seo/6.png'
import slide7 from '../public/images/seo/7.png'
import slide8 from '../public/images/seo/8.jpg'
import slide9 from '../public/images/seo/9.jpg'
import slide10 from '../public/images/seo/10.jpg'
import slide11 from '../public/images/seo/11.jpg'
import slide12 from '../public/images/seo/12.jpg'
import exmplstyles from '@/styles/CrmExamples.module.css'




export default function payperclickservices() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> PAY PER CLICK SERVICES </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Drive Website Traffic </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Quick, Attainable Results </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Intuitive Metrics </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Measurable Results </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Enhances Other Marketing Efforts </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>High-Level Brand Exposure </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Increased Search Engine Visibility </li>
        </ul>
    </>


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



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>Ways We Target Improvements</h2>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        CRO-Conversion
                        Rate Optimization
                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Paid Search
                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Bing Paid Search
                    </h5>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Remarketing
                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Display
                        Advertising

                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Shopping
                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Dynamic
                        Product Remarketing
                    </h5>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Video
                        Advertising
                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Google Search
                        Remarketing

                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Amazon/Ebay 3rd
                        Party Seller Central
                    </h5>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Gmail Ads
                    </h5>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Analytics And
                        Attribution Support
                    </h5>


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




    const expCards = <>
        <Row className={`${expStyles.soluRow} ${expStyles.phpdev} mt-5`}>
            <Col lg={3} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <h5 className='font20 fontf font-bold line30'>
                        Strategy & Message
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Identify your market, customers and competitors.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Determine the message and calls-to-action you’re trying to convey. Consider how you will convince customers to choose you over your competitors.

                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Determine your campaign goals and KPIs. More importantly, ensure they align!
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={3} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.mblR}`}>

                    <h5 className='font20 fontf font-bold line30'>
                        Campaign
                        Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Conduct basic keyword research
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Confirm all display URLs and destination URLs
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Generate list of negative keywords to deter the wrong type of visitors.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Determine and set your daily monthly budget.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={3} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.mblM}`}>

                    <h5 className='font20 fontf font-bold line30'>
                        Landing Page
                        Development
                    </h5>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Create a landing page customized to your campaign message, goal and KPIs.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Ensure consistent messaging between keywords and your landing page to generate a higher Quality Score.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Ensure your landing page is responsive if you plan on targeting mobile users
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={3} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} mongo`}>

                    <h5 className='font20 fontf font-bold line30'>
                        Measurement &
                        Tracking
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Conversion tracking MUST be implemented.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Identify extra URL parameters you might need to add for tracking purposes.
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    If you’re incorporating remarketing, be sure to implement the remarketing code in AdWords.
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>


        </Row>
    </>








    // Exmple component data


    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>PPC work</span>
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>A1 Clutches</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Glyfada Beach Villas</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Bali Brasserie Restaurants</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Texas Star hvacr</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Duvet and Pillow</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Diamond Engagement Rings</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Pass Now Intensive Courses</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Mind Body Fitness</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Duvet and Pillow</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Flower Stand Chelsea </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Shirtworks (Tshirt Printing) </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide11} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Narpsuk (Dog Walking Business) </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide12} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your SEO requirements </>


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



            {/* <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            /> */}


            <MyExpertise
                notpost='btnhide'
                cards={expCards}
            />

           

            <WhyBuild
                title="Why Build"

                cards={WhyBuilds}
                subtitle={whytitle}
            />

<div className='center spacingtb'>
                <Image quality={75} src={ppcimg} className='img-fluid' alt='bitswits' />
            </div>


            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
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

            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
