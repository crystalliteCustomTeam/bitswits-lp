import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewCaseServices.module.css";
//
import tick from '../public/images/new-case-page/tick.png'
//
import service1 from '../public/images/new-case-page/service1.png'
import service2 from '../public/images/new-case-page/service2.png'
import service3 from '../public/images/new-case-page/service3.png'
import service4 from '../public/images/new-case-page/service4.png'
import service5 from '../public/images/new-case-page/service5.png'


const NewCaseServices = () => {
    return (
        <>
            <section className={styles.services}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <div className={styles.content}>
                                <h3><span>Services:</span> For</h3>
                                <p>
                                    <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                    <span>Native Mobile App Development</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                    <span>Stunning UI/UX Design</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                    <span>Consumer/ Service Provider Interface</span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.servImg}>
                                <Image src={service1} alt="BitsWits" className={`img-fluid`} />
                                <Image src={service2} alt="BitsWits" className={`img-fluid`} />
                                <Image src={service3} alt="BitsWits" className={`${styles.serImg3} img-fluid`} />
                                <Image src={service4} alt="BitsWits" className={`img-fluid`} />
                                <Image src={service5} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewCaseServices
