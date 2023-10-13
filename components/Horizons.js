import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Horizons.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Horizons = (props) => {
    return (
        <>
            <section className={styles.soulHorizons}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.heading}>
                                {props.uncovered}
                            </div>

                            <div className={styles.contnt}>
                                {props.covered}
                                {props.data}
                                {props.data2}
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.horizImg}>
                                <Image  alt="bitswits"     src={props.foldImg00}  className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Horizons