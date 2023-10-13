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
import icon24 from '../public/images/side/1.png'
import icon25 from '../public/images/side/2.png'
import icon26 from '../public/images/side/3.png'
import icon27 from '../public/images/side/4.png'
import icon28 from '../public/images/side/5.png'
import icon29 from '../public/images/side/6.png'
import icon30 from '../public/images/side/7.png'
import icon31 from '../public/images/side/8.png'

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

export default function hirereactnativedeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our experienced in-house
    <span className='grdiant'> React Native developers </span>
    from just $20/hr</h1>

    const para = <>

        <p className='black fontf font-medium line30'>Affordable, high quality salesforce solutions from leading salesforce partners in the UK.</p>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Open Source
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Rapid Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Expandable Functionality
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Versatile
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Rich Ecosystem
            </li>

        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>Did you know? We have a dedicated
    permanent React Native team that have been
    working with React since its inception in 2015.</p> </>



    // Build component data










    // experts  component data

    const experttitle = <h4 className='font30 black fontf font-bold line60 black text-center'> <span className='grdiant'>React Native</span> Services
    </h4>
  

    const experts = <>
        <Container>
            <Row className={`${expertStyle.expertRow} justify-content-evenly`}>
                <Col lg={4}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b1} alt='BitsWits' className='img-fluid' />
                        <h4>MOBILE APP SUPPORT
& MAINTENANCE</h4>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b2} alt='BitsWits' className='img-fluid' />
                        <h4>HIRE REACT NATIVE
DEVELOPERS</h4>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b3} alt='BitsWits' className='img-fluid' />
                        <h4>SERVER SIDE APIS
FOR MOBILE</h4>
                    </div>
                </Col>


                <Col lg={4}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b4} alt='BitsWits' className='img-fluid' />
                        <h4>HIRE REACT NATIVE
DEVELOPMENT TEAM</h4>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b5} alt='BitsWits' className='img-fluid' />
                        <h4>AGILE
DEVELOPMENT</h4>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>MINIMUM VIABLE
PRODUCT</h4>
                    </div>
                </Col>
              
            </Row>
        </Container>
    </>




const whytitle1 = <h2 className='font30 black fontf font-bold line60 black text-center mb-1'>Reap the benefits of <span className='grdiant'>
React Native Solutions </span></h2>



    const WhyBuilds1 = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Open source
                    </h5>

                    <p>Harnesses the power of distributed peer review and transparency to create high-quality, flexible and secure software at lower cost.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Rapid Development
                    </h5>

                    <p>Developing applications for iOS and Android now much faster as much as by 30%. Vast library of React components available under open source.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Re-usable code
                    </h5>

                    <p>Share a single codebase between both iOS and Android.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Flexibility

                    </h5>
                    <p>With React Native, we have the flexibility to write native code at any point.</p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Rich ecosystem
                    </h5>

                    <p>Easy to write components that are similar in functionality but adapted to the respective operating systems.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Quicker iteration
                    </h5>

                    <p>Code is designed, developed and tested until there is a fully functional software application ready to be deployed to customers.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    React
                    </h5>

                    <p>Declaratively define what your view should look like given some input data.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Live updates

                    </h5>
                    <p>No more waiting for approvals from the app store for your app updates.</p>

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
