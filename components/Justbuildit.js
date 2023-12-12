import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Justbuildit.module.css";
//
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from "../public/images/banner/bannerImg1.png";
import banImg2 from "../public/images/banner/bannerImg2.png";
import banImg3 from "../public/images/banner/bannerImg1.png";
import banImg4 from "../public/images/banner/bannerImg2.png";
import banImg5 from "../public/images/banner/bannerImg1.png";
import Slider from "react-slick";

const Justbuildit = (props) => {
  const router = useRouter();

  // const swiperRef = useRef(null);
  // useEffect(() => {
  //   register();
  //   const params = {
  //     slidesPerGroupSkip: 1,
  //     // speed: 1500,
  //     slidesPerView: 1,
  //     // navigation: false,
  //     // spaceBetween: 20,
  //     loop: true,
  //     autoplay: true,
  //     // autoplayDelay: 2500,
  //     //   injectStyles: [
  //     //     `
  //     //             .swiper-pagination {
  //     //                 bottom: 5px !important;
  //     //             }
  //     //             .swiper-pagination-bullet {
  //     //                 width: 16px;
  //     //                 height: 16px;
  //     //                 text-align: center;
  //     //                 line-height: 16px;
  //     //                 font-size: 8px;
  //     //                 color: rgb(255, 255, 255);
  //     //                 opacity: 1;
  //     //                 background: #DB3340;
  //     //             }
  //     //             .swiper-pagination-bullet-active {
  //     //                 color: #fff;
  //     //                 background: #007AFF;
  //     //             }
  //     //         `,
  //     //   ],
  //     //   pagination: {
  //     //     clickable: true,
  //     //     renderBullet: function (index, className) {
  //     //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     //     },
  //     //   },
  //     // paginationType: "progressbar",
  //     breakpoints: {
  //       576: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 3,
  //       },
  //       992: {
  //         slidesPerView: 4,
  //       },
  //       1200: {
  //         slidesPerView: 5,
  //       },
  //     },
  //   };
  //   // Assign it to swiper element
  //   Object.assign(swiperRef.current, params);
  //   // initialize swiper
  //   swiperRef.current.initialize();
  // }, [swiperRef]);

  var bannerslider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        className={`${
          router.pathname == "/mobile-application-duplicate"
            ? styles.slide1
            : styles.slide
        }  ${props.paddingBottom}`}
      >
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className={styles.just}>Build Your App</h2>
              <h3 className={styles.develop}>
                Hire BitsWits & Watch Your App Ideas Aspire!
              </h3>

              <div className={`${styles.pont} mb-4 mb-md-0`}>
                <Link className={styles.about} href="tel:+18335006007">
                  LET'S CONNECT
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <swiper-container
          ref={swiperRef}
          init={false}
          className="mt-5 pt-5 jstBuild"
        >
          <swiper-slide>
            <div className={styles.strpImg}>
              <Image alt="BitsWits" src={banImg1} className="img-fluid w-100" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={styles.strpImg}>
              <Image alt="BitsWits" src={banImg2} className="img-fluid w-100" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={styles.strpImg}>
              <Image alt="BitsWits" src={banImg3} className="img-fluid w-100" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={styles.strpImg}>
              <Image alt="BitsWits" src={banImg4} className="img-fluid w-100" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={styles.strpImg}>
              <Image alt="BitsWits" src={banImg5} className="img-fluid w-100" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={styles.strpImg}>
              <Image alt="BitsWits" src={banImg5} className="img-fluid w-100" />
            </div>
          </swiper-slide>
        </swiper-container> */}

        <Slider {...bannerslider} className="mt-3 mt-sm-5 jstBuild">
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={banImg1} className="img-fluid w-100" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={banImg2} className="img-fluid w-100" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={banImg3} className="img-fluid w-100" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={banImg4} className="img-fluid w-100" />
          </div>
          <div className={styles.strpImg}>
            <Image alt="BitsWits" src={banImg5} className="img-fluid w-100" />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Justbuildit;
