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


export default function tokenizationsolutions() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Convert Real Assets into Digital Tokens with BitsWits, a Reliable <span className='grdiant'>Tokenization Solutions Company</span>!</h1>

    const para = <p className='black fontf font-medium line30 mt-3'>BitsWits, a well known tokenization services company, specializes in creating and implementing tokenization solutions for multiple industries.</p>

    const para2 = <p className='black fontf font-medium line30 mt-3'>Our experts know how to convert sensitive data like credit card numbers and personal identification information into a non-sensitive token.</p>

    const para3 = <p className='black fontf font-medium line30 mt-3'>The tokens created help clients to secure transactions, identify verification, and store data without exposing the actual sensitive information. So, what are you waiting for? Get in touch with us today.</p>


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

    const swip = <h2 className='font30 black fontf font-bold line40 black'>Discover Exceptional Tokenization Solutions with Professionals at the Top <span className='grdiant'>Tokenization Solution Company</span>!</h2>

    const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Our Top <span className='grdiant'>Tokenization Solutions</span> Keep Your Data Protected and Privacy Maintained!</h2>

    const ensine = <h2 className='font30 black fontf font-bold line40 black'>Simplifying Token Lifecycle Management with High-Quality Data <span className='grdiant'>Tokenization Solutions</span>!</h2>

    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Token Vault Management</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Tokenization API Integration </h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Encryption and Decryption</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Key Management System</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Token Issuance and Generation</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Token Revocation and Expiration</h3>

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
                para='BitsWits, a tokenization solutions company, guides individuals and enables businesses to tokenize sensitive data by developing software and reliable systems that guarantee the safe conversion of data into tokens. Our experts offer all sorts of essential resources for efficient token management.'
                subtitle={swpTtl}
                subpara='Experts at BitsWits, build secure token vaults to store and manage tokens effectively. We develop tools that maintain the integrity and security of tokenized data stored in the vault, such as token indexing, search functionality, access controls, and auditing systems.'
                subtitle2={swpTtl2}
                subpara2='Our tokenization services and solutions include creating and offering APIs that facilitate the smooth integration of these services into current systems. APIs help to programmatically tokenize and detokenize data, guaranteeing easy data movement across various parts of the system.'
            />



            <Ahead
                title={aheadtitle}
                para='BitsWits, a well-known tokenization solutions company, provides tools for securely maintaining encryption keys and setting up strong security mechanisms to protect tokenized data.'
                subtitle={ahdTtl}
                subpara='To prevent the loss of sensitive data throughout the tokenization process, we use strong encryption and decryption techniques. Let our tokenization solutions, practices, and industry-standard encryption techniques secure the confidentiality and safety of your data.'
                subtitle2={ahdTtl2}
                subpara2='Our tokenization services include Creating a thorough key management system to produce, store, and maintain encryption keys needed in the tokenization process in a secure environment. To protect the keys and stop unauthorized access, we place protections like key rotation, secure key storage, and access controls.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='Token lifecycle management is essential for operations to run efficiently. BitsWits provide tokenization solutions, tools, and services for managing the lifespan of tokens, which includes their issuance, storage, retrieval, cancellation, and expiration.'
                subtitle={enshrTtl}
                subpara='BitsWits, a tokenization solutions company, develop a mechanism for generating and issuing tokens that ensure their security and uniqueness. Our experts build systems that produce unique tokens that meet specified business requirements while preserving the accuracy and privacy of the data.'
                subtitle2={enshrTtl2}
                subpara2='To establish steps and supplies for token expiration and revocation, we enable the option to cancel tokens in cases of fraud or when they are no longer required to protect data. We implement controls for coping with token expiration and send appropriate alerts to users using the tokens.'
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
