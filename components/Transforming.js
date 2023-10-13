import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Transforming.module.css'
import Image from 'next/image'
import Link from 'next/link'

import publication1 from '/public/images/fast/4.webp'

const Transforming  = () => {
    return (
        <>

            <section className={styles.py120}>
                <Container>
                    <Row className={styles.almost}>
                        <Col md={5}>

                            <Image quality={75} src={publication1} width="717" height="589" alt="bitswits" className="img-fluid"  />

                        </Col>
                        <Col md={6}>
                            <h3 className='font20 black fontf font-bold'>A <span className='grdiant'>Walkthrough</span> Of Our Expertise</h3>
                            <h2 className='font30 black fontf font-bold'> Transforming Ideas Into User-friendly Apps: Partner With The Trusted <span className='grdiant'>Mobile App Development</span> Agency! </h2>
                            <p className='font16 black fontf font-medium mt-3'>Step into the dynamic world of mobile apps, where we bring innovation and creativity to every project. Our mobile app developers are masters at making visually appealing and easy-to-use apps. We work with you from ideation to launch to ensure that your app exceeds your expectations and aligns perfectly with your business goals.</p>
                            <div className="mt-4">
                                <Link href="#" className={styles.sty} tabIndex="0">Talk To Our Experts</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Transforming 