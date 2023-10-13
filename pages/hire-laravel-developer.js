import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import exmplstyles from '@/styles/CrmExamples.module.css'
import rebStyles from '@/styles/Robust.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import CrmExamples from '@/components/CrmExamples';
import Robust from '@/components/Robust';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import slide1 from '../public/images/eComDev/screenshot_1.png'
import slide2 from '../public/images/eComDev/screenshot_2.png'
import slide3 from '../public/images/eComDev/screenshot_3.png'
import slide4 from '../public/images/eComDev/screenshot_4.png'
import slide5 from '../public/images/eComDev/screenshot_5.png'
import slide6 from '../public/images/eComDev/screenshot_6.png'
import slide7 from '../public/images/eComDev/screenshot_7.png'
import slide8 from '../public/images/eComDev/screenshot_8.png'
import slide9 from '../public/images/eComDev/screenshot_9.png'
import slide10 from '../public/images/eComDev/screenshot_10.png'
//
import servc1 from '../public/images/laravel/pyt-icon1.png'
import servc2 from '../public/images/laravel/pyt-icon2.png'
import servc3 from '../public/images/laravel/pyt-icon3.png'
import servc4 from '../public/images/laravel/pyt-icon4.png'
import servc5 from '../public/images/laravel/pyt-icon5.png'
import servc6 from '../public/images/laravel/pyt-icon6.png'
import servc7 from '../public/images/laravel/pyt-icon7.png'
import servc8 from '../public/images/laravel/pyt-icon8.png'
import servc9 from '../public/images/laravel/pyt-icon9.png'
import servc10 from '../public/images/laravel/pyt-icon10.png'
import flodimg from '../public/images/laravel/lara.png'



export default function hireLaravelDeveloper() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our expert <br /><span className='grdiant'>Laravel Developers</span> today</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Laravel Extension Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Laravel Customization & Integration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Laravel Web Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Laravel Application Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Custom Laravel Programming
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Maintenance & Support
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered over <b>218 Laravel</b> projects in the last <b>9 years</b> - you can trust us with your project</p> </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>LARAVEL</span> solutions </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>White Wallzy Website</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Hyjo</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Raamdecoratiesale</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Man Company</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Fisher & Paykel</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Healthy Peach</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Cuddledown</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Gentlemen Of Salvage</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Royal Hamam</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Manduka</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your LARAVEL requirements? </>



    // rebust component data

    const rebust = <>
        <Container>
            <Row>
                <Col lg={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-2'>
                        Thinking About <span className='grdiant'>Laravel</span>?
                    </h3>
                    <p className='font18 fontf font-regular black text-center mb-5'>
                        Easy and customized Laravel services for robust business needs.
                    </p>
                </Col>
                <Col lg={12}>
                    <div className={rebStyles.laraBox}>
                        <div className={rebStyles.left}>
                            <ul className={rebStyles.clearfix}>
                                <li>
                                    <Image quality={75} src={servc1} className='img-fluid' alt="" />
                                    <span> Web Application Development  </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc2} className='img-fluid' alt="" />
                                    <span> Customisation and Integration</span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc3} className='img-fluid' alt="" />
                                    <span> Website Migration Services </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc4} className='img-fluid' alt="" />
                                    <span> Template Design and Development </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc5} className='img-fluid' alt="" />
                                    <span>
                                        Multilingual Solutions
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className={rebStyles.mid}>
                            <Image quality={75} src={flodimg} className='img-fluid' alt="" />
                        </div>

                        <div className={rebStyles.right}>
                            <ul className={rebStyles.clearfix}>
                                <li>
                                    <Image quality={75} src={servc6} className='img-fluid' alt="" />
                                    <span> Extension Development  </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc7} className='img-fluid' alt="" />
                                    <span> e-Commerce Development </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc8} className='img-fluid' alt="" />
                                    <span> Restful Application Development </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc9} className='img-fluid' alt="" />
                                    <span> Social Media Development  </span>
                                </li>
                                <li>
                                    <Image quality={75} src={servc10} className='img-fluid' alt="" />
                                    <span> SaaS App Development  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
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
                infopara={infopara}
            />


            <Robust
                rebst={rebust}
            />


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
