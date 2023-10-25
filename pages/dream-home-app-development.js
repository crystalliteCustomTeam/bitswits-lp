import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
import Banner from '@/components/CaseBanner'
import CaseGlamic from '@/components/CaseGlamic';
import CaseWants from '@/components/CaseWants';
import CaseGoal from '@/components/CaseGoal';
import CaseOvercoming from '@/components/CaseOvercoming';
import CaseAnimate from '@/components/CaseAnimate';
import CaseServices from '@/components/CaseServices';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import Capabilities from '@/components/Capabilities';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Faqs from '@/components/NewhomeFaqs';
import HomeLocation from '@/components/HomeLocation';
//images
import banLogo from '../public/images/case-dreamhome/banner-logo.png'
import banImg from '../public/images/case-dreamhome/banner-img.png'
import glamicImg from '../public/images/case-dreamhome/glamic.png'
import goalImg from '../public/images/case-dreamhome/goal.png'
import animiImg1 from '../public/images/case-dreamhome/animi1.png'
import animiImg2 from '../public/images/case-dreamhome/animi2.png'
import animiImg3 from '../public/images/case-dreamhome/animi3.png'
import servImg from '../public/images/case-dreamhome/services.png'


export default function RealState() {

    const [showComponent, setShowComponent] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowComponent(true);

        }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

        return () => clearTimeout(timeout);
    }, []);


    return (
        <>
            <Head>
                <title>BitsWits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                banLogo={banLogo}
                title={<> our Dream Home, One Tap Away </>}
                banImg={banImg}
                bannerClass='dreamhome'
            />

            <CaseGlamic
                title={<> About Glamic:For </>}
                text1={<> A platform that offers beauty services and earning opportunities all under one roof. Glow and grow with the Glamic app offering an incredible user experience. </>}
                text2={<> BitsWits shakes hands with Glamic to create a business-to-consumer Android and iOS app-based platform where pro beauticians and stylists are crowded and can list their services through the service provider interface. </>}
                subtitle={<> Looking for <br /> something similar? </>}
                subtext={<> Our consultants are ready to hear your idea. Request a free consultation with our app experts and transform it into a digital reality. </>}
                foldImg={glamicImg}
                title2={<> Be Glamorous and Gorgeous Always! - Glamic </>}
                text3={<> Glamic is a mobile application that offers an independent platform to search instantly and conveniently book appointments with trusted freelance makeup artists, hairdressers, stylists, beauty specialists, etc., nearby their location. </>}
                text4={<> The app provides an opportunity for beauty professionals to promote their services seamlessly by setting up their professional profiles on the service provider interface. The app has three user personas: the consumer interface, the service provider interface, and the App admin panel (web). </>}
                title3={<> Where We Started: </>}
                text5={<> The idea behind the Glamic app is to create a pooled connection and link fashion experts and consumers in Canada. The excessive consumption of time, fuel, and impersonal efforts were the main reasons for the emergence of the Glamic app. </>}
                text6={<> However, things have changed a lot after Glamic stepped in; individuals can now avail the services from nearby fashion experts right away by just tapping on the Glamic app to find the listed service providers. A hassle-free journey for consumers and service providers. </>}
                text7={<> The client approached BitsWits with this idea, and as usual, BitsWits initiated the pre-development phase of Glamic right from scratch by strictly sticking up to the core concept of the client. As the client wanted the app for both the Android and Apple stores, the best option is to opt for the native ground, and so the expert team of BitsWits did by choosing React Native as a tech for the front end and Node.js for the backend of the app. </>}
            />

            <CaseWants
                title={<> What Client Wants: </>}
                text1={<> A functional Native App (Android + iOS) </>}
                text2={<> Stunning App Interface </>}
                text3={<> Consumer and Service Provider Profiles </>}
                text4={<> Onboarding of Authorized Service Provider Professionals </>}
                text5={<> Easy consumer accessibility to the service provider listings </>}
                text6={<> A Super Admin Panel that manages all kinds of queries/ appointments/ payments </>}
                text7={<> Real-time chat connection between consumers and service providers </>}
                text8={<> An efficient Payment Module with diverse options </>}

                title2={<> The Challenges BitsWits Faces During This Project </>}
                text9={<> A functional Native App (Android + iOS) </>}
                text10={<> Stunning App Interface </>}
                text11={<> Consumer and Service Provider Profiles </>}
                text12={<> Onboarding of Authorized Service Provider Professionals </>}
                text13={<> Easy consumer accessibility to the service provider listings </>}

                title3={<> BitsWits' Role: </>}
                text14={<> A functional Native App (Android + iOS) </>}
                text15={<> Stunning App Interface </>}
                text16={<> Consumer and Service Provider Profiles </>}
                text17={<> Onboarding of Authorized Service Provider Professionals </>}
                text18={<> Easy consumer accessibility to the service provider listings </>}
                text19={<> A Super Admin Panel that manages all kinds of queries/ appointments/ payments </>}
                text20={<> Real-time chat connection between consumers and service providers </>}
                text21={<> An efficient Payment Module with diverse options </>}
                para={<> Glamic opted for BitsWits as they wanted a development partner who understood their goals and shared the same business values. BitsWits's role in the development sector was not different; the team of BitsWits expressed all that they got in their pace to make this Glamic project shine. </>}
                wantsClass='dreamhome'
            />

            <CaseGoal
                golImg={goalImg}
                title={<> Take a step toward your beauty goals from the comfort of your couch with just a few taps on our app! </>}
                goalClass='dreamhome'
            />

            <CaseOvercoming
                title1={<> Overcoming the Challenges: </>}
                text1={<> As among the top-tier app development firms, BitsWits always has a magic wand in the guise of competent developers that wows the clients with the greatest outcomes. </>}
                title2={<> Hybrid Development Approach </>}
                text2={<> Instead of sticking to a linear development approach, BitsWits used a Hybrid approach that includes a Waterfall Approach to target the project end date as well as an Agile approach to accept changes and mold the project in any direction at any phase of development. </>}
                title3={<> Tackling Time-zone Clashes </>}
                text3={<> The core challenge was managing time zones throughout the app to enable millions of users from diverse parts of Canada to view their services and availability periods. To address this, developers created an effective model that instructs the system to display the service providers' available hours according to time zone and integrated the Google Map API for geolocation-related issues. </>}
                title4={<> Bridging Communication Gap </>}
                text4={<> BitsWits integrated Rocket Chat as a one-on-one end-to-end encrypted chat resource for consumers and service providers, offering chat confidentiality and mitigating misinterpretation to bridge the communication gap. </>}
                title5={<> Payment Disputes </>}
                text5={<> BitsWits used the Stripe payment method to manage all types of transactions that took place within the application and created an automated dispute portal to deal with the concerns of payment disputes. BitsWits proceeded with a profile-based criterion to provide consumer reviews and ratings to address the trust issues. </>}
                title6={<> What We Delivered </>}
                text6={<> The end product was a devastating native application with a plethora of high-end features, like pre-appointment, personalized schedules, freelancer profiles, online payment facility, in-app real-time chat, admin/consumer/service provider interfaces, reviews, and ratings, making it easy to rely on and recommend. The client was truly enamored and expressed heartfelt kudos to the committed staff at BitsWits for their exceptional job. </>}
            />

            <CaseAnimate
                animiImg1={animiImg1}
                animiImg2={animiImg2}
                animiImg3={animiImg3}
            />

            <CaseServices
                title={<> Services:For </>}
                text1={<> Native Mobile App Development </>}
                text2={<> Stunning UI/UX Design </>}
                text3={<> Consumer/ Service Provider Interface </>}
                servImg={servImg}
            />

            <NewHomeGlobal />
            <Capabilities />
            <NewHomeSlider />
            <Technologieswe />
            <Homenextproject />
            <Faqs />
            <HomeLocation />

        </>
    )
}
