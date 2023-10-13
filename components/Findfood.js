import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Findfood.module.css'
import Image from 'next/image'
import Link from 'next/link'

import publication1 from '/public/images/fast/3.webp'

const Findfood = () => {
    return (
        <>

            <section className={styles.py120}>
                <Container>
                    <Row className={` ${styles.almost} gy-4`}>
                        <Col md={5}>

                            <Image quality={75} src={publication1} width="717" height="589" alt="bitswits" className="img-fluid"  />

                        </Col>
                        <Col md={6}>
                            <h2 className='font40 black fontf font-bold'>Find Food - <span className='grdiant'>Food Delivery App</span> </h2>
                            <p className='font14 black fontf font-medium'>The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. Food delivery options have emerged as popular options to order food from favorite restaurants without leaving their homes. And this, in turn, has caused a substantial change in consumer preferences.</p>
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

export default Findfood