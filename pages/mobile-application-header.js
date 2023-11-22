import Head from "next/head";
import React from "react";
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout'));
const ServicesMaintain = React.lazy(() => import('@/components/ServicesMaintain'));
const NewAddress = React.lazy(() => import('@/components/NewAddress'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit'));
const ServicesWho = React.lazy(() => import('@/components/ServicesWho'));
const ServicesWhat = React.lazy(() => import('@/components/ServicesWhat'));
const ServisesWhy = React.lazy(() => import('@/components/ServisesWhy'));
const ServicesPortfolio = React.lazy(() => import('@/components/ServicesPortfolio'));
const Capabilities = React.lazy(() => import('@/components/Capabilities'));
const Newsuccess = React.lazy(() => import('@/components/NewMblSuccess'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const NewHomeGlobal = React.lazy(() => import('@/components/NewHomeGlobal'));
const NewHomeSlider = React.lazy(() => import('@/components/NewHomeSlider'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const ServicesFaqs = React.lazy(() => import('@/components/ServicesFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const BannerImage = await import("@/public/newMobilePageImages/banner_image.png")
const WhoImage = await import("@/public/newMobilePageImages/who_image.png")
const WhatImage = await import("@/public/newMobilePageImages/what_Image.png")
//icons 
const icon23 = await import('../public/images/fymobile/1.png')
const icon24 = await import('../public/images/fymobile/2.png')
const icon25 = await import('../public/images/fymobile/3.png')
const icon26 = await import('../public/images/fymobile/4.png')
const icon27 = await import('../public/images/fymobile/5.png')
const icon28 = await import('../public/images/fymobile/6.png')


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
          The Professional Mobile App Development Company - BitsWits.
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
          content="The Professional Mobile App Development Company - BitsWits."
        />
        <meta
          property="og:description"
          content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions."
        />
        <meta
          property="og:site_name"
          content="The Professional Mobile App Development Company - BitsWits."
        />
        {/* <!-- Canonical --> */}
        {/* <link rel="canonical" href="https://BitsWits.co/mobile-app-development-company/" /> */}
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


     
    </>
  );
}
