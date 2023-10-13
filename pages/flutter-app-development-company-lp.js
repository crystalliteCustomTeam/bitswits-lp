import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'
import { Container, Row } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'
import servicesmobile from '/public/images/servicesmobileflutter/1.webp'
import servicesmobile2 from '/public/images/servicesmobileflutter/2.webp'
import servicesmobile3 from '/public/images/servicesmobileflutter/3.webp'
import servicesmobile4 from '/public/images/servicesmobileflutter/4.webp'
import servicesmobile5 from '/public/images/servicesmobileflutter/5.webp'
import servicesmobile6 from '/public/images/servicesmobileflutter/6.webp'
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
import FaqsLp from '@/components/FaqsflutterLp'
import NewDecFy from '@/components/NewDecFy'
import lop1 from '/public/images/bonusflutter/1.webp'
import lop2 from '/public/images/bonusflutter/2.webp'
import lop3 from '/public/images/bonusflutter/3.webp'
import lop4 from '/public/images/bonusflutter/4.webp'
import lop5 from '/public/images/bonusflutter/5.webp'
import lop6 from '/public/images/bonusflutter/6.webp'
import lop7 from '/public/images/bonusflutter/mobile.webp'

import React, { useState } from 'react';
import icon1 from '../public/images/flutterservice/sideimg.png'
import icon2 from '../public/images/flutterservice/game.png'
import icon3 from '../public/images/flutterservice/web30.png'
import icon4 from '../public/images/flutterservice/blockchain.png'
import icon5 from '../public/images/flutterservice/webflow.png'
import icon6 from '../public/images/flutterservice/artifical.png'
import Ourservices from '@/components/Ourserviceslp'
import Aboutlp from '@/components/Aboutlp'
import NewBannerFy from '@/components/NewBannerFy'
import NewSliderFy from '@/components/NewSliderFy'
import Lookingforlp from '@/components/Lookingforlp'
import Ourportfoliolp from '@/components/Ourportfoliolp'
import Digitallp from '@/components/Digitallp'
import Contact from '@/components/Contact'
//
import Image from 'next/image'
import news1 from '/public/images/new2/1.webp'
import news2 from '/public/images/new2/2.webp'
import news3 from '/public/images/new2/3.webp'
import news4 from '/public/images/new2/4.webp'
import news5 from '/public/images/new2/5.webp'



