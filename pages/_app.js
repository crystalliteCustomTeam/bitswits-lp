import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import tel from "@/public/images/fixed/tel.webp"
import call from "@/public/images/fixed/call.webp"
import Link from "next/link";
import Image from "next/image";
import { BsX } from "react-icons/bs";
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";


export default function App({ Component, pageProps }) {


  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };

  const router = useRouter();
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

  const [isHovered, setIsHovered] = useState(false);

  function loc() {
    setIsHovered((prev) => !prev);
  }

  const superecommer = router.pathname == "/top-mobile-app-developers" ||
    router.pathname == "/top-ecommerce-app-development-company";



  return (
    <>

      {superecommer ?
        ''
        :

        <>
          <div className="newtownfy">
            <div className="chat">
              <span className="icon">
                <Image width="30" height="30" alt="bitswits" className="img-fluid" src={tel} loading="lazy" />
                <div className="txtBody">
                  <Link href="#">Chat Now</Link>
                </div>
              </span>
            </div>
            <div className="call">
              <span className="icon">
                <Image width="30" height="30" alt="bitswits" className="img-fluid" src={call} loading="lazy" />
                <div className="txtBody">
                  <Link href="tel:13123795987">1 - 312 379 5987</Link>
                </div>
              </span>
            </div>
          </div>


          <div className={isHovered ? 'openForm active' : 'openForm'}>
            <div className="wrapper">
              <span className="close" onClick={() => loc()}>
                {isHovered ?

                  <BsX />
                  :
                  'Get In Touch'
                }

              </span>
              <form id="leadPopupForm" className="popup-form" data-hs-cf-bound="true">
                <div className="inputGroup">
                  <h3 className="f-20 center fw800">Get A Free Quote Now!</h3>
                </div>
                <div className="inputGroup">
                  <input name="name" type="text" placeholder="Full Name*" required="" />
                </div>
                <div className="inputGroup">
                  <input name="email" type="email" placeholder="Email Address*" required="" />
                </div>
                <div className="inputGroup">
                  <input type="phone" required="" minlength="7" maxlength="15" name="phone" placeholder="Phone No*" onkeypress="return /[0-9]/i.test(event.key)" />
                </div>
                <div className="inputGroup">
                  <textarea name="comments" placeholder="Let Us know Time And Date To Call You."></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </>


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
      )}

      {mouse && <Cursor />}

      {imagesLoaded ? <Component {...pageProps} /> : <Loader />}

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

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>
    </>
  );
}
