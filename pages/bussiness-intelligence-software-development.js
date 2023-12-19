import HomeBannerSlider from "@/components/HomeBannerSlider";
import LpChoose from "@/components/LpChoose";
import Nothing from "@/components/Nothing";
import People from "@/components/People";
import Head from "next/head";
import React from "react";
//components
const Banner = React.lazy(() =>
  import("@/components/new-blockchain-page-fy/BlockchainBanner")
);
const Provideservices = React.lazy(() =>
  import("@/components/new-blockchain-page-fy/Provideservices")
);
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const LpForm = React.lazy(() => import("@/components/LpFormprops"));
const CustomCards = React.lazy(() => import("@/components/customCards"));
const SmartTech = React.lazy(() =>
  import("@/components/new-blockchain-page-fy/SmartTech")
);
import Justbuildit from "@/components/Justbuildit";

// css //
import styleTwo from "@/styles/Justbuildit.module.css";
import styleThree from "@/styles/Globallp.module.css";
import Partnerships from "@/components/Partnerships";
import Formnewlp from "@/components/Formnewlp";

//images
const BannerImage = await import(
  "@/public/bussinessintelligence/bussiness-intelligence.png"
);
const AdvantageOne = await import(
  "../public/blockchaindevelopment/images/advantage1.png"
);
const Solution = await import(
  "../public/blockchaindevelopment/images/solution.png"
);
const main = await import(
  "@/public/blockchaindevelopment/images/engagecenter.png"
);
const engIcon1 = await import(
  "@/public/blockchaindevelopment/images/engage1.png"
);
const engIcon2 = await import(
  "@/public/blockchaindevelopment/images/engage2.png"
);
const engIcon3 = await import(
  "@/public/blockchaindevelopment/images/engage3.png"
);
const engIcon4 = await import(
  "@/public/blockchaindevelopment/images/engage4.png"
);

const customios = await import(
  "../public/images/blockchainappdevelopment/ethereumdappgamedevelopment.png"
);
const iphoneapp = await import(
  "../public/images/blockchainappdevelopment/polygongamedevelopment.png"
);
const applewatch = await import(
  "../public/images/blockchainappdevelopment/solanablockchaindevelopment.png"
);
const appletvappdevelopment = await import(
  "../public/images/blockchainappdevelopment/eosdappgamedevelopment.png"
);
const iphoneappdesigning = await import(
  "../public/images/blockchainappdevelopment/metaverseblockchaingamedevelopment.png"
);
const hybridiphone = await import(
  "../public/images/blockchainappdevelopment/nftblockchaingamedevelopment.png"
);
const react = await import(
  "../public/images/blockchainappdevelopment/trongamedevelopment.png"
);
const next = await import(
  "../public/images/blockchainappdevelopment/bscgamedevelopment.png"
);
const reactnative = await import(
  "../public/images/blockchainappdevelopment/cryptogamblinggames.png"
);
const flutter = await import(
  "../public/images/blockchainappdevelopment/ingameassettokencreation.png"
);
const python = await import(
  "../public/images/blockchainappdevelopment/smartcontractdappgamedevelopment.png"
);

const bestgloba11 = await import(
  "../public/bussinessintelligence/bussinessicon1.png"
);
const bestgloba12 = await import(
  "../public/bussinessintelligence/bussinessicon2.png"
);
const bestgloba13 = await import(
  "../public/bussinessintelligence/bussinessicon3.png"
);

const user1 = await import(
  "../public/bussinessintelligence/bussinessicon13.png"
);
const user2 = await import(
  "../public/bussinessintelligence/bussinessicon14.png"
);
const user3 = await import(
  "../public/bussinessintelligence/bussinessicon15.png"
);
const user4 = await import(
  "../public/bussinessintelligence/bussinessicon16.png"
);
const user5 = await import(
  "../public/bussinessintelligence/bussinessicon17.png"
);
const user6 = await import(
  "../public/bussinessintelligence/bussinessicon18.png"
);
const user7 = await import(
  "../public/bussinessintelligence/bussinessicon22.png"
);
const user8 = await import(
  "../public/bussinessintelligence/bussinessicon23.png"
);
const user9 = await import(
  "../public/bussinessintelligence/bussinessicon24.png"
);
const user10 = await import(
  "../public/bussinessintelligence/bussinessicon25.png"
);
const user11 = await import(
  "../public/bussinessintelligence/bussinessicon26.png"
);
const user12 = await import(
  "../public/bussinessintelligence/bussinessicon27.png"
);

