import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewHomeHear.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import ButtonIcon from "@/public/newHomePageImages/hear-btn.png"

const NewHomeHear = () => {

    return (
        <>

            <section className={styles.newHomeBg}>


                <div className={styles.videobackground}>

                    <video  width="100%" autoPlay loop muted src="/girls.mp4" type="video/mp4"></video>
                </div>


                <Container className={styles.polt}>

                    <Row>
                        <Col lg={12}>
                            <p className=' f-20 font-bold text-white'>Mobile app development company </p>
                            <h2 className={`${styles.headContent} text-white f-60 font-bold`}>Your Project, Our Expertise <br></br> – A Winning Combination
                            </h2>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                Contact us now
                                    <span>
                                        <Image quality={75} src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewHomeHear