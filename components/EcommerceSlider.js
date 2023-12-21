import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "@/styles/EcommerceSlider.module.css";
//
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// Import images
SwiperCore.use([Navigation, Autoplay]);


const EcommerceSlider = () => {

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
        const mySwiper = new SwiperCore(swiperElRef.current, {
            slidesPerView: 7,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 5000,
            },
        });
        document.querySelectorAll('.swiper-slide').forEach((element) => {
            element.classList.remove('previous-sibling');
        });

        const activeSlide = mySwiper.slides[mySwiper.activeIndex];
        const prevSibling = activeSlide.previousElementSibling;

        if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
            const prevPrevSibling = prevSibling.previousElementSibling;
            if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
                prevPrevSibling.classList.add('previous-sibling');
            }
        }
        mySwiper.on('slideChange', () => {
            document.querySelectorAll('.swiper-slide').forEach((element) => {
                element.classList.remove('previous-sibling');
            });

            const activeSlide = mySwiper.slides[mySwiper.activeIndex];
            const prevSibling = activeSlide.previousElementSibling;

            if (prevSibling && prevSibling.classList.contains('swiper-slide')) {
                const prevPrevSibling = prevSibling.previousElementSibling;
                if (prevPrevSibling && prevPrevSibling.classList.contains('swiper-slide')) {
                    prevPrevSibling.classList.add('previous-sibling');
                }
            }
        });

        return () => {
            mySwiper.destroy();
        };
    }, []);


    return (
        <section className={styles.slider}>
            <Row className='ecommerceslide'>
                <Col lg={12}>


                    <div className="swiper-container" ref={swiperElRef}>
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
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default EcommerceSlider;
