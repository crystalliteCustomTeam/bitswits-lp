import Head from 'next/head'
import React from 'react';
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout'));
const Dedicatedweb = React.lazy(() => import('@/components/Dedicatedweb'));
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
const BannerImage = await import("@/public/images/webapp/webapp.png");
const WhoImage = await import("@/public/images/webapp/who_image.png");
const WhatImage = await import("@/public/images/webapp/what_Image.png");
//icons
const icon23 = await import('../public/images/fyicons/82.png');
const icon24 = await import('../public/images/fyicons/83.png');
const icon25 = await import('../public/images/fyicons/84.png');
const icon26 = await import('../public/images/fyicons/85.png');
const icon27 = await import('../public/images/fyicons/86.png');
const icon28 = await import('../public/images/fyicons/87.png');


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                {/* <!-- Title & Description --> */}
                <title>Advanced Web App Development Company - BitsWits</title>
                <meta name="description" content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs." />
                {/* <!-- OG Tags --> */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Advanced Web App Development Company - BitsWits" />
                <meta property="og:description" content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs." />
                {/* <meta property="og:url" content="https://BitsWits.co/web-app-development-company/" /> */}
                <meta property="og:site_name" content="Advanced Web App Development Company - BitsWits" />
                {/* <!-- Canonical --> */}
                {/* <link rel="canonical" href="https://BitsWits.co/web-app-development-company/" /> */}
                {/* <!-- Bing Master Verification  --> */}
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                {/* <!-- Local Location Tags --> */}
                <meta name="DC.title" content="web app development company, hire web application developers, top web app developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="web app development company, hire web application developers, top web app developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                {/* <!-- Nationwide Location Tags --> */}
                <meta name="DC.title" content="web app development company, hire web application developers, top web app developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ServicesBanner
                subtitle="Top-Notch Web App Development Company"
                title={<> Where Imagination Meets <br /> Creativity </>}
                text={<> BitsWits is a future-forward, human-centered, and client-focused web development company that <br /> revolutionizes the way businesses appear on the online paradigm. We build dynamic, multi-purpose, <br /> secure, and highly-performing websites that help brands gain online traction in no time. </>}
                BannerImage={BannerImage}
                assignClass="web"
            />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <Dedicatedweb />
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
                sub1="Work Smarter and Convert Faster with Web Apps at BitsWits!"
                sub2="Web app development services at BitsWits, allows you to build better and faster web applications globally."
                whyData={
                    [
                        {
                            icon: icon23,
                            title: (<> Booming <br /> Accessibility </>),
                            para: "Web apps can be accessed on any device with a Wi-Fi connection, letting you engage in business anytime and anywhere.",
                        },
                        {
                            icon: icon24,
                            title: (<> Better <br /> Engagement </>),
                            para: "Web apps provide an interactive platform to communicate and engage customers.",
                        },
                        {
                            icon: icon25,
                            title: (<> Uncomplicated <br /> Business Processes </>),
                            para: "Our web apps can automate business workflows for improved efficiency and simplified processes.",
                        },
                        {
                            icon: icon26,
                            title: (<> A Boost in <br /> Productivity </>),
                            para: "Web app developers at BitsWits create apps that allow users to access information faster and more efficiently.",
                        },
                        {
                            icon: icon27,
                            title: (<> Better Data <br /> Insights </>),
                            para: "Web apps have data and information that can provide valuable insights that guide in the decision-making process.",
                        },
                        {
                            icon: icon28,
                            title: (<> Lower <br /> Cost </>),
                            para: "At BitsWits, web applications require lower development and maintenance costs compared to native apps.",
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
                            question: "What is a web application?",
                            answer:
                                (<> A web application is a software program that runs in a web browser. It is accessed over the internet and provides interactive and dynamic content to users. </>),
                        },
                        {
                            question: "What are the key technologies used in web application development?",
                            answer:
                                (<> Key technologies include HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), JavaScript, and server-side languages like Python, Ruby, Java, PHP, and others. Frameworks and libraries like React, Angular, and Node.js are also commonly used. </>),
                        },
                        {
                            question: "What is the difference between a website and a web application?",
                            answer:
                                (<> A website typically provides static content for informational purposes. A web application, on the other hand, allows users to perform tasks, interact with databases, and perform various functions. </>),
                        },
                        {
                            question: "What is the front-end and back-end of a web application?",
                            answer:
                                (<> The front-end refers to the user interface and user experience of a web application. It's what the user sees and interacts with. The back-end refers to the server, application logic, and database that support the front-end. </>),
                        },
                        {
                            question: "What is responsive web design?",
                            answer:
                                (<> Responsive web design is an approach to designing web pages that ensures they look good and function well on various devices and screen sizes, from desktop computers to mobile phones. </>),
                        },
                        {
                            question: "What is a Content Management System (CMS)?",
                            answer:
                                (<> A CMS is a software platform that allows users to create, manage, and update digital content on a website without the need for technical expertise. Examples include WordPress, Drupal, and Joomla. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}
