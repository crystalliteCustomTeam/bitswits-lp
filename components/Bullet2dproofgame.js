import React from 'react'
import styles from "@/styles/Bullet2dproofgame.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import icon11 from '../public/newHomePageImages/run.png'

const Bullet2dproofgame = () => {
    return (

        <>
            <div className={styles.creative2}>


                <section className={styles.creative}>

                    <Container>

                        <Row className={styles.game}>
                            <Col xl={10}>
                                <h2 className='mb-5'> Attractive/Creative <br></br> Opportunities 2D <br></br> Games Development <br></br> Offers </h2>


                            </Col>


                        </Row>

                        <Row className={styles.boy}>
                            <Col xl={6} className={styles.colname}>

                                <div className={styles.dscool}>
                                    <div className={styles.gredient}>
                                        <h3>Improved Engagement</h3>
                                        <p>Since 2D games typically feature minimal graphics and fewer special effects, players with slow internet connections or limited hardware capabilities can easily enjoy them.</p>
                                    </div>
                                    <div className={styles.gredient}>
                                        <h3>Enhanced Engagement</h3>
                                        <p>With 2D games, businesses can amuse their customers with fun and interactive activities that keep them inquisitive about the products or services offered.</p>
                                    </div>
                                </div>


                                <div className={` ${styles.dscool} mt-3`}>
                                    <div className={styles.gredient}>
                                        <h3>Quicker To Develop</h3>
                                        <p>Due to the simpler coding process and fewer assets needed, 2D games can be developed in a shorter amount of time than 3D games.</p>
                                    </div>
                                    <div className={styles.gredient}>
                                        <h3>Cost-Effective</h3>
                                        <p>Developing games in 2D is a cost-effective way to produce top-notch quality games with minimal overhead costs.</p>
                                    </div>
                                </div>

                                <div className={` ${styles.dscool} mt-3`}>
                                    <div className={styles.gredient}>
                                        <h3>Accessible For All Players</h3>
                                        <p>The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed.</p>
                                    </div>
                                    <div className={styles.gredient}>
                                        <h3>Easier Maintenance</h3>
                                        <p>Since 2D games can be updated without major overhauls, businesses don't have to worry about the constant maintenance and bug fixes of 3D game development. This allows for faster iteration cycles and easier deployment of new content.</p>
                                    </div>
                                </div>



                            </Col>
                            <Col xl={6}>
                                <div className={styles.tested}>
                                    <Image quality={75} src={icon11} alt='bitswits' />
                                </div>


                            </Col>
                        </Row>
                    </Container>

                </section>

            </div>




        </>


    )
}

export default Bullet2dproofgame