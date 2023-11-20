import Head from 'next/head'
import React from 'react'
//
const ContactBox = React.lazy(() => import('@/components/ContactBox'));


export default function ContactUs() {



    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ContactBox />
        </>
    )
}
