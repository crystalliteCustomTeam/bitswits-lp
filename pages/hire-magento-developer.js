import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import markstyles from '@/styles/Marketingexpertise.module.css'
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
import WhyBuild from '@/components/WhyBuild';
import MarketingExpertise from '@/components/MarketingExpertise';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import mobilearrow2 from '../public/images/Include/star.jpg'
//Why Icon
import icon24 from '../public/images/hiremagento/m2-icon-01.png'
import icon25 from '../public/images/hiremagento/m2-icon-02.png'
import icon26 from '../public/images/hiremagento/m2-icon-03.png'
import icon27 from '../public/images/hiremagento/m2-icon-04.png'
import icon28 from '../public/images/hiremagento/m2-icon-05.png'
import icon29 from '../public/images/hiremagento/m2-icon-06.png'
import icon30 from '../public/images/hiremagento/m2-icon-07.png'
import icon31 from '../public/images/hiremagento/m2-icon-08.png'
//
import slide1 from '../public/images/eComDev/screenshot_1.png'
import slide2 from '../public/images/eComDev/screenshot_2.png'
import slide3 from '../public/images/eComDev/screenshot_3.png'
import slide4 from '../public/images/eComDev/screenshot_4.png'
import slide5 from '../public/images/eComDev/screenshot_5.png'
import slide6 from '../public/images/eComDev/screenshot_6.png'
import slide7 from '../public/images/eComDev/screenshot_7.png'
import slide8 from '../public/images/eComDev/screenshot_8.png'
import slide9 from '../public/images/eComDev/screenshot_9.png'
import slide10 from '../public/images/eComDev/screenshot_10.png'



export default function hireMagentoDeveloper() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Affordable, high-quality <span className='grdiant'>Magento 2</span> web design & development services</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Theme design & development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Custom extensions & modules
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Multi-Vendor Solutions
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Migration Services
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>Since becoming a Magento Expert we have completed more than <strong>200+</strong> Magento customisations</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        A Look at The <span className='grdiant'>Magento Services</span> We Have In Store For You
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Websites Design And Development</h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Integration With 3rd Party Applications</h5>
                    <p>
                        We integrate websites with third party applications namely POS applications, CRM, ERP, accounting, bookkeeping applications and many more.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Performance Optimization</h5>
                    <p>
                        We do Performance Optimization to improve loading time, increase your site's ranking, improve user experience and increase your sales.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Search Engine Optimization For Online Stores</h5>
                    <p>
                        We provide Search Engine Optimization (SEO) for Google, Yahoo, Bing and other search engines.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Marketplace</h5>
                    <p>
                        Our experts develop Marketplace in the framework where sellers can sell their own products and we also provide integration of secure payment gateways in your e-Commerce website.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Data Migration</h5>
                    <p>
                        We do Data Migration if you are not satisfied with your online business and wish to improve its performance by adding new features.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Theming</h5>
                    <p>
                        There is quite a buzz lately around Responsive Web Design (RWD) which means using the latest standards to design a site that adapts/optimizes to many different visiting devices (e.g. computers, tablets, smartphones)...
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Module Development</h5>
                    <p>
                        Magento is considered as an important platform for creating e-commerce websites bestowed with reliability, flexibility and unmatched regulation over the all platforms of use.
                    </p>
                </div>
            </Col>
        </Row>

    </>


    // Benefits component data

    const smmExperties = <>
        <Container className='mb-5'>
            <Row>
                <Col>
                    <h3 className='font40 font-bold center mb-3'>BitsWits Dotsquares - Certified Magento Partner and Development Agency in UK!</h3>
                    <p className='font18 font-regular center mb-5'>With 20+ years of experience, We are BitsWits, a company of Dotsquares Ltd, We are certified Magento developers and Adobe partners. We’ve been working with Magento since it was launched in 2008. Here are some of our real, independently verifiable stats:</p>
                    <ul className={markstyles.mservice}>
                        <li>
                            <Image quality={75} src={mobilearrow2} alt="bitswits" />
                            Currently, <strong>52 members</strong> of our <strong>1,000</strong>-strong permanent workforce are Magento Certified
                        </li>
                        <li>
                            <Image quality={75} src={mobilearrow2} alt="bitswits" />
                            At last count, we'd built <strong>1287 Magento stores</strong> - including over <strong>100 stores</strong> built in 2023 <strong>alone</strong>
                        </li>
                        <li>
                            <Image quality={75} src={mobilearrow2} alt="bitswits" />
                            We've developed and launched <strong>109 Magento Extensions</strong>
                        </li>
                        <li>
                            <Image quality={75} src={mobilearrow2} alt="bitswits" />
                            Need a multi-vendor solution? No problem! We've successfully completed <strong>53 multi-vendor stores</strong>
                        </li>
                        <li>
                            <Image quality={75} src={mobilearrow2} alt="bitswits" />
                            We have designed & built over <strong>1460 Magento templates</strong>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>


    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Magento work</span></h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>White Wallzy Website</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Hyjo</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Raamdecoratiesale</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Man Company</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Fisher & Paykel</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Healthy Peach</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Cuddledown</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Gentlemen Of Salvage</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Royal Hamam</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Manduka</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Want one like this? </>



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


            <MarketingExpertise
                data={smmExperties}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
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
