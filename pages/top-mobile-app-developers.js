import Head from "next/head";
import React from "react";
// Components
const Appmaking = React.lazy(() => import("@/components/Appmaking"));
const Homeslider = React.lazy(() => import("@/components/Homeslider"));
const ProjectProcesshome = React.lazy(() => import("@/components/ProjectProcesshome"));
const Creative = React.lazy(() => import("@/components/Creative"));
const Expertapphome = React.lazy(() => import("@/components/Expertapphome"));
const Thrthy = React.lazy(() => import("@/components/Thrthy"));
const Everyone = React.lazy(() => import("@/components/Everyone"));
const Testimonailslider = React.lazy(() => import("@/components/Testimonailslider"));
const Newfaqshome = React.lazy(() => import("@/components/Newfaqshome"));
const Startaproject = React.lazy(() => import("@/components/Startaproject"));
const Formnewlpnewhome = React.lazy(() => import("@/components/Formnewlpnewhome"));


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Title & Description */}
        <title>Top Mobile App Developer: Crafting Superior Apps for Success</title>
        <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
        {/* OG Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Mobile App Developer: Crafting Superior Apps for Success" />
        <meta property="og:description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
        <meta property="og:url" content="https://bitswits.co/" />
        <meta property="og:site_name" content="Top Mobile App Developer: Crafting Superior Apps for Success" />
        {/* Canonical */}
        <link rel="canonical" href="https://bitswits.co/" />
        {/* Favicon */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Appmaking />
      <Homeslider />
      <ProjectProcesshome processclass="process" />
      <Creative />
      <Expertapphome expertapp="expertapp" />
      <Thrthy />
      <Everyone />
      <Testimonailslider />
      {/* <Newfaqshome /> */}
      <Startaproject />
      <Formnewlpnewhome />
    </>
  );
}
