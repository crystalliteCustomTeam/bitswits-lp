import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseAnimate.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const CaseAnimate = (props) => {
    return (
        <>
            <section className={`${styles.animate}`}>
                <Container>
                    <Row>
                        <Col md={4} className='px-md-0'>
                            <div className={styles.imgBox}>
                                <Image src={props.animiImg1} alt="bitswits" className={`${styles.secImg} img-fluid`} />

                            </div>
                        </Col>
                        <Col md={4} className='px-0'>
                            <div className={styles.imgBox}>
                                <Image src={props.animiImg2} alt="bitswits" className={`${styles.secImg2} img-fluid`} />
                            </div>
                        </Col>
                        <Col md={4} className='px-0'>
                            <div className={styles.imgBox}>
                                <Image src={props.animiImg3} alt="bitswits" className={`${styles.secImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseAnimate
