import Head from 'next/head'
import React from 'react';
//components
const NewPopup = React.lazy(() => import('@/components/NewPopup'));
const HomeBanner = React.lazy(() => import('@/components/HomeBanner'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout'));
const NewHomeWho = React.lazy(() => import('@/components/NewHomeWho'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit'));
const NewHomeWhat = React.lazy(() => import('@/components/NewHomeWhat'));
const NewHomeHear = React.lazy(() => import('@/components/NewHomeHear'));
const NewMaintain = React.lazy(() => import('@/components/NewMaintain'));
const NewHomeGlobal = React.lazy(() => import('@/components/NewHomeGlobal'));
const Capabilities = React.lazy(() => import('@/components/Capabilities'));
const NewHomeSlider = React.lazy(() => import('@/components/NewHomeSlider'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const Faqs = React.lazy(() => import('@/components/NewhomeFaqs'));
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

            <NewPopup />
            <HomeBanner />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <NewHomeWho />
            <NewHomeWhat />
            <Justbuildit />
            <NewHomeHear />
            <NewMaintain />
            <NewHomeGlobal
                assignClass="home"
            />
            <Capabilities />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject
                title="Brace yourself for an App-venture!"
            />
            <Faqs />
            <HomeLocation />
        </>
    )
}
