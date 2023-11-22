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
const BannerImage = await import("@/public/images/augmentapp/Augmentebanner.png");
const WhoImage = await import("@/public/images/aipost/who_image.png");
const WhatImage = await import("@/public/images/aipost/what_Image.png");


export default function augmentedrealityappsdevelopment() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <ServicesBanner
                subtitle="Empower Your Business with"
                title={<> Top Augmented Reality <br /> App Development Company </>}
                text={<> BitsWits is your ultimate destination for Augmented Reality app development. <br /> Our developers deliver dynamic AR experiences that set your business apart from the rest. </>}
                BannerImage={BannerImage}
            />
            <NewHomeAbout
                title='Clients Love Our AR Solutions'
                subtitle='Hear It from Them'
            />
            <ServicesMaintain
                assignClass="augmented"
                subtitle={<> BitsWits Sets New Standards </>}
                title0={<> Expert </>}
                title={<> Augmented Reality Development </>}
                title1={<> at Your Service! </>}
                appContent={
                    [
                        {
                            title: (<> 2D, 3D, And Isometric <br /> Games Development </>),
                            text: 'We make games super cool by integrating augmented reality elements into 2D, 3D, and Isometric games, creating captivating and dynamic visuals.',
                            appclass: "app01"
                        },
                        {
                            title: (<> Interactive 3D Visual Learning for <br /> Education with AR Technology </>),
                            text: (<> Using AR, we create fun 3D experiences for learning. Our user-friendly designs and activities offer an engaging way to understand things better. </>),
                            appclass: "app02",
                        }
                    ]
                }
                appContent1={[]}
                appContent2={
                    [
                        {
                            title: (<> AR powered Travel Experiences <br /> for the Modern Explorer </>),
                            text: "We develop augmented reality solutions for the travel industry, integrating immersive navigation, virtual tours, interactive guides, and cultural experiences for enhanced travel exploration.",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={
                    [
                        {
                            title: (<> Design Insight and Manufacturing <br /> Digital Models With AR </>),
                            text: (<> Our advanced AR solutions for manufacturing, facilitate precise design insights and digital model visualization to optimize efficiency and streamline production processes effectively. </>),
                            appclass: "app4",
                        },
                        {
                            title: (<> 3D Visual Presentation for Product <br /> Launch Through AR </>),
                            text: 'Our AR solutions offer 3D visual presentations, allowing users to visualize products in real-world contexts and accurately measure space requirements.',
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
                maintitle={<> Accelerate Your Growth With <br /> Augmented Reality Apps </>}
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
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject
                title="Experience AR Brilliance With BitsWits"
            />
            <ServicesFaqs
                faqsData={
                    [
                        {
                            question: "What's the typical timeline for an AR project with BitsWits?",
                            answer:
                                (<> Project timeline varies but usually ranges from a few weeks to a few months. </>),
                        },
                        {
                            question: "Do you offer AR app development, and can it be integrated into existing apps?",
                            answer:
                                (<> Yes, we develop AR applications and can integrate them with existing ones. </>),
                        },

                        {
                            question: "What hardware or devices are required for end-users to access AR experiences developed by BitsWits?",
                            answer:
                                (<> Commonly used devices like smartphones or AR glasses can access our AR experiences. </>),
                        },
                        {
                            question: "Are there any hidden or additional costs that we should be aware of in the AR development process with BitsWits?",
                            answer:
                                (<> We maintain transparency in our pricing, and there are no hidden costs. Any additional expenses will be communicated and agreed upon in advance. </>),
                        },
                        {
                            question: "Does BitsWits provide 24/7 technical support for critical AR applications?",
                            answer:
                                (<> Yes, we offer 24/7 support for mission-critical applications. </>),
                        },
                        {
                            question: "Are there examples or case studies of successful AR projects you've completed?",
                            answer:
                                (<> Yes, we can provide case studies showcasing our work. Sign up now, and our customer support team will be in touch with you. </>),
                        },
                    ]
                }
            />
            <HomeLocation />
        </>
    )
}
