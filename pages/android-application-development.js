import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import NewAndroidFaqs from '@/components/NewAndroidFaqs';
import AndriodMaintainlogo from '@/components/AndriodMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import AndriodBanner from '@/components/AndriodBanner';
import Newsuccess from '@/components/NewMblSuccess';
import NewiosPortFolio from '@/components/NewiosPortFolio';
import NewMblWhy from '@/components/ServisesWhy';

//Icons 

import icon23 from '../public/images/fyicons/10.png'
import icon24 from '../public/images/fyicons/11.png'
import icon25 from '../public/images/fyicons/12.png'
import icon26 from '../public/images/fyicons/13.png'
import icon27 from '../public/images/fyicons/14.png'
import icon28 from '../public/images/fyicons/15.png'
import NewAndriodWho from '@/components/NewAndriodWho';
import NewAndriodWhat from '@/components/NewAndriodWhat';
import NewAddress from '@/components/NewAddress';


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


            <AndriodBanner />
            <NewHomeAbout />
            <AndriodMaintainlogo />
            <NewAddress />
            <Justbuildit />
            <NewAndriodWho />
            <NewAndriodWhat />
            <NewMblWhy
             title = { <> <h4 className='font20 font-bold text-white text-center'>Why Bitswits?</h4> </> }
             subtitle = { <> <h2 className='grdiant f-80 font-bold text-center'>Precision,Performance <br /> & Perfection.</h2> </> }
             sub1 = "Why is There a Need for Android Applications?"
             sub2 = "Achieve a competitive edge, boost revenue, and engage customers effectively with an Android app. BitsWits excels in creating personalized, future-ready apps to expand your market reach."
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Extensive Audience Reach"
                titleTwo="Prominence in the App Store"
                titleThree="Flexible UI Design Features"
                titleFour="Feature Incorporation"
                titleFive="Brand Visibility and Recognition"
                titleSix="Economical and Cost-Effective"
                paraOne="Android is the most widely used mobile operating system globally which means it can aid your business to reach potential customers globally."
                paraTwo="Android apps have high discoverability in the Play Store due to its extensive user base, robust search algorithm, and easy downloading."
                paraThree="Apps run smoothly on smartphones, tablets, mobile devices, and other devices due to Android's support for flexible UI design."
                paraFour="Apps leverage Android's unique features like widgets, AI, and alerts. We ensure seamless integration, delivering the best user experience"
                paraFive="Android app offers a direct and interactive channel for users to engage with your brand on their mobile devices."
                paraSix="Android apps can reach a wide audience without the need for expensive hardware or software, reducing development and distribution costs."
            />
            <NewiosPortFolio />
            <Newsuccess />
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject />
            <NewAndroidFaqs />
            <HomeLocation />


        </>
    )
}
