import React from 'react'
import styles from "@/styles/Supersaleslider.module.css";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import badgelogo from '../public/images/sliderimages/s5.svg'
import { useEffect } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import $ from 'jquery';



const Supersaleslider = () => {





    // useEffect(() => {

    //     if (typeof $.fn.slick !== 'undefined') {

    //         $(".slick")
    //             .on("init", () => {
    //                 $('.slick-slide[data-slick-index="-4"]').addClass("lt4"),
    //                     $('.slick-slide[data-slick-index="-3"]').addClass("lt3"),
    //                     $('.slick-slide[data-slick-index="-2"]').addClass("lt2"),
    //                     $('.slick-slide[data-slick-index="-1"]').addClass("lt1"),
    //                     $('.slick-slide[data-slick-index="1"]').addClass("gt1"),
    //                     $('.slick-slide[data-slick-index="2"]').addClass("gt2"),
    //                     $('.slick-slide[data-slick-index="3"]').addClass("gt3"),
    //                     $('.slick-slide[data-slick-index="4"]').addClass("gt4");
    //             })
    //             .slick({
    //                 centerMode: !0,
    //                 centerPadding: 0,
    //                 slidesToShow: 7,
    //                 infinite: !0,
    //                 loop: !0,
    //                 dots: !1,
    //                 touchThreshold: !1,
    //                 draggable: !1,
    //                 autoplay: !0,
    //                 autoplaySpeed: 2500,
    //                 arrows: !1,
    //                 responsive: [
    //                     { breakpoint: 1024, arrows: !1, settings: { slidesToShow: 5, dots: !1, slidesToScroll: 1, infinite: !0 } },
    //                     { breakpoint: 600, arrows: !1, settings: { slidesToShow: 5, dots: !1, slidesToScroll: 1 } },
    //                     { breakpoint: 480, arrows: !1, settings: { slidesToShow: 5, dots: !1, slidesToScroll: 1 } },
    //                 ],
    //             })
    //             .on("beforeChange", (s, i, l, d) => {
    //                 $(".slick-slide.gt4").removeClass("gt4"),
    //                     $(".slick-slide.gt3").removeClass("gt3"),
    //                     $(".slick-slide.gt2").removeClass("gt2"),
    //                     $(".slick-slide.gt1").removeClass("gt1"),
    //                     $(".slick-slide.lt1").removeClass("lt1"),
    //                     $(".slick-slide.lt2").removeClass("lt2"),
    //                     $(".slick-slide.lt3").removeClass("lt3"),
    //                     $(".slick-slide.lt4").removeClass("lt4");
    //                 let a = l < d && l > 0 ? l - 3 : d - 4,
    //                     e = l < d && l > 0 ? l - 2 : d - 3,
    //                     t = l < d && l > 0 ? l - 1 : d - 2,
    //                     o = l < d && l > 0 ? l : d - 1,
    //                     n = l < d || 0 === d ? d + 1 : l,
    //                     c = l < d || 0 === d ? d + 2 : l + 1,
    //                     k = l < d || 0 === d ? d + 3 : l + 1,
    //                     r = l < d || 0 === d ? d + 4 : l + 1;
    //                 $(`.slick-slide[data-slick-index="${a}"]`).addClass("lt4"),
    //                     $(`.slick-slide[data-slick-index="${e}"]`).addClass("lt3"),
    //                     $(`.slick-slide[data-slick-index="${t}"]`).addClass("lt2"),
    //                     $(`.slick-slide[data-slick-index="${o}"]`).addClass("lt1"),
    //                     $(`.slick-slide[data-slick-index="${n}"]`).addClass("gt1"),
    //                     $(`.slick-slide[data-slick-index="${c}"]`).addClass("gt2"),
    //                     $(`.slick-slide[data-slick-index="${k}"]`).addClass("gt3"),
    //                     $(`.slick-slide[data-slick-index="${r}"]`).addClass("gt4"),
    //                     9 === l &&
    //                     0 === d &&
    //                     ($(`.slick-slide[data-slick-index="${l - 4}"]`).addClass("lt5"),
    //                         $(`.slick-slide[data-slick-index="${l - 3}"]`).addClass("lt4"),
    //                         $(`.slick-slide[data-slick-index="${l - 2}"]`).addClass("lt3"),
    //                         $(`.slick-slide[data-slick-index="${l - 1}"]`).addClass("lt2"),
    //                         $(`.slick-slide[data-slick-index="${l}"]`).addClass("lt1"),
    //                         $(`.slick-slide[data-slick-index="${l + 1}"]`).addClass("gt1"),
    //                         $(`.slick-slide[data-slick-index="${l + 2}"]`).addClass("gt2"),
    //                         $(`.slick-slide[data-slick-index="${l + 3}"]`).addClass("gt3"),
    //                         $(`.slick-slide[data-slick-index="${l + 4}"]`).addClass("gt4"),
    //                         $(`.slick-slide[data-slick-index="${l + 4}"]`).addClass("gt5")),
    //                     0 === l &&
    //                     9 === d &&
    //                     ($(`.slick-slide[data-slick-index="${l - 3}"]`).addClass("gt4"),
    //                         $(`.slick-slide[data-slick-index="${l - 2}"]`).addClass("gt3"),
    //                         $(`.slick-slide[data-slick-index="${l - 1}"]`).addClass("gt2"),
    //                         $(`.slick-slide[data-slick-index="${l}"]`).addClass("gt1"),
    //                         $(`.slick-slide[data-slick-index="${l - 1}"]`).addClass("lt1"),
    //                         $(`.slick-slide[data-slick-index="${l - 2}"]`).addClass("lt2"),
    //                         $(`.slick-slide[data-slick-index="${l - 3}"]`).addClass("lt3"),
    //                         $(`.slick-slide[data-slick-index="${l - 4}"]`).addClass("lt4"),
    //                         $(`.slick-slide[data-slick-index="${l - 4}"]`).addClass("lt5"));
    //             });
    //     }
    // }, []);

    useEffect(() => {
        $('.your-slick-carousel').slick({
          // Slick Carousel settings
          slidesToShow: 3,
          slidesToScroll: 1,
          // Add more settings as needed
        });
      }, []);


    return (
        <>
            <section class="bg-offwhite overflow-hidden PortfolioSection position-relative">
                <div class="container">
                    <div class="row justify-content-center align-items-center pb-5">
                        <div class="col-lg-12 col-xl-12">
                            <h5 class="font-18 fw-700 font-bold text-center pt-4 color-p1 font-bold">SOME OF THE GLIMPSES OF OUR
                                RECENT
                                CONQUESTS!</h5>
                            <h2 class="font-50 fw-700 font-bold text-gradient gradient1 text-center">We Love Transforming
                                Product ideas
                                Into Digital Realities</h2>
                        </div>
                    </div>
                </div>
                {/* <div class="slick">

                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>

                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>

                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>

                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>
                    <div><span><img loading="lazy" src="https://BitsWits.co/supersale/src/images/app/r3.svg" class="cover-image" alt="supersale" /></span></div>

                </div> */}

<div className="your-slick-carousel">
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      {/* Add more slides as needed */}
    </div>
            </section>
        </>
    )
}

export default Supersaleslider