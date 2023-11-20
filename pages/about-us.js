import Head from 'next/head'
import React from 'react';

const NewBannerabout = React.lazy(() => import('@/components/NewBannerabout'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit2'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout2'));
const Bullet2dproofgameabout = React.lazy(() => import('@/components/Bullet2dproofgameabout'));
const Capabilities = React.lazy(() => import('@/components/Capabilities'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));


export default function Home() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NewBannerabout />
            <Justbuildit />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <Bullet2dproofgameabout />
            <Capabilities />
            <Homenextproject
                asignClass='abtProject'
            />
            <HomeLocation />
        </>
    )
}
