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

export default function hiresalesforcedeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Custom <span className='grdiant'> Salesforce Development </span> & Implementation</h1>

    const para = <>

    <p className='black fontf font-medium line30'>Affordable, high quality salesforce solutions from leading salesforce partners in the UK.</p>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Salesforce Consultancy and Integrations.
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Automate Your Sales Processes To Grow Customer Base.
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                One-stop Destination for All Salesforce Solutions.
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Registered Salesforce Partner.
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                End-to-End Implementation & Integration.
            </li>
            
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b>50+</b> Ruby on Rails portals to <b>50+</b> clients in the last <b>21 years</b>.</p> </>



    // Build component data

    

   


    // MyReason component data

    const reSubtile = <h2 className='font30 black fontf font-bold black'>Our Salesforce Solutions To Unleash The True <span className='grdiant'>Power Of Salesforce</span> For Your Organisation</h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon33} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                    Sales
                    </h5>
                    <p>
                    <span className='grdiant font-bold'>Salesforce Sales Cloud</span> or SFA is ideal for businesses that wish to automate their sales processes for a growing customer base.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon34} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                    Service
                    </h5>
                    <p>
                    Get your customer services rolling with <span className='grdiant font-bold'>Salesforce Sales Cloud</span>. It will streamline the workflows and automate multiple processes.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon35} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                    Marketing
                    </h5>
                    <p>
                    Turn your prospects into customers, and customers into brand promoters by providing them with the best solution at every touchpoint.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon36} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                    Community
                    </h5>
                    <p>
                    Connect all your distributors, manage social communication, and increase your sales, with this one wizard of Oz called <span className='grdiant font-bold'>Salesforce Sales Cloud</span>.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon37} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                    Analytics
                    </h5>
                    <p>
                    Improve your sales with the power of data! The  <span className='grdiant font-bold'>Salesforce Wave Analytics</span> is a great tool to gain useful insights from siloed information centers.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <Image quality={75} src={icon38} alt='BitsWits' className='img-fluid mb-3 greyscale' />
                    <h5 className='font20 fontf font-bold line30'>
                    Apps
                    </h5>
                    <p>
                    With custom AI-Powered apps, we will help you automate multiple business processes while also creating the positive customer experience.
                    </p>
                </div>
            </Col>
        </Row>
    </>



   // experts  component data

   const experttitle = <h4 className='font30 black fontf font-bold line60 black text-center'> <span className='grdiant'>Salesforce Integrations</span> : If you can dream it, we can make it
   </h4>
   const text = <p className='center'>  We are experts at implementing off-the-shelf Salesforce applications, as well as creating bespoke <br></br>integrations to solve complex business problems and workflows </p>

   const experts = <>
       <Container>
           <Row className={`${expertStyle.expertRow} justify-content-evenly`}>
               <Col lg={3}>
                   <div className={expertStyle.exebox}>
                       <Image quality={75} src={b1} alt='BitsWits' className='img-fluid' />
                       <h4>DOCUMENT MANAGEMENT</h4>
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
                       <h4>ACCOUNTING</h4>
                   </div>
               </Col>
               <Col lg={3}>
                   <div className={expertStyle.exebox}>
                       <Image quality={75} src={b5} alt='BitsWits' className='img-fluid' />
                       <h4>PAYMENT
GATEWAYS</h4>
                   </div>
               </Col>
               <Col lg={3}>
                   <div className={expertStyle.exebox}>
                       <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                       <h4>MICROSOFT
PRODUCTS</h4>
                   </div>
               </Col>
               <Col lg={3}>
                   <div className={expertStyle.exebox}>
                       <Image quality={75} src={b5} alt='BitsWits' className='img-fluid' />
                       <h4>SERVICES</h4>
                   </div>
               </Col>
               <Col lg={3}>
                   <div className={expertStyle.exebox}>
                       <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                       <h4>MUCH MORE</h4>
                   </div>
               </Col>
           </Row>
       </Container>
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

<Experts
                cards={experts}
                subtitle={experttitle}
                text = {text}
            />
       


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
