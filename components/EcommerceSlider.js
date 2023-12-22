
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from "@/styles/EcommerceSlider.module.css";
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Swiper from 'swiper/bundle'; 
import React, { useEffect, useRef } from 'react';
// Import images
import { register } from "swiper/element/bundle";


SwiperCore.use([Navigation, Autoplay]);

const EcommerceSlider = () => {


    // const swiperPrevSlide = document.querySelector('.swiper-slide-prev');
    // const swiperEl = document.querySelector('.swiper-container');

    // const activeSlide = this.slides[this.activeIndex];

    // if (swiperPrevSlide) {
    //     const prevSibling = swiperPrevSlide;
    //     prevSibling.classList.add('previous-sibling');
    // }

    


    const slides = [
        { img1fold: '../../ecommerce/1.webp' },
        { img1fold: '../../ecommerce/2.webp' },
        { img1fold: '../../ecommerce/3.webp' },
        { img1fold: '../../ecommerce/4.webp' },
        { img1fold: '../../ecommerce/5.webp' },
        { img1fold: '../../ecommerce/6.webp' },
        { img1fold: '../../ecommerce/7.webp' },
        { img1fold: '../../ecommerce/2.webp' },
        { img1fold: '../../ecommerce/3.webp' },
        { img1fold: '../../ecommerce/4.webp' },
        { img1fold: '../../ecommerce/5.webp' },
        { img1fold: '../../ecommerce/6.webp' },
        { img1fold: '../../ecommerce/7.webp' },

    ];


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
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                },
                1340: {
                    slidesPerView: 3,
                },
            },
        };
      


        Object.assign(swiperElRef.current, params);
        swiperElRef.current.initialize();



      



    }, []);


    // const swiperElRef = useRef(null);

    // useEffect(() => {
    //     const mySwiper = new SwiperCore(swiperElRef.current, {
    //         slidesPerView: 7,
    //         centeredSlides: true,
    //         loop: true,
    //         autoplay: {
    //             delay: 5000,
    //         },
    //     });
    //     // Remove the 'previous-sibling' class from all elements with the class 'swiper-slide'
    //     document.querySelectorAll('.swiper-slide').forEach((element) => {
    //         element.classList.remove('previous-sibling');
    //     });

    //     // Add the 'previous-sibling' class to the immediate previous sibling's previous sibling of the active slide
    //     const activeSlide = mySwiper.slides[mySwiper.activeIndex];
    //     const prevSibling = activeSlide.previousElementSibling;

    //     if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
    //         const prevPrevSibling = prevSibling.previousElementSibling;
    //         if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
    //             prevPrevSibling.classList.add('previous-sibling');
    //         }
    //     }
    //     mySwiper.on('slideChange', () => {
    //         // Remove the 'previous-sibling' class from all elements with the class 'swiper-slide'
    //         document.querySelectorAll('.swiper-slide').forEach((element) => {
    //             element.classList.remove('previous-sibling');
    //         });

    //         // Add the 'previous-sibling' class to the immediate previous sibling's previous sibling of the active slide
    //         const activeSlide = mySwiper.slides[mySwiper.activeIndex];
    //         const prevSibling = activeSlide.previousElementSibling;

    //         if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
    //             const prevPrevSibling = prevSibling.previousElementSibling;
    //             if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
    //                 prevPrevSibling.classList.add('previous-sibling');
    //             }
    //         }
    //     });

    //     // Clean up when the component is unmounted
    //     return () => {
    //         mySwiper.destroy();
    //     };
    // }, []);





    return (
        <section className={styles.slider}>
            <Row className='ecommerceslide'>
                <Col lg={12}>


                    {/* <div className="swiper-container" ref={swiperElRef}>
                        <div className="swiper-wrapper">
                            {
                                slides?.map((e, i) => (
                                    <div className="swiper-slide" key={i}>
                                        <div className={styles.post}>
                                            <img
                                                src={e.img1fold}
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
                                <swiper-slide class='newfold' key={index}>
                                    <div>
                                        <div className="w-[90%] m-auto py-10">
                                            <div className="card testimonialscard">
                                                <img quality={95}
                                                    src={testimonial.img1fold}
                                                    alt='bitswits'

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            ))}
                    </swiper-container>
                </Col>
            </Row>
        </section>
    );
};

export default EcommerceSlider;