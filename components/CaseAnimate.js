import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseAnimate.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const CaseAnimate = (props) => {
    return (
        <>
            <section className={`${styles.animate}`}>
                <Container>
                    <Row className='align-items-end'>
                        <Col md={4} className='px-md-0 col-4'>
                            <div className={styles.imgBox}>
                                <Image quality={90} src={props.animiImg1} alt="BitsWits" className={`${styles.secImg} img-fluid`} />

                            </div>
                        </Col>
                        <Col md={4} className='px-md-0 col-4'>
                            <div className={styles.imgBox}>
                                <Image quality={90} src={props.animiImg2} alt="BitsWits" className={`${styles.secImg2} img-fluid`} />
                            </div>
                        </Col>
                        <Col md={4} className='px-md-0 col-4'>
                            <div className={styles.imgBox}>
                                <Image quality={90} src={props.animiImg3} alt="BitsWits" className={`${styles.secImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseAnimate
