import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from '@/styles/Coverage.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import Howweare from '@/components/Howweare';
import icon11 from '../public/images/howweare/howweare.png'
import Whatwedo from '@/components/Whatwedo';
import Maintainingservices from '@/components/Maintainingservices';
import icon12 from '../public/images/howweare/whatwedo.png'

//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import About from '@/components/Aboutnewdesignservice'
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
import icon23 from '../public/images/fyicons/1.png'
import icon24 from '../public/images/fyicons/2.png'
import icon25 from '../public/images/fyicons/3.png'
import icon26 from '../public/images/fyicons/4.png'
import icon27 from '../public/images/fyicons/5.png'
import icon28 from '../public/images/fyicons/6.png'
import icon29 from '../public/images/fyicons/7.png'
import icon30 from '../public/images/fyicons/8.png'
import icon31 from '../public/images/fyicons/9.png'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'
import NewDecFy from '@/components/NewDecFy';



import icon1 from '../public/images/servicesnewicon/1.png'
import icon2 from '../public/images/servicesnewicon/2.png'
import icon3 from '../public/images/servicesnewicon/3.png'
import icon4 from '../public/images/servicesnewicon/4.png'
import icon5 from '../public/images/servicesnewicon/5.png'
import icon6 from '../public/images/servicesnewicon/6.png'
import icon7 from '../public/images/servicesnewicon/7.png'
import icon8 from '../public/images/servicesnewicon/8.png'

import news1 from '/public/images/new2/new1.svg'
import news2 from '/public/images/new2/new2.svg'
import news3 from '/public/images/new2/new3.svg'
import news4 from '/public/images/new2/new4.svg'
import news5 from '/public/images/new2/new5.svg'
import news6 from '/public/images/new2/new6.svg'
import news7 from '/public/images/new2/new7.svg'


