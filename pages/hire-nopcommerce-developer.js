import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import reStyles from '@/styles/MyReason.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import IndustriesInt from '@/components/IndustriesInt'
import IndusStyle from '@/components/IndustriesInt'
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
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
import icon1 from '../public/images/nopcommerce/nocom-icon1.png'
import icon2 from '../public/images/nopcommerce/nocom-icon2.png'
import icon3 from '../public/images/nopcommerce/nocom-icon3.png'
import icon4 from '../public/images/nopcommerce/nocom-icon4.png'
import icon5 from '../public/images/nopcommerce/nocom-icon5.png'
import icon6 from '../public/images/nopcommerce/nocom-icon6.png'
import icon7 from '../public/images/nopcommerce/nocom-icon7.png'
import icon8 from '../public/images/nopcommerce/nocom-icon8.png'
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


export default function hireNopcommerceDeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Our Expert <span className='grdiant'>NopCommerce Developers</span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Application Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Plugin Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Customized Solutions
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Responsive Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Marketing Aplication Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Multi-vendor and Store Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Payment Integration
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b>40+</b> nopCommerce portals to <b>30+</b> clients in the last <b>9 years</b>.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Why Should You Opt For nopCommerce?
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        e-Commerce
                        Applications
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Multi-Store
                        Application
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Multi –Vendor
                        Application
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Checkout
                        Options
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Payment
                        Methods
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Maintenance &
                        Support
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon7} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Plugin & Theme
                        Integration
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon8} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-regular mt-3 line30">
                        Upgrade &
                        Migration
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>
                </div>
            </Col>
        </Row>
    </>


    // Industry component data

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



    // Build component data

    const whyChosetitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Our Solutions
    </h2>

    const WhyChoseBuilds = <>
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
                bannerimg={banImg}
                infopara={infopara}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <IndustriesInt
                IndustriesInt={Industries}
            />


            <WhyBuild
                cards={WhyChoseBuilds}
                subtitle={whyChosetitle}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
