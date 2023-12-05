import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
const Banner = React.lazy(() => import('@/components/CaseBanner'));
const CaseGlamic = React.lazy(() => import('@/components/NewCaseGlamic'));
const CaseWants = React.lazy(() => import('@/components/NewCaseWants'));
const CaseGoal = React.lazy(() => import('@/components/NewCaseGoal'));
const CaseOvercoming = React.lazy(() => import('@/components/NewCaseOvercoming'));
const CaseAnimate = React.lazy(() => import('@/components/CaseAnimate'));
const NewCaseServices = React.lazy(() => import('@/components/NewCaseServices'));
const NewCaseChoose = React.lazy(() => import('@/components/NewCaseChoose'));
const NewCaseGlobal = React.lazy(() => import('@/components/NewCaseGlobal'));
const NewCaseCapabilities = React.lazy(() => import('@/components/NewCaseCapabilities'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const banLogo = await import('../public/images/case-wisu/banner-logo.png');
const banImg = await import('../public/images/new-case-page/banner-img.png');
//
const slide1 = await import('../public/images/new-case-page/slide1.png');
const slide2 = await import('../public/images/new-case-page/slide2.png');
const slide3 = await import('../public/images/new-case-page/slide3.png');
const slide4 = await import('../public/images/new-case-page/slide4.png');
//
const features = await import('../public/images/new-case-page/features.png');
const faced = await import('../public/images/new-case-page/faced.png');
const tackling = await import('../public/images/new-case-page/tackling.png');
//
const goalImg = await import('../public/images/new-case-page/goal.png');
//
const animiImg1 = await import('../public/images/case-wisu/animi1.png');
const animiImg2 = await import('../public/images/case-wisu/animi2.png');
const animiImg3 = await import('../public/images/case-wisu/animi3.png');
//



export default function Wisu() {

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
        bannerClass='newCase'
      />

      <CaseGlamic
        textArray1={[
          {
            title: <>Clothing Marketplace <span>App Development</span></>,
            text: [
              <>
                <i>Wisu</i> Clothing Marketplace App is your one-stop destination for fashion enthusiasts. This sleek and intuitive platform connects you to an extensive array of clothing, offering both top brands and independent designers. Wisu's smart recommendation system ensures that your style preferences are catered to ensuring confident fashion choices.
              </>,
              <>
                With user-generated reviews, secure payment options, and an emphasis on sustainability, Wisu simplifies the fashion shopping experience. Plus, if you're looking to declutter, you can effortlessly sell your preloved fashion items on the platform.
              </>
            ]
          },
        ]}

        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: <>Our expert consultants eagerly await your ideas. Request a complimentary consultation with our app specialists to discuss your idea.</>,
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
              <>Our client's vision for Wisu was born out of a desire to revolutionize the fashion industry. They aimed to create a platform that seamlessly connects fashion enthusiasts with diverse, sustainable, and stylish choices.</>,
              <>Wisu represents a commitment to promoting individual expression, reducing fashion waste, and making high-quality fashion accessible to all. The goal is to empower users to make informed fashion choices, express their unique style, and contribute to a more sustainable future.</>,
            ],
          },
        ]}
      />

      <CaseWants
        sections1={[
          {
            title: <> Main <span>Features</span> </>,
            textArray: [
              'Access a wide variety of clothing.',
              'Discover clothing items tailored to your unique style preferences.',
              'Benefit from real-world experiences shared by fellow fashion enthusiasts.',
              'Enjoy secure payments, order tracking, and easy return options.',
              'Easily list and sell pre-loved fashion items to a broad audience.',
              'Explore eco-friendly and ethically-made fashion choices.',
              'Stay updated with curated collections, style guides, and trends.',
              'Navigate effortlessly through a sleek and intuitive design.',
            ],
          }
        ]}
        wantImg1={features}
        sections2={[
          {
            title: <> Challenges <span>We Faced</span> </>,
            textArray: [
              'Managing a vast inventory of clothes was challenging.',
              'Ensuring security measures to protect user data and transactions.',
              'Sourcing and verifying sustainable and ethical clothings.',
              'Maintaining user engagement and trust in a competitive fashion marketplace industry',
            ],
          }
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Utilized scalable cloud infrastructure.',
              'Implemented state-of-the-art encryption and compliance standards.',
              'Collaborated with certified sustainable brands.',
              'Integrated personalized notifications to boost user engagement.',
            ],
          },
        ]}
        wantImg3={tackling}
      />

      <CaseGoal
        golImg={goalImg}
        title={<> Start Your App Development Journey Effortlessly; Let <span>Bitswits Be Your Savior</span> With A Quick Tap! </>}
        goalClass='wisu'
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

      <NewCaseServices />
      <NewCaseChoose />
      <NewCaseGlobal />
      <NewCaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />
    </>
  )
}
