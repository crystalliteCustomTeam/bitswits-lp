import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'
import { Container, Row } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'

import servicesmobile from '/public/images/servicesmobilewear/1.webp'
import servicesmobile2 from '/public/images/servicesmobilewear/2.webp'
import servicesmobile3 from '/public/images/servicesmobilewear/3.webp'
import servicesmobile4 from '/public/images/servicesmobilewear/4.webp'
import servicesmobile5 from '/public/images/servicesmobilewear/5.webp'
import servicesmobile6 from '/public/images/servicesmobilewear/6.webp'

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
import lop1 from '/public/images/bonuswear/1.png'
import lop2 from '/public/images/bonuswear/2.png'
import lop3 from '/public/images/bonuswear/3.png'
import lop4 from '/public/images/bonuswear/4.png'
import lop5 from '/public/images/bonuswear/5.png'
import lop6 from '/public/images/bonuswear/6.png'
import lop7 from '/public/images/bonuswear/android.png'
import Consultation2 from '@/components/Consultation2'
import FaqsLp from '@/components/FaqswearableLp'
import NewDecFy from '@/components/NewDecFy'


import React, { useState } from 'react';
import icon1 from '../public/images/wearableservice/sideimg.png'
import icon2 from '../public/images/wearableservice/game.png'
import icon3 from '../public/images/wearableservice/web30.png'
import icon4 from '../public/images/wearableservice/blockchain.png'
import icon5 from '../public/images/wearableservice/webflow.png'
import icon6 from '../public/images/wearableservice/artifical.png'
import Ourservices from '@/components/Ourserviceslp'
import NewBannerFy from '@/components/NewBannerFy'
import NewSliderFy from '@/components/NewSliderFy'
import Aboutlp from '@/components/Aboutlp'
import Lookingforlp from '@/components/Lookingforlp'
import Ourportfoliolp from '@/components/Ourportfoliolp'
import Digitallp from '@/components/Digitallp'
import Contact from '@/components/Contact'



