import Head from "next/head";
import React from "react";
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout'));
const ServicesMaintain = React.lazy(() => import('@/components/ServicesMaintain'));
const NewAddress = React.lazy(() => import('@/components/NewAddress'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit'));
const ServicesWho = React.lazy(() => import('@/components/ServicesWho'));
const ServicesWhat = React.lazy(() => import('@/components/ServicesWhat'));
const ServisesWhy = React.lazy(() => import('@/components/ServisesWhy'));
const ServicesPortfolio = React.lazy(() => import('@/components/ServicesPortfolio'));
const Capabilities = React.lazy(() => import('@/components/Capabilities'));
const Newsuccess = React.lazy(() => import('@/components/NewMblSuccess'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const NewHomeGlobal = React.lazy(() => import('@/components/NewHomeGlobal'));
const NewHomeSlider = React.lazy(() => import('@/components/NewHomeSlider'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const ServicesFaqs = React.lazy(() => import('@/components/ServicesFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const BannerImage = await import("@/public/newMobilePageImages/banner_image.png")
const WhoImage = await import("@/public/newMobilePageImages/who_image.png")
const WhatImage = await import("@/public/newMobilePageImages/what_Image.png")
//icons 
const icon23 = await import('../public/images/fymobile/1.png')
const icon24 = await import('../public/images/fymobile/2.png')
const icon25 = await import('../public/images/fymobile/3.png')
const icon26 = await import('../public/images/fymobile/4.png')
const icon27 = await import('../public/images/fymobile/5.png')
const icon28 = await import('../public/images/fymobile/6.png')


export default function mobileApplication() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="images/icons/favicon.png" />
        <meta charset="UTF-8" />
        {/* <!-- Title & Description --> */}
        <title>
          The Professional Mobile App Development Company - BitsWits.
        </title>
        <meta
          name="description"
          content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions."
        />
        {/* <!-- OG Tags --> */}
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
        {/* <!-- Canonical --> */}
        {/* <link rel="canonical" href="https://BitsWits.co/mobile-app-development-company/" /> */}
        {/* <!-- Bing Master Verification  --> */}
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
        {/* <!-- Local Location Tags --> */}
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
        {/* <!-- Nationwide Location Tags --> */}
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
        title={<> Mobile App Development <br /> Company At Your Service </>}
        text={<> We deliver great results, on time and on budget. Contact us to start talking about your project today! </>}
        BannerImage={BannerImage}
        assignClass="mobile"
      />
      <NewHomeAbout
        title="Our Client’s Feedback Has Been"
        subtitle="Nothing Short Of Amazing!"
      />
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
      <NewAddress />
      <Justbuildit />
      <ServicesWho
        subtitle="Who we are."
        title="We build greater futures through innovation and collective knowledge."
        text="BitsWits is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 10+ years."
        WhoImage={WhoImage}
      />
      <ServicesWhat
        subtitle="What we do."
        title="BitsWits transforms businesses through technology."
        text="We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise."
        WhatImage={WhatImage}
      />
      <ServisesWhy
        title={<> <h4 className='font20 font-bold text-white text-center'>Why BitsWits?</h4> </>}
        subtitle={<> <h2 className='grdiant f-80 font-bold text-center'>Precision, Performance <br /> & Perfection.</h2> </>}
        sub1="Why Choose BitsWits for Building Mobile Applications?"
        sub2="Building your mobile app acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape its trajectory."
        whyData={
          [
            {
              icon: icon23,
              title: "Greater Customer Reach",
              para: "Mobile apps allow you to connect with customers anywhere and anytime worldwide.",
            },
            {
              icon: icon24,
              title: "Simplified Payments",
              para: "Mobile applications allow users to instantly pay, donate, and order without any hassle.",
            },
            {
              icon: icon25,
              title: (<> Drive <br /> Sales </>),
              para: "Mobile applications provide a convenient way for customers to purchase your products and services on the go.",
            },
            {
              icon: icon26,
              title: (<> Customer <br /> Loyalty </>),
              para: "Mobile apps foster ongoing engagement and allow you to deliver customized offers and experiences.",
            },
            {
              icon: icon27,
              title: "Competitive Advantage",
              para: "Innovative mobile apps set you apart, opening new opportunities to engage users, collect data, improve customer service, and drive revenue.",
            },
            {
              icon: icon28,
              title: "Improved Customer Service",
              para: "Features like in-app chat and customer support assist in resolving issues while enhancing customer satisfaction.",
            },
          ]
        }
      />
      <ServicesPortfolio
        title={<> Showcasing Our <span className="grdiant">Creative Vision</span> </>}
      />
      <Capabilities />
      <div className="status2">
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
      </div>
      <section className='spacingtb1'>
        <Technologieswe />
      </section>
      <NewHomeGlobal />
      <NewHomeSlider />
      <Homenextproject
        title="Brace yourself for an App-venture!"
      />
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
