import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Thrthy.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import banImg1 from '../public/images/logohome/1.svg'
import banImg2 from '../public/images/logohome/2.svg'
import banImg3 from '../public/images/logohome/3.svg'
import banImg4 from '../public/images/logohome/4.svg'
import banImg5 from '../public/images/logohome/5.svg'
import banImg6 from '../public/images/logohome/6.svg'
import banImg7 from '../public/images/logohome/7.svg'
import banImg8 from '../public/images/logohome/8.svg'
import banImg9 from '../public/images/logohome/9.svg'

import banImg10 from '../public/images/logohome/10.svg'
import banImg11 from '../public/images/logohome/11.svg'
import banImg12 from '../public/images/logohome/12.svg'
import banImg13 from '../public/images/logohome/13.svg'
import banImg14 from '../public/images/logohome/14.svg'
import banImg15 from '../public/images/logohome/15.svg'
import banImg16 from '../public/images/logohome/16.svg'
import banImg17 from '../public/images/logohome/17.svg'
import banImg18 from '../public/images/logohome/18.svg'


import Link from 'next/link';


export default function Thrthy() {



    return (
        <>
            <section class={styles.hook} id='third'>
                <div class="container">
                    <div class="row justify-content-center align-items-center mb-4">
                        <div class="col-lg-10  col-xl-10 text-center mt-5">

                            <h2 class="f-50 f-700 white" data-scroll data-scroll-speed="0.1">Third Party Ecommerce App <br></br>  CRM for Mobile
                            </h2>
                            <p class="text-white" data-scroll data-scroll-speed="0.2">Our team is the embodiment of excellence when it comes to API integration and custom programming, solidifying our reputation as an industry leader. We're proud of what we can achieve with these core competencies! So, Don't Navigate the Intricacies of Optimization Alone! - Let us be your trusted IT partner for all your needs!</p>

                        </div>

                        <div class="row thirdPartySlider justify-content-center align-items-center" data-scroll data-scroll-speed="0.1">
                            <div class="col-lg-1 m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg2} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg3} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg4} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg5} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg6} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg7} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg8} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg9} width="79" height="78" class="" alt="BitsWits " />
                            </div>
                        </div>
                        <div class="row thirdPartySlider justify-content-center align-items-center" data-scroll data-scroll-speed="0.1">
                            <div class="col-lg-1 m-2">
                                <Image src={banImg10}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg11}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg12}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg13}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg14}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg15}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg16}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg17}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg18}  width="79" height="78" class="" alt="BitsWits " />
                            </div>
                        </div>
                        <div class={styles.jis}>
                            <Link href="j#" class="btn discussbtn"> Let's Discuss</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.nomad}></div>
            </section>
        </>
    )
}

