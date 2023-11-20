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
const BannerImage = await import("@/public/andriodapplication/andriod.png");
const WhoImage = await import("@/public/images/andriodtaile/who_image.png");
const WhatImage = await import("@/public/images/andriodtaile/what_Image.png");
//icons 
const icon23 = await import('../public/images/fyios/1.png');
const icon24 = await import('../public/images/fyios/2.png');
const icon25 = await import('../public/images/fyios/3.png');
const icon26 = await import('../public/images/fyios/4.png');
const icon27 = await import('../public/images/fyios/5.png');
const icon28 = await import('../public/images/fyios/6.png');


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
                subtitle="Reimagine Possibilities With"
                title={<> Our iOS App <br /> Development Company </>}
                text={<> Our iOS development team works with you to determine the ideal features, design, and user <br /> experience that will make your app a success. We also take care of all the technical details, including <br /> testing and security measures. </>}
                BannerImage={BannerImage}
            />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
            />
            <ServicesMaintain
                assignClass="ios"
                subtitle="iOS App Development Services"
                title1={<> Craft Incredible Apps </>}
                title2={<> Hire an iOS App Developer! </>}
                text={<> As a premier iOS app development company, our iOS developers create eye-catching and user-friendly iPhone and iPad apps that capture attention immediately. To develop customized applications that are appropriate for Apple devices, our professional iOS developers and designers make use of the newest iOS capabilities. </>}
                appContent={[]}
                appContent1={
                    [
                        {
                            title: 'Custom iOS App Development',
                            text: 'Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs.',
                            appclass: "app"
                        },
                        {
                            title: (<> iPhone App <br /> Development </>),
                            text: 'We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time.',
                            appclass: "app1",
                        },
                        {
                            title: 'Apple Watch Development',
                            text: 'Our team of expert iOS developers create exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance.',
                            appclass: "app2",
                        }
                    ]
                }
                appContent2={
                    [
                        {
                            title: 'Apple TV App Development',
                            text:
                                "Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality!",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={
                    [
                        {
                            title: 'iPhone App Designing',
                            text: 'Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.',
                            appclass: "app4",
                        },
                        {
                            title: 'Hybrid iPhone App Development',
                            text: 'Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more.',
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
                sub1="Why Do You Require Our iOS Applications?"
                sub2="Building your mobile app acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape the trajectory of your business."
                whyData={
                    [
                        {
                            icon: icon23,
                            title: "Stunning and Intuitive Designs",
                            para: "Our iOS developers craft pixel-perfect iOS apps with beautiful and latest designs for Apple devices.",
                        },
                        {
                            icon: icon24,
                            title: "Expert Development",
                            para: "Expert iOS developers at BitsWits know about Swift and Xcode and utilize the latest iOS features for perfect user experiences.",
                        },
                        {
                            icon: icon25,
                            title: "High Performing Apps",
                            para: "We build powerful and high-performing iOS applications that are stable, smooth, and fast.",
                        },
                        {
                            icon: icon26,
                            title: "Apple Guidelines Compliance",
                            para: "For optimal App Store optimization, our iOS developers stick to Apple's strict interface rules and standards of excellence.",
                        },
                        {
                            icon: icon27,
                            title: (<> Continuous <br /> Support </>),
                            para: "We provide on-going support and maintenance to keep your applications updated with high-quality services.",
                        },
                        {
                            icon: icon28,
                            title: "Open Communication",
                            para: "Our iOS developers ensure open dialogues and total transparency throughout the development process.",
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
                            question: "What are the stages and costs involved in iOS app development?",
                            answer:
                                (<> iOS development is a complex process that requires careful planning and budgeting. The stages of iOS development involve concepts to launch. The first stage is concept creation, which involves coming up with an idea for an app and determining how it will be designed and developed. Next comes the design phase, where developers create wireframes that help define the look and feel of an app. After that, the development stage begins, where coding and testing take place. Finally, the launch stage involves ensuring the app is compliant with Apple standards and distributing it through either the App Store or other means. </>),
                        },
                        {
                            question: "What are the types of iOS development?",
                            answer:
                                (<> iOS development is an incredibly versatile field. Whether
                                    you're creating a brand-new app, tweaking an existing one,
                                    or developing a mobile-friendly website, there are several
                                    different types of iOS development to explore. Here's a look
                                    at some of the most popular:
                                    <br /><br />1. Native Development: This type of development
                                    involves using Apple's Xcode IDE and the official SDK to
                                    create apps that are specifically designed for iOS devices.
                                    Native development is popular because it takes full
                                    advantage of all the latest features available on iOS,
                                    including access to device hardware and software libraries.
                                    <br /><br />2. Cross-Platform Development: This type of
                                    development involves creating a single app that can be used
                                    on both iOS and Android devices. Cross-platform development
                                    is becoming increasingly popular as it reduces the need to
                                    develop multiple versions of the same app.
                                    <br /><br />3. Web Development: This type of development
                                    involves creating a mobile-friendly version of an existing
                                    website using HTML, CSS, and JavaScript technologies. Web
                                    development is ideal for companies that want their users to
                                    access content on the go.
                                    <br /><br />4. Hybrid App Development: This type of development
                                    combines elements of native and web development to create an
                                    app that is both functional and visually appealing. It’s
                                    ideal for companies who want a custom solution that looks
                                    great on any device.
                                    <br /><br />No matter what type of iOS development you choose,
                                    a well-designed and optimized app can help your business
                                    stand out from the competition. With the right iOS and
                                    android app developer such as BitsWits, you can create an
                                    amazing user experience that will keep customers coming back
                                    for more. </>),
                        },
                        {
                            question: "Why you should consider investing in iOS app development?",
                            answer:
                                (<> Investing in iOS app development company is a great way to
                                    ensure that your business stands out from the competition.
                                    Here’s how:
                                    <br /><br />1. Increased Brand Visibility: Developing an iOS
                                    app can make your business more visible to potential
                                    customers, allowing them to easily find and use your
                                    services. This is especially useful if you want to reach a
                                    wider audience outside of your traditional local area.
                                    <br /><br />2. Improved Customer Engagement: By giving
                                    customers the ability to access and interact with your
                                    services via an iOS app, you can improve customer engagement
                                    and build stronger relationships with them. This in turn
                                    could lead to an increase in sales or a more loyal customer
                                    base.
                                    <br /><br />3. Increased Efficiency: Developing an iOS app can
                                    streamline processes such as ordering products or services,
                                    making payments, and scheduling appointments. By automating
                                    many of these tasks, you can save time and money, allowing
                                    you to focus on other areas of your business.
                                    <br /><br />4. Improved Security: iOS apps are more secure than
                                    other platforms, providing an added layer of protection for
                                    customer data. This can help to give customers peace of mind
                                    that their information is being kept safe and secure when
                                    using your services.
                                    <br /><br />Overall, investing in iOS app development company
                                    is a smart decision that can benefit your business in
                                    numerous ways. </>),
                        },
                        {
                            question: "What are the programming language(s) for iOS development?",
                            answer:
                                (<> The best programming language for iOS development depends on
                                    the app you want to create. If you’re just starting,
                                    consider learning Swift—Apple’s modern and intuitive coding
                                    language. It features a streamlined syntax that makes it
                                    easy to learn, and its versatile nature allows developers to
                                    create everything from simple apps with minimal code to
                                    advanced applications with elaborate features. Objective-C
                                    is another popular choice for the apple app development
                                    language, and if you’ve already written apps in this
                                    language, it might be a good option to stick with it. Both
                                    languages are supported by Apple, so the decision ultimately
                                    comes down to personal preference and what's most
                                    comfortable for you. </>),
                        },
                        {
                            question: "What is Swift iOS app development?",
                            answer:
                                (<> Swift iOS App Development is the process of creating,
                                    coding, and designing mobile applications for Apple's iOS
                                    operating system. With Swift being an open-source language,
                                    it allows developers to develop apps quickly with fewer code
                                    lines and robust features. The result? A faster, more
                                    efficient development process that produces exceptionally
                                    designed, user-friendly applications. For those who are
                                    looking for an innovative and reliable way to build their
                                    app, Swift is a perfect choice. From simple games to complex
                                    enterprise solutions – whatever you need, iOS App
                                    Development with hire swift developers has you covered! </>),
                        },
                        {
                            question: "What are iOS app development services?",
                            answer:
                                (<> iOS app development company help businesses create custom,
                                    engaging, and user-friendly applications for Apple's iOS
                                    platform. With their experienced professionals, they provide
                                    comprehensive services to develop an app that fits your
                                    business needs and stands out from the competition. They are
                                    well-versed in the latest iOS technologies and have a proven
                                    track record of developing apps for both the App Store and
                                    enterprise solutions. Whether you need an app to increase
                                    customer engagement or expand your market reach, iOS app
                                    development company will help take your business to the next
                                    level. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}
