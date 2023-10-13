import React from 'react'
import styles from '@/styles/RideBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const RideBanner = () => {
    return (
        <>
            <section className={styles.rideBanner}>
                <Container>
                    <Row>
                        <Col lg={8} className='ms-auto'>
                            <div className={styles.contnt}>
                                <p className='black fontf font-medium'>
                                    EZ Ride is a two-sided marketplace, a platform that connects drivers and riders, with a gamified interface that makes it simple for two sides to connect and transact. EZ Ride earns money by collecting fees from gross bookings on the platform. The EZ Ride platform benefits from two-sided network effects. As more drivers join the platform, it becomes (to a certain extent) more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default RideBanner