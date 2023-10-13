import React from 'react'
import styles from '@/styles/Trusted.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import icon1 from '../public/images/trusted/icon1.png'
import icon2 from '../public/images/trusted/icon2.png'
import icon3 from '../public/images/trusted/icon3.png'
import icon4 from '../public/images/trusted/icon4.png'
import icon5 from '../public/images/trusted/icon5.png'
import icon6 from '../public/images/trusted/icon6.png'
import icon7 from '../public/images/trusted/icon7.png'
import icon8 from '../public/images/trusted/icon8.png'
import icon9 from '../public/images/trusted/icon9.png'
import icon10 from '../public/images/trusted/icon10.png'
import icon11 from '../public/images/trusted/icon11.png'
import icon12 from '../public/images/trusted/icon12.png'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Trusted = () => {

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
      <section className={styles.trusted}>
        <Container>
          <Row>
            <Col lg={12}>
              <h4 className='font-semibold font25 fontf white center'>TRUSTED BY STARTUPS TO PUBLICLY LISTED COMPANIES</h4>
            </Col>
          </Row>
          <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon1} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon2} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon3} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon4} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon5} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon6} className="img-fluid" />
            </div>
            <div className={`${styles.strpImg} ${styles.minImg}`}>
              <Image  alt="bitswits"      src={icon7} className="img-fluid" />
            </div>
            <div className={`${styles.strpImg} ${styles.minImg}`}>
              <Image  alt="bitswits"      src={icon8} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon9} className="img-fluid" />
            </div>
            <div className={`${styles.strpImg} ${styles.minImg}`}>
              <Image  alt="bitswits"      src={icon10} className="img-fluid" />
            </div>
            <div className={`${styles.strpImg} ${styles.minImg}`}>
              <Image  alt="bitswits"      src={icon11} className="img-fluid" />
            </div>
            <div className={styles.strpImg}>
              <Image  alt="bitswits"      src={icon12} className="img-fluid" />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  )
}

export default Trusted