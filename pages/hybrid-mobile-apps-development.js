import Head from 'next/head'
import React from 'react';
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout'));
const ServicesMaintain = React.lazy(() => import('@/components/ServicesMaintain'));
const NewAddress = React.lazy(() => import('@/components/NewAddress'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit'));
const ServicesWho = React.lazy(() => import('@/components/ServicesWho'));
const ServicesWhat = React.lazy(() => import('@/components/ServicesWhat'));
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
const BannerImage = await import("@/public/hybridmbldevelopment/banner_image.png");
const WhoImage = await import("@/public/hybridmbldevelopment/who_image.png");
const WhatImage = await import("@/public/hybridmbldevelopment/what_Image.png");


export default function HybridMobile() {

    return (
        <>
            <Head>
                <title>Hybrid Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ServicesBanner
                title={<> Hybrid Mobile App <br /> Development Company In USA </>}
                text={<> BitsWits is the go-to hub for all your hybrid mobile app development needs in the USA. We are a leading <br /> technology company that excels in creating cost-effective and efficient hybrid mobile applications for businesses. </>}
                BannerImage={BannerImage}
                assignClass="hybrid"
            />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <ServicesMaintain
                assignClass="hybrid"
                title={<> Hybrid App Development Services </>}
                appContent={[]}
                appContent1={
                    [
                        {
                            title: 'Flutter',
                            text: 'Flutter is a popular framework for hybrid mobile app development that allows you to build high-quality, native-like mobile applications for both Android and iOS using a single codebase.',
                            appclass: "app"
                        },
                        {
                            title: (<> React </>),
                            text: (<> React is a popular framework for hybrid mobile app development that allows you to build mobile applications for both Android and iOS using a single codebase. </>),
                            appclass: "app1",
                        },
                        {
                            title: (<> Ionic </>),
                            text: 'Ionic is a popular framework for hybrid mobile app development that enables you to build mobile applications for various platforms, including Android, iOS, and the Web.',
                            appclass: "app2",
                        }
                    ]
                }
                appContent2={
                    [
                        {
                            title: 'Xamarin',
                            text: "Xamarin is a popular framework for hybrid mobile app development that allows you to build mobile applications for iOS and Android using C# and .NET.",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={[]}
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
                            question: "What is a hybrid mobile app?",
                            answer:
                                (<> A hybrid mobile app is a type of mobile application that combines elements of both native and web applications. It is built using web technologies (HTML, CSS, and JavaScript) and wrapped in a native container for distribution. </>),
                        },
                        {
                            question: "What are the advantages of hybrid mobile app development?",
                            answer:
                                (<> 1. Cost-effective development. <br /><br />
                                    2. Cross-platform compatibility. <br /><br />
                                    3. Faster development cycles. <br /><br />
                                    4. Access to device features through plugins. <br /><br />
                                    5. Single codebase for multiple platforms. </>),
                        },
                        {
                            question: "Which frameworks are commonly used for hybrid mobile app development?",
                            answer:
                                (<> Ionic, React Native, Xamarin, PhoneGap (Cordova), and Flutter are popular frameworks for hybrid mobile app development. </>),
                        },
                        {
                            question: "How does a hybrid app differ from a native app?",
                            answer:
                                (<> Native apps are developed for a specific platform (iOS or Android) using platform-specific languages (Swift/Obj-C for iOS, Java/Kotlin for Android), while hybrid apps use web technologies and can run on multiple platforms. </>),
                        },
                        {
                            question: "Are hybrid apps as performant as native apps?",
                            answer:
                                (<> Hybrid apps might not perform as well as native apps in certain scenarios, especially for graphics-intensive or complex applications. However, advancements in hybrid frameworks have improved performance significantly. </>),
                        },
                        {
                            question: "What is the role of WebView in hybrid app development?",
                            answer:
                                (<> WebView is a component that allows displaying web content within a native app. In hybrid development, the WebView is used to render the user interface of the application. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}