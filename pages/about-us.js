import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout2';
import NewHomeWho from '@/components/NewHomeWho';
import NewHomeWhat from '@/components/NewHomeWhat';
import NewHomeHear from '@/components/NewHomeHear'
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities from '@/components/Capabilities2';
import Faqs from '@/components/NewhomeFaqs';
import NewBannerabout from '@/components/NewBannerabout';
import NewMaintain from '@/components/NewMaintain';
import Bullet2dproofgameabout from '@/components/Bullet2dproofgameabout';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit2'));


export default function Home() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <NewBannerabout />
            <Justbuildit />
            <NewHomeAbout />
            <Bullet2dproofgameabout />
            <Capabilities />
            <Homenextproject />
            <HomeLocation />
        </>
    )
}
