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
import BannerImage from "@/public/custommobiledevelopment/banner_image.png"
import WhoImage from "@/public/custommobiledevelopment/who_image.png"
import WhatImage from "@/public/custommobiledevelopment/what_Image.png"


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
                title={<> Custom Mobile Application <br /> Development for Business </>}
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
                            text: 'Contact us without obligation by email or phone and secure your free consultation.',
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
    )
}