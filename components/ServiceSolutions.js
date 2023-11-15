import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ServiceSolutions.module.css'


const ServiceSolutions = (props) => {

    return (
        <>
            <section className={`${styles.home} ${styles[props.addClass]}`}>
                <Container className='qtech'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h3 className='white font20'>{props.subTitle}</h3>
                            <h2 className='font55 font-bold mb-3'>{props.title}</h2>
                            <p className='text-white f-16 pb-2'>{props.text}</p>
                            <Link className={styles.about} href="#">LET's CONNECT</Link>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.solImg}>
                                <Image quality={75} alt='BitsWits' src={props.Solution} className='img-fluid mt-5 mt-lg-0' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceSolutions