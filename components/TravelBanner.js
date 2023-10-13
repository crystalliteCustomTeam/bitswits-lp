import React from 'react'
import styles from '@/styles/Travelbanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import foldImg00 from '../public/images/case-travel/banner.png'


const TravelBanner = () => {
    return (
        <>
            <section className={styles.people}>
                <Container className='mt-4'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.stock}>
                                <h4 className= {`fontf font30 font-bold black ${styles.travel}`}>Bliss Travel</h4>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Image  alt="bitswits"     src={foldImg00} className='img-fluid w-100' ></Image>
                        </Col>
                        <Col lg={12}>
                           <div className={styles.intention}>
                           <p className={`fontf font16 font-medium black ${styles.giving}`}>Established with the intention of giving unique and once-in-a-lifetime travel experiences to people touring the world, one of the most reputable travel companies, Gateway Tour Agency, works hard to provide people with top-notch quality services. In addition, the travel agency creates unique, personalized packages that not only meet but even go beyond expectations.</p>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TravelBanner