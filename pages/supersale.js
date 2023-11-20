import Head from 'next/head'
import React from 'react';
import { useEffect } from 'react';
//
const Appmaking = React.lazy(() => import('@/components/Appmaking'));
const Homeslider = React.lazy(() => import('@/components/Homeslider'));
const ProjectProcesshome = React.lazy(() => import('@/components/ProjectProcesshome'));
const Creative = React.lazy(() => import('@/components/Creative'));
const Expertapphome = React.lazy(() => import('@/components/Expertapphome'));
const Thrthy = React.lazy(() => import('@/components/Thrthy'));
const Everyone = React.lazy(() => import('@/components/Everyone'));
const Testimonailslider = React.lazy(() => import('@/components/Testimonailslider'));
const Newfaqshome = React.lazy(() => import('@/components/Newfaqshome'));
const Startaproject = React.lazy(() => import('@/components/Startaproject'));
const Formnewlpnewhome = React.lazy(() => import('@/components/Formnewlpnewhome'));


export default function Home() {

    useEffect(() => {
        const locoScroll = new LocomotiveScroll();
    }, []);


    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>

            <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js"></script>

            <Appmaking />
            <Homeslider />

            <ProjectProcesshome
                processclass='process'
            />
            <Creative />
            <Expertapphome
                expertapp='expertapp'
            />
            <Thrthy />
            <Everyone />
            <Testimonailslider />
            <Newfaqshome />
            <Startaproject />
            <Formnewlpnewhome />
        </>
    )
}
