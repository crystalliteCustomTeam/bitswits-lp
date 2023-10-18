import React from 'react'
import Image from 'next/image'
import styles from '@/styles/GreaceBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg00 from '../public/images/case-monkey/banner.png'


const Greacebanner = (props) => {
    return (
        <>
            <section className={`${styles.foody} contpost`}>
                <Container>
                    <Row className={styles.foodRow}>
                        <Col lg={12}>
                            {props.title}
                        </Col>
                        <Col lg={6}>
                            {props.para1}
                            {props.para2}
                            {props.para3}
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

export default Greacebanner