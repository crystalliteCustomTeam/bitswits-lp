import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Footerlpdubai.module.css'
//images
import call from '../public/images/icons/phone-icon.webp'
import mail from '../public/images/icons/email-icon.webp'
import fb from '../public/images/icons//fb-icon.webp'
import inta from '../public/images/icons/insta-icon.webp'
import tweet from '../public/images/icons/twitter-icon.webp'
import linkedin from '../public/images/icons/linkedin-icon.webp'
import youtube from '../public/images/icons/youtube-icon.webp'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import icon1 from '../public/images/awards/award1.png'
import icon2 from '../public/images/awards/award2.png'
import icon3 from '../public/images/awards/award3.png'
import icon4 from '../public/images/awards/award4.png'
import icon5 from '../public/images/awards/award5.png'
import icon6 from '../public/images/awards/award6.png'
import icon7 from '../public/images/awards/award7.png'
import icon8 from '../public/images/awards/award8.png'
import icon9 from '../public/images/awards/award9.png'
import icon10 from '../public/images/awards/award10.png'
import icon11 from '../public/images/awards/award11.png'


const Footerlp = () => {

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };


  return (
    <>
      <footer className={styles.footer}>
        <Container>

        

          <div className={styles.footerNav}>
            <Row>
              <Col lg={5} className="mb-lg-0 mb-2 mb-lg-4">
                <div className={`${styles.footTitle} mb-3 pb-3`}>
                  <h3 className="f-montserrat f-w f-22">Services</h3>
                </div>
                <Row>
                  <Col md={6}>
                    <ul className='p-0 mb-0'>
                      <li><Link href="#">Ios App Development</Link></li>
                      <li><Link href="#">Mobile App Development</Link></li>
                      <li><Link href="#">Android App Development</Link></li>
                      <li><Link href="#">Flutter App Development</Link></li>
                      <li><Link href="#">React Native App Development</Link></li>
                      <li><Link href="#">Hybrid Mobile Apps Development</Link></li>
                      <li><Link href="#">Cross Platform App Development</Link></li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className='p-0'>
                      <li><Link href="#">Web App Development</Link></li>
                      <li><Link href="#">Augmented Reality Apps Development</Link></li>
                      <li><Link href="#">Custom Mobile Development</Link></li>
                      <li><Link href="#">App Development services</Link></li>
                      <li><Link href="#">Mobile App Developers</Link></li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} className="mb-lg-0 mb-2 mb-lg-4">
                <div className={`${styles.footTitle} mb-3 pb-3`}>
                  <h3 className="f-montserrat f-w f-22">On Demand Solutions</h3>
                </div>
                <Row>
                  <Col md={6}>
                    <ul className='p-0 mb-0'>
                      <li><Link href="#" className="modal-toggle">Game App Development</Link></li>
                      <li><Link href="#" className="modal-toggle">2D Game Development</Link></li>
                      <li><Link href="#" className="modal-toggle">3D Game Development</Link></li>
                      <li><Link href="#" className="modal-toggle">NFT Game Development</Link></li>
                      <li><Link href="#" className="modal-toggle">Blockchain Game Development</Link></li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className='p-0'>
                      <li>
                        <Link href="#" className="modal-toggle">Blockchain Development</Link>
                        <Link href="#" className="modal-toggle">Artificial Intelligence</Link>
                        <Link href="#">Social Media App Development</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col lg={2}>
                <div className={`${styles.footTitle} mb-3 pb-3`}>
                  <h3 className="f-montserrat f-w f-22">Useful Links</h3>
                </div>
                <ul className='p-0 mb-lg-1'>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Works</Link>
                  </li>
              
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Blogs</Link>
                  </li>
                
                </ul>
                <ul className={`${styles.contacts} ${styles.myLinks} p-0`}>
                  <li className="mb-2">
                    <Link href="mailto:info@BitsWits.co">
                      <Image alt="BitsWits" className='img-fluid'
                        src={mail}

                        loading="lazy"
                      />
                      <span className="email f-uppercase">Contact Email</span>
                    </Link>
                  </li>
                  <li className="fw-bold">
                    <Link href="tel:13123795987">
                      <Image alt="BitsWits" className='img-fluid'
                        src={call}

                        loading="lazy"
                      />
                      <span className="number">+1 312 379 5987</span>
                    </Link>
                  </li>
                  <li className="fw-bold">
                    <Link href="tel:18335006007">
                      <Image alt="BitsWits" className='img-fluid'
                        src={call}

                        loading="lazy"
                      />
                      <span className="number">+1 833 500 6007</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
        <div className={styles.footNotes}>
          <Container>
            <Row className="align-items-md-center">
              <Col md={4} lg={3} className="mt-md-0 mt-4">
                <ul className={`${styles.socials} mb-0 p-0`}>
                  <li>
                    <Link href="https://www.facebook.com/officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={fb}

                        loading="lazy"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/officialBitsWits/" target="_blank" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={inta}

                        loading="lazy"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/BitsWits_/" target="_blank" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={tweet}

                        loading="lazy"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={linkedin}

                        loading="lazy"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image alt="BitsWits" className='img-fluid'
                        src={youtube}

                        loading="lazy"
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} lg={6}>
                <p className={`${styles.trmCon} f-montserrat f-12 white f-500 mb-0`}>
                  Copyright © 2024 BitsWits. |
                  <Link href="#" className="white ps-1" target="_blank">
                    Brand Of Bhaoo Incorporation Company
                  </Link>
                </p>
              </Col>
              <Col md={4} lg={3}>
                <div className={styles.termsMain}>
                  <ul className={`${styles.termsCo} p-0 mb-0`}>
                    <li>
                      <Link href="#">Terms of Use</Link>
                    </li>
                    <li>
                      <p className="f-montserrat f-12 white f-500 mb-0 white"> | </p></li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footerlp