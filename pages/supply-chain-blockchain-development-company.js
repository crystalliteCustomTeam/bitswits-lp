
import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
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


export default function supplychainblockchaindevelopment() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best  Supply Chain Blockchain Development Company!</h1>

    const para = <p className='black fontf font-medium line30'>BitsWits is a US based supply chain blockchain development company that welcomes you all to the forefront of supply chain transformation! Here professional supply chain blockchain developers reshape the way businesses manage their supply chains. Our innovative solutions improve transparency, traceability, and security, turning routine operations into exciting journeys.
    </p>
    const para2 = <p className='black fontf font-medium line30'>Through real-time tracking and verification, our blockchain platforms assist in outshining all competitors. So, what are you waiting for?
    </p>


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

    const swiptitle = <div className='font30 black fontf font-bold line40 black'>We Provide Top-Quality <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Supply Chain Blockchain Development Services</h2> </div>


    const aheadtitle = <h2 className='font30 black fontf font-bold line40 black displayline'>The Benefits of Blockchain in Supply Chains</h2>


    const range = <h2 className='font30 black fontf font-bold line40 black'>BitsWits Helps You Drive Efficiency and Control in Your Supply Chain Operations</h2>


    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Improve Transparency in Your Supply Chain</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Boost Efficiency with Smart Contracts</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Improved Security</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Smooth Cooperation Between Multiple Entities</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Top Blockchain Developers for Custom Supply Chain Solutions</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Advanced in Terms of Innovation and Technology</h3>


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
                para2={para2}
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
                title={swiptitle}
                para='Our supply chain blockchain developers manage the supply chain through engaging and dynamic blockchain services. Our team is fueled with passion for innovation, delivering engaging supply chain blockchain development services that leave all traditional methods behind. From attractive real-time tracking to enabling smart contracts, we will make your supply chain successful. '
                subtitle={swpTtl}
                subpara='With BitsWits, the top supply chain blockchain development company takes transparency as center stage. Our supply chain blockchain development services enable real-time traceability, ensuring that every step you take is in the right direction. Experience the thrill of knowing exactly where your products are and gain a competitive advantage. '
                subtitle2={swpTtl2}
                subpara2='Let our smart contracts improve your supply chain operations. At BitsWits, our developers create self-executing contracts that automate processes and eliminate inefficiencies. Experience the excitement of our optimized operations, reduced costs, and expanded growth with our professional supply chain blockchain development services. '

            />



            <Ahead
                title={aheadtitle}
                para='BitsWits, the leading supply chain blockchain development company in USA, takes advantage of blockchain technology to drive cost-effectiveness across supply chain operations. Our innovative solutions optimize your supply chain processes in a way that leads to increased efficiency and improved profitability. '
                subtitle={ahdTtl}
                subpara='Benefit from the built-in security and adaptability of decentralized and encrypted data on permissioned blockchains. These records cannot be deleted, covered up, or tampered with, resulting in a fundamentally secure collaborative solution for supply chain security and preventing unauthorized access.'
                subtitle2={ahdTtl2}
                subpara2='Using blockchain-based systems, many different entities and participants can communicate quickly through electronic signatures, instant document exchange, auto identification, and a range of other collaborative capabilities, enabling smooth and secure interactions.'
                ahead={aheadimage}

            />



            <Ensure
                foldimg={foldensure}
                title={range}
                para='BitsWits is a successful supply chain blockchain development company where we take control of your supply chain and drive efficiency like never before. Our supply chain blockchain development services empower the supply chain with smart contracts, protected data sharing, and visual monitoring, letting you gain a competitive edge and help maximize performance. '
                subtitle={enshrTtl}
                subpara='Our in-house team is composed of the most qualified and experienced blockchain developers. They actively develop all of our tech solutions for the clients` projects and ensure that every task is managed well by the supply chain blockchain experts. '
                subtitle2={enshrTtl2}
                subpara2='Experience advanced innovation and technology with BitsWits. Hire our blockchain developers to gain access to their expertise and proven track record in successfully implementing unique solutions across different supply chain operations.'



            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
