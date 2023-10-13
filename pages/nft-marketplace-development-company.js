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


export default function nftmarketplacedevelopment() {


    // banner component data

    const heading = <div className='font65 black fontf font-bold line60 mt-5'>Build Marketplaces on Web3 Networks with <h1 className='grdiant font65 black fontf font-bold line60 displayline'>Top NFT Marketplace Development Company</h1>!</div>

    const para = <p className='black fontf font-medium line30 mt-3'>Our NFT marketplace services enable users to develop marketplaces on a variety of blockchain platforms, including Ethereum, Avalanche, and Polkadot. We offer a variety of services, including NFT creation, storefront discovery, wallet integration, bid submission, and secure NFT storage.</p>


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

    const swip = <div className='font30 black fontf font-bold line40 black'>Tap into the Potential of Web3 Platforms with Our <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>NFT Marketplace Development Agency</h2>
    </div>

    const aheadtitle = <div className='font30 black fontf font-bold line40 black mb-2'>Stand Out from the Competition with Our <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Top NFT Marketplace Development Solutions</h2>
    </div>

    const ensine = <div className='font30 black fontf font-bold line40 black mb-2'>Join the World of NFTs with The Provider of <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>NFT Marketplace Development Services</h2>
    </div>

    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Design and Development</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Support and Maintenance</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Stay Ahead with Latest Trends in NFT Marketplaces</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Better Research Methods for Targeted Results</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Building Better NFT Marketplaces</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Keeping Up with the Latest Trends</h3>

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
                para='We build innovative NFT marketplaces that enhance trading experiences by including extra security features. Our comprehensive range of NFT marketplace development services includes everything from front-end design to back-end development and smart contract deployment, allowing you to get all of your requirements fulfilled in one place.'
                subtitle={swpTtl}
                subpara='At BitsWits, our team specializes in creating and developing user-centric NFT marketplace platforms, using their expertise in smart contracts, ERC-721 standards and IPFS protocols.'
                subtitle2={swpTtl2}
                subpara2='Our team provides constant maintenance, and support to manage third-party upgrades in NFT marketplaces, as well as security measures and assistance with any technical concerns. '
            />



            <Ahead
                title={aheadtitle}
                para='Our NFT marketplace developers are committed to transforming the process of digital assets in terms of buying, selling, and trading NFTs and aim to provide exceptional NFT marketplace development solutions that empower artists, creators, and collectors to participate in the exciting world of non-fungible tokens.'
                subtitle={ahdTtl}
                subpara='At BitsWits, our NFT marketplace development services are designed to adapt to emerging technologies and industry trends. We keep a close eye on advancements to ensure that your NFT marketplace remains competitive and offers advanced features such as fractional ownership, gamification, and cross-chain compatibility.'
                subtitle2={ahdTtl2}
                subpara2='Every project is unique, and we modify our research methods to suit your specific goals. Whether it’s conducting focus groups, analyzing client feedback, or tracking user behavior through advanced analytics, we have a variety of creative techniques to gather relevant and reliable data for providing the best-quality NFT marketplace development services.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='BitsWits is your trusted agency for creating online spaces and opportunities to buy and sell Non-Fungible Tokens. Our team is packed with skilled NFT marketplace developers who have a lot of knowledge and expertise in blockchain and other trending technology behind NFTs. They use this knowledge to build online marketplaces where people can trade digital assets easily and securely while enhancing functionality and a smooth user experience.'
                subtitle={enshrTtl}
                subpara='We work hard to make each NFT marketplace easy to use. Our team carefully analyzes your marketplace, identifies what needs to be modified, and then gets to work, leveraging their profound knowledge of smart contracts, industry standards, and user behavior to improve your NFT marketplace.'
                subtitle2={enshrTtl2}
                subpara2='The world of NFT is changing every day, and that is why our team focuses on learning about the latest trends, ideas, innovation, and technological advancements. We use what we consume through learning to make sure your NFT marketplace stays exciting and engaging. At BitsWits, the core objective is to satisfy our clients and users through the best NFT marketplace development solutions while keeping up with the latest trends.'
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
