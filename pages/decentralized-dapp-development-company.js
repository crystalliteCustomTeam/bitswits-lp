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


export default function dappdevelopment() {


    // banner component data

    const heading = <div className='font65 black fontf font-bold line60 mt-5'> <h1 className='font65 black fontf font-bold line60 grdiant displayline'>Decentralized App Development Company</h1>: Coding DApps on the Blockchain Providing Profitable Business Solutions </div>


    const para = <p className='black fontf font-medium line30 mt-3'>BitsWits, a leading decentralized app development company, is dedicated to developing innovative dapps that run on blockchain networks, eliminating the need for centralized control and putting power back in the hands of users like you. Our dApp developers combine blockchain, smart contract, and user-centric design experience to keep you at the top of your competitive market. </p>


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


    const swiptitle = <div className='font30 black fontf font-bold line40 black'> Delve into the World Of  Blockchain with <h2 className='font30 black fontf font-bold line40 black grdiant'>Top dApp Development Agency in USA!</h2></div>


    const aheadtitle = <div className='font30 black fontf font-bold line40 black'> Drive Innovation with Customized  <h2 className='font30 black fontf font-bold line40 displayline black grdiant'>dApp Development Services!</h2></div>


    const ensuretitle = <div className='font30 black fontf font-bold line40 black mb-2'> Hire BitsWits, The Best <h2 className='font30 black fontf font-bold line40 black grdiant displayline'>dApp Development Agency in USA!</h2></div>

    // =================== //

    const swpTtl = <div className='font18 fontf font-bold mt-1 letterspace black mb-0'>Revealing the Potential of
        <h2 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'> dApp Development Services!</h2>
    </div>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Improved User Experiences</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Improved Security and Privacy</h3>

    const ahdTtl2 = <h2 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Web3 dApp Development Services</h2>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Continuous Improvement and Successful Results</h3>

    const enshrTtl2 = <div className='font18 fontf font-bold mt-1 letterspace black mb-0'>
        <h2 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>DApps and Web3 Applications </h2>  Are the Future of Innovation
    </div>

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
                title={swiptitle}
                para='Enter the world of blockchain technology and discover its astounding possibilities with BitsWits, the pioneer in dApp development. We design decentralized apps that move industries forward using platforms including Ethereum, Polkadot, and Solana. for revolutionary results. We create and build decentralized apps that drive business growth. Hire our expert DApp developers at BitsWits and embrace the power of blockchain technology.'
                subtitle={swpTtl}
                subpara='At BitsWits, our professional dApp developers leverage the power of web3 technology that assists in offering the best dApps development service in US. Built on the principles of decentralization, continuity, and transparency, we allow you to experience a quick app development process with better security, innovation, and design.'
                subtitle2={swpTtl2}
                subpara2='Hire top dApp developers who specialize in providing an exceptional and innovative experience while constantly pushing the limits of technology to create innovative features for the users. Whether it’s through responsive designs, real-time updates, or offline capabilities, our web3 dApp development company improves engagement and drives conversions. '

            />


            <Ahead
                title={aheadtitle}
                para='The best decentralized software development business in the USA, BitsWits, is aware of how critical it is to maintain one`s position at the top in a competitive market. By integrating a variety of creative approaches to gather data, our team is committed to offering the best web3 dApp development services, guaranteeing that your app fulfills the needs of your target audience. '
                subtitle={ahdTtl}
                subpara='With web3 dApp development services, we prioritize security in the blockchain world. We take all relevant measures to protect your valuable data and assets. The top dApp development company, BitsWits, follows extremely strict security requirements and implements numerous security measures to protect your data.'
                subtitle2={ahdTtl2}
                subpara2='BitsWits offers improved web3 dApp development services, enabling businesses to extract every benefit from the decentralized technologies. Our expert dApp developers build decentralized applications that integrate with web3 protocols and blockchain networks to create new innovative opportunities.'
                ahead={aheadimage}

            />

            <Ensure
                foldimg={foldensure}
                title={ensuretitle}
                para='At BitsWits, customers completely rely on our dApp development Services. This is because of our 100% client satisfaction rate, our team meets all commitments while improving user experiences through advanced innovative solutions. Our expert dApp developers know how to make your decentralized applications better and they ensure to deliver remarkable performance. '
                subtitle={enshrTtl}
                subpara='Our team of professional dApp developers prioritizes continuous improvements to make the best decentralized applications. Through careful testing and analysis, we implement strategic optimizations that result in a smooth and satisfying user experience. '
                subtitle2={enshrTtl2}
                subpara2='BitsWits thrives on utilizing the newest technological advances to create a decentralized future for your business that you have never experienced before. Our expert dApp developers stay up-to-date with emerging trends and to develop best web3 dApps and solutions. '
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
