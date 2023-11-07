import React from 'react'
import styles from "@/styles/Bullet2ddiscovergame.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import icon11 from '../public/newHomePageImages/donkey.png'

const Bullet2ddiscovergame = () => {
    return (

        <>
            <div className={styles.creative2}>


                <section className={styles.creative}>

                    <Container>

                        <Row className={styles.game}>
                            <Col xl={10}>
                                <h3>Bounties</h3>
                                <h2 className='mb-5'> Discover A World Of <br></br> Possibilities! </h2>


                            </Col>


                        </Row>

                        <Row className={styles.boy}>
                            <Col xl={6} className={styles.colname}>

                                <div className={styles.dscool}>
                                    <div>
                                        <h3>Unique Ownership</h3>
                                        <p>NFT game development allows digital assets, such as artwork and collectibles, to be securely owned with a unique, blockchain-based identifier. This enables users to own digital assets without being replicated or copied by other players.</p>
                                    </div>
                                    <div>
                                        <h3>Enhanced Interactivity</h3>
                                        <p>With NFT game development, players can interact directly with other players in various ways, from trading collectibles to participating in tournaments or competitions.</p>
                                    </div>
                                </div>


                                <div className={` ${styles.dscool} mt-3`}>
                                    <div>
                                        <h3>New Revenue Streams</h3>
                                        <p>Developers can create new ways for players to monetize their experiences, such as selling in-game items or running virtual markets with rare items. This opens up a whole new range of potential sources of income for players.</p>
                                    </div>
                                    <div>
                                        <h3>Increased Immersion</h3>
                                        <p>By leveraging the power of blockchain technology, NFT game development can provide an immersive gaming experience by allowing developers to create real-world objects and experiences within the game world.</p>
                                    </div>
                                </div>

                                <div className={` ${styles.dscool} mt-3`}>
                                    <div>
                                        <h3>Digital Authenticity</h3>
                                        <p>By using an immutable ledger, NFTs provide an unparalleled level of digital authenticity, ensuring that users can verify the ownership and provenance of their digital assets.</p>
                                    </div>
                                    <div>
                                        <h3>Open-Source Platforms</h3>
                                        <p>Many NFT game development platforms are open source, meaning players can help shape their games and contribute to their development. This allows for greater experimentation and creativity, resulting in a more engaging experience for players.</p>
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

export default Bullet2ddiscovergame