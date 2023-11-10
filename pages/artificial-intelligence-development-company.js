import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAboutprops';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextprojectprops';
import Capabilities2d from '@/components/Capabilities2d';
import NewAIFaqs from '@/components/NewAIFaqs';
import NewBanner from '@/components/NewBanner';
import AiMaintainlogo from '@/components/AiMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import AiBanner from '@/components/AiBanner';
import Newsuccess from '@/components/NewMblSuccessprops';
import ServicesPortfolio from '@/components/ServicesPortfolioprops';
import NewaiWho from '@/components/NewaiWhoprops';
import NewaiWhat from '@/components/NewaiWhatprops';
import Link from 'next/link'
import styles from "@/styles/NewMblSuccess.module.css";
import NewAddress from '@/components/NewAddress';
//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function gamedevelopmentcompany() {

    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <AiBanner />
            <NewHomeAbout
                title='Clients Love Our AI Solutions'
                para='Hear It from Them'
            />
            <AiMaintainlogo />
            <NewAddress />
            <Justbuildit />
            <NewaiWho
                title='Our Value Proposition'
                subtitle={`With a track record of dedication and innovation, we're not just developers; we're passionate problem-solvers invested in your success.`}
                para={`Hire BitsWits for mobile application development that engages users and generates measurable results. With over a decade of experience, we're the industry's best option.`}
            />
            <NewaiWhat

                title='Why Hire Us'
                subtitle='Is your current app failing to deliver the results you desire?'
                para={` At BitsWits, your app’s success is our top priority. We ensure your business stays updated with online trends and tech innovations. Contact us today to elevate your app's performance. `}
                btn1='Contact us now'

            />
            <ServicesPortfolio

                tilte={
                    <h1 className='text-white f-55 font-bold text-center pb-5'>
                        Transforming Industries with  <span className='grdiant'>AI Solutions</span>
                    </h1>

                }

            />

            <Newsuccess
                tilte={<>  <h5 className='grdiant'>Ready for Success? </h5> </>}
                subtitle={<>
                    <h2 className='f-80 font-bold white center mb-5'>Accelerate Your Growth With <br></br> AI Solutions</h2>
                </> }
                num1 = '01'
                title1 = 'Consult Our Specialists'
                text1 = 'Reach out to our AI specialists without any hesitation via email or call to avail a free consultation.'
                btn1 = { <> <Link href="#" className={styles.sucssBtn}>Connect Now</Link> </> }

                num2 = '02'
                title2 = { <> Request a <br></br> Quote </> }
                text2 = { <> Get a detailed cost breakdown for your app development <br></br> project. </> }
                btn2 = { <> <Link href="#" className={styles.sucssBtn}>Chat Now</Link> </> }

                num3 = '03'
                title3 = 'Kickstart with an MVP'
                text3 = 'Start your AI development journey with no-obligation consultation via email and phone.'
                btn3 = { <> <Link href="#" className={styles.sucssBtn}>Call Now</Link> </> }

            />

            <section className='spacingtb1'>
                <Technologieswe />
            </section>

            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject
            title = 'Get Smart With Artificial Intelligence '
            />
            <NewAIFaqs />
            <HomeLocation />


        </>
    )
}