const chatbots1 = await import(
  "../public/bussinessintelligence/bussinessicon10.png"
);
const chatbots2 = await import(
  "../public/bussinessintelligence/bussinessicon11.png"
);
const chatbots3 = await import(
  "../public/bussinessintelligence/bussinessicon12.png"
);
const chatbots4 = await import(
  "../public/bussinessintelligence/bussinessicon19.png"
);
const chatbots5 = await import(
  "../public/bussinessintelligence/bussinessicon20.png"
);
const chatbots6 = await import(
  "../public/bussinessintelligence/bussinessicon21.png"
);

const web = await import("../public/bussinessintelligence/custom-cluod.png");
const customWeb = await import("../public/bussinessintelligence/custom.png");

import js1 from "public/bussinessintelligence/custom1.png";
import js2 from "public/bussinessintelligence/custom2.png";
import js3 from "public/bussinessintelligence/custom3.png";
import js4 from "public/bussinessintelligence/custom4.png";
import js5 from "public/bussinessintelligence/custom5.png";
import js6 from "public/bussinessintelligence/custom6.png";

import js7 from "public/bussinessintelligence/custom7.png";
import js8 from "public/bussinessintelligence/custom8.png";
import js9 from "public/bussinessintelligence/custom9.png";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

const ServicesMaintainmobile = React.lazy(() =>
  import("@/components/ServicesMaintainmobile")
);

