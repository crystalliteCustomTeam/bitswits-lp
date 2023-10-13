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
import icon23 from '../public/images/fyicons/64.png'
import icon24 from '../public/images/fyicons/65.png'
import icon25 from '../public/images/fyicons/66.png'
import icon26 from '../public/images/fyicons/67.png'
import icon27 from '../public/images/fyicons/68.png'
import icon28 from '../public/images/fyicons/69.png'
import icon29 from '../public/images/fyicons/70.png'
import icon30 from '../public/images/fyicons/71.png'
import icon31 from '../public/images/fyicons/72.png'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'
import NewDecFy from '@/components/NewDecFy';


export default function mobileappdevelopment() {

    // banner component data
    const heading = <>
        <h1 className='font60 white fontf font-bold mb-1'>
            Innovate On Any Device with Top <br></br> <span className='grdiant font-bold'> React Native App Development Company</span> <br></br> In USA

        </h1>
    </>

    const para = <>

        <p className='font16 fontf font-regular fyColor justify mt-2'>
        Our professional <span className='grdiant font-bold'>React Native app developers</span> at BitsWits, have a diverse portfolio of clients. Connect with us today to utilize our expertise in your projects!
        </p>

        <ul className='mb-4 mt-2 p-0'>



            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>2000+ apps launched and counting  </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>99% customer satisfaction rate  </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>250+ in-house React Native developers  </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>Transparent and competitive pricing  </li>


        </ul>
    </>


    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black text-center'>
        The Approach We Utilize at BitsWits for <span className='grdiant font-bold'>React Native App Development</span>
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-0`}>
            <Col lg={12}>
                <p className='text-center'>
                Our approach to React Native app development is defined by expertise and innovation. We stay at the forefront of technology trends to develop robust mobile applications. We prioritize open communication with our clients, making sure their ideas and feedback guide our development process. 
                </p>
                <p className='text-center'>
                With an emphasis on quality, flexibility, and user-centric design, our approach at BitsWits distinguishes us in the realm of React Native app development.
                </p>
            </Col>
        </Row>
    </>


    // Why Build

    const whytitle = <>
        <h3 className='font50 fontf font-bold line60 text-center mb-0 white'>Precision, Performance, Perfection</h3>
        <h2 className='font30 fontf font-bold line30 text-center fyColor mb-3 mt-2'>
        Why is There a Need for <span className='grdiant font-bold'>React Native Apps</span>?
        </h2>
    </>

    const text =
        <p className='fyColor text-center'>
          <span className='grdiant font-bold'> React Native app development services</span> provide substantial savings in terms of development time, effort, and cost and enable the building of high-quality Android and iOS apps.
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Cross-Platform Saves Cost and Time
                    </h5>
                    <p className='white'>
                    React native apps allow building one application that runs on both iOS and Android from a single JavaScript codebase. 
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
                    Better and Native Performance
                    </h5>
                    <p className='white'>
                    For near-native performance, React Native compiles native code. It doesn’t have hybrid lag like other cross-platform options
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
                    Reusability 
                    </h5>
                    <p className='white'>
                    Development is accelerated by the ability to reuse a significant amount of code, such as business logic and APIs, between iOS and Android.
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
                    Live Reloading 
                    </h5>
                    <p className='white'>
                    Live reloading speeds the development process by allowing code updates to be made instantly
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
                    Open-Source Framework 
                    </h5>
                    <p className='white'>
                    At BitsWits, our team utilizes the active open source React Native framework to build applications without bugs.
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
                    Corporate Backed 
                    </h5>
                    <p className='white'>
                    Developed and backed by talented individuals in the field, including Facebook, Microsoft, Shopify, and others.
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
                    Familiar Tools 
                    </h5>
                    <p className='white'>
                    <span className='grdiant font-bold'>React native app developers</span> build apps utilizing well-known React pattern libraries and common native technologies like Xcode, Android Studio, etc. 
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
                    Future-Proof Your Business
                    </h5>
                    <p className='white'>
                    Cell phones are the present and future of the digital realm, and a mobile app makes your business accessible anytime and anywhere
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
                    Built-In Platform Accessibility 
                    </h5>
                    <p className='white'>
                    The built-in mobile platform APIs allow for the straightforward incorporation of features like camera, location, and storage.
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
        <h2 className='font50 fontf font-bold line60 text-center black mb-3'>
        The Benefits to Jumpstart Your Journey with <span className='grdiant font-bold'>React Native App Development Company</span>
        </h2>
    </>

    const text2 =
        <p className='black text-center mb-5'>
           The professional <span className='grdiant font-bold'>Reactive Native app developers</span> at BitsWits will fulfill all your goals and demands on schedule.
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
                                Experience and Expertise 
                                </h4>
                                <p className='font14'>
                                Our <span className='grdiant font-bold'>React native app developers</span> provide the best-quality services as per their expertise and experience, which ensures excellence in all aspects of your application. 
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
                                Proven Track Record
                                </h4>
                                <p className='font14'>
                               <span className='grdiant font-bold'>  React Native app developers</span> at BitsWits have successfully delivered complicated projects for satisfied clients across multiple industries, which portrays their capabilities and abilities.
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
                                Swift Speed
                                </h4>
                                <p className='font14'>
                                For quick prototypes and prompt delivery, our React native app developers efficiently utilize <span className='grdiant font-bold'>React Native development</span> features. Now is the time to say NO to all the slower and older applications.
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
                                On-Going Support
                                </h4>
                                <p className='font14'>
                                The team at BitsWits not only delivers the app but provides maintenance, improvements, and lifetime support. Isn’t that all you need?
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
        Our professional <span className='grdiant font-bold'>native app developers</span> have the expertise to put a spark in your app ideas by providing the best <span className='grdiant font-bold'>react native app development services.</span>
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
                <title>Top React Native App Development Company - Bitswits</title>
                <meta name="description" content="Want a team of experienced React Native App Developers? We've got them! Whether you're a start-up or an established business, our developers are equipped." />
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
                text={text2}
                alignclass="midBuild"
            />

            <OurProject />

            <ClientsThink />

            <Nextproject />

            <Contact />
        </>
    )
}
