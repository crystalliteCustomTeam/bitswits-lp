import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewBanner from '@/components/NewBanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewHomeWho from '@/components/NewHomeWho';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewHomeWhat from '@/components/NewHomeWhat';
import NewHomeHear from '@/components/NewHomeHear'
import NewMaintain from '@/components/NewMaintain';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import Capabilities from '@/components/Capabilities';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Faqs from '@/components/NewhomeFaqs';
import HomeLocation from '@/components/HomeLocation';


export default function Home() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NewBanner />
            <NewHomeAbout />
            <NewHomeWho />
            <NewHomeWhat />
            <Justbuildit />
            <NewHomeHear />
            <NewMaintain />
            <NewHomeGlobal />
            <Capabilities />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject />
            <Faqs />
            <HomeLocation />
        </>
    )
}
