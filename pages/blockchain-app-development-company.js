import Head from 'next/head'
import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
//components
import Banner from '@/components/ServicesBanner'
import Coverage from '@/components/Coverage';
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webAhead.svg'


export default function blockchainappdevelopment() {


    // banner component data

    const heading = <div className='font65 black fontf font-bold line60 mt-5'>Put Your Trust in BitsWits, a Reliable  <h1 className='grdiant font65 black fontf font-bold line60 displayline'>Blockchain App Development Company</h1>!</div>

    const para = <p className='black fontf font-medium line30 mt-3'>With an extensive track record of decades, BitsWits, a leading blockchain app development agency, is committed to delivering advanced app solutions to businesses. Our team of top blockchain app developers specializes in creating exceptional web, mobile, and web3 applications, offering innovative designs and development solutions that drive growth and maximize return on investment.  </p>


    // coverage component data


    const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    const mobile = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            Mobile App Design
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UI UX Design
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research & Discovery
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Wireframing & Prototyping
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                iOS + Android Applications
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Post Launch Support
            </Link>
        </div>
    </div>

    const user = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            User Research
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Journey & Persona Building
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Participant Recruitments
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research Method & Material Development
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Iterative Research
            </Link>
        </div>
    </div>


    const ux = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            UX Optimization
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Experience Assessment
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User & KPIs Data Analysis
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                A/B Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Feature Experimentation
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UX Iterations
            </Link>
        </div>
    </div>



    // Swipe component data

    const swip = <div className='font30 black fontf font-bold line40 black'>
        Enhancing Web3 Experiences with Innovative <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Blockchain App Development Services</h2> By BitsWits!
    </div>


    const aheadtitle = <div className='font30 black fontf font-bold line40 black'><h2 className='font30 black fontf font-bold line40 black displayline'>Hire The Best Blockchain App Development Services</h2>!</div>


    const ensine = <div className='font30 black fontf font-bold line40 black mb-2'>
        Hire BitsWits for  <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Blockchain App Development,</h2> Your Gateway to Success in Any Industry!
    </div>


    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Smooth Integration of Add-ons in Blockchain Apps</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Custom Enterprise Grade Blockchain Solutions</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>DApp Development</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>IEO & ICO Services</h3>

    // =================== //

    const enshrTtl = <h2 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Smart Contract Development</h2>

    const enshrTtl2 = <h2 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Blockchain Game Development</h2>


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
            />

            <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            />


            <Swipe
                foldimg={foldimg}
                title={swip}
                para='We help businesses utilize blockchain technology in their operations to make things run smoother and safer. At BitsWits, we can create secure apps and online platforms for businesses. We store data using blockchain, which means it can`t be changed. We also use encryption and cryptography to keep data safe when it`s being sent or stored.'
                subtitle={swpTtl}
                subpara='Hire best blockchain developers, capable of creating scalable blockchain applications. These apps will incorporate multiple add-ons and connect smoothly with diverse features, catering to every industry and niche.'
                subtitle2={swpTtl2}
                subpara2='Hire BitsWits to develop custom blockchain solutions for your company using enterprise-grade blockchain that improve data traceability and security while completely eliminating the need for third-party entities.'

            />



            <Ahead
                title={aheadtitle}
                para='With our blockchain development services, your organization will grow by integrating blockchain technology in custom apps for your business. Hire the top blockchain developers who specialize in developing unique solutions that will change your data management practices.'
                subtitle={ahdTtl}
                subpara='Step into the future of decentralized business operations with our blockchain Dapp development services, which are designed to improve your company`s performance.'
                subtitle2={ahdTtl2}
                subpara2='Our all-inclusive IEO and ICO services provide smart strategies for investors, generating crypto assets securely and boosting their distribution in target markets.'
                ahead={aheadimage}

            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='Hire BitsWits for blockchain app development to gain an edge over your competitors. Our customized blockchain solutions and specialized developers cater to any industry, niche, and deliver success in your digital initiatives.'
                subtitle={enshrTtl}
                subpara='Hire blockchain developers in US with smart contract development expertise. We have successfully developed many kinds of smart contracts that enable conflict-free business operations and transactions.'
                subtitle2={enshrTtl2}
                subpara2='We create strong gaming infrastructures supported by blockchain technology. Because of their scalability and long-term profitability, these infrastructures attract a wide spectrum of users.'



            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
