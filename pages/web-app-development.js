import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Faqs from '@/components/NewhomeFaqs';
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

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <WebappBanner />
            <NewHomeAbout />
            <Dedicatedweb />
            <Justbuildit />
            <NewMblWho />
            <NewMblWhat />
            <NewMblWhy 
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Booming Accessibility"
                titleTwo="Better Customer Engagement"
                titleThree="Uncomplicated Business Processes"
                titleFour="A Boost in Productivity"
                titleFive="Better Data Insights"
                titleSix={ <> Lower <br /> Cost </> }
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
            <Faqs />
            <HomeLocation />


        </>
    )
}