export default function mobileappdevelopment() {

    // banner component data
    const heading = <>
        <h1 className='font60 white fontf font-bold mb-1'>
            Top <br></br> <span className='grdiant'>Mobile App Development Company</span> <br></br> Empowering People, Enriching Lives

        </h1>
    </>

    const para = <>

        <p className='font16 fontf font-regular fyColor justify mt-2'>
            At BitsWits, we redefine what a mobile app development company can achieve. Beyond <br></br> just coding, each project is an opportunity for unique mobile app creation, tailor-made <br></br> to manifest your vision.
        </p>

        <ul className='mb-4 mt-2 p-0'>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Chart-topping Expertise: Our reputation speaks for itself.
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Custom Solutions: Tailored specifically to your needs.
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Beyond the Launch: Our commitment continues post-deployment.
            </li>
            <li className="font15 fontf font-medium fyColor ">
                <Image quality={75} src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Always Accessible: For all your needs, at any time.
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
            Building Mobile Applications Where Vision Meets Excellence
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
                        Greater Customer Reach
                    </h5>
                    <p className='white'>
                        Mobile apps allow you to connect with customers anywhere and anytime worldwide.
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
                        Improved Customer Service
                    </h5>
                    <p className='white'>
                        Features like in-app chat and customer support assist in resolving issues while enhancing customer satisfaction.
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
                        Shared Valuable Content
                    </h5>
                    <p className='white'>
                        Mobile applications improve learning experiences by offering interesting content, podcasts, and videos to read and watch.
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
                        Customer Loyalty
                    </h5>
                    <p className='white'>
                        Mobile apps foster ongoing engagement and allow you to deliver customized offers and experiences.
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
                        Drive Sales
                    </h5>
                    <p className='white'>
                        Mobile applications provide a convenient way for customers to purchase your products and services on the go.
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
                        Simplified Payments
                    </h5>
                    <p className='white'>
                        Mobile applications allow users to instantly pay, donate, and order without any hassle.
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
                        Increased Visibility
                    </h5>
                    <p className='white'>
                        A prominent icon of your app with an elegant theme color on the user's home screen acts as a constant reminder to interact.
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
                        Competitive Advantage
                    </h5>
                    <p className='white'>
                        Innovative mobile apps set you apart, opening new opportunities to engage users, collect data, improve customer service, and drive revenue.
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
                        Future-Proof Your Business
                    </h5>
                    <p className='white'>
                        Cell phones are the present and future of the digital realm, and a mobile app makes your business accessible anytime and anywhere.
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
            The Perks of Choosing the <span className='grdiant'>Top Mobile App Development Company!</span>
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
                                    Custom Solutions for Your Niche Audience
                                </h4>
                                <p className='font14'>
                                    Our <span className='grdiant font-bold'>mobile app developers</span> are aware of the distinctive nature of every business. They work closely to understand your objectives, niche and needs to develop a unique app that exactly matches your company's goals.
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
                                    Our <span className='grdiant font-bold'>mobile app developers</span> focus on protecting your data and sensitive information. We prioritize confidentiality and ensure to maintain the trust between the user and the company.
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

            <About
            newprps = 'newprps'
            
            />

            <Howweare

                subtitle='WHO WE ARE'
                title={<>  Expert Mobile App Development Services from a Leading Mobile App Development Company </>}
                para='Mobile app development is a challenging field, and at Bitswits, we confidently recruit only the very best - exceptional talents with the required expertise and a strong drive for growth.'
                para1='Our team comprises highly skilled professionals, a blend of expert mobile developers, innovative designers, and strategic thinkers.'
                linkdem={<>  Get to know us </>}
                icon1={icon11}
            />

            <Whatwedo

                subtitle='WHAT WE DO'
                title={<>  Turn Dreams into Reality with Our Mobile App Solutions </>}
                para= { <> Every digital solution tells a story, and at Bitswits, our tale is about pushing boundaries. Driven by a team of top-tier mobile app developers, we engineer mobile app solutions that don't just meet but exceed expectations. Through a fusion of art and technology, our apps aren’t just built — they’re crafted to inspire, engage, and transform the digital narrative. </> }
                linkdem={<>  Get to know us </>}
                icon12={icon12}

            />

            <Maintainingservices
            
            subtitle = 'Services'
            title = {  <>  Transforming Visions into Reality with <br></br> Exceptional Mobile App Solutions </> }
            paratext = { <> At BitsWits, our expert team specializes in professional app development.  Whether you want to build an app from <br></br> scratch or make an app that stands out, we're here to turn your ideas into reality. </> }

            icon1 = {icon1}
            title1 = 'iOS App Development'
            para1 = 'The mobile apps developed by app developers at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.'


            icon2 = {icon2}
            title2 = 'Android App Development'
            para2 = { <> Enter the vast Android universe with Bitswits, your trusted Android app development company. Our Android app solutions cater to diverse devices, ensuring a seamless user experience. With adept Android app developers on our side, your project is in safe hands. </> }


            icon3 = {icon3}
            title3 = 'Flutter App Development'
            para3 = { <> Flutter is more than a buzzword for us; it's our passion. As a pioneering Flutter app development company, we employ the latest tools and techniques to offer innovative app solutions. Rely on our Flutter app developers to craft apps that resonate with your audience. </> }

            icon4 = {icon4}
            title4 = 'Web App Development'
            para4 = 'Make your mark on the web with Bitswits, the web app development company that understands your vision. Our web app solutions are designed for impact, ensuring you make the right impression. Our web app developers are here to turn your dream into a digital reality.'

            icon5 = {icon5}
            title5 = 'Custom App Development'
            para5 = {<> Every brand is distinct, and so should be its app. As your chosen custom app development company, we offer tailor-made app solutions that mirror your brand's essence. With a team of adept custom app developers, we promise a product that stands out. </> }

            icon6 = {icon6}
            title6 = 'React Native App Development'
            para6 = {  <> Embrace the best of both iOS and Android with React Native. As a seasoned React Native app development company, our app solutions ensure consistent performance across devices. Our skilled React Native app developers craft apps that spell perfection. </> }

            
            
            
            />




            {/* <MyExpertise
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
            /> */}

            <OurProject />

            <ClientsThink />

            <Nextproject />

            <Contact />
        </>
    )
}
