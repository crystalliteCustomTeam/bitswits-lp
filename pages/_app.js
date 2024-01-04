import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
//
import Header from "@/components/Header";
import NewHeaderDesign from "@/components/NewHeader";
import Headerlp from "@/components/Headerlp";
import Headerlphome from "@/components/Headerlphome";
import Footernewfy from "@/components/Footernewfydesign";
import Footernewlp1 from "@/components/Footernewlp1";
import Footernewlp from "@/components/Footernewlp";
import Footernewdesign from "@/components/Footernewdesign";
import EcommerceBanner from "@/components/EcommerceBanner";
import EcommerceFooter from "@/components/EcommerceFooter";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Skicky from "@/components/Skicky";
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";


export default function App({ Component, pageProps }) {

  const router = useRouter();
  // =======================================
  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };
  // =======================================
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 7000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);
  // =======================================
  const mouse =
    router.pathname == "/" ||
    router.pathname == "/about-us" ||
    router.pathname == "/our-work" ||
    router.pathname == "/privacy-policy" ||
    router.pathname == "/term-and-condition" ||
    router.pathname == "/ios-app-development" ||
    router.pathname == "/android-application-development" ||
    router.pathname == "/augmented-reality-apps-development-company" ||
    router.pathname == "/artificial-intelligence-development-company" ||
    router.pathname == "/cross-platform-app-development" ||
    router.pathname == "/web-app-development" ||
    router.pathname == "/react-native-mobile-development" ||
    router.pathname == "/hybrid-mobile-apps-development" ||
    router.pathname == "/custom-mobile-development" ||
    router.pathname == "/native-mobile-development" ||
    router.pathname == "/flutter-mobile-development" ||
    router.pathname == "/mobile-application" ||
    router.pathname == "/mobile-application-usa" ||
    router.pathname == "/mobile-application-huston" ||
    router.pathname == "/mobile-application-newyork" ||
    router.pathname == "/mobile-application-los-angeles" ||
    router.pathname == "/mobile-application-duplicate" ||
    router.pathname == "/mobile-application-duplicate2" ||
    router.pathname == "/top-mobile-app-development-company" ||
    router.pathname == "/mobile-app-development-company-lp2" ||
    router.pathname == "/game-application-development" ||
    router.pathname == "/nft-game-development" ||
    router.pathname == "/2d-game-development-company" ||
    router.pathname == "/3d-game-development-company" ||
    router.pathname == "/blockchain-game-development" ||
    router.pathname == "/travel-app-development-case-study" ||
    router.pathname == "/real-estate-app-development-case-study" ||
    router.pathname == "/clothing-marketplace-app-development-case-study" ||
    router.pathname == "/social-app-development-case-study" ||
    router.pathname == "/automobile-repair-app-development-case-study" ||
    router.pathname == "/marketing-partnership-app-development-case-study" ||
    router.pathname == "/healthcare-app-development-case-study" ||
    router.pathname == "/ride-app-development-case-study" ||
    router.pathname == "/fitness-app-development-case-study" ||
    router.pathname == "/hiring-app-development-case-study" ||
    router.pathname == "/music-app-development-case-study" ||
    router.pathname == "/handyman-on-demand-app-development-case-study" ||
    router.pathname == "/food-delivery-app-development-case-study" ||
    router.pathname == "/ios-developer" ||
    router.pathname == "/android-developer" ||
    router.pathname == "/hybrid-developer" ||
    router.pathname == "/native-developer" ||
    router.pathname == "/mobile-developer" ||
    router.pathname == "/top-ecommerce-app-development-company" ||
    router.pathname == "/top-mobile-app-development-company" ||
    router.pathname == "/mobile-app-development-services" ||
    router.pathname == "/create-a-mobile-app";
  // =======================================
  const mblLp1 =
    router.pathname == "/top-mobile-app-development-company" ||
    router.pathname == "/mobile-app-development-services" ||
    router.pathname == "/create-a-mobile-app";
  // =======================================
  const newlps = router.pathname == "/mobile-app-development-company-lp2";
  // =======================================
  const newhomepage = router.pathname == "/top-mobile-app-developers";
  // =======================================
  const newecommercepage =
    router.pathname == "/top-ecommerce-app-development-company";
  // =======================================
  const superecommer = router.pathname == "/top-mobile-app-developers" ||
    router.pathname == "/top-ecommerce-app-development-company";
  // =======================================
  const sluginer = useRouter().asPath;
  const weblink = "https://www.bitswits.co";
  const newcol = weblink + sluginer;
  // =======================================

  return (
    <>
      <Head>
        {/* Google Search Console Code */}
        <meta name="google-site-verification" content="Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0" />
        <meta name='dmca-site-verification' content='Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090' />
        <link rel="canonical" href={newcol} />
      </Head>

      {imagesLoaded &&
        <>
          {/* Google Analytics Code */}
          <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-T8JYHWL639"></Script>
          <Script strategy="lazyOnload">
            {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T8JYHWL639');
            `}
          </Script>

          {/* GTM Code */}
          <Script Script strategy="lazyOnload">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T2JSP4C');
              ;
            `}
          </Script>
        </>
      }

      {superecommer ?
        ''
        :
        <Skicky />
      }

      {newlps ? (
        <Headerlp />
      ) : newhomepage ? (
        <Headerlphome />
      ) : newecommercepage ? (
        <EcommerceBanner />
      ) : (
        <>
          <NewHeaderDesign />
          <Header />
        </>
      )
      }

      {mouse && <Cursor />}

      <Component {...pageProps} />

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
      )
      }

      {imagesLoaded &&
        <div>
          <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
        </div>
      }
    </>
  );
}
