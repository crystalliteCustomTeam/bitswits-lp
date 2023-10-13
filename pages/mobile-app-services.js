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
import HybridApp from '@/components/HybridApp'
import Cab from '@/components/Cab'
import Musicapp from '@/components/Musicapp'
import Consultancy from '@/components/Consultancy'
import About from '@/components/About'
import ClientsThinklp from '@/components/ClientsThinklp'
import Understand  from '@/components/Understand'
import Ourservicesweaare from '@/components/Ourservicesweaare'
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
import Aboutweare from '@/components/Aboutweare'
import Outsourced from '@/components/Outsourced'
import Consultation2 from '@/components/Consultation2'
import Surehow from '@/components/Surehow'
import Team from '@/components/Team'
import Whathowwhy from '@/components/Whathowwhy'
import Creativeopportunities from '@/components/Creativeopportunities'
import engagement from '/public/images/step/mobile.webp'
import Tabplays from '@/components/Tabplays';
import Link from 'next/link'
import Incredible from '@/components/Incredible'
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

export default function mobileappservices() {




    const fontpont = [

        {
            title: 'iOS App Development',
            text: (<> BitsWits is fueled by the zeal to create remarkable applications that exceed clients' expectations. As a leading iOS app development company, we recognize that launching a successful mobile app requires more than an excellent idea. We take every project as a chance to push our limits and deliver outstanding results. Hire us to turn your app vision into reality! </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Android App Development',
            text: (<> BitsWits, we focus on developing top-notch Android applications that cater to your needs. Our team develops apps that meet the highest standards and are customized to your unique requirements from IDEATION to LAUNCH. We take pride in developing the best Android apps that truly stand out. Let's work together to create a game-changing app that exceeds your wildest expectations! </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Flutter App Development',
            text: (<> We specialize in developing cross-platform mobile apps using Flutter, a powerful framework. Our team of skilled flutter developers create highly functional and engaging mobile applications with user-friendly interfaces, intuitive designs, and seamless performance. By hiring BitsWits, you can trust in our commitment to delivering top-quality mobile apps solutions that exceed expectations and drive business success. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },

        {
            title: 'React Native App Development',
            text: (<> Our React Native apps that are fast and reliable, with an effortless user experience. Whether you need a simple app to handle daily tasks or a more complex, enterprise-level solution, our top app developers are always eager to tackle any challenge that comes their way. Let's collaborate and create an excellent React Native app that will transform your business! </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Cross Platform App Development',
            text: (<> BitsWits, your one-stop-shop for cross-platform mobile app development. Our top-rated experts are dedicated to crafting feature-rich apps customized to your specific needs, providing an exceptional user experience. We take pride in delivering boundary-breaking apps that amaze users across all platforms. Let's work together to build an app that sets the standard for excellence in cross-platform mobile app development! </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Web App Development',
            text: (<> BitsWits, Our developers are passionate about creating web applications that leave a lasting impression. We don't just stop at functionality - we strive to make your web app visually stunning, secure, and reliable. Whether you need a simple web application or a complex enterprise-level solution, our developers work tirelessly to deliver exceptional results that make a bold statement. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },


    ]


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
                <title>Superior Mobile Application Development Company - Bitswits</title>
                <meta name="description" content="Tired of low-quality mobile apps?  As a leading mobile app development agency, we create innovative applications that can help you maximize your ROI." />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <NewBannerFy

             
                title={<>   Mobile Application <br></br> Services </>}
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

<section className='newfony'>


            <NewDecFy />

            <Aboutweare />

            <Outsourced />

            <Surehow />

            <Team />

            <Whathowwhy />

            <Ourservicesweaare />

            <Understand />

            </section>



            <Consultation2 />

            <ClientsThinklp />

            <FaqsLp />

            <Contact
                newBg="newBg"
            />

        </>
    )
}
