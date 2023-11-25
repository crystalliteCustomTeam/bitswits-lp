import Head from 'next/head'
import React from 'react';
import styles from "@/styles/bannerlp6.module.css";
import stylesjust from '@/styles/Justbuilditlp.module.css'
//
const Bannerlp6 = React.lazy(() => import('@/components/Bannerlp6'));
const People = React.lazy(() => import('@/components/People'));
const HomeBannerSliderlp = React.lazy(() => import('@/components/HomeBannerSliderlp'));
const LpForm6 = React.lazy(() => import('@/components/LpForm6'));
const Nothing = React.lazy(() => import('@/components/Nothing'));
const NewMaintain6Lp = React.lazy(() => import('@/components/NewMaintain6Lp'));
const WeworkLp = React.lazy(() => import('@/components/WeworkLp6'));
const StartupsLp = React.lazy(() => import('@/components/StartupsLp6'));
const ProjectProcess = React.lazy(() => import('@/components/ProjectProcessLp6'));
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

            <Bannerlp6
                subtitle={<> <h3 className='font30 font-bold text-center'>Create an App, Make a Mark</h3> </>}
                title={<>
                    <h2 className={`${styles.develop} text-center font50 font-bold mb-3`}>
                        Award-Winning App Development Company
                    </h2>
                </>}
                para={
                    <>
                        <p className='font20 white center mb-3'>Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span></p>
                    </>
                }
                newHomeBgprops='newHomeBg'
            />

            <People
                People='people'
            />

            <HomeBannerSliderlp />

            <LpForm6 />

            <Nothing
                Nothing='nothingLp6'
            />

            <NewMaintain6Lp />

            <WeworkLp
                wework='weworkLp6'
            />

            <StartupsLp
                startups='startups'
            />

            <ProjectProcess
                processclass='processLp6'
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
