import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
//
import styles from '@/styles/OurWork.module.css'
//
import ourportfolio1 from '../public/images/ourwork/find-food-mobs.png'
import ourportfolio2 from '../public/images/ourwork/sound-mobs.png'
import ourportfolio3 from '../public/images/ourwork/pro-health-mobs.png'
import ourportfolio4 from '../public/images/ourwork/ez-ride-mobs.png'
import ourportfolio5 from '../public/images/ourwork/blis-travel-mobs.png'
import ourportfolio6 from '../public/images/ourwork/market-place-mob.png'


const OurWork = () => {
    return (
        <>
            <section className={`${styles.workBg} ${styles.food}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <div>
                                    <h4>Find Food</h4>
                                    <p>
                                        The increasing inclination towards technology has changed almost every facet of life. And the food delivery industry is no different. Today, people order food, be it junk or homemade, to be delivered right to their doorstep. And this, in turn, has caused a substantial change in consumer preferences. Nowadays, most, if not all, food outlets work in collaboration with food delivery companies to reach a wide range of audiences and expand their business.
                                    </p>
                                    <Link className={styles.bttns1} href="#">Book a Call</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <div>
                                    <Image quality={75} src={ourportfolio1} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.sound}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <div>
                                    <h4>SoulSound</h4>
                                    <p>
                                        SoulSound, the world's largest music and audio platform allow people to discover and enjoy the most diverse creator community on the planet. Since its inception, the platform has gained a reputation for its distinctive content and features, such as the ability to share music and connect directly with artists and unearth breakthrough tracks, raw demos, podcasts, and more.
                                    </p>
                                    <Link className={styles.bttns1} href="#">Book a Call</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <div>
                                    <Image quality={75} src={ourportfolio2} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.health}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <div>
                                    <h4>PROHealth</h4>
                                    <p>
                                        PROHealth – Since 1965, PROHealth has served as a locally operated community pharmacy in the USA. They pride themselves on offering prompt and courteous service and offer patients a one-stop shop for all of their pharmaceutical needs. Long-term care services, medication synchronization, and medicine flavoring are just a few of the many services offered by CS Pharma.
                                    </p>
                                    <Link className={styles.bttns1} href="#">Book a Call</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <div>
                                    <Image quality={75} src={ourportfolio3} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.ride}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <div>
                                    <h4>EZ Ride</h4>
                                    <p>
                                        EZ Ride is a two-sided marketplace, a platform that connects drivers and riders, with a gamified interface that makes it simple for two sides to connect and transact. EZ Ride earns money by collecting fees from gross bookings on the platform. The EZ Ride platform benefits from two-sided network effects. As more drivers join the platform, it becomes (to a certain extent) more valuable to riders (as they can find more route options, more pricing options, and lower wait times).
                                    </p>
                                    <Link className={styles.bttns1} href="#">Book a Call</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <div>
                                    <Image quality={75} src={ourportfolio4} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.travel}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <div>
                                    <h4>BLISS Travel</h4>
                                    <p>
                                        Established with the intention of giving unique and once-in-a-lifetime travel experiences to people touring the world, one of the most reputable travel companies, Gateway Tour Agency, works hard to provide people with top-notch quality services. In addition, the travel agency creates unique, personalized packages that not only meet but even go beyond expectations.
                                    </p>
                                    <Link className={styles.bttns1} href="#">Book a Call</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <div>
                                    <Image quality={75} src={ourportfolio5} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.workBg} ${styles.mark}`}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={6}>
                            <div className={styles.workText}>
                                <div>
                                    <h4>Mark Place</h4>
                                    <p>
                                        Brick Properties has made a name for itself as one of Mississippi's top real estate networks, bringing together thousands of international buyers and sellers of real estate. For the past 8 years, they have offered competent real estate services. Brick Properties' team advises clients on the finest investment options, thoroughly researches lucrative investment opportunities for them, and keeps them informed about ongoing and upcoming projects.
                                    </p>
                                    <Link className={styles.bttns1} href="#">Book a Call</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.workImg}>
                                <div>
                                    <Image quality={75} src={ourportfolio6} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurWork
