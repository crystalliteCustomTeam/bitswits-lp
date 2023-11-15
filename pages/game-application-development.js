import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import Newgamebanner from '@/components/Newgamebanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import Newsuccess from '@/components/NewMblSuccess';
import Newslider from '@/components/Newslider';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities from '@/components/Capabilities';
import NewgameappdevFaqs from '@/components/NewgameappdevFaqs';
import Bulletproofgame from '@/components/Bulletproofgame';
import Targetaudience from '@/components/Targetaudience';
import Newgamemaintain from '@/components/Newgamemaintain';
import Wealth from '@/components/Wealth';
import Genreofgames from '@/components/Genreofgames';
import Engage from '@/components/Engage';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewAddress from '@/components/NewAddress';

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function Gameapplicationdevelopment() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Newgamebanner />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <Bulletproofgame />
            <Targetaudience />
            <Newgamemaintain />
            <NewAddress />
            <Wealth />
            <Genreofgames />
            <Engage />
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
                            text: 'Start your app development journey with no-obligation consultation via email and phone.',
                            buttonText: 'Call Now!',
                            link: '#',
                        },
                    ]
                }
            />
            <NewHomeGlobal />
            <Capabilities />
            <Newslider />
            <Technologieswe />
            <Homenextproject />
            <NewgameappdevFaqs />



        </>
    )
}
