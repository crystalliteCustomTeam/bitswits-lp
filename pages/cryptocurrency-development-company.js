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


export default function cryptocurrencydevelopment() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Building a Secure and Efficient Crypto World with a Reliable <span className='grdiant'>Cryptocurrency Development Company</span>!</h1>

    const para = <p className='black fontf font-medium line30 mt-3'>BitsWits, a leading cryptocurrency development company, specializes in the creation and development of cryptocurrencies and blockchain applications.</p>

    const para2 = <p className='black fontf font-medium line30 mt-3'>We specialize in blockchain technology, cryptography, smart contract development, token creation, and wallet development.</p>

    const para3 = <p className='black fontf font-medium line30 mt-3'>Schedule a meeting with our cryptocurrency consultant now and avail a free strategy session!</p>


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

    const swip = <h2 className='font30 black fontf font-bold line40 black'>Connecting Communities with Peer-to-Peer Transactions Through <span className='grdiant'>Cryptocurrency App Development</span>!</h2>

    const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Building Trust in the Digital Age with Smart Contracts at <span className='grdiant'>BitsWits</span>!</h2>

    const ensine = <h2 className='font30 black fontf font-bold line40 black'>Accelerating Growth Through Fundraising with <span className='grdiant'>Cryptocurrency Application Development Solutions</span>!</h2>

    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Fast and Low-Cost Transactions</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Security and Trust</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Programming Languages for Smart Contracts</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Minimizing Mistakes with Smart Contracts</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Initial Coin Offerings (ICOs)</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Decentralized Crowdfunding Platforms</h3>

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
                para3={para3}
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
                para='BitsWits, the top cryptocurrency app development company, offers direct peer-to-peer transactions without the need for brokers like banks. This assists users to rapidly and cheaply send and receive money straight to any individual, anywhere in the entire world.'
                subtitle={swpTtl}
                subpara='In comparison to standard banking systems, peer-to-peer cryptocurrency transactions are often quicker and have lesser transaction costs. Our team  explores the benefits of cryptocurrencies in terms of speed and cost for facilitating effective peer-to-peer transactions.'
                subtitle2={swpTtl2}
                subpara2='Cryptocurrency development services at BitsWits, provide trust and security through blockchain technology and draws attention to the transparency of transactions and cryptographic safety precautions made possible by the usage of cryptocurrency.'
            />



            <Ahead
                title={aheadtitle}
                para='BitsWits is a cryptocurrency development company where certain cryptocurrencies like Ethereum support smart contracts. Smart contracts have specified criteria that are built into the contract`s code. When specified situations meet the criteria, they automatically carry out transactions and agreements, eliminating the need for intermediates.'
                subtitle={ahdTtl}
                subpara='BitsWits utilizes a certain set of computer languages to create smart contracts. Popular programming languages are used to create smart contracts on various blockchain systems, including Vyper, Solidity (the language used in Ethereum), and others.'
                subtitle2={ahdTtl2}
                subpara2='Our cryptocurrency development company offers smart contracts which are more efficient, cheaper, and more secure. They speed up and improve the reliability of transactions by optimizing procedures, lowering human error, and getting rid of the need for intermediaries.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='BitsWits, a reputable cryptocurrency app development company, provides users with two revolutionary forms of fundraising, initial coin offerings (ICOs) and security token offerings (STOs). Using these techniques, organizations can raise money by creating and trading their own digital tokens or currencies.'
                subtitle={enshrTtl}
                subpara='Our cryptocurrency development services offer ICOs, BitsWits revolutionized fundraising by allowing projects to raise capital through the sale of their own digital tokens. ICO funding process includes the development of tokens and token sales which are provided by our team of experts.'
                subtitle2={enshrTtl2}
                subpara2='Decentralized crowdfunding systems based on blockchain technology enable peer-to-peer fundraising. It helps reach investors from around the world and enhances transparency by recording all transactions on an immutable ledger.'
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
