import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import exmplstyles from '@/styles/CrmExamples.module.css'
import whyStyles from '@/styles/whyServices.module.css'
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
import Milestones from '@/components/Milestones';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import milestones1 from '../public/images/opencart/ocart-icon-1.png'
import milestones2 from '../public/images/opencart/ocart-icon-2.png'
import milestones3 from '../public/images/opencart/ocart-icon-3.png'
import milestones4 from '../public/images/opencart/ocart-icon-4.png'
import milestones5 from '../public/images/opencart/ocart-icon-5.png'
import milestones6 from '../public/images/opencart/ocart-icon-6.png'
//
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



export default function hireOpenCartDeveloper() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire <span className='grdiant'>Opencart Developers</span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Theme development & integration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                E-Commerce Solutions
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Template Customization
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Extensions Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Version Upgrades Services
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Maintenance & Support
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We've delivered more than <strong>100+</strong> Opencart Solutions to <strong>70+</strong> clients in the last <strong>21 years</strong>. </p> </>



    // Advantages component data

    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-5'>
                        Unlimited Everything - Our Expertise Says It All!
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones1} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Single Vendor Solution</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image quality={75} src={milestones2} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Multi-Vendor Solution</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones3} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Secure Payment Processing</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones4} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Multi-Currency Management</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image quality={75} src={milestones5} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Payment Gateway Integration</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image quality={75} src={milestones6} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">3rd Party API Integration</h5>
                    </div>
                </Col>
            </Row>
        </Container>

    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Scroll down to see examples of our <span className='grdiant'>Open Cart</span> solutions</h2> </>

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

    const exmplText = <> Let's talk about your Open Cart requirements </>




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



            <Milestones
                value={value}
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
