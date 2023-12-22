import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import styles from "@/styles/Homeslider.module.css";
//
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import styles from "@/styles/Homeslider.module.css";
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import { register } from "swiper/element/bundle";
SwiperCore.use([Navigation, Autoplay]);


const MySwiperComponent = () => {



  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   const mySwiper = new SwiperCore(swiperElRef.current, {
  //     slidesPerView: 7,
  //     centeredSlides: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 5000,
  //     },
  //   });
  //   // Remove the 'previous-sibling' class from all elements with the class 'swiper-slide'
  //   document.querySelectorAll('.swiper-slide').forEach((element) => {
  //     element.classList.remove('previous-sibling');
  //   });

  //   // Add the 'previous-sibling' class to the immediate previous sibling's previous sibling of the active slide
  //   const activeSlide = mySwiper.slides[mySwiper.activeIndex];
  //   const prevSibling = activeSlide.previousElementSibling;

  //   if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
  //     const prevPrevSibling = prevSibling.previousElementSibling;
  //     if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
  //       prevPrevSibling.classList.add('previous-sibling');
  //     }
  //   }
  //   mySwiper.on('slideChange', () => {
  //     // Remove the 'previous-sibling' class from all elements with the class 'swiper-slide'
  //     document.querySelectorAll('.swiper-slide').forEach((element) => {
  //       element.classList.remove('previous-sibling');
  //     });

  //     // Add the 'previous-sibling' class to the immediate previous sibling's previous sibling of the active slide
  //     const activeSlide = mySwiper.slides[mySwiper.activeIndex];
  //     const prevSibling = activeSlide.previousElementSibling;

  //     if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
  //       const prevPrevSibling = prevSibling.previousElementSibling;
  //       if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
  //         prevPrevSibling.classList.add('previous-sibling');
  //       }
  //     }
  //   });

  //   // Clean up when the component is unmounted
  //   return () => {
  //     mySwiper.destroy();
  //   };
  // }, []);

  const swiperElRef = useRef(null);
  useEffect(() => {
    register();
    const params = {
      slidesPerView: 9,
      injectStyles: [
        `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00C0E4;
        }
      `,
      ],
     
    };



    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();







  }, []);

  const slides = [
    {
      avatar: "images/logoservices/loop/1.webp",
    },
    {
      avatar: "images/logoservices/loop/2.webp",
    },
    {
      avatar: "images/logoservices/loop/3.webp",
    },
    {
      avatar: "images/logoservices/loop/4.webp",
    },
    {
      avatar: "images/logoservices/loop/5.webp",
    },
    {
      avatar: "images/logoservices/loop/6.webp",
    },
    {
      avatar: "images/logoservices/loop/7.webp",
    },
    {
      avatar: "images/logoservices/loop/1.webp",
    },
    {
      avatar: "images/logoservices/loop/2.webp",
    },
    {
      avatar: "images/logoservices/loop/3.webp",
    },
    {
      avatar: "images/logoservices/loop/4.webp",
    },
    {
      avatar: "images/logoservices/loop/5.webp",
    },
    {
      avatar: "images/logoservices/loop/6.webp",
    },
    {
      avatar: "images/logoservices/loop/7.webp",
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
              <h2 class="black f-40 f-700 center mb-5">
                We Love Transfoming Product ideas into <br></br> Digital Reality{" "}
              </h2>
            </Col>
          </Row>
        </Container>
        <div className={styles.slider}>

          {/* <div className="swiper-container" ref={swiperElRef}>
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
          </div> */}
          <swiper-container
            init={false}
            ref={swiperElRef}
            centered-slides="false"
            autoplay-delay="3000"
            loop="true"


          >
            {slides &&
              slides.map((testimonial, index) => (
                <swiper-slide class='newfold newtown' key={index}>
                  <div>
                    <div className="w-[90%] m-auto py-10">
                      <div className="card">
                        <img quality={95}
                          src={testimonial.avatar}
                          alt='bitswits'

                        />

                      </div>
                    </div>
                  </div>
                </swiper-slide>
              ))}
          </swiper-container>

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
