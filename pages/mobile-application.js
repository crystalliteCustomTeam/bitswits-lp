import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
//components
import NewMblBanner from '@/components/NewMblBanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import NewHomeHear from '@/components/NewHomeHear';
import Capabilities from '@/components/Capabilities';
import NewMobileFaqs from '@/components/NewMobileFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import NewMblPortFolio from '@/components/NewMblPortFolio';
import NewMblServices from '@/components/NewMblServices';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));

import GameCapabilities from "@/components/GameCapabilities";
import NewHomeGlobal from "@/components/NewHomeGlobal";
import NewHomeSlider from "@/components/NewHomeSlider";
import Technologieswe from "@/components/NewMblTechnologiesWe";
import Homenextproject from "@/components/Homenextproject";

export default function mobileApplication() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="images/icons/favicon.png" />
        <meta charset="UTF-8" />
        {/* <!-- Title & Description --> */}
        <title>
          The Professional Mobile App Development Company - Bitswits.
        </title>
        <meta
          name="description"
          content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions."
        />
        {/* <!-- OG Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Professional Mobile App Development Company - Bitswits."
        />
        <meta
          property="og:description"
          content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions."
        />
        {/* <meta property="og:url" content="https://bitswits.co/mobile-app-development-company/" /> */}
        <meta
          property="og:site_name"
          content="The Professional Mobile App Development Company - Bitswits."
        />
        {/* <!-- Canonical --> */}
        {/* <link rel="canonical" href="https://bitswits.co/mobile-app-development-company/" /> */}
        {/* <!-- Bing Master Verification  --> */}
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
        {/* <!-- Local Location Tags --> */}
        <meta
          name="DC.title"
          content="mobile app development company, hire mobile app developers, mobile app development services"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
        <meta
          name="DC.title"
          content="mobile app development company, hire mobile app developers, mobile app development services"
        />
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover" />
        <meta name="geo.position" content="38.692045;-75.401331" />
        <meta name="ICBM" content="38.692045, -75.401331" />
        {/* <!-- Nationwide Location Tags --> */}
        <meta
          name="DC.title"
          content="mobile app development company, hire mobile app developers, mobile app development services"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
      </Head>

      <NewMblBanner />
      <NewHomeAbout />
      <NewMblWho />
      <NewMblWhat />
      <Justbuildit />
      <NewHomeHear />
      <NewMblServices />
      <NewMblPortFolio />

      <Capabilities />
      <div className="status2">
        <Newsuccess />
      </div>

      <NewHomeGlobal />
      <NewHomeSlider />
      <Technologieswe />
      <Homenextproject />
      <NewMobileFaqs />
    </>
  );
}
