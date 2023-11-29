import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
//
import Header from '@/components/Header';
import Headerlp from '@/components/Headerlp';
import Footernewfy from '@/components/Footernewfydesign';
import Footernewlp1 from '@/components/Footernewlp1';
import Footernewlp from '@/components/Footernewlp';
import Cursor from "@/components/Cursor";
import Footernewdesign from '@/components/Footernewdesign';
import Headerlphome from '@/components/Headerlphome';
import EcommerceBanner from '@/components/EcommerceBanner';
import EcommerceFooter from '@/components/EcommerceFooter';
import Loader from '@/components/Loader';
import Headerproduct from '@/components/Headerproduct';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  // =======================================
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 5000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);
  // =======================================
  const mouse = router.pathname == '/'
    || router.pathname == '/about-us'
    || router.pathname == '/our-work'
    || router.pathname == '/privacy-policy'
    || router.pathname == '/term-and-condition'
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
    || router.pathname == '/ios-developer'
    || router.pathname == '/android-developer'
    || router.pathname == '/hybrid-developer'
    || router.pathname == '/native-developer'
    || router.pathname == '/mobile-developer'
    || router.pathname == '/supersale'
    || router.pathname == '/top-ecommerce-app-development-company'
    || router.pathname == '/mobile-app-development-company-lp'
    || router.pathname == '/mobile-app-development-services-landing-page-final'
    || router.pathname == '/mobile-app-development-company-lp6'
  // =======================================
  const mblLp1 = router.pathname == '/mobile-app-development-company-lp'
    || router.pathname == '/mobile-app-development-services-landing-page-final'
    || router.pathname == '/mobile-app-development-company-lp6'
  // =======================================
  const newlps = router.pathname == '/mobile-app-development-company-lp2'
  // =======================================
  const newhomepage = router.pathname == '/supersale';
  // =======================================
  const newecommercepage = router.pathname == '/top-ecommerce-app-development-company';
  // =======================================
  const mobileapplicationheader = router.pathname == '/mobile-application-header';
  // =======================================


  return (
    <>

      {newlps ? (
        <Headerlp />
      ) : newhomepage ? (
        <Headerlphome />
      ) : newecommercepage ? (
        <EcommerceBanner />
      ) : mobileapplicationheader ? (
        <Headerproduct />
      ) : (

        <Header />
      )}

      {mouse && <Cursor />}

      {imagesLoaded ? (
        <Component {...pageProps} />
      ) : (
        <Loader />
      )}

      {newlps ? (
        <Footernewlp />
      ) : mblLp1 ? (
        <Footernewlp1 />
      ) : newhomepage ? (
        <Footernewdesign />
      ) : newecommercepage ? (
        <EcommerceFooter />
      ) : (
        <Footernewfy />
      )}

    </>
  );
}
