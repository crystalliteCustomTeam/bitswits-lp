import React from "react";
import Head from "next/head";
import Banner from "@/components/new-blockchain-page-fy/BlockchainBanner";
import Provideservices from "@/components/new-blockchain-page-fy/Provideservices";
import Intelligence from "@/components/new-blockchain-page-fy/Intelligence";
import SmartContract from "@/components/new-blockchain-page-fy/SmartContract";
import CustomBlockchainSolutions from "@/components/new-blockchain-page-fy/CustomBlockchainSolutions";
import Hand from "@/components/new-blockchain-page-fy/Hand";
import Nftservices from "@/components/new-blockchain-page-fy/Nftservices";
import Technology from "@/components/new-blockchain-page-fy/Technology";
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpForm = React.lazy(() => import("@/components/LpFormprops"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const People = React.lazy(() => import("@/components/People"));


import Partnerships from "@/components/Partnerships";
import ServicesFaqs from "@/components/ServicesFaqs";
import HomeLocation from "@/components/HomeLocation";




const BannerImage = await import("@/public/blockchainfynew/banner.png");

export default function blockchaindevelopmentservices() {







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


      <Banner
        assignClass="awardpost"
        subtitle="Our Award-Winning"
        title={<> Blockchain Development Services </>}
        text={
          <>
            Bitswits is a leading development company that can help you hit the market with <br /> a newly developed Blockchain solution or revamp your existing systems.
          </>
        }
        BannerImage={BannerImage}
      />

      <People People="people" />

      <HomeBannerSliderlp />

      <LpForm  addresClass="iosclass"
      heading = {`At Bitswits, we're pioneers in blockchain innovation. Our dedicated team crafts cutting-edge solutions that redefine the digital landscape. From smart contracts to decentralized apps, we turn your vision into a global powerhouse. Join us for a transformative journey where technology meets excellence, and your success in the blockchain realm is our priority.`}
      
      />

      <Nothing Nothing="nothingLp6" />

      <Provideservices
        assignClass='provideserv'
      />

      <SmartContract
        assignClass='provideserv'
      />

      <Intelligence
        assignClass='provideserv'
      />

      <Hand
        assignClass='provideserv'
      />


      <CustomBlockchainSolutions
        assignClass='provideserv'
      />


      <div className="bgtext">
        <Nftservices
          assignClass='provideserv'
        />

        <Technology
          addresClass='tech'
        />
      </div>

      <Justbuildit />

      <Globallplp6
      bannerClass = 'newclassglobe'
      />




      <Partnerships />

      <Formnewlp />




      <ServicesFaqs
        faqsData={[
          {
            question:
              "What is Mobile Application Development?",
            answer: (
              <>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "Does Bitswits Offers Hybrid and Native Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Why Choose Bitswits as a Mobile Application Development Company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Is there any customer support available?",
            answer: (
              <>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "How to choose a mobile application development company?",
            answer: (
              <>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater do?",
            answer: (
              <>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
