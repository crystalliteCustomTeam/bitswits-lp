import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/new-home-page-fy.module.css"
//components
const NewIndex2Banner = React.lazy(() => import("@/components/new-home-page-fy/NewIndex2Banner"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const NewHomeWho = React.lazy(() => import("@/components/new-home-page-fy/NewHomeWho"));
const NewHomeWhat = React.lazy(() => import("@/components/new-home-page-fy/NewHomeWhat"));
const NewMaintain = React.lazy(() => import("@/components/new-home-page-fy/NewMaintain"));
const Globallplp6 = React.lazy(() => import("@/components/new-home-page-fy/Globallplp6"));
const WeworkLp = React.lazy(() => import("@/components/WeworkLp6"));
const StartupsLp = React.lazy(() => import("@/components/StartupsLp6"));
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Faqs = React.lazy(() => import("@/components/NewhomeFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const LpChoose = React.lazy(() => import('@/components/LpChoose'));


export default function Home() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta
                    name="description"
                    content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>
            <NewIndex2Banner />
            <section>
                <div className={`${styles.awardsFold}`}>
                    <div className="container-fluid px-0">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <p className={`font-bold f-20 mb-0 ${styles.textWhite}`}>
                                    Endorsements on different Platforms
                                </p>
                                <h1 className={`font50 font-bold mb-0 ${styles.textPink}`}>
                                    Awards & <br />
                                    Recognition
                                </h1>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className={`col-3 ${styles.borderLeft}`}>
                                        <Image src="/new-home-page-fy/awards/1.png" alt="awards" width={166} height={191} />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/new-home-page-fy/awards/2.png" alt="awards" width={166} height={191} />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/new-home-page-fy/awards/3.png" alt="awards" width={166} height={191} />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/new-home-page-fy/awards/4.png" alt="awards" width={166} height={191} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewHomeWho />
            <NewHomeWhat />
            <WeworkLp wework="weworkLp6" />
            <StartupsLp startups="startups" />
            <Technologieswe />
            <Nothing Nothing="nothingLp6" />
            <NewMaintain />
            <Globallplp6 />
            <LpChoose transform="transform" />
            <Formnewlp />
            <Faqs />
            <HomeLocation />
        </>
    );
}
