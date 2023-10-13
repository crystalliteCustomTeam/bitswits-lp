import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblTechnologiesWe from '@/components/NewMblTechnologiesWe';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import FlutterBanner from '@/components/FlutterBanner';
import NewHybridServices from '@/components/NewHybridServices';
import NewHybridWho from '@/components/NewHybridWho';
import NewHybridPortfolio from '@/components/NewHybridPortfolio';
import HomeLocation from '@/components/HomeLocation';
import FlutterMaintain from '@/components/FlutterMaintain';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWhy from '@/components/NewMblWhy';
import Technologieswe from '@/components/Technologieswe';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';


//Icons 

import icon23 from '../public/images/fyiconsflutter/1.png'
import icon24 from '../public/images/fyiconsflutter/2.png'
import icon25 from '../public/images/fyiconsflutter/3.png'
import icon26 from '../public/images/fyiconsflutter/4.png'
import icon27 from '../public/images/fyiconsflutter/5.png'
import icon28 from '../public/images/fyiconsflutter/6.png'

export default function HybridMobile() {

    return (
        <>
            <Head>
                <title>Hybrid Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <FlutterBanner />
            <NewHomeAbout />
            <FlutterMaintain />
            <Justbuildit />
            <NewHybridWho />
            <NewMblWhat />
            <NewMblWhy
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Cross-Platform Apps"
                titleTwo="Expressive and Impressive UI"
                titleThree="Native Performance"
                titleFour={<> Cost <br /> Savings </>}
                titleFive="Rapid Development"
                titleSix={<>Vast <br /> Plugins </>}
                paraOne="Flutter allows app deployment to both iOS and Android platforms, saving time and cost for development."
                paraTwo="Flutter widgets and composition models help Flutter app developers quickly build intuitive and high-quality UI/UX on each platform."
                paraThree="Flutter app development agency builds fast-performing apps by compiling directly to native ARM code rather than JavaScript."
                paraFour="Flutter app developers use a single codebase that reduces development and maintenance costs. No need for a separate iOS and Android codebase."
                paraFive="The hot reload feature allows Flutter app developers to see code changes reflected immediately without recompiling or accelerating the process."
                paraSix="To add features without writing repetitive code, BitsWits have created an extensive network of high-quality plugins for Flutter."
            />
            <NewHybridPortfolio />
            <div className='status'>
                <Newsuccess />
            </div>
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <NewMblNextProject />
            <Faqs />
            <HomeLocation />

        </>
    )
}