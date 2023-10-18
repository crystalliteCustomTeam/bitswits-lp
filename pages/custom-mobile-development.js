import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import Homenextproject from '@/components/Homenextproject';
import NewMobileFaqs from '@/components/NewMobileFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import NewiosPortFolio from '@/components/NewiosPortFolio';
import HomeLocation from '@/components/HomeLocation';
import CustomBanner from '@/components/CustomBanner';
import CustomMaintain from '@/components/CustomMaintain';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewHomeAbout from '@/components/NewHomePageAbout';
import Technologieswe from '@/components/Technologieswe';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import NewCustomWho from '@/components/NewCustomWho';
import NewCustomWhat from '@/components/NewCustomWhat';

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
            <NewCustomWho />
            <NewCustomWhat />
            <NewiosPortFolio />
            <div className=''>
                <Newsuccess />
            </div>
            <section className='spacingtb1'>
            <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject />
            <NewMobileFaqs />
            <HomeLocation />

        </>
    )
}