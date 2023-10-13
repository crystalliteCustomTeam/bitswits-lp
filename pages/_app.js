import Header from '@/components/Header';
import Footernewfy from '@/components/Footernewfydesign';
import Cursor from "@/components/Cursor";
import { useRouter } from "next/router";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function App({ Component, pageProps }) {

  const router = useRouter();

  const mouse = router.pathname == '/'
    || router.pathname == '/ios-app-development'
    || router.pathname == '/android-application-development'
    || router.pathname == '/augmented-reality-apps-development'
    || router.pathname == '/artificial-intelligence'
    || router.pathname == '/cross-platform-app-development'
    || router.pathname == '/web-app-development'
    || router.pathname == '/react-native-mobile-development'
    || router.pathname == '/hybrid-mobile-apps-development'
    || router.pathname == '/custom-mobile-development'
    || router.pathname == '/native-mobile-development'
    || router.pathname == '/flutter-mobile-development'
    || router.pathname == '/mobile-application'
    || router.pathname == '/game-application-development'
    || router.pathname == '/nft-game-development'
    || router.pathname == '/2d-game-development-company'
    || router.pathname == '/3d-game-development-company'
    || router.pathname == '/blockchain-game-development';


  return (
    <>

      <Header />


      {mouse &&
        <Cursor />
      }


      <Component {...pageProps} />


      <Footernewfy />

    </>
  )
}
