import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import expertStyle from '@/styles/Experts.module.css'
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
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
import Experts from '@/components/experts';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import icon24 from '../public/images/symfony/symicon-1.png'
import icon25 from '../public/images/symfony/symicon-2.png'
import icon26 from '../public/images/symfony/symicon-3.png'
import icon27 from '../public/images/symfony/symicon-4.png'
import icon28 from '../public/images/symfony/symicon-5.png'
import icon29 from '../public/images/symfony/symicon-6.png'
import icon30 from '../public/images/symfony/symicon-7.png'
import icon31 from '../public/images/symfony/symicon-8.png'
import icon32 from '../public/images/symfony/symicon-9.png'
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
import b1 from '../public/images/symfony/jobportal-1.png'
import b2 from '../public/images/symfony/jobportal-2.png'
import b3 from '../public/images/symfony/jobportal-3.png'
import b4 from '../public/images/symfony/jobportal-4.png'
import b5 from '../public/images/symfony/jobportal-5.png'
import b6 from '../public/images/symfony/jobportal-6.png'




export default function hireSymfonyDeveloper() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our expert <span className='grdiant'>Symfony developers</span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Website Design & Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Enterprise Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Web Applications Development
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Customization & Integration
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                E-commerce Solutions
            </li>
            <li className="font16 fontf font-medium black">
                <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>
                Social Networking Solutions
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We've delivered more than <strong>114+</strong> Symfony solutions since Symfony launched, back in 2005.</p> </>



    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Benefits of using the <span className='grdiant'>Symfony</span> framework
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Speed</h5>
                    <p>
                        The latest release of the software, Symfony2 is fast. As far as websites build on this framework are concerned, you don’t need to worry about slow loading or even incomplete loading.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Performance</h5>
                    <p>
                        This framework can handle heavy, multi-tiered websites without compromising on performance as long as you are smart when you hire a Symfony Developer. Another reason why the performance of the code is great, is easy testing. The framework has a layer that works well with testing, allowing us to gauge the performance of the code at all levels.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Debugging</h5>
                    <p>
                        We developers love frameworks that make debugging easy and Symfony does just that. In the end, this helps us identify any mistakes in the code, any paths that aren’t working, and correct it. The product you get is efficient because of the powerful debugging toolbar and profiler.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Bundles</h5>
                    <p>
                        They are one of the best features of Symfony2. They give us a choice. We can use the entire framework and develop a complex website. We have the option of building the website to your specifications, disregarding applications that you don’t need.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">SEO Friendly URL (Routing)</h5>
                    <p>
                        The framework is perfect when the concern is finding an appropriate, attractive and an SEO friendly URL. Unlike most platforms, when a site is made on the Symfony framework the concern of an SEO friendly URL is almost finished, and what is left is just meeting other demands of SEO.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Rapid Application Development</h5>
                    <p>
                        They are one of the best feature of Symfony 2 RAD (rapid application development), it is a concept that products can be developed faster and of higher quality.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Well Maintained Coding Standards</h5>
                    <p>
                        This framework maintained coding standard in the website development, so we developers follow the same coding standard during the website development.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Ready to use Plugins or Add-ons from Community support</h5>
                    <p>
                        This framework has a massive range of inbuilt features with respect to any new functionality. Having these already installed plugins helps the Symfony developers with the work of the website development, rather perfectly without any major complications.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className="font20 fontf font-bold line30">Easy To Extend, Allowing for Integration With Other Vendor Libraries</h5>
                    <p>
                        This framework allows to integrate 3rd party API’s or other vendor libraries into the application in easy way.
                    </p>
                </div>
            </Col>
        </Row>

    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Scroll down to see examples of our <span className='grdiant'>Symfony</span> work</h2> </>

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

    const exmplText = <> Let's start talking about your project </>



    // experts  component data

    const experttitle = <h4 className='font40 black fontf font-bold line60 black text-center'>Our Symfony expertise includes
    </h4>

    const experts = <>
        <Container>
            <Row className={`${expertStyle.expertRow} justify-content-evenly`}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b1} alt='BitsWits' className='img-fluid' />
                        <h4>CUSTOM WEB DEVELOPMENT</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b2} alt='BitsWits' className='img-fluid' />
                        <h4>PAYMENT GATEWAY INTEGRATION</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b3} alt='BitsWits' className='img-fluid' />
                        <h4>3RD PARTY API INTEGRATION</h4>
                    </div>
                </Col>
            </Row>
            <Row className={`${expertStyle.expertRow} justify-content-evenly mt-4`}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b4} alt='BitsWits' className='img-fluid' />
                        <h4>JOB PORTAL DEVELOPMENT</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b5} alt='BitsWits' className='img-fluid' />
                        <h4>EVENT MANAGEMENT</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image quality={75} src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>CRM APPLICATIONS</h4>
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



            <Experts
                cards={experts}
                subtitle={experttitle}
            />



            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />


            <WhyBuild
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
