import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import Homenextproject from '@/components/Homenextproject';
import NewReactFaqs from '@/components/NewReactFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import HybridBanner from '@/components/HybridBanner';
import NewHybridServices from '@/components/NewHybridServices';
import NewHybridWho from '@/components/NewHybridWho';
import ServicesPortfolio from '@/components/ServicesPortfolio';
import HomeLocation from '@/components/HomeLocation';
import NativeBanner from '@/components/NativeBanner';
import NewNativeServices from '@/components/NewNativeServices';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewMblWhy from '@/components/ServisesWhy';
import Technologieswe from '@/components/Technologieswe';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import NewAddress from '@/components/NewAddress';

export default function nativeMobile() {

    return (
        <>
            <Head>
                <title>Native Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NativeBanner />
            <NewHomeAbout 
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <NewNativeServices />
            <NewAddress />
            <Justbuildit />
            <NewHybridWho />
            <NewMblWhat />
            {/* <NewMblWhy /> */}
             <ServicesPortfolio />
            <div className='status'>
                <Newsuccess
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
            </div>
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject 
                title="Brace yourself for an App-venture!"
            />
            <NewReactFaqs />
            <HomeLocation />

        </>
    )
}