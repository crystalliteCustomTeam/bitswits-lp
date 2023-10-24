import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeAbout from '@/components/NewHomePageAboutprops';
import NewaiWho from '@/components/NewaiWhoprops';
import NewaiWhat from '@/components/NewaiWhatprops';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextprojectprops';
import Faqs from '@/components/NewhomeFaqsprops';
import AugmentedMaintainlogo from '@/components/AugmentedMaintainlogo';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';
import HomeLocation from '@/components/HomeLocation';
import Augmentebanner from '@/components/Augmentebanner';
import Newsuccess from '@/components/NewMblSuccessprops';
import NewiosPortFolio from '@/components/NewiosPortFolioprops';
import Link from 'next/link';
import styles from "@/styles/NewMblSuccess.module.css";

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function augmentedrealityappsdevelopment() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>
            <Augmentebanner />
            <NewHomeAbout
                title='Clients Love Our AR Solutions'
                para='Hear It from Them'
            />
            <AugmentedMaintainlogo />
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
            <NewiosPortFolio

                tilte={
                    <h1 className='text-white f-55 font-bold text-center pb-5'>
                       Showcasing Our   <span className='grdiant'>Augmented Reality </span> Creations
                    </h1>

                }

            />
             <Newsuccess
                tilte={<>  <h5 className='grdiant'>Ready for Success? </h5> </>}
                subtitle={<>
                    <h2 className='f-80 font-bold white center mb-5'>Accelerate Your Growth With <br></br> Augmented Reality Apps</h2>
                </> }
                num1 = '01'
                title1 = 'Consult Our Specialists'
                text1 = 'Reach out to our specialists without any hesitation via email or call to attain a free consultation.'
                btn1 = { <> <Link href="#" className={styles.sucssBtn}>Connect Now</Link> </> }

                num2 = '02'
                title2 = { <> Request a <br></br> Quote </> }
                text2 = { <> Get a detailed cost breakdown for your app development project. </> }
                btn2 = { <> <Link href="#" className={styles.sucssBtn}>Chat Now</Link> </> }

                num3 = '03'
                title3 = 'Kickstart with an MVP'
                text3 = 'Start your app development journey with no-obligation consultation via email and phone.'
                btn3 = { <> <Link href="#" className={styles.sucssBtn}>Call Now</Link> </> }

            />
            <section className='spacingtb1'>
                <Technologieswe />
            </section>
            <NewHomeGlobal />
            <NewHomeSlider />
            <Homenextproject
            title = 'Experience AR Brilliance With BitsWits'
            />
            <Faqs
            
            title1 = { `What's the typical timeline for an AR project with BitsWits?` }
            para1 = 'Project timeline varies but usually ranges from a few weeks to a few months.'
            title2 = 'Do you offer AR app development, and can it be integrated into existing apps?'
            para2 = 'Yes, we develop AR applications and can integrate them with existing ones.'
            title3 = 'What hardware or devices are required for end-users to access AR experiences developed by BitsWits?'
            para3 = 'Commonly used devices like smartphones or AR glasses can access our AR experiences.'
            title4 = 'Are there any hidden or additional costs that we should be aware of in the AR development process with BitsWits?'
            para4 = 'We maintain transparency in our pricing, and there are no hidden costs. Any additional expenses will be communicated and agreed upon in advance.'
            title5 = 'Does BitsWits provide 24/7 technical support for critical AR applications?'
            para5 = 'Yes, we offer 24/7 support for mission-critical applications.'
            title6 = { `Are there examples or case studies of successful AR projects you've completed?` }
            para6 = 'Yes, we can provide case studies showcasing our work. Sign up now, and our customer support team will be in touch with you. '
         

            
            />
            <HomeLocation />


        </>
    )
}
