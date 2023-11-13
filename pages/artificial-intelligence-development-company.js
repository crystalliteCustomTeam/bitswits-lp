import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import ServicesBanner from '@/components/ServicesBanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import ServicesMaintain from '@/components/ServicesMaintain';
import NewAddress from '@/components/NewAddress';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import ServicesWho from '@/components/ServicesWho';
import ServicesWhat from '@/components/ServicesWhat';
import ServicesPortfolio from '@/components/ServicesPortfolio';
import Capabilities from '@/components/Capabilities';
import Newsuccess from '@/components/NewMblSuccess';
import Technologieswe from '@/components/Technologieswe';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import Homenextproject from '@/components/Homenextproject';
import ServicesFaqs from '@/components/ServicesFaqs';
import HomeLocation from '@/components/HomeLocation';
//images
import BannerImage from "@/public/images/iosbanner/ai.png"
import WhoImage from "@/public/images/aipost/who_image.png"
import WhatImage from "@/public/images/aipost/what_Image.png"


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
                title={<> Artificial Intelligence <br /> Development and Advancement </>}
                text={<> BitsWits welcomes you to the one-stop destination for innovative mobile applications development with <br /> artificial intelligence. Our skilled developers and designers provide forward-thinking <br /> solutions for all your AI development and integration requirements. </>}
                BannerImage={BannerImage}
                assignClass="ai"
            />
            <NewHomeAbout
                title="Clients Love Our AI Solutions"
                subtitle="Hear It from Them"
            />
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
            />
            <NewAddress />
            <Justbuildit />
            <ServicesWho
                subtitle="Our Value Proposition"
                title="With a track record of dedication and innovation, we're not just developers; we're passionate problem-solvers invested in your success."
                text="Hire BitsWits for mobile application development that engages users and generates measurable results. With over a decade of experience, we're the industry's best option."
                WhoImage={WhoImage}
            />
            <ServicesWhat
                subtitle="Why Hire Us"
                title="Is your current app failing to deliver the results you desire?"
                text="We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise."
                WhatImage={WhatImage}
            />
            <ServicesPortfolio
                title={<> Transforming Industries with <span className="grdiant">AI Solutions</span> </>}
            />
            <Capabilities />
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
                            title: 'Kickstart with an MVP',
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
                title="Get Smart With Artificial Intelligence"
            />
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
