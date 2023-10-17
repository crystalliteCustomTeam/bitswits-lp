import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import NewHomeAbout from "@/components/NewHomePageAbout";
import NewMblWhat from "@/components/NewMblWhat";
import Technologieswe from "@/components/Technologieswe";
import Homenextproject from "@/components/Homenextproject";
import NewCrossFaqs from "@/components/NewCrossFaqs";
import CrossMaintainlogo from "@/components/CrossMaintainlogo";
import NewHomeGlobal from "@/components/NewHomeGlobal";
import NewHomeSlider from "@/components/NewHomeSlider";
import HomeLocation from "@/components/HomeLocation";
import CrossBanner from "@/components/CrossBanner";
import Newsuccess from "@/components/NewMblSuccess";
import NewiosPortFolio from "@/components/NewiosPortFolio";
import Partnercross from "@/components/Partnercross";
import NewMblWhy from "@/components/NewMblWhy";

//Icons
import icon23 from "../public/images/fyicons/19.png";
import icon24 from "../public/images/fyicons/20.png";
import icon25 from "../public/images/fyicons/21.png";
import icon26 from "../public/images/fyicons/22.png";
import icon27 from "../public/images/fyicons/23.png";
import icon28 from "../public/images/fyicons/24.png";
import NewcrossWho from "@/components/NewcrossWho";
import NewCrossWhat from "@/components/NewCrossWhat";

//components
const Justbuildit = dynamic(() => import("@/components/Justbuildit"));

export default function gamedevelopmentcompany() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        {/* <!-- Title & Description --> */}
        <title>Leading Cross Platform App Development Company - Bitswits</title>
        <meta
          name="description"
          content="Want to launch your app on all platforms simultaneously? Our cross platform developers make it possible! We design, develop, and deploy apps that work seamlessly."
        />
        {/* <!-- OG Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Leading Cross Platform App Development Company - Bitswits"
        />
        <meta
          property="og:description"
          content="Want to launch your app on all platforms simultaneously? Our cross platform developers make it possible! We design, develop, and deploy apps that work seamlessly."
        />
        {/* <meta property="og:url" content="https://bitswits.co/cross-platform-app-development-company/" /> */}
        <meta
          property="og:site_name"
          content="Leading cross platform app development company - Bitswits"
        />
        {/* <!-- Canonical --> */}
        {/* <link rel="canonical" href="https://bitswits.co/cross-platform-app-development-company/" /> */}
        {/* <!-- Bing Master Verification  --> */}
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
        {/* <!-- Local Location Tags --> */}
        <meta
          name="DC.title"
          content="cross platform mobile app development company, cross platform app developers"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
        <meta
          name="DC.title"
          content="cross platform mobile app development company, cross platform app developers"
        />
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover" />
        <meta name="geo.position" content="38.692045;-75.401331" />
        <meta name="ICBM" content="38.692045, -75.401331" />
        {/* <!-- Nationwide Location Tags --> */}
        <meta
          name="DC.title"
          content="cross platform mobile app development company, cross platform app developers"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <CrossBanner />
      <NewHomeAbout />
      <Partnercross />
      <CrossMaintainlogo />
      <Justbuildit />
      <NewcrossWho />
      <NewCrossWhat />
      <NewMblWhy
        iconOne={icon23}
        iconTwo={icon24}
        iconThree={icon25}
        iconFour={icon26}
        iconFive={icon27}
        iconSix={icon28}
        titleOne="Reaching More Users"
        titleTwo="Smooth Development"
        titleThree="Consistent Experience"
        titleFour="Simplified & Easy Maintenance"
        titleFive="Investments Built to Last"
        titleSix="Improved Engagement"
        paraOne="Cross-platform apps work across iOS, Android, web, and other platforms to access a global target market."
        paraTwo="Cross-platform app developers build multiple platforms from one codebase, which reduces development time, resources, and costs."
        paraThree="Cross-platform applications allow a unified UI/UX across devices for brand consistency."
        paraFour="Our cross-platform app developers improve updates and bug fixes with a shared codebase issued simultaneously across platforms."
        paraFive="Apps that are cross-platform may be used on new gadgets and platforms without having to be rebuilt."
        paraSix="At BitsWits, professional cross-platform app developers focus on smooth customer engagement and experience."
      />
      <NewiosPortFolio />
      <Newsuccess />
      <section className="spacingtb1">
        <Technologieswe />
      </section>
      <NewHomeGlobal />
      <NewHomeSlider />
      <Homenextproject />
      <NewCrossFaqs />
      <HomeLocation />
    </>
  );
}
