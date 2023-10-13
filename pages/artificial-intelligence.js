import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import NewHomeHear from '@/components/NewHomeHear'
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities2d from '@/components/Capabilities2d';
import Faqs from '@/components/NewhomeFaqs';
import NewBanner from '@/components/NewBanner';
import AiMaintainlogo from '@/components/AiMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import AiBanner from '@/components/AiBanner';
import Bullet2dproofgame from '@/components/Bullet2dproofgame';
import Genreof2dgames from '@/components/Genreof2dgames';
import Engage2d from '@/components/Engage2d';
import Newsuccess from '@/components/NewMblSuccess';
import Technologieswe2dgame from '@/components/Technologieswe2dgame';
import Wealth2d from '@/components/Wealth2d';
import NewiosPortFolio from '@/components/NewiosPortFolio';
import NewMblWhy from '@/components/NewMblWhy';

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


            <AiBanner />
            <NewHomeAbout />
            <AiMaintainlogo />
            <Justbuildit />
            <NewMblWho />
            <NewMblWhat />
            {/* <NewMblWhy /> */}
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
