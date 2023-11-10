import Head from 'next/head'
import React from 'react';
import { useEffect } from 'react';
//
import Formnewlpnewhome from '@/components/Formnewlpnewhome';
import Startaproject from '@/components/Startaproject';
import Newfaqshome from '@/components/Newfaqshome';
import ProjectProcesshome from '@/components/ProjectProcesshome';
import Expertapphome from '@/components/Expertapphome';
import Thrthy from '@/components/Thrthy';
import Appmaking from '@/components/Appmaking';
import Homeslider from '@/components/Homeslider';
import Creative from '@/components/Creative';
import Everyone from '@/components/Everyone';
import Testimonailslider from '@/components/Testimonailslider';


export default function Home() {

    useEffect(() => {
        const locoScroll = new LocomotiveScroll();
    }, []);


    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
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
            {/* <Supersaleslider /> */}
            <Newfaqshome />
            <Startaproject />
            <Formnewlpnewhome />
        </>
    )
}
