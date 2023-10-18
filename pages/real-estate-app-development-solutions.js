import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ColorHarmony.module.css'
//components
import Banner2 from '@/components/MarkBanner'
import OverView from '@/components/OverView'
import Challenge from '@/components/Challenge';
import Solutions from '@/components/Solutions';
import Profilecreation from '@/components/Profilecreation'
import ColorHarmony from '@/components/ColorHarmony';
import Horizons from '@/components/Horizons';
import SoulCTA from '@/components/SoulCTA';
  
//images
import foldImg from '../public/images/case-mark-place/foldimg.png'
import foldImg00 from '../public/images/case-mark-place/horizons.png'


export default function MarkPlace() {

    const [showComponent, setShowComponent] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowComponent(true);

        }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

        return () => clearTimeout(timeout);
    }, []);

    const newsubttl = <span>Developed A Music <br /> Streaming App For Music <br /> Lovers To Listen To Millions <br /> Of Track.</span>

    const CaseOverView = [
        {
            title: 'Overview',
            subtitle: newsubttl,
            text: 'Real estate apps have a significant impact on how tech-savvy consumers choose their next home. The US National Association of Realtors reports that 51% of purchasers started their search for a home online. Mark Placek Properties, like other businesses, realized it was crucial to make sure real estate brokers incorporated solid real estate UX design standards into apps as the home purchase has become more digital, especially after the Covid19 era. This is the reason they contacted perfectdesignhub.com to design the Real Estate App.',
            imagefold: foldImg,
            caseOverView: 'caseOverView'
        }
    ]

    const CaseChallengs = [
        {
            title: 'The Concept Behind Mark Place',
            text: 'Due to their expertise in the field, the team at bitswits.co aimed to develop the Mark Place Real Estate Application, which would provide a detailed list of properties for sale as well as tools and information to help users make wise real estate decisions. A platform where anyone could look for their ideal home, rent a property, or even sell one. In addition to focusing on the buying and selling of properties, we wanted to create an app that provides essential information on real estate trends and factors to take into account when dealing with real estate properties. A single location where people may go for all of their housing-related needs and easily access a wide range of housing options.',
            caseChallengs: 'caseChallengs'
        }
    ]

    const newtxt3 = <span>Typeface <br /> Used in Application</span>

    const CaseSolutions = [
        {
            title: newtxt3,
            text: 'The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram, Snapchat, and Facebook. Although the idea was unique, people would not buy it if the implementation was not done the right way.',
            caseSolution: 'caseSolution'
        }
    ]

    const demo = <h4 className='font30 fontf font-bold'>Montserrat</h4>
    const demo1 = <p className='font14 fontf font-medium mt-1 mb-0'>The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram,</p>
    const profile = <h4 className='font30 fontf font-bold '>Color Harmony</h4>
    const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0'>The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram,</p>

    const heading = <h2 className='font50 black fontf font-bold line60 text-center mx-auto'>
        Color Harmony
    </h2>
    const left = <div className={styles.left}>#81CCC8</div>
    const mid = <div className={styles.mid}>#A5D1CD</div>
    const right = <div className={styles.right}>#EFEFEF</div>

    const uncovered = <h2 className='font65 black fontf font-bold line60'>
        The Process of <br></br> Elevation:
    </h2>
    const data = <p className='font16 black fontf font-medium line30 mt-4'>
        <b>From Vision to Design Crafting appealing UI Designs</b> <br></br>
        One of the primary challenges was to ensure that the music app performs exceptionally well on all platforms, i.e., Android and iOS. The client wished the app would be accessible to a broad range of users; thus, they asked us to create an app that works on all devices. The client also requested to add a feature that provides personalized recommendations based on listening habits.
    </p>

    const headfire = <h2 className='font50 white fontN font-bold line60 mb-0'>
        BitsWits <br />
        Uncovered <br />
        New Musical <br />
        Horizons!
    </h2>

    return (
        <>
            <Head>
                <title>BitsWits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            {/* {showComponent && (
        <Rated />
      )} */}

            <Banner2 />

            {CaseOverView.map((item, i) =>
                <OverView key={i}
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                    imagefold={item.imagefold}
                    caseOverView={item.caseOverView}
                />
            )}

            {CaseChallengs.map((item, i) =>
                <Challenge key={i}
                    title={item.title}
                    text={item.text}
                    imagefold={item.imagefold}
                    caseChallengs={item.caseChallengs}
                />
            )}

            {CaseSolutions.map((item, i) =>
                <Solutions key={i}
                    title={item.title}
                    text={item.text}
                    caseSolution={item.caseSolution}
                />
            )}

            <Profilecreation
                demo={demo}
                demo1={demo1}
                profile={profile}
                profile1={profile1}
                part='true'
                part1=''
            />

            <ColorHarmony
                heading={heading}
                left={left}
                mid={mid}
                right={right}
                colorbx1=''
                colorbx2='true'
                caseHarmony='mark'
            />

            <Horizons
                uncovered={uncovered}
                foldImg00={foldImg00}
                data={data}
            />

            <SoulCTA
                headfire={headfire}
                soulCta='soulmark'
            />

        </>
    )
}
