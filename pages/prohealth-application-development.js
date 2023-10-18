import Head from 'next/head'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ColorHarmony.module.css'
//components
import Banner from '@/components/HealthBanner'
import OverView from '@/components/OverView'
import Challenge from '@/components/Challenge';
import Solutions from '@/components/Solutions';
import Profilecreation from '@/components/Profilecreation'
import ColorHarmony from '@/components/ColorHarmony';
import Horizons from '@/components/Horizons';
import SoulCTA from '@/components/SoulCTA';
  
//images
import foldImg from '../public/images/case-health/foldimg.png'
import foldImg00 from '../public/images/case-health/horizons.png'


export default function prohealth() {

  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);

    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timeout);
  }, []);


  const CaseOverView = [
    {
      title: 'Overview',
      text: 'Pro Health has been operating as a local pharmacy in the USA since 1965. The company takes great pleasure in providing timely service and giving patients a one-stop shop for their medication requirements. Among the many services offered by Pro Health, some of the most common are terminal illness care services, medication synchronization, and drug flavoring.',
      imagefold: foldImg,
      caseOverView: 'caseOverView'
    }
  ]

  const newspan = <span>The <br /> Problem</span>

  const CaseChallengs = [
    {
      title: newspan,
      text2: 'Many pharmaceutical applications usually take a "one-and-done" method, meaning: they create an app but don`t continue to maintain it or make it user-friendly. The same was the case with Pro Health. Though the company launched the app but failed to keep the app updated according to the modern developments in the pharmaceutical sector.',
      caseChallengs: 'caseChallengs'
    }
  ]

  const newspan2 = <span>The <br /> Solutions</span>

  const CaseSolutions = [
    {
      title: newspan2,
      text: 'The professionals of BitsWits accepted this challenged and poured in a lot of hard work to build a responsive and user-friendly pharma app that complies with the relevant laws. Our pharma mobile app developers have spent years creating cutting-edge mobile apps for consumers in the retail and pharmaceutical industries. We deployed the following features to ensure a well-functioning app:',
      caseSolution: 'caseSolution'
    }
  ]

  const demo = <h4 className='font30 fontf font-bold'>Sign In</h4>
  const demo1 = <p className='font16 fontf font-medium mt-1 mb-0'>To make food ordering a breeze, the professionals at BitsWits devised sign-in and sign-up options that offer customers expedited access to their contact information. Furthermore, the app is designed with quick navigation features so customers can find what they are looking for effortlessly. With this simple setup, updating customer details whenever desired has never been easier.</p>

  const profile = <h4 className='font30 fontf font-bold '>Coupon</h4>
  const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0'>We incorporated discounts and vouchers into customer profiles and website headers. The original price is no longer presented on any page, while the current prices are highlighted in bold red for an eye-catching effect. Plus, customers who no longer wish to take advantage of these deals can opt-out at their convenience.</p>

  const push = <h4 className='font30 fontf font-bold '>Secure Payment Method</h4>
  const push1 = <p className='font16 fontf font-medium  mt-1 mb-0'>We incorporated discounts and vouchers into customer profiles and website headers. The original price is no longer presented on any page, while the current prices are highlighted in bold red for an eye-catching effect. Plus, customers who no longer wish to take advantage of these deals can opt-out at their convenience.</p>

  const media = <h4 className='font30 fontf font-bold '>Reviews And Ratings</h4>
  const media1 = <p className='font16 fontf font-medium  mt-1 mb-0'>By introducing the review and rating feature on the app, customers can now conveniently assess different restaurants based on the items listed. This way, they will reap all the benefits from simply providing valuable feedback.</p>

  const heading = <h2 className='font50 black fontf font-bold line60 text-center mx-auto'>
    Color Harmony
  </h2>
  const left = <div className={styles.left}>#7586D4</div>
  const mid = <div className={styles.mid}>#000000</div>
  const right = <div className={styles.right}>#EDEFF5</div>

  const uncovered = <h2 className='font65 black fontf font-bold line60'>
    BitsWits Helped <br /> Put Medicine <br /> Within Reach!
  </h2>
  const data2 = <p className='font16 black fontf font-medium line30'>
    The launch of the newly-made pharma mobile application was a success, with millions of people downloading the app within the first few months. The app received positive customer reviews, most praising its user-friendly design and helpful features. As a result, BitsWits made it possible for Pro Health to broaden its reach and reach a broad range of audiences through the app...<Link href="#"> Read More</Link>
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

      <Banner />

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
          text2={item.text2}
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
        heading={heading}
        left={left}
        mid={mid}
        right={right}
        colorbx1=''
        colorbx2='true'
        caseHarmony='health'
      />

      <Horizons
        uncovered={uncovered}
        foldImg00={foldImg00}
        data2={data2}
      />

      <SoulCTA
        headfire={headfire}
        soulCta='health'
      />

 
    </>
  )
}
