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
import BannerImage from "@/public/hybridmbldevelopment/banner_image.png"
import WhoImage from "@/public/hybridmbldevelopment/who_image.png"
import WhatImage from "@/public/hybridmbldevelopment/what_Image.png"


export default function HybridMobile() {

    return (
        <>
            <Head>
                <title>Hybrid Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ServicesBanner
                title={<> Hybrid Mobile Apps <br /> Development Company In USA </>}
                text={<> Bitswits is the go-to hub for all your hybrid mobile app development needs in the USA. We are a leading <br /> technology company that excels in creating cost-effective and efficient hybrid mobile applications for businesses. </>}
                BannerImage={BannerImage}
                assignClass="hybrid"
            />
            <NewHomeAbout />
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
            <ServicesPortfolio />
            <Capabilities />
            <Newsuccess
                assignClass="spacing"
            />
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject />
            <ServicesFaqs
                faqsData={
                    [
                        {
                            question: "How do I get started with app development at BitsWits?",
                            answer:
                                (<> Reach out to us via our contact page, and let's discuss your app idea. </>),
                        },
                        {
                            question: "What types of apps does BitsWits specialize in developing?",
                            answer:
                                (<> We specialize in a wide range of app types, from mobile and web apps to custom enterprise solutions. </>),
                        },
                        {
                            question: "How long does it typically take to develop an app?",
                            answer:
                                (<> Timelines vary based on complexity, but we work efficiently to ensure timely delivery. </>),
                        },
                        {
                            question: "What sets BitsWits apart in terms of customer support?",
                            answer:
                                (<> Our dedicated support team ensures your needs are met throughout the development process and beyond. </>),
                        },
                        {
                            question: "Can you help me with app maintenance and updates post-launch?",
                            answer:
                                (<> Yes, we offer ongoing support and maintenance services to keep your app up-to-date and functioning smoothly. </>),
                        },
                        {
                            question: "How can I stay updated on the progress of my app development project?",
                            answer:
                                (<> We provide regular project updates and encourage open communication to keep you informed every step of the way. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}