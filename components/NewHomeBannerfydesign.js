import React from 'react'
import styles from '@/styles/Newhomeannerfydesign.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '../public/images/banner/newlake.png'
import banImg2 from '../public/images/banner/bannerImg2.png'
import banImg3 from '../public/images/banner/bannerImg1.png'
import banImg4 from '../public/images/banner/bannerImg2.png'
import banImg5 from '../public/images/banner/bannerImg1.png'
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'
import callIcn from '../public/images/banner/call-icon.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RxCross2 } from 'react-icons/rx'
import Freequote from './Freequote'
import { useState } from "react";
import Router from 'next/router'


const NewHomeBannerfydesign = () => {








    return (
        <section className={styles.banner}>
            <Container fluid>
                <Row className={` ${styles.bannnerproject}  gy-5`}>

                    <Col lg={5}>
                     <div className={styles.php}> 

                     <h3 className='font30 font-bold f-montserrat black m-0'>A Top</h3>
                        <h2 className='font70 font-semibold f-montserrat black m-0 line1'>Mobile App</h2>
                        <h3 className='font40 font-semibold f-montserrat black m-0 line1'>Development Company <br></br> At Your Service </h3>

                        <p className='font16 font-medium f-montserrat black pt-3 line2'>We deliver great results, on time and on budget. Contact us <br></br> to start talking about your project today!</p>

                        <div className={styles.pont}>
                            <Link className={styles.book} href="#">Book A Call</Link>
                            <Link className={styles.about} href="#">Live Chat</Link>
                        </div>

                     </div>

                    </Col>
                    <Col lg={7}>
                        <div className={styles.start}>
                            <Image  src={banImg1} className='img-fluid w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>



        </section>

    )
}

export default NewHomeBannerfydesign