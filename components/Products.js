import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Findfood.module.css'
import Image from 'next/image'
import Link from 'next/link'

import publication1 from '/public/images/gifimages/ourwork01.gif'

const Products = () => {
    return (
        <>

            <section className={styles.py120}>
                <Container>

                    <Row className={` ${styles.almost} ${styles.dono} gy-4`}>

                        <Col md={12} className='mb-5'>
                            <h4 className='font16 black fontf font-bold center'> OUR UNDERTAKINGS </h4>
                            <h2 className='font50 black fontf font-bold center'> Bringing Creativity and <span className='grdiant'>Innovation Together</span> to <span className='grdiant'> Create Digital Products </span> That Hold True Value </h2>

                        </Col>
                        </Row>
                        <Row className={` ${styles.almost} ${styles.dono} gy-4`}>
                        <Col md={6}>
                            <h4 className='font16 black fontf font-bold'> BRANDING </h4>
                            <h2 className='font40 black fontf font-bold'> Dazzling <span className='grdiant'>User Experiences</span> That Are Positioned For your Success </h2>
                            <p className='font14 black fontf font-medium'>From wireframes to prototypes, typography to color palettes, our team is devoted to crafting an experience that will leave you feeling satisfied and excited. We test our designs on real users to ensure the user experience is painless and enjoyable for all involved.</p>

                        </Col>
                        <Col md={5}>

                            <Image quality={75} src={publication1} width="717" height="589" alt="bitswits" className="img-fluid" />

                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Products