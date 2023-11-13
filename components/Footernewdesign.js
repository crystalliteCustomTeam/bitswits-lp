import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Footernewdsign.module.css'
//
import icon1 from '../public/images/footerimage/1.png'
import icon2 from '../public/images/footerimage/2.png'
import icon3 from '../public/images/footerimage/3.png'
import icon4 from '../public/images/footerimage/4.png'
import icon5 from '../public/images/footerimage/5.png'
import mail from '../public/images/footerimage/email.png'
import call from '../public/images/footerimage/call.png'

const Footernewdesign = () => {



  return (
    <>

      <footer class={styles.footer}>
        <div class="container">
          <div class="footer-navigation">
            <div class="row">
              <div class="col-lg-4 col-xl-4 mb-lg-0 mb-4">
                <div class={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 class="text-white font-bold font-22">Services</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <ul>
                      <li> <Link href="javascript:;">iPhone App
                        Development
                      </Link></li>
                      <li><Link href="javascript:;">Cross
                        Platform App Development</Link></li>
                      <li><Link href="javascript:;">Android App
                        Development</Link></li>
                      <li><Link href="javascript:;">React Native
                        App Development</Link></li>
                      <li> <Link href="javascript:;">Flutter App
                        Development</Link></li>
                      <li><Link href="javascript:;">Wearable App
                        Development</Link></li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul>
                      <li><Link href="javascript:;">UI / UX App Design</Link>
                      </li>

                      <li><Link href="javascript:;">Web App
                        Development</Link></li>
                      <li><Link href="javascript:;">Game Development</Link>
                      </li>
                      <li><Link href="javascript:;">2D Game
                        Development</Link></li>
                      <li><Link href="javascript:;">3D Game
                        Development</Link></li>
                      <li><Link href="javascript:;">Blockchain
                        Game Development</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 mb-lg-0 mb-4">
                <div class={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 class="text-white font-bold font-22">On Demand Solutions</h3>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <ul>
                      <li><Link href="javascript:;" class="modal-toggle">On Demand App Development</Link></li>
                      <li><Link href="javascript:;" class="modal-toggle">Taxi App Solution</Link></li>
                      <li><Link href="javascript:;" class="modal-toggle">Food Delivering App Solutions</Link>
                      </li>
                      <li><Link href="javascript:;" class="modal-toggle">Elearning App Solutions</Link></li>
                      <li><Link href="javascript:;" class="modal-toggle">Lifestyle App Development</Link></li>
                      <li><Link href="javascript:;" class="modal-toggle">Healthcare App Development</Link></li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul>
                      <li><Link href="javascript:;" class="modal-toggle">On Demand eWallet App Solutions</Link>
                      </li>
                      <li><Link href="javascript:;" class="modal-toggle">Fantasy Sports App Development</Link>
                      </li>
                      <li><Link href="javascript:;" class="modal-toggle">Grocery Delivery App Development</Link>
                      </li>
                      <li><Link href="javascript:;" class="modal-toggle">Live Streaming App Development</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2">
                <div class={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 class="text-white font-bold font-22">Useful Links</h3>
                </div>
                <ul>
                <li><Link href="javascript:;">Contact Us</Link></li>
                  <li><Link href="javascript:;">About Us</Link></li>
                  <li><Link href="javascript:;">Works</Link></li>
                  <li><Link href="javascript:;">Testimonials</Link></li>
                  <li><Link href="javascript:;"> Privacy Policy</Link></li>
                  <li><Link href="javascript:;">Terms & Conditions</Link></li>

                </ul>
               
              </div>
              <div class="col-xl-2 col-lg-2">
                <div class={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 class="text-white font-bold font-22">Contact</h3>
                </div>
               <p class={styles.more}>To learn more about our service offerings and industry expertise or to have a Consulting professional contact you directly, please fill out the form below or submit an email & contact number.</p>
                <ul class="contacts my-links">
                  <li class="mb-1 color-s">
                    <Link href="mailto:info@BitsWits.co">
                      <Image alt="BitsWits" className='img-fluid'
                        src={mail}

                        loading="lazy"
                      />
                      <span class={styles.email}>Contact Email</span>
                    </Link>
                  </li>
                  <li class="font-bold color-s">
                    <Link href="tel:13123795987">
                      <Image alt="BitsWits" className='img-fluid'
                        src={call}

                        loading="lazy"
                      />
                      <span class={styles.number}>+1 312 379 5987</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class={` ${styles.footercopyright} container`}>
            <div class="row align-items-md-center pt-3">
              <div class="col-md-4  col-xl-4 col-lg-4  mt-md-0 mt-4">

                <ul class={styles.socials}>
                  <li class={styles.colorp}>Official Channels |</li>
                  <li>
                    <Link href="https://www.facebook.com/officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image width="22" height="22" alt="BitsWits" class="img-fluid" src={icon1} loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="ttps://www.linkedin.com/company/officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" class="img-fluid" src={icon2} loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" class="img-fluid" src={icon3} loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="hhttps://twitter.com/BitsWits_/" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" class="img-fluid" src={icon4} loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/officialBitsWits/" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" class="img-fluid" src={icon5} loading="lazy" />
                    </Link>
                  </li>
                </ul>

              </div>
              <div class="col-md-5 col-lg-5 col-xl-5">

              </div>
              <div class="col-md-3 col-xl-3 col-lg-3">
                <div class={styles.termsMain}>
                  <ul class={styles.termsCondition}>
                    <li><Link href="https://BitsWits.co/terms-and-conditions/" class="text-white font-bold">Terms of Use . </Link></li>
                  
                    <li><Link href="https://BitsWits.co/privacy-policy/" class="text-white font-bold"> Privacy
                      Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.copyrightBottom}>
          <div class="container">
            <div class="row justify-content-center align-items-center text-center">
              <div class="col-md-12 col-lg-12 col-xl-12">
                <p class="font-15 text-white mb-0">
                  Copyright © 2023 BitsWits. All Rights Reserved.
                </p>
              </div>

            </div>
          </div>
        </div>

      </footer>


    </>
  )
}

export default Footernewdesign