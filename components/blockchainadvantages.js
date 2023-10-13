import React from 'react'
import styles from "@/styles/Blockchainadvanteg.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import AdvantageOne from '../public/blockchaindevelopment/images/advantage1.png'

const GameAdvantages = () => {
    return (

        <>
            <div className={styles.creative2}>


                <section className={styles.creative}>

                    <Container>

                        <Row className={styles.game}>
                            <Col xl={10}>
                                <p className='text-white font16 mb-0'>Bounties</p>
                                <h2 className='mb-5 '>Advantages Of <br></br> Blockchain For Gaming</h2>
                            </Col>


                        </Row>

                        <Row className={styles.boy}>
                            <Col xl={6}>

                                <div className={styles.dscool}>
                                    <div>
                                        <h3>Security</h3>
                                        <p>Blockchain technology offers game developers an unprecedented level of security, ensuring that users' accounts, valuable in-game items, and progress remain safe from hackers.</p>
                                    </div>
                                    <div>
                                        <h3>Smart Contracts</h3>
                                        <p>Through smart contracts, game developers can create automated, self-executing agreements that open up an entirely new level of flexibility when creating games.</p>
                                    </div>
                                </div>


                                <div className={` ${styles.dscool} mt-3`}>
                                    <div>
                                        <h3>Transparency</h3>
                                        <p>Players can keep track of the entire game's transactions and activities, authorizing greater trust and transparency in game development. This type of data integrity is beneficial for competitive games where players may be incentivized to succeed.</p>
                                    </div>
                                    <div>
                                        <h3>Improved Asset Management</h3>
                                        <p>Blockchain technology offers improved asset management for developers, allowing them to track and manage in-game items more accurately. This ensures players can quickly and easily access the items they need without any hassle.</p>
                                    </div>
                                </div>

                                <div className={` ${styles.dscool} mt-3`}>
                                    <div>
                                        <h3>Faster Transactions</h3>
                                        <p>Blockchain technology allows for near-instantaneous payments between players without any additional fees or middlemen. This ensures the in-game economies are vibrant and healthy, allowing for a better gaming experience.</p>
                                    </div>
                                    <div>
                                        <h3>Enhanced Interoperability</h3>
                                        <p>Blockchain technology finally enables the creation of more interoperable games, enabling players to exchange game assets and items across different platforms and devices, improving their gaming experience by eliminating the need to start from scratch each time they switch devices.</p>
                                    </div>
                                </div>



                            </Col>
                            <Col xl={6}>


                                <div className={styles.tested}>
                                    <Image quality={75} src={AdvantageOne} />
                                </div>


                            </Col>
                        </Row>
                    </Container>

                </section>

            </div>




        </>

    )
}

export default GameAdvantages