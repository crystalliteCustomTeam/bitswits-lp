import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Cab.module.css'
import Image from 'next/image'
import Link from 'next/link'

import publication1 from '/public/images/cab/2.webp'

const Cab = () => {
    return (
        <>

            <section className={styles.py120}>
                <Container>
                    <Row className={` ${styles.almost} gy-4`}>
                        <Col md={7}>
                        <h2 className='font40 black fontf font-bold'>EZ Ride - <span className='grdiant'>Cab Service App</span> </h2>
                            <p className='font14 black fontf font-medium'>EZ Ride is a two-sided marketplace, a platform that connects drivers and riders, with a gamified interface that makes it simple for two sides to connect and transact. EZ Ride earns money by collecting fees from gross bookings on the platform—the EZ Ride platform benefits from two-sided network effects. As more drivers join the platform, it becomes (to a certain extent) more.</p>
                            <div className="mt-4">
                                <Link href="#" className={styles.sty} tabIndex="0">View Case Study</Link>
                                <div className="mt-4">
                                    <Link href="#" className={styles.projects}> View All Projects</Link>
                                </div>
                            </div>
                          

                        </Col>
                        <Col md={5}>
                           


                            <Image quality={75} src={publication1} width="717" height="589" alt="bitswits" className="img-fluid"  />
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Cab