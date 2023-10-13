import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import { Row, Col } from 'react-bootstrap'
import expStyles from '@/styles/MyExpertise.module.css'
import reStyles from '@/styles/MyReason.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import FindingKeywords from '@/components/FindingKeywords';

import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
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
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'


//Why Icon
import icon24 from '../public/images/keywordresearch/1.png'
import icon25 from '../public/images/keywordresearch/2.png'
import icon26 from '../public/images/keywordresearch/3.png'


export default function keywordresearch() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire The Best <span className='grdiant'>Keyword Research</span> Company in US To Dominate Search Results</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Improving Conversions </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Engaged Audience </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Eye Trends </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Higher Organic Search Ranking </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Optimize Spend </li>
        </ul>
    </>




    // coverage component data


    // const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    // const mobile = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         Mobile App Design
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UI UX Design
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research & Discovery
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Wireframing & Prototyping
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             iOS + Android Applications
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Post Launch Support
    //         </Link>
    //     </div>
    // </div>

    // const user = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         User Research
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Journey & Persona Building
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Participant Recruitments
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research Method & Material Development
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Iterative Research
    //         </Link>
    //     </div>
    // </div>


    // const ux = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         UX Optimization
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Experience Assessment
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User & KPIs Data Analysis
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             A/B Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Feature Experimentation
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UX Iterations
    //         </Link>
    //     </div>
    // </div>



    // // Swipe component data

    // const swip = <h2 className='font30 black fontf font-bold line40 black'>Mastering <span className='displayline grdiant'>Keyword Research</span> Services with Advanced Strategies for Best Results</h2>

    // const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Drive High Traffic Towards Your Website by Top <span className='displayline grdiant'>Keyword Research</span> Service</h2>


    // const ensine = <h2 className='font30 black fontf font-bold line40 black'>Competitor Keyword Analysis with the Top <span className='displayline grdiant'>Keyword Research</span> Agency</h2>


    // // =================== //

    // const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Increased Online Visibility with Detailed Keyword Research</h3>

    // const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Driving High Conversion Rates with Long-Tail Keywords</h3>

    // // =================== //

    // const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>High-Value Keywords for Search Engine Optimization</h3>

    // const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Mapping and Integration </h3>

    // // =================== //

    // const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Gap Analysis</h3>

    // const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Niche Keyword Opportunities</h3>





    // MyExpertise component data

   


    // Build component data

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>Our Metrics To <span className='grdiant'>Boost Your Keywords</span> </h2>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Research & Analysis
                    </h5>
                    <p>
                    You can usually find keywords that get great search volume and have little to no competition. Keywords are analyzed and search volumes are calculated accordingly.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Implementation
                    </h5>
                    <p>
                    We find the best keywords for your business and then the webpages are targeted in order to get SEO results ((search-driven traffic, conversions).
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Easy Ranking
                    </h5>
                    <p>
                    Only an ideal keyword can provide you the good ranking. The tool aids you to find out the right keyword which you can get easily ranking on search engines.
                    </p>

                </div>
            </Col>
         
        </Row>

    </>


    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>Here are <span className='grdiant'>six key reasons</span> why
    UK agencies choose to partner with us</h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #1
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Competitive rates
                    </h5>
                    <p>
                        Even though our service is a cut above the rest, we remain competitively priced. Our developer rates start from as little as <strong>$15/hr</strong>
                    </p>
                    <p>
                        Agencies who work with us enjoy making more profit per client and have a higher throughput of projects.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #2
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Quality
                    </h5>
                    <p>
                        We are CMMI level 3 appraised and members of the Agile Alliance, which is your assurance that we have processes and safeguards in place to ensure the delivery of a high quality finished product, each and every time.
                    </p>
                    <p>
                        Read more about our <strong>CMMI appraisal</strong>.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #3
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Flexibility
                    </h5>
                    <p>
                        Our massive permanent workforce is comprised of designers, developers and PMs. You can hire as many or as few of them as you need - on a per project or retained basis.
                    </p>
                    <p>
                        This flexibility means that you’re never paying for skills and time that you’re not using.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #4
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        In-house expertise
                    </h5>
                    <p>
                        Every one of our <strong>1,000+</strong> designers, developers and project managers in the UK, USA and Worldwide are directly employed by us, and they work in offices that are owned by us.
                    </p>
                    <p>
                        This enables us to ensure continuity of knowledge and in fact, many of our team members have been working with the same clients for years - maintaining consistently high quality, reliability and efficiency at all times.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #5
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Security & confidentiality
                    </h5>
                    <p>
                        Your contract of engagement is with our UK company (DotSquares Ltd), so our liability to you is governed and protected by UK law.
                    </p>
                    <p>
                        This is a very important detail that sets us apart from many offshoring companies. Furthermore, all Intellectual Property Rights & source code are yours, forever.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #6
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        The original, and best
                    </h5>
                    <p>
                        We’ve been servicing UK businesses like yours with offshore teams for <strong>21 years</strong>. In fact, we were one of the first companies to set up this offshore business model, back in 2002. Since then we’ve completed over <strong>20,000 projects</strong> (at last count, and we are still growing!) Our scalability provides you with the best talent backed up by guarantees and consumer protection, whilst our attention to detail, perfectionism and personal service still makes every customer feel very special indeed.
                    </p>
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
            />

            <FindingKeywords />

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}


            {/* <Swipe
                foldimg={foldimg}
                title={swip}
                para='Keyword research is a fundamental part of on-page optimization, and our team conducts detailed keyword research using advanced tools and techniques. Our SEO professionals analyze search trends, competition, and user intent to identify valuable keywords for your business. We provide actionable insights to drive targeted traffic to your website and surpass all competitors. '
                subtitle={swpTtl}
                subpara='Our advanced keyword research goes beyond basic inspection by providing a comprehensive understanding of search volumes. Our SEO experts dive deep into data to identify keywords with high search volume and conversion potential to target the specific niche and maximize online visibility.'
                subtitle2={swpTtl2}
                subpara2='SEO professionals at BitsWits, know how to uncover valuable short and long-tail keywords that often have less competition with higher conversion rates. We offer the best keyword research services by identifying targeted phrases according to your business needs to help you capture the target market and attract qualified leads who are likely to convert into customers.'
            /> */}

        

            {/* <Ahead
                title={aheadtitle}
                para='Our SEO experts provide comprehensive keyword recommendations based on extensive research and analysis, which is customized to your business requirements. These recommendations guide your content creation, on-page optimization, and digital marketing efforts. Fusing the right keywords will help gather a larger target audience and visibility and drive organic growth.'
                subtitle={ahdTtl}
                subpara='Our keyword research services providers focus on identifying high-value keywords that satisfy the user intent and assist in driving significant organic traffic to your website. We ensure maximum results, visibility, and search engine rankings.'
                subtitle2={ahdTtl2}
                subpara2='Our team helps you in effectively integrating recommended keywords into your website’s structure and content. We provide guidance on keyword mapping, ensuring that each page on your website targets the selected keywords strategically, which improves the overall SEO performance.'
                ahead={aheadimage}
            /> */}

            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
            />

            {/* <Ensure
                foldimg={foldensure}
                title={ensine}
                para='At BitsWits, a top keyword research agency, our SEO experts help you stay ahead of the curve by providing valuable insights into their keyword strategies. Our competitor keyword analysis uncovers their high-performing keywords to help identify gaps and outshine your rivals.'
                subtitle={enshrTtl}
                subpara='Our keyword research service providers conduct a detailed keyword gap analysis to identify keywords that your competitors are ranking for. This analysis reveals that untapped keyword opportunities can boost organic visibility, captivate a larger share of the market, and expand the online presence of your business.'
                subtitle2={enshrTtl2}
                subpara2='At BitsWits, our competitive keyword research services help in identifying niche keyword opportunities that may be underestimated by your competitors. Targeting specific niches within the industry attracts high traffic while establishing an authoritative presence.'
            /> */}


            <WhyBuild
                title="Why Build"
         
                cards={WhyBuilds}
                subtitle={whytitle}
            />

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
