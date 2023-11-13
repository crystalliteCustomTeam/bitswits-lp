import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewHomeAbout from '@/components/NewHomePageAbout';
import GameBlckChnFaqs from '@/components/GameBlckChnFaqs';
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
import NewAddress from '@/components/NewAddress';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function mobileApplication() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <GamedevelopmentBanner />
            <NewHomeAbout 
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <GameAdvantages />
            <GamingServices />
            <NewAddress />
            <GameTechnologies />
            <GameCapabilities />
            <Solutions />
            <GameEngage />
            <Newsuccess
          subtitle="Ready For Success?"
                maintitle="Brace Yourself for What Happens Next"
                successSteps={
                    [
                        {
                            number: '01',
                            title: 'Talk To Our Experts',
                            text: 'Contact us without obligation by email or phone and secure your free consultation.',
                            buttonText: 'Connect Now!',
                            link: '#',
                        },
                        {
                            number: '02',
                            title: 'Get A Quote',
                            text: 'Get an exact cost breakdown structure of your app.',
                            buttonText: 'Chat Now!',
                            link: '#',
                        },
                        {
                            number: '03',
                            title: 'Build An MVP',
                            text: 'Contact us without obligation by email or phone and secure your free consultation.',
                            buttonText: 'Call Now!',
                            link: '#',
                        },
                    ]
                }
            />
            <NewHomeGlobal />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject 
                title="Brace yourself for an App-venture!"
            />
            <GameBlckChnFaqs />

        </>
    )
}