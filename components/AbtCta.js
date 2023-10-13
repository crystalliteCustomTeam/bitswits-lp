import React from 'react'
import Link from 'next/link'
import styles from '@/styles/AbtCta.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const AbtCta = () => {
    return (
        <>
            <section className={styles.aboutCta}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='fontf font-bold white font40 mb-0'>
                                Let's start talking <br /> about your
                            </h2>
                            <h2 className='fontf font-bold font60 grdiant mb-2'>Next Project</h2>
                            <Link className={`${styles.project} mx-auto`} href="tel:(833) 500-6007">
                                (833) 500-6007
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AbtCta