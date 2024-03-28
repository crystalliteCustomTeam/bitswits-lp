import Head from "next/head";
import React, { useState, useEffect } from "react";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
const Bannerdubai = React.lazy(() => import("@/components/Bannerdubainew"));
const Processpro = React.lazy(() => import("@/components/Processpro"));
const Whowearenew = React.lazy(() => import("@/components/Whowearenew"));
const Sound = React.lazy(() => import("@/components/Sound"));
const Delivered = React.lazy(() => import("@/components/Delivered"));
const HomeBannerSliderlpnew = React.lazy(() => import("@/components/HomeBannerSliderlpnew"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const Expertappdubaiadvanced = React.lazy(() => import("@/components/Expertappdubaiadvanced"));
const Justbuilditlpdubai = React.lazy(() => import("@/components/Justbuilditlpdubai"));
const Globallplp6dubai = React.lazy(() => import("@/components/Globallplp6dubai"));
const ServicesFaqsdubaimobilenew = React.lazy(() => import("@/components/ServicesFaqsdubaimobilenew"));
const Faqdubai = React.lazy(() => import("@/components/Faqdubai"));
const Technologieslpdubainew = React.lazy(() => import("@/components/Technologieslpdubainew"));
const LpChoosedubainew = React.lazy(() => import("@/components/LpChoosedubainew"));
const LpChoosedubaishipnewdubai = React.lazy(() => import("@/components/LpChoosedubaishipnewdubai"));
const Globalmap = React.lazy(() => import("@/components/Globalmap"));
const Transformativedubai = React.lazy(() => import("@/components/Transformativedubai"));
const Brand = React.lazy(() => import("@/components/Brand"));
const Latestblog = React.lazy(() => import("@/components/Latestblog"));
const Bussiness = React.lazy(() => import("@/components/Bussiness"));
const Houtondubai = React.lazy(() => import("@/components/Houtondubai"));
//Images
const appEight1 = await import("../public/newdubai/slider/soul.png");
const appEight2 = await import("../public/dubailp/faqs/2.png");
const appEight3 = await import("../public/dubailp/faqs/3.png");
const appEight4 = await import("../public/dubailp/faqs/4.png");
import blog1 from "../public/newdubai/blog1.png"
import blog2 from "@/public/newdubai/blog2.png"
import blog3 from "@/public/newdubai/blog3.png"

export default function gamedevelopmentcompany() {
  const blogBox = [
    {
      img: blog1,
      title: 'Leading Grocery Delivery Apps Making Waves In Saudi Arabia',
      content: 'Remember Carrying Heavy Bags Of Groceries Under The Sizzling Saudi Sun? Those Days Are Fast Disappearing Into A Memory As The Expedient Rise Of...'
    },
    {
      img: blog2,
      title: 'Detail Overview For Online Shopping App In Saudi Arabia',
      content: 'Online Shopping Apps Have Become A Keystone Of Today’s Retail Business, Transforming The Shopping Experience With Unprecedented Ease And A Wide...'
    },
    {
      img: blog3,
      title: 'How To Develop An Android App: A Complete Guide',
      content: 'There Are Around 2.69 Million Apps For Android Smartphones. Almost Everyone Understands Android Apps, And Many Are Ready To Launch Their Own. But...'
    },
  ];
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Bannerdubai newHomeBgprops="newHomeBg" />
      <HomeBannerSliderlpnew />
      <ServicesFaqsdubaimobilenew
        faqsData={[
          {
            question: "Android App Development In Dubai",
            ques2: "Bitswits' Android mobile app development in Duba",
            answer: (
              <>
                Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.
              </>
            ),
            imggodd: appEight1,
            hiteclass: "class1",
          },
          {
            question: "Iphone App Development In Dubai",
            ques2: "Develop an iPhone Application ",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
            imggodd: appEight2,
            hiteclass: "class2",
          },
          {
            question:
              "Flutter App Development In Dubai",
            ques2: "Develop Your Flutter Mobile Application ",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
            imggodd: appEight3,
            hiteclass: "class3",
          },
          {
            question:
              "PWA App Development In Dubai",
            ques2: "Develop Your PWA Application ",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
            imggodd: appEight4,
            hiteclass: "class4",
          },

        ]}
      />
      <Processpro />
      <Bussiness />
      <Whowearenew />
      <Sound />
      <Delivered />
      <Technologieslpdubainew />
      <LpChoosedubainew
        transform="transformlp"
      />
      <Transformativedubai />
      <LpChoosedubaishipnewdubai
        transform="transformlp"
      />
      <Expertappdubaiadvanced expertapp="expertapp" />
      <Justbuilditlpdubai
        title={
          <>
            <h2 className={stylesjust.just}>Just Build It.</h2>
          </>
        }
        para={
          <>
            <h3 className={`black center fw600`}>
              Design, Develop, and Grow with BitsWits.
            </h3>
          </>
        }
        slide="slide1lp"
      />
      <Globallplp6dubai />
      <Globalmap />
      <Brand />
      <Houtondubai />
      <Faqdubai
        faqsData={[
          {
            question:
              "How can I launch an app in the UAE?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },
          {
            question: "How much time is required to build a mobile application?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },
          {
            question:
              "How much does it cost to create an app in Dubai?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },
          {
            question:
              "What is a mobile app support service, and does Bitswits offer it?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </>
            ),
          },

        ]}
      />
      <Latestblog blogBox={blogBox} />
    
    </>
  );
}