export default function mobileApplication() {
  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        subtitle: "Our Services Are Where Innovation Meets Play",
        title1: "Blockchain Gaming Engineering Services",
        text: `From creating multiplayer games to providing secure in-game asset exchange options, BitsWits leverages blockchain technology for game development.
        Our services include creating next-generation games using the latest technology and tools, such as Unity 3D engine for VR/AR gaming experiences,
        Augmented Reality (AR) support for games, low-latency gameplay features, HoloLens integration, and blockchain-backed matchmaking.`,
      },
      serdata: [
        {
          title: "Ethereum Dapp Game Development",
          text: "BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Polygon Game Development",
          text: `We specialize in Polygon game development and create detailed
          game environments and characters with smooth animation
          capabilities. From design and coding to animation, we create
          engaging games that push the boundaries of creativity.`,
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Solana Blockchain Development",
          text: `Solana Blockchain game development is all the rage right now,
          and BitsWits is leading the charge. We specialize in creating
          powerful, high-volume games with a wide range of features – from
          fast-paced action to deep strategic play.`,
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "EOS Dapp Game Development",
          text: "BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform. Get in touch to create engaging, user-friendly and intuitive dapps with unique features that help you stand out from the competition.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Metaverse Blockchain Game Development",
          text: "Using blockchain and cutting-edge technology, we deploy metaverse projects with features such as distributed storage and processing, zero-knowledge transactions, and non-fungible tokens (NFTs). Build next-generation titles with us!",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "NFT Blockchain Game Development",
          text: "Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "TRON Game Development",
          text: `Boasting some of the best 3D graphics ever seen in a game, our
            TRON games let you immerse yourself in a virtual world full of
            adventure, excitement, and action. With realistic animations and
            stunning sound effects, you'll feel like you're part of the
            action.`,
          appclass: "app5",
          imgservice: react,
        },
        {
          title: "BSC Game Development",
          text: `BSC Game Development by BitsWits is a complete suite of game
            development tools designed for professionals and enthusiasts
            alike. With its powerful engine, integrated asset library,
            intuitive interface, and comprehensive visual toolsets,
            developers can quickly bring their ideas to life.`,
          appclass: "app5",
          imgservice: next,
        },
        {
          title: "Crypto Gambling Games",
          text: `Our team of experts is highly knowledgeable about blockchain
            technology and its applications in gaming, allowing us to
            develop cutting-edge, secure online casinos and betting
            platforms with an unparalleled level of safety, fairness, and
            security.`,
          appclass: "app5",
          imgservice: reactnative,
        },
        {
          title: "In-Game Asset & Token Creation",
          text: "BitsWits specializes in providing bespoke in-game asset and token creation services. We offer various services tailored to suit your specific requirements: from creating 3D or 2D assets to programming custom tokenization systems and blockchain integration.",
          appclass: "app5",
          imgservice: flutter,
        },
        {
          title: "Smart Contract Dapp Game Development",
          text: "BitsWits provides comprehensive smart-contract solutions for games that operate on blockchain networks. Contact us to bring your notion of a modern and decentralized gaming experience into reality.",
          appclass: "app5",
          imgservice: python,
        },
      ],
    },
  ];

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
        assignClass="bussiness"
        subtitle="Our Award-Winning"
        title={<> Business Intelligence Software Development </>}
        text={
          <>
            Taking Business To New Heights with Custom AI-Driven BI Software
            Solutions
          </>
        }
        BannerImage={BannerImage}
      />

      <People People="people" />

      <HomeBannerSlider />

      <Nothing Nothing="nothingLp6" />

      <Provideservices
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            Experienced and Dedicated BI Developers
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Hire Experienced and Dedicated BI Developers
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            As Business Intelligence (BI) developers continue to advance the
            technology's ability to automate mission-critical business <br />
            decisions, enterprises that fail to invest will find themselves
            unable to catch up to their more modern competitors. We expertly{" "}
            <br />
            program and implement BI solutions for market forecasting, trend
            analysis, and operations optimization.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Custom BI Development",
            para4:
              "As a BI developer, we provide comprehensive business intelligence development. We use Online Analytical Processing (OLAP) technology to facilitate multi-dimensional analyses of big data from multiple sources.",
          },
          {
            img1: bestgloba12,
            titl3: "BI Data Warehouse Development",
            para4:
              "We provide Business Intelligence (BI) data warehouse services, including the engineering of central repositories, to Extract, Transform and Load (ETL) data from disparate platforms and applications.",
          },
          {
            img1: bestgloba13,
            titl3: "On-Premise BI Software Development",
            para4:
              "We develop self-service and server-based dashboard software that can be easily deployed and installed into any on-premise network environment. Our BI solutions can be customized for any existing hardware.",
          },
        ]}
        video={
          <video
            src="../bussinessintelligence/peo.mp4"
            autoPlay="true"
            loop="true"
          ></video>
        }
      />

      <CustomCards
        flexRow="displayFlex"
        data={[
          {
            img2: user1,
            title: "BI Reporting & Dashboards",
            text: "As a BI report developer, we build robust and customizable dashboards with reporting and data analytics tools that provide real-time insights in a variety of pixel-perfect displays. Our dashboards and reporting tools have the ability to run on any browser or platform.",
          },
          {
            img2: user2,
            title: "Data Science & Machine Learning",
            text: "We engineer data science and machine learning tools to configure data and create predictive models with the ability to be shared and custom-scripted. Our machine learning models are able to be automatically trained based on data.",
          },
          {
            img2: user3,
            title: "Cloud BI Development",
            text: "We deploy cloud-based applications using container architecture for lightweight app development. We ensure industry compliance, governance, and security protocols are built into all of the business intelligence technologies we develop.",
          },
        ]}
      />

      <Provideservices
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowClass="newrowbussinessthree"
        particalAfter="partical"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">BI Cloud Solutions</h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Custom BI Cloud Solutions
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            Chetu’s engineers create custom business intelligence (BI) cloud app
            solutions that utilize AI-
            <br />
            powered software, IoT technologies, and/or big data storage to
            optimize core business operations.
            <br />
            can be analyzed in real-time.
          </p>
        }
        sec={[
          {
            img1: chatbots4,
            titl3: "AI Cloud Solutions",
            para4: (
              <>
                We leverage the power of custom AI solutions to create cloud
                machine learning platforms, launch intelligent chatbots,
                optimize external data storage, and so much more.
              </>
            ),
          },
          {
            img1: chatbots5,
            titl3: "Iot Cloud Solutions",
            para4: (
              <>
                We combine the power of IoT and the cloud to create robust,
                highly functional cloud IoT solutions that support connected
                applications, power industrial operations, and more.
              </>
            ),
          },
          {
            img1: chatbots6,
            titl3: "Big Data Cloud Solutions",
            para4: (
              <>
                We unlock the power of cloud computing to enhance big data
                storage processing & visualization, adjusting big data volume,
                velocity, and variety to meet business needs.
              </>
            ),
          },
        ]}
        video={<Image src={web} className="img-fluid" alt="bitswits" />}
      />

      <CustomCards
        flexRow="displayFlex"
        subtitle="Blockchain Development Services"
        title={
          <>
            Custom BI Data Visualization & <br /> Reporting Solutions
          </>
        }
        desc={
          <>
            Our BI services create interactive and data-rich data visualization
            and reporting tools with a variety of custom displays such as <br />
            tables, charts, candlesticks, gauges, diagrams, maps, and more.
          </>
        }
        data={[
          {
            img2: user7,
            title: "Augmented Analytics",
            text: "Our developers augment your existing analytics software with AI and other tools to deliver broad and precise insights and instantly detect anomalies.",
          },
          {
            img2: user8,
            title: "Unified Business Insights",
            text: "Our developers help you connect KPI’s, dashboards, and reports in a secure and easy-to-use portal, creating a fuller scope of unified analytics.",
          },
          {
            img2: user9,
            title: "Security Compliance & Governance",
            text: "We implement SecureKey Authorization technology to provide enhanced security and the ability to govern accessibility permissions on a scalable level.",
          },
          {
            img2: user10,
            title: "Automated Business Processes",
            text: "We implement features that automate and standardize the development process to improve productivity, save time, and reduce costs.",
          },
          {
            img2: user11,
            title: "Embedded BI Analytics",
            text: "We create embedded analytics platforms to seamlessly integrate with any application or self-service portal using API & SAML authentication.",
          },
          {
            img2: user12,
            title: "Flexible Data Deployment",
            text: "Our consultant BI experts help you deploy data to an in-cloud, on-premise, or hybrid platform to meet your specific data deployment needs.",
          },
        ]}
      />

      <Provideservices
        assignClass="providebussiness"
        bottomPadding="bottomPaddingTwo"
        rowclas="newrowbussiness"
        particalAfter="partical"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            BI Software Features
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Custom BI Software Features
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            We customize your BI platform’s features to best fit your unique
            business needs while turning raw data into actionable insights that{" "}
            <br />
            can be analyzed in real-time.
          </p>
        }
        sec={[
          {
            img1: chatbots1,
            titl3: "Data Preparation & Integrations",
            para4: (
              <>
                We help you acquire data from diverse sources and streamline it
                into one secure <br /> hub with the ability to integrate with
                any existing infrastructure for optimized <br /> analysis.
              </>
            ),
          },
          {
            img1: chatbots2,
            titl3: "Mobile BI Applications",
            para4: (
              <>
                We build custom mobile apps designed to promote enhanced
                scalability, better
                <br /> connectivity & broadband coverage, unlimited data
                storage, and so much more.
              </>
            ),
          },
          {
            img1: chatbots3,
            titl3: "Real-Time Visual Data Analysis",
            para4: (
              <>
                We create custom interactive visual analytics dashboards for
                real-time data <br /> analysis and monitoring through graphs,
                tables, charts, and more on an easy-to-
                <br />
                use interface
              </>
            ),
          },
        ]}
        video={<Image src={customWeb} className="img-fluid" alt="bitswits" />}
      />

      <CustomCards
        flexRow="displayFlex"
        data={[
          {
            img2: user1,
            title: "Augmented Analytics",
            text: "Our developers augment your existing analytics software with AI and other tools to deliver broad and precise insights and instantly detect anomalies.",
          },
          {
            img2: user2,
            title: "Unified Business Insights",
            text: "Our developers help you connect KPI’s, dashboards, and reports in a secure and easy-to-use portal, creating a fuller scope of unified analytics.",
          },
          {
            img2: user3,
            title: "Security Compliance & Governance",
            text: "We implement SecureKey Authorization technology to provide enhanced security and the ability to govern accessibility permissions on a scalable level.",
          },
          {
            img2: user4,
            title: "Automated Business Processes",
            text: "We implement features that automate and standardize the development process to improve productivity, save time, and reduce costs.",
          },
          {
            img2: user5,
            title: "Embedded BI Analytics",
            text: "We create embedded analytics platforms to seamlessly integrate with any application or self-service portal using API & SAML authentication.",
          },
          {
            img2: user6,
            title: "Flexible Data Deployment",
            text: "Our consultant BI experts help you deploy data to an in-cloud, on-premise, or hybrid platform to meet your specific data deployment needs.",
          },
        ]}
      />

      <SmartTech
        assignClass="providecustom"
        title={
          <h3 className="font_30 fontsfheavy newfycolr center">
            BI Software Integrations{" "}
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white center">
            Custom BI Software Integrations
          </h2>
        }
        para={
          <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">
            Our custom BI software solutions are designed to import essential
            data from a wide variety of web/URL feeds and file formats,
            <br />
            including JSON, HTML, XML, CSV, XLS, XLSX, and many more. We
            seamlessly integrate third-party business intelligence (BI)
            analytics
            <br /> solutions with your current business processes to effectively
            streamline your workflows and gain full visibility over your
            business insights.
          </p>
        }
        sec1title=""
        sec={[
          {
            img1: js1,
            title3: "ZOHO Analyticst",
            para4:
              "Our developers integrate the ZOHO analytics platform with your current business systems to collect raw data and transform it into visually stunning and insightful reports and dashboards.",
          },
          {
            img1: js2,
            title3: "Oracle BI",
            para4:
              "Our talented developers seamlessly integrate with Oracle Business Intelligence solutions to help businesses effectively manage their business insights, streamline workflows, and gain full visibility into their metrics.",
          },
          {
            img1: js3,
            title3: "Logi Analytics",
            para4:
              "We integrate Logi Analytics Solutions with your existing business systems to help cut down on maintenance and deployment costs while allowing you to utilize a fully documented embedded analytics platform.",
          },
          {
            img1: js4,
            title3: "SAP Business Objects",
            para4: `Chetu can improve business efficiency by integrating any third-party software with SAP BusinessObjects, put in place to elevate your business processes/workflows for real-time reporting and increased ROI.
          `,
          },
          {
            img1: js5,
            title3: "Looker",
            para4:
              "We can integrate Looker with any application and business system in your organization’s infrastructure, enabling users to explore, analyze, and share real-time, insightful business analytics with ease..",
          },
          {
            img1: js6,
            title3: "DOMO",
            para4: `
            By integrating DOMO with your current business applications, you can pull Excel spreadsheets, files attached to emails, files from FTP, flat files, and more into a single, cloud-based platform.`,
          },
          {
            img1: js7,
            title3: "BIRT",
            para4: `Our company specializes in customized BIRT application development, empowering you with full visibility into metrics and informed decision-making. Seamlessly integrate BIRT software into your systems, transforming raw data into visually appealing reports and dashboards.
          `,
          },
          {
            img1: js8,
            title3: "Power BI",
            para4:
              "Leverage Power BI for data analysis. Seamlessly integrate with processes, unlocking insights. Our custom development delivers real-time analytics. Understand data, optimize decisions, drive growth with our Power BI developers.",
          },
          {
            img1: js9,
            title3: "Tableau",
            para4: `
            Unlock your data's potential with our seamless Tableau dashboard development. Our Tableau developer services transform raw data into stunning dashboards for actionable insights. Stay ahead in today's business landscape by easily exploring real-time data and making data-driven decisions confidently.`,
          },
        ]}
        sec2title=""
        sec2={[]}
      />

      <Justbuildit assignClass="justforpop" />

      <Globallplp6 bannerClass="newclassglobe" />

      <Partnerships />

      <Formnewlp />

      <ServicesFaqs
        faqsData={[
          {
            question: "What is Mobile Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Does Bitswits Offers Hybrid and Native Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Why Choose Bitswits as a Mobile Application Development Company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "Is there any customer support available?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "How to choose a mobile application development company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater do?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
