import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Solution.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import Solution from '../public/3d-game-development/images/solution.png'

const New3dSolutions = () => {

    return (
        <>

            <section className={styles.home}>
                <Container className='qtech'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h2 className='font55 font-bold mb-3'>Create Engaging
                                Worlds with Our 3D
                                Game Development
                                Studio!</h2>
                            <p className='text-white f-16 pb-2'>BitsWits creates highly interactive and immersive 3D games that take players on an unforgettable journey into a thrilling world of realism. Our services feature designing complex characters, environments, objects, and textures, animating scenes, creating realistic physics for game objects to interact with each other, and integrating user controls and interfaces. From designing and developing 3D models to producing and integrating game logic, we provide end-to-end solutions for creating cutting-edge gaming experiences.
                            </p>
                            <Link className={styles.about} href="#">LET's CONNECT</Link>
                        </Col>
                        <Col lg={6}>
                            <Image quality={75} alt='BitsWits' src={Solution} className='img-fluid mt-5 mt-lg-0'/>
                        </Col>
                    </Row>
                </Container>
            </section>



        </>
    )
}

export default New3dSolutions