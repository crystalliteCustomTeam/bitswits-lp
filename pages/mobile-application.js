import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblBanner from '@/components/NewMblBanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import NewHomeHear from '@/components/NewHomeHear';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import NewMblPortFolio from '@/components/NewMblPortFolio';
import NewMblServices from '@/components/NewMblServices';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));

import GameCapabilities from '@/components/GameCapabilities';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/NewMblTechnologiesWe';
import Homenextproject from '@/components/Homenextproject';


export default function mobileApplication() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NewMblBanner />
            <NewHomeAbout />
            <NewMblWho />
            <NewMblWhat />
            <Justbuildit />
            <NewHomeHear />
            <NewMblServices />
            <NewMblPortFolio />

            <Capabilities />
            <div className='status2'>

                <Newsuccess />

            </div>

            <NewHomeGlobal />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject />
            <Faqs />


        </>
    )
}