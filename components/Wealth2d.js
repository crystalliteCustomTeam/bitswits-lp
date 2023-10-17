import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Wealth2d.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import isabella from '../public/newHomePageImages/ply2.png'
import Link from 'next/link';





const Wealth = () => {
    return (
        <>

            <section className={styles.weall}>
                <Container>
                    <Row>
                        <Col xl={6} className={styles.table}>
                            <h3 className='white font20'>The Best Game Developer In The Town</h3>
                            <h2>The Future Of 2D
                                Games Is Here – & We're Leading The Charge!</h2>
                            <p>Our 2D game developers use a combination of vibrant colors, intuitive controls, and engaging storylines to create something truly unique and always captivating. Our 2D game development services include concept creation, level design, character design, animation, asset integration, dynamic UI/UX design, programming, and debugging</p>

                            <Link href='#'>LET'S CONNECT</Link>
                        </Col>
                        <Col xl={6} className={styles.game}>

                            <Image quality={75} src={isabella} />

                        </Col>
                    </Row>
                </Container>

            </section>



        </>
    )
}

export default Wealth