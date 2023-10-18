import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Faqs from '@/components/NewhomeFaqs';
import AugmentedMaintainlogo from '@/components/AugmentedMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import Augmentebanner from '@/components/Augmentebanner';
import Newsuccess from '@/components/NewMblSuccess';
import NewiosPortFolio from '@/components/NewiosPortFolio';

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function augmentedrealityappsdevelopment() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>
            <Augmentebanner />
            <NewHomeAbout />
            <AugmentedMaintainlogo />
            <Justbuildit />
            <NewMblWho />
            <NewMblWhat />
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
