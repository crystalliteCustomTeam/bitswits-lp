import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import markstyles from '@/styles/Marketingexpertise.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import portstyles from '@/styles/Portal.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MarketingExpertise from '@/components/MarketingExpertise';
import WhyBuild from '@/components/WhyBuild';
import Portal from '@/components/Portal';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import mobilearrow2 from '../public/images/Include/star.jpg'
//
import icon22 from '../public/images/etpSolutions/etp-icon1.png'
import icon23 from '../public/images/etpSolutions/etp-icon2.png'
import icon24 from '../public/images/etpSolutions/etp-icon3.png'
import icon25 from '../public/images/etpSolutions/etp-icon4.png'
import icon26 from '../public/images/etpSolutions/etp-icon5.png'
import icon27 from '../public/images/etpSolutions/etp-icon6.png'
import icon28 from '../public/images/etpSolutions/etp-icon7.png'
import icon29 from '../public/images/etpSolutions/etp-icon8.png'
//
import sevcImg from '../public/images/etpSolutions/serviceimg.png'
import reStyles from '@/styles/MyReason.module.css'
import MyReason from '@/components/MyReason';
import IndustriesInt from '@/components/IndustriesInt'
import IndusStyle from '@/components/IndustriesInt'
import Link from 'next/link';

//
import icon38 from '../public/images/industryInt/idu-1.png'
import icon39 from '../public/images/industryInt/idu-2.png'
import icon40 from '../public/images/industryInt/idu-3.png'
import icon41 from '../public/images/industryInt/idu-4.png'
import icon42 from '../public/images/industryInt/idu-5.png'
import icon43 from '../public/images/industryInt/idu-6.png'
import icon44 from '../public/images/industryInt/idu-7.png'
import icon45 from '../public/images/industryInt/idu-8.png'
import icon46 from '../public/images/industryInt/idu-9.png'
import icon47 from '../public/images/industryInt/idu-10.png'
import exmplstyles from '@/styles/CrmExamples.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CrmExamples from '@/components/CrmExamples';

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



export default function ecommerencedevelopment() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Expert <span className='grdiant'> Node.JS Developers </span>
    Ready To Start - From Just $20/hr</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Node.JS API Development & Integration </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Web/Mobile App UI/UX Development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> AJAX Development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Plug-In Development </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Node.JS Consulting, Maintenance & More </li>
           
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> Our dedicated in-house Node.JS team
    have been working with Node.JS since the
    beginning. We've developed hundreds of solutions
    using Node.JS including chat applications, business
    solutions, eCommerce solutions and more... </p> </>



    // Build component data




    // Portal component data

    const portSec = <>
        <Container>
            <Row className={portstyles.portRow}>
                <Col lg={6} className='mx-auto'>
                    <Image quality={75} src={sevcImg} alt='BitsWits' className='img-fluid' />
                </Col>
                <Col lg={6} className='mx-auto'>
                    <h3 className='font-bold mb-3'>Working with us you can also
                        expect to receive…</h3>
                    <ul>
                        <li>Development of highly event driven NodeJS web applications</li>
                        <li>Customized Node.js web development services</li>
                        <li>Development of plugins and portals</li>
                        <li>Development of Real-time business applications with NodeJS</li>
                        <li>Development of Chat applications</li>
                        <li>Development of Online portals, e-commerce, shopping cart</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>


    // Benefits component data



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




    const Industries = <>
        <Row className={`${IndusStyle.soluRow} mt-3 text-center justify-content-center align-items-center`}>
            <h4 className='text-center font30 font-bold'>Industries we're proud to serve
            </h4>
            <p>It is an application designed for one of the world's most diverse casino-entertainment providers "Cromwell Caesars Entertainment". The app is used to manage the growing needs of their guests, by incorporating the existing hotel systems into a handheld device, which offers guests an in-house digital access to complimentary and paid services for proactive assistance.
            </p>
            <Col lg={12}>
                <div className={`${IndusStyle.indusblk}`}>
                    <ul>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon38} alt="Real Estate" />
                                <p>Real Estate </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon39} alt="Travel &amp; Hospitality" />
                                <p> Travel &amp; Hospitality </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon40} alt="B2B Solutions" />
                                <p>  B2B Solutions  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon41} alt="Travel &amp; Hospitality" />
                                <p>  Healthcare  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon42} alt="Travel &amp; Hospitality" />
                                <p>   Education & E-Learning   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon43} alt="Travel &amp; Hospitality" />
                                <p>   Banking & Finance  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon44} alt="Travel &amp; Hospitality" />
                                <p>   Startup Solutions   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon45} alt="Travel &amp; Hospitality" />
                                <p>    Startup Solutions </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon46} alt="Travel &amp; Hospitality" />
                                <p>   Media & Publishing    </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon47} alt="Travel &amp; Hospitality" />
                                <p>   Food & Drink   </p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </Col>
        </Row>
    </>



    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Scroll down to see examples of our work
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

    const exmplText = <> Let's talk about your Requirements </>




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


            <IndustriesInt
                IndustriesInt={Industries}
            />



            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
            />

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
