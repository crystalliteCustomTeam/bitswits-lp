import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/HireBanner.module.css'


const HireBanner = (props) => {
    return (
        <>
            <section className={`${styles.banner} ${styles[props.bannerClass]}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.banSec}>
                                <h3>{props.subtitle}</h3>
                                <h1 className='font55home'>{props.title}</h1>
                                <p>{props.para}</p>
                                <div className={styles.btns}>
                                    <Link className={`${styles.btn} ${styles.btn1}`} href="tel:+18335006007">Book A Call</Link>
                                    <Link className={`${styles.btn} ${styles.btn2}`} href="#">Live Chat</Link>
                                </div>
                                <Image quality={90} src={props.banImg} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HireBanner
