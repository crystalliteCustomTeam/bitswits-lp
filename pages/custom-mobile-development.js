import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import FlutterBanner from '@/components/FlutterBanner';
import NewHybridServices from '@/components/NewHybridServices';
import NewHybridWho from '@/components/NewHybridWho';
import NewHybridPortfolio from '@/components/NewHybridPortfolio';
import HomeLocation from '@/components/HomeLocation';
import FlutterMaintain from '@/components/FlutterMaintain';
import ReactNativeBanner from '@/components/ReactNativeBanner';
import ReactnativeMaintain from '@/components/ReactnativeMaintain';
import CustomBanner from '@/components/CustomBanner';
import CustomMaintain from '@/components/CustomMaintain';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWhy from '@/components/NewMblWhy';
import Technologieswe from '@/components/Technologieswe';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';

export default function CustomMobile() {

    return (
        <>
            <Head>
                <title>React Native Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <CustomBanner />
            <NewHomeAbout />
            <CustomMaintain />
            <Justbuildit />
            <NewHybridWho />
            <NewMblWhat />
            {/* <NewMblWhy /> */}
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