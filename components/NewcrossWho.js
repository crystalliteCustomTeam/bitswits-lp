import React from 'react'
import styles from "@/styles/NewMblWho.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

//
import WhoImage from "@/public/images/cross/who_image.png"
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"


const NewcrossWho = () => {

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.text_content}>
                                <h1 className='text-white f-60 font-bold'>Who we are.</h1>
                                <p className={`${styles.wid} f-20 text-white`}>
                                    We build greater futures through innovation and collective knowledge.
                                </p>
                                <p className={`${styles.width} font14`}>
                                    Bitswits is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 10+ years.
                                </p>
                            </div>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    Get to know us
                                    <span>
                                        <Image quality={75} src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>

                        <Col lg={10}>
                            <div className={`${styles.secImagebg} text-center pt-4`}>
                                <Image quality={75} src={WhoImage} className={`${styles.secImage} img-fluid`} />
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section >


        </>
    )
}

export default NewcrossWho