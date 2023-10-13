import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import reStyles from '@/styles/MyReason.module.css'
import expertStyle from '@/styles/Experts.module.css'
import crmstyles from '@/styles/CRMExperts.module.css'
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
import CRMExperts from '@/components/CRMExperts';
import MyReason from '@/components/MyReason';
import CrmExamples from '@/components/CrmExamples';
import Experts from '@/components/experts';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon16 from '../public/images/wordpress/wordpress-img3.png'
import icon17 from '../public/images/wordpress/wordpress-img4.png'
import icon18 from '../public/images/wordpress/wordpress-img5.png'
import icon19 from '../public/images/wordpress/wordpress-img6.png'
import icon20 from '../public/images/wordpress/wordpress-img7.png'
import icon21 from '../public/images/wordpress/wordpress-img8.png'
import icon22 from '../public/images/wordpress/wordpress-img9.png'
import icon23 from '../public/images/wordpress/wordpress-img10.png'
//
import b1 from '../public/images/wordpress/adv-wpress1.png'
import b2 from '../public/images/wordpress/adv-wpress2.png'
import b3 from '../public/images/wordpress/adv-wpress3.png'
import b4 from '../public/images/wordpress/adv-wpress4.png'
//
import slide1 from '../public/images/crmDev/crmTesti1.png'
import slide2 from '../public/images/crmDev/crmTesti2.png'
import slide3 from '../public/images/crmDev/crmTesti3.png'
import slide4 from '../public/images/crmDev/crmTesti4.png'
import slide5 from '../public/images/crmDev/crmTesti5.png'
import slide6 from '../public/images/crmDev/crmTesti6.png'


export default function wordpressdevelopment() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>Leading <span className='grdiant'> WordPress</span> Development Agency In UK</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Theme Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Website Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Extension Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Multivendor solutions</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Version Upgrades Services</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Migration Services</li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b>2000+</b> Websites to <b>1500+</b> clients in the last <b>21 years</b>.</p> </>




    // CRMExpert component data

    const crmtitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Our <span className='grdiant'>WordPress</span> Development Services
    </h2>

    const crmCards = <>
        <Row className={`${crmstyles.soluRow} mt-5`}>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            Wordpress Website Development
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            Wordpress Custom Theme Development
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            Wordpress Multi-Vendor Solutions
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            PSD To WordPress Conversion
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon20} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            Wordpress Plugin Development
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            Wordpress Migration Services
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            Wordpress Multisite Development
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.sizImg} ${crmstyles.soluCardBR} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div>
                        <h5 className='font20 fontf font-bold line30'>
                            WordPress Maintenance And Support
                        </h5>
                        <p>
                            We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>



    // experts  component data

    const experttitle = <h4 className='font40 black fontf font-bold line60 black text-center'>Things We Like About
        <span className='grdiant'> WordPress</span>
    </h4>

    const experts = <>
        <Container>
            <Row className={`${expertStyle.expertRow} justify-content-center`}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b1} alt='BitsWits' className='img-fluid' />
                        <h4>User-Friendly Interface</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b2} alt='BitsWits' className='img-fluid' />
                        <h4>Enhanced Security</h4>
                    </div>
                </Col>
            </Row>
            <Row className={`${expertStyle.expertRow} mt-4 justify-content-center`}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b3} alt='BitsWits' className='img-fluid' />
                        <h4>Seo-Friendly</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b4} alt='BitsWits' className='img-fluid' />
                        <h4>Scalability</h4>
                    </div>
                </Col>

            </Row>
        </Container>
    </>



    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>Why
        <span className='grdiant'> BitsWits</span> Is A Leading WordPress Development Agency London?</h2>

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

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>WordPress Development</span>
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Seizethemarket</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Event Calendar</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Journey CRM</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>YouCall-it.com</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Risk Assessor Lite</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>ICAEW Members</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your Wordpress requirements </>

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


            <CRMExperts
                cards={crmCards}
                subtitle={crmtitle}
            />


            <Experts
                cards={experts}
                subtitle={experttitle}
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
