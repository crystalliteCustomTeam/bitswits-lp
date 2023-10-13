import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import icon1 from '../public/images/ourservices/sideimg.png'
import icon2 from '../public/images/ourservices/game.png'
import icon3 from '../public/images/ourservices/web30.png'
import icon4 from '../public/images/ourservices/blockchain.png'
import icon5 from '../public/images/ourservices/webflow.png'
import icon6 from '../public/images/ourservices/artifical.png'
import icon11 from '../public/images/howweare/howweare.png'
import icon12 from '../public/images/howweare/whatwedo.png'
import Link from 'next/link';
import Image from 'next/image';


//components
// import Banner from '@/components/Banner'
// import Rated from '@/components/Rated'
// import About from '@/components/About'
// import Yearsofexpertise from '@/components/Yearsofexpertise'
// import Nextproject from '@/components/Nextproject'
// import Ourservices from '@/components/Ourservices'
// import Lookingfor from '@/components/Lookingfor'
// import Trusted from '@/components/Trusted'
// import Ourportfolio from '@/components/Ourportfolio'
// import Digital from '@/components/Digital';
// import Ourblogs from '@/components/Ourblogs'
// import ClientsThink from '@/components/ClientsThink'
// import Contact from '@/components/Contact'
// import OurProject from '@/components/OurProject'
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@/components/NewHomeBannerfydesign'));
const Rated = dynamic(() => import('@/components/Rated'));
const About = dynamic(() => import('@/components/Aboutnewdesign'));
const Howweare = dynamic(() => import('@/components/Howweare'));
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
const Whatwedo = dynamic(() => import('@/components/Whatwedo'));
const Globalsucces = dynamic(() => import('@/components/Globalsucces'));
const Maintaining = dynamic(() => import('@/components/Maintaining'));
const Yearsofexpertise = dynamic(() => import('@/components/Yearsofexpertise'));
const Nextproject = dynamic(() => import('@/components/Nextproject'));
const Ourservices = dynamic(() => import('@/components/Ourserviceshome'));
const Lookingfor = dynamic(() => import('@/components/Lookingfor'));
const Trusted = dynamic(() => import('@/components/Trusted'));
const Ourportfolio = dynamic(() => import('@/components/Ourportfolio'));
const Digital = dynamic(() => import('@/components/Digital'));
const Ourblogs = dynamic(() => import('@/components/Ourblogs'));
const ClientsThink = dynamic(() => import('@/components/ClientsThink'));
const Contact = dynamic(() => import('@/components/Contact'));
const OurProject = dynamic(() => import('@/components/OurProject'));
import Counter from '@/components/Counter';
import Ourportfoliolp from '@/components/Ourportfoliolp';
import FaqsLp from '@/components/FaqsandriodLp';
const Faqs = dynamic(() => import('@/components/Faqs'));




export default function Home() {




  const [gameshow, gameapp] = useState('tab1');

  function game(tab) {
    gameapp(tab);
  }


  const services = [

    {
      id: '1',
      title: 'Mobile App Development',
      text: (<>
        The mobile apps developed by <span className='grdiant font-bold'>app developers</span> at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.
      </>),
      click1: 'tab1',
      img: icon1,
      fun: game,
      data: gameshow
    },
    {
      id: '2',
      title: 'Web App Development',
      text: (<>
        Our <span className='grdiant font-bold'>top app developers</span> excel in web app development, offering top-tier expertise ensuring client satisfaction and on-time delivery.
      </>),
      click1: 'tab2',
      img: icon2,
      fun: game,
      data: gameshow
    },
    {
      id: '3',
      title: 'Game Development ',
      text: (<>
        Use our fascinating game development solutions to transport your audience to spellbound virtual worlds.
      </>),
      click1: 'tab3',
      img: icon3,
      fun: game,
      data: gameshow
    },
    {
      id: '4',
      title: 'Blockchain Solutions and Innovations ',
      text: 'We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.',
      click1: 'tab4',
      img: icon4,
      fun: game,
      data: gameshow
    },
    {
      id: '5',
      title: 'UI/UX App Design',
      text:
        (
          <>
            Our team of professional <span className='grdiant font-bold'>UI/UX app designers</span> help develop designs that guide users towards meaningful interactions and impactful user experience.

          </>
        )
      ,
      click1: 'tab5',
      img: icon5,
      fun: game,
      data: gameshow
    },
    {
      id: '6',
      title: 'Internet of Things ',
      text: (<>
        Our Internet of Things (IoT) services assist you in developing your concept for IoT adoption and in setting up safe technical support systems for complex data work.

      </>),
      click1: 'tab6',
      img: icon6,
      fun: game,
      data: gameshow
    },
    {
      id: '7',
      title: 'Artificial Intelligence ',
      text: (<>
        Utilize AI's potential to promote automated interactions, personalized experiences, and predictive insights for better engagement with technology and data.

      </>),
      click1: 'tab7',
      img: icon6,
      fun: game,
      data: gameshow
    },

  ]



  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowComponent(true);

  //   }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

  //   return () => clearTimeout(timeout);
  // }, []);

  // const [showComponent, setShowComponent] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {

  //     if (window.innerWidth <= 480) {
  //       setShowComponent(false);
  //       const timeout = setTimeout(() => {
  //        setShowComponent(true);


  //       }, 5000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

  //       return () => clearTimeout(timeout);
  //     }
  //   };

  //   // Attach the event listener
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const [showComponent, setShowComponent] = useState();

  useEffect(() => {

    if (window.innerWidth > 480) {

      setShowComponent(true);

    }
    else {

      setShowComponent(false);
      setTimeout(alertFunc, 5000);


      function alertFunc() {
        setShowComponent(true);
      }

    }




  }, []);

  return (
    <>
      <Head>
        <title>Top Mobile App Development Company - BitsWits</title>
        <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <Banner />
      {/* <Rated />
      <About /> */}

      <About />

      <Howweare

        subtitle='WHO WE ARE'
        title={<>  We build greater futures through <br></br> innovation and collective knowledge. </>}
        para='Bitswits is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 10+ years.'
        linkdem={<>  Get to know us </>}
        icon1={icon11}
      />

      <Justbuildit />

      <Whatwedo

        subtitle='WHAT WE DO'
        title={<>  Bitswits transforms businesses through technology. </>}
        para='We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.'
        linkdem={<>  Get to know us </>}
        icon12={icon12}

      />

      <Maintaining />

      <Globalsucces />




      {/* <Yearsofexpertise
        loop1={<> <Counter stopNumber={16} />+ </>}
        looptext1={<> YEARS OF <br></br> EXPERTISE </>}
        looptext11={<> Established in 2002 in the USA </>}
        loop2={<> <Counter stopNumber={500} />+ </>}
        looptext2={<> DEDICATED <br></br> DEVELOPERS </>}
        looptext22={<> All directly employed by BitsWits </>}
        loop3={<> <Counter stopNumber={6500} />+ </>}
        looptext3={<> SATISFIED <br></br> CLIENTS </>}
        looptext33={<> Check the genuine testimonial videos </>}
        loop4={<> <Counter stopNumber={10000} />+ </>}
        looptext4={<> PROJECTS  <br></br> DELIVERED </>}
        looptext44={<> See examples our work </>}

      />

      <Ourservices
        services={services}
      />

      <Lookingfor />
      <Trusted />
      <Ourportfoliolp />
      <Digital />
      <ClientsThink />
     
      <Ourblogs /> */}


      <OurProject />
      <ClientsThink />
      <Nextproject />
      <Faqs />
      <Contact />

    </>
  )
}
