import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
//components
import NewMblBannerduplicatejump from '@/components/NewMblBannerduplicatejump';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewMblServices from '@/components/NewMblServices';
import NewMblWhy from "@/components/NewMblWhy";
import NewiosPortFolioduplicate from '@/components/NewiosPortFolioduplicate';
import Capabilities from '@/components/Capabilities';
import Newsuccess from '@/components/NewMblSuccess';
import NewHomeGlobal from "@/components/NewHomeGlobal";
import ClientsThink2 from "@/components/ClientsThink2";
import Homenextproject from "@/components/Homenextproject";
import Technologieswe from "@/components/NewMblTechnologiesWe";
import Nextproject2 from "@/components/Nextproject2";
import NewMobileFaqs from '@/components/NewMobileFaqs';
import Contact2 from "@/components/Contact2";
import Awards from "@/components/Awards";
//Icons 

import icon23 from '../public/images/fymobile/1.png'
import icon24 from '../public/images/fymobile/2.png'
import icon25 from '../public/images/fymobile/3.png'
import icon26 from '../public/images/fymobile/4.png'
import icon27 from '../public/images/fymobile/5.png'
import icon28 from '../public/images/fymobile/6.png'

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

      <NewMblBannerduplicatejump />
      <Awards />
      <NewHomeAbout />
      <NewMblWho />
      <NewMblWhat />
      <Justbuildit />
      <NewMblServices />
      <NewMblWhy
        title={<> <h4 className='font20 font-bold text-white text-center'>Why Bitswits?</h4> </>}
        subtitle={<> <h2 className='grdiant f-80 font-bold text-center'>Precision,Performance <br /> & Perfection.</h2> </>}
        sub1="Why Choose BitsWits for Building Mobile Applications?"
        sub2="Building your mobile app acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape its trajectory."
        iconOne={icon23}
        iconTwo={icon24}
        iconThree={icon25}
        iconFour={icon26}
        iconFive={icon27}
        iconSix={icon28}
        titleOne="Greater Customer Reach"
        titleTwo="Simplified Payments"
        titleThree="Drive Sales"
        titleFour={<>Customer <br /> Loyalty</>}
        titleFive="Competitive Advantage"
        titleSix="Improved Customer Service"
        paraOne="Mobile apps allow you to connect with customers anywhere and anytime worldwide."
        paraTwo="Mobile applications allow users to instantly pay, donate, and order without any hassle."
        paraThree="Mobile applications provide a convenient way for customers to purchase your products and services on the go."
        paraFour="Mobile apps foster ongoing engagement and allow you to deliver customized offers and experiences."
        paraFive="Innovative mobile apps set you apart, opening new opportunities to engage users, collect data, improve customer service, and drive revenue."
        paraSix="Features like in-app chat and customer support assist in resolving issues while enhancing customer satisfaction." />
      <NewiosPortFolioduplicate />
      <Capabilities />
      <div className="status">
        <Newsuccess />
      </div>
      <NewHomeGlobal />
      <ClientsThink2 />
      <Nextproject2 />
      <Technologieswe />
      <Homenextproject />
      <NewMobileFaqs />
      <Contact2 />
    </>
  );
}
