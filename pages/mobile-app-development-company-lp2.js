import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import Technologieslp from '@/components/Technologieslp';
import NewFaqslp from '@/components/NewFaqslp';
import HomeLocationlp from '@/components/HomeLocationlp';
import Bannerlp from '@/components/Bannerlp';
import Justbuilditlp from '@/components/Justbuilditlp';
import ProjectProcesslp from '@/components/ProjectProcesslp';
import Globallp from '@/components/Globallp';
import Link from 'next/link'
import stylesjust from '@/styles/Justbuilditlp.module.css'
//Icons 
import Nothing from '@/components/Nothing';
import Transformideas from '@/components/Transformideas';
import Formnewlp2 from '@/components/Formnewlp2';
import NewMaintainlp from '@/components/NewMaintainlp';
import Startups from '@/components/Startups';
import Wework from '@/components/Wework';
import Bannerlp2 from '@/components/Bannerlp2';
import Formlp2 from '@/components/Formlp2';
import Nothinglp2 from '@/components/Nothinglp2';

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
