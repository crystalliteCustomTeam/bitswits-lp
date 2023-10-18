import React from 'react'
import Image from 'next/image'
import styles from '@/styles/HomeConnectBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg00 from '../public/images/case-homeconnect/banner.png'


const HomeConnectbanner = (props) => {
    return (
        <>
            <section className={`${styles.foody} contpost`}>
                <Container>
                    <Row className={styles.foodRow}>
                        <Col lg={12}>
                            {props.title}
                        </Col>
                        <Col lg={9}>
                            {props.para2}
                        </Col>
                        <Col lg={6}>
                            <Image alt="bitswits" src={foldImg00} className={`${styles.banImg} img-fluid`}></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeConnectbanner