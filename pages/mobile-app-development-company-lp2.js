import Head from 'next/head'
import React from 'react';
import stylesjust from '@/styles/Justbuilditlp.module.css'
//
const Bannerlp2 = React.lazy(() => import('@/components/Bannerlp2'));
const Formlp2 = React.lazy(() => import('@/components/Formlp2'));
const Nothinglp2 = React.lazy(() => import('@/components/Nothinglp2'));
const NewMaintainlp = React.lazy(() => import('@/components/NewMaintainlp'));
const Wework = React.lazy(() => import('@/components/Wework'));
const Technologieslp = React.lazy(() => import('@/components/Technologieslp'));
const Globallp = React.lazy(() => import('@/components/Globallp'));
const Startups = React.lazy(() => import('@/components/Startups'));
const ProjectProcesslp = React.lazy(() => import('@/components/ProjectProcesslp'));
const Justbuilditlp = React.lazy(() => import('@/components/Justbuilditlp'));
const Transformideas = React.lazy(() => import('@/components/Transformideas'));
const Formnewlp2 = React.lazy(() => import('@/components/Formnewlp2'));
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


            <Bannerlp2
                newHomeBgprops='newHomeBg'
            />

            <Formlp2 />

            <Nothinglp2
                Nothing='nothing1'
            />

            <NewMaintainlp />

            <Wework
                wework='wework'
            />

            <Technologieslp />

            <Globallp />

            <Startups
                startups='startups'
            />

            <ProjectProcesslp
                processclass='process1'
            />

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

                slide='slide2'
            />

            <Transformideas
                transform='transform'
            />

            <Formnewlp2 />
            <NewFaqslp />
            <HomeLocationlp />
        </>
    )
}
