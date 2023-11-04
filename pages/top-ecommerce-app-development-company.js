import Head from 'next/head'
import React from 'react';
import EcommerceBanner from '@/components/EcommerceBanner';
import AwardRecognition from '@/components/AwardRecognition';
import EcommercePLatform from '@/components/EcommercePLatform';

const Ecommerce = () => {
    return (
        <>
            <Head>
                <title>Top Ecommerce App Development Company - Bitswits.</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>
            <AwardRecognition />
            <EcommercePLatform />
        </>
    )
}

export default Ecommerce