import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewLpExpertise.module.css'
//
import foldimg from "@/public/newlppage/music.png"

const NewLpExpertise = () => {
    return (
        <>
            <section className={styles.newExperties}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div>
                                <Image quality={75} src={foldimg} alt='Bitswits' loading="eager" />
                            </div>
                        </Col>
                        <Col lg={6} className='mx-auto'>
                            <div>
                                <p className={`font16 mb-0 font-bold`}>A Walkthrough Of Our Expertise</p>
                                <h3 className={`f-50 font-bold my-1`}>Transforming Ideas Into User-friendly Apps: Partner With The Trusted Mobile App Development Agency!</h3>
                                <p className={`font16 mb-0 font-normal`}>Step into the dynamic world of mobile apps, where we bring innovation and creativity to every project. Our mobile app developers are masters at making visually appealing and easy-to-use apps. We work with you from ideation to launch to ensure that your app exceeds your expectations and aligns perfectly with your business goals.</p>
                                <Link className={styles.book} href="#">GET FREE CONSULTATION</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpExpertise
