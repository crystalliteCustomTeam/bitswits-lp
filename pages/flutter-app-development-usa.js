import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'

import { Container, Row, Col } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'
import servicesmobile from '/public/images/servicesmobilephone/1.webp'
import servicesmobile2 from '/public/images/servicesmobilephone/2.webp'
import servicesmobile3 from '/public/images/servicesmobilephone/3.webp'
import servicesmobile4 from '/public/images/servicesmobilephone/4.webp'
import servicesmobile5 from '/public/images/servicesmobilephone/5.webp'
import servicesmobile6 from '/public/images/servicesmobilephone/6.webp'
import Endorsements from '@/components/Endorsements'
import Homevideo from '@/components/Homevideo'
import Whatourclients from '@/components/Whatourclients'
import Partner from '@/components/Partner'
import Servicesmobile from '@/components/Servicesmobile'
import Publication from '@/components/Publication'
import Range from '@/components/Range'
import Integration from '@/components/Integration'
import Hireus from '@/components/Hireus'
import Consultation from '@/components/Consultation'
import Faqs from '@/components/Faqs'
import GetInTouch from '@/components/GetInTouch'
import Locations from '@/components/Locations'
import Videotestimonial from '@/components/Videotestimonial'
import Findfood from '@/components/Findfood'
import Cab from '@/components/Cab'
import Musicapp from '@/components/Musicapp'
import Consultancy from '@/components/Consultancy'
import About from '@/components/About'
import ClientsThinklp from '@/components/ClientsThinklp'
import Ready from '@/components/Ready'
import Scalable from '@/components/Scalable'
import Enhanced from '@/components/Enhanced'
import Transforming from '@/components/Transforming'
import Yearsofexpertise from '@/components/Yearsofexpertise'
import Counter from '@/components/Counter'
import React, { useState } from 'react';
import icon1 from '../public/images/mobilelpservices/sideimg.png'
import icon2 from '../public/images/mobilelpservices/game.png'
import icon3 from '../public/images/mobilelpservices/web30.png'
import icon4 from '../public/images/mobilelpservices/blockchain.png'
import icon5 from '../public/images/mobilelpservices/webflow.png'
import icon6 from '../public/images/mobilelpservices/artifical.png'
import Ourservices from '@/components/Ourservices'
import NewBannerFy from '@/components/NewBannerFy'
import NewSliderFy from '@/components/NewSliderFy'
import Aboutlp from '@/components/Aboutlp'
import Lookingforlp from '@/components/Lookingforlp'
import Ourportfoliolp from '@/components/Ourportfoliolp'
import Digitallp from '@/components/Digitallp'
import Contact from '@/components/Contact'
import NewDecFy from '@/components/NewDecFy'
import FaqsLp from '@/components/FaqsiosLp'
import Consultation2 from '@/components/Consultation2'
import Creativeopportunities from '@/components/Creativeopportunities'
import engagement from '/public/images/step/mobile2.webp'
import Tabplays from '@/components/Tabplays';
import Link from 'next/link'

import new1 from '/public/images/new1/1.webp'
import new2 from '/public/images/new1/2.webp'
import new3 from '/public/images/new1/3.webp'
import new4 from '/public/images/new1/4.webp'
import new5 from '/public/images/new1/5.webp'

import news1 from '/public/images/new2/1.webp'
import news2 from '/public/images/new2/2.webp'
import news3 from '/public/images/new2/3.webp'
import news4 from '/public/images/new2/4.webp'
import news5 from '/public/images/new2/5.webp'


import Image from 'next/image'

