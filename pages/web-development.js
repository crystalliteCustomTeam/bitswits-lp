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
import icon23 from '../public/images/fyicons/127.png'
import icon24 from '../public/images/fyicons/128.png'
import icon25 from '../public/images/fyicons/129.png'
import icon26 from '../public/images/fyicons/130.png'
import icon27 from '../public/images/fyicons/131.png'
import icon28 from '../public/images/fyicons/132.png'
import icon29 from '../public/images/fyicons/133.png'
import icon30 from '../public/images/fyicons/134.png'
import icon31 from '../public/images/fyicons/135.png'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'
import NewDecFy from '@/components/NewDecFy';


export default function mobileappdevelopment() {

    // banner component data
    const heading = <>
        <h1 className='font60 white fontf font-bold mb-1 mb-1'>
            Building Futuristic Applications With Our World-Class
            <span className='grdiant'> Web App Development Company</span>
        </h1>
    </>

    const para = <>

        <p className='font16 fontf font-regular fyColor justify mt-2'>
            At BitsWits, our web application developers focus on creating web solutions and improving brand identity. Connect with us and let our experts fill your apps with creativity and entertainment.
        </p>

        <ul className='mb-4 mt-2 p-0'>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Increased demand and functionality with scalable web apps.
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Smart solutions into web apps.
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Combining technology and innovation to create intelligent online apps.
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Innovative web app development
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
                    We don't just build applications at BitsWits, the <span className='grdiant font-bold'>top mobile app development company</span> in USA. We shape smooth digital experiences. Our <span className='grdiant font-bold'>app developers</span> and creators blend imagination and creativity with empathy to envision every user's tap and swipe. From constructing back ends to pixel-perfect designs, we assure every user of an unforgettable journey.
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
            How Our Web Application Developers Take Websites from Blah to Wow!
        </h2>
    </>

    const text =
        <p className='fyColor text-center'>
            <span>Building your mobile app</span> boosts business services, attracts customers, and shapes success.
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                        E-Commerce Development
                    </h5>
                    <p className='white'>
                        We create feature-rich online shops that are optimized for simplified usage and sales. Extensive product brochures, secure checkout, promotions, SEO, and other features are available on our eCommerce platforms.
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
                        Personalized Portal Development
                    </h5>
                    <p className='white'>
                        Our web developers create branded, private portals that accelerate procedures and centralize access, communication, and collaboration.
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
                        Game Design
                    </h5>
                    <p className='white'>
                        Our web application developers create interactive web games using a variety of technologies, including HTML5, WebGL, and JavaScript. Our games draw players in with amazing graphics, engaging gameplay, and social features.
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
                        LMS and Learning Platforms
                    </h5>
                    <p className='white'>
                        For the purpose of providing online training and courses, we construct reliable learning management systems. Course creation, testing, certification, and social learning are all part of our LMS solutions.
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
                        Database and Listings
                    </h5>
                    <p className='white'>
                        To link consumers with pertinent providers and companies, we provide specialized directories and classified websites. On our platforms, users can browse, search, check reviews, make reservations, and more.
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
                        Sites for Social Networking
                    </h5>
                    <p className='white'>
                        We create social networks that link members based on shared interests and goals. Modern features on our social networks include profiles, newsfeeds, chat, groups, and more.
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
                        Streaming Multimedia
                    </h5>
                    <p className='white'>
                        We build platforms for streaming rich media, including music, video, and photos. Our platforms include responsive playback, playlists, comments, and other features.
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
                        Custom CMS Solutions
                    </h5>
                    <p className='white'>
                        Our web app developers provide adaptable content management solutions that are customized to your unique content processing requirements.
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
                        Portals for Real Estate
                    </h5>
                    <p className='white'>
                        We create real estate portals that showcase the latest features like mortgage calculation, agent biographies, virtual tours, tax reports metrics and 360-Degree Entity Management.
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
        <h2 className='font50 fontf font-bold text-center black mb-5'>
            Let the Heroes of Top <span className='grdiant'>Web App Development Company</span> Rescue from Overflow Work and Save the Day by Offloading Projects!
        </h2>
    </>

    const text2 =
        <p className='black text-center mb-5'>
            The talented and professional <span className='grdiant font-bold'>mobile app developers</span> at BitsWits will fulfill all your goals and needs on schedule.
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
                                    Expertise and Capabilities
                                </h4>
                                <p className='font14'>
                                    Our expert group of <span className='grdiant font-bold'>web app developers and designers </span>has built web applications for businesses and startups. We keep up with the most recent trends in web and mobile app development and can create anything from basic CRUD applications to more intricate SaaS solutions.
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
                                    Specialized Talents and Skills
                                </h4>
                                <p className='font14'>
                                    Our team offers expertise in advanced technologies like <span className='grdiant font-bold'>machine learning, augmented reality, real-time communication, and blockchain,</span> in addition to more conventional talents like React and Node. We can assist with integrating modern features.
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
                                    Increased Development Bandwidth
                                </h4>
                                <p className='font14'>
                                    By delegating work to us, you lighten the pressure on your <span className='grdiant font-bold'>present developers.</span> This enables them to concentrate on their strategic ambitions and primary goals rather than extra tasks.
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
                                    Latest Tech Stack
                                </h4>
                                <p className='font14'>
                                    Our <span className='grdiant font-bold'>top web application developers</span> remain up to date with contemporary web stacks like React, Angular, Node, and Golang. We can create apps that are more accessible and maintainable
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
            Our professional <span className='grdiant font-bold'>app developers</span> have the expertise to put flesh on the bones of your app ideas by providing the best <span className='grdiant font-bold'>mobile app development services</span>.
        </p>
    </>


    // Why Build

    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font50 black fontf font-bold line60 black text-center'>
                    The <span className='grdiant'>Mobile App Development</span> Process at BitsWits!
                </h4>
                <p>
                    Our mobile app development process is designed to be innovative, efficient, and transparent. Our <span className='grdiant font-bold'>mobile app development services</span> offer you the following:
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
                <title>Top Mobile App Development Company - Bitswits.</title>
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
                // text={text}
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
