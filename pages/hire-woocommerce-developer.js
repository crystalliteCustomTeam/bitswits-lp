import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import expStyles from '@/styles/MyExpertise.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
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
import MyExpertise from '@/components/MyExpertise';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
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
//
import icon16 from '../public/images/woocommerce/ourteam-icon-01.png'
import icon17 from '../public/images/woocommerce/ourteam-icon-02.png'
import icon18 from '../public/images/woocommerce/ourteam-icon-3.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'


export default function hireWoocommerceDeveloper() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our team of expert, experienced
        <span className='grdiant'>WooCommerce developers</span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>WooCommerce website design & build</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>WooCommerce Integration</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Theme development & integration</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Payment gateway integration</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Custom extension development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>Shipping methods development and integration</li>
        </ul>

    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>80+</strong> WooCommerce Portals to <strong>75+</strong> clients in last <strong>5 years</strong> alone</p> </>



    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>WooCommerce Development And Customization Services</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Design & Development Services
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Brand new WooCommerce store design & build
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Theme development & customization, modification
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Responsive templates creation
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    PSD to WooCommerce
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Logo/banner creation
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Custom Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WooCommerce optimization
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WordPress store customization
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WordPress Storefront theme customization with deep WooCommerce integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Customized WordPress shopping cart
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Product addition and data import
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    HTML to WooCommerce development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Versions upgrade
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Plugin development & customization
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image quality={75} src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Integration Services
                    </h5>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    3rd party systems integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Shipping method integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    New theme integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Facebook Store integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Payment gateway integration (bundled
                                    gateways or specific payment gateways)
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Configure free shipping or flat-rate shipping
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Valid schema markup for improved SEO
                                    performance
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>WooCommerce work</span></h2> </>

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

    const exmplText = <> Let's talk about your WooCommerce requirements </>




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
                infopara={infopara}
                bannerimg={banImg}
            />


            <MyExpertise
                title="Services"
                subtitle={expsubtile}
                cards={expCards}
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