export default function androidappdevelopmentcompanylp() {


    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'Dart Application Development Services',
            text: (<> Our Dart application development services create efficient and powerful hybrid apps using the latest libraries to modernize your native apps. We'll help your app stand out and succeed with seamless solutions exceeding expectations. </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Flutter Cross-Platform App Development',
            text: (<> As a leading Flutter app development company, our expertise lies in developing innovative Flutter apps and provide solutions that extend your app's potential reach, driving your business growth to new heights. Hire us, and experience the difference of our exceptional Flutter app development services. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Flutter Development For IOS & Android',
            text: (<> We make stellar Flutter apps that work on both iOS and Android platforms. We aim to make your application stand out in the industry with our Flutter app development service. Trust our expert flutter developers to deliver seamless user experience and robust functionality. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Customized Flutter Development Solutions',
            text: (<> Flutter app developers at BitsWits can make customized powerful apps that help your business grow and reach more people. Hire top-rated Flutter development services and skyrocket your business growth. </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Testing & Quality Assurance',
            text: 'Our Flutter mobile app developers, quality analysts, and testers, collaborate seamlessly to ensure your app is free of bugs during development. We guarantee you a dependable, top-notch final product that meets your expectations.',
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'Maintenance & Support Services For Flutter Apps',
            text: (<> BitsWits offers maintenance and support services to keep your Flutter applications running smoothly after launch. Our experts provide top-notch services to ensure your applications remain in excellent condition for the long term, giving you peace of mind and ensuring the success of your business. </>),
            click1: 'tab6',
            img: icon6,
            fun: game,
            data: gameshow
        },

    ]





    const fine = [

        {
            img: servicesmobile,
            title: (<>Dart Application <br></br>
                Development Services </>),
            text: <>
                Our Dart application development services create efficient and powerful hybrid apps using the latest libraries to modernize your native apps. We'll help your app stand out and succeed with seamless solutions exceeding expectations.
            </>
        },

        {
            img: servicesmobile2,
            title: (<> Flutter Cross-Platform <br></br>
                App Development </>),
            text: <>
                As a leading Flutter app development company, our expertise lies in developing innovative Flutter apps and provide solutions that extend your app's potential reach, driving your business growth to new heights. Hire us, and experience the difference of our exceptional Flutter app development services.
            </>
        },

        {
            img: servicesmobile3,
            title: (<> Flutter Development <br></br>
                For IOS & Android </>),
            text: <>
                We make stellar Flutter apps that work on both iOS and Android platforms. We aim to make your application stand out in the industry with our Flutter app development service. Trust our expert flutter developers to deliver seamless user experience and robust functionality.
            </>
        },

        {
            img: servicesmobile4,
            title: (<> Customized Flutter <br></br>
                Development Solutions </>),
            text: <>
                Flutter app developers at BitsWits can make customized powerful apps that help your business grow and reach more people. Hire top-rated Flutter development services and skyrocket your business growth.
            </>
        },

        {
            img: servicesmobile5,
            title: (<> Testing & Quality <br></br>
                Assurance </>),
            text: <>
                Our Flutter mobile app developers, quality analysts, and testers, collaborate seamlessly to ensure your app is free of bugs during development. We guarantee you a dependable, top-notch final product that meets your expectations.
            </>
        },

        {
            img: servicesmobile6,
            title: (<>Maintenance & Support <br></br>
                Services For Flutter Apps </>),
            text: <>
                BitsWits offers maintenance and support services to keep your Flutter applications running smoothly after launch. Our experts provide top-notch services to ensure your applications remain in excellent condition for the long term, giving you peace of mind and ensuring the success of your business.
            </>
        },


    ]

    const services = 'WHAT WE DO'
    const app = <>  No Challenge Too Great For Our <br></br> <span className='grdiant'> Flutter App Development </span> Company! </>
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
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>Trusted Flutter App Development Company - Bitswits!</title>
                <meta name="description" content="Don't settle for mediocre apps! Our flutter app developers deliver cutting-edge solutions that are designed to make a lasting impression on your users." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Trusted Flutter App Development Company - Bitswits!" />
                <meta property="og:description" content="Don't settle for mediocre apps! Our flutter app developers deliver cutting-edge solutions that are designed to make a lasting impression on your users." />
                <meta property="og:url" content="https://bitswits.co/flutter-app-development-company/" />
                <meta property="og:site_name" content="Trusted Flutter App Development Company - Bitswits!" />
                <link rel="canonical" href="https://bitswits.co/flutter-app-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="flutter app development company, flutter app developers, hire flutter app developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="flutter app development company, flutter app developers, hire flutter app developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="flutter app development company, flutter app developers, hire flutter app developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />


            <NewBannerFy
                subtitle='One-Stop Shop For'
                title={<> Flutter App Development <br />  Company In USA </>}
                text={<> BitsWits is an expert Flutter app development agency with years of experience creating innovative, powerful apps for businesses of all sizes. From startups to established corporate entities, we have the expertise and technology to turn your ideas into amazing apps. Whether you want to develop an iOS or Android app, we have the skills and know-how to make it happen. Our developers have a thorough understanding of the Flutter SDK and its components, so you can rest assured that whatever app we develop for you will be built with the utmost care and precision! </>}
                banClass="flutter"
                img1={<>
                    

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

            {/* <NewSliderFy /> */}

            <NewDecFy />

            <Aboutlp />

            <Ourservices
             title= 'WHAT WE DO'
             title2= { <>   <h2 className='font50 black fontf font-bold line60 white mb-2 t-center'>
                 
                 No Challenge Too Great For Our <span className='grdiant'>Flutter App Development Company</span>!
                 
                  </h2> </> }
                services={services1}
            />

            <Ready />

            <Enhanced
                subtitle='BONUSES'
                title={<> <span className='grdiant'>Flutter App Development Company</span> That Offers Unparalleled Solutions, Limitless Possibilities! </>}
                textnew='With its impressive 70% growth in mobile app development, Flutter has become one of the most popular tools for creating apps. Discover why developers around the world are choosing to use this powerful framework and explore some of its many advantages!'
                lop7={lop7}

                lop1={lop1}
                titl1={<> SINGLE <br></br> CODEBASE </>}
                text1='With Flutter, developing a cross-platform mobile application can be both cost and time effective. It allows developers to use one codebase that is capable of running seamlessly on Android as well as iOS devices - making it the perfect choice for businesses who value efficiency!'

                lop2={lop2}
                titl2={<> OPEN SOURCE </>}
                text2='Flutter is a powerful coding platform that has taken the programming world by storm because of its open-source nature. Welcoming contributions from developers all over, it empowers us to create solutions and innovate with unprecedented flexibility - transforming our wildest ideas into reality.'

                lop3={lop3}
                titl3={<> RAPID  <br></br> DEPLOYMENT </>}
                text3='Flutter offers the ultimate advantage in mobile app development - rapid deployment! With a single codebase for different iOS and Android operating systems, plus open-source capabilities, you can be assured that your project will get to market faster than ever.'

                lop4={lop4}
                titl4={<> FLUID <br></br>EXPERIENCE </>}
                text4='Flutter provides an incredibly reliable user interface that gives users a seamless, enjoyable experience. This guarantees satisfaction for your customers and creates the perfect environment for success!'

                lop5={lop5}
                titl5={<> CUSTOM <br></br> ANIMATED UI </>}
                text5={<> Flutter's UI capabilities give developers the power to create stunning, one-of-a-kind user interfaces. Transitioning from one element to another, manipulating shadows and clipping are just a few of the available tools that help make eye catching animations with ease. </>}

                lop6={lop6}
                titl6={<> BEYOND MOBILE </>}
                text6={<> You're no longer limited to just mobile when it comes to Flutter-powered apps! Thanks to Dart, the programming language behind Flutter, you can now create app experiences for Smart TVs, wearables and even the web. Step into a world of endless opportunities with Beyond Mobile on your side. </>}
            />

            <Publication />


            <Digitallp />


            <Hireus />

            <Consultation />

            <Ourportfoliolp />


            <Lookingforlp
            
            tilte = {  <>    <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Technology Stack</h5> </> }
            title2 = { <> <h2 className='font65 black fontf font-bold line60 black mb-3 t-center'>
            
            Bring Out The Best Of Your <span className='grdiant'>Mobile Application With Our Scalable Technology</span> Stack
            
            </h2>  </> }
            para = { <> 
            
            <p className='font18 black t-center'>Experience the Success of Your Mobile Apps with Our Powerful Tech Stack</p>
            
            </> }
            
            
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
