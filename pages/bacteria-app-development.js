import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ColorHarmony.module.css'
//components
import Banner from '@/components/BacteriaBanner'
import OverView from '@/components/OverView'
import Challenge from '@/components/Challenge';
import Solutions from '@/components/Solutions';
import Profilecreation from '@/components/Profilecreation'
import ColorHarmony from '@/components/ColorHarmony';
import Horizons from '@/components/Horizons';
import SoulCTA from '@/components/SoulCTA';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import Capabilities from '@/components/Capabilities';
import NewHomeSlider from '@/components/NewHomeSlider';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Faqs from '@/components/NewhomeFaqs';
import HomeLocation from '@/components/HomeLocation';
//images
import foldImg from '../public/images/case-becteria/beats.svg'
import foldImg00 from '../public/images/case-becteria/horizons.svg'

export default function bacteriaapp() {

  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);

    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timeout);
  }, []);


  const headingbanner = <h1 className='white fontf font-bold'>GERM-GUARD</h1>
  const para1 = <h3 className='white fontf font-bold'>Bacteria-Free Living <br /> Made Possible With <br /> Our Shield App!.</h3>
  const para2 = <p className='white fontf font-medium'>BitsWits created a scalable and personalized cleaning services application with effortless appointment scheduling, booking, and payment integration. The instant reservation management feature has enhanced the brand image and increased customer loyalty – Germ-Guard reported an astonishing 70% in progress within just days of launching the app!</p>

  const CaseOverView = [
    {
      title: 'Overview',
      text: 'Germ-Guard is a cutting-edge cleaning company with headquarters in the USA. Their network in the USA includes more than 500 plus workforce of cleaning companies. Not only this, but they provide on-demand neighborhood cleaning services as well. The company intended to revolutionize the cleaning sector for commercial, residential, and industrial properties in the USA by connecting homeowners with verified, trained, and insured cleaners..',
      imagefold: foldImg,
      caseOverView: 'caseOverView'
    }
  ]

  const newspan = <span>The <br /> Problem</span>

  const CaseChallengs = [
    {
      title: newspan,
      text: 'The client`s overarching objective was to create a mobile application to help users clean and disinfect their surroundings, such as homes, offices, and public places. The client was in a quandary about the features that must be included in the app. Not only this, but they also talked about the potential benefits of creating a bacteria app. The client also requested to make the mobile application user-friendly and available on various platforms like iOS and Android.',
      caseChallengs: 'caseChallengs'
    }
  ]

  const newspan2 = <span>The <br /> Solutions</span>

  const CaseSolutions = [
    {
      title: newspan2,
      text: 'To begin with, our client and the BitsWits team held a thorough brainstorming session to comprehend their requirements and business strategy. Our highly-skilled team shed light on some potential benefits of bacteria app development. Based on our conversation, we created the Germ-Guard app, which streamlines, trusts, and affordably provides cleaning services for homes and businesses.',
      caseSolution: 'caseSolution'
    }
  ]

  const demo = <h4 className='font30 fontf font-bold white'>One-Tap Booking</h4>
  const demo1 = <p className='font16 fontf font-medium mt-1 mb-0 white'>With this feature, customers can easily book a cleaning service at any time of day or night without having to go through the hassle of calling multiple companies and comparing prices. Customers can also select from services such as deep cleaning, carpet cleaning, and area rug cleaning.</p>

  const profile = <h4 className='font30 fontf font-bold white '>Check Cleaner Availability</h4>
  const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0 white'>With this feature, users can check the availability of different cleaners in their area quickly and easily. It helps to ensure they get the best service at the most convenient time. It helps customers save time by allowing them to identify the best-suited cleaners for their needs quickly.</p>

  const push = <h4 className='font30 fontf font-bold white '>View Bookings</h4>
  const push1 = <p className='font16 fontf font-medium  mt-1 mb-0 white'>The view bookings feature is an excellent advantage for those who need to schedule their cleaning services in advance, as it eliminates the need for phone calls or emails. This way, customers can select the date and time of their appointment, view available options for the service, and even make changes if needed.</p>

  const media = <h4 className='font30 fontf font-bold white '>Secure Payments</h4>
  const media1 = <p className='font16 fontf font-medium  mt-1 mb-0 white'>With secure payments, customer data such as credit card numbers and other personal information are encrypted so that unauthorized third parties cannot access them. It helps protect customers from potentially fraudulent activity while also giving businesses the peace of mind that their data is safe and secure.</p>

  const uncovered = <h2 className='font65 white fontf font-bold line60'>
    BitsWits <br />
    Swept Away  <br />
    The Stress Of  <br />
    Housekeeping!
  </h2>

  const data = <p className='font16 white fontf font-medium line30'>
    Germ-Guard is a revolutionary new cleaning app developed by BitsWits that makes housekeeping a breeze. With Germ-Guard, users can easily keep track of their cleaning schedule and tasks with a click of a button. The user-friendly interface navigates, making it perfect for busy households...
  </p>

  const headfire = <h2 className='font50 white fontN font-bold line60 mb-0'>
    BitsWits <br />
    Uncovered <br />
    New Musical <br />
    Horizons!
  </h2>

  const code1 = <div> <span className={styles.left}>#B266FE</span> </div>
  const code2 = <div> <span className={styles.right}>#000000</span>  </div>
  const heading12 = <h3 className='fontf font50 white center font-bold'>Color Harmony</h3>


  return (
    <>
      <Head>
        <title>BitsWits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Banner
        title={headingbanner}
        para1={para1}
        para2={para2}
      />

      {CaseOverView.map((item, i) =>
        <OverView key={i}
          title={item.title}
          text={item.text}
          imagefold={item.imagefold}
          caseOverView={item.caseOverView}
        />
      )}

      {CaseChallengs.map((item, i) =>
        <Challenge key={i}
          title={item.title}
          text={item.text}
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
        push={push}
        push1={push1}
        media={media}
        media1={media1}
        part='true'
        part1='true'
      />

      <ColorHarmony
        heading={heading12}
        colorbx1='true'
        left={code1}
        right={code2}
        caseHarmony='bacteria'
      />

      <Horizons
        uncovered={uncovered}
        foldImg00={foldImg00}
        data={data}
      />

      <SoulCTA
        headfire={headfire}
        soulCta='soulCtapost'
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
