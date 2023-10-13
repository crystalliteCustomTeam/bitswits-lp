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


export default function blockchainwalletdevelopment() {


    // banner component data

    const heading = <div className='font65 black fontf font-bold line60 mt-5'>BitsWits: A Well-Known <br /><h2 className='grdiant font65 black fontf font-bold line60 displayline'> Blockchain Wallet Development Company!</h2></div>

    const para = <p className='black fontf font-medium line30 mt-3'>BitsWits, a reliable blockchain wallet app development company, is dedicated to developing innovative technologies for companies looking to take advantage of the future possibilities of blockchain technology. We provide the best blockchain wallet development services that are specialized to the specific requirements of our clients. We focus on offering trustworthy, decentralized solutions to a range of sectors, including healthcare, supply chain, finance, and more to guarantee data integrity and streamline operations. </p>


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

    const design = <div className='font30 black fontf font-bold line40 black'> The <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Best Blockchain Wallet Development Agency </h2> That Enriches Your Web3 Transaction Experience! </div>

    const aheadtitle = <div className='font30 black fontf font-bold line40 black'><h2 className='font30 black fontf font-bold line40 black displayline'>Crypto Wallet App development</h2>!</div>

    const range = <div className='font30 black fontf font-bold line40 black mb-2'> Driving Customer Satisfaction with Feature-Rich  <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Decentralized Crypto Wallet Solution</h2></div>


    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Security First: A Reliable Blockchain Wallet Development Agency!</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Experience The Best Blockchain Experience!</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Mobile Wallets</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Desktop Wallets</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>API Integration with Leading Crypto Exchanges</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Automated Detection and Rejection of Duplicate Payments</h3>


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
                title={design}
                para='BitsWits, a renowned blockchain wallet development company has a team of committed specialists and professionals who excel at providing innovative solutions that improve user experiences and produce favorable outcomes. Our blockchain wallet developers create engaging user interfaces through thorough research, and keep up with the most recent design trends. '
                subtitle={swpTtl}
                subpara='At BitsWits, security is our priority. The creation of our blockchain wallet places a high priority on reliable encryption and multi-factor authentication, assuring maximum security for user’s money and data. Our services are built on trust and dependability, giving customers peace of mind in a decentralized world. For trustworthy and safe blockchain wallets, choose BitsWits, and get the best blockchain wallet development services. '
                subtitle2={swpTtl2}
                subpara2='At BitsWits, our blockchain wallet developers understand the importance of a smooth and innovative user experience in blockchain applications. Whether it’s through responsive designs, real-time updates, or offline capabilities, our blockchain wallet development lets you experience the best of web3 and digital transaction hasslefree.  '
            />



            <Ahead
                title={aheadtitle}
                para='BitsWits specializes in developing decentralized crypto wallets for a variety of blockchain projects, DEXs, and Defi trading and investing platforms at BitsWits. We provide wallet launching in the form of desktop programs, smartphone apps, and extensions for web browsers to ensure user convenience.'
                subtitle={ahdTtl}
                subpara='Our simple crypto mobile wallets are available on both the iOS and Android platforms, allowing users to manage their digital assets while on their phones. Our mobile wallets are intended for today`s fast-paced, mobile-centric lifestyle and provide the ultimate accessibility to users all the time.'
                subtitle2={ahdTtl2}
                subpara2='Enjoy the flexibility of our desktop crypto wallets, with easy installation that work with Windows, Linux, and Mac operating systems on desktops and laptops offering a safe space for consumers to store their private keys directly on their systems, giving them complete control and peace of mind over their digital assets.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={range}
                para='Our wallets give users access to wide range of Defi platforms and support Android, iOS, Mac OS, Linux, and Windows, allowing users to store and sell numerous cryptocurrencies (such as ETH, Litecoin, BTC, ERC-20 tokens, and altcoins) within a single wallet.'
                subtitle={enshrTtl}
                subpara='Our blockchain wallet developers provide an effortless interface by allowing users to easily buy or sell their desired cryptocurrencies directly within the crypto exchange platforms, eliminating the need for users to navigate away from the exchange. The feature enhances efficiency in cryptocurrency transactions.'
                subtitle2={enshrTtl2}
                subpara2='Our wallets include automatic detection to identify and reject duplicate payments, providing an easy payment experience while preventing chargebacks.'
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
