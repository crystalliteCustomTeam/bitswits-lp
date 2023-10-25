import React from 'react'
import styles from "@/styles/NewMblBannerdulicatejump.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import BannerImage from "@/public/andriodapplication/andriod.png"
//
import NewAddress2 from './NewAddress2';
import HomeBannerSlider from './HomeBannerSlider';
import Justbuilditjump from './Justbuilditjump';



const NewHomeBanner = () => {

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} ${styles.just2} text-center f30 font-regular mb-2 mb-lg-0`}>

                                <span>America's Leading <Link class="text-white" href="#">Digital Marketing Company</Link></span>

                            </p>
                            <Link class="text-white" href="#">
                                <h3 className={`${styles.develop} text-center f-45 font-bold mt-3 mb-4`}>
                                    Ready. Steady and BitsWits With Our Class-apart Digital Marketing Services!
                                </h3>
                            </Link>


                            <form className={styles.formalign}>

                                <input type="text" placeholder="Type Name" id="name" name="name" required />
                                <input type="phone" maxlength="15" id="phone" name="phone" placeholder="(000) 000-0000" required />
                                <input type="email" placeholder="Type Your Email" id="email" name="email" required />
                                <input type="text" placeholder="Type Your Website" id="message" name="message" required />
                                <button type="submit" name="saves1" id="butact1" class="primary-btn">Submit Now</button>
                            </form>

                        </Col>
                    </Row>
                </Container>
                <Justbuilditjump />




                {/* <div className={styles.postnuture}>
                    <HomeBannerSlider />
                </div>
                <div className={`${styles.bannerform} blkgrdiant pt-4 pt-lg-5 pb-lg-3 pb-4`}>
                    <NewAddress2 />
                </div> */}
            </section>
        </>
    )
}

export default NewHomeBanner