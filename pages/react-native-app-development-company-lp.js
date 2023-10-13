import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'
import { Container, Row } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'

import servicesmobile from '/public/images/servicesmobilereact/1.webp'
import servicesmobile2 from '/public/images/servicesmobilereact/2.webp'
import servicesmobile3 from '/public/images/servicesmobilereact/3.webp'
import servicesmobile4 from '/public/images/servicesmobilereact/4.webp'
import servicesmobile5 from '/public/images/servicesmobilereact/5.webp'
import servicesmobile6 from '/public/images/servicesmobilereact/6.webp'

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
import Consultation2 from '@/components/Consultation2'
import FaqsLp from '@/components/FaqsreactnativeLp'
import NewDecFy from '@/components/NewDecFy'
import lop1 from '/public/images/bonusreact/1.png'
import lop2 from '/public/images/bonusreact/2.png'
import lop3 from '/public/images/bonusreact/3.png'
import lop4 from '/public/images/bonusreact/4.png'
import lop5 from '/public/images/bonusreact/5.png'
import lop6 from '/public/images/bonusreact/6.png'
import lop7 from '/public/images/bonusreact/mobile.png'

import React, { useState } from 'react';
import icon1 from '../public/images/reactnativeservice/sideimg.png'
import icon2 from '../public/images/reactnativeservice/game.png'
import icon3 from '../public/images/reactnativeservice/web30.png'
import icon4 from '../public/images/reactnativeservice/blockchain.png'
import icon5 from '../public/images/reactnativeservice/webflow.png'
import icon6 from '../public/images/reactnativeservice/artifical.png'
import Ourservices from '@/components/Ourserviceslp'
import NewBannerFy from '@/components/NewBannerFy'
import Aboutlp from '@/components/Aboutlp'
import Lookingforlp from '@/components/Lookingforlp'
import Ourportfoliolp from '@/components/Ourportfoliolp'
import Digitallp from '@/components/Digitallp'
import Contact from '@/components/Contact'
import NewSliderFy from '@/components/NewSliderFy'


