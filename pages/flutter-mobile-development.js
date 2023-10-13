import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblTechnologiesWe from '@/components/NewMblTechnologiesWe';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import NewhomeFaqsflutter from '@/components/NewhomeFaqsflutter';
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

import icon23 from "../public/images/fyiconsflutter/1.png";
import icon24 from "../public/images/fyiconsflutter/2.png";
import icon25 from "../public/images/fyiconsflutter/3.png";
import icon26 from "../public/images/fyiconsflutter/4.png";
import icon27 from "../public/images/fyiconsflutter/5.png";
import icon28 from "../public/images/fyiconsflutter/6.png";

export default function HybridMobile() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />

        <title>Trusted Flutter App Development Company - Bitswits!</title>
        <meta
          name="description"
          content="Don't settle for mediocre apps! Our flutter app developers deliver cutting-edge solutions that are designed to make a lasting impression on your users."
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Trusted Flutter App Development Company - Bitswits!"
        />
        <meta
          property="og:description"
          content="Don't settle for mediocre apps! Our flutter app developers deliver cutting-edge solutions that are designed to make a lasting impression on your users."
        />
        {/* <meta
          property="og:url"
          content="https://bitswits.co/flutter-app-development-company/"
        /> */}
        <meta
          property="og:site_name"
          content="Trusted Flutter App Development Company - Bitswits!"
        />

        {/* <link
          rel="canonical"
          href="https://bitswits.co/flutter-app-development-company/"
        /> */}

        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />

        <meta
          name="DC.title"
          content="flutter app development company, flutter app developers, hire flutter app developers"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
        <meta
          name="DC.title"
          content="flutter app development company, flutter app developers, hire flutter app developers"
        />
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover" />
        <meta name="geo.position" content="38.692045;-75.401331" />
        <meta name="ICBM" content="38.692045, -75.401331" />

        <meta
          name="DC.title"
          content="flutter app development company, flutter app developers, hire flutter app developers"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
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
            <NewhomeFaqsflutter />
            <HomeLocation />

        </>
    )
}
