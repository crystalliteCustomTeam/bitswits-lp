import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Headerlphome.module.css'
import { Row, Col } from 'react-bootstrap'
// images
import logo from '../public/images/lpheader/logo.png'

import logo1 from '../public/images/lpheader/1.png'
import logo2 from '../public/images/lpheader/2.png'
import logo3 from '../public/images/lpheader/3.png'
import logo4 from '../public/images/lpheader/4.png'
import logo5 from '../public/images/lpheader/5.png'
import star from '../public/images/lpheader/star.png'
import pipe from '../public/images/lpheader/pipe.png'
import logo22 from '../public/images/lpheader/logo22.png'



const Headerlphome = () => {





    return (
        <>

            <header class={styles.bannerhome}>
                <section>
                    <div class="container">
                        <div class={styles.positionrelative}>
                            <div class={styles.toasNotification}>
                                <div class={styles.innerborder}>
                                    <div class="text-uppercase font-12 me-3" id="toasNotification1">
                                        <Link href="jjavascript:;" class="text-white font-18" id="closeBtn"> x
                                        </Link>
                                        <span class={styles.package}> 25% OFF any package! USE:
                                            <span class={styles.textth}> today25 </span> today!</span>
                                    </div>
                                    <div class="mouse" data-bs-toggle="modal" data-bs-target="#ourWebModal">
                                        <Link href="javascript:;" class={styles.ToastOpen}>CLAIM</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="toasNotificationGoogle">
                                <div class="innerborder">
                                    <div class="text-uppercase font-12 me-3">
                                        <Link href="javascript:;" class="text-white font-18" data-bs-toggle="modal" data-bs-target="#ourWebModal">
                                            <Image src={pipe} width="300px" alt="bitswits" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image src={logo22} className='img-fluid mt-2' />
                    </div>

                    <div class="container">
                        <div class={styles.backImgmain}>

                            <div class={` ${styles.xolpost} row justify-content-center align-content-center align-items-center`}>
                                <div class="col-lg-12 col-xl-12">
                                    <div class="header-content position-relative">
                                        <div class="text-center">

                                            <h4 class="font-25 font-bold color-p">Elevate Your Mobile App
                                                Experience With
                                            </h4>
                                            <h1 class="font-60 font-bold text-gradient gradient1">Top Mobile App Development
                                            </h1>
                                            <p class=""> Let us help you bring your vision to life and take your
                                                business to
                                                the
                                                next level with our industry-leading <br></br>  <b> mobile app development </b>
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center align-content-center align-items-center">
                                <div class="col-lg-11 col-xl-11">
                                    <div class="header-form">
                                        <form class={` ${styles.piza} px-lg-5`} role="form">
                                            <div class="row pl-0">
                                                <div class="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="text" id="fname" name="name" placeholder="First Name" class="form-control" required="" />
                                                </div>
                                                <div class="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="text" id="fname" name="name" placeholder="Last Name" class="form-control" required="" />
                                                </div>
                                                <div class="form-group col-xl-4 col-lg-4  mb-3">
                                                    <input type="phone" id="phone" name="phone" maxlength="15" placeholder="Phone Number" class="form-control" onkeypress="return /[0-9]/i.test(event.key)" required="" />
                                                </div>
                                                <div class="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="email" id="email" name="email" placeholder="Email Address" class="form-control" required="" />
                                                </div>

                                                <div class="form-group col-xl-4 col-lg-4 mb-3">
                                                    <textarea type="text" id="message" name="message" placeholder="Comment" class="form-control" required=""></textarea>
                                                </div>
                                                <div class="form-group  col-xl-4 col-lg-4  ">
                                                    <button type="submit" name="saves1" id="butact2" class="">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="award-section">
                                <div class="row justify-content-center align-content-center align-items-center">
                                    <div class="col-lg-11 col-xl-11">
                                        <div class="awarded mt-2">
                                            <div class="row justify-content-center align-content-center align-items-center">
                                                <div class=" col-xl-4 col-lg-4  col-sm-10 ">
                                                    <div class={styles.newtown}>
                                                        <h2 class="font-34  font-bold text-gradient gradient1 ">Awards &
                                                            Recogniation
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div class="col-lg-1"></div>
                                                <div class="col-lg-6 col-xl-6  mt-2">
                                                    <Image src={logo} class="img-fluid" alt="Awards" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class={styles.textcenter}>
                                    <div class="">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class={styles.trustedsocial}>
                                                    <div class={styles.trust}>
                                                        <h3 className='mb-0'>Trusted by</h3>
                                                    </div>
                                                    <div className={styles.icons}>
                                                        <Image src={logo1} className='img-fluid' />
                                                        <Image src={logo2} className='img-fluid' />
                                                        <Image src={logo3} className='img-fluid' />
                                                        <Image src={logo4} className='img-fluid' />
                                                        <Image src={logo5} className='img-fluid' />
                                                    </div>
                                                    <div class={styles.star}>
                                                        <Image src={star} className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>



        </>
    )
}

export default Headerlphome