export default function androidappdevelopmentcompanylp() {



    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'React Native Mobile App Development Services',
            text: (<> Our expert team of React Native developers creates high-performance, native-like mobile apps for both Android and iOS platforms. With our React Native mobile app development services, you can ensure the best user experience for your app users. </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Expert React Native Code Development Services',
            text: (<> Our React Native code development services ensure your app is developed with clean, efficient, and high-quality code. Our experienced developers ensure that your app's performance is optimized for performance and scalability. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Expert React Native App Maintenance Services',
            text: (<> We provide reliable and efficient React Native app maintenance services to maintain your app up-to-date with the latest features and functionalities. Our team of experts ensures that your app runs smoothly, is bug-free, and is optimized for performance. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Hybrid Mobile App with React Native',
            text: (<> Our React Native, hybrid mobile app development services combine the benefits of both native and web-based apps. This approach allows for faster development, cost-effectiveness, & cross-platform compatibility. </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Custom React Plugin Development for Apps',
            text: (<> Our React Native plugin development services allow you to integrate custom features into your app. We create customized plugins that enhance your app's functionality and provide a unique user experience. </>),
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'Custom React Native UI/UX Design for Apps',
            text: (<> Our React Native UI/UX design services ensures your app has an intuitive, user-friendly interface with stunning visuals. We create customized designs for your app that look great and provide a seamless user experience. </>),
            click1: 'tab6',
            img: icon6,
            fun: game,
            data: gameshow
        },

    ]


    const android = <> <span className='grdiant'> Custom iOS </span> <br></br> App Development
    </>
    const web = <>  <span className='grdiant'>  iPhone </span> <br></br>App Development  </>
    const Flutter = <> <span className='grdiant'>Apple</span> <br></br>Watch Development  </>
    const React = <> <span className='grdiant'>Apple Tv</span> <br></br>App Development  </>
    const Cross = <> <span className='grdiant'>Apple</span>  <br></br>App Designing  </>
    const IOS = <> <span className='grdiant'>Hybird Iphone</span>  <br></br>App Development  </>


    const fine = [

        {
            img: servicesmobile,
            title: (<>React Native Mobile App <br></br>
                Development Services </>),
            text: <>
                Our expert team of React Native developers creates high-performance, native-like mobile apps for both Android and iOS platforms. With our React Native mobile app development services, you can ensure the best user experience for your app users.
            </>
        },

        {
            img: servicesmobile2,
            title: (<>Expert React Native Code <br></br>
                Development Services </>),
            text: <>
                Our React Native code development services ensure your app is developed with clean, efficient, and high-quality code. Our experienced developers ensure that your app's performance is optimized for performance and scalability.
            </>
        },

        {
            img: servicesmobile3,
            title: (<>Expert React Native App <br></br>
                Maintenance Services </>),
            text: <>
                We provide reliable and efficient React Native app maintenance services to maintain your app up-to-date with the latest features and functionalities. Our team of experts ensures that your app runs smoothly, is bug-free, and is optimized for performance.
            </>
        },

        {
            img: servicesmobile4,
            title: (<>Hybrid Mobile App <br></br>
                with React Native </>),
            text: <>
                Our React Native, hybrid mobile app development services combine the benefits of both native and web-based apps. This approach allows for faster development, cost-effectiveness, & cross-platform compatibility.
            </>
        },

        {
            img: servicesmobile5,
            title: (<>Custom React Plugin <br></br>
                Development for Apps </>),
            text: <>
                Our React Native plugin development services allow you to integrate custom features into your app. We create customized plugins that enhance your app's functionality and provide a unique user experience.


            </>
        },

        {
            img: servicesmobile6,
            title: (<>Custom React Native UI/UX <br></br>
                Design for Apps </>),
            text: <>
                Our React Native UI/UX design services ensures your app has an intuitive, user-friendly interface with stunning visuals. We create customized designs for your app that look great and provide a seamless user experience.
            </>
        },


    ]

    const services = 'GO BEYOND EXPECTATIONS WITH'
    const app = <>  <span className='grdiant'>React Native App Development</span> In A Whole New
        Way - Access Unique Services & Solutions! </>



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
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>Visionary React Native App Development Company - Bitswits</title>
                <meta name="description" content="Want a team of experienced React Native App Developers? We've got them! Whether you're a start-up or an established business, our developers are equipped." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Visionary React Native App Development Company - Bitswits" />
                <meta property="og:description" content="Want a team of experienced React Native App Developers? We've got them! Whether you're a start-up or an established business, our developers are equipped." />
                <meta property="og:url" content="https://bitswits.co/react-native-app-development-company/" />
                <meta property="og:site_name" content="Visionary React Native App Development Company - Bitswits" />
                <link rel="canonical" href="https://bitswits.co/react-native-app-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="react native app development company, react native mobile app developers, react native app developer" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="react native app development company, react native mobile app developers, react native app developer" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="react native app development company, react native mobile app developers, react native app developer" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <NewBannerFy
                subtitle='BitsWits Is Your One-Stop Shop For'
                title={<> React Native <br />  Development Company </>}
                title2={<>React Native Development is the future of mobile development. And we have already made a mark in that future without expertise in this kind of development!.</>}
                text={<> With our React Native experts, you can effortlessly create powerful, engaging mobile applications that perform optimally across multiple platforms. Our developers focus on leveraging the best of both worlds - the SPEED and AGILITY of native development with the flexibility of JavaScript to bring comprehensive solutions to the table. </>}
                text2={<> Take the first step toward creating an amazing mobile experience with React Native app development company from our team of experts. Contact us today to create React app! </>}
                banClass="react"
            />

            {/* <NewSliderFy /> */}

            <NewDecFy />

            <Aboutlp />

            <Ourservices
                title='GO BEYOND EXPECTATIONS WITH'
                title2={<>   <h2 className='font50 black fontf font-bold line60 white mb-2 t-center'>

                    <span className='grdiant'>React Native App Development</span> In A Whole New Way - Access Unique Services & Solutions!

                </h2> </>}
                services={services1}
            />

            <Ready />

            {/* <Scalable /> */}

            <Enhanced
                subtitle='BENEFITS'
                title={<> React Native Reigns Supreme: The <span className='grdiant'>Reasons React Native App Development Company Choose It</span> for Their Projects.</>}
                lop7={lop7}

                lop1={lop1}
                titl1={<> OPTIMAL <br></br> COST </>}
                text1='React Native app development cost is not too high. You can build wonderful apps with a minimal investment.'

                lop2={lop2}
                titl2={<> OPEN SOURCE <br></br> FRAMEWORK </>}
                text2='Being an open source framework, React Native creates a platform for community building. You can seek guidance and get changes done whenever.'

                lop3={lop3}
                titl3={<> ACCESS TO TAILOR <br></br> - MADE SOLUTIONS </>}
                text3='React Native for mobile app development is an excellent choice because of the availability of pre-made solutions and libraries that are available for free.'

                lop4={lop4}
                titl4={<> REUSABLE <br></br>CODE </>}
                text4='90% of the React Native codes can be reused by developers to ensure maximum optimization. This enables greater innovation towards your product development.'

                lop5={lop5}
                titl5={<> HIGH STABILITY </>}
                text5='React Native apps are secure and binding in their composition. This ensures your data remains intact at all times'

                lop6={lop6}
                titl6={<> THIRD-PARTY <br></br> PLUGINS </>}
                text6='React Native offers access to third-party plugins that simplify the process of app building.'
            />

            <Publication />


            <Digitallp />


            <Hireus />

            <Consultation />

            <Ourportfoliolp />


            <Lookingforlp

                tilte={<>    <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Technology Stack</h5> </>}
                title2={<> <h2 className='font65 black fontf font-bold line60 black mb-3 t-center'>

                    Bring Out The Best Of Your <span className='grdiant'>Mobile Application With Our Scalable Technology</span> Stack

                </h2>  </>}
                para={<>

                    <p className='font18 black t-center'>Experience the Success of Your Mobile Apps with Our Powerful Tech Stack</p>

                </>}


            />

            <Consultation2 />


            <ClientsThinklp />

            <FaqsLp />

            <Contact
                newBg="newBg"
            />

        </>
    )
}
