import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Thrthy.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import banImg1 from '../public/images/logohome/1.png'
import Link from 'next/link';


export default function Thrthy() {



    return (
        <>
            <section class={styles.hook}>
                <div class="container">
                    <div class="row justify-content-center align-items-center mb-4">
                        <div class="col-lg-10  col-xl-10 text-center mt-5">

                            <h2 class="f-50 f-50 f-700 white">Third Party Ecommerce App <br></br>  CRM for Mobile
                            </h2>
                            <p class="text-white">Our team is the embodiment of excellence when it comes to API integration and custom programming, solidifying our reputation as an industry leader. We're proud of what we can achieve with these core competencies! So, Don't Navigate the Intricacies of Optimization Alone! - Let us be your trusted IT partner for all your needs!</p>

                        </div>

                        <div class="row thirdPartySlider justify-content-center align-items-center">
                            <div class="col-lg-1 m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1} width="79" height="78" class="" alt="bitswits " />
                            </div>
                        </div>
                        <div class="row thirdPartySlider justify-content-center align-items-center">
                            <div class="col-lg-1 m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                            <div class="col-lg-1  m-2">
                                <Image src={banImg1}  width="79" height="78" class="" alt="bitswits " />
                            </div>
                        </div>
                        <div class={styles.jis}>
                            <Link href="j#" class="btn discussbtn"> Let's Discuss</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

