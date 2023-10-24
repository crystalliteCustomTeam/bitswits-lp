import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import NewwebappFaqs from '@/components/NewwebappFaqs';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import WebappBanner from '@/components/WebappBanner';
import Newsuccess from '@/components/NewMblSuccess';
import NewiosPortFolio from '@/components/NewiosPortFolio';
import Dedicatedweb from '@/components/Dedicatedweb';
import NewMblWhy from '@/components/NewMblWhy';


// Why Icon
import icon23 from '../public/images/fyicons/82.png'
import icon24 from '../public/images/fyicons/83.png'
import icon25 from '../public/images/fyicons/84.png'
import icon26 from '../public/images/fyicons/85.png'
import icon27 from '../public/images/fyicons/86.png'
import icon28 from '../public/images/fyicons/87.png'
import NewWebWho from '@/components/NewWebWho';
import NewWebWhat from '@/components/NewWebWhat';
import NewAddress from '@/components/NewAddress';

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                {/* <!-- Title & Description --> */}
                <title>Advanced Web App Development Company - Bitswits</title>
                <meta name="description" content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs." />
                {/* <!-- OG Tags --> */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Advanced Web App Development Company - Bitswits" />
                <meta property="og:description" content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs." />
                {/* <meta property="og:url" content="https://bitswits.co/web-app-development-company/" /> */}
                <meta property="og:site_name" content="Advanced Web App Development Company - Bitswits" />
                {/* <!-- Canonical --> */}
                {/* <link rel="canonical" href="https://bitswits.co/web-app-development-company/" /> */}
                {/* <!-- Bing Master Verification  --> */}
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                {/* <!-- Local Location Tags --> */}
                <meta name="DC.title" content="web app development company, hire web application developers, top web app developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="web app development company, hire web application developers, top web app developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                {/* <!-- Nationwide Location Tags --> */}
                <meta name="DC.title" content="web app development company, hire web application developers, top web app developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <WebappBanner />
            <NewHomeAbout />
            <Dedicatedweb />
            <NewAddress />
            <Justbuildit />
            <NewWebWho />
            <NewWebWhat />
            <NewMblWhy
                title={<> <h4 className='font20 font-bold text-white text-center'>Why Bitswits?</h4> </>}
                subtitle={<> <h2 className='grdiant f-80 font-bold text-center'>Precision,Performance <br /> & Perfection.</h2> </>}
                sub1="Work Smarter and Convert Faster with Web Apps at BitsWits!"
                sub2="Web app development services at BitsWits, allows you to build better and faster web applications globally."
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Booming Accessibility"
                titleTwo="Better Engagement"
                titleThree="Uncomplicated Business Processes"
                titleFour="A Boost in Productivity"
                titleFive="Better Data Insights"
                titleSix={<> Lower <br /> Cost </>}
                paraOne="Web apps can be assessed on any device with a Wi-Fi connection, letting you engage in business anytime and anywhere."
                paraTwo="Web apps provide an interactive platform to communicate and engage customers."
                paraThree="Our web apps can automate business workflows for improved efficiency and simplified processes."
                paraFour="Web app developers at BitsWits create apps that allow users to access information faster and more efficiently."
                paraFive="Web apps have data and information that can provide valuable insights that guide in the decision-making process."
                paraSix="At BitsWits, web applications require lower development and maintenance costs compared to native apps."
            />
            <NewiosPortFolio />
            <Newsuccess />
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject />
            <NewwebappFaqs />
            <HomeLocation />


        </>
    )
}
