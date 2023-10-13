import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from '@/styles/Coverage.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
import whyStyles from '@/styles/whyServices.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MyExpertise from '@/components/MyExpertise';
import WhyBuild from '@/components/WhyBuild';
//images
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import arrow from '../public/images/icons/arrow.webp'
import banImg from '../public/images/banner/mobileappbanner.png'
//
import benefitimg1 from '../public/images/industryInt/Illustrations-01.svg'
import benefitimg2 from '../public/images/industryInt/Illustrations-02.svg'
import benefitimg3 from '../public/images/industryInt/Illustrations-03.svg'
import benefitimg4 from '../public/images/industryInt/Illustrations-04.svg'
// Why Icon
import icon23 from '../public/images/fyicons/118.png'
import icon24 from '../public/images/fyicons/119.png'
import icon25 from '../public/images/fyicons/120.png'
import icon26 from '../public/images/fyicons/121.png'
import icon27 from '../public/images/fyicons/122.png'
import icon28 from '../public/images/fyicons/123.png'
import icon29 from '../public/images/fyicons/124.png'
import icon30 from '../public/images/fyicons/125.png'
import icon31 from '../public/images/fyicons/126.png'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'
import NewDecFy from '@/components/NewDecFy';


export default function mobileappdevelopment() {

    // banner component data
    const heading = <>
        <h1 className='font60 white fontf font-bold mb-1 mb-1'>
            The Leading <br></br>
            <span className='grdiant'> Magento Enterprise Solutions Company </span> <br></br>
            Powering Online Retail Innovation
        </h1>
    </>

    const para = <>

        <p className='font16 fontf font-regular fyColor justify mt-2'>
            Our Magento enterprise development services have been of highest quality for decades. Let our experts work on your project to make them succeed without hassles!
        </p>

        <ul className='mb-4 mt-2 p-0'>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Custom Module Development
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Crafting Inventive Online Stores That Attract and Convert
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Customized Theme Designs
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Sales Optimization
            </li>
        </ul>
    </>


    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black text-center'>
        We Turn App Ideas into Downloaded Reality!
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-0`}>
            <Col lg={12}>
                <p className='text-center'>
                    We don't just build applications at BitsWits, the <span className='grdiant font-bold'>top magento enterprise solutions</span> in USA. We shape smooth digital experiences. Our <span className='grdiant font-bold'>app developers</span> and creators blend imagination and creativity with empathy to envision every user's tap and swipe. From constructing back ends to pixel-perfect designs, we assure every user of an unforgettable journey.
                </p>
                <p className='text-center'>
                    We create apps that give your brand a dazzling new dimension. Because of our holistic approach, your app emotionally engages users through visuals, motion, and micro-interactions.
                </p>
            </Col>
        </Row>
    </>


    // Why Build

    const whytitle = <>
        <h3 className='font50 fontf font-bold line60 text-center mb-0 white'>Precision, Performance, Perfection</h3>
        <h2 className='font30 fontf font-bold line30 text-center fyColor mb-3 mt-2'>
            Building Mobile Applications Where Vision Meets Excellence
        </h2>
    </>

    const text =
        <p className='fyColor text-center'>
            <span>Our Renowned Magento Enterprise Solutions Helping Brands Achieve their eCommerce Goals</span>
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Custom Module Development 
                    </h5>
                    <p className='white'>
                    To expand the possibilities of your ecommerce shop, Magento developers construct new modules that are specifically suited to your individual business demands.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Integrations with Third Parties
                    </h5>
                    <p className='white'>
                    Our Magento enterprise developers expertly connect the highest quality third-party softwares, including ERP, CRM, and marketing automation solutions.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Design of a Custom Theme 
                    </h5>
                    <p className='white'>
                    Our designers produce distinctive, brand-aligned themes that entice customers to visit your shop.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon26} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Sales Optimization and Management  
                    </h5>
                    <p className='white'>
                    Our Magento enterprise solutions include tools and data analysis to improve pricing, promotions, and product listings for greater conversions and sales.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon27} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Marketing Automation
                    </h5>
                    <p className='white'>
                    With the aid of automation and data insights, Magento enterprise developers at BitsWits assist you in developing focused campaigns and customer experiences.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon28} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Flexible Infrastructure
                    </h5>
                    <p className='white'>
                    Magento enterprise developers builds an adaptable, safe, and high-performing infrastructure that can expand with the growth of your company.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon29} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Certified Magento Enterprise Developers 
                    </h5>
                    <p className='white'>
                    The team at BitsWits consists of professional Magento enterprise developers who are officially certified by Magento for their skills.
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon30} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Complex Project Experience
                    </h5>
                    <p className='white'>
                    Our Magento developers have extensive experience on complex enterprise-scale Magento projects. 
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>

                </div>
            </Col>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Costs and Time Savings 
                    </h5>
                    <p className='white'>
                    Magento enterprise Solutions provide quality and value by reducing costs, timelines, and other obstacles. 
                    </p>
                    <Link href="tel:(833) 500-6007" className="font14">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                </div>
            </Col>

        </Row>
    </>


    // Why Benefits

    const whytitle2 = <>
        <h2 className='font50 fontf font-bold line60 text-center black mb-5'>
            The Perks of Choosing the <span className='grdiant'>Magento Enterprise Solutions Company!</span>
        </h2>
    </>

    const text2 =
        <p className='black text-center mb-5'>
            The talented and professional <span className='grdiant font-bold'>Magento Enterprise Solutions</span> at BitsWits will fulfill all your goals and needs on schedule.
        </p>


    const Benefits = <>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image quality={75} src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 lheight24 font-bold'>
                                    Custom Solutions for Your Niche Audience
                                </h4>
                                <p className='font14'>
                                    Our <span className='grdiant font-bold'>Magento Enterprise Solutions</span> are aware of the distinctive nature of every business. They work closely to understand your objectives, niche and needs to develop a unique app that exactly matches your company's goals.
                                </p>
                                <Link href="tel:(833) 500-6007" className="font14 fyColor3">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image quality={75} src={benefitimg2} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 lheight24 font-bold'>
                                    Ongoing Support and Maintenance
                                </h4>
                                <p className='font14'>
                                    BitsWits provide ongoing maintenance and support long after the launch. Our <span className='grdiant font-bold'>app developers</span> regularly optimize and update your application to keep it resilient and competitive over time.
                                </p>
                                <Link href="tel:(833) 500-6007" className="font14 fyColor3">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image quality={75} src={benefitimg3} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 lheight24 font-bold'>
                                    Meeting Delivery Deadline and Reliability
                                </h4>
                                <p className='font14'>
                                    BitsWits is known for its reliability. Our <span className='grdiant font-bold'>app developers</span> understand the value of time and prioritize delivering projects on schedule without compromising quality.
                                </p>
                                <Link href="tel:(833) 500-6007" className="font14 fyColor3">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image quality={75} src={benefitimg4} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 lheight24 font-bold'>
                                    Better Security and Data Confidentiality
                                </h4>
                                <p className='font14'>
                                    Our <span className='grdiant font-bold'>Magento Enterprise Solutions</span> focus on protecting your data and sensitive information. We prioritize confidentiality and ensure to maintain the trust between the user and the company.
                                </p>
                                <Link href="tel:(833) 500-6007" className="font14 fyColor3">
                        <span>Connect Now</span>
                        <Image quality={75} src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'>
            Our professional <span className='grdiant font-bold'>app developers</span> have the expertise to put flesh on the bones of your app ideas by providing the best <span className='grdiant font-bold'>Magento Enterprise Solutions</span>.
        </p>
    </>


    // Why Build

    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font50 black fontf font-bold line60 black text-center'>
                    The <span className='grdiant'>Magento Enterprise Solutions</span> Process at BitsWits!
                </h4>
                <p>
                    Our Magento Enterprise Solutions process is designed to be innovative, efficient, and transparent. Our <span className='grdiant font-bold'>Magento Enterprise Solutions services</span> offer you the following:
                </p>
            </Col>
        </Row>
        <Row>
            <Col lg={7}>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image quality={75} src={icon32} width={20} className='img-fluid' />
                        Initial Consultation
                    </h4>
                    <p>
                        Our <span className='grdiant font-bold'>app developers</span> begin with understanding your objectives, obstacles, and limitations you have in mind for your app.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image quality={75} src={icon32} width={20} className='img-fluid' />
                        Gathering Requirements
                    </h4>
                    <p>
                        We'll work with you to define the specific requirements and functionality for your business app.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image quality={75} src={icon32} width={20} className='img-fluid' />
                        Design and Prototyping
                    </h4>
                    <p>
                        In order to give you a sense of how your app will look and work, we design wireframes and prototypes.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image quality={75} src={icon32} width={20} className='img-fluid' />
                        Development
                    </h4>
                    <p>
                        Our team builds applications using agile approaches and methodologies for security, speed, and integration that help create your app in a way that swiftly responds to any issues or modifications.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image quality={75} src={icon32} width={20} className='img-fluid' />
                        Testing and Quality Control
                    </h4>
                    <p>
                        We thoroughly test your app to ensure it is reliable, stable, and easy to use. Our QA process checks functionality, UI, cross-platform compatibility, security, and compliance.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image quality={75} src={icon32} width={20} className='img-fluid' />
                        Launch and Deployment
                    </h4>
                    <p>
                        Our <span className='grdiant font-bold'>app developers</span> assist with deployment, guiding you through app store submissions and helping launch your app for success. We offer ongoing support post-launch to guarantee a smooth experience
                    </p>
                </div>
            </Col>
            <Col lg={5}>
                <div className={styles.contactform}>
                    <div className=''>
                        <h3 className='font20 font-bold mb-3'>Get a Free Consultation</h3>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <input type='text' className={styles.forminput} placeholder='Your Name' />
                        </Col>
                        <Col lg={12}>
                            <input type='number' className={styles.forminput} placeholder='Phone Number' />
                        </Col>
                        <Col lg={12}>
                            <input type='email' className={styles.forminput} placeholder='Email Address' />
                        </Col>
                        <Col lg={12}>
                            <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                        </Col>
                        <Col lg={12}>
                            <input type='Submit' className={styles.notice} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>


    return (
        <>
            <Head>
                <title>Top Magento Enterprise Solutions Company - Bitswits.</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                bgClass="mobile"
            />

            <NewDecFy />

            <MyExpertise
                title="EXPERTISE"
                subtitle={expsubtile}
                cards={expCards}
                className='bgColorf'
            />

            <WhyBuild
                title="WHY BITSWITS?"
                cards={WhyBuilds}
                subtitle={whytitle}
                text={text}
                chngColor="bgColor"
            />

            <WhyBuild
                title={<> <span className='fyColor2'>BITSWITS ADVANTAGE</span> </>}
                cards={Benefits}
                subtitle={whytitle2}
                // text={text2}
                alignclass="midBuild"
            />

            <OurProject />

            <ClientsThink />

            <Nextproject />

            <Contact />
        </>
    )
}
