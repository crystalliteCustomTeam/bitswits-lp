import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
import Banner from '@/components/CaseBanner'
import CaseGlamic from '@/components/CaseGlamic';
import CaseWants from '@/components/CaseWants';
import CaseGoal from '@/components/CaseGoal';
import CaseOvercoming from '@/components/CaseOvercoming';
import CaseAnimate from '@/components/CaseAnimate';
import CaseServices from '@/components/CaseServices';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import Capabilities from '@/components/Capabilities';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Faqs from '@/components/NewhomeFaqs';
import HomeLocation from '@/components/HomeLocation';
//images
import banLogo from '../public/images/case-wisu/banner-logo.png'
import banImg from '../public/images/case-wisu/banner-img.png'
import glamicImg from '../public/images/case-wisu/glamic.png'
import goalImg from '../public/images/case-wisu/goal.png'
import animiImg1 from '../public/images/case-wisu/animi1.png'
import animiImg2 from '../public/images/case-wisu/animi2.png'
import animiImg3 from '../public/images/case-wisu/animi3.png'
import servImg from '../public/images/case-wisu/services.png'
//Icons 
import icon1 from '../public/images/fymobile/1.png'
import icon2 from '../public/images/fymobile/2.png'
import icon3 from '../public/images/fymobile/3.png'
import icon4 from '../public/images/fymobile/4.png'
import icon5 from '../public/images/fymobile/5.png'
import icon6 from '../public/images/fymobile/6.png'


export default function bacteriaapp() {

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
        title={<> Stay in Style, Always a Swipe Away! </>}
        banImg={banImg}
        bannerClass='wisu'
      />

      <CaseGlamic
        textArray1={[
          {
            title: <>Food Delivery <span>Solution</span></>,
            text: [
              <>
                <i>Crave Courier</i>, a BitsWits creation, is a food delivery app. It streamlines the process: select from local eateries, place your order, and savor restaurant-quality dishes brought straight to you. A convenient, fuss-free solution for your dining desires.
              </>,
              <>
                With a user-friendly interface and the ability to save preferred meal choices, we've created an efficient platform for a superior eating experience.
              </>
            ]
          },
        ]}

        textArray2={[
          {
            title: <>Want an <br /> App Like This?</>,
            text: <>Our expert consultants eagerly await your ideas. Request a complimentary consultation with our app specialists to discuss your idea.</>,
          },
        ]}

        foldImg={glamicImg}

        textArray3={[
          {
            title: <>Why Trust BitsWits with <span>App Development?</span></>,
            text: [
              <>We stand as the primary choice for mobile app development, exemplifying excellence in a dynamic field. Our team combines creativity and the most suitable tech stack to develop customized app solutions.</>,
              <>Our track record of delivering on time and within budget, coupled with a commitment to staying ahead of industry trends, sets us apart as the best partner for mobile app development.</>,
            ],
          },
          {
            title: <>The <span>Starting</span> Point</>,
            text: [
              <>Crave Courier began when a group of food lovers saw how busy life can be in a big city. They wanted to make it easy for people to enjoy delicious food from local restaurants without the hassle. So, they came up with the idea of an app that lets you pick what you want to eat, place your order, and have it delivered right to your door.</>,
              <>To create a user-friendly and highly convenient app for an average person, the founders of Crave Courier recognized the need for professional expertise and they wisely brought BitsWits into the fold, for design, development, and the integration of AI technology.</>,
            ],
          },
        ]}
      />

      <CaseServices
        servImg={servImg}
      />

      <CaseWants
        sections={[
          {
            title: <> App-etizers & Main <span>Features</span> </>,
            textArray: [
              'Restaurant listings',
              'Personalized user profiles',
              'Live order tracking',
              'Voice-activated order placement',
              'Highly functional native app',
              'Instant chat support',
              'Secure and diverse payment methods',
              'AI-powered route optimization',
              'AI-driven smart search and recommendations',
            ],
          },
          {
            title: <> A Closer Look at Project <span>Challenges We Faced</span> </>,
            textArray: [
              'Feedback Loop Implementation',
              'Ensuring high voice recognition accuracy',
              'Responsiveness of real-time chat support',
              'Computational complexities in AI algorithms',
              'Database management while maintaining efficient performance',
            ],
          },
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Established a dedicated feedback mechanism for users to report issues',
              'Implemented load balancing to distribute server load effectively',
              'Utilized parallel processing to enhance AI algorithm efficiency',
              'Implemented data caching strategies to reduce database load',
              'Invested in advanced voice recognition technology and speech-to-text conversion',
            ],
          },
        ]}
        para={<> BitsWits' proactive approach to problem solving and constant commitment to technology refinement played an important role in ensuring the efficiency and user satisfaction. Through our vigilant problem-solving mindset, we promptly sought solutions and made sure Crave Courier stands as a leading app in the food delivery industry. </>}
        wantsClass='wisu'
      />

      <CaseGoal
        golImg={goalImg}
        title={<> Take a step toward your beauty goals from the comfort of your couch with just a few taps on our app! </>}
        goalClass='wisu'
      />

      <CaseOvercoming
        challenges={[
          {
            icon: icon1,
            title: <> Overcoming <br /> Development Challenges </>,
            text: <> We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes. </>,
          },
          {
            icon: icon2,
            title: <> Hybrid <br /> Development Excellence </>,
            text: <> Our approach to app development is anything but one-size-fits-all. With a hybrid approach, we strike a balance between predictability and adaptability. For projects with clearly defined timeframes, we employ a waterfall approach to meet the deadlines. This helps us meet the compliance requirements and regulatory standards. </>,
          },
          {
            icon: icon3,
            title: <> On-Time Delivery - <br /> Every Time </>,
            text: <> Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule. </>,
          },
          {
            icon: icon4,
            title: <> Erasing <br /> Time-zone Barriers </>,
            text: <> Our project managers are trained to remain considerate about time-zone differences, they take into account clients' availability and preferences. We prioritize cultural sensitivity, our developers made a system that shows clients' active hours along with their current location in google maps, and holidays around the globe. </>,
          },
          {
            icon: icon5,
            title: <> Efficient <br /> Communication </>,
            text: <> BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction. </>,
          },
          {
            icon: icon6,
            title: <> Addressing <br /> Payment Disputes </>,
            text: <> At BitsWits, we rely on the Stripe payment method for all transactions. We've developed an automated dispute resolution portal to efficiently manage payment issues. Our portal also provides clear visibility into the different stages of reported payment disputes and their current statuses. </>,
          },
        ]}
      />

      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />

      <NewHomeGlobal />
      <Capabilities />
      <NewHomeSlider />
      <Technologieswe />
      <Homenextproject />
      <Faqs />
      <HomeLocation />

    </>
  )
}
