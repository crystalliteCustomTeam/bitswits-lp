import Head from "next/head";
import React from "react";
//CSS
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
const SocialLpBanner = React.lazy(() => import("@/components/SocialLpBanner"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const SocialLpForm = React.lazy(() => import("@/components/SocialLpForm"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const SocialExpertapp = React.lazy(() => import("@/components/SocialExpertapp"));
const SocialLpSolutions = React.lazy(() => import("@/components/SocialLpSolutions"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const Justbuilditlp = React.lazy(() => import("@/components/Justbuilditlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const NewFaqslp = React.lazy(() => import("@/components/NewFaqslp"));
const HomeLocationlp = React.lazy(() => import("@/components/HomeLocationlp"));


export default function SocialMediaApp() {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Title & Description */}
        <title>Social Media App Development Company | Social Media App Developers</title>
        <meta name="description" content="Experience the epitome of social media innovation with our top-notch app development company, delivering exceptional results for businesses worldwide." />
        {/* OG Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Social Media App Development Experts | Bitswits.co" />
        <meta property="og:description" content="Experience the epitome of social media innovation with our top-notch app development company, delivering exceptional results for businesses worldwide." />
        <meta property="og:url" content="https://bitswits.co/" />
        <meta property="og:site_name" content="Social Media App Development Experts | Bitswits.co" />
        {/* Canonical */}
        
        {/* Favicon */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <SocialLpBanner newHomeBgprops="newHomeBg" />
      <People People="people" />
      <HomeBannerSliderlp />
      <SocialLpForm />
      <Nothing Nothing="nothingLp6" />
      <SocialExpertapp expertapp="expertapp" />
      <SocialLpSolutions />
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our App Development Journey"
        desc="We believe in efficiency without compromising quality. Our streamlined process for app development is <br /> designed to be transparent and collaborative, ensuring your vision comes to life exactly as you imagined."
      />
      <LpChoose transform="transformlp" />
      <Technologieswe />
      <Justbuilditlp
        title={
          <>
            <h2 className={stylesjust.just}>Just Build It.</h2>
          </>
        }
        para={
          <>
            <h3 className={stylesjust.develop}>
              Design, Develop, and Grow with BitsWits.
            </h3>
          </>
        }
        slide="slide1lp"
      />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <NewFaqslp />
      <HomeLocationlp />
    </>
  );
}
