import Head from 'next/head'
import React from 'react'
//
import NewLpBanner from '@/components/NewLpBanner';
import NewLpForm from '@/components/NewLpForm';
import NewLpPlatform from '@/components/NewLpPlatform';
import NewLpCounter from '@/components/NewLpCounter';
import NewLpServices from '@/components/NewLpServices';
import NewLpPartner from '@/components/NewLpPartner';
import NewLpPublication from '@/components/NewLpPublication';
import NewLpExpertise from '@/components/NewLpExpertise';
import NewLpTransforming from '@/components/NewLpTransforming';
import NewLpHire from '@/components/NewLpHire';
import NewLpFaqs from '@/components/NewLpFaqs';
import NewLpReady from '@/components/NewLpReady';
import NewLpLocations from '@/components/NewLpLoction';


export default function newLpPage() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NewLpBanner />
            <NewLpForm />
            <NewLpPlatform />
            <NewLpCounter />
            <NewLpExpertise />
            <NewLpServices />
            <NewLpPartner />
            <NewLpPublication />
            <NewLpTransforming />
            <NewLpHire />
            <NewLpFaqs />
            <NewLpReady />
            <NewLpLocations />
        </>
    )
}


