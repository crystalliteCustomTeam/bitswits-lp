import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Nothing.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import banImg1 from '../public/images/nothing/map.png'



export default function Nothing(props) {



    return (
        <>
            <section className={styles[props.Nothing]}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className="white f-30 f-500 center">Our Client’s Feedback Has Been</h3>
                            <h2 className="white f-60 f-700 center mb-5">Nothing Short Of Amazing!</h2>
                        </Col>
                        <Col lg={8}>
                            <Image src={banImg1} className='img-fluid' />
                        </Col>
                        <Col lg={4}>
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}

