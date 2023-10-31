import Header from '@/components/Header';
import Headerlp from '@/components/Headerlp';
import Footernewfy from '@/components/Footernewfydesign';
import Footernewlp from '@/components/Footernewlp';
import Cursor from "@/components/Cursor";
import { useRouter } from "next/router";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footernewdesign from '@/components/Footernewdesign';
import Script from 'next/script';
import Head from 'next/head';
import Headerlphome from '@/components/Headerlphome';


export default function App({ Component, pageProps }) {

  const router = useRouter();

  const mouse = router.pathname == '/'
    || router.pathname == '/ios-app-development'
    || router.pathname == '/android-application-development'
    || router.pathname == '/augmented-reality-apps-development-company'
    || router.pathname == '/artificial-intelligence-development-company'
    || router.pathname == '/cross-platform-app-development'
    || router.pathname == '/web-app-development'
    || router.pathname == '/react-native-mobile-development'
    || router.pathname == '/hybrid-mobile-apps-development'
    || router.pathname == '/custom-mobile-development'
    || router.pathname == '/native-mobile-development'
    || router.pathname == '/flutter-mobile-development'
    || router.pathname == '/mobile-application'
    || router.pathname == '/mobile-application-usa'
    || router.pathname == '/mobile-application-huston'
    || router.pathname == '/mobile-application-newyork'
    || router.pathname == '/mobile-application-los-angeles'
    || router.pathname == '/mobile-application-duplicate'
    || router.pathname == '/mobile-application-duplicate2'
    || router.pathname == '/mobile-app-development-company-lp'
    || router.pathname == '/mobile-app-development-company-lp2'
    || router.pathname == '/game-application-development'
    || router.pathname == '/nft-game-development'
    || router.pathname == '/2d-game-development-company'
    || router.pathname == '/3d-game-development-company'
    || router.pathname == '/blockchain-game-development'
    || router.pathname == '/travel-app-development-case-study'
    || router.pathname == '/real-estate-app-development-case-study'
    || router.pathname == '/clothing-marketplace-app-development-case-study'
    || router.pathname == '/social-app-development-case-study'
    || router.pathname == '/automobile-repair-app-development-case-study'
    || router.pathname == '/marketing-partnership-app-development-case-study'
    || router.pathname == '/healthcare-app-development-case-study'
    || router.pathname == '/ride-app-development-case-study'
    || router.pathname == '/fitness-app-development-case-study'
    || router.pathname == '/hiring-app-development-case-study'
    || router.pathname == '/music-app-development-case-study'
    || router.pathname == '/handyman-on-demand-app-development-case-study'
    || router.pathname == '/food-delivery-app-development-case-study'


  const newlps = router.pathname == '/mobile-app-development-company-lp'
    || router.pathname == '/mobile-app-development-company-lp2'

  const newhomepage = router.pathname == '/indexnew';


  return (
    <>

      {newlps ?

        <Headerlp />

        :

        newhomepage ?

          <Headerlphome />
          :
          <Header />
      }


      {mouse &&
        <Cursor />
      }


      <Component {...pageProps} />


      {newlps ?
        <Footernewlp />
        :
        newhomepage ?

          <Footernewdesign />

          :
          <Footernewfy />
      }

    </>
  )
}
