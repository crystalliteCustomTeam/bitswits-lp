import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Testimonailslider.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import banImg1 from '../public/images/projectprocess/phon.png'
import Link from 'next/link';
//images
import slideImg1 from '../public/images/clients/client1.png'
import slideImg2 from '../public/images/clients/client2.png'
import slideImg3 from '../public/images/clients/client3.png'
import slideImg4 from '../public/images/clients/client4.png'
import slideImg5 from '../public/images/clients/client5.png'
import slidebefore from '../public/images/clients/stars.png'

export default function Testimonailslider() {


    var clientsthink = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
    };



    return (
        <>
            <section class={styles.hook}>
                <Container>
                    <Slider {...clientsthink} className={`${styles.clintSlider} clintSlider`}>
                        {/* <Image alt="bitswits" className='img-fluid'
                            src={slideImg1}

                        /> */}
                    </Slider>
                </Container>

            </section>
        </>
    )
}

