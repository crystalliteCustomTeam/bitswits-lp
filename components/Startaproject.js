import React from 'react'
import styles from "@/styles/Startaproject.module.css";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import badgelogo from '../public/images/startaproject/till.png'


const Startaproject = () => {




    return (
        <>
            <section class={styles.still}>
                <div class={` ${styles.gulop}  container `}>
                    <div class="border-r-30 bg-s1 p-5 marginmr">
                        <div class="row">
                            <div class="col-lg-6 col-xl-6 ">
                                <div class="card-body bg-s1">
                                    <h3 class=" font-regular">Start a Project?</h3>
                                    <h4 class="font-26 text-white font-bold">Looking For Expert Guidance On
                                        Your Mobile App Development 
                                        Project?</h4>

                                   <div class={styles.home}>
                                   <a href="tel:18335006007" class={styles.number}>Call Now: (833) 500-6007</a>
                                    <a href="#" class={styles.live}>Start Iive
                                        Chat</a>
                                   </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xl-6 ">
                                <div class={styles.start}>
                                    <Image src={badgelogo} width="554" height="358" class={styles.startproject} alt="BitsWits" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Startaproject