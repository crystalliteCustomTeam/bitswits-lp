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
import icon24 from '../public/images/design/1.png'
import icon25 from '../public/images/design/2.png'
import icon26 from '../public/images/design/3.png'
import icon27 from '../public/images/design/4.png'
import icon28 from '../public/images/design/5.png'
import icon29 from '../public/images/design/6.png'
//
import slide1 from '../public/images/spotlight/1.png'
import slide2 from '../public/images/spotlight/2.png'
import slide3 from '../public/images/spotlight/3.png'
import slide4 from '../public/images/spotlight/4.png'
import slide5 from '../public/images/spotlight/5.png'
import slide6 from '../public/images/spotlight/6.png'
import slide7 from '../public/images/spotlight/7.png'
import slide8 from '../public/images/spotlight/8.png'
import slide9 from '../public/images/spotlight/9.png'
import slide10 from '../public/images/spotlight/10.png'
import slide11 from '../public/images/spotlight/11.png'
import slide12 from '../public/images/spotlight/12.png'
import slide13 from '../public/images/spotlight/13.jpg'
import slide14 from '../public/images/spotlight/14.png'
import slide15 from '../public/images/spotlight/15.png'
import slide16 from '../public/images/spotlight/16.png'
import slide17 from '../public/images/spotlight/17.png'
import slide18 from '../public/images/spotlight/18.png'
import slide19 from '../public/images/spotlight/19.png'
import slide20 from '../public/images/spotlight/20.png'

import Milestones from '@/components/Milestones';
import milStyles from '@/styles/Milestones.module.css'
import { Container } from 'react-bootstrap'
import milestones1 from '../public/images/milestones/1.png'
import milestones2 from '../public/images/milestones/2.png'
import milestones3 from '../public/images/milestones/3.png'
import milestones4 from '../public/images/milestones/4.png'
import milestones5 from '../public/images/milestones/5.png'
import milestones6 from '../public/images/milestones/6.png'


export default function hireandroidgamedeveloper() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Expert <span className='grdiant'> Native Android Game Developers </span> </h1>

    const para = <>



        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Expert Knowledge of Multiple Devices </li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> The Latest Game Technology Stacks</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Complete Confidentially</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Efficient Project Management</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>   Custom Engagement Models</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Reliable Technical Support</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>   Dedicated Android Game Developers</li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-3'>You can trust us: We've successfully delivered over 250 games to our wonderful clients (including more than 120 Android or multi-platform games).</p> </>



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


    // Exmple component data

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our Work In The Spotlight!
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>High Tournaments</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Roses FM</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Open Door TBA</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Camera Click Assistant</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop - Admin</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>


            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Book Review</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Wishy Washy Delivery Boy</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Wishy Washy</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Shoppy Mall</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Card Maker Hub</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide11} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>GS1 Barcode Generator</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide12} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>AudioBooster</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide13} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>DailyStep English</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide14} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Radio Tune</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide15} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Third Eye</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide16} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Location Finder</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide17} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Book a Builder</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide18} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Take5</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide19} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Fifit</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide20} className="img-fluid" />
                </div>
            </div>

        </Slider>
    </>

    const exmplText = <> Want one like this? </>




    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='center font-bold mb-5' >Benefits of <span className='grdiant'> Android Game Development</span> </h3>

                </Col>
            </Row>
            <Row>
                <Col xl={4} className='borderbottom'>
                    <div className=' pt-5 pb-5'>
                        <Image quality={75} src={milestones1} className='img-fluid mb-4 greyscale' />
                        <h3 className='font20 font-semi-bold black mb-2'>App Monetization with <br></br>
higher Results</h3>
                        <p className=''>Engaged in offering effective and accurate Search Engine Optimization techniques to our valuable clients.</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo borderbottom'>
                    <div className=' pt-5 pb-5'>
                        <Image quality={75} src={milestones2} className='img-fluid mb-4 greyscale' />
                        <h3 className='font20 font-semi-bold black mb-2'> Multiple Channels for <br></br>
Submission </h3>
                        <p className=''>Regularly incorporating new technologies within the company for improved results.</p>
                    </div>

                </Col>
                <Col xl={4} className='mongo borderbottom'>
                    <div className=' pt-5 pb-5'>
                        <Image quality={75} src={milestones3} className='img-fluid mb-4 greyscale' />
                        <h3 className='font20 font-semi-bold black mb-2'>Open-Source <br></br>
Advantages</h3>
                        <p className=''>Presenting sustainability and implementation of new strategies which is the key policy of BitsWits.</p>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className=' pt-5 pb-5'>
                        <Image quality={75} src={milestones1} className='img-fluid mb-4 greyscale' />
                        <h3 className='font20 font-semi-bold black mb-2'>Larger Audience <br></br>
Reach</h3>
                        <p className=''>Engaged in offering effective and accurate Search Engine Optimization techniques to our valuable clients.</p>
                    </div>
                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-5 pb-5'>
                        <Image quality={75} src={milestones2} className='img-fluid mb-4 greyscale' />
                        <h3 className='font20 font-semi-bold black mb-2'>Multiple Platform</h3>
                        <p className=''>Regularly incorporating new technologies within the company for improved results.</p>
                    </div>

                </Col>
                <Col xl={4} className='mongo'>
                    <div className=' pt-5 pb-5'>
                        <Image quality={75} src={milestones3} className='img-fluid mb-4 greyscale' />
                        <h3 className='font20 font-semi-bold black mb-2'>World Class <br></br>
AR Experience</h3>
                        <p className=''>Presenting sustainability and implementation of new strategies which is the key policy of BitsWits.</p>
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

            <Milestones
                value={value}
            />


            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
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
