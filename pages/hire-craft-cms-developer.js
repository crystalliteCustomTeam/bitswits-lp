import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import IndusStyle from '@/components/IndustriesInt'
import IndustriesInt from '@/components/IndustriesInt'
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon1 from '../public/images/craft/about-craft-cms-icon1.png'
import icon2 from '../public/images/craft/about-craft-cms-icon2.png'
import icon3 from '../public/images/craft/about-craft-cms-icon3.png'
import icon4 from '../public/images/craft/about-craft-cms-icon4.png'
import icon5 from '../public/images/craft/about-craft-cms-icon5.png'
import icon6 from '../public/images/craft/about-craft-cms-icon6.png'
import icon7 from '../public/images/craft/about-craft-cms-icon7.png'
import icon8 from '../public/images/craft/about-craft-cms-icon8.png'
//
import icon22 from '../public/images/craft/craft-cms-icon1.png'
import icon23 from '../public/images/craft/craft-cms-icon2.png'
import icon24 from '../public/images/craft/craft-cms-icon3.png'
import icon25 from '../public/images/craft/craft-cms-icon4.png'
import icon26 from '../public/images/craft/craft-cms-icon5.png'
import icon27 from '../public/images/craft/craft-cms-icon6.png'
//
import icon35 from '../public/images/industryInt/idu-1.png'
import icon36 from '../public/images/industryInt/idu-2.png'
import icon37 from '../public/images/industryInt/idu-3.png'
import icon38 from '../public/images/industryInt/idu-4.png'
import icon39 from '../public/images/industryInt/idu-5.png'
import icon40 from '../public/images/industryInt/idu-6.png'
import icon41 from '../public/images/industryInt/idu-7.png'
import icon42 from '../public/images/industryInt/idu-8.png'
import icon43 from '../public/images/industryInt/idu-9.png'
import icon44 from '../public/images/industryInt/idu-10.png'



export default function craftDevelopment() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our Leading <br /><span className='grdiant'>Craft CMS</span> Agency UK</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Craft Website Development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Craft Ecommerce Development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Craft CMS Customization
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Craft CMS Plugin Development
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Craft CMS Migration
            </li>
            <li className="font16 fontf font-medium black ">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Craft Maintenance
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>Get a flexible and user-friendly website with our <b>Craft CMS</b> development solutions.</p> </>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our <span className='grdiant'>Craft CMS</span> Solutions</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} justify-content-center mt-5`}>
            <Col lg={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Craft Website
                            Development
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Craft eCommerce
                            Development
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Craft CMS
                            Customization
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Craft CMS
                            Migration
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Craft CMS
                            Plugin Development
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Craft Support
                            and Maintenance
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
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
                                <Image quality={75} src={icon35} alt="Real Estate" />
                                <p>Real Estate </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon36} alt="Travel &amp; Hospitality" />
                                <p> Travel &amp; Hospitality </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon37} alt="B2B Solutions" />
                                <p>  B2B Solutions  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon38} alt="Travel &amp; Hospitality" />
                                <p>  Healthcare  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon39} alt="Travel &amp; Hospitality" />
                                <p>   Education & E-Learning   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon40} alt="Travel &amp; Hospitality" />
                                <p>   Banking & Finance  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon41} alt="Travel &amp; Hospitality" />
                                <p>   Startup Solutions   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon42} alt="Travel &amp; Hospitality" />
                                <p>    Startup Solutions </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon43} alt="Travel &amp; Hospitality" />
                                <p>   Media & Publishing    </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image quality={75} src={icon44} alt="Travel &amp; Hospitality" />
                                <p>   Food & Drink   </p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </Col>
        </Row>
    </>



    // Build component data

    const whySpcltitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Things We Like About <span className='grdiant'>Craft CMS</span></h2>

    const WhySpclBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Easy Customisation
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Live Preview
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Compatibility
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Lightweight
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Enhanced Security
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Easy-to-Update
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon7} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            Lifetime Licence
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image quality={75} src={icon8} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-3'>
                            SEO-Friendly
                        </h5>
                        <p>
                            We can build e-commerce applications with no hesitation and will implement them on custom platforms.
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


            <IndustriesInt
                IndustriesInt={Industries}
            />


            <WhyBuild
                cards={WhySpclBuilds}
                subtitle={whySpcltitle}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
