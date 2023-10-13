import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ColorHarmony.module.css'
//components
import Banner from '@/components/SoulBanner'
import OverView from '@/components/OverView'
import Challenge from '@/components/Challenge';
import Solutions from '@/components/Solutions';
import Profilecreation from '@/components/Profilecreation'
import ColorHarmony from '@/components/ColorHarmony';
import Horizons from '@/components/Horizons';
import SoulCTA from '@/components/SoulCTA';
import OurProject from '@/components/OurProject'
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Ourblogs from '@/components/Ourblogs'
import Contact from '@/components/Contact'
//images
import foldImg from '../public/images/case-soul-sound/beats.png'
import foldImg00 from '../public/images/case-soul-sound/horizons.svg'


export default function SoulSound() {

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
      text: 'Music-streaming mobile applications have been one of the most popular categories in the world of apps in recent years. This growing inclination towards music streaming is driven by the shift in music consumption behavior, where users prefer to listen to their favorite tracks on the go...',
      imagefold: foldImg,
      caseOverView: 'caseOverView'
    }
  ]

  const newspan = <span>The <br /> Challenge</span>

  const heading12 = <h3 className='fontf font50 black center font-bold'>Choose the no. of features as <br></br> per your requirements.</h3>

  const CaseChallengs = [
    {
      title: newspan,
      subtitle: 'Developed A Music Streaming App For Music Lovers To Listen To Millions Of Track.',
      text: 'One of the primary challenges was to ensure that the music app performs exceptionally well on all platforms, i.e., Android and iOS. The client wished the app would be accessible to a broad range of users; thus, they asked us to create an app that works on all devices. The client also requested to add a feature that provides personalized recommendations based on listening habits.',
      caseChallengs: 'caseChallengs'
    }
  ]

  const newspan2 = <span>The <br /> Solutions</span>

  const CaseSolutions = [
    {
      title: newspan2,
      text: 'BitsWits utilized its intellect to address and contend with the challenges head-on. We conducted extensive research into user behavior and preferences to create a music app explicitly tailored to user`s needs and goals. We analyzed data on how best to interact with each user.',
      caseSolution: 'caseSolution'
    }
  ]

  const demo = <h4 className='font30 fontf font-bold'>Profile <br></br> Creation</h4>
  const demo1 = <p className='font16 fontf font-medium mt-1 mb-0'>This feature allows users to create a personalized profile containing the music they love and their preferences, allowing them to quickly find the perfect song or artist to listen to each time they open the app.</p>

  const profile = <h4 className='font30 fontf font-bold '>Music <br></br> Recommendation</h4>
  const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0'>This feature lets customers quickly find the perfect songs for their mood or occasion. The music recommendation feature also increases user engagement, as it keeps users returning to the app by regularly providing fresh content.</p>

  const push = <h4 className='font30 fontf font-bold '>Push <br></br> Notifications</h4>
  const push1 = <p className='font16 fontf font-medium  mt-1 mb-0'>With the help of this feature, Soul Sound can send highly customized messages for various scenarios. And this, in turn, can help increase user engagement and retention.</p>

  const media = <h4 className='font30 fontf font-bold '>Social <br></br> Media Integration</h4>
  const media1 = <p className='font16 fontf font-medium  mt-1 mb-0'>This innovative feature allows users to easily share their favorite songs and albums with friends, family, and the public. It helps promote their favorite music or artist to a broader audience.</p>

  const music = <p className='font20 fontf font-bold black mb-4'>The following are some features we incorporated during the music app development:</p>


  const uncovered = <h2 className='font65 black fontf font-bold line60'>
    BitsWits <br />
    Uncovered <br />
    New Musical <br />
    Horizons!
  </h2>

  const data = <p className='font16 black fontf font-medium line30'>
    The experienced team working at BitsWits assisted Soul Sound in music streaming app development. We developed wireframes and prototypes that enabled us to test potential solutions quickly and iteratively. Not only this, but we also came up with a feature for users to create and save custom playlists from resolving the concern regarding limited customization options. Additionally, Soul Sound now includes a curated music library that can be filtered and sorted according to genre, artist, or other criteria. It helps users find the perfect music for any occasion.
  </p>

  const headfire = <h2 className='font50 white fontN font-bold line60 mb-0'>
    BitsWits <br />
    Uncovered <br />
    New Musical <br />
    Horizons!
  </h2>

  const code1 = <div className={styles.soulHarmony}> <span className={styles.left}>#E4F81E</span> </div>
  const code2 = <div className={styles.soulHarmony}> <span className={styles.right}>#000000</span> </div>


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
        music={music}
      />


      <ColorHarmony
        heading={heading12}
        colorbx1='true'
        left={code1}
        right={code2}
      />


      <Horizons
        uncovered={uncovered}
        foldImg00={foldImg00}
        data={data}
      />

      <SoulCTA
        headfire={headfire}
        soulCta='soulCta'
      />


      <OurProject />
      <ClientsThink />
      <Nextproject />
      <Ourblogs />
      <Contact />
    </>
  )
}
