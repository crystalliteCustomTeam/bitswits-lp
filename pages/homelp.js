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
import Partnerhome from '@/components/Partnerhome'
import Servicesmobile from '@/components/Servicesmobile'
import Publication from '@/components/Publication'
import Digitallp from '@/components/Digitallp'
import Integration from '@/components/Integration'
import Hireus from '@/components/Hireus'
import Consultation from '@/components/Consultation'
import Faqs from '@/components/Faqs'
import GetInTouch from '@/components/GetInTouch'
import Locations from '@/components/Locations'
import Videotestimonial from '@/components/Videotestimonial'
import Findfood from '@/components/Findfood'
import Ourportfoliolp from '@/components/Ourportfoliolp'
import Cab from '@/components/Cab'
import Musicapp from '@/components/Musicapp'
import Lookingforlp from '@/components/Lookingforlp'
import Consultancy from '@/components/Consultancy'
import About from '@/components/About'
import ClientsThinklp from '@/components/ClientsThinklp'
import Ready from '@/components/Ready'
import Scalable from '@/components/Scalable'
import Enhanced from '@/components/Enhanced'
import NewDecFy from '@/components/NewDecFy'
import Consultation2 from '@/components/Consultation2'
import FaqsLp from '@/components/FaqsiosLp'
import lop1 from '/public/images/bonus/1.webp'
import lop2 from '/public/images/bonus/2.webp'
import lop3 from '/public/images/bonus/3.webp'
import lop4 from '/public/images/bonus/4.webp'
import lop5 from '/public/images/bonus/5.webp'
import lop6 from '/public/images/bonus/6.webp'
import lop7 from '/public/images/bonus/mobile.webp'

import React, { useState } from 'react';
import icon1 from '../public/images/iphoneservice/sideimg.png'
import icon2 from '../public/images/iphoneservice/game.png'
import icon3 from '../public/images/iphoneservice/web30.png'
import icon4 from '../public/images/iphoneservice/blockchain.png'
import icon5 from '../public/images/iphoneservice/webflow.png'
import icon6 from '../public/images/iphoneservice/artifical.png'
import Ourservices from '@/components/Ourservices'
import Aboutlp from '@/components/Aboutlp'
import NewBannerhomeFy from '@/components/NewBannerhomeFy'
import NewSliderFy from '@/components/NewSliderFy'
import Contact from '@/components/Contact'




