import Head from 'next/head'
import React from 'react';
//components
import Gamer2dBanner from '@/components/Gamer2dBanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import Bullet2dproofgame from '@/components/Bullet2dproofgame';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities2d from '@/components/Capabilities2d';
import Game2dFaqs from '@/components/Game2dFaqs';
import NewMaintainlogo from '@/components/NewMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import Genreof2dgames from '@/components/Genreof2dgames';
import Engage2d from '@/components/Engage2d';
import Newsuccess from '@/components/NewMblSuccess';
import Technologieswe2dgame from '@/components/Technologieswe2dgame';
import Wealth2d from '@/components/Wealth2d';
import NewAddress from '@/components/NewAddress';


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Gamer2dBanner />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <Bullet2dproofgame />
            <NewMaintainlogo />
            <NewAddress
                addresClass="address2d"
            />
            <Technologieswe2dgame />
            <Genreof2dgames />
            <Capabilities2d />
            <Wealth2d />
            <Engage2d />
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
                            text: 'Get an exact cost breakdown structure of your app',
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
            <Game2dFaqs />
            <HomeLocation />


        </>
    )
}
