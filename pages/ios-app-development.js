import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import NewIOSFaqs from '@/components/NewIOSFaqs';
import IosMaintainlogo from '@/components/IosMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import Iosbanner from '@/components/IosBanner';
import Newsuccess from '@/components/NewMblSuccess';
import NewiosPortFolio from '@/components/NewiosPortFolio';
import NewMblWhy from '@/components/NewMblWhy';

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


//Icons 

import icon23 from '../public/images/fyios/1.png'
import icon24 from '../public/images/fyios/2.png'
import icon25 from '../public/images/fyios/3.png'
import icon26 from '../public/images/fyios/4.png'
import icon27 from '../public/images/fyios/5.png'
import icon28 from '../public/images/fyios/6.png'
import NewIosWho from '@/components/NewIosWho';
import NewIosWhat from '@/components/NewIosWhat';


export default function gamedevelopmentcompany() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Iosbanner />
            <NewHomeAbout />
            <IosMaintainlogo />
            <Justbuildit />
            <NewIosWho />
            <NewIosWhat />
            <NewMblWhy 
                title = { <> <h4 className='font20 font-bold text-white text-center'>Why Bitswits?</h4> </> }
                subtitle = { <> <h2 className='grdiant f-80 font-bold text-center'>Precision,Performance <br /> & Perfection.</h2> </> }
                sub1 = "Why Do You Require Our iOS Applications?"
                sub2 = "Building your mobile app acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape the trajectory of your business."
                iconOne={icon23}
                iconTwo={icon24}
                iconThree={icon25}
                iconFour={icon26}
                iconFive={icon27}
                iconSix={icon28}
                titleOne="Stunning and Intuitive Designs"
                titleTwo="Expert Development"
                titleThree="High Performing Apps"
                titleFour="Apple Guidelines Compliance"
                titleFive="Continuous Support"
                titleSix="Open Communication"
                paraOne="Our iOS developers craft pixel-perfect iOS apps with beautiful and latest designs for Apple devices."
                paraTwo="Expert iOS developers at BitsWits know about Swift and Xcode and utilize the latest iOS features for perfect user experiences."
                paraThree="We build powerful and high-performing iOS applications that are stable, smooth, and fast."
                paraFour="For optimal App Store optimization, our iOS developers stick to Apple's strict interface rules and standards of excellence."
                paraFive="We provide on-going support and maintenance to keep your applications updated with high-quality services."
                paraSix="Our iOS developers ensure open dialogues and total transparency throughout the development process."
            />
            <NewiosPortFolio />
            <Newsuccess />
            <section className='spacingtb1'>
            <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject />
            <NewIOSFaqs />
            <HomeLocation />


        </>
    )
}
