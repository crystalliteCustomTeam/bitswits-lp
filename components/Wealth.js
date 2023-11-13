import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Wealth.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import isabella from '../public/newHomePageImages/playgame.png'
import Link from 'next/link';





const Wealth = () => {
    return (
        <>

            <section className={styles.weall}>
                <Container>
                    <Row>
                        <Col xl={6} className={styles.table}>
                            <h2>Leverage Our 
                                Proficiency in Mobile 
                                Game Development 
                                Today</h2>
                            <p>Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy.</p>

                            <Link href='#'>LET'S CONNECT</Link>
                        </Col>
                        <Col xl={6} className={styles.game}>

                            <Image quality={75} alt='BitsWits' src={isabella}  />
                           
                        </Col>
                    </Row>
                </Container>

            </section>



        </>
    )
}

export default Wealth