export default function flutterappdevelopmentusa() {


    const [activeTab1, setActiveTab1] = useState('tab');
    function handleTabChange1(tab1) {
        setActiveTab1(tab1);
    }

    const demandpont = [

        {
            title1: 'Custom Flutter Development',
            text: (<> Our team of expert developers at BitsWits specialize in custom Flutter development to bring your app ideas to life, delivering unique and high-performance solutions that exceed expectations. With a focus on stunning UI/UX, we ensure exceptional user experience across multiple platforms. </>),
            click2: 'tab',
            fun1: handleTabChange1,
            data1: activeTab1,




        },
        {
            title1: 'Dart App Development',
            text: (<> Leverage the power of Dart with our expert app development services BitsWits, where we build innovative, high-performance mobile apps that exceed expectations. Our experienced developers use Dart to create custom solutions that deliver exceptional user experience and accelerate time-to-market for businesses of all sizes. </>),
            click2: 'tab1',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Testing & QA Services',
            text: (<> BitsWits, we offer comprehensive testing and QA services for Flutter apps to ensure flawless performance across different platforms and devices. Our skilled team of professionals use the latest tools and techniques to identify and eliminate bugs, delivering robust and high-quality apps. </>),
            click2: 'tab2',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'App Migration & Upgradation',
            text: (<> BitsWits, we offer professional app migration and up gradation services to ensure seamless transitions between different platforms and versions. Our experienced team ensures that your mobile application remains up-to-date and compatible with the latest technology trends. </>),
            click2: 'tab3',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Cross Platform Mobile App Development',
            text: (<>BitsWits creates stunning mobile apps quickly and easily with our expert flutter developers and the latest technologies. Our custom, enterprise-ready solutions save up to 50% in development time and cost.</>),
            click2: 'tab4',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Maintenance & Support',
            text: (<> Ensure optimal performance for your apps and flutter web apps with our comprehensive support services. Our experts specialize in monitoring stability, security, and updates, allowing you to focus on business growth. Get fast response times and 24/7 availability. </>),
            click2: 'tab5',
            fun1: handleTabChange1,
            data1: activeTab1,


        },





    ]



    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'IOS Application Development',
            text: (<> We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps! </>),
            click1: 'tab1',
            img: icon6,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Android Application Development',
            text: (<> We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations. </>),
            click1: 'tab2',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Flutter App Development',
            text: (<> Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Web App Development',
            text: (<> We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today! </>),
            click1: 'tab4',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Cross Platform App Development',
            text: 'We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.',
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'React Native App Development',
            text: (<> Our React Native app developers specialize in creating top-notch, performance-oriented native mobile apps for Android and iOS platforms. We follow a robust development process and utilize the latest technologies to deliver customized solutions that meet our clients' business objectives. </>),
            click1: 'tab6',
            img: icon4,
            fun: game,
            data: gameshow
        },


    ]


    const fine = [

        {
            img: servicesmobile,
            title: (<>Android <br></br>
                Application Development </>),
            text: <>
                We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.
            </>
        },

        {
            img: servicesmobile2,
            title: (<>Web <br></br>
                App Development </>),
            text: <>
                We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!
            </>
        },

        {
            img: servicesmobile3,
            title: (<>Flutter <br></br>
                App Development </>),
            text: <>
                Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.


            </>
        },

        {
            img: servicesmobile4,
            title: (<> React Native <br></br>
                App Development </>),
            text: <>
                Our React Native app developers specialize in creating top-notch, performance-oriented native mobile apps for Android and iOS platforms. We follow a robust development process and utilize the latest technologies to deliver customized solutions that meet our clients' business objectives.
            </>
        },

        {
            img: servicesmobile5,
            title: (<>Cross Platform <br></br>
                App Development </>),
            text: <>
                We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.
            </>
        },

        {
            img: servicesmobile6,
            title: (<>IOS <br></br>
                Application Development </>),
            text: <>
                We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!
            </>
        },


    ]

    const services = 'SERVICES'
    const app = <>  <span className='grdiant'>Mobile App</span> Development Services </>
    const revolutionize = 'Revolutionize your business with a mobile app development firm dedicated to providing you with the most innovative apps. Take advantage of their extensive offerings for essential platforms like iOS, and Android for maximum impact.'


    let rangSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Head>
                <title>Innovative Flutter App Development Company In USA - Bitswits</title>
                <meta name="description" content="From ideation to launch, our Flutter application development company provides end-to-end services that ensure your app is a success." />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <NewBannerFy
                title={<>Flutter App Development
                    Company In USA </>}

                text={<> BitsWits stands out as the best flutter mobile app development company in the USA, with its expertise in delivering innovative and seamless user experiences. Our team of skilled developers is dedicated to crafting top-notch mobile apps optimized for user satisfaction. Choose us for your next flutter app development project, and watch your vision transform into a flawless mobile experience. </>}
                banClass='mobile'
                img1={<>
                    <div className='newbit'>
                        <Image quality={75} src={new1} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={new2} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={new3} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={new4} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={new5} alt="bitswits" className='img-fluid' />
                    </div>

                </>}
                img2={<>
                    <div className='newbit2'>
                        <Image quality={75} src={news1} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={news2} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={news3} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={news4} alt="bitswits" className='img-fluid' />
                        <Image quality={75} src={news5} alt="bitswits" className='img-fluid' />
                    </div>

                </>}



            />
            <NewDecFy />

            {/* <br></br> <br></br> */}



            <Creativeopportunities

                subtitle='ADVANTAGES OF FLUTTER'
                title={<>  Experience Unmatched Excellence & Possibilities With
                    The <span className='grdiant'>Top-Rated Flutter App Development</span> ! </>}
                text={<>Flutter's popularity has surged with 70% growth in mobile app development. Explore why it's a powerful framework for developers worldwide.</>}
                eng={engagement}
                tit1='Single Codebase'
                text1={<> Develop once, deploy on multiple platforms </>}
                btn1='Lets Start'

                tit2='Open Source'
                text2={<> Access to a vast community of developers and resources. </>}
                btn2='Lets Start'

                tit3='Rapid Deployment'
                text3={<>  Accelerated development cycle, faster time-to-market your app. </>}
                btn3='Lets Start'

                tit4='Fluid Experience'
                text4={<>
                    Fluid Experience
                    Build highly responsive and visually appealing apps. </>}
                btn4='Lets Start'

                tit5='Custom, Animated UI'
                text5={<>  Create stunning and unique user interfaces with customizable animations. </>}
                btn5='Lets Start'

                tit6='Beyond Mobile'
                text6={<>   Build apps for multiple platforms, including web and desktop. </>}
                btn6='Lets Start'



            />


            <Consultation />


            <Container className='campny pb-5'>
                <Row>
                    <Col xl={12} className='mb-3'>
                        <h3 className='f-20 f-700 black t-center'>WHAT WE DO</h3>
                        <h2 className='f-50 f-700 black t-center'>Innovative, Stunning, & Seamless! <span className='grdiant'>Our Flutter App</span>
                            Developers Create It All</h2>
                        <p className='f-16 f-500 black t-center'>Our Flutter developers utilize the latest technology to create cost-effective, high-quality apps that perfectly
                            accommodate your requirements and bring your vision to life!</p>

                    </Col>
                    <Col xl={12}>
                        <Tabplays
                            demand1={demandpont}
                        />
                    </Col>
                    <Col xl={12}>
                        <Link className='btnclas' href='#'>Revolutionize Your Mobile Experience with Flutter Apps</Link>
                    </Col>
                </Row>
            </Container>


            <Lookingforlp />


            <Yearsofexpertise
                loop1={<> <Counter stopNumber={500} />+ </>}
                looptext11={<> Applications Developed and Designed </>}
                loop2={<> <Counter stopNumber={250} />+ </>}
                looptext22={<> Developers & Engineers
                    Under One Roof </>}
                loop3={<> <Counter stopNumber={12} />+ </>}

                looptext33={<> Years in Software
                    Development Business </>}
                loop4={<> <Counter stopNumber={92} />+ </>}

                looptext44={<> Client Retention </>}

            />


            <Ourportfoliolp />


            {/* <NewSliderFy /> */}

            <Consultation2 />


            <Publication />

            <Digitallp />

            <Hireus />

            <Integration />


            <ClientsThinklp />

            <Videotestimonial />

            <Consultation />



            <FaqsLp />



            <Contact
                newBg="newBg"
            />

            <Locations />

        </>
    )
}
