import Head from 'next/head'
import React from 'react';
import Link from 'next/link'
import styles from "@/styles/bannerlp.module.css";
import stylesjust from '@/styles/Justbuilditlp.module.css'
//
const Bannerlp = React.lazy(() => import('@/components/Bannerlp'));
const People = React.lazy(() => import('@/components/People'));
const HomeBannerSliderlp = React.lazy(() => import('@/components/HomeBannerSliderlp'));
const LpForm = React.lazy(() => import('@/components/LpForm'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const Hurdles = React.lazy(() => import('@/components/Hurdles'));
const Expertapp = React.lazy(() => import('@/components/Expertapp'));
const ProjectProcess = React.lazy(() => import('@/components/ProjectProcess'));
const LpChoose = React.lazy(() => import('@/components/LpChoose'));
const Technologieslp = React.lazy(() => import('@/components/Technologieslp'));
const Justbuilditlp = React.lazy(() => import('@/components/Justbuilditlp'));
const Globallplp6 = React.lazy(() => import('@/components/Globallplp6'));
const Partnerships = React.lazy(() => import('@/components/Partnerships'));
const Formnewlp = React.lazy(() => import('@/components/Formnewlp'));
const NewFaqslp = React.lazy(() => import('@/components/NewFaqslp'));
const HomeLocationlp = React.lazy(() => import('@/components/HomeLocationlp'));


export default function gamedevelopmentcompany() {

    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Bannerlp
                title={<>
                    <h3 className={`${styles.develop} text-center font50 font-bold mb-3`}>
                    Mastering Mobile App Development
                    </h3>
                </>}
                para={
                    <>
                        <p className='font20 white center mb-3'>Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span></p>
                    </>
                }
                btn2={
                    <>
                        <div className={styles.pont}>
                            <Link className={styles.about} href="#">Transform Your App Idea Into A Success Story - Today Is The Day To Start!</Link>
                        </div>
                    </>
                }
                newHomeBgprops='newHomeBg'
            />

            <People
                People='people'
            />

            <HomeBannerSliderlp />

            <LpForm />

            <Nothing
                Nothing='nothing'
            />

            <Hurdles />

            <Expertapp
                expertapp='expertapp'
            />

            <ProjectProcess
                processclass='process'
            />

            <LpChoose 
                transform='transform'
            />

            <Technologieslp />

            <Justbuilditlp
                title={
                    <>
                        <h2 className={stylesjust.just}>Just Build It.</h2>
                    </>
                }
                para={
                    <>
                        <h3 className={stylesjust.develop}>Design, Develop, and Grow with BitsWits.</h3>
                    </>
                }

                slide='slide1'
            />
           <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <NewFaqslp />
            <HomeLocationlp />
        </>
    )
}
