import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import NewHomeHear from '@/components/NewHomeHear'
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities2d from '@/components/Capabilities2d';
import Faqs from '@/components/NewhomeFaqs';
import NewBanner from '@/components/NewBanner';
import CrossMaintainlogo from '@/components/CrossMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import CrossBanner from '@/components/CrossBanner';
import Bullet2dproofgame from '@/components/Bullet2dproofgame';
import Genreof2dgames from '@/components/Genreof2dgames';
import Engage2d from '@/components/Engage2d';
import Newsuccess from '@/components/NewMblSuccess';
import Technologieswe2dgame from '@/components/Technologieswe2dgame';
import Wealth2d from '@/components/Wealth2d';
import NewiosPortFolio from '@/components/NewiosPortFolio';
import Partnercross from '@/components/Partnercross';
import NewMblWhy from '@/components/NewMblWhy';


//Icons
import icon23 from '../public/images/fyicons/19.png'
import icon24 from '../public/images/fyicons/20.png'
import icon25 from '../public/images/fyicons/21.png'
import icon26 from '../public/images/fyicons/22.png'
import icon27 from '../public/images/fyicons/23.png'
import icon28 from '../public/images/fyicons/24.png'

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <CrossBanner />
            <NewHomeAbout />
            <Partnercross />
            <CrossMaintainlogo />
            <Justbuildit />
            <NewMblWho />
            <NewMblWhat />
            <NewMblWhy 
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Reaching More Users"
                titleTwo="Smooth Development"
                titleThree="Consistent Experience"
                titleFour="Simplified & Easy Maintenance"
                titleFive="Investments Built to Last"
                titleSix="Improved Engagement"
                paraOne="Cross-platform apps work across iOS, Android, web, and other platforms to access a global target market."
                paraTwo="Cross-platform app developers build multiple platforms from one codebase, which reduces development time, resources, and costs."
                paraThree="Cross-platform applications allow a unified UI/UX across devices for brand consistency."
                paraFour="Our cross-platform app developers improve updates and bug fixes with a shared codebase issued simultaneously across platforms."
                paraFive="Apps that are cross-platform may be used on new gadgets and platforms without having to be rebuilt."
                paraSix="At BitsWits, professional cross-platform app developers focus on smooth customer engagement and experience."
            />
            <NewiosPortFolio />
            <Newsuccess />
            <section className='spacingtb1'>
            <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject />
            <Faqs />
            <HomeLocation />


        </>
    )
}
