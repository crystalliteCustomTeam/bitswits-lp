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
//
import icon33 from '../public/images/sugarcrm/1.png'
import icon34 from '../public/images/sugarcrm/2.png'
import icon35 from '../public/images/sugarcrm/3.png'
//Why Icon
import icon24 from '../public/images/customize/1.png'
import icon25 from '../public/images/customize/2.png'
import icon26 from '../public/images/customize/3.png'
import icon27 from '../public/images/customize/4.png'
import icon28 from '../public/images/customize/5.png'
import icon29 from '../public/images/customize/6.png'






export default function hiresugarcrmdeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire  <span className='grdiant'> SugarCRM Developer </span> </h1>

    const para = <>

       

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Module Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Third Party API Integration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                SugarCRM Bridge
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Theme Customizations
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Manage Marketing & Sales Activities
            </li>

            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Report on all Activities
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Migration Service
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Customize and Extend SugarCRM
            </li>

        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We have an in-house team of over 40+ Dedicated
    SugarCRM Developers</p> </>



    // Build component data






    // MyReason component data

    const reSubtile = <h2 className='font30 black fontf center font-bold black'>Why <span className='grdiant'>SugarCRM</span></h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                        Ease of <br></br>
                        customization
                    </h5>
                    <p>
                        Attract more prospects and create more opportunities with less effort. Engage with your customers.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                        SugarCRM for <br></br>
                        managing operations
                    </h5>
                    <p>
                        Attract more prospects and create more opportunities with less effort.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                        No hidden charges <br></br>
                        & a rocking community
                    </h5>
                    <p>
                        Attract more prospects and create more opportunities with less effort.
                    </p>
                </div>
            </Col>

        </Row>
    </>


    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>Our <span className='grdiant'>SugarCRM Development</span> Services</h2>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Websites <br></br>
                        Development
                    </h5>
                    <p>
                        Website design and development including, themes and extension development, API development, custom eCommerce websites, and responsive website design.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Integration With 3rd <br></br>
                        Party Applications
                    </h5>
                    <p>
                        We integrate websites with third party applications namely POS applications, CRM, ERP, accounting, bookkeeping applications and many more.
                    </p>

                </div>
            </Col>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Performance <br></br>
                        Optimization
                    </h5>
                    <p>
                        We do Performance Optimization to improve loading time, increase your site's ranking, improve user experience and increase your sales.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Data <br></br>
                        Migration

                    </h5>
                    <p>
                        We do Data Migration if you are not satisfied with your online business and wish to improve its performance by adding new features.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Module <br></br>
                        Development
                    </h5>
                    <p>
                        SugarCRM is considered as an important platform for creating e-commerce websites bestowed with reliability,flexibility and unmatched regulation over the all platforms of use.
                    </p>

                </div>
            </Col>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid greyscale' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Customize and <br></br>
                        Extend SugarCRM
                    </h5>
                    <p>
                        Attract more prospects and create more opportunities with less effort. Engage with your customers
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

            <WhyBuild
                title="Why Build"

                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <MyReason
                title="SugarCRM"
                subtitle={reSubtile}
                cards={resCards}
            />







            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
