import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const CaseBanner = (props) => {
    return (
        <>
            <section className={`${styles.banner} ${styles[props.bannerClass]}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.banSec}>
                                <Image src={props.banLogo} alt="bitswits" className={`img-fluid`} />
                                <h1>{props.title}</h1>
                                <Image src={props.banImg} alt="bitswits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseBanner