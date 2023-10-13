import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblTechnologiesWe from '@/components/NewMblTechnologiesWe';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqsreactnative';
import Newsuccess from '@/components/NewMblSuccess';
import FlutterBanner from '@/components/FlutterBanner';
import NewHybridServices from '@/components/NewHybridServices';
import NewHybridWho from '@/components/NewHybridWho';
import NewHybridPortfolio from '@/components/NewHybridPortfolio';
import HomeLocation from '@/components/HomeLocation';
import FlutterMaintain from '@/components/FlutterMaintain';
import ReactNativeBanner from '@/components/ReactNativeBanner';
import ReactnativeMaintain from '@/components/ReactnativeMaintain';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWhy from '@/components/NewMblWhy';
import Technologieswe from '@/components/Technologieswe';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';


//Icons 

import icon23 from '../public/images/fynative/1.png'
import icon24 from '../public/images/fynative/2.png'
import icon25 from '../public/images/fynative/3.png'
import icon26 from '../public/images/fynative/4.png'
import icon27 from '../public/images/fynative/5.png'
import icon28 from '../public/images/fynative/6.png'


export default function ReactNativeMobile() {

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

            <ReactNativeBanner />
            <NewHomeAbout />
            <ReactnativeMaintain />
            <Justbuildit />
            <NewHybridWho />
            <NewMblWhat />
            <NewMblWhy
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Cross-Platform Saves Cost and Time"
                titleTwo="Better and Native Performance"
                titleThree="Reusability"
                titleFour="Live Reloading"
                titleFive="Open-Source Framework"
                titleSix="Corporate Backed"
                paraOne="React native apps allow building one application that runs on both iOS and Android from a single JavaScript codebase."
                paraTwo="For near-native performance, React Native compiles native code. It doesn’t have hybrid lag like other cross-platform options"
                paraThree="Development is accelerated by the ability to reuse a significant amount of code, such as business logic and APIs, between iOS and Android."
                paraFour="Live reloading speeds the development process by allowing code updates to be made instantly"
                paraFive="At BitsWits, our team utilizes the active open source React Native framework to build applications without bugs."
                paraSix="Developed and backed by talented individuals in the field, including Facebook, Microsoft, Shopify, and others."
            />
            <NewHybridPortfolio />
            <div className='status'>
                <Newsuccess />
            </div>
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <NewMblNextProject />
            <Faqs />
            <HomeLocation />

        </>
    )
}