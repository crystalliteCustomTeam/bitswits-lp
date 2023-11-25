import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Innovate.module.css'
import icon20 from '../public/images/mobilelpfinal/layout.png'


const Innovate = () => {




    return (
        <>

            <section className={styles.innovate}>

                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <h2 className={styles.lead}>Innovate Today, Lead Tomorrow</h2>
                                <h4 className={styles.excellence}>Your App's Journey To Excellence Starts Now!</h4>
                                <p className={styles.launching}>Whether launching a startup or elevating an established brand, your target is clear.</p>
                                <p className={styles.just}>USER ADOPTION, TECHNICAL BRILLIANCE & MARKET DOMINANCE.</p>
                                <p className={styles.potential}>The key to unlocking these? An app that's not just good, but groundbreaking.</p>
                                <p className={styles.need}>Pause for a Moment...</p>
                                <p className={styles.turn}>What's Holding Back Your App's Potential?</p>
                                <div>
                                    <Image src={icon20} className='img-fluid mb-5' alt="bitswits" />
                                </div>
                                <p className={styles.journey}>Sound familiar? Then, you're exactly where you need to be!</p>
                                <p className={styles.exactly}>Our Mobile App Development Solutions is at the forefront of technological innovation, renowned for:</p>
                                <p className={styles.solutions}>CUSTOMIZED APP STRATEGIES, CUTTING-EDGE TECHNOLOGIES, & UNRIVALED USER JOURNEYS.</p>
                                <p className={styles.whether}>The time to act is now. Embark on your journey to turn your app into a market sensation with us, where every challenge is an opportunity for greatness.</p>
                                <p className={styles.journey}>Step into the Limelight: Let’s Build Apps That Set Trends</p>
                                <h3 className={styles.build}>We Get It and We've Got Solutions</h3>
                            </div>
                            <div>
                                <Link className={styles.expert} href='#'>Talk To An Expert</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Innovate