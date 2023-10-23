import React from 'react'
import styles from "@/styles/NewMblWho.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

//
import WhoImage from "@/public/images/aipost/who_image.png"
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"


const NewaiWho = (props) => {

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.text_content}>
                                <h2 className='text-white f-60 font-bold'> {props.title} </h2>
                                <p className={`${styles.wid} f-20 text-white`}>
                                    {props.subtitle}
                                </p>
                                <p className={`${styles.width} font14`}>
                                    {props.para}
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

export default NewaiWho