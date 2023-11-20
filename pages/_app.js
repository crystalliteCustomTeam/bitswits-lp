import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
//
import styles from '@/styles/Header.module.css'
//
const Header = React.lazy(() => import('@/components/Header'));
const Headerlp = React.lazy(() => import('@/components/Headerlp'));
const Footernewfy = React.lazy(() => import('@/components/Footernewfydesign'));
const Footernewlp = React.lazy(() => import('@/components/Footernewlp'));
const Cursor = React.lazy(() => import("@/components/Cursor"));
const Footernewdesign = React.lazy(() => import('@/components/Footernewdesign'));
const Headerlphome = React.lazy(() => import('@/components/Headerlphome'));
const EcommerceBanner = React.lazy(() => import('@/components/EcommerceBanner'));
const EcommerceFooter = React.lazy(() => import('@/components/EcommerceFooter'));
import Loader from '@/components/Loader';
const ThanksGiving = React.lazy(() => import('@/components/ThanksGiving'));


export default function App({ Component, pageProps }) {

  const router = useRouter();

  // =======================================
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 3000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);
  // =======================================
  const [show, setShow] = useState('');
  function modal() {
    setShow(true);
  }
  function closemodal() {
    setShow(false);
  }
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
  // =======================================
  const newlps = router.pathname == '/mobile-app-development-company-lp'
    || router.pathname == '/mobile-app-development-company-lp2'
  // =======================================
  const newhomepage = router.pathname == '/supersale';
  // =======================================
  const newecommercepage = router.pathname == '/top-ecommerce-app-development-company';
  // =======================================
  const thanks = router.pathname == '/thanks-giving'
  // =======================================


  return (
    <>

      <div onLoad={modal}>
        {newlps ? (
          <Headerlp />
        ) : newhomepage ? (
          <Headerlphome />
        ) : newecommercepage ? (
          <EcommerceBanner />
        ) : (
          <Header />
        )}
      </div>

      {mouse && <Cursor />}

      {imagesLoaded ? (
        <Component {...pageProps} />
      ) : (
        <Loader />
      )}

      {newlps ? (
        <Footernewlp />
      ) : newhomepage ? (
        <Footernewdesign />
      ) : newecommercepage ? (
        <EcommerceFooter />
      ) : (
        <Footernewfy />
      )}

      {thanks ?
        <Modal show={show} centered onHide={closemodal} onLoad={modal} className='thanksgiving'>
          <Modal.Body>
            <ThanksGiving /> <span onClick={closemodal} className={styles.cross}>x</span>
          </Modal.Body>
        </Modal>
        :

        ''
      }

    </>
  );
}
