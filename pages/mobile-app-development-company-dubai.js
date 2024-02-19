import Head from "next/head";
import React, { useState, useEffect } from "react";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
const Bannerdubai = React.lazy(() => import("@/components/Bannerdubai"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const People = React.lazy(() => import("@/components/People"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpForm = React.lazy(() => import("@/components/LpFormpropsdubai"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Expertappdubai = React.lazy(() => import("@/components/Expertappdubai"));
const Technologieslp = React.lazy(() => import("@/components/Technologieslp"));
const Justbuilditlp = React.lazy(() => import("@/components/Justbuilditlp"));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Formnewlpdubai = React.lazy(() => import("@/components/Formnewlpdubai"));
const ServicesFaqsdubai = React.lazy(() => import("@/components/ServicesFaqsdubai"));
const Tale = React.lazy(() => import("@/components/Tale"));
const Technologieslpdubai = React.lazy(() => import("@/components/Technologieslpdubai"));
const LpChoosedubai = React.lazy(() => import("@/components/LpChoosedubai"));
const LpChoosedubaitower = React.lazy(() => import("@/components/LpChoosedubaitower"));
const LpChoosedubaiship = React.lazy(() => import("@/components/LpChoosedubaiship"));
const Nextproject2dubai = React.lazy(() => import("@/components/Nextproject2dubai"));
const Succes = React.lazy(() => import("@/components/Succes"));
const Experiance = React.lazy(() => import("@/components/Experiance"));
const Transformative = React.lazy(() => import("@/components/Transformative"));
const ServicesFaqsdubaimobile = React.lazy(() => import("@/components/ServicesFaqsdubaimobile"));
const Process = React.lazy(() => import("@/components/Process"));


//Images
const customios = await import("../public/newHomePage/images/mobileimages/newMaintain1.png");
const iphoneapp = await import("../public/newHomePage/images/mobileimages/newMaintain2.png");
const applewatch = await import("../public/newHomePage/images/mobileimages/newMaintain3.png");
const appletvappdevelopment = await import("../public/newHomePage/images/mobileimages/newMaintain4.png");
const iphoneappdesigning = await import("../public/newHomePage/images/mobileimages/newMaintain5.png");
const hybridiphone = await import("../public/newHomePage/images/mobileimages/newMaintain6.png");
const appSeven = await import("../public/newHomePage/images/mobileimages/newMaintain7.png");
const appEight = await import("../public/newHomePage/images/mobileimages/newMaintain8.png");

const appEight1 = await import("../public/dubailp/faqs/andriod.png");
const appEight2 = await import("../public/dubailp/faqs/2.png");
const appEight3 = await import("../public/dubailp/faqs/3.png");
const appEight4 = await import("../public/dubailp/faqs/4.png");

export default function gamedevelopmentcompany() {

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
  // Slick Slider  
  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Maintain Data  
  const severcedata = [
    {
      classlayout: {
        newclass: "homeclass",
      },
      heading: {
        title2: "Services",
        text: (
          <>
            Our Mobile App Development <br></br> Services And Solution
          </>
        ),
      },
      serdata: [
        {
          title: "Mobile App Development",
          text: "We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: (
            <>
              {" "}
              Game <br /> Development{" "}
            </>
          ),
          text: "Hire our game development company to captivate your audience and transport them to thrilling virtual worlds.",
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "Blockchain Development",
          text: "We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.",
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Artificial Intelligence (Ai)",
          text: "Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Web App Development",
          text: " Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "UI/UX App Design",
          text: "Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "AR/VR",
          text: "BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.",
          appclass: "app6",
          imgservice: appSeven,
        },
        {
          title: "Internet of Things",
          text: "We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.",
          appclass: "app7",
          imgservice: appEight,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Meta Tags & OG Tags Added Through Route */}
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Bannerdubai newHomeBgprops="newHomeBg" />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass="iosclass"
        heading={`BitsWits, a mobile app development company in UAE, specializes in empowering startups and established brands with advanced mobile app development solutions. Recognized on platforms like Zawya and Lovin Dubai, BitsWits is a premier end-to-end solution provider for mobile app development solutions. `}
      />
      <Nothing Nothing="nothingLphomefy" />


      <ServicesFaqsdubaimobile
        faqsData={[
          {
            question: "Leading the Charge in Android App Development in Dubai",
            // ques2: "Bitswits' Android mobile app development in Duba",
            answer: (
              <>
                BitsWits stands proudly as the vanguard of Dubai's mobile app development industry, where we are dedicated to revolutionizing the very essence of mobile app development. Our exceptional team of Android app developers in Dubai excels in designing Android applications that transcend the ordinary. At BitsWits, we mobilize the innate potential of Android's open-source nature and channel our expertise to engineer thorough functionalities, innovative features, and unparalleled user experiences.
                <br /> <br />
                We carefully plan our approach to make sure your mobile app not only does well but also stands out in a competitive industry. Our advanced Android app development can improve your brand and connect better with customers. Let us turn your app idea into something that can really help your business.
              </>
            ),
            imggodd: appEight1,
            hiteclass: "class1",
            btnText: "Get in touch with BitsWits today and let the innovation begin!"
          },
          {
            question: "Pioneering iPhone App Development in Dubai",
            // ques2: "Develop an iPhone Application ",
            answer: (
              <>
                BitsWits is the top choice for iPhone app development in Dubai, offering an exceptional experience. Our team of iPhone app developers in Dubai are armed with an in-depth understanding of Apple's innovative platform. They skillfully blend emerging and conventional technologies to design revolutionary iPhone applications that make a mark.
                <br /> <br />
                At BitsWits, we are driven to empower businesses to excel in their markets by delivering exceptional application-based solutions. Our iOS app developers in Dubai are not just experts; they are visionaries ready to create apps that drive revenue, unlock new opportunities, and captivate and retain customers.
              </>
            ),
            imggodd: appEight2,
            hiteclass: "class2",
            btnText: "Advance Your App Vision with BitsWits Today!"
          },
          {
            question:
              "Experience Top-Tier Flutter App Development in Dubai",
            // ques2: "Develop Your Flutter Mobile Application ",
            answer: (
              <>
                BitsWits is a Dubai-based company that specializes in Flutter app development. Our team of expert Flutter app developers in Dubai is skilled in creating seamless apps for iOS and Android platforms. With years of experience and a deep understanding of Flutter, we ensure your app meets or exceeds your expectations.
                <br /> <br />
                At BitsWits, we bring years of experience and a deep understanding of Flutter to the table. By choosing Flutter, you can benefit from cost-saving advantages and a consistent brand experience across different devices. BitsWits is available to startups and established brands looking to expand their mobile presence. Our flutter app developers in Dubai are committed to transforming your ideas into stunning Flutter apps that make an impact.
              </>
            ),
            imggodd: appEight3,
            hiteclass: "class3",
            btnText: "Let us get started for impactful flutter apps now!"
          },
          {
            question:
              "Empowering Web Experiences with Progressive Web Applications in Dubai",
            // ques2: "Develop Your PWA Application ",
            answer: (
              <>
                Experience the convenience, accessibility, and usability of Progressive Web Applications (PWAs) with BitsWits, your reliable companion in PWA development in Dubai. Our team of progressive web application developers in Dubai is committed to delivering seamless and engaging web experiences that instantly captivate your audience.
                <br /> <br />
                Progressive web application development offers a simpler and cost-effective alternative to native app development, providing a quicker path to market. While it may have some limitations in terms of functionality and features compared to native apps, the focus is on providing an excellent user experience that is accessible instantly through PWAs. Let us create web experiences that leave a lasting impact.
              </>
            ),
            imggodd: appEight4,
            hiteclass: "class4",
            btnText: "Contact Us to Embrace PWAs Today!"
          },

        ]}
      />

      <Process
        tale="tale"
      />

      <Tale
        tale="tale"
      />

      <Technologieslpdubai />

      <LpChoosedubai
        transform="transformlp"
      />

      <Nextproject2dubai
      />
      <Succes
        tale="tale"
      />
      <Experiance
        tale="tale"
      />
      <LpChoosedubaitower
        transform="transformlp"
      />
      <Transformative
        tale="tale"
      />

      <LpChoosedubaiship
        transform="transformlp"
      />

      <Expertappdubai expertapp="expertapp" />
      <Technologieslp />
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


      <Formnewlpdubai />
      <ServicesFaqsdubai
        faqsData={[
          {
            question:
              "What services does BitsWits offer in Dubai?",
            answer: (
              <>
                At BitsWits, we provide a wide range of services, including mobile app development, Android app development, iOS app development, Flutter app development, and PWA development, tailored to meet your unique business needs in Dubai.
              </>
            ),
          },
          {
            question: "What sets BitsWits apart from other app development companies in Dubai?",
            answer: (
              <>
                Our expertise, dedication to innovation, and commitment to delivering high-quality mobile applications make us stand out. We focus on data-driven strategies, ensuring that your app becomes a strategic asset contributing to your business's success.
              </>
            ),
          },
          {
            question:
              "How experienced is BitsWits in mobile app development in Dubai?",
            answer: (
              <>
                We have a strong track record of creating growth-driven apps for startups and established brands in Dubai. With years of experience, we understand the local market dynamics and how to navigate them effectively.
              </>
            ),
          },
          {
            question:
              "Can you provide examples of successful projects in Dubai?",
            answer: (
              <>
                Absolutely! We've worked on numerous projects across various industries in Dubai. From e-commerce and healthcare to tourism and finance, our portfolio showcases our ability to deliver outstanding mobile solutions that drive success.
              </>
            ),
          },
          {
            question:
              "What is the typical timeline for app development with BitsWits in Dubai?",
            answer: (
              <>
                The timeline varies depending on the complexity of your project. However, we follow an efficient development process that emphasizes quality and timeliness, ensuring that your app is delivered within a reasonable timeframe.
              </>
            ),
          },
          {
            question:
              "How does BitsWits ensure data security and privacy in mobile app development?",
            answer: (
              <>
                Data security is a top priority for us. We implement advanced encryption and follow industry best practices to protect your data from cyber threats and unauthorized access, ensuring the utmost privacy and compliance.
              </>
            ),
          },
          {
            question:
              "What industries do you serve in Dubai?",
            answer: (
              <>
                We serve a wide range of industries in Dubai, including but not limited to e-commerce, healthcare, tourism, finance, and more. Our adaptable solutions can meet the unique needs of various sectors.
              </>
            ),
          },
          {
            question:
              "How can I get started with BitsWits for my mobile app project in Dubai?",
            answer: (
              <>
                Getting started is easy! Simply reach out to our team, and we'll schedule a consultation to discuss your project's requirements, and goals, and how we can bring your app vision to life in Dubai.
              </>
            ),
          },
          {
            question:
              "Is BitsWits committed to ongoing support and maintenance after the app is launched?",
            answer: (
              <>
                Yes, we offer ongoing support and maintenance services to ensure your app continues to perform optimally. We're here to assist with updates, bug fixes, and any enhancements you may require.
              </>
            ),
          },
          {
            question:
              "Can I expect a dedicated project manager for my app development project in Dubai?",
            answer: (
              <>
                Absolutely! We provide a dedicated project manager who will serve as your main point of contact throughout the development process, ensuring clear communication and efficient project management.
              </>
            ),
          },

        ]}
      />
      <HomeLocation />
    </>
  );
}
