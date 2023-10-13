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
import Insight from '@/components/Insight';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import Program from '@/components/Program';
import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import Blogfaqs from '@/components/Blogfaqs';
import Choose from '@/components/Choose';

//
import CrmExamples from '@/components/CrmExamples';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../public/images/seo/1.jpg'
import slide2 from '../public/images/seo/2.png'
import slide3 from '../public/images/seo/3.png'
import slide4 from '../public/images/seo/4.png'
import slide5 from '../public/images/seo/5.png'
import slide6 from '../public/images/seo/6.png'
import slide7 from '../public/images/seo/7.png'
import slide8 from '../public/images/seo/8.jpg'
import slide9 from '../public/images/seo/9.jpg'
import slide10 from '../public/images/seo/10.jpg'
import slide11 from '../public/images/seo/11.jpg'
import slide12 from '../public/images/seo/12.jpg'
import exmplstyles from '@/styles/CrmExamples.module.css'

export default function searchengineoptimization() {

    var crmExamples = {
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Build Your Brand with the Top <span className='grdiant'>Search Engine Optimization</span> Company in US</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Long Term Positioning & Increased Traffic </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Brand Awareness & Online Reputation </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Seo Friendly & User Friendly Website </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Cost Effective & Increased Roi </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Increased Domain Authority & Page Rank </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Increased Visibility Among Target Audiences </li>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Connect With Motivated Prospects </li>
        </ul>
    </>


    // Exmple component data


const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>SEO work</span>
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>A1 Clutches</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Glyfada Beach Villas</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Bali Brasserie Restaurants</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Texas Star hvacr</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Duvet and Pillow</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Diamond Engagement Rings</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Pass Now Intensive Courses</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Mind Body Fitness</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Duvet and Pillow</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Flower Stand Chelsea </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Shirtworks (Tshirt Printing) </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide11} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Narpsuk (Dog Walking Business) </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide12} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your SEO requirements </>





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

            <Insight />


            <Program/>

            <Blogfaqs/>
            
            <Choose/>


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
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
                para='Our search engine optimization agency is committed to boosting your website’s organic traffic by implementing proven strategies and tactics. Our SEO experts are skilled in keyword research, on-page optimization and quality content marketing, that attracts valuable visitors who are actively searching for your products and services.'
                subtitle={swpTtl}
                subpara='We focus on optimizing website on-page elements, which include meta tags, headings, and quality content, to make it more SEO friendly. By strategically utilizing the keywords and improving overall site structures, we improve the website’s organic ranking and visibility.'
                subtitle2={swpTtl2}
                subpara2='BitsWits, a leading SEO services provider conducts comprehensive keyword research to identify the relevant and high-value keywords for the market niche. By analyzing search trends and competition, we ensure that your website is optimized to captivate targeted organic traffic and reach the target audience.'
            /> */}



            {/* <Ahead
                title={aheadtitle}
                para='Our technical SEO experts optimize your website’s structure, user-friendliness, and mobile experience. When your website is well-optimized, it sends a strong signal to search engines that it is reliable, relevant, and trustworthy.'
                para2='As a result, search algorithms boost your website’s ranking on search engine results pages, making it more visible to a broader and more engaged audience. Our team fixes and optimizes your website’s technical aspects and ensures your website dominates the search results!'
                subtitle={ahdTtl}
                subpara='Our technical SEO team optimizes your website’s structure and navigation to ensure easy accessibility for both users and search engines. Organizing content, implementing built-in menus, and internal linking helps improve online visibility.'
                subtitle2={ahdTtl2}
                subpara2='We focus on speed optimization, structuring URLs and indexing pages on your website effectively. Our SEO experts ensure that the URL structure is clean, descriptive, and SEO-friendly while keeping in mind that important pages are indexable and unblocked on the website.'
                ahead={aheadimage}
            /> */}



            {/* <Ensure
                foldimg={foldensure}
                title={ensine}
                para='Our SEO managers understand that each business is unique, which is why our SEO team offers personalized search engine optimization services based on thorough analysis and industry insights. Our comprehensive audits and competitor research ensures long-term success and growth.'
                subtitle={enshrTtl}
                subpara='At BitsWits, we recognise that each industry and market is distinct and need a customized strategy to obtain the best outcomes. Whether it’s e-commerce, banking, healthcare, or another business industry—our SEO experts dig deep to find appropriate search terms and rivals in your field, and implement their custom SEO strategy to improve conversion rates and brand visibility that ultimately leads to increased ROI.'
                subtitle2={enshrTtl2}
                subpara2='At BitsWits, the SEO experts optimize websites created using different Content Management Systems (CMS) to meet the particular needs of your platform. No matter if your website is powered by WordPress Shopify or any other platform, we improve the search engine visibility of your website by on-page and offpage, and technical SEO optimization.'
            /> */}


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
