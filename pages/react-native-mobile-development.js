import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblNextProject from '@/components/NewMblNextProject';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import NewHybridWho from '@/components/NewHybridWho';
import NewHybridPortfolio from '@/components/NewHybridPortfolio';
import HomeLocation from '@/components/HomeLocation';
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
                <title>React Native Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                titleFour={<>Live <br /> Reloading</>}
                titleFive="Open-Source Framework"
                titleSix={<>Corporate <br /> Backed</>}
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