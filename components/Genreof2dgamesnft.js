import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/Genreof2dgamesnft.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/gameicon/1nft.png"
import gameicon2 from "@/public/gameicon/2nft.png"
import gameicon3 from "@/public/gameicon/3nft.png"



const Genreof2dgamesnft = () => {
    return (
        <>
            <section className={styles.ourserve}>
                <Container>
                    <Row className={styles.which}>
                        <Col xl={12}>
                            <h3>Services</h3>
                            <h2>Unstoppable Fun: <br></br>
                                NFT Game Development Services</h2>
                        </Col>
                    </Row>
                    <Row className={` ${styles.play} gx-3 mt-5`}>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} src={gameicon1} className='img-fluid' />
                                <h3>NFT Game Concept Design</h3>
                                <p>We specialize in crafting engaging and entertaining NFT experiences through our unique approach to concept design and game mechanics. BitsWits is simply bridging the gap between concept and reality.</p>
                                <Link href='#'>Live Chat</Link>
                            </div>

                        </Col>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} src={gameicon2} className='img-fluid' />
                                <h3>Play-to-Earn Game
                                    Development</h3>
                                <p>With our Play-to-Earn NFT games, you can create a unique game that rewards players with valuable digital tokens as they progress through levels or missions. It’s a great way to monetize your gaming experience and earn money while playing video games.</p>
                                <Link href='#'>Live Chat</Link>
                            </div>

                        </Col>
                        <Col xl={4} className={styles.compelling}>
                            <div className={styles.bod}>
                                <Image quality={75} src={gameicon3} className='img-fluid' />
                                <h3>Custom NFT Game <br></br>
                                    Development</h3>
                                <p>We use our cutting-edge technology and industry-leading expertise to create high-quality non-fungible tokens that allow you to offer exclusive gaming experiences like no other. We specialize in building custom NFT games that are fun and engaging and provide a truly memorable gaming experience.</p>
                                <Link href='#'>Live Chat</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Genreof2dgamesnft