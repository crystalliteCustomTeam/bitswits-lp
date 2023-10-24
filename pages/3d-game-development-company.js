import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewHomeAbout from '@/components/NewHomePageAbout';
import Game3dFaqs from '@/components/Game3dFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import New3dBanner from '@/components/3dBanner';
import New3dAdvantage from '@/components/3dAdvantage';
import New3dTarget from '@/components/3dTarget';
import New3dMaintain from '@/components/3dMaintain';
import Experience from '@/components/3dExperience';
import New3dSolutions from '@/components/3dSolution';
import Genreof3dgames from '@/components/3dGenre';
import Capabilities3d from '@/components/3dCapabilities';
import Engage3d from '@/components/3dEngage';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/NewMblTechnologiesWe';
import Homenextproject from '@/components/Homenextproject';
import NewAddress from '@/components/NewAddress';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


const mobileApplication = () => {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <New3dBanner />
            <NewHomeAbout />
            <New3dAdvantage />
            <New3dTarget />
            <New3dMaintain />
            <NewAddress />
            <Experience />
            <New3dSolutions />
            <Genreof3dgames />
            <Capabilities3d />
            <Engage3d />
            <Newsuccess />
            <NewHomeGlobal />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject />
            <Game3dFaqs />

        </>
    )
}


export default mobileApplication