import Head from "next/head";
import React from "react";
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const ServicesMaintain = React.lazy(() => import('@/components/ServicesMaintain'));
const ServicesPortfolio = React.lazy(() => import('@/components/ServicesPortfolio'));
const Newsuccess = React.lazy(() => import('@/components/NewMblSuccess'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const ServicesFaqs = React.lazy(() => import('@/components/ServicesFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
const People = React.lazy(() => import('@/components/People'));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpChoose = React.lazy(() => import('@/components/LpChoose'));
const LpForm = React.lazy(() => import('@/components/LpForm6'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const WeworkLp = React.lazy(() => import("@/components/WeworkLp6"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Formnewlp = React.lazy(() => import('@/components/Formnewlp'));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import('@/components/Partnerships'));
//images
const BannerImage = await import("@/public/newMobilePageImages/banner_image.png")

export default function mobileApplication() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="images/icons/favicon.png" />
        <meta charset="UTF-8" /> 
        <title>
          The Professional Mobile App Development Company - BitsWits.
        </title>
        <meta
          name="description"
          content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions."
        /> 
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Professional Mobile App Development Company - BitsWits."
        />
        <meta
          property="og:description"
          content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions."
        />
        <meta
          property="og:site_name"
          content="The Professional Mobile App Development Company - BitsWits."
        /> 
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" /> 
        <meta
          name="DC.title"
          content="mobile app development company, hire mobile app developers, mobile app development services"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
        <meta
          name="DC.title"
          content="mobile app development company, hire mobile app developers, mobile app development services"
        />
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover" />
        <meta name="geo.position" content="38.692045;-75.401331" />
        <meta name="ICBM" content="38.692045, -75.401331" /> 
        <meta
          name="DC.title"
          content="mobile app development company, hire mobile app developers, mobile app development services"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
      </Head>
      <ServicesBanner
        subtitle="A TOP"
        title={<> Mobile App Development Company At Your Service </>}
        text={<> We deliver great results, on time and on budget. Contact us to start talking about your project today! </>}
        BannerImage={BannerImage}
        assignClass="mobile"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass='iosclass'
      />
      <Nothing Nothing="nothingLp6" />
      <ServicesMaintain
        assignClass="mobile"
        title1={<> Maintaining digital quality with our collection of customizable services </>}
        appContent={[]}
        appContent1={
          [
            {
              title: 'iOS Application Development',
              text: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!',
              appclass: "app"
            },
            {
              title: 'Android Application Development',
              text: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.',
              appclass: "app1",
            },
            {
              title: (<> Web App <br /> Development </>),
              text: 'We offer end-to-end web app development services. Our team of skilled web app developers utilize the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!',
              appclass: "app2",
            }
          ]
        }
        appContent2={
          [
            {
              title: 'Flutter App Development',
              text: "Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.",
              appclass: "app3",
            },
          ]
        }
        appContent3={
          [
            {
              title: 'React Native App Development',
              text: (<> Our React Native app developers specialize in creating top-notch, performance-oriented native mobile apps for Android and iOS platforms. We follow a robust development process and utilize the latest technologies to deliver customized solutions that meet our clients' business objectives. </>),
              appclass: "app4",
            },
            {
              title: 'Cross Platform App Development',
              text: 'We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.',
              appclass: "app5",
            },
          ]
        }
        appContent4={[]}
        appContent5={[]}
        appContent6={[]}
        appContent7={[]}
      />
      <WeworkLp wework="weworkLp6" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our Mobile App Development Journey"
        desc="We believe in efficiency without compromising quality. Our
              streamlined process for app development is <br /> designed to be
              transparent and collaborative, ensuring your vision comes to life
              exactly as you imagined."
      />
      <LpChoose transform="transform" />
      <ServicesPortfolio
        title={<> Showcasing Our <span className="newfycolr">Creative Vision</span> </>}
      />
      <Newsuccess
          subtitle="Ready For Success?"
          maintitle="Brace Yourself for What Happens Next"
          successSteps={
            [
              {
                number: '01',
                title: 'Talk To Our Experts',
                text: 'Contact us without obligation by email or phone and secure your free consultation.',
                buttonText: 'Connect Now!',
                link: '#',
              },
              {
                number: '02',
                title: 'Get A Quote',
                text: 'Get an exact cost breakdown structure of your app.',
                buttonText: 'Chat Now!',
                link: '#',
              },
              {
                number: '03',
                title: 'Build An MVP',
                text: 'Contact us without obligation by email or phone and secure your free consultation.',
                buttonText: 'Call Now!',
                link: '#',
              },
            ]
          }
        />
      <Technologieswe />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={
          [
            {
              question: "What is mobile application development?",
              answer:
                (<> Mobile application development creates software applications that run on mobile devices and other connected devices, such as wearables, automotive systems, cameras, and more. It requires skill sets in design, development, testing, deployment, and maintenance to create innovative user experiences across multiple platforms. With that being said, businesses hire mobile app developers to stay ahead of the competition and deliver market-leading products to their customers. </>),
            },
            {
              question: "Does BitsWits offer hybrid and native app development?",
              answer:
                (<> BitsWits has a team of the best mobile app developers expert in providing customized development solutions, whether Hybrid or Native mobile application development is required. Our developers always come up with creative and innovative app ideas that are best in your interest. </>),
            },
            {
              question: "Why choose BitsWits as a mobile app development company?",
              answer:
                (<> BitsWits is a top mobile app development company due to its decent clientele, commitment to excellence, and innovative mobile app development solutions. We enjoy the top spot in the application development industry with affordable packages and professional services. </>),
            },
            {
              question: "Is there any customer support available?",
              answer:
                (<> Yes, BitsWits offers 24/7 incredible customer support, even post-mobile apps development USA. We do not let our customers hang in the middle with any query that may bring trouble to them. </>),
            },
            {
              question: "How to choose a mobile app development company?",
              answer:
                (<> Checking client portfolios, communicating your requirements clearly, and considering the development cost will help you choose the best mobile app development agency. BitsWits practices open communication so that the solution to your query is answered adequately to provide you with the utmost satisfaction. </>),
            },
            {
              question: "What industries does BitsWits cater to?",
              answer:
                (<> At BitsWits, we specialize in developing innovative and efficient mobile applications for various industries across the United States. We offer customized mobile solutions from e-commerce to healthcare and gaming to meet each client's specific requirements and business. We are a mobile application development company dedicated to creating apps that cater to each client's unique needs. </>),
            },
          ]
        }
      />
      <HomeLocation />
    </>
  );
}
