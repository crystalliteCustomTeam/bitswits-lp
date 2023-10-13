import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'
import { Container, Row } from 'react-bootstrap'
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

import React, { useState } from 'react';
import icon1 from '../public/images/mobilelpservices/sideimg.png'
import icon2 from '../public/images/mobilelpservices/game.png'
import icon3 from '../public/images/mobilelpservices/web30.png'
import icon4 from '../public/images/mobilelpservices/blockchain.png'
import icon5 from '../public/images/mobilelpservices/webflow.png'
import icon6 from '../public/images/mobilelpservices/artifical.png'
import Ourservices from '@/components/Ourserviceslp'
import NewBannerFy from '@/components/NewBannerFy'
import NewSliderFy from '@/components/NewSliderFy'
import Aboutlp from '@/components/Aboutlp'
import Lookingforlp from '@/components/Lookingforlp'
import Ourportfoliolp from '@/components/Ourportfoliolp'
import Digitallp from '@/components/Digitallp'
import Contact from '@/components/Contact'
import NewDecFy from '@/components/NewDecFy'
import FaqsLp from '@/components/FaqsmobileappLp'
import Consultation2 from '@/components/Consultation2'
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
            title: 'iOS App Development',
            text: (<> As a leading iOS app development company, we're experts at turning ideas into App Store sensations. Our iOS app solutions are tailored to give users an experience they'll adore. Trust our skilled iOS app developers to build an app that's both delightful and efficient. </>),
            click1: 'tab1',
            img: icon6,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Android App Development',
            text: (<> Flutter is more than a buzzword for us; it's our passion. As a pioneering Flutter app development company, we employ the latest tools and techniques to offer innovative app solutions. Rely on our Flutter app developers to craft apps that resonate with your audience. </>),
            click1: 'tab2',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Flutter App Development',
            text: (<> Flutter is more than a buzzword for us; it's our passion. As a pioneering Flutter app development company, we employ the latest tools and techniques to offer innovative app solutions. Rely on our Flutter app developers to craft apps that resonate with your audience. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Web App Development',
            text: (<> Make your mark on the web with Bitswits, the web app development company that understands your vision. Our web app solutions are designed for impact, ensuring you make the right impression. Our web app developers are here to turn your dream into a digital reality. </>),
            click1: 'tab4',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Custom App Development',
            text:  ( <>  Every brand is distinct, and so should be its app. As your chosen custom app development company, we offer tailor-made app solutions that mirror your brand's essence. With a team of adept custom app developers, we promise a product that stands out. </> ) ,
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'React Native App Development',
            text: (<> Embrace the best of both iOS and Android with React Native. As a seasoned React Native app development company, our app solutions ensure consistent performance across devices. Our skilled React Native app developers craft apps that spell perfection. </>),
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
    const app = <>  Transforming Visions into Reality with Exceptional Mobile App Solutions </>
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
                <title>The Professional Mobile App Development Company - Bitswits.</title>
                <meta name="description" content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="The Professional Mobile App Development Company - Bitswits." />
                <meta property="og:description" content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions." />
                <meta property="og:url" content="https://bitswits.co/mobile-app-development-company/" />
                <meta property="og:site_name" content="The Professional Mobile App Development Company - Bitswits." />
                <link rel="canonical" href="https://bitswits.co/mobile-app-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="mobile app development company, hire mobile app developers, mobile app development services" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="mobile app development company, hire mobile app developers, mobile app development services" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="mobile app development company, hire mobile app developers, mobile app development services" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <NewBannerFy
                subtitle='Transform Your Business With Our Revolutionary'
                title={<>Mobile App <br />  Development Company </>}
                title2={<>We Don't Just Create Apps; We Create Experiences</>}
                text={<> At BitsWits, we develop innovative and user-friendly apps that have a visually appealing design and function seamlessly, meeting the specific needs of our clients. Our focus on delivering high-quality mobile apps is unwavering; as a result, we have earned a reputation as the industry's best mobile app development company. </>}
                banClass="mobile"
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

            <NewDecFy />

            <Aboutlp />

            {/* <NewSliderFy /> */}

            <Ourservices
                title='SERVICES'
                title2={<>   <h2 className='font50 black fontf font-bold line60 white mb-2 t-center'>

                    Transforming Visions into Reality with Exceptional <span className='grdiant'>Mobile App Solutions</span>

                </h2> </>}
                para={<>   <p className='font16 white fontf font-medium t-center'>

                    At BitsWits, our expert team specializes in professional app development. Whether you want to build an app from scratch or make an app that stands out, we're here to turn your ideas into reality.

                </p> </>}
                services={services1}
            />

            <Ready />

            <Partner />

            <Publication />

            <Digitallp />

            <Hireus />

            <Consultation />

            <Ourportfoliolp />

            {/* <Lookingforlp /> */}

            <Consultation2 />

            <ClientsThinklp />

            <FaqsLp />

            <Contact
                newBg="newBg"
            />
        </>
    )
}
