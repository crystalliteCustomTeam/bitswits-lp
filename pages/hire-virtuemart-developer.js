import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import expStyles from '@/styles/MyExpertise.module.css'
import whyStyles from '@/styles/whyServices.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MyExpertise from '@/components/MyExpertise';
import WhyBuild from '@/components/WhyBuild';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
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
import icon1 from '../public/images/virtuemart/virtue-icon1.png'
import icon2 from '../public/images/virtuemart/virtue-icon2.png'
import icon3 from '../public/images/virtuemart/virtue-icon3.png'
import icon4 from '../public/images/virtuemart/virtue-icon4.png'
import icon5 from '../public/images/virtuemart/virtue-icon5.png'
import icon6 from '../public/images/virtuemart/virtue-icon6.png'
//
import icon16 from '../public/images/virtuemart/vd-img1.png'
import icon17 from '../public/images/virtuemart/vd-img2.png'
import icon18 from '../public/images/virtuemart/vd-img3.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'


export default function virtuemartDeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Expert Senior <br /><span className='grdiant'>VirtueMart Developers</span> From Just $15/hr</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>VirtueMart Customisation </li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>E-Commerce Application Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Migration App to VirtueMart</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Payment Gateway Integration</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Custom Extension Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Theme Development & Integration</li>
        </ul>

    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>80+</strong> VirtueMart Solutions to <strong>70+</strong> clients in last <strong>10 years</strong>.</p> </>




    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        <span className='grdiant'>VirtueMart Solutions</span>  From The Experts - Our Expertise Include
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular line30">Custom Design <br /> Integration</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular line30">Shipping Methods <br /> Integration</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular line30">Web <br /> Services</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular line30">Online Store <br /> Development</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular line30">Third Party <br /> API</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular line30">Nested Category <br /> Support</h5>
                </div>
            </Col>
        </Row>

    </>



    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>VirtueMart Development And Customisation Services</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox} ${expStyles.sizImg}`}>
                        <Image quality={75} src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Design & Development Services
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Theme Development, Customisation & Modification
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Responsive Templates Creation PSD to VirtueMart
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Logo/Banner Creation
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox} ${expStyles.sizImg}`}>
                        <Image quality={75} src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Custom Development
                    </h5>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    VirtueMart Optimisation
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Online Store Customisation
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Customised Shopping Cart
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Product Addition and Data Import
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    HTML to VirtueMart Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Versions Upgrade
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Plugin Development & Customisation
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox} ${expStyles.sizImg}`}>
                        <Image quality={75} src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Integration Services
                    </h5>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    3rd Party Systems Integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Shipping Method Integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    New Theme Integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Facebook Store Integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Payment Gateway Integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Configure Free Shipping or Flat-Rate Shipping
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Valid Schema Markup for Improved SEO Performance
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>



    // Build component data

    const whyChooseTtl = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Choose Us Because
    </h2>

    const WhyChoose = <>
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
                infopara={infopara}
                bannerimg={banImg}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <MyExpertise
                title="Services"
                subtitle={expsubtile}
                cards={expCards}
            />


            <WhyBuild
                cards={WhyChoose}
                subtitle={whyChooseTtl}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
