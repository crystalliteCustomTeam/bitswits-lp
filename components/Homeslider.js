import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import styles from "@/styles/Homeslider.module.css";
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';

SwiperCore.use([Navigation, Autoplay]);

const MySwiperComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const mySwiper = new SwiperCore(swiperElRef.current, {
      slidesPerView: 7,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
    // Remove the 'previous-sibling' class from all elements with the class 'swiper-slide'
    document.querySelectorAll('.swiper-slide').forEach((element) => {
      element.classList.remove('previous-sibling');
    });

    // Add the 'previous-sibling' class to the immediate previous sibling's previous sibling of the active slide
    const activeSlide = mySwiper.slides[mySwiper.activeIndex];
    const prevSibling = activeSlide.previousElementSibling;

    if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
      const prevPrevSibling = prevSibling.previousElementSibling;
      if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
        prevPrevSibling.classList.add('previous-sibling');
      }
    }
    mySwiper.on('slideChange', () => {
      // Remove the 'previous-sibling' class from all elements with the class 'swiper-slide'
      document.querySelectorAll('.swiper-slide').forEach((element) => {
        element.classList.remove('previous-sibling');
      });

      // Add the 'previous-sibling' class to the immediate previous sibling's previous sibling of the active slide
      const activeSlide = mySwiper.slides[mySwiper.activeIndex];
      const prevSibling = activeSlide.previousElementSibling;

      if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
        const prevPrevSibling = prevSibling.previousElementSibling;
        if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
          prevPrevSibling.classList.add('previous-sibling');
        }
      }
    });

    // Clean up when the component is unmounted
    return () => {
      mySwiper.destroy();
    };
  }, []);



  const slides = [
    {
      avatar: "images/logoservices/1.svg",
    },
    {
      avatar: "images/logoservices/2.svg",
    },
    {
      avatar: "images/logoservices/3.svg",
    },
    {
      avatar: "images/logoservices/4.svg",
    },
    {
      avatar: "images/logoservices/5.svg",
    },
    {
      avatar: "images/logoservices/6.svg",
    },
    {
      avatar: "images/logoservices/7.svg",
    },
    {
      avatar: "images/logoservices/1.svg",
    },
    {
      avatar: "images/logoservices/2.svg",
    },
    {
      avatar: "images/logoservices/3.svg",
    },
    {
      avatar: "images/logoservices/4.svg",
    },
    {
      avatar: "images/logoservices/5.svg",
    },
    {
      avatar: "images/logoservices/6.svg",
    },
    {
      avatar: "images/logoservices/7.svg",
    },
  ];

  return (

    <>



      <section className={`${styles.peace} newbird`}>
        <Container>
          <Row>
            <Col xl={12}>
              <h3 class="black f-20 f-700 center mb-4">
                SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!
              </h3>
              <h2 class="black f-40 f-700 center">
                We Love Transfoming Product ideas into <br></br> Digital Reality{" "}
              </h2>
            </Col>
          </Row>
        </Container>
        <div className={styles.slider}>

          <div className="swiper-container" ref={swiperElRef}>
            <div className="swiper-wrapper">
              {
                slides?.map((e, i) => (
                  <div className="swiper-slide" key={i}>
                    <div>
                      <img
                        src={e.avatar}
                        alt='bitswits'

                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </section>

      <section className={styles.view1sec}>
        <Container>
          <Row>
            <Col xl={12}>
              <Link href="#" className={styles.view}>
                View All Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MySwiperComponent;
