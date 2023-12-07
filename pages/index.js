import SwiperSlider from '@/components/SwiperSlider';
import Head from 'next/head'
import React from 'react';
//components
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const HomeBannerSliderlp = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const NewHomeWho = React.lazy(() => import('@/components/NewHomeWho'));
const NewHomeWhat = React.lazy(() => import('@/components/NewHomeWhat'));
const Justbuildit = React.lazy(() => import('@/components/Justbuildit'));
const NewHomeHear = React.lazy(() => import('@/components/NewHomeHear'));
const NewMaintain = React.lazy(() => import('@/components/NewMaintain'));
const Globallplp6 = React.lazy(() => import("@/components/Globallplp6"));
const ProjectProcess = React.lazy(() => import("@/components/ProjectProcessLp6"));
const Technologieswe = React.lazy(() => import('@/components/Technologieswe'));
const Formnewlp = React.lazy(() => import('@/components/Formnewlp'));
const Faqs = React.lazy(() => import('@/components/NewhomeFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const BannerImage = await import("@/public/andriodapplication/andriod.png");


export default function Home() {

    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ServicesBanner
                subtitle="Top Mobile App Development Company"
                title={<> Empowering Brands with Big <br /> Dreams and Innovative Visions </>}
                BannerImage={BannerImage}
                assignClass="homePage"
            />
            <HomeBannerSliderlp
                assignClass="homePage"
            />
            <Nothing Nothing="nothingLp6" />
            <NewHomeWho />
            <NewHomeWhat />
            <Justbuildit />
            <NewHomeHear />
            <NewMaintain />
            <Globallplp6 />
            <ProjectProcess
                processclass="processLp6"
                title="Our App Development Process"
                desc="We believe in efficiency without compromising quality. Our
                      streamlined process for app development is <br /> designed to be
                      transparent and collaborative, ensuring your vision comes to life
                      exactly as you imagined."
            />
            <Technologieswe />
            <Formnewlp />
            <Faqs />
            <HomeLocation />
        </>
    )
}