export default function androidappdevelopmentcompanylp() {


    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'Android Wear Apps Development',
            text: (<> With our expert Android Wear apps developers, you can create innovative and reliable solutions that help your business stay ahead in the ever-evolving mobile technology arena. We have a deep understanding of wearable android app development, allowing us to create device-agnostic Wear solutions that work across multiple devices. </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Apple Smart Watch App Development',
            text: (<>Our team of experienced developers cash in on wearable technology for iOS apps to create efficient and innovative experiences that will give you the freedom to stay connected on the go. With Apple's superior engineering and creative design, your smart watch app experience will be unrivaled in quality and productivity. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Google Glass App Development',
            text: (<> Google Glass app development services offer groundbreaking technology for advancing businesses and organizations. Our app development team is experienced in creating Google Glass apps to fit any need - from organizing data to entertaining customers to enhancing communication between staff members. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Wearable UI/UX Design',
            text: (<> We understand that creating a great user experience on a watch or other small device requires a different touch. Our wearable app development company is here to ensure that you get the right design and that your customers have an enjoyable experience with your product. </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'API & Back-End System Development',
            text: (<> With the right expertise, our developers create powerful applications that work seamlessly with various devices. Our team is experienced in crafting custom APIs and developing a secure, reliable backend system to ensure your wearable app runs smoothly and efficiently at all times. </>),
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'Custom Wearable App Development',
            text: (<> Custom wearable app development is the next big thing for businesses looking to stay ahead of the technological curve. Whether you're a retailer, healthcare provider, or any other business that needs to keep up with modern technology, our custom wearable app development services can help keep your business running smoothly and efficiently. </>),
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
            title: (<>Android Wear <br></br>
                Apps Development </>),
            text: <>
                With our expert Android Wear apps developers, you can create innovative and reliable solutions that help your business stay ahead in the ever-evolving mobile technology arena. We have a deep understanding of wearable android app development, allowing us to create device-agnostic Wear solutions that work across multiple devices.
            </>
        },

        {
            img: servicesmobile2,
            title: (<>Apple Smart Watch <br></br>
                App Development </>),
            text: <>
                Our team of experienced developers cash in on wearable technology for iOS apps to create efficient and innovative experiences that will give you the freedom to stay connected on the go. With Apple's superior engineering and creative design, your smart watch app experience will be unrivaled in quality and productivity.
            </>
        },

        {
            img: servicesmobile3,
            title: (<>Google Glass <br></br>
                App Development </>),
            text: <>
                Google Glass app development services offer groundbreaking technology for advancing businesses and organizations. Our app development team is experienced in creating Google Glass apps to fit any need - from organizing data to entertaining customers to enhancing communication between staff members.
            </>
        },

        {
            img: servicesmobile4,
            title: (<>Wearable UI/UX <br></br>
                Design </>),
            text: <>
                We understand that creating a great user experience on a watch or other small device requires a different touch. Our wearable app development company is here to ensure that you get the right design and that your customers have an enjoyable experience with your product.
            </>
        },

        {
            img: servicesmobile5,
            title: (<>API & Back-End <br></br>
                System Development </>),
            text: <>
                With the right expertise, our developers create powerful applications that work seamlessly with various devices. Our team is experienced in crafting custom APIs and developing a secure, reliable backend system to ensure your wearable app runs smoothly and efficiently at all times.
            </>
        },

        {
            img: servicesmobile6,
            title: (<>Custom Wearable <br></br>
                App Development </>),
            text: <>
                Custom wearable app development is the next big thing for businesses looking to stay ahead of the technological curve. Whether you're a retailer, healthcare provider, or any other business that needs to keep up with modern technology, our custom wearable app development services can help keep your business running smoothly and efficiently.
            </>
        },


    ]

    const services = 'WHAT WE DO'
    const app = <>  <span className='grdiant'>Make Wearable Technology</span> Work for You
        Hire Wearable App Developer Now! </>



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
                <title>Award-Winning Wearable App Development Company - Bitswits!</title>
                <meta name="description" content="Discover Premier wearable app developers at BitsWits, specializing in innovative solutions and technology for all devices. Elevate your business today!" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Award-Winning Wearable App Development Company - Bitswits!" />
                <meta property="og:description" content="Discover Premier wearable app developers at BitsWits, specializing in innovative solutions and technology for all devices. Elevate your business today!" />
                <meta property="og:url" content="https://bitswits.co/wearable-app-development-company/" />
                <meta property="og:site_name" content="Award-Winning Wearable App Development Company - Bitswits!" />
                <link rel="canonical" href="https://bitswits.co/wearable-app-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="wearable app development company, hire top wearable app developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="wearable app development company, hire top wearable app developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="wearable app development company, hire top wearable app developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <NewBannerFy
                subtitle='Put Your App on the Go with Our'
                title={<> Wearable App <br /> Development Company! </>}
                text={<> We understand the importance of connecting people with their devices and data. Our wearable application development company allow us to help you create the perfect app for your needs. From fitness tracking and health monitoring to access information at a glance, our developers are ready to assist in creating applications that will make life easier and more efficient. With our expertise and experience in the field of wearable technology, you can trust us to deliver the best service possible. </>}
                text2={<> Choose us for all your wearable application development needs, and let us help you create an app that will make life easier, faster, and more connected. </>}
                banClass="wearable"
            />

            {/* <NewSliderFy /> */}

            <NewDecFy />

            <Aboutlp />

            <Ourservices


                title='WHAT WE DO'
                title2={<>   <h2 className='font50 black fontf font-bold line60 white mb-2 t-center'>

                    Make Wearable Technology Work for You <span className='grdiant'>Hire Wearable App Developer Now!</span>

                </h2> </>}

                services={services1}
            />

            <Ready />

            <Enhanced
                subtitle='WHY SETTLE FOR LESS WHEN YOU CAN HAVE THE BEST?'
                title={<> Enjoy The Convenience of a <span className='grdiant'>One-Stop Shop for All Your Mobile App</span> Needs With Our Top <span className='grdiant'>Mobile Application</span> Company! </>}
                textnew='BitsWits takes pride in prioritizing cutting-edge technology to create seamless user experiences across multiple platforms, including iOS, Android, and web apps. Needless to say, we strive to ensure that the products we deliver are tailored to meet the specific needs of our clients. At our web and mobile app development company, we give you countless reasons to confide in us!'
                lop7={lop7}

                lop1={lop1}
                titl1={<> CUSTOMER <br></br> SATISFACTION </>}
                text1='BitsWits is the only top mobile development company that offers a 100% satisfaction guarantee - meaning you can be sure that your project will be completed to your exact specifications!'

                lop2={lop2}
                titl2={<> AMBITIOUS <br></br> INDIVIDUALS </>}
                text2='Our experienced developers are well-versed in the latest technologies, so you can trust us to create quality applications for any platform.'

                lop3={lop3}
                titl3={<> TECHNICAL <br></br> KNOW-HOW </>}
                text3='Our developers have built applications for companies of all sizes and industries, so you can trust that your app is in capable hands.'

                lop4={lop4}
                titl4={<> AGILE <br></br>APPROACH </>}
                text4='We take an agile approach to development, quickly responding to changes in requirements and ensuring a smooth rollout.'

                lop5={lop5}
                titl5={<> INTEGRITY & <br></br> TRANSPARENCY </>}
                text5='We also maintain integrity and transparency with our customers throughout the entire process, providing honest and straightforward feedback to ensure maximum satisfaction.'

                lop6={lop6}
                titl6={<> COMPETITIVE PRICE <br></br> STRUCTURE </>}
                text6={<> We provide competitive pricing that can't be beaten. Our prices are fair and transparent, allowing customers to get the highest quality product without breaking their budget. </>}
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
