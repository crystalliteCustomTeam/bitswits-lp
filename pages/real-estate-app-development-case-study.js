import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
const Banner = React.lazy(() => import('@/components/CaseBanner'));
const CaseGlamic = React.lazy(() => import('@/components/CaseGlamic'));
const CaseWants = React.lazy(() => import('@/components/CaseWants'));
const CaseGoal = React.lazy(() => import('@/components/CaseGoal'));
const CaseOvercoming = React.lazy(() => import('@/components/CaseOvercoming'));
const CaseAnimate = React.lazy(() => import('@/components/CaseAnimate'));
const CaseServices = React.lazy(() => import('@/components/CaseServices'));
const CaseChoose = React.lazy(() => import('@/components/CaseChoose'));
const CaseGlobal = React.lazy(() => import('@/components/CaseGlobal'));
const CaseCapabilities = React.lazy(() => import('@/components/CaseCapabilities'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const banLogo = await import('../public/images/case-studies/case-dreamhome/banner-logo.png');
const banImg = await import('../public/images/case-studies/case-dreamhome/banner-img.png');
//
const slide1 = await import('../public/images/case-studies/case-monkey/slide1.png');
const slide2 = await import('../public/images/case-studies/case-monkey/slide2.png');
const slide3 = await import('../public/images/case-studies/case-monkey/slide3.png');
const slide4 = await import('../public/images/case-studies/case-monkey/slide4.png');
//
const features = await import('../public/images/case-studies/case-monkey/features.png');
const faced = await import('../public/images/case-studies/case-monkey/faced.png');
const tackling = await import('../public/images/case-studies/case-monkey/tackling.png');
//
const goalImg = await import('../public/images/case-studies/case-monkey/goal.png');
//
const animiImg1 = await import('../public/images/case-studies/case-dreamhome/animi1.png');
const animiImg2 = await import('../public/images/case-studies/case-dreamhome/animi2.png');
const animiImg3 = await import('../public/images/case-studies/case-dreamhome/animi3.png');
//
const service1 = await import('../public/images/case-studies/case-monkey/service1.png');
const service2 = await import('../public/images/case-studies/case-monkey/service2.png');
const service3 = await import('../public/images/case-studies/case-monkey/service3.png');
const service4 = await import('../public/images/case-studies/case-monkey/service4.png');
const service5 = await import('../public/images/case-studies/case-monkey/service5.png');
//
const chosImg1 = await import('../public/images/lp-images/icon1.png');
const chosImg2 = await import('../public/images/lp-images/icon2.png');
const chosImg3 = await import('../public/images/lp-images/icon3.png');
const chosImg4 = await import('../public/images/lp-images/icon4.png');
const chosImg5 = await import('../public/images/lp-images/icon5.png');
const chosImg6 = await import('../public/images/lp-images/icon6.png');
const chosImg7 = await import('../public/images/lp-images/icon7.png');
const chosImg8 = await import('../public/images/lp-images/icon8.png');
const chosImg9 = await import('../public/images/lp-images/icon9.png');


export default function RealState() {

  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);

    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      <Head>
        <title>BitsWits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Banner
        banLogo={banLogo}
        title={<> our Dream Home, One Tap Away </>}
        banImg={banImg}
        bannerClass='dreamhome'
      />

      <CaseGlamic
        textArray1={[
          {
            title: <>Real Estate App <span>Development</span></>,
            text: [
              <>
                <i>Dream Home</i>, a real estate app designed to make your property search a breeze. If you're looking for your dream home, this user-friendly app offers a seamless and efficient experience. With a sleek interface, powerful search filters, and a vast database of listings, Dream Home helps you find the perfect property in no time.
              </>,
              <>
                Save your favorite listings, receive timely notifications, and connect with real estate agents to make your real estate dreams a reality. Say goodbye to the hassle of property hunting and welcome the convenience of Dream Home into your life.
              </>
            ]
          },
        ]}

        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: <>Our consultants are ready to hear your idea. Request a free consultation with our app experts and transform it into a digital reality.</>,
          },
        ]}

        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}

        textArray3={[
          {
            title: <>The <span>Starting</span> Point</>,
            text: [
              <>Our client, a real estate professional, identified the need for a more streamlined and tech-savvy approach to property searching. Recognizing the evolving market trends and changing consumer demands, they envisioned the "Dream Home" app as a solution to provide an efficient and user-friendly real estate experience.</>,
              <>Their goal was to empower homebuyers and investors with a solution that simplifies property discovery and connects them with their ideal homes or investment opportunities.</>,
            ],
          },
        ]}
      />

      <CaseWants
        sections1={[
          {
            title: <> Main <span>Features</span> </>,
            textArray: [
              'Advanced Property Search with Powerful Filters',
              'Favorites and Shortlists for Easy Property Organization',
              'Real-Time Notifications for New Listings and Price Changes',
              'Immersive Virtual Tours for Property Exploration',
              'Direct Communication with Experienced Real Estate Agents',
              'Mortgage Calculator for Financial Planning',
              'Comprehensive Neighborhood Information',
              'User Reviews and Ratings for Properties and Agents',
              'Secure In-App Messaging for Confidential Communication',
            ],
          }
        ]}
        wantImg1={features}
        sections2={[
          {
            title: <> Challenges <span>We Faced</span> </>,
            textArray: [
              'Data Integration Complexity',
              'User Privacy and Security',
              'Ensuring Scalability for Growing User Base',
              'Integrating Geospatial Data and Mapping',
              'Regulatory Compliance Hurdles',
            ],
          }
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Developed a robust data pipeline and employed data validation and cleaning algorithms',
              'Implemented end-to-end encryption for user communications',
              'Utilized cloud-based infrastructure and employed load balancing and optimized database queries',
              'Optimized map rendering and integrated user-friendly navigation features',
              'Implemented features like region-specific filtering to ensure compliance with local laws',
            ],
          },
        ]}
        wantImg3={tackling}
        lastPara={<> BitsWits, a renowned app development company, brought "Dream Home" to life through its expertise in real estate technology. Leveraging cutting-edge development techniques and a focus on user satisfaction, we created an app that redefines the real estate experience, making it easier and more enjoyable for users to find their dream homes. </>}
      />

      <CaseGoal
        golImg={goalImg}
        title={<> Start Your App Development Journey <br /> Effortlessly; Let <span>Bitswits Be Your <br /> Savior</span> With A Quick Tap! </>}
        goalClass='dreamhome'
      />

      <CaseOvercoming
        appData={[
          {
            title: (<> Overcoming <br /> Development Challenges </>),
            description: 'We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes.',
          },
          {
            title: (<> Hybrid <br /> Development Excellence </>),
            description: (<> Our approach to app development is anything but one-size-fits-all. With a hybrid approach, we strike a balance between predictability and adaptability. For projects with clearly defined timeframes, we employ a waterfall approach to meet the deadlines. This helps us meet the compliance requirements and regulatory standards. </>),
          },
          {
            title: (<> On-Time Delivery - <br /> Every Time </>),
            description: 'Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule.',
          },
          {
            title: (<> Erasing <br /> Time-zone Barriers </>),
            description: (<> Our project managers are trained to remain considerate about time-zone differences, they take into account clients' availability and preferences. We prioritize cultural sensitivity, our developers made a system that shows clients' active hours along with their current location in google maps, and holidays around the globe. </>),
          },
          {
            title: (<> Efficient <br /> Communication </>),
            description: 'BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction.',
          },
          {
            title: (<> Addressing <br /> Payment Disputes </>),
            description: (<> At BitsWits, we rely on the Stripe payment method for all transactions. We've developed an automated dispute resolution portal to efficiently manage payment issues. Our portal also provides clear visibility into the different stages of reported payment disputes and their current statuses. </>),
          },
        ]}
      />

      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />

      <CaseServices
        title={<> <span>Services:</span> For </>}
        point1={<> Native Mobile App Development </>}
        point2={<> Stunning UI/UX Design </>}
        point3={<> Consumer/ Service Provider Interface </>}
        service1={service1}
        service2={service2}
        service3={service3}
        service4={service4}
        service5={service5}
      />

      <CaseChoose
        title={<> <span>Why Trust <br /> BitsWits</span> with App <br /> Development? </>}
        text1={<> We stand as the primary choice for mobile app development, exemplifying excellence in a dynamic field. Our team combines creativity and the most suitable tech stack to develop customized app solutions. </>}
        text2={<> Our track record of delivering on time and within budget, coupled with a commitment to staying ahead of industry trends, sets us apart as the best partner for mobile app development. </>}
        items={[
          {
            image: chosImg1,
            text: (<> Experienced  <br /> Professionals </>)
          },
          {
            image: chosImg2,
            text: (<> On-Time <br /> Delivery </>)
          },
          {
            image: chosImg3,
            text: (<> Cost-Effective <br /> Solutions </>)
          },
          {
            image: chosImg4,
            text: (<> Scalable and <br /> Secure Apps </>)
          },
          {
            image: chosImg5,
            text: (<> User-Centric <br /> Design </>)
          },
          {
            image: chosImg6,
            text: (<> Customized <br /> Development </>)
          },
          {
            image: chosImg7,
            text: (<> Error-Free <br /> Delivery </>)
          },
          {
            image: chosImg8,
            text: (<> Transparent <br /> Communication </>)
          },
          {
            image: chosImg9,
            text: (<> Support and <br /> Maintenance </>)
          }
        ]}
      />

      <CaseGlobal />
      <CaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />
    </>
  )
}
