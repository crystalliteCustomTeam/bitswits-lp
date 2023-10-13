import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Cuttingedge.module.css'
import Image from 'next/image'
import interface1 from '/public/images/interface/1.png'
import interface2 from '/public/images/interface/2.png'
import interface3 from '/public/images/interface/3.png'
import Link from 'next/link'

const Cuttingedge = () => {
    return (
        <>
            <section className={styles.cuttingedge}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className='font20 black fontf font-bold center'>OUR EXPERTISE FOCUSES AT</h3>
                            <h2 className='font50 black fontf font-bold center mb-5'>Embracing <span className='grdiant'> Cutting-Edge Design </span> Standards That Define The Industry</h2>
                        </Col>

                        <Col lg={4}>
                            <div className='center'>
                                <Image quality={75} src={interface1} className='img-fluid pt-4 pb-4' />
                                <h3 className='font20 black fontf font-bold center'>Voice User Interface (VUI)</h3>
                                <p className='font16 black fontf font-medium center'>By utilizing voice-based interactions, we help businesses to provide a more intuitive experience and create a stronger connection with their customers.</p>
                                <Link className='font-bold black' href='#'>Learn More</Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='center'>
                                <Image quality={75} src={interface2} className='img-fluid pt-4 pb-4' />
                                <h3 className='font20 black fontf font-bold center'>Augmented Reality (AR)</h3>
                                <p className='font16 black fontf font-medium center'>By incorporating AR into UI/UX design, we help businesses create engaging and immersive experiences that bring the digital world directly into the physical world.</p>
                                <Link className='font-bold black' href='#'>Learn More</Link>
                            </div>


                        </Col>
                        <Col lg={4}>
                            <div className='center'>
                                <Image quality={75} src={interface3} className='img-fluid pt-4 pb-4' />
                                <h3 className='font20 black fontf font-bold center'>Mobile-First Design</h3>
                                <p className='font16 black fontf font-medium center'>We develop with a mobile-first mindset that gives users smooth navigation on their smaller screens and allows them to access content easily, no matter what device they're using.</p>
                                <Link className='font-bold black' href='#'>Learn More</Link>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </section>




        </>
    )
}

export default Cuttingedge