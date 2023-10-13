import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/CrmExamples.module.css'
//images
import downArr from '../public/images/crmDev/bottom-direction.png'


const CrmExamples = (props) => {

    return (
        <>
            <section className={styles.crmExamples}>
                <Container className={styles.crmContainer}>
                    <Row className='aboutfold'>
                        <Col lg={12}>
                            <div className='text-center'>
                                {props.title}
                                <Image alt="bitswits" src={downArr} className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.crmExmSlide}>{props.slider}</div>
                        </Col>
                        <div className={styles.ttlBtm}>
                            <p>{props.text}</p>
                            <Link href="#" className={styles.btn}>ENQUIRE NOW</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CrmExamples