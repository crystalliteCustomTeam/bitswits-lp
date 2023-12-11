import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/new-home-page-fy.module.css"
//components
const NewIndex2Banner = React.lazy(() => import("@/components/new-home-page-fy/NewIndex2Banner"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const NewHomeWho = React.lazy(() => import("@/components/new-home-page-fy/NewHomeWho"));
const NewHomeWhat = React.lazy(() => import("@/components/new-home-page-fy/NewHomeWhat"));
const NewMaintain = React.lazy(() => import("@/components/NewMaintain"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
const Globallplp6 = React.lazy(() => import("@/components/new-home-page-fy/Globallplp6"));
const WeworkLp = React.lazy(() => import("@/components/WeworkLp6"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Faqs = React.lazy(() => import("@/components/NewhomeFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));


const customios = await import(
  "../public/newHomePage/images/mobileimages/newMaintain1.png"
);
const iphoneapp = await import(
  "../public/newHomePage/images/mobileimages/newMaintain2.png"
);
const applewatch = await import(
  "../public/newHomePage/images/mobileimages/newMaintain3.png"
);
const appletvappdevelopment = await import(
  "../public/newHomePage/images/mobileimages/newMaintain4.png"
);
const iphoneappdesigning = await import(
  "../public/newHomePage/images/mobileimages/newMaintain5.png"
);
const hybridiphone = await import(
  "../public/newHomePage/images/mobileimages/newMaintain6.png"
);
const appSeven = await import(
  "../public/newHomePage/images/mobileimages/newMaintain7.png"
);
const appEight = await import(
  "../public/newHomePage/images/mobileimages/newMaintain8.png"
);

export default function Home() {


  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
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
        newclass: "homeclass",
      },
      classlayout: {
        newclass: "homeclass",
      },
      heading: {
        title1: "Delivering Excellence Daily",
        title2: "Trusted Development Company For Tech Solutions",
        text: (
          <>
            We, at BitsWits, are dedicated to being innovative and making our
            clients happy.
            <br className="d-block" /> We specialize in customizing services for
            digital business evolution and bring the following services to the
            table…
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
          imgservice: appEight
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

      <NewIndex2Banner />
      <section>
        <div className={`${styles.awardsFold}`}>
          <div className="container-fluid px-0">
            <div className="row align-items-center">
              <div className="col-4">
                <p className={`font-bold f-20 mb-0 ${styles.textWhite}`}>
                  Endorsements on different Platforms
                </p>
                <h1 className={`font50 font-bold mb-0 ${styles.textPink}`}>
                  Awards & <br />
                  Recognition
                </h1>
              </div>
              <div className="col-8">
                <div className="row">
                  <div className={`col-3 ${styles.borderLeft}`}>
                    <Image src="/new-home-page-fy/awards/1.png" alt="awards" width={166} height={191} />
                  </div>
                  <div className="col-3">
                    <Image src="/new-home-page-fy/awards/2.png" alt="awards" width={166} height={191} />
                  </div>
                  <div className="col-3">
                    <Image src="/new-home-page-fy/awards/3.png" alt="awards" width={166} height={191} />
                  </div>
                  <div className="col-3">
                    <Image src="/new-home-page-fy/awards/4.png" alt="awards" width={166} height={191} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewHomeWho />
      <NewHomeWhat />
      <WeworkLp wework="weworkLp6" />
      <StartupsLp startups="startups" />
      <Technologieswe />
      <Nothing Nothing="nothingLp6" />
      {isSliderActive ? (
        <NewMaintain
          assignClass="home"
          title1={<> Delivering Excellence Daily </>}
          title2={<> Trusted Development Company For Tech Solutions </>}
          text={
            <>
              {" "}
              We, at BitsWits, are dedicated to being innovative and making our
              clients happy.
              <br />
              We specialize in customizing services for digital business
              evolution and bring the following services to the table…
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>
                  Mobile App <br /> Development
                </>
              ),
              text: "We develop custom mobile apps from initial consultation to deployment, driving business growth across various industries.",
              appclass: "app",
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
            },
            {
              title: (
                <>
                  Blockchain <br /> Development
                </>
              ),
              text: "We specialize in developing solutions that fuels enterprise growth and efficiency through blockchain technology.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Artificial Intelligence (Ai)",
              text: " Hire BitsWits as your trusted ally for AI development, and experience the revolution of your project through Artificial Intelligence that raises its potential.",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: <>Web App Development</>,
              text: "Our top app developers excel in web app development, showcasing expert skills to ensure client satisfaction and punctual project delivery.",
              appclass: "app4",
            },
            {
              title: "UI/UX App Design",
              text: "Our team comprises professional responsive app designers who develop prototypes aimed at guiding users to meaningful interactions and achieving impactful user experiences.",
              appclass: "app5",
            },
          ]}
          appContent4={[
            {
              title: "AR/VR",
              text: " BitsWits serves as your AR/VR portal. We specialize in creating imaginative concepts into compelling digital realities that captivate, entertain, and inspire your audience.",
              appclass: "app6",
            },
          ]}
          appContent5={[
            {
              title: "Internet of Things",
              text: "We lead in IoT innovation delivering smart, connected solutions drive automation, efficiency, and connectivity across industries.",
              appclass: "app7",
            },
          ]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <Globallplp6 />
      <LpChoose transform="transform" />
      <Formnewlp />
      <Faqs />
      <HomeLocation />
    </>
  );
}
