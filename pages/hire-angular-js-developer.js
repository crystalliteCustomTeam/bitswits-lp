import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import reStyles from '@/styles/MyReason.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import crmstyles from '@/styles/CRMExperts.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import styles from '@/styles/Coverage.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import CRMExperts from '@/components/CRMExperts';
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import aheadimage from '../public/images/services/webAhead.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon16 from '../public/images/crmDev/crm-choose-icon1.png'
import icon17 from '../public/images/crmDev/crm-choose-icon2.png'
import icon18 from '../public/images/crmDev/crm-choose-icon3.png'
import icon19 from '../public/images/crmDev/crm-choose-icon4.png'
import icon20 from '../public/images/crmDev/crm-choose-icon5.png'
import icon21 from '../public/images/crmDev/crm-choose-icon6.png'
import icon22 from '../public/images/crmDev/crm-choose-icon7.png'
import icon23 from '../public/images/crmDev/crm-choose-icon8.png'
//Why Icon
import icon24 from '../public/images/automatically/1.png'
import icon25 from '../public/images/automatically/2.png'
import icon26 from '../public/images/automatically/3.png'
import icon27 from '../public/images/automatically/4.png'
import icon28 from '../public/images/automatically/5.png'
import icon29 from '../public/images/automatically/6.png'
import icon30 from '../public/images/automatically/7.png'
import icon31 from '../public/images/automatically/8.png'

//
import slide1 from '../public/images/spotlight/1.png'
import slide2 from '../public/images/spotlight/2.png'
import slide3 from '../public/images/spotlight/3.png'
import slide4 from '../public/images/spotlight/4.png'
import slide5 from '../public/images/spotlight/5.png'
import slide6 from '../public/images/spotlight/6.png'
import slide7 from '../public/images/spotlight/7.png'
import slide8 from '../public/images/spotlight/8.png'
import slide9 from '../public/images/spotlight/9.png'
import slide10 from '../public/images/spotlight/10.png'
import slide11 from '../public/images/spotlight/11.png'
import slide12 from '../public/images/spotlight/12.png'
import slide13 from '../public/images/spotlight/13.jpg'
import slide14 from '../public/images/spotlight/14.png'
import slide15 from '../public/images/spotlight/15.png'
import slide16 from '../public/images/spotlight/16.png'
import slide17 from '../public/images/spotlight/17.png'
import slide18 from '../public/images/spotlight/18.png'
import slide19 from '../public/images/spotlight/19.png'
import slide20 from '../public/images/spotlight/20.png'


export default function hireangularjsdeveloper() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our expert in-house
        <br></br> <span className='grdiant'>   AngularJS developers  </span>  from
        just $20/hr </h1>

    const para = <>



        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> AngularJS Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> AngularJS Consulting</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> AngularJS Maintenance & Support</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Custom AngularJS Solutions</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  Dynamic Web Applications</li>

        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-3'>Our 60-person dedicated in-house AngularJS
    team have developed over 184 AngularJS solutions
    (at the last count)! What can we do for you?</p> </>



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


    // CRMExpert component data

    const crmtitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Why choose
        <span className='grdiant'> CRM Experts</span> and Developers from BitsWits?
    </h2>

    const crmCards = <>
        <Row className={`${crmstyles.soluRow} mt-5`}>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        Our experts have the experience in using great technologies like MS Dynamics CRM and Salesforce solutions for domains ranging from Medical legal firms, Telecommunication industries, Travel.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’re great at Custom CRM Development
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ve served our clients on a vast industrial spectrum ranging from enterprises to medium and small scale organisations.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon20} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ll be responsible for complete document management.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We have the knowledge of carrying out all integrations with Microsoft SharePoint.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        Want updates and migration services? We can do it for you.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ll be responsible for Upgrade and Migration
                    </p>
                </div>
            </Col>
        </Row>
    </>


    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Superior  <span className='grdiant'>AngluarJS</span> Solutions
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Improved Design
Architecture
                    </h5>
                    <p>With our skills and expertise we can make the application and its functionality more efficient with our improved design architecture.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Code
Re-Usability
                    </h5>
                    <p>Developers can now re-use the codes or the components, written in different applications, thus making Angular JS development a very unique framework.</p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Better Plug & Play
Components
                    </h5>
                    <p>If you wish to add your current components into a new application, you simply need to just copy & paste the current components into a new one. All assets will be available automatically.</p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Rapid Application
Development
                    </h5>
                    <p>The MVC architecture ensures that the application development, testing and maintenance is efficient.</p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Handles
Dependencies
                    </h5>
                    <p>Dependency injection is something Angular JS is famous for and it does it really well. It particularly shines in two areas, namely testing & Single Page Application (SPA) design.</p>


                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Parallel
Development
                    </h5>
                    <p>As Angular JS can handle dependencies it allows the developer to create a parallel application where it can score over other frameworks!</p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Give Controls
to Developers
                    </h5>
                    <p>It creates the opportunity for the developers to experiment with HTML and gives them complete independence to make the web development process a responsive and dynamic one!</p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Helps Manage
State
                    </h5>
                    <p>No matter the state of your application, our developers will help you to manage properties, permissions, and other major concerns across your application!</p>

                </div>
            </Col>
          






        </Row>

    </>





    // Exmple component data

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Scroll down to see examples of our <br></br> <span className='grdiant'>.Net work...</span>
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>High Tournaments</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Roses FM</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Open Door TBA</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Camera Click Assistant</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop - Admin</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>


            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Book Review</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Wishy Washy Delivery Boy</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Wishy Washy</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Shoppy Mall</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Card Maker Hub</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide11} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>GS1 Barcode Generator</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide12} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>AudioBooster</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide13} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>DailyStep English</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide14} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Radio Tune</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide15} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Third Eye</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide16} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Location Finder</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide17} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Book a Builder</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide18} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Take5</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide19} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Fifit</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide20} className="img-fluid" />
                </div>
            </div>

        </Slider>
    </>

    const exmplText = <>Our clients tell us they are amazed by... </>

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

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}



            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
            /> */}

            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />



            {/* <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}
            /> */}





            {/* <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'
            /> */}


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
