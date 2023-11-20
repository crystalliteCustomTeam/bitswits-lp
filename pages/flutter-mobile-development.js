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
const BannerImage = await import("@/public/fluttermobiledevelopment/banner_image.png");
const WhoImage = await import("@/public/fluttermobiledevelopment/who_image.png");
const WhatImage = await import("@/public/fluttermobiledevelopment/what_Image.png");
//icons
const icon23 = await import("../public/images/fyiconsflutter/1.png");
const icon24 = await import("../public/images/fyiconsflutter/2.png");
const icon25 = await import("../public/images/fyiconsflutter/3.png");
const icon26 = await import("../public/images/fyiconsflutter/4.png");
const icon27 = await import("../public/images/fyiconsflutter/5.png");
const icon28 = await import("../public/images/fyiconsflutter/6.png");


export default function HybridMobile() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <title>Trusted Flutter App Development Company - BitsWits!</title>
        <meta
          name="description"
          content="Don't settle for mediocre apps! Our flutter app developers deliver cutting-edge solutions that are designed to make a lasting impression on your users."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Trusted Flutter App Development Company - BitsWits!"
        />
        <meta
          property="og:description"
          content="Don't settle for mediocre apps! Our flutter app developers deliver cutting-edge solutions that are designed to make a lasting impression on your users."
        />
        {/* <meta
          property="og:url"
          content="https://BitsWits.co/flutter-app-development-company/"
        /> */}
        <meta
          property="og:site_name"
          content="Trusted Flutter App Development Company - BitsWits!"
        />
        {/* <link
          rel="canonical"
          href="https://BitsWits.co/flutter-app-development-company/"
        /> */}
        <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
        <meta
          name="DC.title"
          content="flutter app development company, flutter app developers, hire flutter app developers"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
        <meta
          name="DC.title"
          content="flutter app development company, flutter app developers, hire flutter app developers"
        />
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover" />
        <meta name="geo.position" content="38.692045;-75.401331" />
        <meta name="ICBM" content="38.692045, -75.401331" />
        <meta
          name="DC.title"
          content="flutter app development company, flutter app developers, hire flutter app developers"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <ServicesBanner
        title={<> Flutter Mobile Apps <br /> Development Company In USA </>}
        text={<> BitsWits is an expert Flutter app development agency with years of experience creating innovative, powerful <br /> apps for businesses of all sizes. From startups to established corporate entities, we have the expertise and <br /> technology to turn your ideas into amazing apps. </>}
        BannerImage={BannerImage}
        assignClass="flutter"
      />
      <NewHomeAbout
        title="Our Client’s Feedback Has Been"
        subtitle="Nothing Short Of Amazing!"
      />
      <ServicesMaintain
        assignClass="flutter"
        title1={<> No Challenge Is Too Great For Our </>}
        title2={<> Flutter App Development Company! </>}
        appContent={[]}
        appContent1={
          [
            {
              title: 'Dart Application Development Services',
              text: (<> Our Dart application development services create efficient and powerful hybrid apps using the latest libraries to modernize your native apps. We'll help your app stand out and succeed with seamless solutions exceeding expectations. </>),
              appclass: "app"
            },
            {
              title: (<> Flutter Cross-Platform App Development </>),
              text: (<> As a leading Flutter app development company, our expertise lies in developing innovative Flutter apps and provide solutions that extend your app's potential reach, driving your business growth to new heights. Hire us, and experience the difference of our exceptional Flutter app development services. </>),
              appclass: "app1",
            },
            {
              title: (<> Flutter Development For IOS & Android </>),
              text: 'We make stellar Flutter apps that work on both iOS and Android platforms. We aim to make your application stand out in the industry with our Flutter app development service. Trust our expert flutter developers to deliver seamless user experience and robust functionality.',
              appclass: "app2",
            }
          ]
        }
        appContent2={
          [
            {
              title: 'Customized Flutter Development Solutions',
              text: "Flutter app developers at BitsWits can make customized powerful apps that help your business grow and reach more people. Hire top-rated Flutter development services and skyrocket your business growth.",
              appclass: "app3",
            },
          ]
        }
        appContent3={
          [
            {
              title: (<> Testing & Quality <br /> Assurance </>),
              text: (<> Our Flutter mobile app developers, quality analysts, and testers, collaborate seamlessly to ensure your app is free of bugs during development. We guarantee you a dependable, top-notch final product that meets your expectations. </>),
              appclass: "app4",
            },
            {
              title: (<> Maintenance & Support <br /> Services </>),
              text: 'BitsWits offers maintenance and support services to keep your Flutter applications running smoothly after launch. Our experts provide top-notch services to ensure your applications remain in excellent condition for a long term, giving you peace of mind and ensuring the success of your business.',
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
        sub1="Why Does Your Business Require Flutter Applications?"
        sub2="Flutter app development services act like an optimal framework for app development as it allows building high-quality, native-feeling applications for both iOS and Android from a single codebase that saves time and costs."
        whyData={
          [
            {
              icon: icon23,
              title: "Cross-Platform Apps",
              para: "Flutter allows app deployment to both iOS and Android platforms, saving time and cost for development.",
            },
            {
              icon: icon24,
              title: "Expressive and Impressive UI",
              para: "Flutter widgets and composition models help Flutter app developers quickly build intuitive and high-quality UI/UX on each platform.",
            },
            {
              icon: icon25,
              title: (<> Native <br /> Performance </>),
              para: "Flutter app development agency builds fast-performing apps by compiling directly to native ARM code rather than JavaScript.",
            },
            {
              icon: icon26,
              title: (<> Cost <br /> Savings </>),
              para: "Flutter app developers use a single codebase that reduces development and maintenance costs. No need for a separate iOS and Android codebase.",
            },
            {
              icon: icon27,
              title: (<> Rapid <br /> Development </>),
              para: "The hot reload feature allows Flutter app developers to see code changes reflected immediately without recompiling or accelerating the process.",
            },
            {
              icon: icon28,
              title: (<> Vast <br /> Plugins </>),
              para: "To add features without writing repetitive code, BitsWits have created an extensive network of high-quality plugins for Flutter.",
            },
          ]
        }
      />
      <ServicesPortfolio
        title={<> Showcasing Our <span className="grdiant">Creative Vision</span> </>}
      />
      <Capabilities />
      <Newsuccess
        assignClass="spacing"
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
              text: 'Start your app development journey with no-obligation consultation via email and phone.',
              buttonText: 'Call Now!',
              link: '#',
            },
          ]
        }
      />
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
              question: "How much does Flutter app development cost?",
              answer:
                (<> Flutter mobile app development is an increasingly popular and cost-effective way to develop mobile applications. Developing with Flutter is faster, easier, and produces more reliable results than other cross-platform solutions. But how much does flutter app development cost? The answer depends on the complexity of the application and the number of features you want to include. Generally speaking, simple applications with basic functionality can cost anywhere from $[Our Basic Package] - $[Our Premium Package], while more complex applications can range up to $[Our Basic Package] or more. </>),
            },
            {
              question: "What is Flutter app development?",
              answer:
                (<> Flutter mobile app development is a powerful software development kit (SDK) created by Google. It allows developers to quickly create beautiful, high-performance mobile applications for both iOS and Android platforms from the same codebase. Flutter apps are built using the Dart programming language and have access to a wide range of powerful features such as hardware acceleration, advanced UI elements, and animation capabilities. Flutter apps run smoothly on both platforms because of their highly optimized codebase. </>),
            },
            {
              question: "Why should I choose Flutter for app development?",
              answer:
                (<> Flutter app development is the ideal choice because it offers a wide range of advantages. It is an open-source framework that simplifies mobile app creation, giving flutter developers more control over their projects and enabling them to write code faster. You should choose Flutter app development because it allows for the rapid development of high-performance apps with expressive and flexible UI, using minimal effort, time, and code. </>),
            },
            {
              question: "Is Flutter good for mobile app development?",
              answer:
                (<> Flutter is a great choice for mobile app development. It is an open-source UI toolkit created by Google to help developers build beautiful and engaging apps quickly and efficiently. Flutter makes it easy for developers to create cross-platform applications with near-native performance. With features like hot reloading, extensive libraries of widgets, and its own rendering engine, Flutter can help you create beautiful mobile apps faster than ever before. These are some of the most prominent reasons why Flutter is better for app development. </>),
            },
            {
              question: "What are some of the advantages of Flutter?",
              answer:
                (<> The Flutter framework is quickly becoming one of the most
                  popular development tools around. It's easy to see why, as
                  it offers developers many advantages over traditional app
                  development methods. Here are six big benefits of Flutter:
                  <br /><br />1. Faster Development Speed - Flutter enables
                  developers to create apps at lightning speed thanks to its
                  hot reload feature. This allows developers to quickly make
                  changes and see the results immediately, rather than waiting
                  for a build cycle every time they make an adjustment.
                  <br /><br />2. Easy to Learn - Flutter is designed with
                  simplicity in mind and requires very little code to get
                  started. It's a great choice for new developers who want to
                  get their feet wet in the world of app development.
                  <br /><br />3. Increased Productivity - With Flutter,
                  developers can make changes quickly and easily as well as
                  reuse code for future projects. This helps speed up
                  development time and increases productivity overall.
                  <br /><br />4. Cross-Platform Support - One of the biggest
                  advantages of using Flutter is its cross-platform support.
                  It allows developers to create apps for multiple platforms
                  without having to rewrite code for each one.
                  <br /><br />5. Accessibility - With Flutter, developers can
                  easily make their apps accessible to people with
                  disabilities by taking advantage of the accessible
                  components and APIs within the framework itself. This helps
                  ensure that the app is accessible to everyone.
                  <br /><br />6. Open Source - Flutter is open source, meaning
                  developers can use the source code and freely distribute it
                  as they please. This helps keep development costs low and
                  allows developers to build apps faster by taking advantage
                  of existing libraries and components.
                  <br /><br />In short, Flutter application development is the
                  ultimate choice for app development because it offers an
                  easy-to-use interface and powerful features that make
                  developing apps faster and simpler. </>),
            },
            {
              question: "What does Flutter Firebase do?",
              answer:
                (<> Flutter Firebase is a mobile development platform that combines the power of Flutter, Google's UI toolkit for building beautiful apps, with the robustness and scalability of Firebase. It offers a wide range of features like cloud storage, authentication, analytics, messaging, and much more. With Flutter Firebase, you can create powerful and dynamic mobile apps with ease. With the help of its extensive framework, developers can quickly and easily create beautiful user interfaces and powerful backends, enabling a smooth user experience. It also allows you to build complex data structures without having to write complicated code, making it perfect for quickly prototyping ideas and building highly-functional applications. </>),
            },
          ]
        }
      />
      <HomeLocation />
    </>
  )
}
