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
import icon24 from '../public/images/mern/1.png'
import icon25 from '../public/images/mern/2.png'
import icon26 from '../public/images/mern/3.png'
import icon27 from '../public/images/mern/4.png'
import icon28 from '../public/images/mern/5.png'
import icon29 from '../public/images/mern/6.png'
import icon30 from '../public/images/mern/7.png'
import icon31 from '../public/images/mern/8.png'
import icon32 from '../public/images/mern/9.png'
import icon333 from '../public/images/mern/10.png'
import icon343 from '../public/images/mern/11.png'
import icon353 from '../public/images/mern/12.png'

//
import icon33 from '../public/images/analytics/1.png'
import icon34 from '../public/images/analytics/2.png'
import icon35 from '../public/images/analytics/3.png'
import icon36 from '../public/images/analytics/4.png'
import icon37 from '../public/images/analytics/5.png'
import icon38 from '../public/images/analytics/6.png'

import expertStyle from '@/styles/Experts.module.css'
import Experts from '@/components/experts';
//
import b1 from '../public/images/symfony/jobportal-1.png'
import b2 from '../public/images/symfony/jobportal-2.png'
import b3 from '../public/images/symfony/jobportal-3.png'
import b4 from '../public/images/symfony/jobportal-4.png'
import b5 from '../public/images/symfony/jobportal-5.png'
import b6 from '../public/images/symfony/jobportal-6.png'

export default function hiremeanstackdeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>  Hire <span className='grdiant'>MEAN Stack</span> Developers </h1>

    const para = <>

      

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Website Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Enterprise Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Web Applications Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                ERP Development

            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                CMS Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Maintenance & Support
            </li>

        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than 50+ MEAN Stack
    applications to 35+ clients in the last 4 years.</p> </>



    // Build component data










    // experts  component data

    const experttitle = <h4 className='font30 black fontf font-bold line60 black text-center'> Web Applications with<span className='grdiant'> MEAN Stack </span> 
    </h4>


    const experts = <>
        <Container>
            <Row className={`${expertStyle.expertRow} justify-content-evenly`}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b1} alt='BitsWits' className='img-fluid' />
                        <h4>ENTERPRISE
SOFTWARE</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b2} alt='BitsWits' className='img-fluid' />
                        <h4>SOCIAL MEDIA</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b3} alt='BitsWits' className='img-fluid' />
                        <h4>ECOMMERCE</h4>
                    </div>
                </Col>


                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b4} alt='BitsWits' className='img-fluid' />
                        <h4>PAYMENT
PROCESSING</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b5} alt='BitsWits' className='img-fluid' />
                        <h4>REAL-TIME
SERVICES</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>GAMES</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>LOGISTICS</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>IMAGE & VIDEO
UPLOAD</h4>
                    </div>
                </Col>
              


            </Row>
        </Container>
    </>




    const whytitle1 = <h2 className='font30 black fontf font-bold line60 black text-center mb-1'> <span className='grdiant'> MEAN Stack  </span>  Development Services </h2>



    const WhyBuilds1 = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Web Services and
API Development
                    </h5>

             


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Android Application
Development for Enterprise
                    </h5>

                   


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Personalized Business
Intelligence and Reporting
                    </h5>

                   


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    CMS Development

                    </h5>
                  

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    ERP Development
                    </h5>

                  


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Migration and Porting
                    </h5>

                 

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Maintenance & Support
                    </h5>

                  


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Web Development

                    </h5>
                   

                </div>
            </Col>



            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Responsive Web
App Development
                    </h5>

                  


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon333} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Real Time Chat
                    </h5>

                 

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon343} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    3rd Party API's
                    </h5>

                  


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon353} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Payment Gateway
Integration

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




            <Experts
                cards={experts}
                subtitle={experttitle}

            />

            <WhyBuild
                title="Why Build"
                cards={WhyBuilds1}
                subtitle={whytitle1}
            />



            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
