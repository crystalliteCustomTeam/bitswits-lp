import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewHomeAbout from '@/components/NewHomePageAbout';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import GamedevelopmentBanner from '@/components/GamedevelopmentBanner';
import GameAdvantages from '@/components/blockchainadvantages';
import GamingServices from '@/components/GamingServices';
import GameTechnologies from '@/components/GameTechnologies';
import GameCapabilities from '@/components/GameCapabilities';
import Solutions from '../components/Solution';
import GameEngage from '@/components/EngageGame';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/NewMblTechnologiesWe';
import Homenextproject from '@/components/Homenextproject';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function mobileApplication() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <GamedevelopmentBanner />
            <NewHomeAbout />
            <GameAdvantages />
            <GamingServices />
            <GameTechnologies />
            <GameCapabilities />
            <Solutions />
            <GameEngage />
            <Newsuccess />
            <NewHomeGlobal />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject />
            <Faqs />

        </>
    )
}