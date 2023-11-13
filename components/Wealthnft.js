import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Wealthnft.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import isabella from '../public/newHomePageImages/ply3.png'
import Link from 'next/link';





const Wealth = () => {
    return (
        <>

            <section className={styles.weall}>
                <Container>
                    <Row className='gy-5'>
                        <Col xl={6} className={styles.table}>
                            <h3 className='white font20'>We'll Make Your NFT Game Dreams A Reality!</h3>
                            <h2>Be at the Forefront of Blockchain Technology  and Utilize NFT Games for Big Wins</h2>
                            <p>With our games, users have the power to create their own custom story and journey through the world of NFTs. To cut a long story short, we strive to marry our artistic vision with the latest technologies, allowing us to create stunning visuals and immersive experiences while maintaining excellent performance on all platforms.</p>

                            <Link href='#'>LET'S CONNECT</Link>
                        </Col>
                        <Col xl={6} >

                            <Image quality={75} alt='BitsWits' src={isabella} className='img-fluid' />

                        </Col>
                    </Row>
                </Container>

            </section>



        </>
    )
}

export default Wealth