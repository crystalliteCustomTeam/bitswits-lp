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
const BannerImage = await import("@/public/custommobiledevelopment/banner_image.png");
const WhoImage = await import("@/public/custommobiledevelopment/who_image.png");
const WhatImage = await import("@/public/custommobiledevelopment/what_Image.png");


export default function CustomMobile() {

    return (
        <>
            <Head>
                <title>Custom Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ServicesBanner
                subtitle="BitsWits Is Your One-Stop Shop For"
                title={<> Custom Mobile Application <br /> Development for Businesses </>}
                text={<> BitsWits is your ultimate destination for custom mobile application development for businesses. <br /> We provide comprehensive solutions for companies seeking tailored mobile apps to boost their <br /> operations and customer engagement </>}
                BannerImage={BannerImage}
                assignClass="custom"
            />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <ServicesMaintain
                assignClass="customApp"
                subtitle={<> Go Beyond Expectations With </>}
                title={<> Custom Mobile Application </>}
                title1={<> Development Services </>}
                appContent={[]}
                appContent1={
                    [
                        {
                            title: (<> App <br /> Design </>),
                            text: 'Create an exceptional app with an attractive design, intuitive interface, and convenient user experience.',
                            appclass: "app"
                        },
                        {
                            title: (<> Android App <br /> Development </>),
                            text: (<> Develop high-performing, scalable and native looking apps for Android devices with Kotlin and Java. </>),
                            appclass: "app1",
                        },
                        {
                            title: (<> iOS App <br /> Development </>),
                            text: 'Make intuitive mobile apps with rich functionality for Apple mobile devices with Swift and Objective-C.',
                            appclass: "app2",
                        }
                    ]
                }
                appContent2={
                    [
                        {
                            title: 'Cross-Platform Mobile Development',
                            text: "Build an app that runs across multiple platforms using the same codebase with Flutter or React Native.",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={
                    [
                        {
                            title: (<> Mobile Server-Side <br /> Development </>),
                            text: (<> Setup cloud or hardware infrastructure for app execution, components coordination, and API integrations. </>),
                            appclass: "app4",
                        },
                        {
                            title: (<> Legacy Application <br /> Modernization </>),
                            text: 'Improve performance and throughput, upgrade UX/UI, and add new features to existing mobile apps.',
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
                            question: "What is a custom mobile application?",
                            answer:
                                (<> A custom mobile application is a software program developed specifically for a particular business or organization to meet its unique requirements. It is tailored to address specific needs and goals. </>),
                        },
                        {
                            question: "Why should a business consider developing a custom mobile app?",
                            answer:
                                (<> Custom apps can provide tailored solutions, streamline business processes, enhance user experience, and offer a competitive advantage. They can be designed to meet specific business goals and requirements. </>),
                        },
                        {
                            question: "How does custom app development differ from using off-the-shelf solutions?",
                            answer:
                                (<> Off-the-shelf solutions are pre-built applications designed for a wide audience, while custom apps are built from scratch to address specific business needs. Custom apps offer more flexibility and can be precisely tailored to the organization's requirements. </>),
                        },
                        {
                            question: "What technologies are commonly used in custom mobile app development?",
                            answer:
                                (<> The choice of technologies depends on the platform and specific requirements, but commonly used technologies include Swift and Objective-C for iOS, Java and Kotlin for Android, and frameworks like React Native, Flutter, or Xamarin for cross-platform development. </>),
                        },
                        {
                            question: "How long does it take to develop a custom mobile app?",
                            answer:
                                (<> The development time varies depending on the complexity of the app, features, and the development approach. Simple apps may take a few weeks, while more complex ones could take several months. </>),
                        },
                        {
                            question: "What is the typical cost of developing a custom mobile app?",
                            answer:
                                (<> The cost varies significantly based on factors such as features, complexity, platform(s), and development time. It's essential to discuss requirements with a development team to get an accurate estimate. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}