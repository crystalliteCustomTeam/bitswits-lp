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
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
import { Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
//Why Icon
import icon24 from '../public/images/strategies/1.png'
import icon25 from '../public/images/strategies/2.png'
import icon26 from '../public/images/strategies/3.png'
import icon27 from '../public/images/strategies/4.png'
import icon28 from '../public/images/strategies/5.png'
import icon29 from '../public/images/strategies/6.png'
import icon30 from '../public/images/strategies/7.png'
import icon31 from '../public/images/strategies/8.png'

import reStyles from '@/styles/MyReason.module.css'

export default function linkbuilding() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Your Trusted <span className='grdiant'>Link Building</span> Company That Drives Exponential Website Traffic Through Strategic Backlinking</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Sending referral traffic </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Brand building </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Building relationships </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Improve Domain & Page Authority </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Improve Keyword ranking </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Improve website traffic </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Increase Website’s  visibility & performance </li>
        </ul>
    </>




    // // coverage component data


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


    // Swipe component data

    // const swip = <h2 className='font30 black fontf font-bold line40 black'>Achieve High-Quality Backlink Acquisition With the Best <span className='displayline grdiant'>Link Building</span> Agency</h2>


    // const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Building Trust and Authority Through Quality <span className='displayline grdiant'>Backlinks Building</span> Services</h2>


    // const ensine = <h2 className='font30 black fontf font-bold line40 black'>Tracking Progress and Optimizing Results by Quality <span className='displayline grdiant'>Link Building</span> Service!</h2>


    // // =================== //

    // const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Creating Exceptional Content</h3>

    // const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Guest Blogging</h3>

    // // =================== //

    // const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>High Domain Authority Links</h3>

    // const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Natural and Organic Link Acquisition </h3>

    // // =================== //

    // const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Ranking Monitoring</h3>

    // const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Traffic Analysis and Better Conversion Tracking</h3>


    // MyExpertise component data




    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>We Build Better – Our Strategies of Link Building</h2>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Requesting Backlinks
                    </h5>
                    <p>
                    Ask anybody and everybody for a backlink- your friends, relatives, colleagues, partners, clients that have a blog or a site. Request for in-content links instead of links in the sidebar or footer.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Build Relationships
                    </h5>
                    <p>
                    Good link building starts with good relationships – build new contacts and start with niche-related communities: forums, blogs or social groups – all you need is a backlink.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Start A Blog
                    </h5>
                    <p>
                    Don’t start a blog with just one post and one backlink to your website – you need many to be famous. Though starting a blog is the best way to get maximum backlinks, but keeping the blog alive works the most.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Site Listing In Trustworthy Directories
                    </h5>
                    <p>
                    A directory that not only gives you the chance to post a link to your website, but also provides useful information for your potential customers is a directory you want to be listed on.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Writing Guest Post

                    </h5>
                    <p>
                    Plenty of sites accept blogs and articles – it’s important that you build links through them. However, it is important to get links that are helpful and do not negatively impact your website’s ranking in search engines.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Recovering Dead Links
                    </h5>
                    <p>
                    If a backlink returns to 404 error, you need to know that the link is broken. Resolve the problem and recover the backlink – it is surely going to impact your business rankings.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Finding Relevant Link Building Opportunities
                    </h5>
                    <p>
                    The SERP tool is designed to help you find the most relevant and strongest results for potential link building opportunities – forums, blogs, and sites.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Infographics
                    </h5>
                    <p>
                    One amazing and creative way to build backlinks is through infographics. They visually appeal to people and are an effective way of earning backlinks for your website.
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
                para='Our link building experts focus on improving your website’s visibility and organic rankings through obtaining inbound links from niche based reputable websites. These high-quality links come from websites with strong domain authority, relevant content, and a trustworthy reputation. Our SEO team creates exceptional content marketing strategies to help increase organic traffic and online visibility of your website on search results.'
                subtitle={swpTtl}
                subpara='Producing creative, valuable, and engaging content is the foundation for attracting high-quality backlinks. Our link building experts offer unique, informative, and relevant content that not only satisfies the user search intent but attracts other websites to link to your content as a valuable resource.'
                subtitle2={swpTtl2}
                subpara2='Our back link building experts help create the highest-quality guest articles that provide value to the niche. Our professional link building experts assist you in tapping into the target audience of the host website and build backlinks from relevant sources to your website.'
            /> */}



            {/* <Ahead
                title={aheadtitle}
                para='BitsWits, the top link building SEO company focuses on quality over quantity. Our link building experts acquire backlinks from reputable websites according to your niche, target audience, and business. Securing backlinks from authoritative sources helps establish your website as a reliable resource for search engines and users.'
                subtitle={ahdTtl}
                subpara='By acquiring backlinks from websites with high domain authority, link building experts at BitsWits improve your website’s reputation and authority for all search engines. By accurately identifying and securing backlinks, overall website visibility and ranking is boosted.'
                subtitle2={ahdTtl2}
                subpara2='Prioritizing natural and organic link acquisitions ensure long-term success. Our link building experts follow white-hat SEO practices and focus on safeguarding online presence and earning backlinks by valuable content, thought leadership, and engaging outreach.'
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
                para='The link building experts at BitsWits understand the importance of measuring the success of your link building efforts by providing transparent reporting and comprehensive analysis to track the progress of link building campaigns. '
                para2='Based on the detailed reports, which contain organic traffic growth, keyword rankings, and other key metrics, we continuously optimize strategies to achieve your desired SEO objectives.'
                subtitle={enshrTtl}
                subpara='Our SEO experts closely monitor the rankings of your targeted keywords to track the progress of your link building efforts. With our advanced tools and tactics, we identify keyword movements and evaluate the impact of backlinks to improve keyword performance for SEO strategies.'
                subtitle2={enshrTtl2}
                subpara2='Analyzing user behavior is a crucial process. By monitoring traffic patterns, user engagement, and conversion rates, our link building experts gain valuable knowledge regarding acquired backlinks to drive qualified traffic and generate tangible business results.'
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
