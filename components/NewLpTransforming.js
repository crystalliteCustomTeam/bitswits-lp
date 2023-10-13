import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewLpTransforming.module.css'
//
import foldimg from "@/public/newlppage/transform1.png"
import foldimg2 from "@/public/newlppage/transform2.png"
import foldimg3 from "@/public/newlppage/transform3.png"

const NewLpTransforming = () => {
    return (
        <>
            <section className={styles.newExperties}>
                <Container>
                    <Row className='align-items-center gap-5 gap-lg-0'>
                        <Col lg={12}>
                            <p className='text-center f-18 text-black font-bold mb-0'>SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!</p>
                            <h3 className='text-center f-45 font-bold mb-sm-5'>
                                We Love Transforming Product Ideas Into <br className='d-xl-block d-none'></br>
                                Digital Realities
                            </h3>
                        </Col>
                    </Row>

                    <Row className='align-items-center'>
                        <Col lg={6} className='mx-auto'>
                            <div>
                                <h3 className={`f-40 font-bold my-1`}>Soul Sound - Music App</h3>
                                <p className={`font14 mb-0 font-normal`}>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>

                                <h5 className={`f-18 font-bold mt-4`}>SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!</h5>
                                <p className={`font14 mb-0 font-normal`}>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>
                                <Link className={styles.book} href="#">VIEW CASE STUDY</Link>
                            </div>
                        </Col>
                        <Col lg={6} className=''>
                            <div>
                                <Image quality={75} src={foldimg} alt='Bitswits' loading="eager" />
                            </div>
                        </Col>
                    </Row>

                    <Row className={`${styles.transformRow} align-items-center`}>
                        <Col lg={6} className='mt-md-5'>
                            <div>
                                <Image quality={75} src={foldimg2} alt='Bitswits' loading="eager" />
                            </div>
                        </Col>
                        <Col lg={6} className='mx-auto mt-md-5 '>
                            <div>
                                <h3 className={`f-40 font-bold my-1`}>Soul Sound - Music App</h3>
                                <p className={`font14 mb-0 font-normal`}>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>

                                <h5 className={`f-18 font-bold mt-4`}>SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!</h5>
                                <p className={`font14 mb-0 font-normal`}>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>
                                <Link className={styles.book} href="#">VIEW CASE STUDY</Link>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center'>
                        <Col lg={6} className='mx-auto mt-md-5'>
                            <div>
                                <h3 className={`f-40 font-bold my-1`}>Soul Sound - Music App</h3>
                                <p className={`font14 mb-0 font-normal`}>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>

                                <h5 className={`f-18 font-bold mt-4`}>SOME OF THE GLIMPSES OF OUR RECENT CONQUESTS!</h5>
                                <p className={`font14 mb-0 font-normal`}>Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!</p>
                                <Link className={styles.book} href="#">VIEW CASE STUDY</Link>
                            </div>
                        </Col>
                        <Col lg={6} className='mt-md-5'>
                            <div>
                                <Image quality={75} src={foldimg3} alt='Bitswits' loading="eager" />
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <div className='d-flex aligm-items-center justify-content-center mt-5'>
                            <Link className={styles.book} href="#">VIEW All</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpTransforming
