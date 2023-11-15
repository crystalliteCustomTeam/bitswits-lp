import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilitiesnft from '@/components/Capabilitiesnft';
import GameNftFaqs from '@/components/GameNftFaqs';
import NewMaintainnft from '@/components/NewMaintainnft';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import GameNftBanner from '@/components/GameNftBanner';
import Bullet2ddiscovergame from '@/components/Bullet2ddiscovergame';
import Genreof2dgamesnft from '@/components/Genreof2dgamesnft';
import Engagenft from '@/components/Engagenft';
import Newsuccess from '@/components/NewMblSuccess';
import Wealthnft from '@/components/Wealthnft';
import NewAddress from '@/components/NewAddress';


//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <GameNftBanner />
            <NewHomeAbout 
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <Bullet2ddiscovergame />
            <NewMaintainnft />
            <NewAddress />
            <Genreof2dgamesnft />
            <Capabilitiesnft />
            <Wealthnft />
            <Engagenft />
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
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject 
                title="Brace yourself for an App-venture!"
            />
            <GameNftFaqs />
            <HomeLocation />


        </>
    )
}
