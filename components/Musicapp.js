import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Musicapp.module.css'
import Image from 'next/image'
import Link from 'next/link'

import publication1 from '/public/images/distinguished/1.webp'

const Musicapp = () => {
    return (
        <>

            <section className={styles.py120}>
                <Container>


                    <Row>
                        <Col md={12}>
                            <h3 className='font20 black fontf font-bold center'>
                                SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!
                            </h3>
                            <h2 className='font50 black fontf font-bold center pb-5 textCaps'>We love <span className='grdiant'>transforming product ideas</span> <br></br> into  digital realities</h2>
                        </Col>
                    </Row>
                    <Row className={` ${styles.almost} gy-4`}>
                        <Col md={5}>

                            <Image quality={75} src={publication1} width="717" height="589" alt="bitswits" className="img-fluid"  />

                        </Col>
                        <Col md={6}>
                            <h2 className='font40 black fontf font-bold'>Soul Sound - <span className='grdiant'>Music App</span> </h2>
                            <p className='font14 black fontf font-medium'>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>
                            <div className="mt-4">
                                <Link href="#" className={styles.sty} tabIndex="0">View Case Study</Link>
                                <div className="mt-4">
                                    <Link href="#" className={styles.projects}> View All Projects</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Musicapp