import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
//css
import styles from '@/styles/NewBannerhomeFy.module.css'
//images
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'
import rev1 from '../public/images/newbanner/one.png'
import rev2 from '../public/images/newbanner/two.png'
import rating from '../public/images/homebanner/rating.webp'

const NewBannerFy = (props) => {

    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }


    return (
        <section className={styles.newbanner}>
            <Container fluid className='mx-xl-5 px-xxl-5 pe-xl-4'>
                <Row className={`${styles.bannnerproject}`}>
                    <Col lg={8}>
                        <div className={`${styles.banerTxt} ps-0 ps-md-3 ps-lg-0`}>

                            {props.subtitle ?
                                <p className="f-montserrat font-bold f-20 mb-1 white lheight24"> {props.subtitle}</p>
                                :
                                ''
                            }


                            {props.title ?
                                <h1 className='font65 white fontf font-bold line60 mb-3'>{props.title}</h1>
                                :
                                ''
                            }



                            {props.title2 ?
                                <p className="f-18 white f-montserrat mb-2 line30 font-bold">
                                    {props.title2}
                                </p>
                                :
                                ''
                            }




                            {props.text ?
                                <p className="f-18 white f-montserrat mb-2 line30 font-regular">
                                    {props.text}
                                </p>
                                :
                                ''
                            }






                            {props.text ?
                                <p className="f-18 white f-montserrat mb-3 mb-xxl-4 line30 font-medium">
                                    {props.text2}
                                </p>
                                :
                                ''
                            }

                            <div className={`${styles.bttnsto} mt-5`}>
                                <Link className={styles.bttns1} onClick={modal} href="#">
                                    Book A Call
                                </Link>
                                <Link className={styles.bttns2} href="#">
                                    Live Chat
                                </Link>
                            </div>

                            <div className={`${styles.revImg} mt-5`}>
                                <Image quality={75} src={rev1} alt="bitswits" className='img-fluid' />
                                <Image quality={75} src={rev2} alt="bitswits" className='img-fluid' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='p-0'>
                        <div className="d-none d-xl-block center">

                            <p className="f-16 f-montserrat white f-700 t-center mb-0">With The Rating Of</p>

                            <h3 className="font100 f-montserrat white f-500 t-center mb-0">4.9</h3>

                            <div className="stars">
                                <Image alt="bitswits" src={rating} width="271" height="31" className="Image-fluid" loading="lazy" />
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default NewBannerFy
