import React from 'react'
import Image from 'next/image';
import styles from "@/styles/Wework.module.css";
import { Container, Row, Col } from 'react-bootstrap'

//images
import startups1 from '../public/images/wework/1.png'
import startups2 from '../public/images/wework/2.png'
import startups3 from '../public/images/wework/3.png'

import Link from 'next/link';


export default function Wework(props) {



    return (
        <>
            <section className={styles[props.wework]}>
                <Container>
                    <Row className='align-items-center'>

                        <Col lg={12}>
                            <h2 className="white f-60 f-700 mb-4">
                                <span> We Work </span> With:
                            </h2>
                        </Col>
                    </Row>
                    <Row className={` ${styles.dem} gx-5 `}>
                        <Col lg={4}>
                            <Image alt='BitsWits' src={startups1} className='img-fluid mb-3' />
                            <h4 className='mt-5'>Pre-Seed & <br></br>
                                Seed Startups</h4>
                            <p>Create a pitch deck, research your idea, run
                                user interviews, and create MVP.</p>
                        </Col>
                        <Col lg={4}>
                            <Image alt='BitsWits' src={startups2} className='img-fluid mb-3' />
                            <h4 className='mt-5'>Startups <br></br>
                                that Scale</h4>
                            <p>Find your product-market fit, find the team
                                with the right skill set, and scale fast without
                                breaking things.</p>
                        </Col>
                        <Col lg={4}>
                            <Image alt='BitsWits' src={startups3} className='img-fluid mb-3' />
                            <h4 className='mt-5'>Businesses that  <br></br>
                                want to digitize</h4>
                            <p>Redesign and modernize your platform or SaaS, and
                                create new internal tools for better management.</p>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