export default function homelp() {





    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'Custom iOS App Development',
            text: (<> Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs. </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'iPhone App Development',
            text: (<> We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Apple Watch Development',
            text: (<> Our team of expert iOS developers creates exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Apple Tv App Development',
            text: (<> Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality! </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Apple App Designing',
            text: 'Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.',
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'Hybird Iphone App Development',
            text: (<> Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more. </>),
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
    const app = <>  <span className='grdiant'>Mobile App Development</span> Services </>
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
                <title>Top Mobile App Development Company - Bitswits.</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            {/* <Homebanner
                subtitle='Reimagine Possibilities With'
                title={<>   <h1 className='font65 black fontf font-bold line60 mb-3'> Our   <span className='grdiant'> iOS App</span>  Development Company</h1></>}
                text='Our iOS development team works with you to determine the ideal features, design, and user experience that will make your app a success. We also take care of all the technical details, including testing and security measures. More so, we ensure that your app meets the App Store standards, so it can be released on time and without any issues.'
            />


            <About /> */}


            <NewBannerhomeFy
                subtitle='Elevate Your Mobile App Experience With'
                title={<> Top Mobile App Development Company </>}
                text={<>

                    Our iOS development team works with you to determine the ideal features, design, and user experience that will make your app a success. We also take care of all the technical details, including testing and security measures. More so, we ensure that your app meets the App Store standards, so it can be released on time and without any issues.

                    <br></br> <br></br>

                    Let us help you bring your vision to life and take your business to the next level with our industry-leading mobile app development solutions.

                </>}
            />


            {/* <NewSliderFy /> */}
            <NewDecFy />

            <Endorsements />

            <Homevideo />


            {/* <Aboutlp /> */}

            <Partnerhome />



            {/* <Ourservices
                services={services1}
            /> */}




            <div className='bgimageserve d-lg-block d-none'>
                <Container className='ourspacing'>
                    <Row className='mb-5'>
                        <div>
                            <p className="f-20 black f-montserrat f-700 mb-2 t-center">{services}</p>
                            <h2 className="f-50 f-playfair f-700 black t-center"> {app} </h2>
                            <p className='f-montserrat f-500 f-14 mb-1 black lheight24 t-center'>Revolutionize your business with a mobile app development firm dedicated to providing you with the most innovative apps. Take advantage of their extensive offerings for essential platforms like iOS, and Android for maximum impact.</p>

                        </div>
                    </Row>


                    <Row className='gy-4'>

                        {fine.map((item, i) =>
                            <Servicesmobile key={i}
                                title={item.title}
                                text={item.text}
                                img1={item.img}

                            />
                        )}

                    </Row>
                </Container>
            </div>

            <div className='bgimageserve d-lg-none d-block'>
                <Container className='ourspacing'>
                    <Row className='mb-5'>
                        <div>
                            <p className="f-20 orange f-montserrat f-700 mb-2 t-center">{services}</p>
                            <h2 className="f-50 f-playfair f-700 black t-center"> {app} </h2>
                            <p className='f-montserrat f-500 f-14 mb-1 black lheight24 t-center'>Revolutionize your business with a mobile app development firm dedicated to providing you with the most innovative apps. Take advantage of their extensive offerings for essential platforms like iOS, and Android for maximum impact.</p>
                        </div>
                    </Row>


                    <Row className='gy-4'>

                        <Slider {...rangSlider}>
                            {fine.map((item, i) =>
                                <Servicesmobile key={i}
                                    title={item.title}
                                    text={item.text}
                                    img1={item.img}

                                />
                            )}
                        </Slider>
                    </Row>
                </Container>
            </div>


            {/* <Ready /> */}
            {/* <Scalable /> */}





            {/* <Enhanced
                subtitle='BONUSES'
                title={<> Benefits Of <span className='grdiant'>iOS App Development</span> Services </>}
                lop7={lop7}

                lop1={lop1}
                titl1={<> Adaptable <br></br> Mobile App </>}
                text1='Transform your idea into a reality with our iPhone app development company. We create versatile, user-friendly mobile apps for maximum success.'

                lop2={lop2}
                titl2={<> Enhanced <br></br> Security </>}
                text2='With iOS, you get peace
                of mind knowing your information security are in good hands.'

                lop3={lop3}
                titl3={<> Best User <br></br> Experience </>}
                text3='iOS developers make magic
                happen with top-notch tools and tech stacks to craft
                iOS apps which boast an unparalleled user experience. Treat yourself – download
                one today!'

                lop4={lop4}
                titl4={<> Greater <br></br>Scalability </>}
                text4='iPhone app development
                company provide an opportunity to keep up with the trends while taking
                your business where it needs to
                go. Unleash the potential of scalability today!'

                lop5={lop5}
                titl5={<> Alluring <br></br> Design </>}
                text5='Nothing is more pleasing
                than the captivating iOS graphics and designs - an
                accurate statement of art. With a level of UX finesse guaranteed to delight any
                user.'

                lop6={lop6}
                titl6={<> Cutting Edge <br></br> App Dev </>}
                text6='Cutting-edge iOS apps are
                crafted with finesse by our skilled coders, deploying the
                most advanced tools and tech stack to ensure a seamless user experience.'
            /> */}


            <Publication />


            <Digitallp />


            <Hireus />

            <Integration />

            {/* <Consultation />

            <Ourportfoliolp />


            <Lookingforlp />

            <Consultation2 /> */}

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
