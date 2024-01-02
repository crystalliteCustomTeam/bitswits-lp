import Head from "next/head";
import React from "react";
//components
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const Dedicatedweb = React.lazy(() => import("@/components/Dedicatedweb"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const ServicesPortfolio = React.lazy(() => import("@/components/ServicesPortfolio"));
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const WeworkLp = React.lazy(() => import("@/components/new-home-page-fy/WeworkLphome"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));

 
export default function gamedevelopmentcompany() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        {/* <!-- Title & Description --> */}
        <title>Advanced Web App Development Company - BitsWits</title>
        <meta
          name="description"
          content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs."
        />
        {/* <!-- OG Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Advanced Web App Development Company - BitsWits"
        />
        <meta
          property="og:description"
          content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs."
        />
        {/* <meta property="og:url" content="https://BitsWits.co/web-app-development-company/" /> */}
        <meta
          property="og:site_name"
          content="Advanced Web App Development Company - BitsWits"
        />
        {/* <!-- Canonical --> */}
        {/* <link rel="canonical" href="https://BitsWits.co/web-app-development-company/" /> */}
        {/* <!-- Bing Master Verification  --> */}
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
        {/* <!-- Local Location Tags --> */}
        <meta
          name="DC.title"
          content="web app development company, hire web application developers, top web app developers"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
        <meta
          name="DC.title"
          content="web app development company, hire web application developers, top web app developers"
        />
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover" />
        <meta name="geo.position" content="38.692045;-75.401331" />
        <meta name="ICBM" content="38.692045, -75.401331" />
        {/* <!-- Nationwide Location Tags --> */}
        <meta
          name="DC.title"
          content="web app development company, hire web application developers, top web app developers"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <ServicesBanner
        subtitle="Top-Notch Web App Development Company"
        title={<> Where Imagination Meets Creativity </>}
        text={
          <>
            BitsWits is a future-forward, human-centered, and client-focused web
            development company that revolutionizes the way businesses appear on
            the online paradigm. We build dynamic, multi-purpose, secure, and
            highly-performing websites that help brands gain online traction in
            no time.
          </>
        }
        video={
          <video
            autoPlay
            muted
            src="../../bannerVideos/webapp.mp4"
            className="w-75"
          ></video>
        }
        assignClass="web"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm addresClass="iosclass" />
      <Nothing Nothing="nothingLp6" />
      <Dedicatedweb />
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our Web App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
  streamlined process for app development is <br /> designed to be
  transparent and collaborative, ensuring your vision comes to life
  exactly as you imagined."
      />
      <Justbuildit />
      <LpChoose transform="transform" />
      <ServicesPortfolio
        title={
          <>
            Showcasing Our <span className="newfycolr">
              Creative Vision
            </span>
          </>
        }
      />
      <Newsuccess
        assignClass="spacing"
        subtitle="Ready For Success?"
        maintitle="Brace Yourself for What Happens Next"
        successSteps={[
          {
            number: "01",
            title: "Talk To Our Experts",
            text: "Contact us without obligation by email or phone and secure your free consultation.",
            buttonText: "Connect Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "02",
            title: "Get A Quote",
            text: "Get an exact cost breakdown structure of your app.",
            buttonText: "Chat Now!",
            link: "javascript:$zopim.livechat.window.show();",
          },
          {
            number: "03",
            title: "Build An MVP",
            text: "Start your app development journey with no-obligation consultation via email and phone.",
            buttonText: "Call Now!",
            link: "tel:+18335006007",
          },
        ]}
      />
      <Technologieswe />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question: "What is a web application?",
            answer: (
              <>
                A web application is a software program that runs in a web
                browser. It is accessed over the internet and provides
                interactive and dynamic content to users.
              </>
            ),
          },
          {
            question:
              "What are the key technologies used in web application development?",
            answer: (
              <>
                Key technologies include HTML (Hypertext Markup Language), CSS
                (Cascading Style Sheets), JavaScript, and server-side languages
                like Python, Ruby, Java, PHP, and others. Frameworks and
                libraries like React, Angular, and Node.js are also commonly
                used.
              </>
            ),
          },
          {
            question:
              "What is the difference between a website and a web application?",
            answer: (
              <>
                A website typically provides static content for informational
                purposes. A web application, on the other hand, allows users to
                perform tasks, interact with databases, and perform various
                functions.
              </>
            ),
          },
          {
            question:
              "What is the front-end and back-end of a web application?",
            answer: (
              <>
                The front-end refers to the user interface and user experience
                of a web application. It's what the user sees and interacts
                with. The back-end refers to the server, application logic, and
                database that support the front-end.
              </>
            ),
          },
          {
            question: "What is responsive web design?",
            answer: (
              <>
                Responsive web design is an approach to designing web pages that
                ensures they look good and function well on various devices and
                screen sizes, from desktop computers to mobile phones.
              </>
            ),
          },
          {
            question: "What is a Content Management System (CMS)?",
            answer: (
              <>
                A CMS is a software platform that allows users to create,
                manage, and update digital content on a website without the need
                for technical expertise. Examples include WordPress, Drupal, and
                Joomla.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
