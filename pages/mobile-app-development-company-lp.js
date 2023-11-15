import Head from 'next/head'
import React from 'react';
import Technologieslp from '@/components/Technologieslp';
import NewFaqslp from '@/components/NewFaqslp';
import HomeLocationlp from '@/components/HomeLocationlp';
import Bannerlp from '@/components/Bannerlp';
import Justbuilditlp from '@/components/Justbuilditlp';
import ProjectProcess from '@/components/ProjectProcess';
import Globallp from '@/components/Globallp';
import styles from "@/styles/bannerlp.module.css";
import Link from 'next/link'
import stylesjust from '@/styles/Justbuilditlp.module.css'
//Icons 
import BannerImage from "@/public/images/bannermlp/bannermalp.png"
import People from '@/components/People';
import HomeBannerSliderlp from '@/components/HomeBannerSliderlp';
import Nothing from '@/components/Nothing';
import Transform from '@/components/Transform';
import Expertapp from '@/components/Expertapp';
import Formnewlp from '@/components/Formnewlp';

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
                    <h3 className={`${styles.develop} text-center f-50 font-bold mb-2`}>
                        Mobile App Development Company
                    </h3>

                </>}
                para={
                    <>
                        <p className='white center mb-3'>We deliver mobile app experiences that get your mobile app trending on the app stores.</p>
                    </>
                }

                btn2={
                    <>
                        <div className={styles.pont}>
                            <Link className={styles.about} href="#">Take The First Step - Sign Up Now!</Link>
                        </div>
                    </>
                }

                imgnew={BannerImage}

                newHomeBgprops='newHomeBg'


            />

            <People
                People='people'
            />

            <HomeBannerSliderlp />

            <Nothing
                Nothing='nothing'
            />

            <Transform
                transform='transform'
            />

            <Expertapp
                expertapp='expertapp'
            />



            <ProjectProcess
                processclass='process'
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
            <Globallp />
            <Formnewlp />
            <NewFaqslp />

            <HomeLocationlp />


        </>
    )
}
