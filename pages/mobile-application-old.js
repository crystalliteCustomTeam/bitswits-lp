import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblBanner from '@/components/NewMblBanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import NewHomeHear from '@/components/NewHomeHear';
import NewMblMaintain from '@/components/NewMblMaintain';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblTechnologiesWe from '@/components/NewMblTechnologiesWe';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import NewMblPortFolio from '@/components/NewMblPortFolio';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function Home() {




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
            <Justbuildit />
            <NewMblWhat />
            <NewHomeHear />
            <NewMblMaintain />
            <NewMblPortFolio />
            <Capabilities />
            <Newsuccess />
            <NewMblGlobal />
            <NewMblSlider />
            <NewMblTechnologiesWe />
            <NewMblNextProject />
            <Faqs />



        </>
    )
}
