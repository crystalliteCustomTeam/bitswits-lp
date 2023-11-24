import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Hurdles.module.css";
//
import secImg from '../public/images/lp-images/hurdles.png'


const Hurdles = () => {
    return (
        <>
            <section className={styles.transform}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <div className={styles.walk}>
                                <h2 className='white font50 f-700'>App Development Hurdles?</h2>
                                <Image quality={95} alt='BitsWits' src={secImg} className='img-fluid my-4' />
                                <h3 className='white font40 f-700'>We Get It and We've Got Solutions</h3>
                                <Link href="#" className={styles.dus}>Talk To An Expert</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hurdles
