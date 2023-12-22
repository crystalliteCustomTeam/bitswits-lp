import Head from "next/head";
import React from "react";

const NewBannerabout = React.lazy(() => import("@/components/NewBannerabout"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const AboutIntro = React.lazy(() => import("@/components/AboutIntro"));
const AboutExpertapp = React.lazy(() => import("@/components/AboutExpertapp"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Homenextproject = React.lazy(() => import("@/components/Homenextproject"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Top Mobile App Development Company - BitsWits</title>
        <meta
          name="description"
          content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>
      <NewBannerabout />
      <AboutIntro />
      <Nothing Nothing="nothingLphomefy" />
      <AboutExpertapp expertapp="expertapp" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our iOS App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
                streamlined process for app development is <br /> designed to be
                transparent and collaborative, ensuring your vision comes to life
                exactly as you imagined."
      />
      <Homenextproject title="Brace yourself for an App-venture!" />
      <HomeLocation />
    </>
  );
}
