import Head from "next/head";
import React from "react";
import { useState, useEffect } from "react";
//components
const ServicesBanner = React.lazy(() =>
  import("@/components/new-blockchain-page-fy/BlockchainBanner")
);
const ServicesMaintain = React.lazy(() =>
  import("@/components/ServicesMaintain")
);
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const ServicesPortfolio = React.lazy(() =>
  import("@/components/ServicesPortfolio")
);
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const HomeBannerSliderlp = React.lazy(() =>
  import("@/components/HomeBannerSliderlp")
);
const Smarteruiux = React.lazy(() =>
  import("@/components/new-blockchain-page-fy/Smarteruiux")
);
const Provideuiux = React.lazy(() =>
  import("@/components/new-blockchain-page-fy/Provideuiux")
);
const WeworkLp = React.lazy(() =>
  import("@/components/new-home-page-fy/WeworkLphome")
);
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() =>
  import("@/components/ProjectProcessLp6")
);
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm6"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const ServicesMaintainmobile = React.lazy(() =>
  import("@/components/ServicesMaintainmobile")
);
//images
const BannerImage = await import("@/public/ui-ux-page/banner-img.png");
// css //
import styles from "@/styles/LpChoose.module.css";
import Image from "next/image";
import UIUXTechnology from "@/components/new-blockchain-page-fy/UIUXTechnologies";
//
const customios = await import(
  "../public/images/iosappdevelopment/customios.png"
);
const iphoneapp = await import(
  "../public/images/iosappdevelopment/iphoneapp.png"
);
const applewatch = await import(
  "../public/images/iosappdevelopment/applewatch.png"
);
const appletvappdevelopment = await import(
  "../public/images/iosappdevelopment/appletvappdevelopment.png"
);
const iphoneappdesigning = await import(
  "../public/images/iosappdevelopment/iphoneappdesigning.png"
);
const hybridiphone = await import(
  "../public/images/iosappdevelopment/hybridiphone.png"
);

const banImg1 = await import("../public/servnew/customweb/imgfold.png");
const bestgloba11 = await import("../public/ui-ux-page/icon1.png");
const bestgloba12 = await import("../public/ui-ux-page/icon2.png");
const bestgloba13 = await import("../public/ui-ux-page/icon3.png");
const bestgloba14 = await import("../public/ui-ux-page/icon4.png");
const bestgloba15 = await import("../public/ui-ux-page/icon5.png");
const bestgloba16 = await import("../public/ui-ux-page/icon6.png");
const poe = await import("../public/ui-ux-page/work1.png");
const poe2 = await import("../public/ui-ux-page/work2.png");


export default function UiUxDesign() {

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
        subtitle: "iOS App Development Services",
        title1: "Craft Incredible Apps",
        title2: "Hire an iOS App Developer",
        text: `As a premier iOS app development company, our iOS developers create
            eye-catching and user-friendly iPhone and iPad apps that capture
            attention immediately. To develop customized applications that are
            appropriate for Apple devices, our professional iOS developers and
            designers make use of the newest iOS capabilities.`,
      },
      serdata: [
        {
          title: "Custom iOS App Development",
          text: "Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              iPhone App <br /> Development{" "}
            </>
          ),
          text: "We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Apple Watch Development",
          text: "Our team of expert iOS developers create exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Apple TV App Development",
          text: "Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality!",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "iPhone App Designing",
          text: "Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Hybrid iPhone App Development",
          text: "Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more.",
          appclass: "app5",
          imgservice: hybridiphone,
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

      <ServicesBanner
        assignClass="UIUX"
        subtitle="Our Award-Winning"
        title={<> UI & UX Design And Development Services </>}
        text={
          <>
            {" "}
            Empowering Businesses with Tailored UI/UX Solutions By Our Design
            Experts{" "}
          </>
        }
        BannerImage={BannerImage}
      />

      <People People="people" />

      <HomeBannerSliderlp />

      <LpForm addresClass="iosclass" />

      <Nothing Nothing="nothingLp6" />

      <Smarteruiux
        assignClass="providebussiness"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        title={
          <h3 className="font_30 fontsfheavy newfycolr">
            Design Services For Smarter User Navigation
          </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Dynamic User Design Services <br /> For Smarter User Navigation
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            The key to developing a successful app is marrying the functionality
            your users demand with an intuitive design <br /> and experience
            that make it as simple as possible to use. Chetu’s UI/UX experts
            will design the perfect web,
            <br /> desktop, or mobile app to meet your specific business
            requirements, industry needs, and product development
            <br /> goals. We design and develop innovative digital user
            experiences that solve complex business problems.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Information Architecture Design",
            para4:
              "Our developers use industry-leading tools to construct new content management lifecycles, content models, and robust Document Information Typing Architecture (DITA) all while streamlining organic processes for conversion rate optimization (CRO).",
          },
          {
            img1: bestgloba12,
            titl3: "User Experience (UX) Development",
            para4:
              "We construct highly responsive Graphical User Interfaces (GUI) that include elements like 2D/3D animations and embedded media, providing an organic, unified user experience throughout our custom solutions. ",
          },
          {
            img1: bestgloba13,
            titl3: "User Interface (UI) Development",
            para4:
              "Our UI/UX designers are experts in graphic libraries, including OpenGL and WebGL. We collaborate with your stakeholders and IT team to develop a style (including color palettes, logo designs and layouts) that harmonizes with your company culture.",
          },
        ]}
        video={<Image src={poe} className="img-fluid" alt="bitswits" />}
      />

      <Provideuiux
        assignClass="provideuiux"
        bottomPadding="bottomPadding"
        rowclas="newrowbussiness"
        sec={[
          {
            img1: bestgloba14,
            titl3: "Web & Mobile App UI/UX Development",
            para4:
              "We utilize frameworks like Xamarin, DevExpress, Ionic, Appcelerator, and Apache Cordova to deliver highly responsive UI/UX designs that fully leverage touchscreen functionality and provide mobile-first user experiences for progressive web apps.",
          },
          {
            img1: bestgloba15,
            titl3: "Front-End Programming",
            para4:
              "Our front-end development specialists are experts in key front-end languages (HTML5, CSS, JavaScript) and frameworks like jQuery, AngularJS, Node.js and Bootstrap. We ensure our tightly written code is optimized to work on multiple device types and browsers.",
          },
          {
            img1: bestgloba16,
            titl3: "Intuitive & Interactive Solutions",
            para4:
              "We use well-known UI guidelines like Human Interface Guidelines (HIG) and Material Design to develop intuitive solutions with goal-driven, usable designs that influence positive user responses and facilitate simple communication between a user and the interface.",
          },
        ]}
        video={<Image src={poe2} className="img-fluid" alt="bitswits" />}
      />

      <ProjectProcess
        processclass="processLp6"
        subtitle="Web Development Process"
        title="Our Strategic Web Development Process"
        desc={`We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom <br/> Websites & Applications.`}
        img5={
          <>
            {" "}
            <Image
              src={banImg1}
              alt="BitsWits"
              className="img-fluid mt-4 mt-lg-5"
            />{" "}
          </>
        }
      />

      <UIUXTechnology addresClass="tech" />

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
