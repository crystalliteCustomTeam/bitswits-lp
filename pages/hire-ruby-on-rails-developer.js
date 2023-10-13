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
import MyReason from '@/components/MyReason';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import icon24 from '../public/images/ruby/ror-icon-1.png'
import icon25 from '../public/images/ruby/ror-icon-2.png'
import icon26 from '../public/images/ruby/ror-icon-3.png'
import icon27 from '../public/images/ruby/ror-icon-4.png'
import icon28 from '../public/images/ruby/ror-icon-5.png'
import icon29 from '../public/images/ruby/ror-icon-6.png'
import icon30 from '../public/images/ruby/ror-icon-7.png'
import icon31 from '../public/images/ruby/ror-icon-8.png'
import icon32 from '../public/images/ruby/ror-icon-1.png'
//
import icon33 from '../public/images/ruby/roricon-1.png'
import icon34 from '../public/images/ruby/roricon-2.png'
import icon35 from '../public/images/ruby/roricon-3.png'



export default function hireRubyDeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire <span className='grdiant'>Ruby on Rails</span> Developers</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Custom web application development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Custom Enterprise Apps
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Web 2.0 Applications & e-Commerce Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Custom Community Websites & Web Portals Creation
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Redesign and enhancement of websites/applications
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Deployment, Installation and Migration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                CMS Development Services
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Maintenance and Upgrade
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b>50+</b> Ruby on Rails portals to <b>50+</b> clients in the last <b>21 years</b>.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Our Solutions
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Web Portal Development</h5>
                    <p>
                        We deliver high performance solutions for different portals like news, entertainment with robust content management and distribution features.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Layout Design</h5>
                    <p>
                        Expect highly fluid layout design from our developers as it ensures responsive websites that adapt to the screen size of the device.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Support & Maintenance</h5>
                    <p>
                        Apart from development services, we are also adept in providing round the clock support and maintenance to our esteemed clients.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Custom Web Application Development</h5>
                    <p>
                        Get high quality custom ROR web and application development services delivered with utmost timeliness by our team of experts at BitsWits.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">E-Commerce Application Development</h5>
                    <p>
                        We develop online storefronts with great features that offer an unmatched shopping experience to the users. We’ve deployed best professionals to handle it all for you.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Installation & CMS Development</h5>
                    <p>
                        When you choose us for ROR based services, be rest assured of hassle-free installation and CMS development – we make sure you’re always given fully support.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Web 2.0 Development</h5>
                    <p>
                        Our development strategy follows the Web 2.0 philosophy to render designs that are more interactive with simple yet powerful UIs.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Application Development</h5>
                    <p>
                        Entrust us with application development for robust, secure, flexible and scalable applications. We’ve got the experience of developing consumer, entertainment and business apps.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Portal Development</h5>
                    <p>
                        Whether you require news portals or a portal for internal business processes, our portal development service is the perfect choice for you, tailor-made according to your expectations.
                    </p>
                </div>
            </Col>
        </Row>

    </>


    // MyReason component data

   
    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>Ruby on Rails Expertise</h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid mb-3' />
                    <h5 className='font20 fontf font-bold line30'>
                        CONSUMER APPS
                    </h5>
                    <p>
                        We implement your idea to yield reality, creating engaging Rails-based consumer apps that help you drive sales and communicate your brand, constantly improving customer satisfaction, loyalty and trust.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid mb-3' />
                    <h5 className='font20 fontf font-bold line30'>
                        BUSINESS APPS
                    </h5>
                    <p>
                        BitsWits uses Rails to deliver smart and cost-efficient web solutions that reorganize, integrate and automate your diverse business processes across the company, no matter its size.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid mb-3' />
                    <h5 className='font20 fontf font-bold line30'>
                        ENTERTAINMENT APPS
                    </h5>
                    <p>
                        Our team uses Ruby’s extensible tool chain in building scalable entertainment apps with game-friendly interfaces, by leveraging Gosu, G3DRuby and Chingu to render fast OpenGL accelerated graphics.
                    </p>
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


            <MyReason
                title="Expertise"
                subtitle={reSubtile}
                cards={resCards}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />



            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
