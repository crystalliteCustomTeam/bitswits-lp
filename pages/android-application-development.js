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
const BannerImage = await import("@/public/images/iosbanner/ios.png");
const WhoImage = await import("@/public/images/iosbanner/who_image.png");
const WhatImage = await import("@/public/images/iosbanner/what_Image.png");
//icons
const icon23 = await import('../public/images/fyicons/10.png');
const icon24 = await import('../public/images/fyicons/11.png');
const icon25 = await import('../public/images/fyicons/12.png');
const icon26 = await import('../public/images/fyicons/13.png');
const icon27 = await import('../public/images/fyicons/14.png');
const icon28 = await import('../public/images/fyicons/15.png');


export default function gamedevelopmentcompany() {

    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <ServicesBanner
                subtitle="Revolutionizing & Creating A Smarter Future"
                title={<> Android App <br /> Development Company </>}
                text={<> At BitsWits, we specialize in creating custom-crafted Android applications that meet our customer's <br /> needs. Our android app development team firmly believes that no two businesses are the same, <br /> and neither should their apps be. </>}
                BannerImage={BannerImage}
            />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <ServicesMaintain
                assignClass="android"
                title1={<> Leveling Up Your App Game With Our Slew of </>}
                title2={<> Android App Development </>}
                title3={<> Service! </>}
                appContent={[]}
                appContent1={
                    [
                        {
                            title: 'Custom Android App Development',
                            text: 'Our expert Android development team can help take your business to the next level with custom Android mobile app development services. Let us create stunning visuals, intuitive interfaces, and robust security features to keep you ahead of the competition. Contact us today to get started.',
                            appclass: "app"
                        },
                        {
                            title: (<> Android App <br /> Integration </>),
                            text: 'Need help integrating your Android app with other software systems and APIs? Look no further. Our expert Android development team is here to assist you in streamlining the process, ensuring your users have a seamless experience with enhanced functionality. Let us help take your app to the next level.',
                            appclass: "app1",
                        },
                        {
                            title: (<> Android Game <br /> Development </>),
                            text: 'Do you plan to produce an exceptional Android mobile game that will captivate your audience? Worry no more, as our team of Android game developers can provide you with the best assistance in developing exciting and irresistible games that will keep your users hooked and always craving more.',
                            appclass: "app2",
                        }
                    ]
                }
                appContent2={
                    [
                        {
                            title: 'Android Wear Development',
                            text: "Expand your reach in the wearable market with our expert Android developers. Our advanced Android Wear solutions will give you a competitive edge and elevate your brand visibility. Allow us to help you take your enterprise to new heights.",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={
                    [
                        {
                            title: 'Enterprise Android Apps',
                            text: (<> We can help streamline your business operations with our enterprise Android app development services. Our solutions cover all aspects, from employee communication and data management to workflow optimization. Contact us to learn more. </>),
                            appclass: "app4",
                        },
                        {
                            title: 'Android UI/UX Design',
                            text: 'Our team of experienced Android designers can assist you in crafting visually appealing and user-friendly interfaces for your Android app. With our expertise, we can enhance user engagement and ensure a seamless user experience.',
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
                sub1="Why is There a Need for Android Applications?"
                sub2="Achieve a competitive edge, boost revenue, and engage customers effectively with an Android app. BitsWits excels in creating personalized, future-ready apps to expand your market reach."
                whyData={
                    [
                        {
                            icon: icon23,
                            title: "Extensive Audience Reach",
                            para: "Android is the most widely used mobile operating system globally, which means it can aid your business to reach potential customers globally.",
                        },
                        {
                            icon: icon24,
                            title: "Prominence in the App Store",
                            para: "Android apps have high discoverability in the Play Store due to its extensive user base, robust search algorithm, and easy downloading.",
                        },
                        {
                            icon: icon25,
                            title: "Flexible UI Design Features",
                            para: "Apps run smoothly on smartphones, tablets, mobile devices, and other devices due to Android's support for flexible UI design.",
                        },
                        {
                            icon: icon26,
                            title: "Feature Incorporation",
                            para: "Apps leverage Android's unique features like widgets, AI, and alerts. We ensure seamless integration, delivering the best user experience.",
                        },
                        {
                            icon: icon27,
                            title: "Brand Visibility and Recognition",
                            para: "Android app offers a direct and interactive channel for users to engage with your brand on their mobile devices.",
                        },
                        {
                            icon: icon28,
                            title: "Economical and Cost-Effective",
                            para: "Android apps can reach a wide audience without the need for expensive hardware or software, reducing development and distribution costs.",
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
                            question: "What is best language for Android app development?",
                            answer:
                                (<> Android app development is a complex process that requires a deep understanding of the best language for it. Java has been the traditional go-to language for the android mobile app development company, but there are other options worth considering. Kotlin and C++ are both languages that have become popular in recent years. They offer different levels of performance and abstraction, so you can choose the language which best suits your app's needs. </>),
                        },
                        {
                            question: "What is Android development?",
                            answer:
                                (<> Mobile app development android is the process of creating mobile applications for Android devices. It involves writing code in Java and Kotlin, integrating APIs, designing apps with a great user experience, and more. With Android's large market share and open-source nature, it is one of the best platforms for app developers to create innovative applications that can reach millions of users. Android development is also an ever-evolving field as new technologies, frameworks, and APIs are frequently released by Google and other third parties. By developing with Android, developers can create powerful apps that have the potential to revolutionize the way we use mobile devices today. So, get ready to take full advantage of this amazing platform and join the world of Android development now with BitsWits! We are experts in serving you in android and iOS app development. </>),
                        },
                        {
                            question: "How much does it cost to develop an Android app?",
                            answer:
                                (<> Designing an Android app can be a complex and expensive process. But there is no one-size-fits-all answer to the question, "How much does it cost to design an Android app?” The price of developing an Android app varies depending on the type of features, complexity, size, and other elements that need to be included. The android app developer cost can range from a few thousand to hundreds of thousands of dollars, depending on the scope and complexity of the project. The price to build applications for Android includes labor costs, design expenses, hosting fees, and other costs associated with releasing the app in Google Play Store. Professional teams may charge up to [Our Own Bundle Cost], depending on their experience and skill set. </>),
                        },
                        {
                            question: "Who is a Google Android app developer?",
                            answer:
                                (<> Google Android app developer is a one-stop shop for developing and launching Android apps. From creating an app concept to distributing it on Google Play, this team of expert developers has the experience and resources necessary to make your vision come true. Whether you're looking to build a game, create a business tool, or create something completely unique, they have the skills to make it happen. Whatever your needs are, the Google Android app developer is here to help you get started and guide you every step of the way. Don't just dream it; code it! Make your app dreams a reality today with BitsWits. </>),
                        },
                        {
                            question: "What is Android app development using Python?",
                            answer:
                                (<> Android app development using Python is the process of creating native Android applications with the popular coding language Python. This open-source programming language allows you to create powerful and interactive mobile apps that are both feature-rich and user-friendly. With a wide array of libraries, tools, and modules available, developers can quickly build secure and reliable Android apps with minimal effort. Additionally, Python has been optimized for mobile computing and is ideal for producing complex applications that require low-level control over device resources. This makes it a great choice for creating advanced Android apps that are tailored specifically to the needs of mobile users. Whether you're a beginner or an experienced android app developer looking to develop a cutting-edge Android app, it is an excellent choice for python android app development. With its flexibility and power, you can ask for android app developer for hire and create innovative apps that will bring your ideas to life! </>),
                        },
                        {
                            question: "How much does it cost to hire an app developer?",
                            answer:
                                (<> Hiring an app developer to create a great user experience for your business can be costly, but it doesn't have to break the bank. The android app development cost varies widely and depends on many factors such as the complexity of the project, the platform you want your app built for, and any specific features or customization requested. In general, you can expect to pay anywhere from a few thousand dollars up to tens of thousands for more advanced projects. Investing in an experienced app developer can help ensure that your android app dev project is built efficiently and effectively while saving you time and money in the long run. So, if you're looking to create a great user experience with an app, you'll need to hire dedicated android app developer like BitsWits. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}
