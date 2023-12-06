import Head from 'next/head'
import React from 'react';
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const ServicesMaintain = React.lazy(() => import('@/components/ServicesMaintain'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit'));
const ServicesPortfolio = React.lazy(() => import('@/components/ServicesPortfolio'));
const Newsuccess = React.lazy(() => import('@/components/NewMblSuccess'));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const ServicesFaqs = React.lazy(() => import('@/components/ServicesFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const Partnerships = React.lazy(() => import('@/components/Partnerships'));
const Formnewlp = React.lazy(() => import('@/components/Formnewlp'));
const People = React.lazy(() => import('@/components/People'));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const LpChoose = React.lazy(() => import('@/components/LpChoose'));
const LpForm = React.lazy(() => import('@/components/LpForm6'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const WeworkLp = React.lazy(() => import("@/components/WeworkLp6"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
//images
const BannerImage = await import("@/public/images/iosbanner/ai.png");


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
                subtitle="BitsWits is a Home to All Your Demands Regarding"
                title={<> Artificial Intelligence Development and Advancement </>}
                text={<> BitsWits welcomes you to the one-stop destination for innovative mobile applications development with artificial intelligence. Our skilled developers and designers provide forward-thinking solutions for all your AI development and integration requirements. </>}
                BannerImage={BannerImage}
                assignClass="ai"
            />



            <People People="people" />

            <HomeBannerSliderlp />

            <LpForm 
            addresClass='iosclass'
            />

            <Nothing Nothing="nothingLp6" />

            {/* <NewHomeAbout
                title="Clients Love Our AI Solutions"
                subtitle="Hear It from Them"
            /> */}
            <ServicesMaintain
                assignClass="ai"
                subtitle={<> Go an Extra Mile with </>}
                title0={<> Our Advanced </>}
                title={<> Artificial Intelligence Development </>}
                title1={<> Services </>}
                appContent={[]}
                appContent1={
                    [
                        {
                            title: 'Smart Systems',
                            text: 'We create clever systems that can do tasks automatically for your business, can understand information, learn from it, and help make your work easier and faster.',
                            appclass: "app"
                        },
                        {
                            title: (<> Gesture Recognition </>),
                            text: (<> BitsWits specializes in creating technology that can recognize and respond to your movements. Our systems understand gestures like hand waves or nods, allowing you to control devices effortlessly through simple motions. </>),
                            appclass: "app1",
                        },
                        {
                            title: (<> Facial Recognition </>),
                            text: 'Hire us to build technology that can recognize your face, just like a key unlocks a door. Our systems use your unique features to grant access and make interactions easier and more secure.',
                            appclass: "app2",
                        }
                    ]
                }
                appContent2={
                    [
                        {
                            title: 'Location Tracking',
                            text: "We develop location tracking technology using intelligent AI algorithms to monitor the whereabouts of people or things. Our system predicts movement patterns, assisting businesses in effectively managing their assets and making informed decisions.",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={
                    [
                        {
                            title: (<> Motion Sensing </>),
                            text: (<> we merge AI algorithms with motion sensors, enabling high-precision motion detection. Our model training and optimization ensure smooth integration for real-time and reliable motion sensing capabilities. </>),
                            appclass: "app4",
                        },
                        {
                            title: (<> Web Conferencing </>),
                            text: 'At BitsWits, we use smart technology to make online meetings better. Our system has features like automatic note-taking, language translation, and clear video, making virtual meetings easier and more effective.',
                            appclass: "app5",
                        },
                    ]
                }
                appContent4={[]}
                appContent5={[]}
                appContent6={[]}
                appContent7={[]}
            />



            {/* <NewAddress /> */}

            <WeworkLp wework="weworkLp6" />

            <StartupsLp startups="startups" />

            <ProjectProcess
                processclass="processLp6"
                title="Explore Our Artificial Intelligence App Development Journey"
                desc="We believe in efficiency without compromising quality. Our
  streamlined process for app development is <br /> designed to be
  transparent and collaborative, ensuring your vision comes to life
  exactly as you imagined."
            />



            <Justbuildit />
            {/* <ServicesWho
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
            /> */}


            <LpChoose transform="hybirf" />


            <ServicesPortfolio
                title={<> Showcasing Our <span className="newfycolr">Creative Vision</span> </>}
            />
            {/* <Capabilities /> */}
            <Newsuccess
                assignClass="spacing"
                subtitle="Ready for Success?"
                maintitle={<> Accelerate Your Growth With <br /> AI Solutions </>}
                successSteps={
                    [
                        {
                            number: '01',
                            title: 'Consult Our Specialists',
                            text: 'Reach out to our specialists without any hesitation via email or call to attain a free consultation.',
                            buttonText: 'Connect Now!',
                            link: '#',
                        },
                        {
                            number: '02',
                            title: (<> Request a <br /> Quote </>),
                            text: 'Get a detailed cost breakdown for your app development project.',
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


            {/* <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject
                title="Get Smart With Artificial Intelligence"
            /> */}

            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <ServicesFaqs
                faqsData={
                    [
                        {
                            question: "What AI services does BitsWits offer?",
                            answer:
                                (<> BitsWits provides AI consulting, custom AI solutions development, and AI integration services. </>),
                        },
                        {
                            question: "How long does AI development with BitsWits usually take?",
                            answer:
                                (<> The timeline depends on the project's complexity but typically ranges from a few months to a year. </>),
                        },
                        {
                            question: "What kind of support does BitsWits offer post-deployment?",
                            answer:
                                (<> BitsWits provides ongoing support and maintenance to ensure the smooth functioning and optimal performance of AI solutions. </>),
                        },
                        {
                            question: "What industries does BitsWits specialize in for AI development?",
                            answer:
                                (<> BitsWits has extensive experience in providing AI solutions for industries such as healthcare, finance, retail, and manufacturing, among others. </>),
                        },
                        {
                            question: "Does BitsWits offer AI maintenance services after the project is completed?",
                            answer:
                                (<> Yes, BitsWits provides ongoing AI maintenance services, including updates and optimizations for continued performance. </>),
                        },
                        {
                            question: "Can BitsWits help in the integration of AI-driven analytics for data insights?",
                            answer:
                                (<> Absolutely, BitsWits specializes in integrating AI-driven analytics to provide valuable data insights for informed decision-making and improved business strategies. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}
