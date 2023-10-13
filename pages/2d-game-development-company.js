import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewHomeWho from '@/components/NewHomeWho';
import NewHomeWhat from '@/components/NewHomeWhat';
import NewHomeHear from '@/components/NewHomeHear'
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities2d from '@/components/Capabilities2d';
import Faqs from '@/components/NewhomeFaqs';
import NewBanner from '@/components/NewBanner';
import NewMaintainlogo from '@/components/NewMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import Gamer2dBanner from '@/components/Gamer2dBanner';
import Bullet2dproofgame from '@/components/Bullet2dproofgame';
import Genreof2dgames from '@/components/Genreof2dgames';
import Engage2d from '@/components/Engage2d';
import Newsuccess from '@/components/NewMblSuccess';
import Technologieswe2dgame from '@/components/Technologieswe2dgame';
import Wealth2d from '@/components/Wealth2d';


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


            <Gamer2dBanner />
            <NewHomeAbout />
            <Bullet2dproofgame />
            <NewMaintainlogo />
            <Technologieswe2dgame />
            <Genreof2dgames />
            <Capabilities2d />
            <Wealth2d />
            <Engage2d />
            <Newsuccess />
            <NewHomeGlobal />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject />
            <Faqs />
            <HomeLocation />


        </>
    )
}
